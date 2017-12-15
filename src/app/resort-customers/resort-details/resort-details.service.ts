import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmailMessage } from './email-form/email-form.models';
import {ResortCustomer} from '../resort-customers.models';
import { IMailchimpReportData } from '../../shared/models/mailchimp.models';
import {IResortCustomerTemplate} from "../../../../../rd-myvisitemail-backend/src/database/resort-customers/resort-customers.model";

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

    updateResort(resort: ResortCustomer): Promise<any> {
        delete resort.backgroundId;
        return new Promise<any>((resolve, reject) => {
            return this.http.put('resort-customer/' + resort._id, resort).toPromise() // todo: change to proper endpoint
                .then(response => resolve(response))
                .catch(error => reject(error));
        });
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

    sendTestEmail(mail: string[], templateData): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.http.post('mailchimp/test', {
                emails: mail,
                templateData: templateData
            }).toPromise() // todo: change to proper endpoint
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    console.error(error);
                    reject(error)
                });
        });
    }

    clearCampaigns (templateId) {
        return new Promise<any>((resolve, reject) => {
            this.http.delete('mailchimp/test/' + templateId)
                .toPromise() // todo: change to proper endpoint
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    console.error(error);
                    reject(error)
                });
        });
    }
}
