# SPDX-FileCopyrightText: 2024-present Willem van Heemstra <wvanheemstra@icloud.com>
#
# SPDX-License-Identifier: MIT
import sys

if __name__ == '__main__':
    from threagile_builder.cli import threagile_builder

    sys.exit(threagile_builder())