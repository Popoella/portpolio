$(document).ready(function(){


    /************* start :: visual의 popup swiper 연결***********/
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        //autoplay: {  /* 팝업 자동 실행 */
            //delay: 5000,
            //disableOnInteraction: true,
        //},

        //effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual  .btn_wrap .next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual  .btn_wrap .prev',  
        },

    });
    /************* end :: visual의 popup swiper 연결***********/



    const exhibition_swiper = new Swiper('.exhibition .swiper', { /* 팝업을 감싼는 요소의 class명 */

        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 5000,
        //     disableOnInteraction: true,
        // },

        //effect: "fade", /* fade 효과 */

        loop: false,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        slidesPerView: 'auto',  // 예시로 한 번에 3개의 이미지 보여주기

        spaceBetween: 40,  // 슬라이드 간의 간격 (10px)

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual  .btn_wrap .next',  /* 다음 버튼의 클래스명 */
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

    const event_swiper = new Swiper('.event .swiper', { /* 팝업을 감싼는 요소의 class명 */

    // autoplay: {  /* 팝업 자동 실행 */
    //     delay: 5000,
    //     disableOnInteraction: true,
    // },

    //effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        
        navigation: {  /* 이전, 다음 버튼 */
        nextEl: '.event .culture .tit .btn_wrap .next',  /* 다음 버튼의 클래스명 */
        prevEl: '.event .culture .tit .btn_wrap .prev',  
        },

    });




    $('.visual .btn_wrap button.stop').on('click', function(){
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide();
        $('.visual .btn_wrap button.play').show();
	});
    $('.visual .btn_wrap button.play').on('click', function(){
        visual_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide();
        $('.visual .btn_wrap button.stop').show();
	});



    $('.exhibition .list .swiper ul li').on('mouseenter focusin', function(){
        $(this).addClass('hover')
    })
    $('.exhibition .list .swiper ul li').on('mouseleave', function(){
        $(this).removeClass('hover')
    })
})
r라맹재ㅓ앰저ㅐ