import { Component, OnInit } from '@angular/core';

import { ICustomer } from '../resort-customers.models';
import { ErrorService } from '../../error/error.service';
import { AddCustomersService } from './add-customer.service';

@Component({
    selector: 'app-add-customer',
    templateUrl: './add-customer.component.html',
    styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
    areas: string[];
    customer: ICustomer;

    constructor(private componentService: AddCustomersService, private errorService: ErrorService) {
        this.areas = [];
    }

    ngOnInit() {
        this.getAreas();
    }

    getAreas(): void {
        this.componentService.getAreas()
            .then(areas => {
                this.areas = areas;
                this.areas.unshift('Select area');
            })
            .catch(error => {
                this.errorService.handleError(error);
            });
    }

    addCustomer() {
        if (this.isValid()) {
            this.componentService.addCustomer(this.customer)
                .then(result => {
                    console.log('Customer added!');
                })
                .catch(error => {
                    this.errorService.handleError(error);
                });
        }
    }

    isValid(): boolean {
        return true;
    }
}
