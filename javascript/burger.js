$(function(){
    var isOpen = false;

    $(".burger-icon").click(function(){
        if (!isOpen) { //"!"將數值變為相反
            $(".burger").animate({top: 0}, 500);
            isOpen = true;
        } else {
            $(".burger").animate({top: -1500}, 500);
            isOpen = false;
        }
    });
});