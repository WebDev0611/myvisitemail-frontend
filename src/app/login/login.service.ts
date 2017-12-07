import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../shared/models/user.models';

@Injectable()
export class LoginService {
    constructor(private http: HttpClient) {

    }

    login(credentials: User): Promise<User> {
        const promise = new Promise<User>((resolve, reject) => {
            this.http
                .post('user/login', {
                    eMail: credentials.eMail,
                    password: credentials.password
                })
                .toPromise()
                .then(response => {
                    resolve(<User>response);
                })
                .catch(error => {
                    reject(error);
                });
        });

        return promise;
    }
}
