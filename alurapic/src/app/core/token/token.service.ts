import { Injectable } from '@angular/core';

const KEY = 'authToken';

@Injectable({
    providedIn: 'root',
})
export class TokenService {
    constructor() {}

    hasToken(): boolean {
        return !!localStorage.getItem(KEY);
    }

    setToken(token: string): void {
        localStorage.setItem(KEY, token);
    }

    getToken(): string | null {
        return localStorage.getItem(KEY);
    }

    removeToken(): void {
        localStorage.removeItem(KEY);
    }
}
