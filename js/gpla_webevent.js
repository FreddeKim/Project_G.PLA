
$(document).ready(function(){
    searchbar();
    slider();
    changeDisplay();
});





function searchbar(){
    $('header > div > div > div > button').click(function(){
        $('header > div > div > div > div').toggleClass('searchbar');
    });
    $('header > div > div > div > div > form > div > input[type="button"]').click(function(){
        $('header > div > div > div > div').removeClass('searchbar');
    });
};
// function slidermove(){
//     $('.sArrowLeft').click(function(){
//         $('.slidercontainer').css('transform','translate(-100vw)')
//     });
//     $('.sArrowRight').click(function(){
//         $('.slidercontainer').css('transform','translate(100vw)')
//     });
// }


function slider() {
    const $sliderWrap = $('.slidercontainer');
    const $sliderBox = $sliderWrap.find('.containerBox');

    let sliderindex = 0;
    let sliderCount = $sliderBox.length;
    let sliderInterval = 6000;


    function sliderPrev(){
        let prevSlide = (sliderindex - 1 + sliderCount) % sliderCount;
        $sliderBox.eq(sliderindex).fadeOut(800);
        $sliderBox.eq(prevSlide).fadeIn(800);
        sliderindex = prevSlide;
    }
    function sliderNext(){
        let nextSlide = (sliderindex + 1) % sliderCount;
        $sliderBox.eq(sliderindex).fadeOut(800);
        $sliderBox.eq(nextSlide).fadeIn(800);
        sliderindex = nextSlide;
    }


    $('.sArrowLeft').click(function(){
        sliderPrev();
    });
    $('.sArrowRight').click(function(){
        sliderNext();
    });
    setInterval(sliderNext , sliderInterval);
};

function changeDisplay(){
    $(".muibtn").click(function(){
        $("header > div:last-of-type > nav").toggleClass('menubar');
        $('header > div > div > div > div').removeClass('searchbar');
    });
    $(".muibtn").click(function(){
        $(".muibtn").toggleClass('muibtnclose');
    });
    $("header > div:last-of-type > div > div > button").click(function(){
        $("header > div:last-of-type > nav").removeClass('menubar');
    })
};
