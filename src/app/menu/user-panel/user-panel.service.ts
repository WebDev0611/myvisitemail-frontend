import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user.models';

@Injectable()
export class UserPanelService {
    constructor(private http: HttpClient) {}

    getUser(): Promise<any> {
        const promise = new Promise<any>((resolve, reject) => {
            resolve(new User());
        });

        return promise;
    }
}
