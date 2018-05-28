import { Component } from '@angular/core';
import {FirebaseService} from './services/firebase.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  // title = 'app';
  // portfolio: any;
  //
  // constructor(private fb: FirebaseService) {
  //   this.fb.getGallery().subscribe(por => {
  //     this.portfolio = por;
  //     console.log(por);
  //   });
  // }
}
