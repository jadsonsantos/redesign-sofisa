var utils = {

}

var sofisa = {

    menuMobile: function() {
        $(".site-header__btn").on("click", function() {
            $(this).toggleClass("active");
            $(".site-header").toggleClass("active");
            $(".site-header__nav--mobile").toggleClass("active");
        })
    },

    scale: function() {

        $(".calc-amount .slider").slider({
            range: "min",
            value: 130000,
            step: 5000,
            min: 60000,
            max: 150000,
            slide: function(event, ui) {
                $(this).css("background", "#D8D9D9");
                $(this).parent().find(".value").html("R$ " + ui.value);
            }
        });

        $(".calc-installments .slider").slider({
            range: "min",
            value: 36,
            step: 1,
            min: 12,
            max: 60,
            slide: function(event, ui) {
                $(this).css("background", "#D8D9D9");
                $(this).parent().find(".value").html(ui.value + "x");
            }
        });
    },

    benefitsSlick: function() {

        if ($(window).width() <= 768) {
            
            $('.benefits__container').slick({
                autoplay: true,
                dots: true,
                prevArrow: "<i class='slick-prev'></i>",
                nextArrow: "<i class='slick-next'></i>"
            });
        }
    },

    init: function() {
        this.menuMobile();
        this.scale();
        this.benefitsSlick();
    }
}


$(document).ready(function() {

    sofisa.init();
});