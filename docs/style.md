Style
==================

show
------------------
<div class="api">
    .show() <span>⤳ self</span>
</div>

Set `display: block` on each element; if the element has been hidden with `.hide()` before the `display` value is preserved.

hide
------------------
<div class="api">
    .hide() <span>⤳ self</span>
</div>

Set `display: none` on each element. Saves the `display` value for subsequent calls.

css
------------------
<div class="api">
    .css(prop) <span>⤳ string</span>
    .css(prop, value) <span>⤳ self</span>
</div>

Get or set `style` properties.

hasClass
------------------
<div class="api">
    .hasClass(className) <span>⤳ boolean</span>
</div>

Check that the elements' class list contains `className`.


addClass
------------------
<div class="api">
    .addClass(className) <span>⤳ self</span>
</div>

Add `className` to the elements' class list.

removeClass
------------------
<div class="api">
    .removeClass(className) <span>⤳ self</span>
</div>

Remove `className` from the elements' class list.


toggleClass
------------------
<div class="api">
    .toggleClass(className, switch) <span>⤳ self</span>
</div>

If `switch` is a truthy value, *add* `className` to the elements' class list, if it's falsy *remove* `className`.

@getCSS
------------------
<div class="api">
    style.getCSS(element, property) <span>⤳ string</span>
</div>

Return the value of `property` in `element.style`.


@setCSS
------------------
<div class="api">
    style.setCSS(element, property, value) <span>⤳ element</span>
</div>

Set `property` to `value` on `element.style`.

@hasClass
------------------
<div class="api">
    style.hasClass(element, className) <span>⤳ boolean</span>
</div>

Returns `true` if `className` is contained in `element`'s class list, `false` otherwise.

@addClass
------------------
<div class="api">
    style.addClass(element, className) <span>⤳ element</span>
</div>

Add `className` to `element`'s class list.

@removeClass
------------------
<div class="api">
    style.removeClass(element, className) <span>⤳ element</span>
</div>

Remove `className` from `element`'s class list.
