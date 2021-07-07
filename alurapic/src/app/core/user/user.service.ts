import { User } from './user';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenService } from './../token/token.service';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private userSubject = new BehaviorSubject<User | null>(null);

    constructor(private tokenService: TokenService) {
        this.tokenService.hasToken() && this.decodeAndNotify();
    }

    setToken(token: string) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser(): Observable<User | null> {
        return this.userSubject.asObservable();
    }

    private decodeAndNotify() {
        const token = this.tokenService.getToken() as string;
        const user = jwt_decode(token) as User;
        this.userSubject.next(user);
    }
}
