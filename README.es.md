constructor-threagil

# Constructor amenazante

> A[basado en bloques](https://developers.google.com/blockly)aplicación web sin código para crear[amenazante](https://threagile.io)Archivos YAML

-   [Glosario](./GLOSSARY.md)
-   [Referencias](./REFERENCES.md)

**Resumen ejecutivo**

Poner en funcionamiento su código en su propio sistema.

1.  Proceso de instalación:
    ```bash
    cd threagile-builder
    pipx install -r requirements.txt
    hatch run src/threagile_builder/app
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

Windows:

```bash
setx SECRET_KEY secret
```

Entonces:

```bash
$ cd threagile-builder
# Without hatch: $ python src/threagile_builder/app.py
$ hatch run src/threagile_builder/app
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
