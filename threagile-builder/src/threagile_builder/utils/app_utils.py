# threagile-builder/src/threagile_builder/utils/app_utils.py
import logging
from .db_utils import db
from apiflask import APIFlask
from config import Config
# NOT REQUIRED from flask import Flask

from multiprocessing.pool import ThreadPool

from opentelemetry import trace, metrics
from opentelemetry.instrumentation.flask import FlaskInstrumentor
from opentelemetry.instrumentation.sqlalchemy import SQLAlchemyInstrumentor
from opentelemetry.sdk.resources import SERVICE_NAME, Resource
from opentelemetry.sdk.metrics import MeterProvider
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.exporter.prometheus import PrometheusMetricReader
from opentelemetry.sdk.metrics.export import PeriodicExportingMetricReader
from prometheus_client import start_http_server
from routes import build_bp, main_bp

def create_app(config=Config):
    app = APIFlask(
        __name__,
        static_url_path="/static",
        static_folder="../static",
        template_folder="../templates",
    )
    app.config.from_object(config)

    # Configure logging
    logging.basicConfig(
        level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s"
    )    

    # Set up OpenTelemetry
    # See https://opentelemetry.io/docs/languages/python/exporters/#prometheus
    resource = Resource(attributes={SERVICE_NAME: "threagile-builder-app"})
    trace.set_tracer_provider(TracerProvider(resource=resource))
    metrics.set_meter_provider(MeterProvider(resource=resource))

    # Create a meter
    meter = metrics.get_meter(__name__)

    # Start Prometheus client
    # See https://opentelemetry.io/docs/languages/python/exporters/#prometheus
    # start_http_server(port=8888, addr="localhost") # Causes port is alreday in use
    # See https://stackoverflow.com/questions/44793164/prometheus-python-client-error-address-already-in-use
    pool = ThreadPool(1)
    pool.apply_async(start_http_server, (9464, 'localhost'))  # start prometheus in a different thread that app
    # Initialize PrometheusMetricReader which pulls metrics from the SDK
    # on-demand to respond to scrape requests
    reader = PrometheusMetricReader()
    provider = MeterProvider(resource=resource, metric_readers=[reader])
    metrics.set_meter_provider(provider)            

    # Initialize database
    db.init_app(app)

    # Register blueprints
    app.register_blueprint(main_bp, url_prefix='/')
    app.register_blueprint(build_bp, url_prefix='/builds')

    # Define metrics
    request_count = meter.create_counter(
        "request_count", description="Counts the number of requests"
    )    

    @app.before_request
    def before_request():
        request_count.add(1)  # Increment the request count

    # See https://github.com/open-telemetry/opentelemetry-python/blob/main/exporter/opentelemetry-exporter-prometheus/src/opentelemetry/exporter/prometheus/__init__.py
    @app.route("/metrics")
    def metrics_endpoint():
        exporter = PrometheusMetricReader()
        return  0 # fix

    # Instrument Flask and SQLAlchemy
    # FlaskInstrumentor().instrument_app(app)
    # SQLAlchemyInstrumentor().instrument(engine=db.engine)

    # # Fore Testing Only
    # @app.route("/")
    # def index():
    #     return "<h1>Hello World</h1>"

    # Create the database tables (if they don't exist)
    with app.app_context():
        db.create_all()

    return app
