import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [LoginComponent],
    exports: [LoginComponent],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule
    ],
    providers: [
        LoginService
    ]
})
export class LoginModule {}
