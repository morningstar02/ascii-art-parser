import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  navLinks = [
    { path: '', label: 'Home' },
    { path: '', label: 'The Solution' },
    { path: '', label: 'The Game' },
  ];

}
