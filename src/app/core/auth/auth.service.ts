import { Injectable } from '@angular/core';

import { User } from './auth.models';

@Injectable()
export class AuthService {
    private isAuth: boolean;
    constructor() {
        this.isAuth = false;
    }

    isAuthenticated(): boolean {
        return this.isAuth;
    }
}
