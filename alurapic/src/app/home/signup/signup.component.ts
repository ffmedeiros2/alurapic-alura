import { Router } from '@angular/router';
import { SignupService } from './signup.service';
import { NewUser } from './new-user';
import { UserNotTakenService } from './user-not-taken.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
    signupForm!: FormGroup;
    @ViewChild('emailInput') emailInput!: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private userNotTakenService: UserNotTakenService,
        private signupService: SignupService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService,
    ) {}

    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            fullName: [
                '',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(40),
                ],
            ],
            userName: [
                '',
                [
                    Validators.required,
                    lowerCaseValidator,
                    Validators.minLength(2),
                    Validators.maxLength(30),
                ],
                this.userNotTakenService.checkUserNameTaken(),
            ],
            password: [
                '',
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(14),
                ],
            ],
        });
    }

    ngAfterViewInit() {
        this.platformDetectorService.isPlatformBrowser() &&
            this.emailInput.nativeElement.focus();
    }

    signUp() {
        const newUser = this.signupForm.getRawValue() as NewUser;
        this.signupService.signUp(newUser).subscribe(
            () => this.router.navigate(['']),
            (error) => console.error(error),
        );
    }
}
