**Rye** is a lightweight javascript library for DOM manipulation and events with support for **all modern browsers** including IE9+. It has support for **touch events/gestures**, an **even emitter** which you can use to extend your own objects, and a **jQuery-compatible** API.

Introduction
==================

Rye's API is similar to jQuery but not totally compatible. Inconsistencies like `.map()` behavior, and `map/each()` argument ordering are fixed in Rye.

It doesn't do any gymnastics to subclass `Array`, instead elements are stored in the `.elements` property. This means that array methods on a Rye instance return another `Rye` instance, but you can access the elements array directly with `.get()` or `.elements` and use all the native `Array` methods (ex: `$('li').each()` vs `$('li').get().forEach()`).

Browser compatibility
------------------

| Browser | Version |
|=========|=========|
| Chrome  |6+       |
| Safari  |5+       |
| Firefox |6+       |
| IE      |9+       |
| Opera   |11.5+    |

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



