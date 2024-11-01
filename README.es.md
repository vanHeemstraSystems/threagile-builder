constructor-threagil

# Constructor amenazante

|         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CI/CD   | [![CI - Test](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/test.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/test.yml)[![CD - Build](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/build.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/build.yml)                                                                                                                                                                                                    |
| Package | [![PyPI - Version](https://img.shields.io/pypi/v/threagile-builder.svg?logo=pypi&label=PyPI&logoColor=gold)](https://pypi.org/project/threagile-builder/)[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/threagile-builder.svg?logo=python&label=Python&logoColor=gold)](https://pypi.org/project/threagile-builder/)                                                                                                                                                                                                                                                                 |
| Meta    | [![Hatch project](https://img.shields.io/badge/%F0%9F%A5%9A-Hatch-4051b5.svg)](https://github.com/pypa/hatch)[![code style - black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)[![types - Mypy](https://img.shields.io/badge/types-Mypy-blue.svg)](https://github.com/ambv/black)[![License - MIT](https://img.shields.io/badge/license-MIT-9400d3.svg)](https://spdx.org/licenses/)[![GitHub Sponsors](https://img.shields.io/github/sponsors/vanHeemstraSystems?logo=GitHub%20Sponsors&style=social)](https://github.com/sponsors/vanHeemstraSystems) |

* * *

> A[basado en bloques](https://developers.google.com/blockly)aplicación web sin código para crear[amenazante](https://threagile.io)Archivos YAML

-   [Glosario](./GLOSSARY.md)
-   [Referencias](./REFERENCES.md)

**Resumen ejecutivo**

Cómo poner en marcha su código en su propio sistema.

**Nota**: Asegúrese de cumplir con los[requisitos](./200/README.md).

1.  Proceso de instalación:
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
2.  Dependencias de software
3.  Últimos lanzamientos
4.  Referencias API
5.  Construir y probar:

    Para construir su código, use:

    ```bash
    $ cd threagile-builder
    $ hatch build
    ```

    Para ejecutar la aplicación, utilice:

    Linux:

    ```bash
    $ export SECRET_KEY="secret"
    ```

    Ventanas:

    ```bash
    $ setx SECRET_KEY secret
    ```

    Entonces:

    ```bash
    $ cd threagile-builder
    # Without hatch: $ python src/threagile_builder/app.py
    $ hatch run python src/threagile_builder/app.py
    ```

    Luego, navegue hasta`http://127.0.0.1:5000/`en su navegador web.

    Para ejecutar pruebas, utilice:

    ```bash
    $ cd threagile-builder
    $ pip install pytest # optional
    $ pytest tests/
    ```

# Documentación API

Navegar a`http://127.0.0.1:5000/docs`en su navegador web, o descargue openapi.json desde`http://127.0.0.1:5000/openapi.json`.

# Métrica

Dejemos que una herramienta como Prometeo raspe`http://127.0.0.1:9464/metrics`.

**_NUEVO_**

**Tabla de contenido**

-   [Instalación](#installation)
-   [Fuente de la versión](#version-source)
-   [Ambientes](#environments)
-   [Construir](#build)
-   [Licencia](#license)

## Instalación

```console
pip install threagile-builder
```

## Fuente de la versión

-   El[escotilla-vcs](https://github.com/ofek/hatch-vcs)El complemento fuente de la versión determina la versión del proyecto usando etiquetas Git.

## Ambientes

-   Definido claramente de forma independiente[`hatch.toml`](https://hatch.pypa.io/latest/intro/#configuration)
-   El`test`La matriz utiliza el[contenedores-escotilla](https://github.com/ofek/hatch-containers)complemento para ejecutar cada entorno dentro de contenedores Docker; El uso se puede ver en el[prueba](.github/workflows/test.yml)flujo de trabajo de GitHub

## Construir

-   Todos los objetivos de construcción utilizan el[escotilla-vcs](https://github.com/ofek/hatch-vcs)construir complemento de gancho para enviar un`_version.py`archivo para que la versión pueda usarse en tiempo de ejecución
-   Las ruedas utilizan el[hatch-mypyc](https://github.com/ofek/hatch-mypyc)complemento de enlace de compilación para compilar primero todo el código[mipyc](https://github.com/mypyc/mypyc)
-   El[construir](.github/workflows/build.yml)El flujo de trabajo de GitHub muestra cómo:
    -   usar[cibuildwheel](https://github.com/pypa/cibuildwheel)distribuir ruedas binarias para cada plataforma
    -   utilizar el[aplicación](https://hatch.pypa.io/latest/plugins/builder/app/)construir objetivo para crear distribuciones independientes para cada plataforma

## Licencia

`threagile-builder`se distribuye bajo los términos del[CON](https://spdx.org/licenses/MIT.html)licencia.

## 100 - Introducción

Ver[README.md](./100/README.md)

## 200 - Requisitos

Ver[README.md](./200/README.md)

## 300 - Construyendo nuestra aplicación

Ver[README.md](./300/README.md)

## 400 - Conclusión

Ver[README.md](./400/README.md)
