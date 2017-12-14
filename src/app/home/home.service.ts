import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppError } from '../shared/models/common.models';
import { IMailchimpReportData } from '../shared/models/mailchimp.models';


@Injectable()
export class HomeService {
    constructor(private http: HttpClient) {}

    getData() {
        return new Promise<IMailchimpReportData[]>((resolve, reject) => {
            return this.http.get('mailchimp/report').toPromise()
                .then(response => resolve(<IMailchimpReportData[]>response))
                .catch(error => reject(error));
            // resolve({});
        });
    }

    getBookings () {
        return new Promise<any>((resolve, reject) => {
            return this.http.get('bokun/bookings').toPromise()
                .then(response => resolve(response))
                .catch(error => reject(error));
        });
    }
}
