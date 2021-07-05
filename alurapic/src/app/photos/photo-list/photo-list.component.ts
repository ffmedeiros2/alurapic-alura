import { PhotosService } from './../photos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photos } from '../photos';

@Component({
    selector: 'app-photo-list',
    templateUrl: './photo-list.component.html',
    styleUrls: ['./photo-list.component.css'],
})
export class PhotoListComponent implements OnInit {
    photos: Photos;
    filterString: string = '';
    hasMore: boolean;
    currentPage: number;
    userName!: string;

    constructor(
        private activatedRoute: ActivatedRoute,
        private photosService: PhotosService,
    ) {
        this.photos = new Array();
        this.hasMore = true;
        this.currentPage = 1;
    }

    ngOnInit(): void {
        this.userName = this.activatedRoute.snapshot.params.userName;
        this.photos = this.activatedRoute.snapshot.data.photos;
    }

    load() {
        this.photosService
            .listFromUserPaginated(this.userName, ++this.currentPage)
            .subscribe((photos) => {
                this.filterString = '';
                this.photos = this.photos.concat(...photos);
                if (!photos.length) {
                    this.hasMore = false;
                }
            });
    }
}
