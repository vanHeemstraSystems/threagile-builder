Usage
=====

.. _installation:

Installation
------------

To use Threagile Builder, first install it using pip:

.. code-block:: console

   (.venv) $ pip install threagile_builder

Getting Started
----------------

To retrieve a list of random ingredients,
you can use the ``threagile_builder.get_random_ingredients()`` function:

.. autofunction:: threagile_builder.get_random_ingredients

The ``kind`` parameter should be either ``"meat"``, ``"fish"``,
or ``"veggies"``. Otherwise, :py:func:`threagile_builder.get_random_ingredients`
will raise an exception.

.. autoexception:: threagile_builder.InvalidKindError

For example:

>>> import threagile_builder
>>> threagile_builder.get_random_ingredients()
['shells', 'gorgonzola', 'parsley']