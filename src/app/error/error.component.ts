import { Component, OnInit } from '@angular/core';
import { ErrorService } from './error.service';
import { AppError } from '../shared/models/common.models';


@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
    error: AppError;
    constructor(private componentService: ErrorService) {
        this.error = new AppError();
    }

    ngOnInit() {
        this.error = this.componentService.error;
    }

    search(searchText: string) {
        if (searchText) {
            this.componentService.search(searchText);
        }
    }
}
