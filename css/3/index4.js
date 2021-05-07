"use strict"

// $("body").hide()

var numberOfItems = $("#page-nav .paginate").length;
var limitPerPage = 10;
$("#page-nav .paginate:gt(" +(limitPerPage -1) + ")").hide();
// alert(numberOfItems)
var totalPages = Math.round(numberOfItems/limitPerPage);
// alert(totalPages);

$(".pagination").append("<li class='current-page active'><a class='page-link current-item' href='#'>"+ 1 + "</a></li>")

for (let i=2; i<= totalPages ;i++){
    $(".pagination").append("<li class='current-page'><a class='page-link current-item' href='#'>"+ i + "</a></li>")
}

$(".pagination").append("<li class='page-item' id='next-page'> <a class='page-link 'href='#' aria-label='Next'><span aria-hidden='true'>&raquo;</span><span class='sr-only'>Next</span></a></li>")

$(".pagination li.current-page").on("click", function(){
    if ($(this).hasClass("active")){
        return false;
    } else{
        var currentPage = $(this).index();
        $(".pagination li").removeClass("active");
        $(this).addClass("active");
        $("#page-nav .paginate").hide();
        var grandTotal = limitPerPage * currentPage;
        for (var i = grandTotal-limitPerPage; i < grandTotal; i++) {
            $("#page-nav .paginate:eq(" + i + ")").show();
        }
    }
})
$("#next-page").on("click", function (){
   var currentPage= $(".pagination li.active").index();
//    alert('number ' + currentPage)
   if (currentPage === totalPages) {
       return false
   } else {
       currentPage++;
        $(".pagination li").removeClass("active");
        $("#page-nav .paginate").hide();
        var grandTotal = limitPerPage * currentPage;
        for (var i = grandTotal-limitPerPage; i < grandTotal; i++) {
            $("#page-nav .paginate:eq(" + i + ")").show();
        }
        $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass("active")
   }
})
$("#prev-page").on("click", function (){
   var currentPage= $(".pagination li.active").index();
//    alert('number ' + currentPage)
   if (currentPage === 1) {
       return false
   } else {
       currentPage--;
        $(".pagination li").removeClass("active");
        $("#page-nav .paginate").hide();
        var grandTotal = limitPerPage * currentPage;
        for (var i = grandTotal-limitPerPage; i < grandTotal; i++) {
            $("#page-nav .paginate:eq(" + i + ")").show();
        }
        $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass("active")
   }
})


// $(document).ready(function () {
//     $("#selected-rows").change(function (){
//         $("table > tbody > tr").hide().slice(10, 17).show();
//         // var selectedOption = $("#selected-rows option:selected");
//         // var selectedOption = $("#selected-rows #five");
//     })
// })

// var count = $("#data tr").length;




// $("#selected-rows").on("click", function(){
//     $("table > tbody > tr").hide().slice(10, 17).show();
// } )
// $("#selected-rows").change(function (){
//     $("table > tbody > tr").hide().slice(10, 17).show();
    
// })

$("#selected-rows").change(function (selectedOption){
    var selectedOption = $("#selected-rows option:selected").val();
    // alert(selectedOption)
    // alert(typeof selectedOption)

    if (selectedOption ==="5"){
        $("table > tbody > tr").hide().slice(0, 5).show();
        // alert(selectedOption)
    }
    else if (selectedOption ==="10"){
        $("table > tbody > tr").hide().slice(0, 10).show();
        // alert(selectedOption)
    }
    else if (selectedOption ==="50"){
        $("table > tbody > tr").hide().slice(10, 50).show();
        // alert(selectedOption)
    }
    else if (selectedOption ==="100"){
        $("table > tbody > tr").hide().slice(50, 150).show();
        // alert(selectedOption)
    }
    
})



