
function activeButton() {

    var url = location.pathname;
    console.log(url);
    var href1 = '/index.html';
    var href2 = '/school_online.html';
    var href3 = '/au_pair.html';
    var href4 = '/price.html';

    if(url === href1) {

        $('header').find('.home').addClass("active");
    }
    if(url === href2) {

        $('header').find('.online').addClass("active");
    }
    if(url === href3) {

        $('header').find('.AuPair').addClass("active");
    }
    if(url === href4) {

        $('header').find('.price').addClass("active");
    }
};

$(document).ready(function(){

    $('.js_popup').fancybox();

    $("select").selecter({
        mobile: true
    });

    activeButton();

    $('.owl-carousel').owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1500,
        loop: true,
        autoWidth:true,
        // autoHeight:true
    });

});

$(window).load(function(){

});

$(window).resize(function(){

});