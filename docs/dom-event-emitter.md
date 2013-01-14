DOM Event Emitter
==================

Inherits from `EventEmitter` while handling DOM events. The root `element` will receive all delegate event handlers. It's used internally to handle event binding.

<a href="/samples#custom-dom-event-emitter" class="button">Using a custom DOMEventEmitter</a>

addListener (on)
------------------

    emitter.addListener(event, fn) ⤳ self
    emitter.on(element, event, fn) ⤳ self


once (one)
------------------

    emitter.once(event, fn) ⤳ self
    emitter.one(event, fn) ⤳ self


removeListener (off)
------------------

    emitter.removeListener(event[, fn]) ⤳ self
    emitter.off(event[, fn]) ⤳ self


destroy
------------------

    emitter.destroy() ⤳ self


trigger
------------------

    emitter.trigger(event[, data]) ⤳ self


emit
------------------

    emitter.trigger(event[, data]) ⤳ self


proxy
------------------

    emitter.proxy(event) ⤳ function

