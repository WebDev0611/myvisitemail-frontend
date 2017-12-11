import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { FileService } from './services/file-service';
import { UserService } from './services/user-service';
import { FormsModule } from '@angular/forms';
import { ImageUploadModule } from './image-upload/image-upload.module';


@NgModule({
    declarations: [
        DialogComponent
    ],
    imports: [
        FormsModule,
        CommonModule
    ],
    exports: [
        DialogComponent,
        ImageUploadModule
    ],
    providers: [
        FileService,
        UserService
    ]
})
export class SharedModule { }
