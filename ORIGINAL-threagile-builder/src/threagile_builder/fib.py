# SPDX-FileCopyrightText: 2024-present Willem van Heemstra <wvanheemstra@icloud.com>
#
# SPDX-License-Identifier: MIT


def fibonacci(n: int) -> int:
    if n <= 1:
        return n
    else:
        return fibonacci(n - 2) + fibonacci(n - 1)