Util
==================

This module only contains methods to support common tasks.

Util.extend
------------------
<div class="sintax">util.extend(destination, source) <span>⇒ destination</span></div>

Merge the contents of two objects together.


Util.inherits
------------------
<div class="sintax">util.inherits(child, parent) <span>⇒ child</span></div>

Gets prototype inheritance trought super-class method calling.


Util.isElement
------------------
<div class="sintax">util.isElement(element) <span>⇒ boolean</span></div>

Checks if element is a `node element` or `document element`.


Util.isNodeList
------------------
<div class="sintax">util.isNodeList(elements) <span>⇒ boolean</span></div>

Checks if elements are a `node list` or `html collection`.


Util.unique
------------------
<div class="sintax">util.unique(array) <span>⇒ array</span></div>

Produces a duplicate-free version of the array.


Util.pluck
------------------
<div class="sintax">util.pluck(array, property) <span>⇒ array</span></div>

Produces an array with the content of property of items.


Util.put
------------------
<div class="sintax">util.put(array, property, value) <span>⇒ array</span></div>

Adds a value in all properties of array items.


Util.prefix
------------------
<div class="sintax">util.prefix(property, obj) <span>⇒ mixed</span></div>

Finds a property in an object using prefixes: *moz*, *webkit*, *ms* and *o*. 


Util.applier
------------------
<div class="sintax">util.applier(fn, context, args) <span>⇒ function</span></div>

Returns a function thats wrap a call to `fn` with `this` setted to `context` and `args` added to the end of params.


Util.applierLeft
------------------
<div class="sintax">util.applierLeft(fn, context, args) <span>⇒ function</span></div>

Works like *applier* except that `args` are added to the begining of params.


Util.curry
------------------
<div class="sintax">util.curry(fn) <span>⇒ function</span></div>

It is a *applierLeft* thats keep the `this` to the same value that the call already has.


Util.getUid
------------------
<div class="sintax">util.getUid(element) <span>⇒ number</span></div>

Gets an unique identifier to an element.
