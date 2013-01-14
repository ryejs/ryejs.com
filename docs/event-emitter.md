Event Emitter
==================

Stand-alone event emitter implementation. Rye itself is an instance of `EventEmitter`, see [`Rye.publish`](#events-ryepublish) / [`Rye.subscribe`](#events-ryesubscribe).


addListener (on)
------------------

    emitter.addListener(event, handler) ⤳ self
    emitter.on(event, handler) ⤳ self


once
------------------

    emitter.once(event, handler) ⤳ self


removeListener
------------------

    emitter.removeListener(event[, handler]) ⤳ self


trigger
------------------

    emitter.trigger(event[, data]) ⤳ self


proxy
------------------

    emitter.proxy(event) ⤳ function
