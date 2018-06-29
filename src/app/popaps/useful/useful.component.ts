import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { FirebaseService } from '../../../../services/firebase.service';


@Component({
  selector: 'app-useful',
  templateUrl: './useful.component.html',
  styleUrls: ['./useful.component.sass']
})
export class UsefulComponent implements OnInit {

  title = 'app';
  text: string;
  UsefulArticuls: string;

  constructor(public dialogRef: MatDialogRef<UsefulComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {text: string}) { }

  constructor(private art: FirebaseService) {
    this.art.getArticul().subscribe(art => {
      this.UsefulArticuls = art;
    });
  }

  ngOnInit() {
    this.text = this.data.text;
  }

}
