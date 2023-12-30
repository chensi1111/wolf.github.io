$(function () {
    $(".card").click(function () {
        var num=$(this).attr("id").substr(4);
        $(".msg p").hide();
        $("#"+num).fadeIn(350);
        $(".msg").fadeIn(350);
        
    });
    $(".cancel").click(function (event) {
        event.stopPropagation();//避免觸發.card的click
        $(".msg").hide();
    });

})

