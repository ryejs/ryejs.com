Util
==================

This module only contains methods to support common tasks.

extend
------------------
<div class="api">extend(destination, source) <span>⇒ destination</span></div>

Merge the contents of two objects together.


inherits
------------------
<div class="api">inherits(child, parent) <span>⇒ child</span></div>

Gets prototype inheritance trought super-class method calling.


isElement
------------------
<div class="api">isElement(element) <span>⇒ boolean</span></div>

Checks if element is a `node element` or `document element`.


isNodeList
------------------
<div class="api">isNodeList(elements) <span>⇒ boolean</span></div>

Checks if elements are a `node list` or `html collection`.


unique
------------------
<div class="api">unique(array) <span>⇒ array</span></div>

Produces a duplicate-free version of the array.


pluck
------------------
<div class="api">pluck(array, property) <span>⇒ array</span></div>

Produces an array with the content of property of items.


put
------------------
<div class="api">put(array, property, value) <span>⇒ array</span></div>

Adds a value in all properties of array items.


prefix
------------------
<div class="api">prefix(property, obj) <span>⇒ mixed</span></div>

Finds a property in an object using prefixes: *moz*, *webkit*, *ms* and *o*. 


applier
------------------
<div class="api">applier(fn, context, args) <span>⇒ function</span></div>

Returns a function thats wrap a call to `fn` with `this` setted to `context` and `args` added to the end of params.


applierLeft
------------------
<div class="api">applierLeft(fn, context, args) <span>⇒ function</span></div>

Works like *applier* except that `args` are added to the begining of params.


curry
------------------
<div class="api">curry(fn) <span>⇒ function</span></div>

It is a *applierLeft* thats keep the `this` to the same value that the call already has.


getUid
------------------
<div class="api">getUid(element) <span>⇒ number</span></div>

Gets an unique identifier to an element.
