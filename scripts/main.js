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
    ;(function () {
        var sample
        Rye.subscribe('sample closed', function(){
            sample = null
        })

        $(document).on('click a', function(event){
            if (this.href.match(/\/samples#(.+)/)) {
                event.preventDefault()
                sample && sample.destroy()
                sample = new Sample(RegExp.$1)
            }
        })
    })()

    function Sample (name) {
        this.name = name
        this.create()
        this.addEventListener()
        this.request()
    }

    Sample.prototype.create = function () {
        var element = document.createElement('article')
        element.id = 'sample'
        element.className = 'hide'
        element.innerHTML = '<div class="wrapper"><button type="button" class="close">×</button></div>'
        $(document.body).append(element)
        this.container = $(element)
    }

    Sample.prototype.addEventListener = function () {
        this.container.on('click .close', function(){
            this.destroy()
        }.bind(this))
    }
 
    Sample.prototype.request = function () {
        this.xhr = $.request('samples', function(err, data){
            this.container.removeClass('hide')
            !err && this.data(data)
        }.bind(this))
    }

    Sample.prototype.data = function (data) {
        var dummy = $(document.createElement('div'))
          , content = dummy.html(data).find('#' + this.name).get(0)

        this.container.children().prepend(content)
        this.behavior()
    }

    Sample.prototype.behavior = function () {
        if (SamplesBehavior) {
            SamplesBehavior[this.name]()
        }
    }

    Sample.prototype.removeContainer = function () {
        document.body.removeChild(this.container.get(0))
    }

    Sample.prototype.destroy = function () {
        sample = null
        if (this.xhr) {
            this.xhr.abort()
        }
        this.container.addClass('hide')
        setTimeout(this.removeContainer.bind(this), 500)
        
        Rye.publish('sample closed')
    }

})(Rye)