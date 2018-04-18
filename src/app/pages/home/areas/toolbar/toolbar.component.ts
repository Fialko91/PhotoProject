import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent implements OnInit {

  hidden: boolean;
  constructor() {
  }

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    const scroll = window.scrollY;
  }

  ngOnInit() {
  }

  isHidden(): boolean {
    const scroll = window.scrollY;
    return scroll > 100;
  }
}
