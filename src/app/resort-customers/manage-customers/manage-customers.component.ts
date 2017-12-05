import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../resort-customers.service';
import { Page } from '../../shared/models/common.models';
import { ErrorService } from '../../error/error.service';
import { IDetailCustomer } from '../resort-customers.models';

@Component({
    selector: 'app-manage-customers',
    templateUrl: './manage-customers.component.html',
    styleUrls: ['./manage-customers.component.scss']
})
export class ManageCustomersComponent implements OnInit {
    activePage: number;
    pages: Page[];
    customers: IDetailCustomer[];
    constructor(private componentService: CustomersService, private errorService: ErrorService) {
        this.customers = [];
        this.activePage = 1;
        this.pages = [];
    }

    ngOnInit() {
        this.getCustomers();
    }

    getCustomers(): void {
        this.componentService.getDetailCustomers()
            .then(customers => {
                this.customers = customers;
                for (let i = 1; i < 8; i++) {
                    this.pages.push(new Page(i));
                }
            })
            .catch(error => {
                this.errorService.handleError(error);
            });
    }

    changeAggregation(entriesNo: string) {
        const count = parseInt(entriesNo, 10);

        console.log('Change entries count:', count);
    }

    openPage(pageNo: string) {
        this.activePage = parseInt(pageNo, 10);
    }
    openNext() {
        if (this.activePage < this.pages.length) {
            this.activePage++;
        }

    }
    openPrev() {
        if (this.activePage > 1) {
            this.activePage--;
        }
    }
}
