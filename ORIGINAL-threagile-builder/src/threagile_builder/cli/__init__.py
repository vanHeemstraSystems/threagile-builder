# SPDX-FileCopyrightText: 2024-present Willem van Heemstra <wvanheemstra@icloud.com>
#
# SPDX-License-Identifier: MIT
import click

from threagile_builder._version import version
from threagile_builder.fib import fibonacci

# NOTE: The group/command decorators must come last to avoid the following issue at runtime:
# https://github.com/pallets/click/issues/1199


@click.version_option(version=version, prog_name='threagile-builder')
@click.group()
def threagile_builder():
    pass


@click.argument('n', type=int)
@threagile_builder.command()
def fib(n: int):
    click.echo(fibonacci(n))