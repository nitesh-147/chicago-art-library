import { Component, OnInit, Input } from '@angular/core';
import { ChicagoApiService } from '../Services/chicagoApi.service';
import { ArtData } from '../Services/artworkDataService.service';
import { Injectable } from '@angular/core'
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
@Injectable()
export class HomePageComponent implements OnInit {
  pageIndex: number = 0;
  pageSize: number = 10;
  @Input()
  searchText: string = '';

  artWorksList: Array<any> = [];
  loading: boolean = false;

  constructor(private http: ChicagoApiService) { }
  ngOnInit(): void {
    this.fetchArtWorks();
  }
  private fetchArtWorks() {
    this.loading = true;
    this.http.fetchArtWorks().subscribe((res) => {
      for (let i in res[1]) {
        this.artWorksList.push(res[1][i]);
      }
      this.artWorksList.pop();
      this.loading = false;
    });
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }
}
