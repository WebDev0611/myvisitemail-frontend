import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProfileService {
    constructor(private http: HttpClient) { }

    getData() {
        return new Promise<any>((resolve, reject) => {
            resolve({});
        });
    }
}
