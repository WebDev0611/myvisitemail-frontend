import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { EmailFormComponent } from './email-form.component';
import { ResortDetailsService } from '../resort-details.service';

@NgModule({
    declarations: [EmailFormComponent],
    exports: [EmailFormComponent],
    imports: [
        FormsModule,
        RouterModule,
        CommonModule
    ],
    providers: [
        ResortDetailsService
    ]
})
export class EmailFormModule {}
