Util
==================

Utility methods. Use with `var util = Rye.require('Util')`.

@extend
------------------

    util.extend(destination, source) ⤳ destination

Merge the contents of two objects together.


@inherits
------------------

    util.inherits(child, parent) ⤳ child

Sets up prototypal inheritance through a ghost constructor.


@isElement
------------------

    util.isElement(element) ⤳ boolean

Checks if `element` is a `NODE_ELEMENT` or `DOCUMENT_ELEMENT`.


@isNodeList
------------------

    util.isNodeList(elements) ⤳ boolean

Checks if `elements` is a `NodeList` or `HTMLCollection`.


@unique
------------------

    util.unique(array) ⤳ array

Produces a duplicate-free version of the array.


@pluck
------------------

    util.pluck(array, property) ⤳ array

Pluck an attribute from each item in `array`.


@put
------------------

    util.put(array, property, value) ⤳ array

Opposite of pluck. Set `property` for each item in `array`.


@prefix
------------------

    util.prefix(property, obj) ⤳ mixed

Returns a standard *or* browser-prefixed methods (`moz`, `webkit`, `ms`, `o`) if found.


@applier
------------------

    util.applier(direction, fn, context, args) ⤳ function
    util.applier('left', fn, context, args) ⤳ function
    util.applier('right', fn, context, args) ⤳ function

Returns a function that calls `fn.apply(context, ...)`. The `args` array is (right or left)-joined to the function call parameters.


@curry
------------------

    util.curry(fn, ...) ⤳ function

Returns a [curried](http://en.wikipedia.org/wiki/Currying)/partially-applied function with the rest of the arguments.


@getUid
------------------

    util.getUid(element) ⤳ number

Gets an unique identifier for an element.


@type
------------------

    util.type(obj) ⤳ string

Returns one of [`object`, `function`, `array`, `date`, `string`, `number`, `boolean`, `null`, `undefined`, `math`, `global`] by calling `Object.prototype.toString` on `obj`.

@is
------------------

    util.is(type, obj) ⤳ boolean

Checks that obj is of type `type` (calling `util.type`). `type` can contain multiple values, i.e. `util.is('string number boolean', foo)`.
