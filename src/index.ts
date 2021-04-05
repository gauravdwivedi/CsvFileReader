import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReport';

//Create an Object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv');
//converting them into static methods inside class

//Create an instance  of MatchReader and pass in something satifying
//the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmpReport('Man United');

matchReader.load();

// const summary = new Summary( new WinsAnalysis('Man United'),  new HtmlReport());

summary.buidAndPrintReport(matchReader.matches);
