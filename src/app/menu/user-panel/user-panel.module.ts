import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserPanelComponent } from './user-panel.component';
import { UserPanelService } from './user-panel.service';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [UserPanelComponent],
    exports: [UserPanelComponent],
    imports: [
        SharedModule,
        CommonModule
    ],
    providers: [
        UserPanelService
    ]
})
export class MenuUserPanelModule {}
