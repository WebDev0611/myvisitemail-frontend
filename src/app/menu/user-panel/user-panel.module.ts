import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserPanelComponent } from './user-panel.component';
import { UserPanelService } from './user-panel.service';

@NgModule({
    declarations: [UserPanelComponent],
    exports: [UserPanelComponent],
    imports: [
        CommonModule
    ],
    providers: [
        UserPanelService
    ]
})
export class MenuUserPanelModule {}
