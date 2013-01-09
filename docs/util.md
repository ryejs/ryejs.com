Util
==================

Utility methods. Use with `var util = Rye.require('Util')`.

@extend
------------------
<div class="api">
    util.extend(destination, source) <span>⇒ destination</span>
</div>

Merge the contents of two objects together.


@inherits
------------------
<div class="api">
    util.inherits(child, parent) <span>⇒ child</span>
</div>

Sets up prototypal inheritance through a ghost constructor.


@isElement
------------------
<div class="api">
    util.isElement(element) <span>⇒ boolean</span>
</div>

Checks if `element` is a `NODE_ELEMENT` or `DOCUMENT_ELEMENT`.


@isNodeList
------------------
<div class="api">
    util.isNodeList(elements) <span>⇒ boolean</span>
</div>

Checks if `elements` is a `NodeList` or `HTMLCollection`.


@unique
------------------
<div class="api">
    util.unique(array) <span>⇒ array</span>
</div>

Produces a duplicate-free version of the array.


@pluck
------------------
<div class="api">
    util.pluck(array, property) <span>⇒ array</span>
</div>

Pluck an attribute from each item in `array`.


@put
------------------
<div class="api">
    util.put(array, property, value) <span>⇒ array</span>
</div>

Opposite of pluck. Set `property` for each item in `array`.


@prefix
------------------
<div class="api">
    util.prefix(property, obj) <span>⇒ mixed</span>
</div>

Returns a standard *or* browser-prefixed methods (`moz`, `webkit`, `ms`, `o`) if found.


@applier
------------------
<div class="api">
    util.applier(direction, fn, context, args) <span>⇒ function</span>
    util.applier('left', fn, context, args) <span>⇒ function</span>
    util.applier('right', fn, context, args) <span>⇒ function</span>
</div>

Returns a function that calls `fn.apply(context, ...)`. The `args` array is (right or left)-joined to the function call parameters.


@curry
------------------
<div class="api">
    util.curry(fn, ...) <span>⇒ function</span>
</div>

Returns a [curried](http://en.wikipedia.org/wiki/Currying)/partially-applied function with the rest of the arguments.


@getUid
------------------
<div class="api">
    util.getUid(element) <span>⇒ number</span>
</div>

Gets an unique identifier for an element.


@type
------------------
<div class="api">
    util.type(obj) <span>⇒ string</span>
</div>


@is
------------------
<div class="api">
    util.is(obj, type) <span>⇒ boolean</span>
</div>

