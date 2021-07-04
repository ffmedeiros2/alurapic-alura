import { PhotoComponent } from './photo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [PhotoComponent],
    imports: [CommonModule],
    exports: [PhotoComponent],
})
export class PhotoModule {}
