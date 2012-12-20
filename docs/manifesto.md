**Rye** is a light javascript library for DOM manipulation and events with support for all modern browsers including IE9+.

<div class="buttons">
    <iframe src="http://ghbtns.com/github-btn.html?user=jcemer&amp;repo=rye&amp;type=watch&amp;count=true&amp;size=small" allowtransparency="true" frameborder="0" scrolling="0" width="95" height="30"></iframe>
    <iframe src="http://ghbtns.com/github-btn.html?user=jcemer&amp;repo=rye&amp;type=fork&amp;count=true&amp;size=small" allowtransparency="true" frameborder="0" scrolling="0" width="95" height="30"></iframe>
</div>

API
==================

The API is similar to jQuery but not totally compatible. Inconsistencies like `.map()` behavior, `map/each()` argument ordering are fixed in Rye.

It doesn't do any trickery to subclass `Array`, elements are stored in the `.elements` property instead. This means that array methods ran on a Rye instance return another `Rye` instance, while methods ran on `.get()` or `.elements` return instances of `Array` (ex: `$('li').each()` vs `$('li').get().forEach()`).

Browser compatiblity
------------------

| Browser | Version |
|=========|=========|
| Chrome  |6+       |
| Safari  |5+       |
| Firefox |6+       |
| IE      |9+       |
| Opera   |11.5+    |

### Mobile

| Browser           | Version |
|===================|=========|
| iOS               | 4.1+    |
| Android           | 4.0+    |
| Blackberry        | 10+     |
| Opera Mobile      | 11.1+   |
| Chrome (Android)  | 18+     |
| Firefox (Android) | 15+     |

Not going to happen
------------------

- event aliases like `delegate`, `live`, `click`, `focus`
- cancel bubbling and prevent default by returning `false`
- effects and animation - do it with CSS
- defining global `$`
- traditional event namespacing
- `end()` or other chain-aware methods



