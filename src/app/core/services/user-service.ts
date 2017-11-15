import { HttpClient } from '@angular/common/http';
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
            const fromCookie = this.getCookie('user');

            try {
                user = fromCookie ? <User>JSON.parse(fromCookie) : new User();
            } catch (error) {
                user = new User();
            }

            user.avatar = this.getFromLocalStorage('avatar');
        }

        this.isAuth.next(user.isAuth);
        this.user = user;
        this.deleteCookie('user');
        this.saveToLocalStorage('avatar', this.user.password);
        delete this.user.password;

        const forCookie = Object.assign({}, this.user);
        delete forCookie.avatar;

        this.setCookie('user', forCookie, 1);
    }

    getUser(): User {
        return this.user;
    }

    private setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        const expires = 'expires=' + d.toUTCString();
        const cookie = cname + '=' + JSON.stringify(cvalue) + ';' + expires + ';path=/';
        document.cookie = cookie;
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

    private deleteCookie(cname) {
        this.setCookie(cname, '', 0);
    }

    private saveToLocalStorage(key, value) {
        if (typeof value === 'string') {
            localStorage.setItem(key, value);
        } else {
            localStorage.setItem(key, JSON.stringify(value));
        }


    }
    private getFromLocalStorage(key) {
        const itemStr = localStorage.getItem(key);
        if (itemStr) {
            try {
                return JSON.parse(itemStr);
            } catch (error) {
                return itemStr;
            }
        }
    }
    private deleteFromLocalStorage(key) {
        localStorage.removeItem(key);
    }

}
