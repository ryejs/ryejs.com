;(function ($) {

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

})(Rye)