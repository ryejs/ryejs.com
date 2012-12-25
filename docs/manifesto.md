{{about.md}}

<div class="buttons">
    <iframe src="http://ghbtns.com/github-btn.html?user=jcemer&amp;repo=rye&amp;type=watch&amp;count=true&amp;size=small" allowtransparency="true" frameborder="0" scrolling="0" width="95" height="20"></iframe>
    <iframe src="http://ghbtns.com/github-btn.html?user=jcemer&amp;repo=rye&amp;type=fork&amp;count=true&amp;size=small" allowtransparency="true" frameborder="0" scrolling="0" width="95" height="20"></iframe>
</div>

Introduction
==================

Rye's API is similar to jQuery but not totally compatible. Inconsistencies like `.map()` behavior, and `map/each()` argument ordering are fixed in Rye.

It doesn't do any gymnastics to subclass `Array`, instead elements are stored in the `.elements` property. This means that array methods on a Rye instance return another `Rye` instance, but you can access the elements array directly with `.get()` or `.elements` and use all the native `Array` methods (ex: `$('li').each()` vs `$('li').get().forEach()`).


Browser compatibility
------------------

{{browsers.md}}


Not going to happen
------------------

- event aliases like `delegate`, `live`, `click`, `focus`
- cancel bubbling and prevent default by returning `false`
- effects and animation - do it with CSS
- defining global `$`
- traditional event namespacing
- `end()` or other chain-aware methods



