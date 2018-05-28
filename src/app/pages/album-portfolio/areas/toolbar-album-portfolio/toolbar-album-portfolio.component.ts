import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-toolbar-album-portfolio',
  templateUrl: './toolbar-album-portfolio.component.html',
  styleUrls: ['./toolbar-album-portfolio.component.sass']
})
export class ToolbarAlbumPortfolioComponent implements OnInit {

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
