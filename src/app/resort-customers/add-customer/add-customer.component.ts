import { Component, OnInit, ViewChild } from '@angular/core';
import { ResortCustomer } from '../resort-customers.models';
import { ErrorService } from '../../error/error.service';
import { AddCustomersService } from './add-customer.service';
import { ImageUploadComponent } from '../../shared/image-upload/image-upload.component';
import { isNumeric } from '../../shared/shared.utilities';
import { FileService } from '../../shared/services/file-service';
import { error } from 'selenium-webdriver';

@Component({
    selector: 'app-add-customer',
    templateUrl: './add-customer.component.html',
    styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
    areas: string[];
    types: string[];
    @ViewChild(ImageUploadComponent) fileUpload: ImageUploadComponent;
    customer: ResortCustomer;
    errorMessage: string;

    constructor(private componentService: AddCustomersService, private errorService: ErrorService, private fileService: FileService) {
        this.createUser();
        this.areas = [
            'South',
            'West',
            'North',
            'East'
        ];
        this.types = [
            'Hotel',
            'Guesthouse',
            'Other'
        ];
        this.errorMessage = '';
    }

    ngOnInit() {
    }

    addCustomer() {
        if (this.isValid()) {
            if (this.fileUpload.fileObject) {
                this.customer.contact.address = 'TODO';
                this.fileService.sendFile(this.fileUpload.fileObject)
                    .then(result => {
                        this.customer.backgroundId = result.id;
                        this.saveCustomer();
                    })
                    .catch(error => {
                        this.errorService.handleError(error);
                    });
            } else {
                this.saveCustomer();
            }
        }
    }

    private saveCustomer() {
        this.componentService.addCustomer(this.customer)
            .then(r => {
                this.errorMessage = '';
                this.createUser();
                this.fileUpload.reset();
            })
            .catch(error => {
                this.errorService.handleError(error);
            });
    }

    isValid(): boolean {
        this.errorMessage = '';
        if (this.customer.type === 'Select type') {
            this.errorMessage = 'Please select proper type';
            return false;
        }
        if (this.customer.area === 'Select area') {
            this.errorMessage = 'Please select proper area';
            return false;
        }
        if (!isNumeric(this.customer.rooms) || this.customer.rooms < 1) {
            this.errorMessage = 'Rooms has to be an integer number higher than 0';
            return false;
        }

        return true;
    }

    private createUser() {
        this.customer = new ResortCustomer();
        this.customer.type = 'Select type';
    }
}
