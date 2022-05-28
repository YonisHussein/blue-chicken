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
            var descElement = timeBlock[i].children[1];
            stringElement = timeBlock[i].id.toStringElement();
            $(descElement).val(localStorage.getItem(stringElement));
        }

        for (let i = 0; i < timeBlock.length; i++) {
            schedule = timeBlock [i].id;

            function currentPlace () {
                if (schedule < currentHour) {
                    $(timeBlock).addClass("past");
                    $(timeBlock).removeClass.removeClass("present");
                    $(timeBlock).removeClass.removeClass("future");
                }
                else if (schedule === currentHour) {
                    $(timeBlock).removeClass("past");
                    $(timeBlock).addClass("present");
                    $(timeBlock).addClass("future");
                }
                else {
                    $(timeBlock).removeClass("past");
                    $(timeBlock).removeClass("present");
                    $(timeBlock).removeClass("future");
                }
            }
        currentPlace();
        }
    }

    if (currentHour === 24) {
        localStorage.clear();
    }

    

    }
    appendCurrentDate();
    agenda();


})

