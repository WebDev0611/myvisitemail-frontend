import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ResortSettingsComponent } from './resort-settings.component';
import { ResortSettingsService } from './resort-settings.service';
import { EmailFormModule } from './email-form/email-form.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ResortSettingsComponent],
    exports: [ResortSettingsComponent],
    imports: [
        RouterModule,
        CommonModule,
        SharedModule,
        EmailFormModule
    ],
    providers: [
        ResortSettingsService
    ]
})
export class ResortSettingsModule {}
