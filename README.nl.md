threagile-bouwer

# Threagile-bouwer

> A[op blokken gebaseerd](https://developers.google.com/blockly)no-code webapplicatie om te maken[ragiel](https://threagile.io)YAML-bestanden

-   [Glossarium](./GLOSSARY.md)
-   [Referenties](./REFERENCES.md)

**Samenvatting**

Uw code op uw eigen systeem operationeel krijgen.

1.  Installatieproces:
    ```bash
    cd threagile-builder
    pip install -r requirements.txt # pipx won't do this
    hatch run src/threagile_builder/app
    ```
2.  Software-afhankelijkheden
3.  Nieuwste releases
4.  API-referenties

# Bouwen en testen

Om uw code samen te stellen, gebruikt u:

```bash
$ cd threagile-builder
$ hatch build
```

Om de applicatie uit te voeren, gebruikt u:

Linux:

```bash
export SECRET_KEY="secret"
```

Ramen:

```bash
setx SECRET_KEY secret
```

Dan:

```bash
$ cd threagile-builder
# Without hatch: $ python src/threagile_builder/app.py
$ hatch run src/threagile_builder/app
```

Navigeer vervolgens naar`http://127.0.0.1:5000/`in uw webbrowser.

Om tests uit te voeren, gebruikt u:

```bash
$ cd threagile-builder
$ pytest tests/
```

# API-documentatie

Navigeer naar`http://127.0.0.1:5000/docs`in uw webbrowser, of download de openapi.json van`http://127.0.0.1:5000/openapi.json`.

# Statistieken

Laat een stuk gereedschap als Prometheus schrapen`http://127.0.0.1:5000/metrics`.

## 100 - Introduction

Zien[README.md](./100/README.md)

## 200 - Vereisten

Zien[README.md](./200/README.md)

## 300 - Onze applicatie bouwen

Zien[README.md](./300/README.md)

## 400 - Conclusie

Zien[README.md](./400/README.md)
