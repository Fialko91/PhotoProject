import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ToolbarComponent } from './pages/home/areas/toolbar/toolbar.component';
import { TopGalleryComponent } from './pages/home/areas/top-gallery/top-gallery.component';
import { AboutMeComponent } from './pages/home/areas/about-me/about-me.component';
import { PortfolioComponent } from './pages/home/areas/portfolio/portfolio.component';
import { ServicesAndPricesComponent } from './pages/home/areas/services-and-prices/services-and-prices.component';
import { UsefulArticlesComponent } from './pages/home/areas/useful-articles/useful-articles.component';
import { ContactsComponent } from './pages/home/areas/contacts/contacts.component';
import { FooterComponent } from './pages/home/areas/footer/footer.component';
import { SwiperModule } from 'angular2-useful-swiper';
import { AppRoutingModule } from './app-routing.modules';
import { Pages404Component } from './pages/pages404/pages404.component';
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatRippleModule } from '@angular/material';
import { PagePortfolioComponent } from './pages/page-portfolio/page-portfolio.component';
import { FormsModule } from '@angular/forms';
import { ToolbarPagePortfolioComponent } from './pages/page-portfolio/areas/toolbar-page-portfolio/toolbar-page-portfolio.component';
import { TopGalleryPagePortfolioComponent } from './pages/page-portfolio/areas/top-gallery-page-portfolio/top-gallery-page-portfolio.component';
import { PortfolioPagePortfolioComponent } from './pages/page-portfolio/areas/portfolio-page-portfolio/portfolio-page-portfolio.component';
import { ArticlesPagePortfolioComponent } from './pages/page-portfolio/areas/articles-page-portfolio/articles-page-portfolio.component';
import { FooterPagePortfolioComponent } from './pages/page-portfolio/areas/footer-page-portfolio/footer-page-portfolio.component';
import { PageBlogComponent } from './pages/page-blog/page-blog.component';
import { ToolbarBlogComponent } from './pages/page-blog/areas/toolbar-blog/toolbar-blog.component';
import { TopGalleryBlogComponent } from './pages/page-blog/areas/top-gallery-blog/top-gallery-blog.component';
import { UsefulArticlesBlogComponent } from './pages/page-blog/areas/useful-articles-blog/useful-articles-blog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { FirebaseService } from './services/firebase.service';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AlbumPortfolioComponent } from './pages/album-portfolio/album-portfolio.component';
import { ToolbarAlbumPortfolioComponent } from './pages/album-portfolio/areas/toolbar-album-portfolio/toolbar-album-portfolio.component';
import { GalleryAlbumPortfolioComponent } from './pages/album-portfolio/areas/gallery-album-portfolio/gallery-album-portfolio.component';
import { FooterAlbumPortfolioComponent } from './pages/album-portfolio/areas/footer-album-portfolio/footer-album-portfolio.component';
import { PageWeddingComponent } from './pages/page-wedding/page-wedding.component';
import { ToolbarWeddingComponent } from './pages/page-wedding/areas/toolbar-wedding/toolbar-wedding.component';
import { BannerWeddingComponent } from './pages/page-wedding/areas/banner-wedding/banner-wedding.component';
import { ContentWeddingComponent } from './pages/page-wedding/areas/content-wedding/content-wedding.component';
import { InfirmationWeddingComponent } from './pages/page-wedding/areas/infirmation-wedding/infirmation-wedding.component';
import { FooterWeddingComponent } from './pages/page-wedding/areas/footer-wedding/footer-wedding.component';
import { HeroToolbarComponent } from './pages/hero-toolbar/hero-toolbar.component';
import { HeroFooterComponent } from './pages/hero-footer/hero-footer.component';
import { PageLoveStoryComponent } from './pages/page-love-story/page-love-story.component';
import { BannerLoveStoryComponent } from './pages/page-love-story/areas/banner-love-story/banner-love-story.component';
import { ContentLoveStoryComponent } from './pages/page-love-story/areas/content-love-story/content-love-story.component';
import { PageFamilyComponent } from './pages/page-family/page-family.component';
import { BannerFamilyComponent } from './pages/page-family/areas/banner-family/banner-family.component';
import { ContentFamilyComponent } from './pages/page-family/areas/content-family/content-family.component';
import { PagePregnancyComponent } from './pages/page-pregnancy/page-pregnancy.component';
import { BannerPregnancyComponent } from './pages/page-pregnancy/areas/banner-pregnancy/banner-pregnancy.component';
import { ContentPregnancyComponent } from './pages/page-pregnancy/areas/content-pregnancy/content-pregnancy.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    TopGalleryComponent,
    AboutMeComponent,
    PortfolioComponent,
    ServicesAndPricesComponent,
    UsefulArticlesComponent,
    ContactsComponent,
    FooterComponent,
    Pages404Component,
    PagePortfolioComponent,
    ToolbarPagePortfolioComponent,
    TopGalleryPagePortfolioComponent,
    PortfolioPagePortfolioComponent,
    ArticlesPagePortfolioComponent,
    FooterPagePortfolioComponent,
    PageBlogComponent,
    ToolbarBlogComponent,
    TopGalleryBlogComponent,
    UsefulArticlesBlogComponent,
    AlbumPortfolioComponent,
    ToolbarAlbumPortfolioComponent,
    GalleryAlbumPortfolioComponent,
    FooterAlbumPortfolioComponent,
    PageWeddingComponent,
    ToolbarWeddingComponent,
    BannerWeddingComponent,
    ContentWeddingComponent,
    InfirmationWeddingComponent,
    FooterWeddingComponent,
    HeroToolbarComponent,
    HeroFooterComponent,
    PageLoveStoryComponent,
    BannerLoveStoryComponent,
    ContentLoveStoryComponent,
    PageFamilyComponent,
    BannerFamilyComponent,
    ContentFamilyComponent,
    PagePregnancyComponent,
    BannerPregnancyComponent,
    ContentPregnancyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SwiperModule,
    Ng2PageScrollModule,
    AppRoutingModule,
    MatButtonModule,
    MatRippleModule,
    MatDialogModule,
    MatCheckboxModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule
  ],
  providers: [
    FirebaseService,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
