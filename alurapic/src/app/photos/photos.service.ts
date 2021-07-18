import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photos } from './photos';

const API = 'http://localhost:3000';
@Injectable({
    providedIn: 'root',
})
export class PhotosService {
    constructor(private http: HttpClient) {}

    listFromUser(userName: string): Observable<Photos> {
        return this.http.get<Photos>(`${API}/${userName}/photos`);
    }

    listFromUserPaginated(userName: string, page: number): Observable<Photos> {
        const params = new HttpParams().append('page', page);
        return this.http.get<Photos>(`${API}/${userName}/photos`, { params });
    }

    upload(description: string, allowComments: boolean, file: File) {
        const formData = new FormData();
        formData.append('description', description);
        formData.append('allowComments', allowComments ? 'true' : 'false');
        formData.append('imageFile', file);

        return this.http.post(`${API}/photos/upload`, formData);
    }
}
