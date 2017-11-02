import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeService } from './home.service';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [HomeComponent],
    exports: [HomeComponent],
    imports: [
        CommonModule,
        SharedModule
    ],
    providers: [
        HomeService
    ]
})
export class HomeModule {}
