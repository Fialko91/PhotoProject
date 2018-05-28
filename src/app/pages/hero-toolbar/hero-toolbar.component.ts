import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero-toolbar',
  templateUrl: './hero-toolbar.component.html',
  styleUrls: ['./hero-toolbar.component.sass']
})
export class HeroToolbarComponent implements OnInit {


  hidden: boolean;
  showMenu = false;

  constructor() { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    const scroll = window.scrollY;
  }

  ngOnInit() {
  }

  res(e: any) {
    const w = e.srcElement.innerWidth;
    w < 768 ? this.showMenu = false : this.showMenu = true;
  }

  isHidden(): boolean {
    const scroll = window.scrollY;
    return scroll > 100;
  }
}
