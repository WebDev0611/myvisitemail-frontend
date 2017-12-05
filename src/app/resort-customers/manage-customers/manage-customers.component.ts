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
                this.customers = customers;
                this.totalCount = customers.length;
                if (customers.length > this.maxPerPage) {
                    debugger
                }
            })
            .catch(error => {
                this.errorService.handleError(error);
            });
    }

    changeAggregation(entriesNo: string) {
        const count = parseInt(entriesNo, 10);
        this.maxPerPage = count;
        debugger

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
