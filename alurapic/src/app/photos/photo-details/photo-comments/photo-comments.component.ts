import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PhotoComments } from './../../photo-comment';
import { PhotosService } from './../../photos.service';
@Component({
    selector: 'app-photo-comments',
    templateUrl: './photo-comments.component.html',
    styleUrls: ['./photo-comments.component.css'],
})
export class PhotoCommentsComponent implements OnInit {
    @Input() photoId!: number;
    comments$!: Observable<PhotoComments>;

    constructor(private photosService: PhotosService) {}

    ngOnInit(): void {
        this.comments$ = this.photosService.getComments(this.photoId);
    }
}
