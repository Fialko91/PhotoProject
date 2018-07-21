import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-useful',
  templateUrl: './useful.component.html',
  styleUrls: ['./useful.component.sass']
})
export class UsefulComponent implements OnInit {

  text: string;

  constructor(public dialogRef: MatDialogRef<UsefulComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {text: string}) { }

  ngOnInit() {
    this.text = this.data.text;
  }

}
