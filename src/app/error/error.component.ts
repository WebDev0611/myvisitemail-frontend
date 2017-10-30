import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErrorService } from './error.service';
import { AppError } from '../shared/models/common.models';


@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
    error: AppError;

    private sub: any;
    constructor(private componentService: ErrorService, private route: ActivatedRoute) {
        this.error = new AppError();
    }

    ngOnInit() {
        debugger
        this.error = this.componentService.error;
      }
}
