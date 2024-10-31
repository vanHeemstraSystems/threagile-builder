# threagile-builder/scr/threagile_builder/forms/build_form_.py
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired


class BuildForm(FlaskForm):
    title = StringField("Build Title", validators=[DataRequired()])
    submit = SubmitField("Create Build")
