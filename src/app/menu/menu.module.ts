import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MenuComponent } from './menu.component';
import { MenuNavigationModule } from './navigation/navigation.module';
import { MenuUserPanelModule } from './user-panel/user-panel.module';
import { RouterModule } from '@angular/router';
import { MenuMobileComponent } from './menu-mobile.component';

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
        CommonModule,
        RouterModule,
        MenuUserPanelModule,
        MenuNavigationModule
    ],
    providers: [
    ]
})
export class MenuModule {}
