import { Component, OnInit } from '@angular/core';
import {UsefulComponent} from '../../../../popaps/useful/useful.component';
import {FirebaseService} from '../../../../services/firebase.service';
import {Articul} from '../../../../models';
import {Observable} from 'rxjs/Observable';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-useful-articles-blog',
  templateUrl: './useful-articles-blog.component.html',
  styleUrls: ['./useful-articles-blog.component.sass']
})
export class UsefulArticlesBlogComponent implements OnInit {

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
