# threagile-builder/scr/threagile_builder/utils/app_utils.py
import logging

from apiflask import APIFlask
from config import Config
from flask import Flask


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

    @app.route("/")
    def index():
        return "<h1>Hello World</h1>"

    return app
