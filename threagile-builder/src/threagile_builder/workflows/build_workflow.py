# src/threagile_builder/workflows/build_workflow.py
import logging
import yaml
from prefect import flow, task


@task
def get_data_assets():
    return {"data_assets": "Data Assets"}


@task
def get_technical_components():
    return {"technical_components": "Technical Components"}


@task
def get_communication_links():
    return {"communication_links": "Communication Links"}


@task
def get_trust_boundaries():
    return {"trust_boundaries": "Trust Boundaries"}


@task    
def combine_results(*results):
    combined = {}
    for result in results:
        combined.update(result)
    return combined    


@task
def to_yaml(data):
    print("data:", data) # for testing purposes only
    yaml_dumped = yaml.dump(data)
    print("yaml_dumped:", yaml_dumped) # for testing purposes only
    return yaml_dumped


@flow
def build_workflow():
    data_assets = get_data_assets()
    technical_components = get_technical_components()
    communication_links = get_communication_links()
    trust_boundaries = get_trust_boundaries()
    combined_results = combine_results(
        data_assets, 
        technical_components, 
        communication_links, 
        trust_boundaries
    )
    yaml_output = to_yaml(combined_results)
    print("yaml_output: ", yaml_output)
    return yaml_output
