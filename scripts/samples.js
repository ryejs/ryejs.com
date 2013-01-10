var SamplesBehavior = {

    touch: function () {
        
        function listen_to (selector) {
            var element = new Rye(selector)
            ;['tap', 'doubletap', 'swipe', 'swipeleft', 'swiperight', 'swipeup', 'swipedown', 'longtap', 'singletap'].forEach(function(type){
                element.on(type, function(){
                    new Rye(this).append(' ' + type + ' ')
                })
            })
        }

        ['#touch_test', '#touch_test_scrollable', '#touch_test_single'].map(listen_to)

        new Rye('#touch_test').on('touchmove', function (event) {
            event.preventDefault()
        })

        new Rye('#touch_test_single').on('tap', function (event) {
            event.cancelTouch()
        })    
    }

}