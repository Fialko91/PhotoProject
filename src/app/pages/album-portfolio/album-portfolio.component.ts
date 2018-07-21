import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FirebaseService} from '../../services/firebase.service';
import {Subscription} from 'rxjs/Subscription';
import { NgxMasonryOptions } from 'ngx-masonry';
import {UsefulComponent} from '../../popaps/useful/useful.component';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {AlbumPopupComponent} from '../../popaps/album-popup/album-popup.component';


interface Album {
  id: number;
  AlbumName: string;
  banner: string;
  gallery: string[];
}

@Component({
  selector: 'app-album-portfolio',
  templateUrl: './album-portfolio.component.html',
  styleUrls: ['./album-portfolio.component.sass']
})
export class AlbumPortfolioComponent implements OnInit, OnDestroy {


  gallery: string[];
  myOptions: NgxMasonryOptions  = {
    columnWidth: 101,
    fitWidth: true
  };

  private gallerySubscription: Subscription;
  constructor(public dialog: MatDialog,
              private route: ActivatedRoute,
              private firebaseService: FirebaseService) {}


  openDialog(url: string){
    this.dialog.open(AlbumPopupComponent, {
      data: {
        url: url
      }
    });
    console.log(url);
  }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gallerySubscription = this.firebaseService.getGalleryItem(id).subscribe((item: Album) => {
      this.gallery = item.gallery;
    });
  }

  ngOnDestroy(): void {
    this.gallerySubscription.unsubscribe();
  }

}
