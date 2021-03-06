import { PlatformDetectorService } from './../../core/platform-detector/platform-detector.service';
import { AuthService } from '../../core/auth/auth.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
    loginForm!: FormGroup;
    @ViewChild('userNameInput') userNameInput!: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService,
    ) {}

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    ngAfterViewInit() {
        this.platformDetectorService.isPlatformBrowser() &&
            this.userNameInput.nativeElement.focus();
    }

    login() {
        const userName = this.loginForm.get('userName')?.value ?? '';
        const password = this.loginForm.get('password')?.value ?? '';

        this.authService.authenticate(userName, password).subscribe(
            () => {
                this.router.navigate(['user', userName]);
            },
            (error) => {
                console.error(error);
                this.loginForm.reset();
                this.platformDetectorService.isPlatformBrowser() &&
                    this.userNameInput.nativeElement.focus();
                alert('Invalid username or password');
            },
        );
    }
}
