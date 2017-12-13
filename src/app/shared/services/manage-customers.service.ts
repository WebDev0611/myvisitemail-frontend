import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResortCustomer } from '../../resort-customers/resort-customers.models';


@Injectable()
export class ManageCustomersService {
    constructor(private http: HttpClient) {}

    getResortCustomers(): Promise<ResortCustomer[]> {
        return new Promise<ResortCustomer[]>((resolve, reject) => {
            return this.http.get('resort-customer/all').toPromise()
                .then(response => resolve(<ResortCustomer[]>response))
                .catch(error => reject(error));
        });
    }

    getDeletedCustomer (): Promise<any[]> {
        return new Promise<ResortCustomer[]>((resolve, reject) => {
            return this.http.get('resort-customer/removed').toPromise()
                .then(response => resolve(<any[]>response))
                .catch(error => reject(error));
        });
    }

}
