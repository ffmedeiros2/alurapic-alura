import { Photos } from './../../photos';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-photos',
    templateUrl: './photos.component.html',
    styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnChanges {
    @Input() photos: Photos;
    rows!: Array<Photos>;

    constructor() {
        this.photos = new Array();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (!!changes.photos && this.photos) {
            this.rows = this.groupColumns(this.photos, 3);
        }
    }

    groupColumns(photos: Photos, numColumns: number): Array<Photos> {
        const newRows = new Array<Photos>();

        for (let i = 0; i < photos.length; i += numColumns) {
            newRows.push(photos.slice(i, i + numColumns));
        }

        return newRows;
    }

    hasPhotos() {
        return this.photos.length > 0;
    }
}
