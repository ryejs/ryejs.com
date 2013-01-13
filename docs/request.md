Request
==================

Rye.request()
------------------
<div class="api">
    Rye.request(url, callback) <span>⤳ XMLHttpRequest</span><br>
    Rye.request(settings, callback) <span>⤳ XMLHttpRequest</span><br>
    Rye.request(settings) <span>⤳ XMLHttpRequest</span><br>
</div>

Create and send a new XMLHttpRequest.

Options:

    method      : ['GET', 'POST', ...]
    url         : [window.location]
    async       : [true]
    accepts     : [<a href="https://github.com/jcemer/rye/blob/master/lib/request.js#L7-L13">accepts</a>]
    callback    : function (err, data, xhr)
    timeout     : [0]
    headers     : {}
    contentType : ['application/x-www-form-urlencoded']
    data        : {}

Rye.get()
------------------
<div class="api">
    Rye.get(url, callback) <span>⤳ XMLHttpRequest</span><br>
    Rye.get(settings, callback) <span>⤳ XMLHttpRequest</span><br>
    Rye.get(settings) <span>⤳ XMLHttpRequest</span><br>
</div>

Calls `request()` with `method` set to `GET`.

Rye.post()
------------------
<div class="api">
    Rye.post(url, callback) <span>⤳ XMLHttpRequest</span><br>
    Rye.post(settings, callback) <span>⤳ XMLHttpRequest</span><br>
    Rye.post(settings) <span>⤳ XMLHttpRequest</span><br>
</div>

Calls `request()` with `method` set to `POST`.

serialize
------------------
<div class="api">
    .serialize() <span>⤳ string</span><br>
</div>

Encode the form elements in the collection as a string for request submission.

@
------------------
<div class="api">
    request(url, callback) <span>⤳ XMLHttpRequest</span><br>
    request(settings, callback) <span>⤳ XMLHttpRequest</span><br>
    request(settings) <span>⤳ XMLHttpRequest</span><br>
</div>

Same as [`.request()`](#rye-request).

@serialize
------------------
<div class="api">
    request.serialize(obj) <span>⤳ string</span><br>
</div>

Serializes `obj` to a querystring.

@appendQuery
------------------
<div class="api">
    request.appendQuery(url, querystring) <span>⤳ string</span><br>
</div>

Appends `querystring` to `url` while preserving existing values.


@defaults
------------------

The object containing the default options for the `request()` method. Modifications affect all subsequent requests.

@get
------------------
<div class="api">
    request.get(url, callback) <span>⤳ self</span><br>
    request.get(settings, callback) <span>⤳ self</span><br>
    request.get(settings) <span>⤳ self</span><br>
</div>

Shortcut to `request()` with method set to `GET`.

@post
------------------
<div class="api">
    request.post(url, callback) <span>⤳ self</span><br>
    request.post(settings, callback) <span>⤳ self</span><br>
    request.post(settings) <span>⤳ self</span><br>
</div>

Shortcut to `request()` with method set to `POST`.
