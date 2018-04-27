import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { ResortDetailsComponent } from './resort-details.component';
import { ResortDetailsService } from './resort-details.service';
import { EmailFormModule } from './email-form/email-form.module';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [ResortDetailsComponent],
    exports: [ResortDetailsComponent],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        EmailFormModule,
        FormsModule
    ],
    providers: [
        ResortDetailsService
    ]
})
export class ResortDetailsModule {}
