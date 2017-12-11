import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageUploadComponent } from './image-upload.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [ImageUploadComponent],
    exports: [ImageUploadComponent],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
    ]
})
export class ImageUploadModule {}
