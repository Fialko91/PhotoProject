import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-useful-articles',
  templateUrl: './useful-articles.component.html',
  styleUrls: ['./useful-articles.component.sass']
})
export class UsefulArticlesComponent implements OnInit {
  // private DialogContentExampleDialog: {};

  constructor() { }
  // constructor(public dialog: MatDialog) { }
  // openDialog() {
  //   const dialogRef = this.dialog.open(this.DialogContentExampleDialog, {
  //     // height: '350px',
  //     // width: '500px'
  //   });
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }


  ngOnInit() {
  }

}
