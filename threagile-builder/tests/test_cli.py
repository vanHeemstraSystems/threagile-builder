# SPDX-FileCopyrightText: 2024-present Willem van Heemstra <wvanheemstra@icloud.com>
#
# SPDX-License-Identifier: MIT


def test(threagile_buider):
    result = threagile_builder('fib', '32')

    assert result.exit_code == 0, result.output
    assert result.output == '2178309\n'