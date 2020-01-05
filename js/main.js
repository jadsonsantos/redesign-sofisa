var utils = {

}

var sofisa = {

    menuMobile: function() {
        $(".site-header__btn").on("click", function() {
            $(this).toggleClass("active");
            $(".site-header").toggleClass("active");
            $(".site-header__nav--mobile").toggleClass("active");
            $("body").toggleClass("not-scroll");
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

    calculateAdvance: function() {

        var calculator = $(".advance-calculator");

        calculator.find("button").on("click", function() {

            var amount = calculator.find(".amount.value"),
                installments = calculator.find(".installments.value");
            
            amount = amount.text().replace("R$ ", "");
            installments = installments.text().replace("x", "");

            var result = parseInt(amount) / parseInt(installments);
            result = result.toFixed(2);
            calculator.find(".installment-result-value").html("R$ " + result);
        });
    },

    benefitsSlick: function() {

        if ($(window).width() <= 768) {
            
            $('.benefits__container').slick({
                autoplay: true,
                dots: true,
                prevArrow: "<i class='slick-prev'></i>",
                nextArrow: "<i class='slick-next'></i>",
                responsive: [
                    {
                        breakpoint: 415,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1                    
                        }
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3                    
                        }
                    }
                ]
            });
        }
    },

    init: function() {
        this.menuMobile();
        this.scale();
        this.calculateAdvance();
        this.benefitsSlick();
    }
}


$(document).ready(function() {

    sofisa.init();
});