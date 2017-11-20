import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';
import { ICustomer, Customer } from '../customers.models';

@Component({
    selector: 'app-add-customer',
    templateUrl: './add-customer.component.html',
    styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
    areas: string[];
    customer: ICustomer;

    constructor(private componentService: CustomersService) {
        this.areas = [];
        this.customer = new Customer();
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
                throw error;
            });
    }

    addCustomer() {
        if (this.isValid()) {
            this.componentService.addCustomer(this.customer)
                .then(result => {
                    console.log('Customer added!');
                    this.customer = new Customer();
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }

    isValid(): boolean {
        // custom extra validation
        if (this.customer.company.area === 'Select area') {
            return false;
        }
        return true;
    }
}
