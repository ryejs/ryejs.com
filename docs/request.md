Request
==================

Rye.request()
------------------

    Rye.request(url, callback) ⤳ XMLHttpRequest
    Rye.request(settings, callback) ⤳ XMLHttpRequest
    Rye.request(settings) ⤳ XMLHttpRequest


Create and send a new XMLHttpRequest. See [default options](#request-@defaults) and the [XMLHttpRequest documentation](https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest).

Rye.get()
------------------

    Rye.get(url, callback) ⤳ XMLHttpRequest
    Rye.get(settings, callback) ⤳ XMLHttpRequest
    Rye.get(settings) ⤳ XMLHttpRequest

Calls `request()` with `method` set to `GET`.

Rye.post()
------------------

    Rye.post(url, callback) ⤳ XMLHttpRequest
    Rye.post(settings, callback) ⤳ XMLHttpRequest
    Rye.post(settings) ⤳ XMLHttpRequest

Calls `request()` with `method` set to `POST`.

serialize
------------------

    .serialize() ⤳ string

Encode the form elements in the collection as a string for request submission.

@request
------------------

    var request = Rye.require('Request')
    request(url, callback) ⤳ XMLHttpRequest
    request(settings, callback) ⤳ XMLHttpRequest
    request(settings) ⤳ XMLHttpRequest


Same as [`.request()`](#request-ryerequest).

@serialize
------------------

    request.serialize(obj) ⤳ string

Serializes `obj` to a querystring.

@appendQuery
------------------

    request.appendQuery(url, querystring) ⤳ string

Appends `querystring` to `url` while preserving existing values.


@defaults
------------------

    method       : ['GET', 'POST', ...]
    url          : [window.location]
    async        : [true]
    callback     : function (err, data, xhr) { ... }
    timeout      : [0]
    headers      : {}
    data         : {}
    responseType : [json, xml, html, text, arraybuffer, blob, document]
    contentType  : ['application/x-www-form-urlencoded']

The object containing the default options for the `request()` method. Modifications affect all subsequent requests.

@get
------------------

    request.get(url, callback) <span>⤳ self</span>
    request.get(settings, callback) <span>⤳ self</span>
    request.get(settings) <span>⤳ self</span>

Shortcut to `request()` with method set to `GET`.

@post
------------------

    request.post(url, callback) <span>⤳ self</span>
    request.post(settings, callback) <span>⤳ self</span>
    request.post(settings) <span>⤳ self</span>

Shortcut to `request()` with method set to `POST`.
