"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var matchReader = MatchReader_1.MatchReader.FromCsv('./data/football.csv');
var summary = Summary_1.Summary.winsAnalysisHtmlFormat('Man United');
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
