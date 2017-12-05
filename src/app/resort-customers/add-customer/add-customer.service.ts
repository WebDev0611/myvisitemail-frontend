import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICustomer } from '../resort-customers.models';

@Injectable()
export class AddCustomersService {
    constructor(private http: HttpClient) {}

    addCustomer(customer: ICustomer): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            resolve(true);
        });
    }

    editCustomer(customer: ICustomer): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            resolve(true);
        });
    }

    removeCustomer(customer: ICustomer): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            resolve(true);
        });
    }

    getCustomer(): Promise<ICustomer> {
        return new Promise<ICustomer>((resolve, reject) => {
           resolve({ id: '1'});
        });
    }

    getAreas(): Promise<string[]> {
        return new Promise<string[]>((resolve, reject) => {
           resolve(this.mockAreas());
        });
    }

    private mockAreas(): string[] {
        return [
            'Reykjavík Area',
            'Reykjanes',
            'East',
            'North',
            'South',
            'West',
            'Westfjords'
        ];
    }
}
