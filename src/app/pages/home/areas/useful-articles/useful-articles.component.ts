import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';

@Component({
  selector: 'app-useful-articles',
  templateUrl: './useful-articles.component.html',
  styleUrls: ['./useful-articles.component.sass']
})
export class UsefulArticlesComponent implements OnInit {

  constructor() { }

  // constructor(public dialog: MatDialog) { }
  // openDialog() {
  //   const dialogRef = this.dialog.open(this.DialogContentExampleDialog, {});
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  ngOnInit() {
  }

}
