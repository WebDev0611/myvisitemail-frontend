import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MenuComponent } from './menu.component';
import { MenuNavigationModule } from './navigation/navigation.module';
import { MenuUserPanelModule } from './user-panel/user-panel.module';
import { RouterModule } from '@angular/router';
import { MenuMobileComponent } from './menu-mobile.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        MenuComponent,
        MenuMobileComponent
    ],
    exports: [
        MenuComponent,
        MenuMobileComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        RouterModule,
        MenuUserPanelModule,
        MenuNavigationModule
    ],
    providers: [
    ]
})
export class MenuModule {}
