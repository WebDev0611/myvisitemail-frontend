import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ManageCustomersComponent } from './manage-customers.component';
import { CustomersService } from '../customers.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [ManageCustomersComponent],
    exports: [ManageCustomersComponent],
    imports: [
        FormsModule,
        CommonModule
    ],
    providers: [
        CustomersService
    ]
})
export class ManageCustomerModule {}
