import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppMessage } from '../shared/models/common.models';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Injectable()
export class ErrorService {
    message: AppMessage;
    constructor(private router: Router) { }

    handleMessage(message: any | AppMessage) {
        this.prepareMessage(message);

        this.logError();

        this.router.navigateByUrl('message');
    }

    logError() {
        console.log('message', this.message);
    }

    private prepareMessage(message: any | AppMessage): void {
        if (this.isAppMessage(message)) {
            this.message = message;
            return;
        }
        const appMessage = new AppMessage();
        appMessage.status = message.status;
        let err = message.error || message.message;
        if (err.message) {
            err = err.message;
        }
        appMessage.description = err || err.message;
        appMessage.title = message.statusText;

        this.message = appMessage;
    }

    private isAppMessage(message: any): message is AppMessage {
        if (message instanceof AppMessage || message.title !== undefined) {
            return true;
        }
        return false;
    }
}
