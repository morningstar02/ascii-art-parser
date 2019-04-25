import { Component, OnInit } from '@angular/core';
import { AsciiService } from '../services/ascii.service';

@Component({
  selector: 'app-number2segment',
  templateUrl: './number2segment.component.html',
  styleUrls: ['./number2segment.component.css']
})
export class Number2segmentComponent implements OnInit {

  constructor(private asciiService: AsciiService) { }

  ngOnInit() {
  }
  public getSegmented = () => {
    console.log(this.asciiService.getSegmented());
  }
}
