{{about.md}}

<div class="buttons">
    <iframe src="http://ghbtns.com/github-btn.html?user=ryejs&amp;repo=rye&amp;type=watch&amp;count=true&amp;size=small" allowtransparency="true" frameborder="0" scrolling="0" width="95" height="20"></iframe>
    <iframe src="http://ghbtns.com/github-btn.html?user=ryejs&amp;repo=rye&amp;type=fork&amp;count=true&amp;size=small" allowtransparency="true" frameborder="0" scrolling="0" width="95" height="20"></iframe>
</div>

Introduction
==================

Rye is a browser library written from the ground-up with modern browsers in mind. It is an attempt to bring together the best practices in javascript, borrowing from both browser and node.js code patterns. 

It also tries to be as minimal as possible, using standard browser APIs and ES5 methods whenever possible. Reading the [source code](https://github.com/ryejs/rye/tree/master/lib) is encouraged.

Rye is built as a collection of modules. You can use it whole, or just import specific modules you need. The API should be familiar to everyone who has worked with jQuery or Zepto, but not totally compatible; inconsistencies like `.map/.each` argument order and behavior have been fixed, and follow the native `map/forEach` methods.

One important thing to note is that Rye doesn't try to subclass `Array` in any way. A `Rye` instance is just a standard object, with the current elements selection stored in the `.elements` array. All standard ES5 array methods are available and operate on the elements collection; while still providing traversing methods you might know from other libraries like `.next`, `.prev`, `.children`, etc.


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



