# SPDX-FileCopyrightText: 2024-present Willem van Heemstra <wvanheemstra@icloud.com>
#
# SPDX-License-Identifier: MIT
from threagile_builder.fib import fibonacci


def test():
    assert fibonacci(32) == 2178309  # noqa: PLR2004