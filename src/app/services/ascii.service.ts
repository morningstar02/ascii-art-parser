import { Injectable } from '@angular/core';
import { DigitStore } from './digit-store.model'
import * as _ from 'lodash'

@Injectable({
  providedIn: 'root'
})
export class AsciiService {

  digitLine: string[];    // |_| _||_|  ||_||_|  | _|  |
  digitCell: string[][];  // digit 3x3 grid
  digitCellSet: string[][]; // collection of digitCells
  constructor(private digitStore: DigitStore) { }

  foo() {
    console.log('foo');
    this.bar();
    console.log(this.digitStore[0]);
  }

  bar() {
    console.log('bar');
    console.log(this.digitStore[4]);
  }

  getSegmented() {
    console.log('7-Segment Display');
    return true;
  }

  compileSegmentedInput(inputTextFile: string) {
    
    let inputArrayByLines = inputTextFile.split('\n');
    let convertedNumbers = '';

    for(let i = 0; i <= inputArrayByLines.length - 4; i = i+4){  // skip one blank line
      // parse segment numbers one at a time
      this.digitCellSet = [[],[],[]];

      for(let j = i; j < i+3; j++){
        this.digitLine = inputArrayByLines[j].split('');  // convert line to array of characters
        this.digitCellSet[j-i] = this.digitLine;
      }
      convertedNumbers+=  this.toNumbers(this.digitCellSet) + '\n';
    }
    return convertedNumbers;
  }

  toNumbers(digitSet: string[][]){
    let invoiceNumber = '';
    let charactersPerLine = digitSet[2].length;
    console.log('charlength: ', charactersPerLine);
    for(let i = 0; i+3 <= charactersPerLine; i=i+3){  // traverse along line one digit at a time
      this.digitCell = [[],[],[]];
      for(let j = 0; j < 3; j++){ //traverse row in grid
        for(let k = i; k <= i+2; k++){  // traverse straight columns
          this.digitCell[j][k-i] = digitSet[j][k];  // populate cell
        }
      }
      let digitValue = this.readDigit(this.digitCell);
      invoiceNumber += digitValue;
    }
    return invoiceNumber;
  }

  readDigit(digitCell: string[][]){
    for(let number in this.digitStore){
      if(_.isEqual(digitCell, this.digitStore[number]))
        return number;
    }
    return '-';
  }
}
