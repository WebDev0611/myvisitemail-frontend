import { Component, OnInit } from '@angular/core';
import { DialogService } from './dialog.service';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
    isOpened: boolean;
    constructor(private componentService: DialogService) {
        this.isOpened = false;
        this.subscribe();
    }

    ngOnInit() {

    }

    private subscribe() {
        this.componentService.isOpened.subscribe(isOpened => {
            this.isOpened = isOpened;
        });
    }
}
