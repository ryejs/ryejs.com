Data
==================

Store arbitrary data associated with the matched elements.

data
------------------
<div class="api">
.data(key[, value]) <span>⇒ self</span><br>
.data({property: value, ...}) <span>⇒ self</span><br>
</div>

Allows to attach and get data of any type to DOM elements.

Data.set
------------------
<div class="api">data.set(element, key, value)</div>

Stores `value` in `key` of one `element`.


Data.get
------------------
<div class="api">data.get(element, key) <span>⇒ mixed</span></div>

Returns the value in `key` of one `element`.