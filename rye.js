(function(global){

    function Rye (selector, context) {
        if (!(this instanceof Rye)){
            return new Rye(selector, context)
        }

        if (selector instanceof Rye){
            return selector
        }

        var util = Rye.require('Util')

        if (typeof selector === 'string') {
            this.selector = selector
            this.elements = this.qsa(context, selector)

        } else if (selector instanceof Array) {
            this.elements = util.unique(selector.filter(util.isElement))

        } else if (util.isNodeList(selector)) {
            this.elements = Array.prototype.slice.call(selector)

        } else if (util.isElement(selector)) {
            this.elements = [selector]

        } else {
            this.elements = []
        }

        this._update()
    }

    // Minimalist module system
    var modules = {}
    Rye.require = function (module) {
        return modules[module]
    }
    Rye.define = function (module, fn) {
        modules[module] = fn.call(Rye.prototype)
    }

    // Export global object
    global.Rye = Rye

})(window)

Rye.define('Util', function(){

    var _slice = Array.prototype.slice

    var uid = {
            current: 0
          , next: function(){ return ++this.current }
        }

    function extend (destination, source) {
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)){
                destination[key] = source[key]
            }
        }
        return destination
    }

    function inherits (child, parent) {
        extend(child, parent)
        function Ctor () {
            this.constructor = child
        }
        Ctor.prototype = parent.prototype
        child.prototype = new Ctor()
        child.__super__ = parent.prototype
        return child
    }

    function isElement (element) {
        return element && (element.nodeType === 1 || element.nodeType === 9)
    }
    
    function isNodeList (obj) {
        return obj && (obj instanceof window.NodeList) || (obj instanceof window.HTMLCollection)
    }

    function unique (array) {
        return array.filter(function(item, idx){
            return array.indexOf(item) == idx
        })
    }

    function pluck (array, property) {
        return array.map(function(item){
            return item[property]
        })
    }

    function put (array, property, value) {
        return array.map(function(item){
            return item[property] = value
        })
    }

    function prefix (key, obj) {
        var result
          , upcased = key[0].toUpperCase() + key.substring(1)
          , prefixes = ['moz', 'webkit', 'ms', 'o']

        obj = obj || window

        if (result = obj[key]){
            return result
        }

        // No pretty array methods here :(
        // http://jsperf.com/everywhile
        while(prefix = prefixes.shift()){
            if (result = obj[prefix + upcased]){
                break;
            }
        }
        return result
    }

    function applier (fn, context, args) {
        return function () {
            fn.apply(context, _slice.call(arguments, 0).concat(args))
        }
    }

    function applierLeft (fn, context, args) {
        return function () {
            fn.apply(context, args.concat(_slice.call(arguments, 0)))
        }
    }

    function curry (fn) {
        return applierLeft(fn, this, _slice.call(arguments, 1))
    }

    function getUid (element) {
        return element.rye_id || (element.rye_id = uid.next())
    }

    return {
        extend      : extend
      , inherits    : inherits
      , isElement   : isElement
      , isNodeList  : isNodeList
      , unique      : unique
      , pluck       : pluck
      , put         : put
      , prefix      : prefix
      , applier     : applier
      , applierLeft : applierLeft
      , curry       : curry
      , getUid      : getUid
    }

})

Rye.define('Data', function(){

    var util = Rye.require('Util')
      , data = {}

    function set (element, key, value) {
        var id = util.getUid(element)
          , obj = data[id] || (data[id] = {})
        obj[key] = value
    }

    function get (element, key) {
        var obj = data[util.getUid(element)]
        if (key == null) {
            return obj
        }
        return obj && obj[key]
    }

    this.data = function (key, value) {

        if (value !== undefined) {
            this.each(function(element){
                set(element, key, value)
            })
            return this
        }

        if (this.elements.length === 1) {
            return get(this.elements[0], key)
        } else {
            return this.elements.map(function(element){
                return get(element, key)
            })
        }
    }


    return {
        set   : set
      , get   : get
    }
})
Rye.define('Query', function(){

    var util = Rye.require('Util')
      , _slice = Array.prototype.slice
      , selectorRE = /^([.#]?)([\w\-]+)$/
      , selectorType = {
            '.': 'getElementsByClassName'
          , '#': 'getElementById'
          , '' : 'getElementsByTagName'
          , '_': 'querySelectorAll'
        }
      , dummyDiv = document.createElement('div')

    function matches(element, selector) {
        var matchesSelector, match
        if (!element || !util.isElement(element) || !selector) {
            return false
        }

        if (selector.nodeType) {
            return element === selector
        }

        if (selector instanceof Rye) {
            return selector.elements.some(function(selector){
                return matches(element, selector)
            })
        }

        if (element === document) {
            return false
        }

        matchesSelector = util.prefix('matchesSelector', dummyDiv)
        if (matchesSelector) {
            return matchesSelector.call(element, selector)
        }

        // fall back to performing a selector:
        if (!element.parentNode) {
            dummyDiv.appendChild(element)
        }
        match = qsa(element.parentNode, selector).indexOf(element) >= 0
        if (element.parentNode === dummyDiv) {
            dummyDiv.removeChild(element)
        }
        return match
    }

    function qsa (element, selector) {
        var method
        
        element = element || document

        // http://jsperf.com/getelementbyid-vs-queryselector/11
        if (!selector.match(selectorRE) || (RegExp.$1 === '#' && element !== document)) {
            method = selectorType._
        } else {
            method = selectorType[RegExp.$1]
            selector = RegExp.$2
        }

        var result = element[method](selector)

        if (util.isNodeList(result)){
            return _slice.call(result)
        }

        if (util.isElement(result)){
            return [result]
        }

        return []
    }

    // Walks the DOM tree using `method`, returns
    // when an element node is found
    function getClosestNode (element, method, selector) {
        do {
            element = element[method]
        } while (element && ((selector && !matches(element, selector)) || !util.isElement(element)))
        return element
    }

    // Creates a new Rye instance applying a filter if necessary
    function _create (elements, selector) {
        return selector == null ? new Rye(elements) : new Rye(elements).filter(selector)
    }

    this.qsa = qsa

    this.find = function (selector) {
        var elements
        if (this.length === 1) {
            elements = qsa(this.elements[0], selector)
        } else {
            elements = this.elements.reduce(function(elements, element){
                return elements.concat(qsa(element, selector))
            }, [])
        }
        return _create(elements)
    }

    this.filter = function (selector, inverse) {
        if (typeof selector === 'function') {
            var fn = selector
            return _create(this.elements.filter(function(element, index){
                return fn.call(element, element, index) == !inverse
            }))
        }
        return _create(this.elements.filter(function(element){
            return matches(element, selector) == !inverse
        }))
    }

    this.has = function (selector) {
        var matches
        return _create(this.elements.reduce(function(elements, element){
            matches = qsa(element, selector)
            return elements.concat(matches.length ? element : null)
        }, []))
    }

    this.is = function (selector) {
        return this.length > 0 && this.filter(selector).length > 0
    }

    this.not = function (selector) {
        return this.filter(selector, true)
    }

    this.index = function (selector) {
        if (selector == null) {
            return this.parent().children().indexOf(this.elements[0])
        }
        return this.indexOf(new Rye(selector).elements[0])
    }

    this.add = function (selector, context) {
        var elements = selector
        if (typeof selector === 'string') {
            elements = new Rye(selector, context).elements
        }
        return this.concat(elements)
    }

    // Extract a list with the provided property for each value.
    // This works like underscore's pluck, with the added
    // getClosestNode() method to avoid picking up non-html nodes.
    this.pluckNode = function (property) {
        return this.map(function(element){
            return getClosestNode(element, property)
        })
    }

    this.pluck = function (property) {
        return util.pluck(this.elements, property)
    }

    this.next = function () {
        return _create(this.pluckNode('nextSibling'))
    }

    this.prev = function () {
        return _create(this.pluckNode('previousSibling'))
    }

    this.first = function () {
        return _create(this.get(0))
    }

    this.last = function () {
        return _create(this.get(-1))
    }

    this.siblings = function (selector) {
        var siblings = []
        this.each(function(element){
            _slice.call(element.parentNode.childNodes).forEach(function(child){
                if (util.isElement(child) && child !== element){
                    siblings.push(child)
                }
            })
        })
        return _create(siblings, selector)
    }

    this.parent = function (selector) {
        return _create(this.pluck('parentNode'), selector)
    }

    // borrow from zepto
    this.parents = function (selector) {
        var ancestors = []
          , elements = this.elements

        while (elements.length > 0 && elements[0] !== undefined) {
            elements = elements.map(function(element){
                if ((element = element.parentNode) && element !== document && ancestors.indexOf(element) < 0) {
                    ancestors.push(element)
                    return element
                }
            })
        }
        return _create(ancestors, selector)
    }

    this.closest = function (selector) {
        return this.map(function(element){
            if (matches(element, selector)) {
                return element
            }
            return getClosestNode(element, 'parentNode', selector)
        })
    }

    this.children = function (selector) {
        return _create(this.elements.reduce(function(elements, element){
            var childrens = _slice.call(element.children)
            return elements.concat(childrens)
        }, []), selector)
    }


    return {
        matches        : matches
      , qsa            : qsa
      , getClosestNode : getClosestNode
    }

})

Rye.define('Collection', function(){

    var util = Rye.require('Util')
      , _slice  = Array.prototype.slice
      , _concat = Array.prototype.concat

    this.get = function (index) {
        if (index == null) {
            return this.elements.slice()
        }
        return this.elements[index < 0 ? this.elements.length + index : index]
    }

    this.eq = function (index) {
        // We have to explicitly null the selection since .get()
        // returns the whole collection when called without arguments.
        if (index == null) {
            return new Rye()
        }
        return new Rye(this.get(index))
    }

    // Methods that return a usable value
    ;['forEach', 'reduce', 'reduceRight', 'indexOf'].forEach(function(method){
        this[method] = function (a, b, c, d) {
            return this.elements[method](a, b, c, d)
        }
    }.bind(this))

    // Methods that return a list are turned into a Rye instance
    ;['map', 'sort'].forEach(function(method){
        this[method] = function (a, b, c, d) {
            return new Rye(this.elements[method](a, b, c, d))
        }
    }.bind(this))

    this.each = function (fn) {
        this.elements.forEach(fn)
        return this
    }

    this.iterate = function(method, context){
        return function(a,b,c){
            return this.each(function(element){
                method.call(context, element, a, b, c)
            })
        }
    }

    this.push = function (item) {
        if (util.isElement(item)){
            this.elements.push(item)
            this._update()
            return this.length - 1
        } else {
            return -1
        }
    }

    this.slice = function (start, end) {
        return new Rye(_slice.call(this.elements, start, end))
    }

    // Concatenate two elements lists, do .unique() clean-up
    this.concat = function () {
        var args = _slice.call(arguments).map(function(arr){
            return arr instanceof Rye ? arr.elements : arr
        })
        return new Rye(_concat.apply(this.elements, args))
    }

    this._update = function () {
        this.length = this.elements.length
    }

})

Rye.define('Manipulation', function(){

    var util = Rye.require('Util')

    function getValue(element) {
        if (element.multiple) {
            return new Rye(element).find('option').filter(function(option) {
                return option.selected && !option.disabled
            }).pluck('value')
        }
        return element.value
    }

    function getAttribute(element, name) {
        if (name === 'value' && element.nodeName == 'INPUT') {
            return getValue(element)
        }
        return element.getAttribute(name)
    }

    this.text = function (text) {
        if (text == null) {
            return this.elements[0] && this.elements[0].textContent
        }
        return this.each(function(element){
            element.textContent = text
        })
    }

    this.html = function (html) {
        if (html == null) {
            return this.elements[0] && this.elements[0].innerHTML
        }
        return this.each(function(element){
            element.innerHTML = html
        })
    }

    this.empty = this.iterate(function(element){
        element.innerHTML = ''
    })

    this.append = function (html) {
        if (typeof html === 'string') {
            this.each(function(element){
                element.insertAdjacentHTML('beforeend', html)
            })

        } else if (util.isElement(html)) {
            this.each(function(element){
                element.appendChild(html)
            })

        }
        return this
    }

    this.prepend = function (html) {
        if (typeof html === 'string') {
            this.each(function(element){
                element.insertAdjacentHTML('afterbegin', html)
            })

        } else if (util.isElement(html)) {
            this.each(function(element){
                var next = new Rye(element).children().get(0)
                element.insertBefore(html, next)
            })

        }
        return this
    }

    this.after = function (html) {
        if (typeof html === 'string') {
            this.each(function(element){
                element.insertAdjacentHTML('afterend', html)
            })

        } else if (util.isElement(html)) {
            this.each(function(element){
                var next = new Rye(element).next().get(0)
                if (next) {
                    element.parentNode.insertBefore(html, next)
                } else {
                    element.parentNode.appendChild(html)
                }
            })

        }
        return this
    }

    this.before = function (html) {
        if (typeof html === 'string') {
            this.each(function(element){
                element.insertAdjacentHTML('beforebegin', html)
            })

        } else if (util.isElement(html)) {
            this.each(function(element){
                element.parentNode.insertBefore(html, element)
            })

        }
        return this
    }

    this.clone = function () {
        return this.map(function(element){
            return element.cloneNode(true)
        })
    }

    this.val = function (value) {
        if (value == null) {
            return this.elements[0] && getValue(this.elements[0])
        }
        return this.each(function(element){
            element.value = value
        })
    }

    this.attr = function (name, value) {
        if (value == null) {
            if (typeof name == 'string') {
                return this.elements[0] && getAttribute(this.elements[0], name)
            }

            return this.each(function(element){
                for (var key in name) {
                    element.setAttribute(key, name[key])
                }
            })
        }
        return this.each(function(element){
            element.setAttribute(name, value)
        })
    }


    return {
        getValue     : getValue
      , getAttribute : getAttribute
    }
})
Rye.define('Style', function(){

    var data = Rye.require('Data')
      , _cssNumber = 'fill-opacity font-weight line-height opacity orphans widows z-index zoom'.split(' ')

    function getCSS (element, property) {
        return element.style.getPropertyValue(property)
            || window.getComputedStyle(element, null).getPropertyValue(property)
    }

    function setCSS (element, property, value) {
        if (typeof value == 'number' && _cssNumber.indexOf(property) === -1) {
            value += 'px'
        }
        element.style.setProperty(property, '' + value)
        return element
    }

    function hasClass (element, name) {
        name = name.trim()
        return element.classList ? 
               element.classList.contains(name)
             : (' ' + element.className + ' ').indexOf(' ' + name + ' ') !== -1
    }

    function addClass (element, names) {
        if (element.classList) {
            names.replace(/\S+/g, function(name){ element.classList.add(name) })
        } else {
            var classes = ' ' + element.className + ' ', name
            names = names.trim().split(/\s+/)
            while (name = names.shift()) {
                if (classes.indexOf(' ' + name + ' ') === -1) { 
                    classes += name + ' '
                }
            }
            element.className = classes.trim()
        }
        return element
    }

    function removeClass (element, names) {
        if (names === '*') {
            element.className = ''
        } else {
            if (names instanceof RegExp) {
                names = [names]
            } else if (element.classList && names.indexOf('*') === -1) {
                names.replace(/\S+/g, function(name){ element.classList.remove(name) })
                return
            } else {
                names = names.trim().split(/\s+/)
            }

            var classes = ' ' + element.className + ' ', name
            while (name = names.shift()) {
                if (name.indexOf && name.indexOf('*') !== -1) {
                    name = new RegExp('\\s*\\b' + name.replace('*', '\\S*') + '\\b\\s*', 'g')
                }
                if (name instanceof RegExp) {
                    classes = classes.replace(name, ' ')
                } else {
                    while (classes.indexOf(' ' + name + ' ') !== -1) {
                        classes = classes.replace(' ' + name + ' ', ' ')
                    }
                }
            }
            element.className = classes.trim()
        }
        return element
    }


    this.show = this.iterate(function(element){
        setCSS(element, 'display', data.get(element, '_display') || 'block')
    })

    this.hide = this.iterate(function(element){
        var _display = getCSS(element, 'display')
        if (_display !== 'none') {
            data.set(element, '_display', _display)
        }
        setCSS(element, 'display', 'none')
    })

    this.css = function (property, value) {
        if (value == null) {
            if (typeof property == 'string') {
                return this.elements[0] && getCSS(this.elements[0], property)
            }

            return this.each(function(element){
                for (var key in property) {
                    setCSS(element, key, property[key])
                }
            })
        }
        return this.each(function(element){
            setCSS(element, property, value)
        })
    }

    this.hasClass = function (name) {
        var result = false
        this.each(function(element){
            result = result || hasClass(element, name)
        })
        return !!result
    }

    this.addClass = this.iterate(addClass)

    this.removeClass = this.iterate(removeClass)

    this.toggleClass = this.iterate(function(element, name, when){
        if (when == null) {
            when = !hasClass(element, name)
        }
        (when ? addClass : removeClass)(element, name)
    })


    return {
        getCSS      : getCSS
      , setCSS      : setCSS
      , hasClass    : hasClass
      , addClass    : addClass
      , removeClass : removeClass
    }
})

Rye.define('EventEmitter', function(){

    var util = Rye.require('Util')
      , _slice = Array.prototype.slice
      , _hasOwnProperty = Object.hasOwnProperty

    function EventEmitter () {
        this.events = {}
        this.context = null
    }

    // Adds a handler to the events list
    EventEmitter.prototype.addListener = function (event, handler) {
        var handlers = this.events[event] || (this.events[event] = [])
        handlers.push(handler)
    }

    // Add a handler that can only get called once
    EventEmitter.prototype.once = function (event, handler) {
        function suicide () {
            handler.apply(this, arguments)
            this.removeListener(event, suicide)
        }
        this.on(event, suicide)
    }

    // Removes a handler from the events list
    EventEmitter.prototype.removeListener = function (event, handler) {
        if (event === '*') {
            if (handler) {
                for (event in this.events) {
                    if (_hasOwnProperty.call(this.events, event)){
                        this.removeListener(event, handler)
                    }
                }
            } else {
                this.events = {}
            }
        } else if (handler) {
            var handlers = this.events[event]
            if (handlers) {
                handlers.splice(handlers.indexOf(handler), 1)
                if (handlers.length === 0) {
                    delete this.events[event]
                }
            }
        } else {
            delete this.events[event]
        }
    }

    // Calls all handlers that match the event type
    EventEmitter.prototype.emit = function (event) {
        var handlers = this.events[event]
          , args = _slice.call(arguments, 1)
          , fn, i

        if (handlers) {
            for (i = 0; fn = handlers[i++]; ){
                fn.apply(this.context || this, args)
            }
        }
    }

    EventEmitter.prototype.proxy = function (event) {
        return util.applierLeft(this.emit, this, [event])
    }

    function acceptMultipleEvents (method) {
        var _method = EventEmitter.prototype[method]
        EventEmitter.prototype[method] = function(event){
            var args = _slice.call(arguments, 0)
              , self = this
            if (/\s/.test(event)){
                event.replace(/\S+/g, function(event){
                    args[0] = event
                    _method.apply(self, args)
                })
            } else {
                _method.apply(self, args)
            }
        }
    }

    ;['addListener', 'once', 'removeListener', 'emit'].forEach(acceptMultipleEvents)

    // Alias due to public demand
    EventEmitter.prototype.on = EventEmitter.prototype.addListener

    // Global event bus / pub-sub
    var EE = new EventEmitter

    Rye.subscribe   = EE.addListener.bind(EE)
    Rye.unsubscribe = EE.removeListener.bind(EE)
    Rye.publish     = EE.emit.bind(EE)

    // Export the constructor
    return EventEmitter

})

Rye.define('DOMEvents', function(){

    var util = Rye.require('Util')
      , EventEmitter = Rye.require('EventEmitter')
      , query = Rye.require('Query')
      , emitters = {}

    function DOMEventEmitter (element) {
        EventEmitter.call(this)
        this.element = element
        this.context = element
        this.proxied = {}
    }

    util.inherits(DOMEventEmitter, EventEmitter)

    DOMEventEmitter.prototype.delegateProxy = function (event_id, selector) {
        return function (evt) {
            var matched = query.getClosestNode(evt.target || this.element, 'parentNode', selector)
            if ((matched && matched !== document) || query.matches(evt.target, selector)){
                this.context = matched
                this.emit(event_id, evt, element)
            }
        }.bind(this)
    }

    DOMEventEmitter.prototype.proxy = function (event_id, selector) {
        return this.proxied[event_id] || (this.proxied[event_id] =
            selector
                ? this.delegateProxy(event_id, selector)
                : EventEmitter.prototype.proxy.call(this, event_id)
        )
    }

    function getEmitter (element) {
        var id = util.getUid(element)
        return emitters[id] || (emitters[id] = new DOMEventEmitter(element))
    }

    function eventID (event, selector) {
        return selector ? event + '@' + selector : event
    }

    function addHandler (element, event, selector, handler) {
        var emitter = getEmitter(element)
          , event_id = eventID(event, selector)

        emitter.addListener(event_id, handler)

        if (!emitter.proxied[event_id]) {
            element.addEventListener(event, emitter.proxy(event_id, selector), false)
        }
    }

    function removeHandler (element, event, selector, handler) {
        var emitter = getEmitter(element)
          , event_id = eventID(event, selector)
          , proxy = emitter.proxied[event_id]

        emitter.removeListener(event_id, handler)

        if (!emitter.events[event_id] || emitter.events[event_id].length === 0) {
            element.removeEventListener(event, proxy, false)
            emitter.proxied[event_id] = null
        }
    }

    function addListener (element, event, selector, handler) {
        if (!handler && typeof(selector) == 'function') {
            handler = selector, selector = null
        }
        // Can't directly send to emitter because of proxy name in addHandler
        event.replace(/\S+/g, function (event) {
            addHandler(element, event, selector, handler)
        })
    }

    function removeListener (element, event, selector, handler) {
        if (!handler && typeof(selector) == 'function') {
            handler = selector, selector = null
        }
        removeHandler(element, event, selector, handler)
    }

    function createEvent (type, properties) {
        if (typeof type != 'string') {
            type = type.type
        }
        var isMouse = ['click', 'mousedown', 'mouseup', 'mousemove'].indexOf(type) != -1
          , event = document.createEvent(isMouse ? 'MouseEvent' : 'Event')
        if (properties) {
            util.extend(event, properties)
        }
        event.initEvent(type, true, true)
        return event
    }

    function trigger (element, event, data) {
        if (event instanceof Event) {
            event.data = data
            element.dispatchEvent(event)
        } else {
            event.replace(/\S+/g, function (event) {
                var DOMEvent = createEvent(event)
                DOMEvent.data = data
                element.dispatchEvent(DOMEvent)
            })
        }
    }

    this.addEventListener    = this.iterate(addListener)
    this.removeEventListener = this.iterate(removeListener)
    this.trigger             = this.iterate(trigger)
    // Aliases
    this.on  = this.addEventListener
    this.off = this.removeEventListener

    return {
        getEmitter     : getEmitter
      , addListener    : addListener
      , removeListener : removeListener
      , trigger        : trigger
      , createEvent    : createEvent
    }

})

Rye.define('TouchEvents', function(){

    var util = Rye.require('Util')
      , domEvents = Rye.require('DOMEvents')
      , touch = {}

    function Gesture(props) {
        util.extend(this, props)
        Gesture.all.push(this)
    }
    Gesture.all = []
    Gesture.cancelAll = function () {
        Gesture.all.forEach(function(instance){
            instance.cancel()
        })
        touch = {}
    }
    Gesture.prototype.schedule = function () {
        this.timeout = setTimeout(this._trigger.bind(this), this.delay)
    }
    Gesture.prototype._trigger = function () {
        this.timeout = null
        this.trigger()
    }
    Gesture.prototype.cancel = function () {
        this.timeout && clearTimeout(this.timeout)
        this.timeout = null
    }

    var tap = new Gesture({
            delay: 0
          , trigger: function () {
                // cancelTouch cancels processing of single vs double taps for faster 'tap' response
                var event = domEvents.createEvent('tap')
                event.cancelTouch = Gesture.cancelAll
                domEvents.trigger(touch.element, event)

                // trigger double tap immediately
                if (touch.isDoubleTap) {
                    domEvents.trigger(touch.element, 'doubletap')
                    touch = {}

                // trigger single tap after (x)ms of inactivity
                } else {
                    singleTap.schedule()
                }
            }
        })
      , singleTap = new Gesture({
            delay: 250
          , trigger: function () {
                domEvents.trigger(touch.element, 'singletap')
                touch = {}
            }
        })
      , longTap = new Gesture({
            delay: 750
          , trigger: function () {
                if (touch.last) {
                    domEvents.trigger(touch.element, 'longtap')
                    touch = {}
                }
            }
        })
      , swipe = new Gesture({
            delay: 0
          , trigger: function () {
                domEvents.trigger(touch.element, 'swipe')
                domEvents.trigger(touch.element, 'swipe' + this.direction())
                touch = {}
            }
          , direction: function () {
                if (Math.abs(touch.x1 - touch.x2) >= Math.abs(touch.y1 - touch.y2)) {
                    return touch.x1 - touch.x2 > 0 ? 'left' : 'right'
                } 
                return touch.y1 - touch.y2 > 0 ? 'up' : 'down'
            }
        })

    // checks if it needed
    function parentIfText (node) {
        return 'tagName' in node ? node : node.parentNode
    }

    function environmentMap() {
        // doesnt have touchstart
        if (!("ontouchstart" in document.documentElement)) {
            util.extend(domEvents.environmentMap, {
                touchstart: 'mousedown'
              , touchmove: 'mousemove'
              , touchend: 'mouseup'
              , tap: 'click'
              , doubletap: 'dblclick'
            })
        }
    }

    if ('ontouchstart' in window || (window.mocha && location.search.indexOf('grep=DOMEvents') < 0)){
        domEvents.addListener(document.body, 'touchstart', function (event) {
            var now = Date.now()
            singleTap.cancel()
            touch.element = parentIfText(event.touches[0].target)
            touch.x1 = event.touches[0].pageX
            touch.y1 = event.touches[0].pageY
            if (touch.last && (now - touch.last) <= 250) {
                touch.isDoubleTap = true
            }
            touch.last = now
            longTap.schedule()
        })

        domEvents.addListener(document.body, 'touchmove', function (event) {
            longTap.cancel()
            touch.x2 = event.touches[0].pageX
            touch.y2 = event.touches[0].pageY
        })

        domEvents.addListener(document.body, 'touchend', function (event) {
            longTap.cancel()

            // swipe
            if (Math.abs(touch.x1 - touch.x2) > 30 || Math.abs(touch.y1 - touch.y2) > 30) {
                swipe.schedule()
            // normal tap
            } else if ('last' in touch) {
                tap.schedule()
            }
        })

        domEvents.addListener(document.body, 'touchcancel', Gesture.cancelAll)
        domEvents.addListener(window, 'scroll', Gesture.cancelAll)
    }

    return {
        environmentMap: environmentMap
    }
})
