import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ErrorService } from './error.service';
import { ErrorComponent } from './error.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [ErrorComponent],
    exports: [ErrorComponent],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule
    ],
    providers: [
        ErrorService
    ]
})
export class ErrorModule {}
