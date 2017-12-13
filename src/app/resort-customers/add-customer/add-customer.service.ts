import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResortCustomer } from '../resort-customers.models';

@Injectable()
export class AddCustomersService {
    constructor(private http: HttpClient) {}

    addCustomer(customer: ResortCustomer): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            console.log(customer.getPostObject());
            this.http.post('resort-customer/', customer.getPostObject()).toPromise()
                .then(resolve)
                .catch(reject);
        });
    }

    editCustomer(customer: ResortCustomer): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            resolve(true);
        });
    }

    removeCustomer(customer: ResortCustomer): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            resolve(true);
        });
    }

    getCustomer(): Promise<ResortCustomer> {
        return new Promise<ResortCustomer>((resolve, reject) => {
           resolve();
        });
    }

    getAreas(): Promise<string[]> {
        return new Promise<string[]>((resolve, reject) => {
           resolve(this.mockAreas());
        });
    }

    private mockAreas(): string[] {
        return [
            'North',
            'South',
            'East',
            'West'
        ];
    }
}
