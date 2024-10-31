ثريجيل باني

# منشئ ثريجيل

|             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| سي آي/سي دي | [![CI - Test](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/test.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/test.yml)[![CD - Build](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/build.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/build.yml)                                                                                                                                                                                                    |
| طَرد        | [![PyPI - Version](https://img.shields.io/pypi/v/threagile-builder.svg?logo=pypi&label=PyPI&logoColor=gold)](https://pypi.org/project/threagile-builder/)[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/threagile-builder.svg?logo=python&label=Python&logoColor=gold)](https://pypi.org/project/threagile-builder/)                                                                                                                                                                                                                                                                 |
| Meta        | [![Hatch project](https://img.shields.io/badge/%F0%9F%A5%9A-Hatch-4051b5.svg)](https://github.com/pypa/hatch)[![code style - black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)[![types - Mypy](https://img.shields.io/badge/types-Mypy-blue.svg)](https://github.com/ambv/black)[![License - MIT](https://img.shields.io/badge/license-MIT-9400d3.svg)](https://spdx.org/licenses/)[![GitHub Sponsors](https://img.shields.io/github/sponsors/vanHeemstraSystems?logo=GitHub%20Sponsors&style=social)](https://github.com/sponsors/vanHeemstraSystems) |

* * *

> أ[على أساس الكتلة](https://developers.google.com/blockly)تطبيق ويب بدون كود للإنشاء[ثريجيل](https://threagile.io)ملفات YAML

-   [مسرد](./GLOSSARY.md)
-   [مراجع](./REFERENCES.md)

**ملخص تنفيذي**

Getting your code up and running on your own system.

**ملحوظة**: تأكد من الوفاء[متطلبات](./200/README.md).

1.  عملية التثبيت:
    ```bash
    $ cd threagile-builder
    $ pip install --upgrade pip # optional
    $ pip install -r requirements.txt # pipx won't do this
    # Without hatch: $ python src/threagile_builder/app.py
    $ hatch run src/threagile_builder/app.py
    ```
2.  تبعيات البرمجيات
3.  أحدث الإصدارات
4.  مراجع واجهة برمجة التطبيقات

# بناء واختبار

لبناء الكود الخاص بك، استخدم:

```bash
$ cd threagile-builder
$ hatch build
```

لتشغيل التطبيق استخدم:

لينكس:

```bash
export SECRET_KEY="secret"
```

ويندوز:

```bash
setx SECRET_KEY secret
```

ثم:

```bash
$ cd threagile-builder
# Without hatch: $ python src/threagile_builder/app.py
$ hatch run src/threagile_builder/app.py
```

ثم انتقل إلى`http://127.0.0.1:5000/`في متصفح الويب الخاص بك.

لتشغيل الاختبارات استخدم:

```bash
$ cd threagile-builder
$ pytest tests/
```

# وثائق واجهة برمجة التطبيقات

انتقل إلى`http://127.0.0.1:5000/docs`في متصفح الويب الخاص بك، أو قم بتنزيل openapi.json من`http://127.0.0.1:5000/openapi.json`.

# المقاييس

دع أداة مثل بروميثيوس تتخلص`http://127.0.0.1:5000/metrics`.

## 100- مقدمة

يرى[README.md](./100/README.md)

## 200 - المتطلبات

يرى[README.md](./200/README.md)

## 300 – بناء تطبيقنا

يرى[README.md](./300/README.md)

## 400 - الخاتمة

يرى[README.md](./400/README.md)
