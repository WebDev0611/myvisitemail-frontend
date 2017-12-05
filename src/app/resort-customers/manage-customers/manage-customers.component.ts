import { Component, OnInit } from '@angular/core';

import { Page } from '../../shared/models/common.models';
import { ErrorService } from '../../error/error.service';
import { IResortCustomer } from '../resort-customers.models';
import { ManageCustomersService } from './manage-customers.service';

@Component({
    selector: 'app-manage-customers',
    templateUrl: './manage-customers.component.html',
    styleUrls: ['./manage-customers.component.scss']
})
export class ManageCustomersComponent implements OnInit {
    activePage: number;
    maxPerPage: number;
    totalCount: number;

    pages: Page[];
    customers: IResortCustomer[];
    private allCustomers: IResortCustomer[];
    constructor(private componentService: ManageCustomersService, private errorService: ErrorService) {
        this.customers = [];
        this.activePage = 1;
        this.maxPerPage = 10;
        this.totalCount = 0;

        this.pages = [];
    }

    ngOnInit() {
        this.getCustomers();
    }

    getCustomers(): void {
        this.componentService.getResortCustomers()
            .then(customers => {
                this.allCustomers = customers;
                this.totalCount = customers.length;

                this.customers = customers;

                if (customers.length > this.maxPerPage) {
                    this.calculatePages();
                }
            })
            .catch(error => {
                this.errorService.handleError(error);
            });
    }

    changeAggregation(entriesNo: string) {
        this.maxPerPage = parseInt(entriesNo, 10);

        this.calculatePages();

        console.log('Change entries count:', this.maxPerPage);
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

    private calculatePages(){

    }
}
