threagile-builder

# 威脅建造者

|           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 持續整合/持續交付 | [![CI - Test](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/test.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/test.yml)[![CD - Build](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/build.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/build.yml)                                                                                                                                                                                                    |
| 包裹        | [![PyPI - Version](https://img.shields.io/pypi/v/threagile-builder.svg?logo=pypi&label=PyPI&logoColor=gold)](https://pypi.org/project/threagile-builder/)[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/threagile-builder.svg?logo=python&label=Python&logoColor=gold)](https://pypi.org/project/threagile-builder/)                                                                                                                                                                                                                                                                 |
| 元         | [![Hatch project](https://img.shields.io/badge/%F0%9F%A5%9A-Hatch-4051b5.svg)](https://github.com/pypa/hatch)[![code style - black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)[![types - Mypy](https://img.shields.io/badge/types-Mypy-blue.svg)](https://github.com/ambv/black)[![License - MIT](https://img.shields.io/badge/license-MIT-9400d3.svg)](https://spdx.org/licenses/)[![GitHub Sponsors](https://img.shields.io/github/sponsors/vanHeemstraSystems?logo=GitHub%20Sponsors&style=social)](https://github.com/sponsors/vanHeemstraSystems) |

* * *

> 一個[基於區塊的](https://developers.google.com/blockly)建立無程式碼 Web 應用程式[威脅性的](https://threagile.io)YAML 文件

-   [詞彙表](./GLOSSARY.md)
-   [參考](./REFERENCES.md)

**執行摘要**

在您自己的系統上啟動並運行您的程式碼。

**筆記**: 確保您滿足[要求](./200/README.md).

1.  安裝過程：
    ```bash
    $ cd threagile-builder
    $ hatch version # optional, will print the version of our package to the terminal without modifying the source directory (e.g. `0.0.1`).
    # Without hatch: $ python src/threagile_builder/app.py
    $ hatch env create # optional, if the default env already exists you will be told
    $ hatch shell # spawn a shell within an environment
    (threagile-builder) $ pip show threagile-builder # optional, shows the project details, here 'threagile-builder'
    # Name: threagile-builder
    # Version: 0.0.1
    # ...
    (threagile-builder) $ python -c "import sys;print(sys.executable)" # optional, see where your environment's python is located
    (threagile-builder) $ exit # type `exit` to leave the environment
    $ hatch run pip install --upgrade pip # optional, the `run` command allows you to execute commands in an environment as if you had already entered it.
    $ hatch run pip install -r requirements.txt # pipx won't do this
    $ hatch run python -m setuptools_scm # optional, display the version of our package and perform any side-effects like writing to a file. (here: `_version.py`)
    $ hatch run python src/threagile_builder/app.py # starts the app 
    ```
2.  軟體依賴性
3.  最新版本
4.  API參考
5.  建置和測試：

    要建立您的程式碼，請使用：

    ```bash
    $ cd threagile-builder
    $ hatch build
    ```

    要運行該應用程序，請使用：

    Linux：

    ```bash
    $ export SECRET_KEY="secret"
    ```

    視窗：

    ```bash
    $ setx SECRET_KEY secret
    ```

    然後：

    ```bash
    $ cd threagile-builder
    # Without hatch: $ python src/threagile_builder/app.py
    $ hatch run python src/threagile_builder/app.py
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

讓 Prometheus 這樣的工具刮擦`http://127.0.0.1:5000/metrics`.

**_新的_**

**目錄**

-   [安裝](#installation)
-   [版本來源](#version-source)
-   [環境](#environments)
-   [建造](#build)
-   [執照](#license)

## 安裝

```console
pip install threagile-builder
```

## 版本來源

-   這[孵化VCS](https://github.com/ofek/hatch-vcs)版本來源外掛程式使用 Git 標籤來確定專案版本

## 環境

-   整齊地定義在一個獨立的[`hatch.toml`](https://hatch.pypa.io/latest/intro/#configuration)
-   這`test`矩陣使用[孵化貨櫃](https://github.com/ofek/hatch-containers)用於運行 Docker 容器內每個環境的插件；用法可以在[測試](.github/workflows/test.yml)GitHub 工作流程

## 建造

-   所有建置目標都使用[孵化VCS](https://github.com/ofek/hatch-vcs)建立鉤子插件來發送`_version.py`文件，以便可以在運行時使用該版本
-   輪子使用[孵化 mypyc](https://github.com/ofek/hatch-mypyc)建立鉤子插件以首先編譯所有程式碼[Mypyc](https://github.com/mypyc/mypyc)
-   這[建造](.github/workflows/build.yml)GitHub 工作流程展示如何：
    -   使用[cibuildwheel](https://github.com/pypa/cibuildwheel)為每個平台分發二進制輪子
    -   使用[應用程式](https://hatch.pypa.io/latest/plugins/builder/app/)建構目標為每個平台建立獨立發行版

## 執照

`threagile-builder`是根據以下條款分發的[和](https://spdx.org/licenses/MIT.html)執照。

## 100 - 簡介

看[README.md](./100/README.md)

## 200 - 要求

看[README.md](./200/README.md)

## 300 - 建立我們的應用程式

看[README.md](./300/README.md)

## 400 - 結論

看[README.md](./400/README.md)
