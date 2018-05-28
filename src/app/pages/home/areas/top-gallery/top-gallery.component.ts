import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-gallery',
  templateUrl: './top-gallery.component.html',
  styleUrls: ['./top-gallery.component.sass']
})
export class TopGalleryComponent implements OnInit {
  ///
  config: SwiperOptions = {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          autoplay: 2000,
          speed: 1500,
          loop: true
  };

  constructor() { }

  ngOnInit() {}

}



