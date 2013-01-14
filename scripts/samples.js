;(function ($) {

    exports = {

        'touch-events': function () {
            function listen_to (selector) {
                var element = new Rye(selector)
                ;['tap', 'doubletap', 'swipe', 'swipeleft', 'swiperight', 'swipeup', 'swipedown', 'longtap', 'singletap'].forEach(function(type){
                    element.on(type, function(){
                        $(this).append(' ' + type + ' ')
                    })
                })
            }

            ['#touch-sample', '#touch-sample-scrollable', '#touch-sample-single'].map(listen_to)

            new Rye('#touch-sample').on('touchmove', function (event) {
                event.preventDefault()
            })

            new Rye('#touch-sample-single').on('tap', function (event) {
                event.cancelTouch()
            })    
        }
    }

    exports.all = function () {
        var util = $.require('Util')
        util.each(exports, function (fn, name) {
            if (name !== 'all') {
                fn()
            }
        })
    }

    window.samples = exports

})(Rye)