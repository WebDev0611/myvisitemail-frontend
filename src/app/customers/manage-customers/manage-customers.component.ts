import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';

@Component({
    selector: 'app-manage-customers',
    templateUrl: './manage-customers.component.html',
    styleUrls: ['./manage-customers.component.scss']
})
export class ManageCustomersComponent implements OnInit {
    constructor(private componentService: CustomersService) {
    }

    ngOnInit() {

    }
}
