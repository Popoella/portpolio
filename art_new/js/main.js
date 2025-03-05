$(document).ready(function(){


    
    const visual_swiper = new Swiper('.visual .swiper', { 

        autoplay: {  
            delay: 5000,
            disableOnInteraction: true,
        },

        //effect: "fade", 

        loop: true,  

        navigation: {  
            nextEl: '.visual  .btn_wrap .next',  
            prevEl: '.visual  .btn_wrap .prev',  
        },

    });



    const exhibition_swiper = new Swiper('.exhibition .swiper', { 

        // autoplay: {  
        //     delay: 5000,
        //     disableOnInteraction: true,
        // },

        //effect: "fade", 

        loop: false,  

        slidesPerView: 'auto',  

        spaceBetween: 40,  

        navigation: {  
            nextEl: '.visual  .btn_wrap .next',  
            prevEl: '.visual  .btn_wrap .prev',  
        },
        breakpoints: {
            768: {
                spaceBetween: 30,
            },
            0: {
                spaceBetween: 20,
            },
        }

    });

    const event_swiper = new Swiper('.event .swiper', {

    autoplay: { 
        delay: 3000,
        disableOnInteraction: true,
    },

   

        loop: true, 
        
        navigation: { 
        nextEl: '.event .culture .tit .btn_wrap .next', 
        prevEl: '.event .culture .tit .btn_wrap .prev',  
        },

    });




    $('.visual .btn_wrap button.stop').on('click', function(){
        visual_swiper.autoplay.stop();  
        $(this).hide();
        $('.visual .btn_wrap button.play').show();
	});
    $('.visual .btn_wrap button.play').on('click', function(){
        visual_swiper.autoplay.start(); 
        $(this).hide();
        $('.visual .btn_wrap button.stop').show();
	});



    $('.exhibition .list .swiper ul li').on('mouseenter focusin', function(){
        $(this).addClass('hover')
    })
    $('.exhibition .list .swiper ul li').on('mouseleave', function(){
        $(this).removeClass('hover')
    })



    $('.collection .photo ul li').on('mouseenter focusin', function(){
        $(this).addClass('hover')
    })
    $('.collection .photo ul li').on('mouseleave', function(){
        $(this).removeClass('hover')
    })


})