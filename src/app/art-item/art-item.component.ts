import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-art-item',
  templateUrl: './art-item.component.html',
  styleUrls: ['./art-item.component.css']
})
export class ArtItemComponent implements OnInit {
  @Input() searchText:string='';
  @Input() art_item: any = [];
  imageUrl: string = '';
  alternateImageUrl=`https://source.unsplash.com/random/300x200?sig=${Math.random()}`;

  ngOnInit(): void {
    if (this.art_item.image_id) {
      this.imageUrl = `https://www.artic.edu/iiif/2/${this.art_item.image_id}/full/843,/0/default.jpg`;
    }
    else {
      this.imageUrl=`https://source.unsplash.com/random/300x200?sig=${Math.random()}`;
    }
  }
}
