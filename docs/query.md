Traversal
==================

find
------------------
<div class="api">
    .find(selector) <span>⇒ rye collection</span>
</div>

Get the descendants of each element in collection, filtered by a string `selector`.


index
------------------
<div class="api">
    .index(selector) <span>⇒ number</span>
</div>

Search for a given `selector` from among the collection. 

If no argument is passed, the return value is the position number of the first element in collection relative to its sibling.


add
------------------
<div class="api">
    .add(elements) <span>⇒ rye collection</span><br>
    .add(selector, context) <span>⇒ rye collection</span>
</div>

Add elements to the set and returns a new collection. 


pluckNode
------------------
<div class="api">
    .pluckNode(property) <span>⇒ rye collection</span>
</div>

Using to create a new collection based in elements properties that returns a node. The method avoids return not elements and is called by `.next()` and `.prev()`.


pluck
------------------
<div class="api">
    .pluck(property) <span>⇒ array</span>
</div>

It is just a wrap to `util.pluck(elements, property)` that iterate over collection.


next
------------------
<div class="api">
    .next() <span>⇒ rye collection</span>
</div>

Get the immediately following sibling of each element in collection.


prev
------------------
<div class="api">
    .prev() <span>⇒ rye collection</span>
</div>

Get the immediately preceding sibling of each element in collection.


siblings
------------------
<div class="api">
    .siblings() <span>⇒ rye collection</span>
</div>

Get the siblings of each element in collection.


parent
------------------
<div class="api">
    .parent([selector]) <span>⇒ rye collection</span>
</div>

Get the parent of each element in collection, optionally filtered by a `selector`.


parents
------------------
<div class="api">
    .parents([selector]) <span>⇒ rye collection</span>
</div>

Get the ancestors of each element in collection, optionally filtered by a `selector`.


closest
------------------
<div class="api">
    .closest(selector) <span>⇒ rye collection</span>
</div>

For each element in collection, get the first element that matches the `selector` by testing the element itself and traversing up through its ancestors.


children
------------------
<div class="api">
    .children([selector]) <span>⇒ rye collection</span>
</div>

Get the children of each element in collection, optionally filtered by a `selector`.



Filter
==================

filter
------------------
<div class="api">
    .filter(selector[, inverse]) <span>⇒ rye collection</span><br>
    .filter(element[, inverse]) <span>⇒ rye collection</span><br>
    .filter(Rye[, inverse]) <span>⇒ rye collection</span><br>
    .filter(fn[, inverse]) <span>⇒ rye collection</span>
</div>

Returns a new collection keeping elements those that match the `selector`, `element`, `Rye` or pass the `function's` test.

Provide a truthy value to `inverse` makes that unmatch elements remains.


has
------------------
<div class="api">
    .has(selector) <span>⇒ rye collection</span>
</div>

Returns a new collection keeping elements those that have a descendant that matches the `selector`.


is
------------------
<div class="api">
    .is(selector) <span>⇒ boolean</span><br>
    .is(element[, inverse]) <span>⇒ boolean</span><br>
    .is(Rye[, inverse]) <span>⇒ boolean</span><br>
    .is(fn[, inverse]) <span>⇒ boolean</span>
</div>

Peform a `.filter()` and checks if it return elements.


not
------------------
<div class="api">
    .not(selector[, inverse]) <span>⇒ rye collection</span><br>
    .not(element[, inverse]) <span>⇒ rye collection</span><br>
    .not(Rye[, inverse]) <span>⇒ rye collection</span><br>
    .not(fn[, inverse]) <span>⇒ rye collection</span>
</div>

Just a wrap to inverse `.filter()`.


first
------------------
<div class="api">
    .first() <span>⇒ rye collection</span>
</div>

Reduce the colletion to the first elements.


last
------------------
<div class="api">
    .last() <span>⇒ rye collection</span>
</div>

Reduce the colletion to the last elements.



Query
==================

Element query methods. Use with var query = Rye.require('Query').

@matches
------------------
<div class="api">
    query.matches(element, selector) <span>⇒ boolean</span><br>
    query.matches(element, element) <span>⇒ boolean</span><br>
    query.matches(element, Rye) <span>⇒ boolean</span>
</div>

Checks if a element match with `selector`, is equal to `element` or with some element of `rye collection`.


@qsa
------------------
<div class="api">
    query.qsa(element, selector) <span>⇒ array</span>
</div>

Performs and optimized `.querySelectorAll` and returns an array to ease after manipulation.


@getClosestNode
------------------
<div class="api">
    query.getClosestNode(element, method[, selector]) <span>⇒ element</span>
</div>

The method avoids return not elements with traversing DOM methods, optionally filtered by a `selector`.

