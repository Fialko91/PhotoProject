import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {UsefulComponent} from '../../../../popaps/useful/useful.component';

@Component({
  selector: 'app-useful-articles',
  templateUrl: './useful-articles.component.html',
  styleUrls: ['./useful-articles.component.sass']
})
export class UsefulArticlesComponent implements OnInit {

  // @ViewChild('popup1') popup1: Popup;
  //
  // ClickButton(){
  //
  //   this.popup1.options = {
  //     header: "Выбор фотографа",
  //     color: "rgba(0, 153, 255, 0.65)", // red, blue....
  //     widthProsentage: 100, // The with of the popou measured by browser width
  //     animationDuration: 1, // in seconds, 0 = no animation
  //     showButtons: true, // You can hide this in case you want to use custom buttons
  //     // confirmBtnContent: "OK", // The text on your confirm button
  //     cancleBtnContent: "X", // the text on your cancel button
  //     // confirmBtnClass: "btn btn-default", // your class for styling the confirm button
  //     cancleBtnClass: "btn btn-default", // you class for styling the cancel button
  //     animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
  //   };
  //   this.popup1.show(this.popup1.options);
  // };

  // constructor() { }
  constructor(public dialog: MatDialog) { }

  openDialog(text: string) {
    this.dialog.open(UsefulComponent, {
      data: {
        text: text
      }
    });
  }

  ngOnInit() {
  }

}
