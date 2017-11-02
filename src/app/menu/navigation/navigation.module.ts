import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavigationComponent } from './navigation.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [NavigationComponent],
    exports: [NavigationComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [
    ]
})
export class MenuNavigationModule {}
