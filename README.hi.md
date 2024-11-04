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
-   [References](./REFERENCES.md)
-   [प्रलेखन](./DOCUMENTATION.md)

**कार्यकारी सारांश**

अपना कोड तैयार करना और अपने सिस्टम पर चलाना।

**टिप्पणी**: सुनिश्चित करें कि आप इसे पूरा करते हैं[आवश्यकताएं](./200/README.md).

1.  स्थापना प्रक्रिया:
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
2.  सॉफ़्टवेयर निर्भरताएँ
3.  नवीनतम रिलीज़
4.  एपीआई संदर्भ
5.  निर्माण और परीक्षण:

    अपना कोड बनाने के लिए, इसका उपयोग करें:

    ```bash
    $ cd threagile-builder
    $ hatch build
    ```

    एप्लिकेशन चलाने के लिए, उपयोग करें:

    Linux:

    ```bash
    $ export SECRET_KEY="secret"
    ```

    खिड़कियाँ:

    ```bash
    $ setx SECRET_KEY secret
    ```

    तब:

    ```bash
    $ cd threagile-builder
    # Without hatch: $ python src/threagile_builder/app.py
    $ hatch run python src/threagile_builder/app.py
    ```

    फिर, नेविगेट करें`http://127.0.0.1:5000/`आपके वेब ब्राउज़र में.

    परीक्षण चलाने के लिए, उपयोग करें:

    ```bash
    $ cd threagile-builder
    $ pip install pytest # optional
    $ pytest tests/
    ```

# एपीआई दस्तावेज़ीकरण

पर नेविगेट करें`http://127.0.0.1:5000/docs`अपने वेब ब्राउज़र में, या openapi.json डाउनलोड करें`http://127.0.0.1:5000/openapi.json`.

# मेट्रिक्स

प्रोमेथियस जैसे उपकरण को परिमार्जन करने दें`http://127.0.0.1:9464/metrics`.

**_नया_**

**विषयसूची**

-   [इंस्टालेशन](#installation)
-   [संस्करण स्रोत](#version-source)
-   [वातावरण](#environments)
-   [निर्माण](#build)
-   [लाइसेंस](#license)

## इंस्टालेशन

```console
pip install threagile-builder
```

## संस्करण स्रोत

-   [हैच-वीसीएस](https://github.com/ofek/hatch-vcs)संस्करण स्रोत प्लगइन Git टैग का उपयोग करके प्रोजेक्ट संस्करण निर्धारित करता है

## वातावरण

-   एक स्टैंडअलोन में बड़े करीने से परिभाषित किया गया[`hatch.toml`](https://hatch.pypa.io/latest/intro/#configuration)
-   `test`मैट्रिक्स का उपयोग करता है[हैच-कंटेनर](https://github.com/ofek/hatch-containers)डॉकर कंटेनर के अंदर प्रत्येक वातावरण को चलाने के लिए प्लगइन; उपयोग में देखा जा सकता है[परीक्षा](.github/workflows/test.yml)GitHub वर्कफ़्लो

## निर्माण

-   सभी निर्माण लक्ष्य इसका उपयोग करते हैं[हैच-वीसीएस](https://github.com/ofek/hatch-vcs)शिप करने के लिए हुक प्लगइन बनाएं`_version.py`फ़ाइल करें ताकि संस्करण का उपयोग रनटाइम पर किया जा सके
-   पहिये का उपयोग करते हैं[हैच-mypyc](https://github.com/ofek/hatch-mypyc)पहले सभी कोड संकलित करने के लिए हुक प्लगइन बनाएं[Mypyc](https://github.com/mypyc/mypyc)
-   [निर्माण](.github/workflows/build.yml)GitHub वर्कफ़्लो दिखाता है कि कैसे करें:
    -   उपयोग[सिबिल्डव्हील](https://github.com/pypa/cibuildwheel)प्रत्येक प्लेटफ़ॉर्म के लिए बाइनरी व्हील वितरित करना
    -   उपयोग[अनुप्रयोग](https://hatch.pypa.io/latest/plugins/builder/app/)प्रत्येक प्लेटफ़ॉर्म के लिए स्टैंडअलोन वितरण बनाने का लक्ष्य बनाएं

## लाइसेंस

`threagile-builder`की शर्तों के तहत वितरित किया जाता है[साथ](https://spdx.org/licenses/MIT.html)लाइसेंस.

## 100 - परिचय

देखना[README.md](./100/README.md)

## 200 - आवश्यकताएँ

देखना[README.md](./200/README.md)

## 300 - हमारे एप्लिकेशन का निर्माण

देखना[README.md](./300/README.md)

## 400 - निष्कर्ष

देखना[README.md](./400/README.md)
