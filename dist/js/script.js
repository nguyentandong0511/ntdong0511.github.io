$('.owl-carousel-t').owlCarousel({
    loop:false,
    animateIn: 'zoomIn',
    smartSpeed:450,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})


// end slide 2

$('.owl-carousel-ft').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    animateIn: 'zoomIn',
    smartSpeed:450,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

//end slide 3

$('.owl-carousel-bt').owlCarousel({
    loop:true,
    animateIn: "zoomIn",
    smartSpeed:750,
    margin:20,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
})


//end slide 4


$('.owl-carousel-sc').owlCarousel({
    loop:true,
    animateIn: 'zoomIn',
    smartSpeed:750,
    margin:100,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
//end slide 5

$('.owl-carousel-3sl').owlCarousel({
    loop:true,
    animateIn: 'zoomIn',
    smartSpeed:950,
    margin:20,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

// end slide 6

$('.owl-carousel-4sl').owlCarousel({
    loop:true,
    animateIn: 'zoomIn',
    smartSpeed:750,
    margin:20,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        800:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

//end slide


//hover img

document.addEventListener('DOMContentLoaded', function(){
    var khoi1 = document.querySelectorAll('.img-ct-hv');
    var texta = document.querySelectorAll('.text-1');
    var textb = document.querySelectorAll('.text-2');
    var textc = document.querySelectorAll('.text-3');
    khoi1[0].onmouseenter = function(){
        texta[0].classList.add('hover');
        textb[0].classList.add('hover1');
        textc[0].classList.add('hover3');
    }
    khoi1[0].onmouseleave = function(){
        texta[0].classList.remove('hover');
        textb[0].classList.remove('hover1');
        textc[0].classList.remove('hover3');
    }

    khoi1[1].onmouseenter = function(){
        texta[1].classList.add('hover');
        textb[1].classList.add('hover1');
        textc[1].classList.add('hover3');
    }
    khoi1[1].onmouseleave = function(){
        texta[1].classList.remove('hover');
        textb[1].classList.remove('hover1');
        textc[1].classList.remove('hover3');
    }

    khoi1[2].onmouseenter = function(){
        texta[2].classList.add('hover');
        textb[2].classList.add('hover1');
        textc[2].classList.add('hover3');
    }
    khoi1[2].onmouseleave = function(){
        texta[2].classList.remove('hover');
        textb[2].classList.remove('hover1');
        textc[2].classList.remove('hover3');
    }
})


document.addEventListener('DOMContentLoaded', function(){
    var khoi = document.querySelectorAll('.img-hover-ct');
    var text = document.querySelectorAll('.text-hv-1');
    var text2 = document.querySelectorAll('.text-hv-2');
    var text3 = document.querySelectorAll('.text-hv-3');
    var text4 = document.querySelectorAll('.text-hv-4');
    khoi[0].onmouseenter = function(){
        text[0].classList.add('hover');
        text2[0].classList.add('hover1');
        text3[0].classList.add('hover2');
        text4[0].classList.add('hover3');
    }
    khoi[0].onmouseleave = function(){
        text[0].classList.remove('hover');
        text2[0].classList.remove('hover1');
        text3[0].classList.remove('hover2');
        text4[0].classList.remove('hover3');
    }
    khoi[1].onmouseenter = function(){
        text[1].classList.add('hover');
        text2[1].classList.add('hover1');
        text3[1].classList.add('hover2');
        text4[1].classList.add('hover3');
    }
    khoi[1].onmouseleave = function(){
        text[1].classList.remove('hover');
        text2[1].classList.remove('hover1');
        text3[1].classList.remove('hover2');
        text4[1].classList.remove('hover3');
    }
})




