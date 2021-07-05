import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from './../../shared/components/card/card.module';
import { PhotoModule } from './../photo/photo.module';
import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoListComponent } from './photo-list.component';

@NgModule({
    declarations: [
        PhotoListComponent,
        LoadButtonComponent,
        PhotosComponent,
        FilterByDescriptionPipe,
    ],
    imports: [CommonModule, PhotoModule, CardModule],
})
export class PhotoListModule {}
