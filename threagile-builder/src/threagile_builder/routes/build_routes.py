# threagile-builder/src/threagile_builder/routes/build_routes.py
import execjs
import json
import logging
from apiflask import APIBlueprint
from flask import render_template, request, jsonify, redirect, url_for
from forms import BuildForm
from models import Build
from utils.db_utils import db
# from workflows import build_workflow


build_bp = APIBlueprint("build", __name__)

# New Build
@build_bp.route('/new', methods=["GET", "POST"])
def new_build():
    form = BuildForm()
    if form.validate_on_submit():
        new_build = Build(title=form.title.data, description=form.description.data)
        db.session.add(new_build)
        db.session.commit()
        return redirect(url_for('build.list_builds'))
    return render_template('build/new_build.html', form=form)


# Create a Build
@build_bp.route("/", methods=["POST"])
def create_build():
    data = request.json
    new_build = Build(title=data["title"])
    db.session.add(new_build)
    db.session.commit()
    return jsonify({"id": new_build.id, "title": new_build.title}), 201


# List all Builds
@build_bp.route('/')
def list_builds():
   builds = Build.query.all()
   return render_template('build/builds.html', builds=builds)


# # Read all Builds
# @build_bp.route("/", methods=["GET"])
# def get_builds():
#     builds = Build.query.all()
#     return jsonify([{"id": build.id, "title": build.title} for build in builds]), 200


# Read a single Build by ID
@build_bp.route("/<int:build_id>", methods=["GET"])
def get_build(build_id):
    build = Build.query.get_or_404(build_id)
    return jsonify({"build_id": build.id, "title": build.title}), 200


# Update a Build by ID
@build_bp.route("/<int:build_id>", methods=["PUT"])
def update_build(build_id):
    build = Build.query.get_or_404(build_id)
    data = request.json
    build.title = data["title"]
    db.session.commit()
    return jsonify({"build_id": build.id, "title": build.title}), 200


# Delete a Build by ID
@build_bp.route("/<int:build_id>", methods=["DELETE"])
def delete_build(build_id):
    build = Build.query.get_or_404(build_id)
    db.session.delete(build)
    db.session.commit()
    # return jsonify({"message": "Build deleted successfully."}), 204
    return redirect(url_for("build.list_builds"))


# Edit a Build
@build_bp.route("/<int:build_id>/edit", methods=["GET", "POST"])
def edit_build(build_id):
    build = Build.query.get_or_404(build_id)
    form = BuildForm(obj=build)
    if form.validate_on_submit():
        build.title = form.title.data
        build.description = form.description.data
        db.session.commit()
        # flash("Build updated successfully!", "success")
        return redirect(url_for("build.list_builds"))
    return render_template("build/edit_build.html", form=form, build=build)


# # Run a Build
# @build_bp.route("/run-build", methods=["POST"])
# def run_build():
#     logging.info("Received request to run the Build's workflow.")
#     try:
#         data = json.loads(request.data)
#         yaml_result = build_workflow()
#         print(f"yaml_result: ", {yaml_result})
#         json_result = json.dumps(yaml_result) # json.dump() needs a file, json.dumps() does not
#         print(f"json_result: ", {json_result})
#         return json_result, 200
#     except Exception as e:
#         logging.error(f"Error occurred while running the workflow: {e}")
#         return {"error": "An error occurred while processing your request."}, 500


# # Execute Code
# @build_bp.route("/execute-code", methods=["POST"])
# def execute_code():
#     logging.info("Received request to run the Build's execute code workflow.")
#     try:
#         code = request.json.get('code')
#         # Execute the code using execjs (support for Javascript execution)
#         context = execjs.compile(code)
#         print("code: ", code) # For testing purposes only! NOW DO SOMETHING WITH THIS code IN YOUR FLOWS !
#         result = context.call('main') # Assuming main is the entry function
#         return jsonify({"result": result}), 200
#     except Exception as e:
#         logging.error(e)
#         return {"error": "An error occured while processing your request."}    

