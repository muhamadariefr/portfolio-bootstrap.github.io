var myVar;
$(window).on("load", function() {
    if ($("#preloader").length) {
        $("#preloader")
            .delay(500)
            .fadeOut("fast", function() {
                $(this).remove();
            });
    }
});