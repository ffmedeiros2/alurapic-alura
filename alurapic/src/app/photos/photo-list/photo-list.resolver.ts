import { Injectable } from '@angular/core';
import {
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { Photos } from '../photos';
import { PhotosService } from './../photos.service';

@Injectable({
    providedIn: 'root',
})
export class PhotoListResolver implements Resolve<Observable<Photos>> {
    constructor(private photosService: PhotosService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<Photos> {
        const usearName = route.params.userName;
        return this.photosService.listFromUser(usearName);
    }
}
