威胁建造者

# 威胁建造者

> 一个[基于块的](https://developers.google.com/blockly)创建无代码 Web 应用程序[威胁性的](https://threagile.io)YAML 文件

-   [词汇表](./GLOSSARY.md)
-   [参考](./REFERENCES.md)

**执行摘要**

在您自己的系统上启动并运行您的代码。

**笔记**: 确保您满足[先决条件](./200/README.md)

1.  安装过程：
    ```bash
    cd threagile-builder
    pip install --upgrade pip # optional
    pip install -r requirements.txt # pipx won't do this
    hatch run src/threagile_builder/app
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
$ hatch run src/threagile_builder/app
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
