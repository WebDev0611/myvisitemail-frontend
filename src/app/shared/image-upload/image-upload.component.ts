import { Component, OnInit } from '@angular/core';
import { FileObject, FileType } from '../models/common.models';

@Component({
    selector: 'app-image-upload',
    templateUrl: './image-upload.component.html',
    styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
    mainText: string;
    tooltipText: string;
    errorMsg: string;

    validation: any;
    src: string;
    fileObject: FileObject;

    constructor() {
        this.src = '';
        this.fileObject = null;
        this.errorMsg = '';
        this.mainText = 'Click to upload.';
        this.tooltipText = '(Max size 5MB and resolution 1920*1080)';

        this.validation = {
            size: 5 * 1024 * 1024,
            width: 1920,
            height: 1080
        };
    }

    ngOnInit() {
    }

    onChange(fileInput: HTMLInputElement) {
        this.errorMsg = ``;
        if (fileInput.files && fileInput.files.length > 0) {
            const file = fileInput.files[0];
            if (file.size > this.validation.size) {
                this.errorMsg = `File is to big! Maximum size allowed is ${Math.round(this.validation.size / (1024 * 1024))}MB`;
                return;
            }

            const reader = new FileReader();
            reader.onloadend = (data) => {
                this.src = reader.result;

                this.fileObject = new FileObject(this.src, FileType.Image, file.type);
            };

            reader.readAsDataURL(file);

        } else if (this.fileObject === null) {
            this.errorMsg = `File was not selected!`;
        }
    }
}
