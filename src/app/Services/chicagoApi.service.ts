import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { map, Subject, catchError, throwError } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class ChicagoApiService {

    error = new Subject<string>();

    constructor(private http: HttpClient) { }

    // Fetch artwork from api
    fetchArtWorks() {
        const url = `https://api.artic.edu/api/v1/artworks?page=${2}&limit=${50}`;
        return this.http.get<{ [key: string]: any }>(url).pipe(map((res) => {
            const students:any = [];
            for (const key in res) {
                if (res.hasOwnProperty(key)) {
                    students.push({ ...res[key], id: key });
                }
            }
            return students;
        }), catchError((err) => {
            return throwError(err);
        }));
    }

    fetchById(id: string) {
        const url = `https://api.artic.edu/api/v1/artworks/${id}`;
        return this.http.get<{ [key: string]: any }>(url).pipe(map((res) => {
            const students = [];
            for (const key in res) {
                if (res.hasOwnProperty(key)) {
                    students.push({ ...res[key], id: key });
                }
            }
            return students;
        }), catchError((err) => {
            return throwError(err);
        }));
    }

    fetchBySerchKey(key:string){
        const url=`https://api.artic.edu/api/v1/artworks/search?q=`+key;
        return this.http.get<{ [key: string]: any }>(url).pipe(map((res) => {
            const students = [];
            for (const key in res) {
                if (res.hasOwnProperty(key)) {
                    students.push({ ...res[key], id: key });
                }
            }
            return students;
        }), catchError((err) => {
            return throwError(err);
        }));
    }

    fetchByUrl(url:string){
        return this.http.get<{ [key: string]: any }>(url).pipe(map((res) => {
            const students = [];
            for (const key in res) {
                if (res.hasOwnProperty(key)) {
                    students.push({ ...res[key], id: key });
                }
            }
            return students;
        }), catchError((err) => {
            return throwError(err);
        }));
    }
}