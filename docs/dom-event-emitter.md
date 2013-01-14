DOM Event Emitter
==================

Inherits from `EventEmitter` while handling DOM events. The root `element` will receive all delegate event handlers. It's used internally to handle event binding.

### Using a custom DOMEventEmitter

When you are writing a plugin, or a feature that should be independent from other events in the application, use a new `DOMEventEmitter` to isolate your event handlers:

    var DOMEventEmitter = Rye.require('Events').DOMEventEmitter
      , element = $('#mything').get(0)
      , myEvents = new DOMEventEmitter(element)

    myEvents.on({
        'click .button': function(){ ... }
      , 'mouseover li': function(){ ... }
    })

    myEvents.on('mousedown .that', function(){ ... })

    // remove all events:
    myEvents.destroy()

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

