Event Emitter
==================

Standalone implementation of event emitter. Use with `var EventEmitter = Rye.require('Events').EventEmitter`.

To intanciate one emitter you do `var emitter = new EventEmitter()`.


addListener (on)
------------------
<div class="api">
    emitter.addListener(event, handler) <span>⇒ self</span><br>
    emitter.on(event, handler) <span>⇒ self</span>
</div>


once
------------------
<div class="api">
    emitter.once(event, handler) <span>⇒ self</span>
</div>


removeListener
------------------
<div class="api">
    emitter.removeListener(event[, handler]) <span>⇒ self</span>
</div>


trigger
------------------
<div class="api">
    emitter.trigger(event[, data]) <span>⇒ self</span>
</div>


proxy
------------------
<div class="api">
    emitter.proxy(event) <span>⇒ function</span>
</div>
