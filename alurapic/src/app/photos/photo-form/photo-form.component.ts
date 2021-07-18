import { Router } from '@angular/router';
import { PhotosService } from './../photos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-photo-form',
    templateUrl: './photo-form.component.html',
    styleUrls: ['./photo-form.component.css'],
})
export class PhotoFormComponent implements OnInit {
    photoForm!: FormGroup;
    file!: File;

    constructor(
        private formBuilder: FormBuilder,
        private photosService: PhotosService,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.photoForm = this.formBuilder.group({
            file: ['', Validators.required],
            description: ['', Validators.maxLength(300)],
            allowComments: [true],
        });
    }

    upload() {
        const description = this.photoForm.get('description')?.value ?? '';
        const allowComments = this.photoForm.get('allowComments')?.value;
        this.photosService
            .upload(description, allowComments, this.file)
            .subscribe(
                () => this.router.navigate(['']),
                (err) => console.log(err),
            );
    }

    readFile(event: any) {
        const [file] = event?.files;
        this.file = file;
    }
}
