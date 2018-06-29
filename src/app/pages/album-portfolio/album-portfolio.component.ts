import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FirebaseService} from '../../services/firebase.service';
import {Subscription} from 'rxjs/Subscription';


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
