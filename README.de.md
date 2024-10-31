Threagile-Builder

# Threagile Builder

|       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CI/CD | [![CI - Test](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/test.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/test.yml)[![CD - Build](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/build.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/build.yml)                                                                                                                                                                                                    |
| Paket | [![PyPI - Version](https://img.shields.io/pypi/v/threagile-builder.svg?logo=pypi&label=PyPI&logoColor=gold)](https://pypi.org/project/threagile-builder/)[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/threagile-builder.svg?logo=python&label=Python&logoColor=gold)](https://pypi.org/project/threagile-builder/)                                                                                                                                                                                                                                                                 |
| Meta  | [![Hatch project](https://img.shields.io/badge/%F0%9F%A5%9A-Hatch-4051b5.svg)](https://github.com/pypa/hatch)[![code style - black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)[![types - Mypy](https://img.shields.io/badge/types-Mypy-blue.svg)](https://github.com/ambv/black)[![License - MIT](https://img.shields.io/badge/license-MIT-9400d3.svg)](https://spdx.org/licenses/)[![GitHub Sponsors](https://img.shields.io/github/sponsors/vanHeemstraSystems?logo=GitHub%20Sponsors&style=social)](https://github.com/sponsors/vanHeemstraSystems) |

* * *

> A[blockbasiert](https://developers.google.com/blockly)No-Code-Webanwendung zum Erstellen[threagil](https://threagile.io)YAML-Dateien

-   [Glossar](./GLOSSARY.md)
-   [Referenzen](./REFERENCES.md)

**Zusammenfassung**

Bringen Sie Ihren Code auf Ihrem eigenen System zum Laufen.

**Notiz**: Stellen Sie sicher, dass Sie die erfüllen[Anforderungen](./200/README.md).

1.  Installationsprozess:
    ```bash
    $ cd threagile-builder
    $ pip install --upgrade pip # optional
    $ pip install -r requirements.txt # pipx won't do this
    # Without hatch: $ python src/threagile_builder/app.py
    $ hatch run src/threagile_builder/app.py
    ```
2.  Softwareabhängigkeiten
3.  Neueste Veröffentlichungen
4.  API-Referenzen
5.  Erstellen und testen:

    Um Ihren Code zu erstellen, verwenden Sie:

    ```bash
    $ cd threagile-builder
    $ hatch build
    ```

    Um die Anwendung auszuführen, verwenden Sie:

    Linux:

    ```bash
    $ export SECRET_KEY="secret"
    ```

    Windows:

    ```bash
    $ setx SECRET_KEY secret
    ```

    Dann:

    ```bash
    $ cd threagile-builder
    # Without hatch: $ python src/threagile_builder/app.py
    $ hatch run src/threagile_builder/app.py
    ```

    Navigieren Sie dann zu`http://127.0.0.1:5000/`in Ihrem Webbrowser.

    Um Tests auszuführen, verwenden Sie:

    ```bash
    $ cd threagile-builder
    $ pytest tests/
    ```

# API-Dokumentation

Navigieren Sie zu`http://127.0.0.1:5000/docs`in Ihrem Webbrowser oder laden Sie openapi.json herunter von`http://127.0.0.1:5000/openapi.json`.

# Metriken

Lassen Sie ein Werkzeug wie Prometheus kratzen`http://127.0.0.1:5000/metrics`.

**_NEU_**

**Inhaltsverzeichnis**

-   [Installation](#installation)
-   [Versionsquelle](#version-source)
-   [Umgebungen](#environments)
-   [Bauen](#build)
-   [Lizenz](#license)

## Installation

```console
pip install threagile-builder
```

## Versionsquelle

-   Der[hatch-vcs](https://github.com/ofek/hatch-vcs)Das Versionsquellen-Plugin bestimmt die Projektversion mithilfe von Git-Tags

## Umgebungen

-   Ordentlich in einem Standalone definiert[`hatch.toml`](https://hatch.pypa.io/latest/intro/#configuration)
-   Der`test`Matrix verwendet die[Lukencontainer](https://github.com/ofek/hatch-containers)Plugin zum Ausführen jeder Umgebung in Docker-Containern; Die Verwendung ist in der zu sehen[prüfen](.github/workflows/test.yml)GitHub-Workflow

## Bauen

-   Alle Build-Ziele verwenden die[hatch-vcs](https://github.com/ofek/hatch-vcs)Erstellen Sie ein Hook-Plugin, um ein zu versenden`_version.py`Datei, damit die Version zur Laufzeit verwendet werden kann
-   Räder verwenden die[hatch-mypyc](https://github.com/ofek/hatch-mypyc)Build-Hook-Plugin, mit dem zunächst der gesamte Code kompiliert werden soll[Mypyc](https://github.com/mypyc/mypyc)
-   Der[bauen](.github/workflows/build.yml)Der GitHub-Workflow zeigt, wie Sie:
    -   verwenden[cibuildwheel](https://github.com/pypa/cibuildwheel)binäre Räder für jede Plattform zu verteilen
    -   Benutze die[App](https://hatch.pypa.io/latest/plugins/builder/app/)build target zum Erstellen eigenständiger Distributionen für jede Plattform

## Lizenz

`threagile-buider`wird gemäß den Bedingungen der verteilt[MIT](https://spdx.org/licenses/MIT.html)Lizenz.

## 100 - Einführung

Sehen[README.md](./100/README.md)

## 200 – Anforderungen

Sehen[README.md](./200/README.md)

## 300 – Erstellen unserer Anwendung

Sehen[README.md](./300/README.md)

## 400 – Fazit

Sehen[README.md](./400/README.md)
