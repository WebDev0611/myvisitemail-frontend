import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../../shared/models/user.models';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {
    private user: User;

    isAuth: BehaviorSubject<boolean>;
    constructor(private http: HttpClient) {
        this.isAuth = new BehaviorSubject(false);
        this.setUser(new User());
    }

    setUser(user: User) {
        this.isAuth.next(user.isAuth);
        this.user = user;
    }

    getUser(): User {
        return this.user;
    }

}
