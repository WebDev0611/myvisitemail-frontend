import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmailFormComponent } from './email-form.component';
import { ResortSettingsService } from '../resort-settings.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [EmailFormComponent],
    exports: [EmailFormComponent],
    imports: [
        FormsModule,
        RouterModule,
        CommonModule
    ],
    providers: [
        ResortSettingsService
    ]
})
export class EmailFormModule {}
