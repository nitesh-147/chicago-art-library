import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChicagoApiService } from '../Services/chicagoApi.service';
import { ActivatedRoute } from '@angular/router';
import { Art } from '../Interfaces/Art';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit, OnChanges {
  artwoks: any[] = [];
  constructor(private http: ChicagoApiService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData() {
    let key = this.route.snapshot.paramMap.get('key');
    if (!key) key = '';
    this.http.fetchBySerchKey(key).subscribe((res) => {
      for(let key in res[2]){
        this.http.fetchByUrl(res[2][key].api_link).subscribe((data)=>{
          this.artwoks.push(data[0]);
        });
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.fetchData();
  }

}
