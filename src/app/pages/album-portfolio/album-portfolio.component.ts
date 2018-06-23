import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';
import {FirebaseService} from '../../services/firebase.service';
import { MasonryOptions } from 'angular2-masonry';
import { MasonryModule } from 'angular2-masonry';


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

  // public myOptions: MasonryOptions = {
  //   transitionDuration: '0.25s'
  // };
  //
  //
  // bricks = [
  //   {title: 'Brick 1'},
  //   {title: 'Brick 2'},
  //   {title: 'Brick 3'},
  //   {title: 'Brick 4'},
  //   {title: 'Brick 5'},
  //   {title: 'Brick 6'}
  // ];

  // const galleryTop = new Swiper('.gallery-top', {
  //   spaceBetween: 10,
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  // });
  // const galleryThumbs = new Swiper('.gallery-thumbs', {
  //   spaceBetween: 10,
  //   centeredSlides: true,
  //   slidesPerView: 'auto',
  //   touchRatio: 0.2,
  //   slideToClickedSlide: true,
  // });
  //   galleryTop.controller.control = this.galleryThumbs;
  //   galleryThumbs.controller.control = this.galleryTop;



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
