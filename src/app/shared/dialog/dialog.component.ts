import { Component } from '@angular/core';
import { DialogService } from './dialog.service';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
    status: number;
    title: string;
    description: string;

    constructor(private componentService: DialogService) {

    }

}
