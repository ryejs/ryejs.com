Traversal
==================

find
------------------

    .find(selector) ⤳ rye collection

Returns a new Rye collection containing the descendants of the current `collection.elements`, filtered by `selector`. Uses `.querySelectorAll` when available.


index
------------------

    .index(selector) ⤳ number

Returns the index at which an element matching `selector` can be found. If no argument given, returns the index of the first element in the collection relative to it's siblings.


add
------------------

    .add(elements) ⤳ rye collection
    .add(Rye) ⤳ rye collection
    .add(selector[, context]) ⤳ rye collection

Add elements to `collection.elements` and return a new collection. Unlike `push` it doesn't modify the objects `.elements` array.


pluckNode
------------------

    .pluckNode(property) ⤳ rye collection

Uses DOM APIs to create a new set of elements. `property` should be a method of `HTMLElement`, ex. `parentNode` or `childNodes`. Filters nodes using [`util.isElement`](#util-@iselement).

Used internally by `next()` and `prev()`.


next
------------------

    .next() ⤳ rye collection

Get the immediately following sibling of each element in collection.


prev
------------------

    .prev() ⤳ rye collection

Get the immediately preceding sibling of each element in collection.


siblings
------------------

    .siblings() ⤳ rye collection

Get all the siblings of each element in collection. Returns a unique set.


parent
------------------

    .parent([selector]) ⤳ rye collection

Get the parent of each element in collection, optionally filtered by `selector`.


parents
------------------

    .parents([selector]) ⤳ rye collection

Get the ancestors of each element in collection, optionally filtered by `selector`.


closest
------------------

    .closest(selector) ⤳ rye collection

For each element in collection, get the first element that matches `selector` by testing the element itself then traversing up through its ancestors.


children
------------------

    .children([selector]) ⤳ rye collection

Get the children of each element in collection, optionally filtered by `selector`.



Filter
==================

filter
------------------

    .filter(selector[, inverse]) ⤳ rye collection
    .filter(element[, inverse]) ⤳ rye collection
    .filter(Rye[, inverse]) ⤳ rye collection
    .filter(fn[, inverse]) ⤳ rye collection

Returns a new collection keeping elements that match `selector`, `element`, `Rye` or for which `fn` returns `true`, as in `Array.prototype.filter`.

Provide a truthy value to `inverse` to reverse the result set.

filter not
------------------

    .filter('!' + selector) ⤳ rye collection

Aliast to `.filter(selector, inverse=true)`. Example: `collection.filter('!.someclass').


contains
------------------

    .contains(selector) ⤳ rye collection

Returns a new collection containg elements where at least one descendant matches `seletor`.


is
------------------

    .is(selector) ⤳ boolean
    .is(element[, inverse]) ⤳ boolean
    .is(Rye[, inverse]) ⤳ boolean
    .is(fn[, inverse]) ⤳ boolean

Check if the current collection matches `selector`, `element`, or the provided function.


first
------------------

    .first() ⤳ rye collection

Get the first element in the collection.


last
------------------

    .last() ⤳ rye collection

Get the last element in the collection.


Query
==================

Stand-alone usage: `var query = Rye.require('Query')`

Query utilities implemented using `querySelectorAll` and `matchesSelector` APIs.

@matches
------------------

    query.matches(element, selector) ⤳ boolean
    query.matches(element, element) ⤳ boolean
    query.matches(element, Rye) ⤳ boolean

Check that element matches `selector`, `element` or another collection. Uses native `matchesSelector` when available.


@qsa
------------------

    query.qsa(element, selector) ⤳ array

Perform a CSS selector query using `element` as root. Uses `querySelectorAll`, returns a standard `Array`.


@getClosestNode
------------------

    query.getClosestNode(element, method[, selector]) ⤳ element

Traversing helper. Recursively call `method` on `element` until `element` matches `selector`. Returns HTML nodes only.

