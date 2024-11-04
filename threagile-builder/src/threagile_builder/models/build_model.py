# threagile-builder/src/threagile_builder/models/build_model.py
from utils.db_utils import db


class Build(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
