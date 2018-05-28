import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../../services/firebase.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
// export class PortfolioComponent implements OnInit {
export class PortfolioComponent  {

  title = 'app';
  portfolio: any;

  constructor(private fb: FirebaseService) {
    this.fb.getGallery().subscribe(por => {
      this.portfolio = por;
    });
  }
}
