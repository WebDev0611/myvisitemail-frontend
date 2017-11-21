import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppError } from '../shared/models/common.models';
import { IEmailMessage } from './email-form/email-form.models';

@Injectable()
export class ResortSettingsService {
    constructor(private http: HttpClient) { }

    getResort(resortId: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            resolve();
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
