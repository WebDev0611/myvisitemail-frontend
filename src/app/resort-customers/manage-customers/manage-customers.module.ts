import { NgModule } from '@angular/core';

import { ManageCustomersComponent } from './manage-customers.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ManageCustomersService } from './manage-customers.service';

@NgModule({
    declarations: [ManageCustomersComponent],
    exports: [ManageCustomersComponent],
    imports: [
        SharedModule,
        RouterModule
    ],
    providers: [
        ManageCustomersService
    ]
})
export class ManageCustomerModule {}
