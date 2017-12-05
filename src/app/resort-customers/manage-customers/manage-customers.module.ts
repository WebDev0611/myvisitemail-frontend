import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ManageCustomersComponent } from './manage-customers.component';
import { CustomersService } from '../resort-customers.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ManageCustomersComponent],
    exports: [ManageCustomersComponent],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule
    ],
    providers: [
        CustomersService
    ]
})
export class ManageCustomerModule {}
