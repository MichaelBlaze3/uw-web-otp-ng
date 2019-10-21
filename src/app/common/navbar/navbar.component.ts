import { Component, OnInit, HostListener } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  toggled = true
  dropListToggled = false

  constructor() { }

  ngOnInit() {
    if(this.getWindowSize() < 998) {
      this.hideMenu();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log(event);
    if(this.getWindowSize() < 998 && this.toggled){
      this.hideMenu();
    }
  }

  hideMenu(){
    this.toggled = false;
  }
  
  getWindowSize(){
    return window.innerWidth;
  }

  onToggled() {
    this.toggled = !this.toggled;
  }

  toggleDropList() {
    this.dropListToggled = !this.dropListToggled
  }
}
