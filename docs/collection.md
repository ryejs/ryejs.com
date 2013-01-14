Collection
==================

get
------------------

    .get(index) ⤳ element<br>
    .get() ⤳ array

Return the element at `collection.elements[index]`. If no argument given, return a copy of the `.elements` array.


eq
------------------

    .eq(index) ⤳ rye collection<br>
    .eq() ⤳ empty rye collection

Same as `.get()`, but returns the element as a Rye collection. If no argument given, return an empty collection.


forEach
------------------

    .forEach(callback[, thisArg]) ⤳ array

Call `Array.prototype.forEach` on `collection.elements`. Callback receives `(value, index, array)`.


reduce
------------------

    .reduce(callback[, initialValue]) ⤳ array

Call `Array.prototype.reduce` on `collection.elements`. Callback receives `(previousValue, currentValue, index, array)`.


reduceRight
------------------

    .reduceRight(callback[, initialValue]) ⤳ array

Same as [`.reduce`](#collection-reduce) but operates from right-to-left. Callback receives `(previousValue, currentValue, index, array)`.


indexOf
------------------

    .indexOf(element[, fromIndex]) ⤳ array

Call `Array.prototype.indexOf` on `collection.elements`. Returns the first index
at which the element is found, or -1 if it is not present.


map
------------------

    .map(callback[, thisArg]) ⤳ rye collection

Calls `Array.prototype.map` on `collection.elements`. Returns a new array with the result of calling `callback` on each element of the array. Callback receives `(value, index, array)`.


sort
------------------

    .sort([fn]) ⤳ rye collection

Calls `Array.prototype.sort` on `collection.elements`, with `fn` as comparison function.


each
------------------

    .each(callback) ⤳ self

Alias for [`.forEach`](#collection-foreach).


iterate
------------------

    .iterate(fn, context) ⤳ function

Returns a function that will call `fn` with `context` for every element in `collection.elements`. The function receives the current element plus the arguments given on invocation.


push
------------------

    .push(element) ⤳ index

Add an element to `collection.elements`. Returns the new element index.


slice
------------------

    .slice(start, end) ⤳ rye collection

Calls `Array.prototype.slice` on `collection.elements`.


concat
------------------

    .concat(elements, ...) ⤳ rye collection

Concatenates an array to `collection.elements`. Accepts instances of Rye.


pluck
------------------

    .pluck(property) ⤳ array

Plucks the value of `property` for each element in `collection.elements`. Alias for [`util.pluck`](#util-@pluck).


put
------------------

    .put(property, value) ⤳ array

Sets `property` to `value` for each element in `collection.elements`. Alias for [`util.put`](#util-@put).
