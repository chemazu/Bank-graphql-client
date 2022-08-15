"use strict";
exports.__esModule = true;
function handleDate(x) {
    var monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    var date = new Date(Number(x));
    var day = date.getDate();
    var monthIndex = date.getMonth() + 1;
    var year = date.getFullYear();
    //   return "p";
    return day + "-" + monthNames[monthIndex] + "-" + year;
}
exports["default"] = handleDate;
