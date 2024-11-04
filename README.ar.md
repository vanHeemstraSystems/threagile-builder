ثريجيل باني

# منشئ ثريجيل

|             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| سي آي/سي دي | [![CI - Test](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/test.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/test.yml)[![CD - Build](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/build.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/build.yml)                                                                                                                                                                                                    |
| طَرد        | [![PyPI - Version](https://img.shields.io/pypi/v/threagile-builder.svg?logo=pypi&label=PyPI&logoColor=gold)](https://pypi.org/project/threagile-builder/)[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/threagile-builder.svg?logo=python&label=Python&logoColor=gold)](https://pypi.org/project/threagile-builder/)                                                                                                                                                                                                                                                                 |
| ميتا        | [![Hatch project](https://img.shields.io/badge/%F0%9F%A5%9A-Hatch-4051b5.svg)](https://github.com/pypa/hatch)[![code style - black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)[![types - Mypy](https://img.shields.io/badge/types-Mypy-blue.svg)](https://github.com/ambv/black)[![License - MIT](https://img.shields.io/badge/license-MIT-9400d3.svg)](https://spdx.org/licenses/)[![GitHub Sponsors](https://img.shields.io/github/sponsors/vanHeemstraSystems?logo=GitHub%20Sponsors&style=social)](https://github.com/sponsors/vanHeemstraSystems) |

* * *

> أ[على أساس الكتلة](https://developers.google.com/blockly)تطبيق ويب بدون كود للإنشاء[ثريجيل](https://threagile.io)ملفات YAML

-   [مسرد](./GLOSSARY.md)
-   [مراجع](./REFERENCES.md)
-   [التوثيق](./DOCUMENTATION.md)

**ملخص تنفيذي**

الحصول على التعليمات البرمجية الخاصة بك وتشغيلها على النظام الخاص بك.

**ملحوظة**: تأكد من الوفاء[متطلبات](./200/README.md).

1.  عملية التثبيت:
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
2.  تبعيات البرمجيات
3.  أحدث الإصدارات
4.  مراجع واجهة برمجة التطبيقات
5.  البناء والاختبار:

    لبناء الكود الخاص بك، استخدم:

    ```bash
    $ cd threagile-builder
    $ hatch build
    ```

    لتشغيل التطبيق استخدم:

    لينكس:

    ```bash
    $ export SECRET_KEY="secret"
    ```

    ويندوز:

    ```bash
    $ setx SECRET_KEY secret
    ```

    ثم:

    ```bash
    $ cd threagile-builder
    # Without hatch: $ python src/threagile_builder/app.py
    $ hatch run python src/threagile_builder/app.py
    ```

    ثم انتقل إلى`http://127.0.0.1:5000/` in your web browser.

    لتشغيل الاختبارات استخدم:

    ```bash
    $ cd threagile-builder
    $ pip install pytest # optional
    $ pytest tests/
    ```

# وثائق واجهة برمجة التطبيقات

انتقل إلى`http://127.0.0.1:5000/docs`في متصفح الويب الخاص بك، أو قم بتنزيل openapi.json من`http://127.0.0.1:5000/openapi.json`.

# المقاييس

دع أداة مثل بروميثيوس تتخلص`http://127.0.0.1:9464/metrics`.

**_جديد_**

**جدول المحتويات**

-   [تثبيت](#installation)
-   [مصدر النسخة](#version-source)
-   [البيئات](#environments)
-   [يبني](#build)
-   [رخصة](#license)

## تثبيت

```console
pip install threagile-builder
```

## مصدر النسخة

-   ال[Hatch-vcs](https://github.com/ofek/hatch-vcs)يحدد البرنامج المساعد لمصدر الإصدار إصدار المشروع باستخدام علامات Git

## البيئات

-   تم تعريفها بدقة في قائمة بذاتها[`hatch.toml`](https://hatch.pypa.io/latest/intro/#configuration)
-   ال`test`تستخدم المصفوفة[حاويات الفتحة](https://github.com/ofek/hatch-containers)مكون إضافي لتشغيل كل بيئة داخل حاويات Docker؛ يمكن رؤية الاستخدام في[امتحان](.github/workflows/test.yml)سير عمل جيثب

## يبني

-   تستخدم جميع أهداف البناء[Hatch-vcs](https://github.com/ofek/hatch-vcs)بناء البرنامج المساعد هوك لشحن أ`_version.py`ملف بحيث يمكن استخدام الإصدار في وقت التشغيل
-   تستخدم العجلات[Hatch-mypyc](https://github.com/ofek/hatch-mypyc)أنشئ ملحقًا ربطًا لتجميع جميع التعليمات البرمجية أولاً[Mypyc](https://github.com/mypyc/mypyc)
-   ال[يبني](.github/workflows/build.yml)يوضح سير عمل GitHub كيفية:
    -   يستخدم[cibuildwheel](https://github.com/pypa/cibuildwheel)لتوزيع العجلات الثنائية لكل منصة
    -   استخدم[برنامج](https://hatch.pypa.io/latest/plugins/builder/app/)بناء الهدف لبناء توزيعات مستقلة لكل منصة

## رخصة

`threagile-builder`يتم توزيعها بموجب شروط[مع](https://spdx.org/licenses/MIT.html)رخصة.

## 100- مقدمة

يرى[README.md](./100/README.md)

## 200 - المتطلبات

يرى[README.md](./200/README.md)

## 300 – بناء تطبيقنا

يرى[README.md](./300/README.md)

## 400 - الخاتمة

يرى[README.md](./400/README.md)
