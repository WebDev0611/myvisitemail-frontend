import { NgModule } from '@angular/core';

import { AddCustomerModule } from './add-customer/add-customer.module';
import { ManageCustomerModule } from './manage-customers/manage-customers.module';
import { FormsModule } from '@angular/forms';
import { ResortDetailsModule } from './resort-details/resort-details.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
    ],
    exports: [
    ],
    imports: [
        SharedModule,
        AddCustomerModule,
        ManageCustomerModule,
        ResortDetailsModule
    ],
    providers: [
    ]
})
export class ResortCustomersModule {}
