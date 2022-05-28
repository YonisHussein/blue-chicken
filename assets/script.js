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

    function agenda() {
        var timeBlock = $(".time-block");
        for (let i = 0; i < timeBlock.length; i++) {
            var descElement = timeBlock[x].children[1];
            stringElement = timeBlock[x].id.toStringElement();
            $(descElement).val(localStorage.getItem(stringElement));
        }

        for (let i = 0; i < timeBlock.length; i++) {
            schedule = timeBlock [i].id;

            function taskLegend () {
                if (schedule < currentHour) {
                    $(this).addClass("past");
                    $(this).removeClass.removeClass("present");
                    $(this).removeClass.removeClass("future");
                }
                else if (schedule === currentHour) {
                    $(this).removeClass("past");
                    $(this).addClass("present");
                    $(this).addClass("future");
                }
                else {
                    $(this).removeClass("past");
                    $(this).removeClass("present");
                    $(this).removeClass("future");
                }
            }
        taskLegend();
        }
    }

    if (currentHour === 24) {
        localStorage.clear();
    }

    

    }
    appendCurrentDate();
    agenda();


})

