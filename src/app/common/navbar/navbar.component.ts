import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  toggled = true
  ngOnInit() {
  }
  onToggled(){
    console.log("Tooggled");
    this.toggled = !this.toggled;
  }

  onWindowResize(e){
    console.log(e.target.outerWidth);
    if(e.target.outerWidth < 998 && this.toggled) {
      this.toggled = false;
    }
  }
}
