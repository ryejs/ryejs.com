DOM Event Emitter
==================

One heritage of event emitter, this handler native DOM events. Use with `var DOMEventEmitter = Rye.require('Events').DOMEventEmitter`.

To intanciate one emitter you do `var emitter = new DOMEventEmitter(element)`.


addListener (on)
------------------
<div class="api">
    emitter.addListener(name, fn) <span>⇒ self</span><br>
    emitter.on(element, name, fn) <span>⇒ self</span>
</div>


once (one)
------------------
<div class="api">
    emitter.once(name, fn) <span>⇒ self</span><br>
    emitter.one(name, fn) <span>⇒ self</span>
</div>


removeListener (off)
------------------
<div class="api">
    emitter.removeListener(name[, fn]) <span>⇒ self</span><br>
    emitter.off(name[, fn]) <span>⇒ self</span>
</div>


destroy
------------------
<div class="api">
    emitter.destroy() <span>⇒ self</span>
</div>


trigger
------------------
<div class="api">
    emitter.trigger(name[, data]) <span>⇒ self</span>
</div>


emit
------------------
<div class="api">
    emitter.trigger(name[, data]) <span>⇒ self</span>
</div>


proxy
------------------
<div class="api">
    emitter.proxy(name) <span>⇒ function</span>
</div>

