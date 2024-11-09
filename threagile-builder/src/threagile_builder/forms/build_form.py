# threagile-builder/src/threagile_builder/forms/build_form_.py
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, TextAreaField
from wtforms.validators import DataRequired


class BuildForm(FlaskForm):
    title = StringField("Build Title", validators=[DataRequired()])
    description = TextAreaField('Description')
    code = TextAreaField('Code')
    submit = SubmitField("Submit")
