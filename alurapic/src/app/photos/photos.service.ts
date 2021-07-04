import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photos } from './photos';

@Injectable({
    providedIn: 'root',
})
export class PhotosService {
    constructor(private http: HttpClient) {}

    listFromUser(userName: string): Observable<Photos> {
        return this.http.get<Photos>(
            `http://localhost:3000/${userName}/photos`,
        );
    }
    listFromUserPaginated(userName: string, page: number): Observable<Photos> {
        const params = new HttpParams().append('page', page);
        return this.http.get<Photos>(
            `http://localhost:3000/${userName}/photos`,
            { params },
        );
    }
}
