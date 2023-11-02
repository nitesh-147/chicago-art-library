import { Component } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent {
  artWorksList: any;
  constructor() {
    const table = localStorage.getItem('favourites');
    this.artWorksList = table ? JSON.parse(table) : [];
    console.log(this.artWorksList);
  }
}
