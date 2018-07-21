import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-album-popup',
  templateUrl: './album-popup.component.html',
  styleUrls: ['./album-popup.component.sass']
})
export class AlbumPopupComponent implements OnInit {

  url: string;

  constructor(public dialogRef: MatDialogRef<AlbumPopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {url: string}) { }

  ngOnInit() {
    this.url = this.data.url;
    console.log(this.url);
  }
}
