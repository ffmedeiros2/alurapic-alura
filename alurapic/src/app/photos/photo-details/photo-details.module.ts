import { RouterModule } from '@angular/router';
import { PhotoModule } from './../photo/photo.module';
import { PhotoDetailsComponent } from './photo-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';

@NgModule({
    declarations: [PhotoDetailsComponent, PhotoCommentsComponent],
    exports: [PhotoDetailsComponent],
    imports: [CommonModule, PhotoModule, RouterModule],
})
export class PhotoDetailsModule {}
