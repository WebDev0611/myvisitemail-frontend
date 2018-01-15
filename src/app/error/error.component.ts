import { Component, OnInit } from '@angular/core';
import { ErrorService } from './error.service';
import { AppMessage } from '../shared/models/common.models';


@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
    error: AppMessage;
    constructor(private componentService: ErrorService) {
        this.error = new AppMessage();
    }

    ngOnInit() {
        this.error = this.componentService.message;
    }
}
