import { Component, OnInit, ViewChild } from '@angular/core';

import { IResortCustomer, ResortCustomer } from '../resort-customers.models';
import { ErrorService } from '../../error/error.service';
import { AddCustomersService } from './add-customer.service';
import { ImageUploadComponent } from '../../shared/image-upload/image-upload.component';

@Component({
    selector: 'app-add-customer',
    templateUrl: './add-customer.component.html',
    styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
    areas: string[];
    types: string[];
    customer: IResortCustomer;

    @ViewChild(ImageUploadComponent) fileUpload: ImageUploadComponent;

    constructor(private componentService: AddCustomersService, private errorService: ErrorService) {
        this.areas = [];
        this.types = [
            'Hotel',
            'Guesthouse'
        ];
        this.customer = new ResortCustomer('', '', '', 0, null, '');
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
        if (this.fileUpload.fileObject) {
            this.customer.profileBkg = this.fileUpload.src;
        }
        return true;
    }
}
