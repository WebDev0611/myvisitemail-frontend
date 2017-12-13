import { Component, OnInit } from '@angular/core';

import { Page } from '../../shared/models/common.models';
import { ErrorService } from '../../error/error.service';
import { ResortCustomer } from '../resort-customers.models';
import { ManageCustomersService } from '../../shared/services/manage-customers.service';

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

    sortTypes: any;

    customers: ResortCustomer[];
    private allCustomers: ResortCustomer[];

    private tempCustomers: ResortCustomer[];
    private tempSorting: any;
    private tempSearch: string;

    constructor(private componentService: ManageCustomersService, private errorService: ErrorService) {
        this.customers = [];
        this.activePage = 1;
        this.maxPerPage = 10;
        this.totalCount = 0;

        this.pages = [];
        this.sortTypes = {
            sorting: 'sorting_asc',
            sorting_asc: 'sorting_desc',
            sorting_desc: 'sorting_asc',
        };
    }

    ngOnInit() {
        this.getCustomers();
    }

    getCustomers(): void {
        this.componentService.getResortCustomers()
            .then(customers => {
                this.allCustomers = customers;
                this.totalCount = customers.length;

                this.tempCustomers = null;
                this.tempSearch = null;
                this.tempSorting = null;

                this.buildDataGrid();
            })
            .catch(error => {
                this.errorService.handleError(error);
            });
    }

    search(searchInput: string) {
        // debugger
        this.tempSearch = searchInput.toUpperCase();
        this.buildDataGrid();
    }

    sortBy(sortHeader: HTMLElement) {
        let sortType = sortHeader.className;
        this.resetSorting(sortHeader);
        sortType = this.sortTypes[sortType];
        const by = sortHeader.textContent.toLowerCase();
        this.tempSorting = { type: sortType, by: by };

        this.buildDataGrid();

        sortHeader.className = sortType;
    }

    changeAggregation(entriesNo: string) {
        this.maxPerPage = parseInt(entriesNo, 10);

        this.buildDataGrid();
    }

    openPage(pageNo: string) {
        this.activePage = parseInt(pageNo, 10);

        this.buildDataGrid();
    }
    openNext() {
        if (this.activePage < this.pages.length) {
            this.activePage++;

            this.buildDataGrid();
        }

    }
    openPrev() {
        if (this.activePage > 1) {
            this.activePage--;

            this.buildDataGrid();
        }
    }

    private buildDataGrid() {
        this.tempCustomers = this.allCustomers;

        this.searchCustomers(this.tempSearch);
        this.sortCustomers(this.tempSorting);
        this.calculatePages();
        this.takeCustomers();

        this.tempCustomers = null;
    }

    private sortCustomers(sort?: any) {
        if (sort) {
            const type = sort.type;
            const by = sort.by;

            const sorted = this.tempCustomers.sort((a, b) => {
                if (type === 'sorting_asc') {
                    if (a[by] > b[by]) {
                        return 1;
                    } else if (a[by] < b[by]) {
                        return -1;
                    } else {
                        return 0;
                    }
                } else {
                    if (a[by] > b[by]) {
                        return -1;
                    } else if (a[by] < b[by]) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
            });

            this.tempCustomers = sorted;
        }
    }

    private resetSorting(sortHeader: HTMLElement) {
        for (let i = 0; i < sortHeader.parentElement.children.length; i++) {
            const child = sortHeader.parentElement.children[i];
            child.className = 'sorting';
        }
    }

    private searchCustomers(searchText?: string) {
        if (searchText) {
            const founded = [];
            const toSearch = this.prepareTextSearch();

            toSearch.forEach((key, index) => {
                if (key.includes(searchText)) {
                    founded.push(this.tempCustomers[index]);
                }
            });

            this.tempCustomers = founded;
        }
    }

    private prepareTextSearch(): string[] {
        return this.allCustomers.map(customer => this.convertToStringKey(customer));
    }

    private convertToStringKey(customer: ResortCustomer): string {
        const key = 'test';
        // const key = `${customer.name} ${customer.email} ${customer.position} ${customer.rooms} ${customer.invoice} ${customer.lastSent}`;
        return key.toUpperCase();
    }

    private takeCustomers() {
        const from = this.activePage * this.maxPerPage - this.maxPerPage;
        const to = this.activePage * this.maxPerPage;

        this.customers = this.tempCustomers.slice(from, to);
    }

    private calculatePages() {
        this.pages = [];
        const pageCount = Math.ceil(this.tempCustomers.length / this.maxPerPage);

        if (pageCount > 1) {
            for (let i = 1; i <= pageCount; i++) {
                const page = new Page(i);
                this.pages.push(page);
            }
        }
    }
}
