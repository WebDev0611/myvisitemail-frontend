import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AddCustomerComponent } from './add-customer.component';
import { CustomersService } from '../customers.service';

@NgModule({
    declarations: [AddCustomerComponent],
    exports: [AddCustomerComponent],
    imports: [
        CommonModule
    ],
    providers: [
        CustomersService
    ]
})
export class AddCustomerModule {}
