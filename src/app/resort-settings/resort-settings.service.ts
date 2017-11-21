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

    send(action: string, mail: IEmailMessage): Promise<any> {
        switch (action) {
            case 'booked':
                return this.sendBooked(mail);
            case 'check-in':
                return this.sendCheckIn(mail);
            case 'check-out':
                return this.sendCheckOut(mail);
            case 'cancellation':
                return this.sendCancellation(mail);
        }
    }

    sendBooked(mail: IEmailMessage): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            resolve();
        });
    }

    sendCheckIn(mail: IEmailMessage): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            resolve();
        });
    }

    sendCheckOut(mail: IEmailMessage): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            resolve();
        });
    }

    sendCancellation(mail: IEmailMessage): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            resolve();
        });
    }
}
