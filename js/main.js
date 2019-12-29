var sofisa = {

    menuMobile: function() {
        $(".site-header__btn").on("click", function() {
            $(this).toggleClass("active");
            $(".site-header").toggleClass("active");
            $(".site-header__nav--mobile").toggleClass("active");
        })
    },

    benefitsSlick: function() {

        if ($(window).width() <= 768) {
            
            $('.benefits__container').slick({
                autoplay: true,
                prevArrow: "<i class='slick-prev'></i>",
                nextArrow: "<i class='slick-next'></i>"
            });
        }
    },

    init: function() {
        this.menuMobile();
        this.benefitsSlick();
    }
}


$(document).ready(function() {
    
    var scale = $(".scale");

    var inputRange = scale.find("input[type=range]");

    inputRange.on("input", function() {
        $(this).parent().parent().find(".value").html(this.value);
    });

    sofisa.init();
});