Manipulation
==================

text
------------------
<div class="api">
    .text(text) <span>⇒ self</span><br>
    .text() <span>⇒ text</span>
</div>

Sets or gets `textContent`. If no argument given it returns only the first element's value.


html
------------------
<div class="api">
    .html(html) <span>⇒ self</span><br>
    .html() <span>⇒ html</span>
</div>

Sets or gets `innerHTML`. If no argument given it returns only the first element's value.


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

Appends `html` or `element` to each element in the collection. If the argument is an HTML element, it is cloned before appending.


prepend
------------------
<div class="api">
    .prepend(html) <span>⇒ self</span><br>
    .prepend(element) <span>⇒ self</span>
</div>

Prepends 'html' or 'element' to each element in the collection.


after
------------------
<div class="api">
    .after(html) <span>⇒ self</span><br>
    .after(element) <span>⇒ self</span>
</div>

Inserts `html` or `element` after each element in the collection.


before
------------------
<div class="api">
    .before(html) <span>⇒ self</span><br>
    .before(element) <span>⇒ self</span>
</div>

Inserts `html` or `element` before each element in the collection.


clone
------------------
<div class="api">
    .clone(deep) <span>⇒ rye collection</span>
</div>

Duplicate all elements with [`cloneNode(deep)`](https://developer.mozilla.org/en-US/docs/DOM/Node.cloneNode). `deep` defaults to true (copy all child nodes).


val
------------------
<div class="api">
    .val() <span>⇒ string</span><br>
    .val(value) <span>⇒ self</span>
</div>

Gets or sets the `value` property for all elements. If no argument given, returns value for the first element only. For a `<select multiple>` an array of values is returned.


attr
------------------
<div class="api">
    .attr(name) <span>⇒ string</span><br>
    .attr(name, value) <span>⇒ self</span><br>
    .attr({name: value, ...}) <span>⇒ self</span>
</div>

When no `value` is given, reads specified attribute from the first element in the collection. 

When `value` is given or an object with name as key is passing, sets the attribute to that `value` on each element in the collection.


prop
------------------
<div class="api">
    .prop(name) <span>⇒ string</span><br>
    .prop(name, value) <span>⇒ self</span><br>
    .prop({name: value, ...}) <span>⇒ self</span>
</div>

It is just a wrap to `util.pluck(elements, property)` that iterate over collection.


@getValue
------------------
<div class="api">
    manipulation.getValue(element) <span>⇒ string</span>
</div>

Gets a field `value` of a given `element`.


@getAttribute
------------------
<div class="api">
    manipulation.getAttribute(element, name) <span>⇒ string</span>
</div>

Gets an attribute `name` of a given `element`. This method fallbacks to `getValue()` for value attribute.





