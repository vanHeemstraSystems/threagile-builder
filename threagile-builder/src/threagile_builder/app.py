# threagile-builder/src/threagile_builder/app.py
from utils import create_app

app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
