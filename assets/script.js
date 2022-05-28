$(document).ready(function () {
var currentHour = moment().format("HH");

function appendCurrentDate(){
    var currentDate = moment(). format("dddd, MMMM Do YYYY, h:mm A");
    $("currentDay").text(currentDate);
}

$(".saveBtn").on("click", function()){
    var userText = $(this).siblings("description".val();

}
})

appendCurrentDate();