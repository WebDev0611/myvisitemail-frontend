import { Injectable } from '@angular/core';

import { User } from './auth.models';

@Injectable()
export class AuthService {
    private isAuth: boolean;
    constructor() {
        this.isAuth = true;
    }

    isAuthenticated() {
        return this.isAuth;
    }
}
