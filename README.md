threagile-builder
# Threagile Builder

> A [block-based](https://developers.google.com/blockly) no-code web application to create [threagile](https://threagile.io) YAML files

- [Glossary](./GLOSSARY.md)
- [References](./REFERENCES.md)

**Executive Summary**

Getting your code up and running on your own system.

**Note**: Make sure you fulfill the [requirements](./200/README.md).
1.	Installation process: 
    ```bash 
    cd threagile-builder
    pip install --upgrade pip # optional
    pip install -r requirements.txt # pipx won't do this
    hatch run src/threagile_builder/app.py
    ```
2.	Software dependencies
3.	Latest releases
4.	API references

# Build and Test
To build your code, use:

```bash
$ cd threagile-builder
$ hatch build
```

To run the application, use:

Linux:
```bash
export SECRET_KEY="secret"
```

Windows:
```bash
setx SECRET_KEY secret
```

Then:

```bash
$ cd threagile-builder
# Without hatch: $ python src/threagile_builder/app.py
$ hatch run src/threagile_builder/app
```

Then, navigate to `http://127.0.0.1:5000/` in your web browser.

To run tests, use:

```bash
$ cd threagile-builder
$ pytest tests/
```

# API Documentation

Navigate to `http://127.0.0.1:5000/docs` in your web browser, or download the openapi.json from `http://127.0.0.1:5000/openapi.json`.

# Metrics

Let a tool like Prometheus scrape `http://127.0.0.1:5000/metrics`.

## 100 - Introduction

See [README.md](./100/README.md)

## 200 - Requirements

See [README.md](./200/README.md)

## 300 - Building Our Application

See [README.md](./300/README.md)

## 400 - Conclusion

See [README.md](./400/README.md)
