$(function () {

    var url = "/api/products";

    // Get data when first time open
    getData();

    function getData(){
        $("#plist").empty();
        // #12 Get all products and display as a table
        // use $.get
        
        $("button").click(function(){
            $.get("demo_test.asp", function(data, status){
              alert("Data: " + data + "\nStatus: " + status);
            });
          });
        // ===============================
    }
    
    // Update photo when URL has changed
    $("#photo").change(function(){
        $("#preview").attr("src", $("#photo").val());
    })

    // Add new product by calling api
    $("#savenewproduct").click(function () {
        var newproduct = {
            serialno: $("#serialno").val(),
            name: $("#name").val(),
            category: $("#category").val(),
            price: $("#price").val(),
            photo: $("#photo").val()
        }

        // #13 Add new products by calling api
        // use $.post
          $("input").keyup(function(){
             var txt =$("input").val();
             $.post("demo_ajax_gethint.asp",{suggest:txt},function(result){
            $("span").html(result);
             });
          });
        // ===============================

    });
})