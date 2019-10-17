import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  // images = [1, 2].map(() => './../assets/green-1072828_1280.jpg', './../assets/road-1072823_1280.jpg');
  images = ["../../assets/green-1072828_1280.jpg", "./../assets/road-1072823_1280.jpg"];
  ngOnInit() {
  }

}
