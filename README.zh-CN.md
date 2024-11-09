威胁建造者

# 威胁建造者

|           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 持续集成/持续交付 | [![CI - Test](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/test.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/test.yml)[![CD - Build](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/build.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/build.yml)                                                                                                                                                                                                    |
| 包裹        | [![PyPI - Version](https://img.shields.io/pypi/v/threagile-builder.svg?logo=pypi&label=PyPI&logoColor=gold)](https://pypi.org/project/threagile-builder/)[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/threagile-builder.svg?logo=python&label=Python&logoColor=gold)](https://pypi.org/project/threagile-builder/)                                                                                                                                                                                                                                                                 |
| 元         | [![Hatch project](https://img.shields.io/badge/%F0%9F%A5%9A-Hatch-4051b5.svg)](https://github.com/pypa/hatch)[![code style - black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)[![types - Mypy](https://img.shields.io/badge/types-Mypy-blue.svg)](https://github.com/ambv/black)[![License - MIT](https://img.shields.io/badge/license-MIT-9400d3.svg)](https://spdx.org/licenses/)[![GitHub Sponsors](https://img.shields.io/github/sponsors/vanHeemstraSystems?logo=GitHub%20Sponsors&style=social)](https://github.com/sponsors/vanHeemstraSystems) |

* * *

> 一个[基于块的](https://developers.google.com/blockly)创建无代码 Web 应用程序[威胁性的](https://threagile.io)YAML 文件

-   [词汇表](./GLOSSARY.md)
-   [参考](./REFERENCES.md)
-   [文档](./DOCUMENTATION.md)

**执行摘要**

在您自己的系统上启动并运行您的代码。

**笔记**: 确保您满足[要求](./200/README.md).

1.  安装过程：
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
2.  软件依赖性
3.  最新版本
4.  API参考
5.  构建和测试：

    要构建您的代码，请使用：

    ```bash
    $ cd threagile-builder
    $ hatch build
    ```

    要运行该应用程序，请使用：

    Linux：

    ```bash
    $ export SECRET_KEY="secret"
    ```

    视窗：

    ```bash
    $ setx SECRET_KEY secret
    ```

    然后：

    ```bash
    $ cd threagile-builder
    # Without hatch: $ python src/threagile_builder/app.py
    $ hatch run python src/threagile_builder/app.py
    ```

    然后，导航至`http://127.0.0.1:5000/`在您的网络浏览器中。

    要运行测试，请使用：

    ```bash
    $ cd threagile-builder
    $ pip install pytest # optional
    $ pytest tests/
    ```

# API文档

导航至`http://127.0.0.1:5000/docs`在您的网络浏览器中，或从以下位置下载 openapi.json`http://127.0.0.1:5000/openapi.json`.

# 指标

让 Prometheus 这样的工具刮擦`http://127.0.0.1:9464/metrics`.

**_新的_**

**目录**

-   [安装](#installation)
-   [版本来源](#version-source)
-   [环境](#environments)
-   [建造](#build)
-   [执照](#license)

## 安装

```console
pip install threagile-builder
```

## 版本来源

-   这[孵化VCS](https://github.com/ofek/hatch-vcs)版本源插件使用 Git 标签确定项目版本

## 环境

-   整齐地定义在独立的[`hatch.toml`](https://hatch.pypa.io/latest/intro/#configuration)
-   这`test`矩阵使用[孵化集装箱](https://github.com/ofek/hatch-containers)用于运行 Docker 容器内每个环境的插件；用法可以在[测试](.github/workflows/test.yml)GitHub 工作流程

## 建造

-   所有构建目标都使用[孵化VCS](https://github.com/ofek/hatch-vcs)构建钩子插件来发送`_version.py`文件，以便可以在运行时使用该版本
-   轮子使用[孵化 mypyc](https://github.com/ofek/hatch-mypyc)构建钩子插件以首先编译所有代码[Mypyc](https://github.com/mypyc/mypyc)
-   这[build](.github/workflows/build.yml)GitHub 工作流程展示了如何：
    -   使用[cibuildwheel](https://github.com/pypa/cibuildwheel)为每个平台分发二进制轮子
    -   使用[应用程序](https://hatch.pypa.io/latest/plugins/builder/app/)构建目标为每个平台构建独立发行版

## 执照

`threagile-builder`是根据以下条款分发的[和](https://spdx.org/licenses/MIT.html)执照。

## 100 - 简介

看[README.md](./100/README.md)

## 200 - 要求

看[README.md](./200/README.md)

## 300 - 构建我们的应用程序

看[README.md](./300/README.md)

## 400 - 结论

看[README.md](./400/README.md)
