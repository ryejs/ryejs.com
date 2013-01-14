Data
==================

Store arbitrary data associated with the matched elements.

data
------------------

    .data(key[, value]) ⤳ self
    .data({property: value, ...}) ⤳ self

Get or set data attached to each element in the `.elements` array.

@set
------------------

    data.set(element, key, value)

Stores `value` in `key` for `element`.


@get
------------------

    data.get(element, key) ⤳ mixed

Returns the value in `key` for `element`.