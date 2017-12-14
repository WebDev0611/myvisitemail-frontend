import { Component, OnInit, Input } from '@angular/core';
import { FileObject, FileType } from '../models/common.models';
import { IImageValidation, IDimensions } from './image-upload.models';
import { getErrorMessage } from '../shared.utilities';

@Component({
    selector: 'app-image-upload',
    templateUrl: './image-upload.component.html',
    styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
    mainText: string;
    tooltipText: string;
    errorMsg: string;


    src: string;
    fileObject: FileObject;

    @Input() validation: IImageValidation = {
        size: 5 * 1024 * 1024,
        width: 1920,
        height: 1080
    };

    constructor() {
        this.reset();
        this.mainText = 'Click to upload.';
        this.tooltipText = `(Max size ${Math.round(this.validation.size / (1024 * 1024))}MB
        and resolution ${ this.validation.width }*${ this.validation.height })`;
    }

    ngOnInit() {
    }

    reset(): void {
        this.errorMsg = '';
        this.src = '';
        this.fileObject = null;
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
                this.getDimensions(this.src)
                    .then(dim => {
                        if (dim.width > this.validation.width) {
                            this.src = '';
                            this.errorMsg = `Image is too wide! Maximum width allowed is ${ this.validation.width }px`;
                            return;
                        }
                        if (dim.height > this.validation.height) {
                            this.src = '';
                            this.errorMsg = `Image is too high! Maximum height allowed is ${ this.validation.height }px`;
                            return;
                        }

                        this.fileObject = new FileObject(this.src, FileType.Image, file.type);
                    })
                    .catch(error => {
                        this.errorMsg = getErrorMessage(error);
                    });


            };

            reader.readAsDataURL(file);

        } else if (this.fileObject === null) {
            this.errorMsg = `File was not selected!`;
        }
    }

    private getDimensions(imgSrc: string): Promise<IDimensions> {
        return new Promise<IDimensions>((resolve, reject) => {
            try {
                const img = new Image();
                img.onload = () => {
                    resolve({
                        width: img.width,
                        height: img.height
                    });
                };
                img.src = imgSrc;
            } catch (error) {
                reject(error);
            }
        });
    }
}
