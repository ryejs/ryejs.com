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

            ['#touch_sample', '#touch_sample_scrollable', '#touch_sample_single'].map(listen_to)

            new Rye('#touch_sample').on('touchmove', function (event) {
                event.preventDefault()
            })

            new Rye('#touch_sample_single').on('tap', function (event) {
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