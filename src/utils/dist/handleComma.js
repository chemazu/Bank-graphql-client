"use strict";
exports.__esModule = true;
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
exports["default"] = numberWithCommas;
