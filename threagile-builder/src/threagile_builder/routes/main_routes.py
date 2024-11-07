# threagile-builder/src/threagile_builder/routes/main_routes.py
import logging
from apiflask import APIBlueprint
from flask import render_template, redirect, url_for, flash
# from forms import BuildForm
# from models import Build
# from utils.db_utils import db

main_bp = APIBlueprint("main", __name__)


@main_bp.route("/", methods=["GET", "POST"])
def index():
    # form = BuildForm()
    # if form.validate_on_submit():
    #     new_build = Build(title=form.title.data)
    #     db.session.add(new_build)
    #     db.session.commit()
    #     flash("Build created successfully!", "success")
    #     return redirect(url_for("main.index"))
    logging.info("Rendering the main page.")
    # builds = Build.query.all()
    # return render_template("index.html", form=form, builds=builds)
    return render_template("index.html")

# # MOVE TO BUILD ROUTES
# @main_bp.route("/builds/<int:id>/edit", methods=["GET", "POST"])
# def edit_build(id):
#     build = Build.query.get_or_404(id)
#     form = BuildForm(obj=build)
#     if form.validate_on_submit():
#         build.title = form.title.data
#         db.session.commit()
#         flash("Build updated successfully!", "success")
#         return redirect(url_for("main.index"))
#     return render_template("build/edit_build.html", form=form, build=build)

# # MOVE TO BUILD ROUTES
# @main_bp.route("/builds/<int:id>/delete", methods=["POST"])
# def delete_build(id):
#     build = Build.query.get_or_404(id)
#     db.session.delete(build)
#     db.session.commit()
#     flash("Build deleted successfully!", "success")
#     return redirect(url_for("main.index"))
