import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmailMessage } from './email-form/email-form.models';
import { ResortCustomer } from '../resort-customers.models';
import { IMailchimpReportData } from '../../shared/models/mailchimp.models';

@Injectable()
export class ResortDetailsService {
    constructor(private http: HttpClient) { }

    getResort(resortId: string): Promise<any> {
        return new Promise<ResortCustomer>((resolve, reject) => {
            return this.http.get('resort-customer/detail/' + resortId).toPromise()
                .then(response => resolve(<ResortCustomer>response))
                .catch(error => reject(error));
        });
    }

    getMailchimpStatistics(customerEmail: string): Promise<Array <IMailchimpReportData>> {
        return new Promise<Array <IMailchimpReportData>>((resolve, reject) => {
            return this.http.get('resort-customer/reports/' + customerEmail).toPromise() // todo: change to proper endpoint
                .then(response => resolve(<Array <IMailchimpReportData>>response))
                .catch(error => reject(error));
        });
    }

    saveTemplate(action: string, mail: IEmailMessage): Promise<any> {
        switch (action) {
            case 'booked':
                return this.saveBookedTemplate(mail);
            case 'check-in':
                return this.saveCheckInTemplate(mail);
            case 'check-out':
                return this.saveCheckOutTemplate(mail);
            case 'cancellation':
                return this.saveCancellationTemplate(mail);
        }
    }

    saveBookedTemplate(mail: IEmailMessage): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            resolve();
        });
    }

    saveCheckInTemplate(mail: IEmailMessage): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            resolve();
        });
    }

    saveCheckOutTemplate(mail: IEmailMessage): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            resolve();
        });
    }

    saveCancellationTemplate(mail: IEmailMessage): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            resolve();
        });
    }

    sendTestEmail(mail: IEmailMessage): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            resolve();
        });
    }
}
