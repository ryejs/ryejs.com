DOM Event Emitter
==================

This inherits from `EventEmitter` while handling DOM events. The constructor receives an element as argument: `var emitter = new DOMEventEmitter(element)`.


addListener (on)
------------------
<div class="api">
    emitter.addListener(event, fn) <span>⤳ self</span><br>
    emitter.on(element, event, fn) <span>⤳ self</span>
</div>


once (one)
------------------
<div class="api">
    emitter.once(event, fn) <span>⤳ self</span><br>
    emitter.one(event, fn) <span>⤳ self</span>
</div>


removeListener (off)
------------------
<div class="api">
    emitter.removeListener(event[, fn]) <span>⤳ self</span><br>
    emitter.off(event[, fn]) <span>⤳ self</span>
</div>


destroy
------------------
<div class="api">
    emitter.destroy() <span>⤳ self</span>
</div>


trigger
------------------
<div class="api">
    emitter.trigger(event[, data]) <span>⤳ self</span>
</div>


emit
------------------
<div class="api">
    emitter.trigger(event[, data]) <span>⤳ self</span>
</div>


proxy
------------------
<div class="api">
    emitter.proxy(event) <span>⤳ function</span>
</div>

