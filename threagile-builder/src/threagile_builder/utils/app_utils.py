# threagile-builder/scr/threagile_builder/utils/app_utils.py
from flask import Flask

def create_app():
    app = Flask(__name__)

    @app.route("/")
    def index():
      return "<h1>Hello World</h1>"

    return app