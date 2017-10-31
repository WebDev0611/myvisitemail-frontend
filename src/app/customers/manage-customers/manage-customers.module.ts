import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ManageCustomersComponent } from './manage-customers.component';
import { CustomersService } from '../customers.service';

@NgModule({
    declarations: [ManageCustomersComponent],
    exports: [ManageCustomersComponent],
    imports: [
        CommonModule
    ],
    providers: [
        CustomersService
    ]
})
export class ManageCustomerModule {}
