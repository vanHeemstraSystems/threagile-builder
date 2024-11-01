# threagile-builder/scr/threagile_builder/utils/app_utils.py
from config import Config
from flask import Flask


def create_app(config=Config):
    app = Flask(__name__)
    app.config.from_object(config)

    @app.route("/")
    def index():
        return "<h1>Hello World</h1>"

    return app
