import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';

@Component({
    selector: 'app-add-customer',
    templateUrl: './add-customer.component.html',
    styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
    constructor(private componentService: CustomersService) {
    }

    ngOnInit() {

    }
}
