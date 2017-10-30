import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavigationComponent } from './navigation.component';

@NgModule({
    declarations: [NavigationComponent],
    exports: [NavigationComponent],
    imports: [
        CommonModule
    ],
    providers: [
    ]
})
export class MenuNavigationModule {}
