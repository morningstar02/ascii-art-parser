import { Component, OnInit } from '@angular/core';
import { AsciiService } from '../services/ascii.service'

@Component({
  selector: 'app-segment2number',
  templateUrl: './segment2number.component.html',
  styleUrls: ['./segment2number.component.css']
})
export class Segment2numberComponent implements OnInit {
  asciiFile: string = "";
  constructor(private asciiService: AsciiService) { }

  public getDigits = () => {
    this.asciiService.foo();
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
      this.asciiService.compileSegmentedInput(this.asciiFile);
    }
    fileReader.readAsText(this.file);
}

  ngOnInit() {
  }

}
