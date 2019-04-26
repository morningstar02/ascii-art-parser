import { Component, OnInit } from '@angular/core';
import { AsciiService } from '../services/ascii.service'

@Component({
  selector: 'app-segment2number',
  templateUrl: './segment2number.component.html',
  styleUrls: ['./segment2number.component.css']
})
export class Segment2numberComponent implements OnInit {
  asciiFile: string = "";
  arabicNumerals: string = "";
  constructor(private asciiService: AsciiService) { }

  public getDigits = () => {
    this.arabicNumerals = this.asciiService.compileSegmentedInput(this.asciiFile);
  }
  
  file:any;
  fileChanged(e) {
    this.file = e.target.files[0];
    console.log('file:', this.file);
    this.uploadDocument(this.file);
  }
  
  uploadDocument(file) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.asciiFile = fileReader.result.toString();
    }
    fileReader.readAsText(this.file);
}


  ngOnInit() {
  }

}
