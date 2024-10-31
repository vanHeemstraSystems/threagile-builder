constructor-threagil

# Constructor amenazante

|         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CI/CD   | [![CI - Test](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/test.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/test.yml)[![CD - Build](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/build.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/build.yml)                                                                                                                                                                                                    |
| Paquete | [![PyPI - Version](https://img.shields.io/pypi/v/threagile-builder.svg?logo=pypi&label=PyPI&logoColor=gold)](https://pypi.org/project/threagile-builder/)[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/threagile-builder.svg?logo=python&label=Python&logoColor=gold)](https://pypi.org/project/threagile-builder/)                                                                                                                                                                                                                                                                 |
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
    $ pip install --upgrade pip # optional
    $ pip install -r requirements.txt # pipx won't do this
    # Without hatch: $ python src/threagile_builder/app.py
    $ hatch run src/threagile_builder/app.py
    ```
2.  Dependencias de software
3.  Últimos lanzamientos
4.  Referencias API

# Construir y probar

Para construir su código, use:

```bash
$ cd threagile-builder
$ hatch build
```

Para ejecutar la aplicación, utilice:

Linux:

```bash
export SECRET_KEY="secret"
```

Ventanas:

```bash
setx SECRET_KEY secret
```

Entonces:

```bash
$ cd threagile-builder
# Without hatch: $ python src/threagile_builder/app.py
$ hatch run src/threagile_builder/app.py
```

Luego, navegue hasta`http://127.0.0.1:5000/`en su navegador web.

Para ejecutar pruebas, utilice:

```bash
$ cd threagile-builder
$ pytest tests/
```

# Documentación API

Navegar a`http://127.0.0.1:5000/docs`en su navegador web, o descargue openapi.json desde`http://127.0.0.1:5000/openapi.json`.

# Métrica

Dejemos que una herramienta como Prometeo raspe`http://127.0.0.1:5000/metrics`.

## 100 - Introducción

Ver[README.md](./100/README.md)

## 200 - Requisitos

Ver[README.md](./200/README.md)

## 300 - Construyendo nuestra aplicación

Ver[README.md](./300/README.md)

## 400 - Conclusión

Ver[README.md](./400/README.md)
