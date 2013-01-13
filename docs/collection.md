Collection
==================

get
------------------
<div class="api">
    .get(index) <span>⤳ element</span><br>
    .get() <span>⤳ array</span>
</div>

Return the element at `collection.elements[index]`. If no argument given, return a copy of the `.elements` array.


eq
------------------
<div class="api">
    .eq(index) <span>⤳ rye collection</span><br>
    .eq() <span>⤳ empty rye collection</span>
</div>

Same as `.get()`, but returns the element as a Rye collection. If no argument given, return an empty collection.


forEach
------------------
<div class="api">
    .forEach(callback[, thisArg]) <span>⤳ array</span>
</div>

Call `Array.prototype.forEach` on `collection.elements`. Callback receives `(value, index, array)`.


reduce
------------------
<div class="api">
    .reduce(callback[, initialValue]) <span>⤳ array</span>
</div>

Call `Array.prototype.reduce` on `collection.elements`. Callback receives `(previousValue, currentValue, index, array)`.


reduceRight
------------------
<div class="api">
    .reduceRight(callback[, initialValue]) <span>⤳ array</span>
</div>

Same as [`.reduce`](#collection-reduce) but operates from right-to-left. Callback receives `(previousValue, currentValue, index, array)`.


indexOf
------------------
<div class="api">
    .indexOf(element[, fromIndex]) <span>⤳ array</span>
</div>

Call `Array.prototype.indexOf` on `collection.elements`. Returns the first index
at which the element is found, or -1 if it is not present.


map
------------------
<div class="api">
    .map(callback[, thisArg]) <span>⤳ rye collection</span>
</div>

Calls `Array.prototype.map` on `collection.elements`. Returns a new array with the result of calling `callback` on each element of the array. Callback receives `(value, index, array)`.


sort
------------------
<div class="api">
    .sort([fn]) <span>⤳ rye collection</span>
</div>

Calls `Array.prototype.sort` on `collection.elements`, with `fn` as comparison function.


each
------------------
<div class="api">
    .each(callback) <span>⤳ self</span>
</div>

Alias for [`.forEach`](#collection-foreach).


iterate
------------------
<div class="api">
    .iterate(fn, context) <span>⤳ function</span>
</div>

Returns a function that will call `fn` with `context` for every element in `collection.elements`. The function receives the current element plus the arguments given on invocation.


push
------------------
<div class="api">
    .push(element) <span>⤳ index</span>
</div>

Add an element to `collection.elements`. Returns the new element index.


slice
------------------
<div class="api">
    .slice(start, end) <span>⤳ rye collection</span>
</div>

Calls `Array.prototype.slice` on `collection.elements`.


concat
------------------
<div class="api">
    .concat(elements, ...) <span>⤳ rye collection</span>
</div>

Concatenates an array to `collection.elements`. Accepts instances of Rye.


pluck
------------------
<div class="api">
    .pluck(property) <span>⤳ array</span>
</div>

Plucks the value of `property` for each element in `collection.elements`. Alias for [`util.pluck`](#util-@pluck).


put
------------------
<div class="api">
    .put(property, value) <span>⤳ array</span>
</div>

Sets `property` to `value` for each element in `collection.elements`. Alias for [`util.put`](#util-@put).
