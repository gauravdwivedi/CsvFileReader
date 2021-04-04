import fs from 'fs';
import { MatchResult } from './MatchResults';

export abstract class CsvFileReader<T> {
  // data: string[][] = [];
  data: T[] = [];

  constructor(public filename: string) {}
  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8', //this is to get string in return
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow); //we are not invoking mapRow just passing the reference
  }
}
