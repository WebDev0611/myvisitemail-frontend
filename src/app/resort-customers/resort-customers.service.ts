import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICustomer, IResortCustomer } from './resort-customers.models';

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

    getResortCustomers(): Promise<IResortCustomer[]> {
        return new Promise<IResortCustomer[]>((resolve, reject) => {
           resolve(this.mockCustomers());
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
        ]
    }

    private mockCustomers(): IResortCustomer[] {
        const customers: IResortCustomer[] = [
            {
                id: '1',
                name: 'Gistihús Gumma',
                position: 'Guesthouse',
                email: 'gummi69@simnet.is',
                rooms: 4,
                lastSent: '2017/01/12',
                invoice: '$860'
            },
            {
                id: '2',
                name: 'Hótel Harpa',
                position: 'Hotel',
                email: 'sigrune@harpa.is',
                rooms: 342,
                lastSent: '2017/01/25',
                invoice: '$112,000'
            },
            {
                id: '3',
                name: 'Hótel Hellnir',
                position: 'Hotel',
                email: 'hellnir@hellnir.is',
                rooms: 61,
                lastSent: '2017/04/25',
                invoice: '$320'
            },
            {
                id: '4',
                name: 'Hótel Rangá',
                position: 'Guesthouse',
                email: 'gydasol@ranga.is',
                rooms: 63,
                lastSent: '2017/07/25',
                invoice: '$1700'
            },
            {
                id: '5',
                name: 'Hótel Venus',
                position: 'Guesthouse',
                email: 'elli@hotmale.com',
                rooms: 12,
                lastSent: '2017/03/29',
                invoice: '$4330'
            },
            {
                id: '6',
                name: 'Lónkot Bucolic Resort',
                position: 'Guesthouse',
                email: 'lonkot@lonkot.is',
                rooms: 7,
                lastSent: '2007/11/28',
                invoice: '$162'
            },
            {
                id: '7',
                name: 'Snorralaug',
                position: 'Hotel',
                email: 'snorri@betel.com',
                rooms: 12,
                lastSent: '2017/12/22',
                invoice: '$8690'
            },
            {
                id: '8',
                name: 'Snæfell Hotel',
                position: 'Hotel',
                email: 'snaefell@snaefell.is',
                rooms: 51,
                lastSent: '2017/11/13',
                invoice: '$183,000'
            }
        ];

        return customers;
    }
}
