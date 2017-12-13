import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ManageCustomersComponent } from './manage-customers.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ManageCustomersService } from './manage-customers.service';


@NgModule({
    declarations: [ManageCustomersComponent],
    exports: [ManageCustomersComponent],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule
    ],
    providers: [
        ManageCustomersService,
        DatePipe
    ]
})
export class ManageCustomerModule {}
