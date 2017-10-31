import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AddCustomerModule } from './add-customer/add-customer.module';
import { ManageCustomerModule } from './manage-customers/manage-customers.module';


@NgModule({
    declarations: [
    ],
    exports: [
    ],
    imports: [
        CommonModule,
        AddCustomerModule,
        ManageCustomerModule
    ],
    providers: [
    ]
})
export class CustomersModule {}
