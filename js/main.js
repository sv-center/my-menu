$(document).ready(function () {

    const menuBtn = $('#show-menu');
    const menu = $('#main-menu');
    const wrap = $('#wrap');

    menuBtn.click(function (e) {
        e.preventDefault();
        menu.toggleClass('show');
        wrap.toggleClass('blur');
    });
    $('body').swipe({
        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
            if(direction == 'left') {
                menu.addClass('show');
                wrap.addClass('blur');
            }
            if(direction == 'right') {
                menu.removeClass('show');
                wrap.removeClass('blur');
            }
        }
    });

});