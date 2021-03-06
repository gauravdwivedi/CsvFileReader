import fs from 'fs';

export class CsvFileReader {
  data: string[][] = [];
  // data: MatchData[] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8', //this is to get string in return
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      });
  }
}
