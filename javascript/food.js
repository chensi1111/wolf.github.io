$(function () {
    $(".line").click(function () {
        $(".menu").addClass("flipped");
        setTimeout(function () {
            $(".right.page1, .left.page1").css("opacity", "1");
        }, 1300);
    })
    $(".close").click(function () {
        $(".menu").removeClass("flipped");
        $(".right.page1").toggleClass("flipped");
        setTimeout(function () {
            $(".right, .left").css("opacity", "0");
        }, 1300);
    })
    $(".next").click(function () {
        $(".right.page1").toggleClass("flipped");
        setTimeout(function () {
            $(".right.page2, .left.page2").css("opacity", "1");
            $(".left.page1").css("opacity", "0")
        }, 1300)
    })
    $(".back").click(function () {
        $(".right.page1").toggleClass("flipped");
        setTimeout(function () {
            $(".left.page1").css("opacity", "1")
        }, 1300);
    });
})


