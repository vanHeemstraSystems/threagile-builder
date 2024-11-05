# threagile-builder/src/threagile_builder/routes/build_routes.py
import json
import logging
from apiflask import APIBlueprint
from flask import request, jsonify
from models import Build
from utils.db_utils import db
from workflows import build_workflow


build_bp = APIBlueprint("build", __name__)


# Create a Build
@build_bp.route("/builds", methods=["POST"])
def create_build():
    data = request.json
    new_build = Build(title=data["title"])
    db.session.add(new_build)
    db.session.commit()
    return jsonify({"id": new_build.id, "title": new_build.title}), 201


# Read all Builds
@build_bp.route("/builds", methods=["GET"])
def get_builds():
    builds = Build.query.all()
    return jsonify([{"id": build.id, "title": build.title} for build in builds]), 200


# Read a single Build by ID
@build_bp.route("/builds/<int:id>", methods=["GET"])
def get_build(id):
    build = Build.query.get_or_404(id)
    return jsonify({"id": build.id, "title": build.title}), 200


# Update a Build by ID
@build_bp.route("/builds/<int:id>", methods=["PUT"])
def update_build(id):
    build = Build.query.get_or_404(id)
    data = request.json
    build.title = data["title"]
    db.session.commit()
    return jsonify({"id": build.id, "title": build.title}), 200
  

# Delete a Build by ID
@build_bp.route("/builds/<int:id>", methods=["DELETE"])
def delete_build(id):
    build = Build.query.get_or_404(id)
    db.session.delete(build)
    db.session.commit()
    flash("Build deleted successfully!", "success")
    return jsonify({"message": "Build deleted successfully."}), 204

# Run Build Workflow
@build_bp.route("/run-build", methods=["POST"])
def run_build():
    logging.info("Received request to run the Build's workflow.")
    try:
        data = json.loads(request.data)
        yaml_result = build_workflow()
        print(f"yaml_result: ", {yaml_result})
        json_result = json.dumps(yaml_result) # json.dump() needs a file, json.dumps() does not
        print(f"json_result: ", {json_result})
        return json_result, 200
    except Exception as e:
        logging.error(f"Error occurred while running the workflow: {e}")
        return {"error": "An error occurred while processing your request."}, 500
