import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PhotosService } from './../photos.service';
import { Photo } from '../photos';

@Component({
    selector: 'app-photo-details',
    templateUrl: './photo-details.component.html',
    styleUrls: ['./photo-details.component.css'],
})
export class PhotoDetailsComponent implements OnInit {
    photo$!: Observable<Photo>;

    constructor(
        private route: ActivatedRoute,
        private photosService: PhotosService,
    ) {}

    ngOnInit(): void {
        const id = this.route.snapshot.params.id;
        this.photo$ = this.photosService.findById(id);
    }
}
