thregile-बिल्डर

# थ्रैगाइल बिल्डर

|           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| सीआई/सीडी | [![CI - Test](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/test.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/test.yml)[![CD - Build](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/build.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-builder/actions/workflows/build.yml)                                                                                                                                                                                                    |
| पैकेट     | [![PyPI - Version](https://img.shields.io/pypi/v/threagile-builder.svg?logo=pypi&label=PyPI&logoColor=gold)](https://pypi.org/project/threagile-builder/)[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/threagile-builder.svg?logo=python&label=Python&logoColor=gold)](https://pypi.org/project/threagile-builder/)                                                                                                                                                                                                                                                                 |
| मेटा      | [![Hatch project](https://img.shields.io/badge/%F0%9F%A5%9A-Hatch-4051b5.svg)](https://github.com/pypa/hatch)[![code style - black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)[![types - Mypy](https://img.shields.io/badge/types-Mypy-blue.svg)](https://github.com/ambv/black)[![License - MIT](https://img.shields.io/badge/license-MIT-9400d3.svg)](https://spdx.org/licenses/)[![GitHub Sponsors](https://img.shields.io/github/sponsors/vanHeemstraSystems?logo=GitHub%20Sponsors&style=social)](https://github.com/sponsors/vanHeemstraSystems) |

* * *

> ए[ब्लॉक आधारित](https://developers.google.com/blockly)नो-कोड वेब एप्लिकेशन बनाने के लिए[threagile](https://threagile.io)वाईएएमएल फ़ाइलें

-   [शब्दकोष](./GLOSSARY.md)
-   [संदर्भ](./REFERENCES.md)

**कार्यकारी सारांश**

अपना कोड तैयार करना और अपने सिस्टम पर चलाना।

**टिप्पणी**: सुनिश्चित करें कि आप इसे पूरा करते हैं[आवश्यकताएं](./200/README.md).

1.  स्थापना प्रक्रिया:
    ```bash
    $ cd threagile-builder
    $ pip install --upgrade pip # optional
    $ pip install -r requirements.txt # pipx won't do this
    # Without hatch: $ python src/threagile_builder/app.py
    $ hatch run src/threagile_builder/app.py
    ```
2.  सॉफ़्टवेयर निर्भरताएँ
3.  नवीनतम रिलीज़
4.  एपीआई संदर्भ

# निर्माण एवं परीक्षण

अपना कोड बनाने के लिए, इसका उपयोग करें:

```bash
$ cd threagile-builder
$ hatch build
```

एप्लिकेशन चलाने के लिए, उपयोग करें:

लिनक्स:

```bash
export SECRET_KEY="secret"
```

खिड़कियाँ:

```bash
setx SECRET_KEY secret
```

तब:

```bash
$ cd threagile-builder
# Without hatch: $ python src/threagile_builder/app.py
$ hatch run src/threagile_builder/app.py
```

फिर, नेविगेट करें`http://127.0.0.1:5000/`आपके वेब ब्राउज़र में.

परीक्षण चलाने के लिए, उपयोग करें:

```bash
$ cd threagile-builder
$ pytest tests/
```

# एपीआई दस्तावेज़ीकरण

पर नेविगेट करें`http://127.0.0.1:5000/docs`अपने वेब ब्राउज़र में, या openapi.json डाउनलोड करें`http://127.0.0.1:5000/openapi.json`.

# मेट्रिक्स

प्रोमेथियस जैसे उपकरण को परिमार्जन करने दें`http://127.0.0.1:5000/metrics`.

## 100 - परिचय

देखना[README.md](./100/README.md)

## 200 - आवश्यकताएँ

देखना[README.md](./200/README.md)

## 300 - हमारे एप्लिकेशन का निर्माण

देखना[README.md](./300/README.md)

## 400 - निष्कर्ष

देखना[README.md](./400/README.md)
