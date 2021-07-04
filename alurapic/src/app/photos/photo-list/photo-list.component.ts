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

    constructor(private activatedRoute: ActivatedRoute) {
        this.photos = new Array();
        this.debounce = new Subject<string>();
    }

    ngOnInit(): void {
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
}
