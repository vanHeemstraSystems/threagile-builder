威胁建造者

# 威胁建造者

|           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 持续集成/持续交付 | [![CI - Test](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/test.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/test.yml)[![CD - Build](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/build.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/build.yml)                                                                                                                                                                                                    |
| 包裹        | [![PyPI - Version](https://img.shields.io/pypi/v/threagile-builder.svg?logo=pypi&label=PyPI&logoColor=gold)](https://pypi.org/project/threagile-builder/)[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/threagile-builder.svg?logo=python&label=Python&logoColor=gold)](https://pypi.org/project/threagile-builder/)                                                                                                                                                                                                                                                                 |
| Meta      | [![Hatch project](https://img.shields.io/badge/%F0%9F%A5%9A-Hatch-4051b5.svg)](https://github.com/pypa/hatch)[![code style - black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)[![types - Mypy](https://img.shields.io/badge/types-Mypy-blue.svg)](https://github.com/ambv/black)[![License - MIT](https://img.shields.io/badge/license-MIT-9400d3.svg)](https://spdx.org/licenses/)[![GitHub Sponsors](https://img.shields.io/github/sponsors/vanHeemstraSystems?logo=GitHub%20Sponsors&style=social)](https://github.com/sponsors/vanHeemstraSystems) |

* * *

> 一个[基于块的](https://developers.google.com/blockly)创建无代码 Web 应用程序[threagile](https://threagile.io)YAML 文件

-   [词汇表](./GLOSSARY.md)
-   [References](./REFERENCES.md)

**Executive Summary**

在您自己的系统上启动并运行您的代码。

**Note**: 确保您满足[要求](./200/README.md).

1.  安装过程：
    ```bash
    $ cd threagile-builder
    $ pip install --upgrade pip # optional
    $ pip install -r requirements.txt # pipx won't do this
    # Without hatch: $ python src/threagile_builder/app.py
    $ hatch run src/threagile_builder/app.py
    ```
2.  软件依赖性
3.  最新版本
4.  API参考

# 构建和测试

要构建您的代码，请使用：

```bash
$ cd threagile-builder
$ hatch build
```

要运行该应用程序，请使用：

Linux：

```bash
export SECRET_KEY="secret"
```

视窗：

```bash
setx SECRET_KEY secret
```

然后：

```bash
$ cd threagile-builder
# Without hatch: $ python src/threagile_builder/app.py
$ hatch run src/threagile_builder/app.py
```

然后，导航至`http://127.0.0.1:5000/`在您的网络浏览器中。

要运行测试，请使用：

```bash
$ cd threagile-builder
$ pytest tests/
```

# API文档

导航至`http://127.0.0.1:5000/docs`在您的网络浏览器中，或从以下位置下载 openapi.json`http://127.0.0.1:5000/openapi.json`.

# 指标

让像 Prometheus 这样的工具刮擦`http://127.0.0.1:5000/metrics`.

## 100 - 简介

看[README.md](./100/README.md)

## 200 - 要求

看[README.md](./200/README.md)

## 300 - 构建我们的应用程序

看[README.md](./300/README.md)

## 400 - 结论

看[README.md](./400/README.md)
