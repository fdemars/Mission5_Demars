$(document).ready(function () {
    $("#calculateTotal").click(function () {
        var hours = parseInt($("#hours").val());
        if (!isNaN(hours) && hours > 0) {
            var chargePerHour = parseFloat($("#chargePerHour").val().replace('$', ''));
            var total = hours * chargePerHour;
            $("#totalCost").text("$" + total.toFixed(2));
        } else {
            alert("Please enter a valid number of hours.");
        }
    });
});