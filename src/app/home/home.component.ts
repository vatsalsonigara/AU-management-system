import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getUrl(){
    return "/home/vatsal/Desktop/angular accolite/AU-management-system/src/app/home/bg.jpeg";

  }
}
