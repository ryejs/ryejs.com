Event Emitter
==================

Stand-alone event emitter implementation. Rye itself is an instance of `EventEmitter`, see [`Rye.publish`](#events-ryepublish) / [`Rye.subscribe`](#events-ryesubscribe).


addListener (on)
------------------
<div class="api">
    emitter.addListener(event, handler) <span>⤳ self</span><br>
    emitter.on(event, handler) <span>⤳ self</span>
</div>


once
------------------
<div class="api">
    emitter.once(event, handler) <span>⤳ self</span>
</div>


removeListener
------------------
<div class="api">
    emitter.removeListener(event[, handler]) <span>⤳ self</span>
</div>


trigger
------------------
<div class="api">
    emitter.trigger(event[, data]) <span>⤳ self</span>
</div>


proxy
------------------
<div class="api">
    emitter.proxy(event) <span>⤳ function</span>
</div>
