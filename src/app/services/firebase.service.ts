import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class FirebaseService {

  constructor(private db: AngularFireDatabase) { }

  getGallery(): Observable<any> {
    return this.db.object('portfolio/').valueChanges();
  }
  getArticul(): Observable<any> {
    return this.db.object('useful/').valueChanges();
  }

  getGalleryItem(id: number): Observable<any> {
    return this.db.object(`portfolio/${id}`).valueChanges();
  }
}
