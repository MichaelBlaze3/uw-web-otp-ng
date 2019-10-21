import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images = [
    "../../assets/green-1072828_1280.jpg", 
    "../../assets/road-1072823_1280.jpg", 
    "../../assets/elephant-1822636_1920.jpg", 
    "./../assets/squirrel-4515962_1920.jpg"];
  constructor() { }

  ngOnInit() { }
  slideIndex = 0;


  plusSlides(n) {
    this.slideIndex += n;

    if (this.slideIndex < 0) {
      this.slideIndex = this.images.length - 1;
    } else if (this.slideIndex > this.images.length - 1) {
      this.slideIndex = 0;
    }
  }

  currentSlide(n) {
    this.slideIndex = n;
  }

}