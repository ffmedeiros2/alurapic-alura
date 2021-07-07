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

    constructor(userService: UserService) {
        this.user$ = userService.getUser();
    }

    ngOnInit(): void {}
}
