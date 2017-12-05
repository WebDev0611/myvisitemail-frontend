import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResortCustomer } from '../resort-customers.models';


@Injectable()
export class ManageCustomersService {
    constructor(private http: HttpClient) {}

    getResortCustomers(): Promise<IResortCustomer[]> {
        return new Promise<IResortCustomer[]>((resolve, reject) => {
            return this.http.get('resort-customer/all').toPromise()
                .then(response => resolve(<IResortCustomer[]>response))
                .catch(error => reject(error));
        });
    }




}
