import { SignupService } from './signup/signup.service';
import { HomeRoutingModule } from './home.routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { VmessageModule } from './../shared/components/vmessage/vmessage.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [SigninComponent, SignupComponent, HomeComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VmessageModule,
        RouterModule,
        HomeRoutingModule,
    ],
    providers: [SignupService],
})
export class HomeModule {}
