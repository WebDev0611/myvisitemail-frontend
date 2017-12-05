import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { ResortDetailsComponent } from './resort-details.component';
import { ResortDetailsService } from './resort-details.service';
import { EmailFormModule } from './email-form/email-form.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ResortDetailsComponent],
    exports: [ResortDetailsComponent],
    imports: [
        RouterModule,
        CommonModule,
        SharedModule,
        EmailFormModule
    ],
    providers: [
        ResortDetailsService
    ]
})
export class ResortDetailsModule {}
