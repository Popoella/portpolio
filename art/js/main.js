$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { 
        autoplay: { 
            delay: 5000,
            disableOnInteraction: true,
        },
        loop: true
        },
    );
    
    $('.visual .ctrl_wrap button.stop').on('click', function(){
        visual_swiper.autoplay.stop();
        $(this).hide()
        $('.visual .ctrl_wrap button.play').show()
    })
    $('.visual .ctrl_wrap button.play').on('click', function(){
        visual_swiper.autoplay.start();
        $(this).hide()
        $('.visual .ctrl_wrap button.stop').show()
    })
	$('.visual .ctrl_wrap button.next').on('click', function(){
		visual_swiper.slideNext();
		visual_swiper.autoplay.start();
	})
	$('.visual .ctrl_wrap button.prev').on('click', function(){
		visual_swiper.slidePrev();
		visual_swiper.autoplay.start();
	})
})