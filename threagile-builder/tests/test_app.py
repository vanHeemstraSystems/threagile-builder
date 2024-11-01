# threagile-builder/tests/test_app.py
import unittest


class TestStringMethods(unittest.TestCase):
    def test_upper(self):
        self.assertEqual("foo".upper(), "FOO")


if __name__ == "__main__":
    unittest.main()