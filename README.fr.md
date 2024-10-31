constructeur de menaces

# Constructeur dangereux

> UN[basé sur des blocs](https://developers.google.com/blockly)application web sans code à créer[fragile](https://threagile.io)Fichiers YAML

-   [Glossaire](./GLOSSARY.md)
-   [Références](./REFERENCES.md)

**Résumé exécutif**

Faire en sorte que votre code soit opérationnel sur votre propre système.

**Note**: Assurez-vous de remplir les[exigences](./200/README.md).

1.  Processus d'installation :
    ```bash
    cd threagile-builder
    pip install --upgrade pip # optional
    pip install -r requirements.txt # pipx won't do this
    hatch run src/threagile_builder/app.py
    ```
2.  Software dependencies
3.  Dernières versions
4.  Références API

# Construire et tester

Pour construire votre code, utilisez :

```bash
$ cd threagile-builder
$ hatch build
```

Pour exécuter l'application, utilisez :

Linux:

```bash
export SECRET_KEY="secret"
```

Fenêtres :

```bash
setx SECRET_KEY secret
```

Alors:

```bash
$ cd threagile-builder
# Without hatch: $ python src/threagile_builder/app.py
$ hatch run src/threagile_builder/app
```

Ensuite, accédez à`http://127.0.0.1:5000/`dans votre navigateur Internet.

Pour exécuter des tests, utilisez :

```bash
$ cd threagile-builder
$ pytest tests/
```

# Documentation API

Accédez à`http://127.0.0.1:5000/docs`dans votre navigateur Web, ou téléchargez le fichier openapi.json depuis`http://127.0.0.1:5000/openapi.json`.

# Métrique

Laissez un outil comme Prometheus gratter`http://127.0.0.1:5000/metrics`.

## 100 - Présentation

Voir[README.md](./100/README.md)

## 200 - Exigences

Voir[README.md](./200/README.md)

## 300 - Construire notre application

Voir[README.md](./300/README.md)

## 400 - Conclusion

Voir[README.md](./400/README.md)
