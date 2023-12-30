$(function () {
    var grandTotal = 0;
    function updateGrandTotal() {
        grandTotal = 0;
        $(".sum:visible").each(function () {//所有顯示的sum
            grandTotal += parseInt($(this).text());
        });
        $("b").text(grandTotal);
    }

    $(".up").click(function () {
        var input = $(this).siblings('input[type="text"]');
        var value = parseInt(input.val()) + 1;
        input.val(value);
        var priceContent = $(this).closest('tr').find('.price').text();
        var price = parseInt(priceContent);
        var number = parseInt(input.val());
        var total = price * number;
        $(this).closest('tr').find('.sum').text(total);
        grandTotal += total;
        $("b").text(grandTotal);
        updateGrandTotal();
    });

    $(".down").click(function () {
        var input = $(this).siblings('input[type="text"]');
        var value = parseInt(input.val()) - 1;
        input.val(Math.max(value, 0));
        var priceContent = $(this).closest('tr').find('.price').text();
        var price = parseInt(priceContent);
        var number = parseInt(input.val());
        var total = price * number;
        $(this).closest('tr').find('.sum').text(total);
        grandTotal += total;
        $("b").text(grandTotal);
        updateGrandTotal();
    });
    $(".cancel").click(function () {
        $(this).closest("tr").hide();
        updateGrandTotal();
    });

    $(".num").keypress(function (event) {
        if (event.which === 13) { //按下Enter
            var value = $(this).val();
            var priceContent = $(this).closest('tr').find('.price').text();
            var price = parseInt(priceContent);
            var number = parseInt(value);
            var total = price * number;
            $(this).closest('tr').find('.sum').text(total);
            grandTotal += total;
            $("b").text(grandTotal);
            updateGrandTotal();
        }
    });

    $(".up").trigger("click");

});

$(document).ready(function () {
    $(".right").submit(function (event) {
        var name = $("#name").val();
        var tel = $("#tel").val();
        var date = $("#date").val();
        var time = $("#time").val();
        var shop = $("#shop").val();
        var missing = [];

        if (name === "") {
            missing.push("訂購姓名");
        }
        if (tel === "") {
            missing.push("連絡電話");
        }
        if (date === "") {
            missing.push("取餐日期");
        }
        if (time === "") {
            missing.push("取餐時間");
        }
        if (shop === "") {
            missing.push("取餐據點");
        }
        if (missing.length > 0) {
            var message = "請輸入" + missing.join(", ");
            alert(message);
            event.preventDefault(); // 阻止表单提交
        }
    });
    $(".confirm").click(function () {
        $(".right").submit();
    })

});