$(function () {
    var currentBeer = 1; // 設置當前圖片編號

    function updateBeerInfo(num) {
        $(".button img").css("opacity", "0.5");
        $("#beer" + num).css("opacity", "1");
        $("#sample").attr("src", "./image/beer/beer" + num + ".png");

        $(".introduce .text").hide();
        if (num === "1") {
            $(".ribbon p").text("印度淡色艾爾");
            $(".introduce .text.IPA").show();
            $(".level1 img").attr("src","./image/beer/three-star.png");
            $(".level2 img").attr("src","./image/beer/three-star.png");
            $(".level3 img").attr("src","./image/beer/two-star.png");
        } else if (num === "2") {
            $(".ribbon p").text("皮爾森啤酒");
            $(".introduce .text.pilsner").show();
            $(".level1 img").attr("src","./image/beer/two-star.png");
            $(".level2 img").attr("src","./image/beer/two-star.png");
            $(".level3 img").attr("src","./image/beer/one-star.png");
        } else if (num === "3") {
            $(".ribbon p").text("比利時三重奏");
            $(".introduce .text.tripel").show();
            $(".level1 img").attr("src","./image/beer/four-star.png");
            $(".level2 img").attr("src","./image/beer/four-star.png");
            $(".level3 img").attr("src","./image/beer/three-star.png");
        } else if (num === "4") {
            $(".ribbon p").text("波本啤酒");
            $(".introduce .text.porter").show();
            $(".level1 img").attr("src","./image/beer/five-star.png");
            $(".level2 img").attr("src","./image/beer/five-star.png");
            $(".level3 img").attr("src","./image/beer/four-star.png");
        } else if (num === "5") {
            $(".ribbon p").text("德國黑啤");
            $(".introduce .text.sch").show();
            $(".level1 img").attr("src","./image/beer/four-star.png");
            $(".level2 img").attr("src","./image/beer/five-star.png");
            $(".level3 img").attr("src","./image/beer/five-star.png");
        }
    }

    $(".button img").click(function () {
        var num = $(this).attr("id").substr(4);
        currentBeer = parseInt(num); // 更新當前圖片編號
        $(".level img").attr("src", "./image/beer/no-star.png");
        updateBeerInfo(num);
    });

    $(".next").click(function () {
        currentBeer = (currentBeer % 5) + 1; // 計算下一張圖片編號
        $(".level img").attr("src", "./image/beer/no-star.png");
        updateBeerInfo(currentBeer.toString());//數值轉換為字串
    });

    $(".back").click(function () {
        currentBeer = (currentBeer - 2 + 5) % 5 + 1; // 計算上一張圖片編號
        $(".level img").attr("src", "./image/beer/no-star.png");
        updateBeerInfo(currentBeer.toString());
    });
});