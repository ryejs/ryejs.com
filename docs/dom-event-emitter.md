DOM Event Emitter
==================

This inherits from `EventEmitter` while handling DOM events. The constructor receives an element as argument: `var emitter = new DOMEventEmitter(element)`.


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

