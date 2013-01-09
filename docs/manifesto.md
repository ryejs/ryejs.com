{{about.md}}

<div class="buttons">
    <iframe src="http://ghbtns.com/github-btn.html?user=jcemer&amp;repo=rye&amp;type=watch&amp;count=true&amp;size=small" allowtransparency="true" frameborder="0" scrolling="0" width="95" height="20"></iframe>
    <iframe src="http://ghbtns.com/github-btn.html?user=jcemer&amp;repo=rye&amp;type=fork&amp;count=true&amp;size=small" allowtransparency="true" frameborder="0" scrolling="0" width="95" height="20"></iframe>
</div>

Introduction
==================

Rye is a lightweight library designed for use in modern browsers. It includes utilities for DOM manipulation, events, XHR requests, data storage and touch events.

The API should be familiar to everyone who's worked with jQuery. Some inconsistencies like `.map/.each` argument order and behavior have been fixed here, and follow the standard `map/forEach` specification.

One important thing to note is that Rye doesn't try to subclass `Array` in any way. A `Rye` instance is just a standard object, with the current elements selection stored in the `.elements` array. All standard ES5 array methods are available and operate on the elements collection; querying and filtering methods you might know from other libraries like `.next()`, `.prev()`, etc, are also available.


Browser compatibility
------------------

{{browsers.md}}


Things Rye won't do
-------------------

- event aliases like `delegate`, `live`, `click`, `focus`
- cancel bubbling and prevent default by returning `false`
- effects and animation - use CSS transitions
- export a global `$` variable
- event namespacing (use your own [`DOMEventEmitter`](#domeventemitter) instead)
- chain-aware methods like `end()`



