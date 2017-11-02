import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../shared/models/user.models';

@Injectable()
export class LoginService {
    constructor(private http: HttpClient) {

    }

    login(credentials: User) {
        const promise = new Promise<boolean | User>((resolve, reject) => {
            if (credentials.userName === 'admin' && credentials.password === 'admin') {
                credentials.isAuth = true;
                credentials.isAdmin = true;
                credentials.firstName = 'Sunna';
                return resolve(credentials);
            }
            return resolve(false);
        });

        return promise;

    }
}
