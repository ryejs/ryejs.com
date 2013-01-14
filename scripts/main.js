;(function ($) {

     /*
        Content
     */
    function Content () {
        this.sections = this.getSections()
    }

    Content.prototype.getSections = function () {
        return $('h1[id], h2[id]').elements.map(function(element){
            return {
                id: element.id
              , offset: element.getBoundingClientRect().top - 20
            }
        })
    }

    Content.prototype.getActive = function () {
        var scroll = window.scrollY
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
    }

    Page.prototype.init = function () {
        this.addEventListeners()
        return this
    }

    Page.prototype.addEventListeners = function () {
        $(document).on('scroll', this.onScroll.bind(this))
        this.nav.find('ul:first-child > li').on('click', function(){
            $(this).toggleClass('open')
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

    Page.prototype.onScroll = function (event) {
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
        var self = this
        this.container.on('click .close', this.destroy.bind(this))
        this.overlay.on('click', this.destroy.bind(this))
    }

    Sample.prototype.request = function () {
        this.xhr = $.request('samples', function(err, data){
            this.container.removeClass('hide')
            !err && this.data(data)
        }.bind(this))
    }

    Sample.prototype.data = function (data) {
        var content = $.create(data).filter('#' + this.name)
        this.container.children().prepend(content)
        this.behavior()
    }

    Sample.prototype.behavior = function () {
        if (SamplesBehavior && SamplesBehavior[this.name]) {
            SamplesBehavior[this.name]()
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