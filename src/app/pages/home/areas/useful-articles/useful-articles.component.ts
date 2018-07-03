import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {UsefulComponent} from '../../../../popaps/useful/useful.component';
import {FirebaseService} from '../../../../services/firebase.service';
import {Articul} from '../../../../models';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-useful-articles',
  templateUrl: './useful-articles.component.html',
  styleUrls: ['./useful-articles.component.sass']
})
export class UsefulArticlesComponent implements OnInit {
  articles: Observable<Articul[]>;
  constructor(public dialog: MatDialog, private firebaseService: FirebaseService) { }

  openDialog(text: string) {
    this.dialog.open(UsefulComponent, {
      data: {
        text: text
      }
    });
  }

  ngOnInit() {
    this.articles = this.firebaseService.getArticles();
  }

}
