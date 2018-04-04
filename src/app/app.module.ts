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
import { Page404Component } from './pages/home/areas/page404/page404.component';
import { AppRoutingModule } from './app-routing.modules';
import { FormsModule } from '@angular/forms';


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
    Page404Component
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
