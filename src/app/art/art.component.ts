import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChicagoApiService } from '../Services/chicagoApi.service';
import { Art } from '../Interfaces/Art';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {
  artWork!: Art;
  imageUrl: string = '';

  constructor(private route: ActivatedRoute, private http: ChicagoApiService) { }
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id') || '';
    this.fetchArt(id);
  }

  fetchArt(id: string) {
    this.http.fetchById(id).subscribe((res) => {
      this.artWork = res[0];
      this.imageUrl = `https://www.artic.edu/iiif/2/${this.artWork.image_id}/full/843,/0/default.jpg`;
      const productDescription: HTMLElement | null = document.getElementById('prodDescription');
      if (productDescription) {
        productDescription.innerHTML += res[0].description || 'No description available for this product';
      }
    });
  }

  OnAddToFavourite() {
    const table = localStorage.getItem('favourites');
    const existingData = table ? JSON.parse(table) : [];
    existingData.push(this.artWork);
    localStorage.setItem('favourites', JSON.stringify(existingData));
  }
}

