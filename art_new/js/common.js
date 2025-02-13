$(document).ready(function(){

    function resize_chk(){
        window_w = $(window).width()
        if(window_w > 1000){
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
    }
    resize_chk()
    $(window).resize(function(){
        resize_chk()
    })

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $('header').addClass('menu_pc')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
            $(this).addClass('over')
        }
    })
    $('header .gnb .gnb_wrap').on('mouseleave', function(){
        if(device_status == 'pc'){
            $('header').removeClass('menu_pc')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
        }
    })
    $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2 > li').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2 > li').removeClass('over')
            $(this).addClass('over')
        }
    })
    $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2 > li').on('mouseleave', function(){
        if(device_status == 'pc'){
            $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2 > li').removeClass('over')
        }
    })

    $('header .tnb .lang button').on('click', function(){
        if(device_status == 'pc'){
            if($('header .tnb .lang').hasClass('open')){
                $('header .tnb .lang').removeClass('open')
            }else{
                $('header .tnb .lang').addClass('open')
            }
        }
    })

    var $target = $('#fadeintext')

    function scroll_chk() {
        var window_h = $(window).height();
        var elementTop = $target.offset().top;
        var scrollPosition = $(window).scrollTop();

        if (scrollPosition + window_h > elementTop + (window_h / 2)) {
        $target.addClass('visible');
        }
    }

    scroll_chk();

    $(window).on('scroll', function() {
        scroll_chk();
    
    });
    
})