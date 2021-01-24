"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs_1 = __importDefault(require("fs"));
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        /**
         * read a passed file in utf-8 style. The file will be split on
         * newlines as an array of strings and each element of tha array
         * is a row of the file.
         * We then take each element/row and split that by the commas which
         * are separating the values to produce an array where each row of
         * the datafile is an array of strings.
         */
        this.data = fs_1.default
            .readFileSync(this.fileName, {
            encoding: 'utf-8',
        })
            .split('\n')
            .map(function (row) {
            return row.split(',');
        });
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
