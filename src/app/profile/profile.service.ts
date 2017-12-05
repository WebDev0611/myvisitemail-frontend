import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppError } from '../shared/models/common.models';


@Injectable()
export class ProfileService {
    constructor(private http: HttpClient) { }

    getData() {
        return new Promise<any>((resolve, reject) => {
            resolve({});
        });
    }
}
