Manipulation
==================

text
------------------
<div class="api">
    .text(text) <span>⇒ self</span><br>
    .text() <span>⇒ text</span>
</div>

Sets the text content of all elements. When no content is given, returns the text content of the first element in the collection.


html
------------------
<div class="api">
    .html(html) <span>⇒ self</span><br>
    .html() <span>⇒ html</span>
</div>

Sets the inner html of all elements. When no html is given, returns the inner html of the first element in the collection.


empty
------------------
<div class="api">
    .empty() <span>⇒ self</span>
</div>

Sets to empty the inner html of all elements.


append
------------------
<div class="api">
    .append(html) <span>⇒ self</span><br>
    .append(element) <span>⇒ self</span>
</div>

Insert `html` or `element` to the end of each element in the collection.


prepend
------------------
<div class="api">
    .prepend(html) <span>⇒ self</span><br>
    .prepend(element) <span>⇒ self</span>
</div>

Insert `html` or `element` to the beginning of each element in the collection.


after
------------------
<div class="api">
    .after(html) <span>⇒ self</span><br>
    .after(element) <span>⇒ self</span>
</div>

Insert `html` or `element` after each element in the collection.


before
------------------
<div class="api">
    .before(html) <span>⇒ self</span><br>
    .before(element) <span>⇒ self</span>
</div>

Insert `html` or `element` before each element in the collection.


clone
------------------
<div class="api">
    .clone() <span>⇒ rye collection</span>
</div>

Duplicate all elements in the collection via deep clone.


val
------------------
<div class="api">
    .val() <span>⇒ string</span><br>
    .val(value) <span>⇒ self</span>
</div>

When no value is given, return the value of the first element. For `<select multiple>`, an array of values is returend. 

When a `value` is given, set all elements to this value.


attr
------------------
<div class="api">
    .attr(name) <span>⇒ string</span><br>
    .attr(name, value) <span>⇒ self</span><br>
    .attr({name: value, ...}) <span>⇒ self</span>
</div>

When no `value` is given, reads specified attribute from the first element in the collection. 

When `value` is given or an object with name as key is passing, sets the attribute to that `value` on each element in the collection.


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





