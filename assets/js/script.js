
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").text(moment().format('dddd, MMM Do YYYY'));
;

$(document).ready(function () {
        $(".saveBtn").on("click", function () {
            var currentElement = $(this);
            var text = currentElement.siblings(".description").val();
            var time = currentElement.closest(".time-block").attr("id");
      
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        var timeNow = moment().hour();
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    for (var i = 8; i <= 17; i++) {
        $("#hour" + i + " .description").val(localStorage.getItem("hour" + i));
    }
    

    timeTracker();
})