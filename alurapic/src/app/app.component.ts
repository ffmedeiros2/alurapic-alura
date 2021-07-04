import { PhotosService } from './photos/photos.service';
import { Photos } from './photos/photos';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    photos: Photos = [];

    constructor(private photosService: PhotosService) {}

    ngOnInit(): void {
        this.photosService
            .listFromUser('flavio')
            .subscribe((photos) => (this.photos = photos));
    }
}
