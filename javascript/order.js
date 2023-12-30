$(function () {
    $(".WolfBar").click(function () {
        $("#WolfBar").hide();
        $("#map1").show();
        $(this).hide();
        $(".first").css("opacity", "1")
    })
    $(".Little-Wolf").click(function () {
        $("#Little-Wolf").hide();
        $("#map2").show()
        $(this).hide();
        $(".second").css("opacity", "1")
    })
    $(".first").click(function () {
        $(".WolfBar").show();
        $("#WolfBar").show();
        $("#map1").hide();
        $(this).css("opacity", "0")
    })
    $(".second").click(function () {
        $(".Little-Wolf").show();
        $("#Little-Wolf").show();
        $("#map2").hide();
        $(this).css("opacity", "0")
    })
})
$(document).ready(function () {
    $(".right").submit(function (event) {
        var name = $("#name").val();
        var number = $("#number").val();
        var tel = $("#tel").val();
        var date = $("#date").val();
        var time = $("#time").val();
        var shop = $("#shop").val();
        var missing = [];

        if (name === "") {
            missing.push("訂位姓名");
        }
        if (number === "") {
            missing.push("訂位人數");
        }
        if (tel === "") {
            missing.push("連絡電話");
        }
        if (date === "") {
            missing.push("預約日期");
        }
        if (time === "") {
            missing.push("預約時間");
        }
        if (shop === "") {
            missing.push("預定據點");
        }
        if (missing.length > 0) {
            var message = "請輸入" + missing.join(", ");
            alert(message);
            event.preventDefault(); // 阻止表单提交
        }
    });

});