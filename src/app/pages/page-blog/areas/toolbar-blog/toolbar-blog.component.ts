import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-toolbar-blog',
  templateUrl: './toolbar-blog.component.html',
  styleUrls: ['./toolbar-blog.component.sass']
})
export class ToolbarBlogComponent implements OnInit {

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
