import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICustomer, Customer, IDetailCustomer } from './resort-customers.models';

@Injectable()
export class CustomersService {
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

    getDetailCustomers(): Promise<IDetailCustomer[]> {
        return new Promise<IDetailCustomer[]>((resolve, reject) => {
           resolve(this.mockCustomers());
        });
    }

    getCustomer(): Promise<ICustomer> {
        return new Promise<ICustomer>((resolve, reject) => {
           resolve(new Customer());
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
        ]
    }

    private mockCustomers(): IDetailCustomer[] {
        const customers: IDetailCustomer[] = [
            {
                name: 'Airi Satou',
                position: 'Accountant',
                office: 'Tokyo',
                age: 33,
                startDate: '2008/11/28',
                invoice: '$162,700',
                resortId: '1'
            },
            {
                name: 'Angelica Ramos',
                position: 'Chief Executive Officer (CEO)',
                office: 'London',
                age: 47,
                startDate: '2009/10/09',
                invoice: '$1,200,000',
                resortId: '1'
            },
            {
                name: 'Ashton Cox',
                position: 'Junior Technical Author',
                office: 'San Francisco',
                age: 66,
                startDate: '2009/01/12',
                invoice: '$86,000',
                resortId: '1'
            },
            {
                name: 'Bradley Greer',
                position: 'Software Engineer',
                office: 'London',
                age: 41,
                startDate: '2012/10/13',
                invoice: '$132,000',
                resortId: '1'
            },
            {
                name: 'Brenden Wagner',
                position: 'Software Engineer',
                office: 'San Francisco',
                age: 28,
                startDate: '2011/06/07',
                invoice: '$206,850',
                resortId: '1'
            },
            {
                name: 'Brielle Williamson',
                position: 'Integration Specialist',
                office: 'New York',
                age: 61,
                startDate: '2012/12/02',
                invoice: '$372,000',
                resortId: '1'
            },
            {
                name: 'Bruno Nash',
                position: 'Software Engineer',
                office: 'London',
                age: 38,
                startDate: '2011/05/03',
                invoice: '$163,500',
                resortId: '1'
            },
            {
                name: 'Caesar Vance',
                position: 'Pre-Sales Support',
                office: 'New York',
                age: 21,
                startDate: '2011/12/12',
                invoice: '$106,450',
                resortId: '1'
            },
            {
                name: 'Cara Stevens',
                position: 'Sales Assistant',
                office: 'New York',
                age: 46,
                startDate: '2011/12/06',
                invoice: '$145,600',
                resortId: '1'
            },
            {
                name: 'Cedric Kelly',
                position: 'Senior Javascript Developer',
                office: 'Edinburgh',
                age: 22,
                startDate: '2012/03/29',
                invoice: '$433,060',
                resortId: '1'
            }
        ];

        return customers;
    }
}
