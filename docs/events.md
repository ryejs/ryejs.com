Events
==================

addListener (on)
------------------
<div class="api">
    .addListener(name, handler) <span>⇒ self</span><br>
    .on(name, handler) <span>⇒ self</span>
</div>


once
------------------
<div class="api">
    .once(name, handler) <span>⇒ self</span>
</div>


removeListener
------------------
<div class="api">
    .removeListener(name[, handler]) <span>⇒ self</span>
</div>


trigger
------------------
<div class="api">
    .trigger(name[, data]) <span>⇒ self</span>
</div>


@getEmitter
------------------
<div class="api">
    events.getEmitter(element) <span>⇒ DOMEventEMitter</span>
</div>


@createEvent
------------------
<div class="api">
    events.createEvent(type[, properties]) <span>⇒ Event</span><br>
    events.createEvent(obj[, properties]) <span>⇒ Event</span>
</div>


@addListener (@on)
------------------
<div class="api">
    events.addListener(element, name, handler) <span>⇒ self</span><br>
    events.on(element, name, handler) <span>⇒ self</span>
</div>


@once
------------------
<div class="api">
    events.once(element, name, handler) <span>⇒ self</span>
</div>


@removeListener
------------------
<div class="api">
    events.removeListener(element, name[, handler]) <span>⇒ self</span>
</div>


@trigger
------------------
<div class="api">
    events.trigger(element, name[, data]) <span>⇒ self</span>
</div>


Rye.subscribe
------------------
<div class="api">
    Rye.subscribe(event, handler) <span>⇒ self</span>
</div>


Rye.unsubscribe
------------------
<div class="api">
    Rye.unsubscribe(event[, handler]) <span>⇒ self</span>
</div>


Rye.publish
------------------
<div class="api">
    Rye.publish(event) <span>⇒ self</span>
</div>

