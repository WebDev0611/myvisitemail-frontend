import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AddCustomerComponent } from './add-customer.component';
import { CustomersService } from '../resort-customers.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [AddCustomerComponent],
    exports: [AddCustomerComponent],
    imports: [
        FormsModule,
        CommonModule
    ],
    providers: [
        CustomersService
    ]
})
export class AddCustomerModule {}
