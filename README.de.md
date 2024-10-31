Threagile-Builder

# Threagile Builder

> A[blockbasiert](https://developers.google.com/blockly)No-Code-Webanwendung zum Erstellen[threagil](https://threagile.io)YAML-Dateien

-   [Glossar](./GLOSSARY.md)
-   [Referenzen](./REFERENCES.md)

**Zusammenfassung**

Bringen Sie Ihren Code auf Ihrem eigenen System zum Laufen.

1.  Installationsprozess:
    ```bash
    cd threagile-builder
    pipx install -r requirements.txt
    hatch run src/threagile_builder/app
    ```
2.  Softwareabhängigkeiten
3.  Neueste Veröffentlichungen
4.  API-Referenzen

# Erstellen und testen

Um Ihren Code zu erstellen, verwenden Sie:

```bash
$ cd threagile-builder
$ hatch build
```

Um die Anwendung auszuführen, verwenden Sie:

Linux:

```bash
export SECRET_KEY="secret"
```

Windows:

```bash
setx SECRET_KEY secret
```

Dann:

```bash
$ cd threagile-builder
# Without hatch: $ python src/threagile_builder/app.py
$ hatch run src/threagile_builder/app
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

## 100 - Einführung

Sehen[README.md](./100/README.md)

## 200 – Anforderungen

Sehen[README.md](./200/README.md)

## 300 – Erstellen unserer Anwendung

Sehen[README.md](./300/README.md)

## 400 – Fazit

Sehen[README.md](./400/README.md)
