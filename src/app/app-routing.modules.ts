import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Pages404Component } from './pages/pages404/pages404.component';
import { PagePortfolioComponent } from './pages/page-portfolio/page-portfolio.component';
import { PageBlogComponent } from './pages/page-blog/page-blog.component';
import { AlbumPortfolioComponent } from './pages/album-portfolio/album-portfolio.component';
import { PageWeddingComponent } from './pages/page-wedding/page-wedding.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'PageWedding', component: PageWeddingComponent },
  { path: 'AlbumPortfolio/:id', component: AlbumPortfolioComponent },
  { path: 'PageBlog', component: PageBlogComponent },
  { path: 'page-portfolio', component: PagePortfolioComponent },
  { path: '404', component: Pages404Component },
  { path: '**', redirectTo: '404', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
