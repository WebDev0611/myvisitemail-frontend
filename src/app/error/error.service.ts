import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppError } from '../shared/models/common.models';

@Injectable()
export class ErrorService {
    error: AppError;
    constructor(private http: HttpClient, private router: Router) { }

    showError(error: AppError) {
        this.error = error;
        this.router.navigateByUrl('error');
    }

    search() {

    }
}
