import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { FileService } from './services/file-service';
import { UserService } from './services/user-service';


@NgModule({
    declarations: [
        DialogComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
    ],
    providers: [
        FileService,
        UserService
    ]
})
export class SharedModule { }
