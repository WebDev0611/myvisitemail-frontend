import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeService } from './home.service';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [HomeComponent],
    exports: [HomeComponent],
    imports: [
        CommonModule
    ],
    providers: [
        HomeService
    ]
})
export class HomeModule {}
