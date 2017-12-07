import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppError } from '../shared/models/common.models';
import { IMailchimpReportData } from '../shared/models/mailchimp.models';


@Injectable()
export class HomeService {
    constructor(private http: HttpClient) {}

    getData() {
        const promise = new Promise<IMailchimpReportData[]>((resolve, reject) => {
            return this.http.get('mailchimp/report').toPromise()
                .then(response => resolve(<IMailchimpReportData[]>response))
                .catch(error => reject(error));
            // resolve({});
    });

        return promise;
    }
}
