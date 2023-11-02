import {Injectable} from '@angular/core';
import {ChicagoApiService} from './chicagoApi.service';

@Injectable({ providedIn: 'root' })
export class ArtData{
    artWorks:any;
    constructor(private http:ChicagoApiService){
        this.http.fetchArtWorks();
    }

    fetchArtWorks(){
        this.http.fetchArtWorks().subscribe((res) => {
          for(let i in res[1]){
            this.artWorks.push(res[1][i]);
          }
          this.artWorks.pop();
        });
       }
}