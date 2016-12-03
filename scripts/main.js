;(function ($) {

     /*
        Content
     */
    function Content () {
        this.sections = this.getSections()
    }

    Content.prototype.getSections = function () {
        var scroll = document.body.scrollTop || document.documentElement.scrollTop
        return $('h1[id], h2[id], footer').elements.map(function(element){
            return {
                id: element.id
              , offset: element.getBoundingClientRect().top + scroll - 20
            }
        })
    }

    Content.prototype.getActive = function () {
        var scroll = document.body.scrollTop || document.documentElement.scrollTop
          , id = null

        for (var i = 0, l = this.sections.length; i < l; i++) {
            if (this.sections[i].offset > scroll) {
                if (i > 0) {
                    id = this.sections[i - 1].id
                }
                break
            }
        }
        return id
    }

     /*
        Page
     */
    function Page () {
        this.scrollLast = 0
        this.content = new Content()
        this.nav = $('nav')
        this.active = $()
        this.menu()
    }

    Page.prototype.init = function () {
        this.addEventListeners()
        return this
    }

    Page.prototype.addEventListeners = function () {
        $(document).on('scroll', this.onScroll.bind(this))
        this.nav.find('nav > ul > li').on('click', function(event){
            $(this).toggleClass('open')

            // For accessibility reasons, let's move the focus to the first item
            // of the navigation category, in case the element being clicked is
            // the navigation header
            if (event.target.parentNode === this) {
                setTimeout(function () {
                    $(this).find('li:first-child > a').get(0).focus();
                }.bind(this));
            }
        })
    }

    Page.prototype.menu = function () {
        var id = this.content.getActive()
          , item = this.nav.find('a[href="#' + id + '"]')

        this.active.removeClass('active open')

        item.addClass('active')
        this.active = item.parents('li').addClass('open')
        this.active.push(item.get(0))
    }

    Page.prototype.onScroll = function () {
        if ((Date.now() - this.scrollLast) > 50) {
            this.scrollLast = Date.now()
            this.menu()
        }
    }

    var page = new Page().init()


    /*
        Samples
     */
    function Sample (name) {
        this.name = name
        this.create()
        this.addEventListener()
        this.request()
    }

    Sample.prototype.create = function () {
        this.container = $.create('<article id="sample" class="hide">')
        this.overlay   = $.create('<div id="overlay">')

        this.container.html('<div class="wrapper"><button type="button" class="close">×</button></div>')
        $(document.body).append([this.container, this.overlay])
    }

    Sample.prototype.addEventListener = function () {
        var destroy = this.destroy.bind(this)
        this.container.on('click .close', destroy)
        this.overlay.on('click', destroy)
    }

    Sample.prototype.preventParentScroll = function () {
        var content = this.content.slice(1) // removes the h1
          , scrollable = false

        content.on({ 
            mouseover: function(){ scrollable = true }
          , mouseout: function(){ scrollable = false }
        })
        this.container.on('mousewheel', function(e, d){
            if (!scrollable) {
                e.preventDefault()
            }
            var top = content.prop('scrollTop')
              , height = content.get(0).getBoundingClientRect().height
              , end = content.prop('scrollHeight') - height

            if (
                (e.wheelDeltaY > 0 && top <= 0)
             || (e.wheelDeltaY < 0 && top >= end - 5)
            ) {
                e.preventDefault()
            }
        })
    }

    Sample.prototype.request = function () {
        this.xhr = $.request('samples/' + this.name + '.html', function(err, data){
            this.container.removeClass('hide')
            !err && this.data(data)
            this.preventParentScroll()
        }.bind(this))
    }

    Sample.prototype.data = function (data) {
        this.content = $.create(data)
        this.container.find('.wrapper').prepend(this.content)
        this.behavior()
    }

    Sample.prototype.behavior = function () {
        if (window.samples && window.samples[this.name]) {
            window.samples[this.name]()
        }
        Rainbow.color()
    }

    Sample.prototype.destroy = function () {
        var container = this.container
        if (this.xhr) {
            this.xhr.abort()
        }
        container.addClass('hide')
        setTimeout(container.remove.bind(container), 500)
        this.overlay.remove()
    }

    Sample.init = function () {
        this.addEventListener()
    }

    Sample.addEventListener = function () {
        $(document).on('click a', function(event){
            var name
            if (this.href.match(/\/samples#(.+)/)) {
                event.preventDefault()
                name = RegExp.$1
                if (Sample.current) {
                    Sample.current.destroy()
                }
                Sample.current = new Sample(name)
            }
        })
    }

    Sample.init()

})(Rye)