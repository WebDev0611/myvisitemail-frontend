import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile.component';
import { ProfileService } from './profile.service';

@NgModule({
    declarations: [ProfileComponent],
    exports: [ProfileComponent],
    imports: [
        CommonModule,
        SharedModule
    ],
    providers: [
        ProfileService
    ]
})
export class ProfileModule {}
