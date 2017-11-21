import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LockScreenComponent } from './lock-screen.component';
import { SharedModule } from '../shared/shared.module';
import { LockScreenService } from './lock-screen.service';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [LockScreenComponent],
    exports: [LockScreenComponent],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule
    ],
    providers: [
        LockScreenService
    ]
})
export class LockScreenModule {}
