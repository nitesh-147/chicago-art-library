import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MaterialModule} from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component'
import { HttpClientModule } from '@angular/common/http';
import { ArtItemComponent } from './art-item/art-item.component';
import {FormsModule} from '@angular/forms';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ArtComponent } from './art/art.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { FooterComponent } from './footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    ArtItemComponent,
    WelcomePageComponent,
    ArtComponent,
    FavouritesComponent,
    SearchPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
