$(document).ready(function(){
    

    $('header .tnb .lang button').on('click', function(){
        if($('header .tnb .lang .list').hasClass('open')){
            $('header .tnb .lang .list').removeClass('open')
        }else{
            $('header .tnb .lang .list').addClass('open')
        }
    })

    
    $('header .gnb .gnb_wrap ul.depth1 > li').on ('mouseenter focusin', function(){
        $(this).addClass('over')
    })
    $('header .gnb .gnb_wrap ul.depth1 > li').on ('mouseleave', function(){
        $(this).removeClass('over')
    })
    $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2 > li').on('mouseenter focusin', function(){
        $(this).addClass('over')
    })
    $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2 > li').on('mouseleave', function(){
        $(this).removeClass('over')
    })


    $('header').on('mouseenter focusin', function(){
        $(this).addClass('menu_pc')
    })
    $('header').on('mouseleave', function(){
        $(this).removeClass('menu_pc')
    })

})