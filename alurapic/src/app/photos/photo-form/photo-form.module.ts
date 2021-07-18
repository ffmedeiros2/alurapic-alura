import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PhotoFormComponent } from './photo-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VmessageModule } from './../../shared/components/vmessage/vmessage.module';

@NgModule({
    declarations: [PhotoFormComponent],
    imports: [CommonModule, ReactiveFormsModule, VmessageModule, RouterModule],
})
export class PhotoFormModule {}
