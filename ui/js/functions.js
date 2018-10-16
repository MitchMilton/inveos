
$(document).ready(function () {
    var counter = 0;

    $("#addItem").on("click", function () {
        $("#invoiceItems").append("<tr>"
        + "<td> <input type=\"text\" class=\"form-control\" name=\"item[]\" placeholder=\"Item\"> </td>"
        + "<td> <input type=\"text\" class=\"form-control\" name=\"amount[]\" placeholder=\"00\"> </td>"
        + "<td> <a href=\"#\" class=\"btn btn-danger btn-sm removeItem\"><li class=\"fa fa-times\"></li></a> </td>"
        + "</tr>");
        counter++;
    });



    $("#invoiceItems").on("click", ".removeItem", function (event) {
        $(this).closest("tr").remove();       
        counter -= 1
    });


});


function calculateRow(row) {
    var price = +row.find('input[name^="price"]').val();

}

function calculateGrandTotal() {
    var grandTotal = 0;
    $("table.order-list").find('input[name^="price"]').each(function () {
        grandTotal += +$(this).val();
    });
    $("#grandtotal").text(grandTotal.toFixed(2));
}