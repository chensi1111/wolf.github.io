$(function () {
    $(".card .plus").click(function () {
        var input = $(this).siblings('input[type="text"]');
        var value = parseInt(input.val()) + 1;
        input.val(value);
    });

    $('.card .minus').click(function () {
        var input = $(this).siblings('input[type="text"]');
        var value = parseInt(input.val()) - 1;
        input.val(Math.max(value, 0));
    });
});