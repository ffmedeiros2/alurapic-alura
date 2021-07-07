import { Router } from '@angular/router';
import { UserService } from './../user/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    user$: Observable<User | null>;

    constructor(private userService: UserService, private router: Router) {
        this.user$ = userService.getUser();
    }

    ngOnInit(): void {}

    logout() {
        this.userService.logout();
        this.router.navigate(['']);
    }
}
