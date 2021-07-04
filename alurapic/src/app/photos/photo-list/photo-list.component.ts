import { PhotosService } from './../photos.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Photos } from '../photos';

@Component({
    selector: 'app-photo-list',
    templateUrl: './photo-list.component.html',
    styleUrls: ['./photo-list.component.css'],
})
export class PhotoListComponent implements OnInit, OnDestroy {
    photos: Photos;
    filterString: string = '';
    debounce: Subject<string>;
    hasMore: boolean;
    currentPage: number;
    userName!: string;

    constructor(
        private activatedRoute: ActivatedRoute,
        private photosService: PhotosService,
    ) {
        this.photos = new Array();
        this.debounce = new Subject<string>();
        this.hasMore = true;
        this.currentPage = 1;
    }

    ngOnInit(): void {
        this.userName = this.activatedRoute.snapshot.params.userName;
        this.photos = this.activatedRoute.snapshot.data.photos;
    }

    ngOnDestroy(): void {
        this.debounce.unsubscribe();
    }

    filter(search: EventTarget | null) {
        this.debounce.next((<HTMLInputElement>search).value);
        this.debounce
            .pipe(debounceTime(300))
            .subscribe((filter) => (this.filterString = filter));
    }

    load() {
        this.photosService
            .listFromUserPaginated(this.userName, ++this.currentPage)
            .subscribe((photos) => {
                this.photos = this.photos.concat(...photos);
                if (!photos.length) {
                    this.hasMore = false;
                }
            });
    }
}
