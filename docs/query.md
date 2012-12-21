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
    .parent(selector) <span>⇒ rye collection</span>
</div>

Get the parent of each element in collection, optionally filtered by a `selector`.


parents
------------------
<div class="api">
    .parents(selector) <span>⇒ rye collection</span>
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
    .children(selector) <span>⇒ rye collection</span>
</div>

Get the children of each element in collection, optionally filtered by a `selector`.



Filter
==================

filter
------------------

has
------------------

is
------------------

not
------------------

first
------------------

last
------------------

Query
==================

Query.matches
------------------

Query.qsa
------------------

Query.getClosestNode
------------------