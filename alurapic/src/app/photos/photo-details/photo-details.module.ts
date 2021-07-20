import { PhotoModule } from './../photo/photo.module';
import { PhotoDetailsComponent } from './photo-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [PhotoDetailsComponent],
    exports: [PhotoDetailsComponent],
    imports: [CommonModule, PhotoModule],
})
export class PhotoDetailsModule {}
