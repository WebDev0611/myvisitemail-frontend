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
        this.setUser();
    }

    setUser(user?: User) {
        if (!user) {
            debugger
            const fromCookie = this.getCookie('user');

            user = fromCookie ? <User>JSON.parse(fromCookie) : new User();
        }
        this.isAuth.next(user.isAuth);
        this.user = user;
        this.setCookie('user', this.user, 1);
    }

    getUser(): User {
        return this.user;
    }

    private setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        const expires = 'expires=' + d.toUTCString();
        document.cookie = cname + '=' + JSON.stringify(cvalue) + ';' + expires + ';path=/';
    }

    private getCookie(cname) {
        const name = cname + '=';
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    }

}
