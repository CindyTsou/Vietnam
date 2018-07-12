(function($) {



    $(function() {

        $('#Nabutton').on('click', function() {

            $(this).hide(500);

            $("#NA").animate({
                left: "0"
            }, "500");


        });

        $('#close').on('click', function() {
            $("#NA").animate({
                left: "-250px"
            }, "500");
            $('#Nabutton').show(500);
        });


    });

})($)