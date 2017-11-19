import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppError } from '../shared/models/common.models';
import {User} from "../shared/models/user.models";

@Injectable()
export class HomeService {
    constructor(private http: HttpClient) {}

    getData() {
        const promise = new Promise<any>((resolve, reject) => {
            return this.http.get('mailchimp/report').toPromise()
                .then(response => resolve(<Array <Object>>response))
                .catch(error => reject(error));
            // resolve({});
    });

        return promise;
    }
}
