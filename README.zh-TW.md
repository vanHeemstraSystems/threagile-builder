威脅建造者

# 威脅建造者

> 一個[基於區塊的](https://developers.google.com/blockly)建立無程式碼 Web 應用程式[威脅性的](https://threagile.io)YAML 文件

-   [詞彙表](./GLOSSARY.md)
-   [參考](./REFERENCES.md)

**執行摘要**

在您自己的系統上啟動並運行您的程式碼。

**筆記**: 確保您滿足[要求](./200/README.md).

1.  安裝過程：
    ```bash
    cd threagile-builder
    pip install --upgrade pip # optional
    pip install -r requirements.txt # pipx won't do this
    hatch run src/threagile_builder/app.py
    ```
2.  軟體依賴性
3.  最新版本
4.  API參考

# 建置和測試

要建立您的程式碼，請使用：

```bash
$ cd threagile-builder
$ hatch build
```

要運行該應用程序，請使用：

Linux：

```bash
export SECRET_KEY="secret"
```

視窗：

```bash
setx SECRET_KEY secret
```

然後：

```bash
$ cd threagile-builder
# Without hatch: $ python src/threagile_builder/app.py
$ hatch run src/threagile_builder/app
```

然後，導航至`http://127.0.0.1:5000/`在您的網頁瀏覽器中。

若要執行測試，請使用：

```bash
$ cd threagile-builder
$ pytest tests/
```

# API文件

導航至`http://127.0.0.1:5000/docs`在您的網頁瀏覽器中，或從下列位置下載 openapi.json`http://127.0.0.1:5000/openapi.json`.

# 指標

讓像 Prometheus 這樣的工具刮擦`http://127.0.0.1:5000/metrics`.

## 100 - 簡介

看[README.md](./100/README.md)

## 200 - 要求

看[README.md](./200/README.md)

## 300 - 建立我們的應用程式

看[README.md](./300/README.md)

## 400 - 結論

看[README.md](./400/README.md)
