import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeService } from './home.service';
import { HomeComponent } from './home.component';
import { MenuModule } from '../menu/menu.module';

@NgModule({
    declarations: [HomeComponent],
    exports: [HomeComponent],
    imports: [
        CommonModule,
        MenuModule
    ],
    providers: [
        HomeService
    ]
})
export class HomeModule {}
