# threagile-builder/src/threagile_builder/app.py
import os
from utils import create_app

# from flask import *
# app = Flask(__name__)

# @app.route("/")
# def index():
#   return "<h1>Hello World</h1>"

# if __name__ == "__main__":
#   app.run(host="0.0.0.0", port=8080, debug=False)

app = create_app()

if __name__ == "__main__":
    app.run(debug=True, host=os.getenv('IP', '0.0.0.0'), 
            port=int(os.getenv('PORT', 5000)))