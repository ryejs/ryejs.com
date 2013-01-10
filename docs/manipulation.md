Manipulation
==================

text
------------------
<div class="api">
    .text(text) <span>⇒ self</span><br>
    .text() <span>⇒ text</span>
</div>

Set or get `textContent`. If no argument given, returns the first element's value.


html
------------------
<div class="api">
    .html(html) <span>⇒ self</span><br>
    .html() <span>⇒ html</span>
</div>

Set or get `innerHTML`. If no argument given, returns the first element's value.


empty
------------------
<div class="api">
    .empty() <span>⇒ self</span>
</div>

Sets `innerHTML` to an empty string `''` for all elements.


append
------------------
<div class="api">
    .append(html) <span>⇒ self</span><br>
    .append(element) <span>⇒ self</span>
</div>

Append `html` or `element` to each element in the collection. If the argument is an HTML element, it is cloned before each operation.


prepend
------------------
<div class="api">
    .prepend(html) <span>⇒ self</span><br>
    .prepend(element) <span>⇒ self</span>
</div>

Prepend 'html' or 'element' to each element in the collection.


after
------------------
<div class="api">
    .after(html) <span>⇒ self</span><br>
    .after(element) <span>⇒ self</span>
</div>

Insert `html` or `element` *after* each element in the collection.


before
------------------
<div class="api">
    .before(html) <span>⇒ self</span><br>
    .before(element) <span>⇒ self</span>
</div>

Insert `html` or `element` *before* each element in the collection.


clone
------------------
<div class="api">
    .clone(deep) <span>⇒ rye collection</span>
</div>

Clone elements with [`cloneNode(deep)`](https://developer.mozilla.org/en-US/docs/DOM/Node.cloneNode). `deep` defaults to true (copy all child nodes). 


val
------------------
<div class="api">
    .val() <span>⇒ string</span><br>
    .val(value) <span>⇒ self</span>
</div>

Get or set the `value` property for all elements. If no argument given, returns value for the first element only. For a `<select multiple>` an array of values is returned.


attr
------------------
<div class="api">
    .attr(name) <span>⇒ string</span><br>
    .attr(name, value) <span>⇒ self</span><br>
    .attr({name: value, ...}) <span>⇒ self</span>
</div>

When no `value` is given, reads specified attribute from the first element in the collection using `getAttribute`. 

When `value` or an object with `key:value` pairs is given, set the attribute to `value` on each element in the collection using `setAttribute`.


prop
------------------
<div class="api">
    .prop(name) <span>⇒ string</span><br>
    .prop(name, value) <span>⇒ self</span><br>
    .prop({name: value, ...}) <span>⇒ self</span>
</div>

Get or set the *property* `name` for each element. Implemented as an alias to [`util.pluck`](#util-pluck) and [`util.put`](#util-put).


Rye.create
----------
<div class="api">
    Rye.create(html) <span>⇒ rye collection</span>
</div>

Turn a string containing HTML into a DOM element tree.

@getValue
------------------
<div class="api">
    manipulation.getValue(element) <span>⇒ string</span>
</div>

Get the `value` property of `element`. Returns an array of values in case `element` is a `<select multiple>`.


@getAttribute
------------------
<div class="api">
    manipulation.getAttribute(element, name) <span>⇒ string</span>
</div>

Get the value of `name` for a given `element`. Falls back to `getValue` for getting the `value` attribute.
