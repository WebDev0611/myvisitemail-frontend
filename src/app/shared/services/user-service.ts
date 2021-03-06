import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { User } from '../models/user.models';

@Injectable()
export class UserService {
    isLocked: boolean;
    isAuth: BehaviorSubject<boolean>;

    private user: User;
    private lockedFromUrl: string;

    constructor(private http: HttpClient) {
        this.isLocked = false;
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

            user.avatarId = this.getFromLocalStorage('avatar');
        }

        if (!user.avatarId) {
            // in case of no avatar we are using default one
            user.avatarId = 'assets/img/default_avatar.jpg';
        }

        delete user.password;
        this.user = user;
        this.deleteCookie('user');
        this.saveToLocalStorage('avatar', this.user.avatarId);

        const forCookie = Object.assign({}, this.user);
        delete forCookie.avatarId;

        this.setCookie('user', forCookie, 1);
        this.isAuth.next(user.isAuth);
    }

    getUser(): User {
        if (!this.user.avatarId || this.user.avatarId === 'undefined') {
            this.user.avatarId = this.getFromLocalStorage('avatar');
        }

        return this.user;
    }

    lockUser(lockedFromUrl: string) {
        this.lockedFromUrl = lockedFromUrl;
        this.user.password = '';
        this.user.isAuth = false;

        this.isLocked = true;
        this.isAuth.next(false);
    }

    unlockUser(user: User): string {
        this.user.isAuth = true;

        this.isLocked = false;
        this.isAuth.next(true);

        return this.lockedFromUrl;
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
        if (value && value !== 'undefined') {
            if (typeof value === 'string') {
                localStorage.setItem(key, value);
            } else {
                localStorage.setItem(key, JSON.stringify(value));
            }
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
