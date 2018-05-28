import {Component, OnDestroy, OnInit} from '@angular/core';
import {FirebaseService} from '../../../../services/firebase.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

interface Album {
  id: number;
  AlbumName: string;
  banner: string;
  gallery: string[];
}
@Component({
  selector: 'app-gallery-album-portfolio',
  templateUrl: './gallery-album-portfolio.component.html',
  styleUrls: ['./gallery-album-portfolio.component.sass']
})
export class GalleryAlbumPortfolioComponent implements OnInit, OnDestroy {

  gallery: string[];
  private gallerySubscription: Subscription;
  constructor(private route: ActivatedRoute,
              private firebaseService: FirebaseService) {}

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
