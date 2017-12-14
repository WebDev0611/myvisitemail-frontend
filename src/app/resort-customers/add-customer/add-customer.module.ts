import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AddCustomerComponent } from './add-customer.component';
import { AddCustomersService } from './add-customer.service';
import { ManageCustomersService } from '../../shared/services/manage-customers.service';
import { ResortDetailsService } from '../resort-details/resort-details.service';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [AddCustomerComponent],
    exports: [AddCustomerComponent],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule
    ],
    providers: [
        AddCustomersService,
        ManageCustomersService,
        ResortDetailsService
    ]
})
export class AddCustomerModule {}
