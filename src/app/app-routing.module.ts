import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ArtComponent } from './art/art.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'artworks', component: HomePageComponent },
  { path: 'artworks/art/:id', component: ArtComponent },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'searchResult/:key', component: SearchPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
