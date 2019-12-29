var sofisa = {

    menuMobile: function() {
        $(".site-header__btn").on("click", function() {
            $(this).toggleClass("active");
            $(".site-header").toggleClass("active");
            $(".site-header__nav--mobile").toggleClass("active");
        })
    },

    init: function() {
        this.menuMobile();
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