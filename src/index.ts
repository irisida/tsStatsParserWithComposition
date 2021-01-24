import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';

const matchReader = MatchReader.FromCsv('./data/football.csv');
const summary = Summary.winsAnalysisHtmlFormat('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
