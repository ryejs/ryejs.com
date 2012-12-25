DOM Event Emitter
==================

addListener (on)
------------------
<div class="api">
    .addListener(name, fn) <span>⇒ self</span><br>
    .on(name, fn) <span>⇒ self</span>
</div>


once (one)
------------------
<div class="api">
    .once(name, fn) <span>⇒ self</span><br>
    .one(name, fn) <span>⇒ self</span>
</div>


removeListener (off)
------------------
<div class="api">
    .removeListener(name[, fn]) <span>⇒ self</span><br>
    .off(name[, fn]) <span>⇒ self</span>
</div>


trigger
------------------
<div class="api">
    .trigger(name[, data]) <span>⇒ self</span>
</div>


prototype.addListener (on)
------------------
<div class="api">
    emitter.addListener(name, fn) <span>⇒ self</span><br>
    emitter.on(element, name, fn) <span>⇒ self</span>
</div>


prototype.once (one)
------------------
<div class="api">
    emitter.once(name, fn) <span>⇒ self</span><br>
    emitter.one(name, fn) <span>⇒ self</span>
</div>


prototype.removeListener (off)
------------------
<div class="api">
    emitter.removeListener(name[, fn]) <span>⇒ self</span><br>
    emitter.off(name[, fn]) <span>⇒ self</span>
</div>


prototype.destroy
------------------
<div class="api">
    emitter.destroy() <span>⇒ self</span>
</div>


prototype.trigger
------------------
<div class="api">
    emitter.trigger(name[, data]) <span>⇒ self</span>
</div>


@addListener (on)
------------------
<div class="api">
    DOMEventEMitter.addListener(element, name, fn) <span>⇒ self</span><br>
    DOMEventEMitter.on(element, name, fn) <span>⇒ self</span>
</div>


@once (one)
------------------
<div class="api">
    DOMEventEMitter.once(element, name, fn) <span>⇒ self</span><br>
    DOMEventEMitter.one(element, name, fn) <span>⇒ self</span>
</div>


@removeListener (off)
------------------
<div class="api">
    DOMEventEMitter.removeListener(element, name[, fn]) <span>⇒ self</span><br>
    DOMEventEMitter.off(element, name[, fn]) <span>⇒ self</span>
</div>


@trigger
------------------
<div class="api">
    DOMEventEMitter.trigger(element, name[, data]) <span>⇒ self</span>
</div>


@getEmitter
------------------
<div class="api">
    DOMEventEMitter.getEmitter(element) <span>⇒ DOMEventEMitter</span>
</div>


@createEvent
------------------
<div class="api">
    DOMEventEMitter.createEvent(type[, properties]) <span>⇒ Event</span>
    DOMEventEMitter.createEvent(obj[, properties]) <span>⇒ Event</span>
</div>
