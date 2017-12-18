import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppError } from '../shared/models/common.models';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Injectable()
export class ErrorService {
    error: AppError;
    constructor(private router: Router) { }

    handleError(error: any | AppError) {
        this.prepareError(error);

        this.logError();

        this.router.navigateByUrl('error');
    }

    logError() {
        console.log('error', this.error);
    }

    private prepareError(error: any | AppError): void {
        if (this.isAppError(error)) {
            this.error = error;
            return;
        }
        const appError = new AppError();
        appError.status = error.status;
        let err = error.error || error.message;
        if (err.message) {
            err = err.message;
        }
        appError.description = err || err.message;
        appError.title = error.statusText;

        this.error = appError;
    }

    private isAppError(error: any): error is AppError {
        if (error instanceof AppError || error.title !== undefined) {
            return true;
        }
        return false;
    }
}
