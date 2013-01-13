Traversal
==================

find
------------------
<div class="api">
    .find(selector) <span>⤳ rye collection</span>
</div>

Returns a new Rye collection containing the descendants of the current `collection.elements`, filtered by `selector`. Uses `.querySelectorAll` when available.


index
------------------
<div class="api">
    .index(selector) <span>⤳ number</span>
</div>

Returns the index at which an element matching `selector` can be found. If no argument given, returns the index of the first element in the collection relative to it's siblings.


add
------------------
<div class="api">
    .add(elements) <span>⤳ rye collection</span><br>
    .add(Rye) <span>⤳ rye collection</span><br>
    .add(selector[, context]) <span>⤳ rye collection</span>
</div>

Add elements to `collection.elements` and return a new collection. Unlike `push` it doesn't modify the objects `.elements` array.


pluckNode
------------------
<div class="api">
    .pluckNode(property) <span>⤳ rye collection</span>
</div>

Uses DOM APIs to create a new set of elements. `property` should be a method of `HTMLElement`, ex. `parentNode` or `childNodes`. Filters nodes using [`util.isElement`](#util-@iselement).

Used internally by `next()` and `prev()`.


next
------------------
<div class="api">
    .next() <span>⤳ rye collection</span>
</div>

Get the immediately following sibling of each element in collection.


prev
------------------
<div class="api">
    .prev() <span>⤳ rye collection</span>
</div>

Get the immediately preceding sibling of each element in collection.


siblings
------------------
<div class="api">
    .siblings() <span>⤳ rye collection</span>
</div>

Get all the siblings of each element in collection. Returns a unique set.


parent
------------------
<div class="api">
    .parent([selector]) <span>⤳ rye collection</span>
</div>

Get the parent of each element in collection, optionally filtered by `selector`.


parents
------------------
<div class="api">
    .parents([selector]) <span>⤳ rye collection</span>
</div>

Get the ancestors of each element in collection, optionally filtered by `selector`.


closest
------------------
<div class="api">
    .closest(selector) <span>⤳ rye collection</span>
</div>

For each element in collection, get the first element that matches `selector` by testing the element itself then traversing up through its ancestors.


children
------------------
<div class="api">
    .children([selector]) <span>⤳ rye collection</span>
</div>

Get the children of each element in collection, optionally filtered by `selector`.



Filter
==================

filter
------------------
<div class="api">
    .filter(selector[, inverse]) <span>⤳ rye collection</span><br>
    .filter(element[, inverse]) <span>⤳ rye collection</span><br>
    .filter(Rye[, inverse]) <span>⤳ rye collection</span><br>
    .filter(fn[, inverse]) <span>⤳ rye collection</span>
</div>

Returns a new collection keeping elements that match `selector`, `element`, `Rye` or for which `fn` returns `true`, as in `Array.prototype.filter`.

Provide a truthy value to `inverse` to reverse the result set.

filter not
------------------
<div class="api">
    .filter('!' + selector) <span>⤳ rye collection</span>
</div>

Aliast to `.filter(selector, inverse=true)`. Example: `collection.filter('!.someclass').


contains
------------------
<div class="api">
    .contains(selector) <span>⤳ rye collection</span>
</div>

Returns a new collection containg elements where at least one descendant matches `seletor`.


is
------------------
<div class="api">
    .is(selector) <span>⤳ boolean</span><br>
    .is(element[, inverse]) <span>⤳ boolean</span><br>
    .is(Rye[, inverse]) <span>⤳ boolean</span><br>
    .is(fn[, inverse]) <span>⤳ boolean</span>
</div>

Check if the current collection matches `selector`, `element`, or the provided function.


first
------------------
<div class="api">
    .first() <span>⤳ rye collection</span>
</div>

Get the first element in the collection.


last
------------------
<div class="api">
    .last() <span>⤳ rye collection</span>
</div>

Get the last element in the collection.


Query
==================

Stand-alone usage: `var query = Rye.require('Query')`

Query utilities implemented using `querySelectorAll` and `matchesSelector` APIs.

@matches
------------------
<div class="api">
    query.matches(element, selector) <span>⤳ boolean</span><br>
    query.matches(element, element) <span>⤳ boolean</span><br>
    query.matches(element, Rye) <span>⤳ boolean</span>
</div>

Check that element matches `selector`, `element` or another collection. Uses native `matchesSelector` when available.


@qsa
------------------
<div class="api">
    query.qsa(element, selector) <span>⤳ array</span>
</div>

Perform a CSS selector query using `element` as root. Uses `querySelectorAll`, returns a standard `Array`.


@getClosestNode
------------------
<div class="api">
    query.getClosestNode(element, method[, selector]) <span>⤳ element</span>
</div>

Traversing helper. Recursively call `method` on `element` until `element` matches `selector`. Returns HTML nodes only.

