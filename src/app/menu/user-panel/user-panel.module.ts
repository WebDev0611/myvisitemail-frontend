import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserPanelComponent } from './user-panel.component';
import { UserPanelService } from './user-panel.service';
import { CoreModule } from '../../core/core.module';

@NgModule({
    declarations: [UserPanelComponent],
    exports: [UserPanelComponent],
    imports: [
        CoreModule,
        CommonModule
    ],
    providers: [
        UserPanelService
    ]
})
export class MenuUserPanelModule {}
