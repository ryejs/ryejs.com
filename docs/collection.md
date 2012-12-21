Collection
==================

get
------------------
<div class="api">
    .get(index) <span>⇒ element</span><br>
    .get() <span>⇒ array</span>
</div>

Returns the element that have the `index` in collection. If called without argument returns a copy of elements array.


eq
------------------
<div class="api">
    .eq(index) <span>⇒ rye collection</span><br>
    .eq() <span>⇒ empty rye collection</span>
</div>

Performs `.get()` and wrap the element result in a `rye collection`. If called without argument returns empty `rye collection`.


forEach
------------------
<div class="api">
    .forEach(callback[, thisArg]) <span>⇒ array</span>
</div>

Performs `Array.prototype.forEach` in elements of collection. The `callback` is invoked with: `element value`, `element index` and `array`.


reduce
------------------
<div class="api">
    .reduce(callback[, initialValue]) <span>⇒ array</span>
</div>

Performs `Array.prototype.reduce` in elements of collection. The `callback` is invoked with: `previous value returned`, `current element`, `element index` and `array`.


reduceRight
------------------
<div class="api">
    .reduceRight(callback[, initialValue]) <span>⇒ array</span>
</div>

Same as `.reduce()` except that performs in the right to left in array values.


indexOf
------------------
<div class="api">
    .indexOf(element[, fromIndex]) <span>⇒ array</span>
</div>

Performs `Array.prototype.indexOf` in elements of collection. Returns the first index at which a given element can be found in elements, or -1 if it is not present.


map
------------------
<div class="api">
    .map(callback[, thisArg]) <span>⇒ rye collection</span>
</div>

Creates a new `rye collection` with the results of calling `callback` on every element in collection. The `callback` is invoked with: `element value`, `element index` and `array`.


sort
------------------
<div class="api">
    .sort([fn]) <span>⇒ rye collection</span>
</div>

Creates a sorted `rye collection`, optionally ordered by `fn`.


each
------------------
<div class="api">
    .each(callback) <span>⇒ self</span>
</div>

Performs `Array.prototype.forEach` in elements of collection. The `callback` is invoked with: `element value`, `element index` and `array`.


iterate
------------------
<div class="api">
    .iterate(fn, context) <span>⇒ function</span>
</div>

Returns a funcion that will call `fn` in given `context` passing each one element of collection as first parameter follow by arguments.


push
------------------
<div class="api">
    .push(element) <span>⇒ index</span>
</div>

Add an element to collection and returns it `index`. This method changes the `rye collection`.


slice
------------------
<div class="api">
    .slice(start, end) <span>⇒ rye collection</span>
</div>

Returns a new sliced `rye collection`.


concat
------------------
<div class="api">
    .concat(elements, ...) <span>⇒ rye collection</span>
</div>

Concats array of elements or rye collections into a single `rye collection`.


pluck
------------------
<div class="api">
    .pluck(property) <span>⇒ array</span>
</div>

It is just a wrap to `util.pluck(elements, property)` that iterate over collection.


put
------------------
<div class="api">
    .put(property, value) <span>⇒ array</span>
</div>

It is just a wrap to `util.put(elements, property)` that iterate over collection.
