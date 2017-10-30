import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DialogComponent } from './dialog/dialog.component';
import { DialogService } from './dialog/dialog.service';

@NgModule({
    declarations: [
        DialogComponent
    ],
    imports: [CommonModule],
    exports: [
        DialogComponent
    ],
    providers: [
        DialogService
    ]
})
export class SharedModule { }
