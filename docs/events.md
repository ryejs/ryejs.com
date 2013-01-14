Events
==================

addListener
------------------

    .addListener(name, handler) ⤳ self
    .on(name, handler) ⤳ self


once
------------------

    .once(name, handler) ⤳ self


removeListener
------------------

    .removeListener(name[, handler]) ⤳ self


trigger
------------------

    .trigger(name[, data]) ⤳ self


@getEmitter
------------------

    events.getEmitter(element) ⤳ DOMEventEMitter


@createEvent
------------------

    events.createEvent(type[, properties]) ⤳ Event
    events.createEvent(obj[, properties]) ⤳ Event


@addListener
------------------

    events.addListener(element, name, handler) ⤳ self
    events.on(element, name, handler) ⤳ self


@once
------------------

    events.once(element, name, handler) ⤳ self


@removeListener
------------------

    events.removeListener(element, name[, handler]) ⤳ self


@trigger
------------------

    events.trigger(element, name[, data]) ⤳ self


Rye.subscribe
------------------

    Rye.subscribe(event, handler) ⤳ self

Listen for `event` on the global event bus.


Rye.unsubscribe
------------------

    Rye.unsubscribe(event[, handler]) ⤳ self

Stop listening for `event` on the global event bus.


Rye.publish
------------------

    Rye.publish(event[, args...]) ⤳ self

Emit `event` on the global event bus. Extra arguments will be forwarded to event handlers.

