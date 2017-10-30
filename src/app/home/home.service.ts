import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppError } from '../shared/models/common.models';

@Injectable()
export class HomeService {
    constructor(private http: HttpClient) {}

    getData() {
        const promise = new Promise<any>((resolve, reject) => {
            const error = new AppError();
            error.status = 404;
            error.title = 'Page not Found';
            error.describtion = 'Oops, Something went missing...';

            reject(error);
        });

        return promise;
    }
}
