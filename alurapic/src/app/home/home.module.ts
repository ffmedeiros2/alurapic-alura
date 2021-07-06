import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { VmessageModule } from './../shared/components/vmessage/vmessage.module';
import { SigninComponent } from './signin/signin.component';

@NgModule({
    declarations: [SigninComponent],
    imports: [CommonModule, ReactiveFormsModule, VmessageModule],
})
export class HomeModule {}
