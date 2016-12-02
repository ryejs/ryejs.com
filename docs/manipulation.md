Manipulation
==================

text
------------------

    .text(text) ⤳ self
    .text() ⤳ text

Set or get `textContent`. If no argument given, returns the first element's value.


html
------------------

    .html(html) ⤳ self
    .html() ⤳ html

Set or get `innerHTML`. If no argument given, returns the first element's value.


empty
------------------

    .empty() ⤳ self

Sets `innerHTML` to an empty string `''` for all elements.


append
------------------

    .append(html) ⤳ self
    .append(element) ⤳ self

Append `html` or `element` to each element in the collection. If the argument is an HTML element, it is cloned before each operation.


prepend
------------------

    .prepend(html) ⤳ self
    .prepend(element) ⤳ self

Prepend 'html' or 'element' to each element in the collection.


after
------------------

    .after(html) ⤳ self
    .after(element) ⤳ self

Insert `html` or `element` *after* each element in the collection.


before
------------------

    .before(html) ⤳ self
    .before(element) ⤳ self

Insert `html` or `element` *before* each element in the collection.


clone
------------------

    .clone(deep) ⤳ rye collection

Clone elements with [`cloneNode(deep)`](https://developer.mozilla.org/en-US/docs/DOM/Node.cloneNode). `deep` defaults to true (copy all child nodes). 


remove
------------------

    .remove() ⤳ rye collection

Remove elements that are in the collection. 


val
------------------

    .val() ⤳ string
    .val(value) ⤳ self

Get or set the `value` property for all elements. If no argument given, returns value for the first element only. For a `<select multiple>` an array of values is returned.


attr
------------------

    .attr(name) ⤳ string
    .attr(name, value) ⤳ self
    .attr({name: value, ...}) ⤳ self

When no `value` is given, reads specified attribute from the first element in the collection using `getAttribute`. 

When `value` or an object with `key:value` pairs is given, set the attribute to `value` on each element in the collection using `setAttribute`.


removeAttr
------------------

    .removeAttr(name) ⤳ self

Remove `name` attribute on each element in the collection using `removeAttribute`.


prop
------------------

    .prop(name) ⤳ string
    .prop(name, value) ⤳ self
    .prop({name: value, ...}) ⤳ self

Get or set the *property* `name` for each element. Implemented as an alias to [`util.pluck`](#util-@pluck) and [`util.put`](#util-@put).


Rye.create
----------

    Rye.create(html) ⤳ rye collection

Turn a string containing HTML into a DOM element tree.

@getValue
------------------

    manipulation.getValue(element) ⤳ string

Get the `value` property of `element`. Returns an array of values in case `element` is a `<select multiple>`.


@getAttribute
------------------

    manipulation.getAttribute(element, name) ⤳ string

Get the value of `name` for a given `element`. Falls back to `getValue` for getting the `value` attribute.
