// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $("#calculateBtn").click(function () {
        let hours = $("#hours").val();
        let rate = parseFloat($("#rate").val());

        // Validate input
        if (!hours || hours <= 0) {
            $("#hoursError").show();
            $("#total").val("");
            return;
        } else {
            $("#hoursError").hide();
        }

        // Calculate total
        let total = hours * rate;
        $("#total").val(total.toFixed(2));
    });

    // Hide error message when user starts typing
    $("#hours").on("input", function () {
        $("#hoursError").hide();
    });
});
