import { Component, OnInit } from '@angular/core';
import { Photos } from '../photos';
import { PhotosService } from '../photos.service';

@Component({
    selector: 'app-photo-list',
    templateUrl: './photo-list.component.html',
    styleUrls: ['./photo-list.component.css'],
})
export class PhotoListComponent implements OnInit {
    photos: Photos = [];

    constructor(private photosService: PhotosService) {}

    ngOnInit(): void {
        this.photosService
            .listFromUser('flavio')
            .subscribe((photos) => (this.photos = photos));
    }
}
