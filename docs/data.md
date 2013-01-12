Data
==================

Store arbitrary data associated with the matched elements.

data
------------------
<div class="api">
    .data(key[, value]) <span>⤳ self</span><br>
    .data({property: value, ...}) <span>⤳ self</span><br>
</div>

Get or set data attached to each element in the `.elements` array.

@set
------------------
<div class="api">
    data.set(element, key, value)
</div>

Stores `value` in `key` for `element`.


@get
------------------
<div class="api">
    data.get(element, key) <span>⤳ mixed</span>
</div>

Returns the value in `key` for `element`.