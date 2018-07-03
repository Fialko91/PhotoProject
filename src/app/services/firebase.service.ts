import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {Articul} from '../models';


@Injectable()
export class FirebaseService {

  constructor(private db: AngularFireDatabase) { }

  getGallery(): Observable<any> {
    return this.db.object('portfolio/').valueChanges();
  }
  getGalleryItem(id: number): Observable<any> {
    return this.db.object(`portfolio/${id}`).valueChanges();
  }

  getArticles(): Observable<any> {
    return this.db.object('articuls/').valueChanges();
  }
}
