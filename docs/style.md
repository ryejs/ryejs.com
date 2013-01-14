Style
==================

show
------------------

    .show() ⤳ self

Set `display: block` on each element; if the element has been hidden with `.hide()` before the `display` value is preserved.

hide
------------------

    .hide() ⤳ self

Set `display: none` on each element. Saves the `display` value for subsequent calls.

css
------------------

    .css(prop) ⤳ string
    .css(prop, value) ⤳ self

Get or set `style` properties.

hasClass
------------------

    .hasClass(className) ⤳ boolean

Check that the elements' class list contains `className`.


addClass
------------------

    .addClass(className) ⤳ self

Add `className` to the elements' class list.

removeClass
------------------

    .removeClass(className) ⤳ self

Remove `className` from the elements' class list.


toggleClass
------------------

    .toggleClass(className, switch) ⤳ self

If `switch` is a truthy value, *add* `className` to the elements' class list, if it's falsy *remove* `className`.

@getCSS
------------------

    style.getCSS(element, property) ⤳ string

Return the value of `property` in `element.style`.


@setCSS
------------------

    style.setCSS(element, property, value) ⤳ element

Set `property` to `value` on `element.style`.

@hasClass
------------------

    style.hasClass(element, className) ⤳ boolean

Returns `true` if `className` is contained in `element`'s class list, `false` otherwise.

@addClass
------------------

    style.addClass(element, className) ⤳ element

Add `className` to `element`'s class list.

@removeClass
------------------

    style.removeClass(element, className) ⤳ element

Remove `className` from `element`'s class list.
