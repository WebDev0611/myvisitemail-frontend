import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomersService {
    constructor(private http: HttpClient) {}
}
