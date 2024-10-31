# src/threagile_builder/workflows/build_workflow.py
from prefect import flow, task


@task
def apple():
    return "Apple"


@task
def banana():
    return "Banana"


@task
def chocolate():
    return "Chocolate"


@task
def dumpling():
    return "Dumpling"


@task
def elderberry():
    return "Elderberry"


@task
def fig():
    return "Fig"


@task
def grapefruit():
    return "Grapefruit"


@task
def huckleberries():
    return "Huckleberries"


@task
def icecream():
    return "Icecream"


@task
def jackfruit():
    return "Jackfruit"


@flow
def build_workflow():
    myApple = apple()
    myBanana = banana()
    myChocolate = chocolate()
    myDumpling = dumpling()
    myElderberry = elderberry()
    myFig = fig()
    myGrapefruit = grapefruit()
    myHuckleberries = huckleberries()
    myIcecream = icecream()
    myJackfruit = jackfruit()

    return {
        "apple": myApple,
        "banana": myBanana,
        "chocolate": myChocolate,
        "dumpling": myDumpling,
        "elderberry": myElderberry,
        "fig": myFig,
        "grapefruit": myGrapefruit,
        "huckleberries": myHuckleberries,
        "icecream": myIcecream,
        "jackfruit": myJackfruit,
    }
