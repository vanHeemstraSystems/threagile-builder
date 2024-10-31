ثريجيل باني

# منشئ ثريجيل

> أ[على أساس الكتلة](https://developers.google.com/blockly)تطبيق ويب بدون كود للإنشاء[ثريجيل](https://threagile.io)ملفات YAML

-   [مسرد](./GLOSSARY.md)
-   [مراجع](./REFERENCES.md)

**ملخص تنفيذي**

الحصول على التعليمات البرمجية الخاصة بك وتشغيلها على النظام الخاص بك.

1.  عملية التثبيت:
    ```bash
    cd threagile-builder
    pipx install -r requirements.txt
    hatch run src/threagile_builder/app
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
$ hatch run src/threagile_builder/app
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
