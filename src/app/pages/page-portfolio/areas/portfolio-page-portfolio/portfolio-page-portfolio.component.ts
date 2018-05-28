import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../../../services/firebase.service';

@Component({
  selector: 'app-portfolio-page-portfolio',
  templateUrl: './portfolio-page-portfolio.component.html',
  styleUrls: ['./portfolio-page-portfolio.component.sass']
})
export class PortfolioPagePortfolioComponent implements OnInit {

  title = 'app';
  portfolio: any;

  constructor(private fb: FirebaseService) {
    this.fb.getGallery().subscribe(por => {
      this.portfolio = por;
      console.log(por);
    });
  }

  ngOnInit() {
  }

}
