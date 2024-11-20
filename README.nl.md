threagile-bouwer

# Threagile-bouwer

|        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CI/CD  | [![CI - Test](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/test.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/test.yml)[![CD - Build](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/build.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/build.yml)                                                                                                                                                                                                    |
| Pakket | [![PyPI - Version](https://img.shields.io/pypi/v/threagile-builder.svg?logo=pypi&label=PyPI&logoColor=gold)](https://pypi.org/project/threagile-builder/)[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/threagile-builder.svg?logo=python&label=Python&logoColor=gold)](https://pypi.org/project/threagile-builder/)                                                                                                                                                                                                                                                                 |
| Meta   | [![Hatch project](https://img.shields.io/badge/%F0%9F%A5%9A-Hatch-4051b5.svg)](https://github.com/pypa/hatch)[![code style - black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)[![types - Mypy](https://img.shields.io/badge/types-Mypy-blue.svg)](https://github.com/ambv/black)[![License - MIT](https://img.shields.io/badge/license-MIT-9400d3.svg)](https://spdx.org/licenses/)[![GitHub Sponsors](https://img.shields.io/github/sponsors/vanHeemstraSystems?logo=GitHub%20Sponsors&style=social)](https://github.com/sponsors/vanHeemstraSystems) |

* * *

> A[op blokken gebaseerd](https://developers.google.com/blockly)no-code webapplicatie om te maken[ragiel](https://threagile.io)YAML-bestanden

-   [Glossarium](./GLOSSARY.md)
-   [Referenties](./REFERENCES.md)
-   [Documentatie](./DOCUMENTATION.md)

**Samenvatting**

Uw code op uw eigen systeem operationeel krijgen.

**Opmerking**: Zorg ervoor dat u voldoet aan de[vereisten](./200/README.md).

1.  Installatieproces:
    ```bash
    $ cd threagile-builder
    $ hatch version # optional, will print the version of our package to the terminal without modifying the source directory (e.g. `0.0.1`).
    # Without hatch: $ python src/threagile_builder/app.py
    $ hatch env create # optional, if the default env already exists you will be told
    $ hatch shell # spawn a shell within an environment
    (threagile-builder) $ pip show threagile-builder # optional, shows the project details, here 'threagile-builder', from `pyproject.toml`
    # Name: threagile-builder
    # Version: 0.0.1 # it takes this from src/threagile_builder/__about__.py
    # ...
    (threagile-builder) $ python -c "import sys;print(sys.executable)" # optional, see where your environment's python is located
    (threagile-builder) $ exit # type `exit` to leave the environment
    $ hatch run pip install --upgrade pip # optional, the `run` command allows you to execute commands in an environment as if you had already entered it.
    $ hatch run pip install -r requirements.txt # pipx won't do this
    $ hatch run python -m setuptools_scm # optional, display the version of our package and perform any side-effects like writing to a file. (here: `_version.py`)
    $ hatch run python src/threagile_builder/app.py # starts the app 
    ```
2.  Software-afhankelijkheden
3.  Nieuwste releases
4.  API-referenties
5.  Bouwen en testen:

    Om uw code samen te stellen, gebruikt u:

    ```bash
    $ cd threagile-builder
    $ hatch build
    ```

    Om AI te gebruiken voor beoordelingen van pull-aanvragen, gebruikt u:

    <https://app.coderabbit.ai/dashboard>(gebruikt`phpstan.neon`)

    Om de applicatie uit te voeren, gebruikt u:

    Linux:

    ```bash
    $ export SECRET_KEY="secret"
    ```

    Ramen:

    ```bash
    $ setx SECRET_KEY secret
    ```

    Dan:

    ```bash
    $ cd threagile-builder
    # Without hatch: $ python src/threagile_builder/app.py
    $ hatch run python src/threagile_builder/app.py
    ```

    Navigeer vervolgens naar`http://127.0.0.1:5000/`in uw webbrowser.

    Om tests uit te voeren, gebruikt u:

    ```bash
    $ cd threagile-builder
    $ pip install pytest # optional
    $ pytest tests/
    ```

# API-documentatie

Navigeer naar`http://127.0.0.1:5000/docs`in uw webbrowser, of download de openapi.json van`http://127.0.0.1:5000/openapi.json`.

# Statistieken

Laat een stuk gereedschap als Prometheus schrapen`http://127.0.0.1:9464/metrics`.

**_NIEUW_**

**Inhoudsopgave**

-   [Installatie](#installation)
-   [Versiebron](#version-source)
-   [Omgevingen](#environments)
-   [Bouwen](#build)
-   [Licentie](#license)

## Installatie

```console
pip install threagile-builder
```

## Versiebron

-   De[hatch-vcs](https://github.com/ofek/hatch-vcs)versiebronplug-in bepaalt de projectversie met behulp van Git-tags

## Omgevingen

-   Netjes gedefinieerd in een standalone[`hatch.toml`](https://hatch.pypa.io/latest/intro/#configuration)
-   De`test`matrix maakt gebruik van de[luikcontainers](https://github.com/ofek/hatch-containers)plug-in om elke omgeving binnen Docker-containers uit te voeren; gebruik is te zien in de[test](.github/workflows/test.yml)GitHub-workflow

## Bouwen

-   Alle bouwdoelen gebruiken de[hatch-vcs](https://github.com/ofek/hatch-vcs)bouw een hook-plug-in om een`_version.py`bestand zodat de versie tijdens runtime kan worden gebruikt
-   Wielen gebruiken de[hatch-mypyc](https://github.com/ofek/hatch-mypyc)bouw hook-plug-in om eerst alle code mee te compileren[Mijnpyc](https://github.com/mypyc/mypyc)
-   De[bouwen](.github/workflows/build.yml)De GitHub-workflow laat zien hoe u:
    -   gebruik[cibuildwiel](https://github.com/pypa/cibuildwheel)om binaire wielen voor elk platform te distribueren
    -   gebruik de[app](https://hatch.pypa.io/latest/plugins/builder/app/)build target om zelfstandige distributies voor elk platform te bouwen

## Licentie

`threagile-builder`wordt verspreid onder de voorwaarden van de[MET](https://spdx.org/licenses/MIT.html)licentie.

## 100 - Introduction

Zien[README.md](./100/README.md)

## 200 - Vereisten

Zien[README.md](./200/README.md)

## 300 - Onze applicatie bouwen

Zien[README.md](./300/README.md)

## 400 - Conclusie

Zien[README.md](./400/README.md)
