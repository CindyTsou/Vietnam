(function($) {



    $(function() {

        $('.part').on("mouseover", function() {
            $(this).children('.nextPage').css("color", "yellow");
            $(this).children('.nextPage').stop().animate({
                bottom: "30px",

            }, "500");


        });

        $('.part').on("mouseout", function() {
            $(this).children('.nextPage').css("color", "#FFF");
            $(this).children('.nextPage').stop().animate({
                bottom: "-45px",

            }, "500");


        });


    });

})($)