"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
var dateStringToDate = function (dateString) {
    var segments = dateString.split('/').map(function (val) {
        return parseInt(val);
    });
    /**
     * We construct a date from the parts in segments, the format is
     * that we can expect the segments to be day, moth, year but we need
     * to construct the new date in year, month, day format and ne mindful
     * that the month is zero indexed therefore we have to minus 1 the
     * value for the month.
     */
    return new Date(segments[2], segments[1] - 1, segments[0]);
};
exports.dateStringToDate = dateStringToDate;
