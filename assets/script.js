$(document).ready(function () {
var currentHour = moment().format("HH");

    function appendCurrentDate(){
        var currentDate = moment(). format("dddd, MMMM Do YYYY, h:mm A");
        $("currentDay").text(currentDate);

    $(".saveBtn").on("click", function() {
        var userText = $(this).siblings("description".val());
        var timeStamp = $(this).parent().attr("id");
        localStorage.setItem(timeStamp, userText);

        
        
        });

    function Agenda() {
        var timeBlock = $(".time-block");
        for (let i = 0; i < timeBlock.length; i++) {
            var descElement = timeBlock[x].children[1];
            stringElement = timeBlock[x].id.toStringElement();
            $(descElement).val(localStorage.getItem(stringElement);
        }
    }




}


})

appendCurrentDate();