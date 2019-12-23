$(document).ready(function() {
    
    var scale = $(".scale");

    var inputRange = scale.find("input[type=range]");

    inputRange.on("input", function() {
        $(this).parent().parent().find(".value").html(this.value);
    });
});