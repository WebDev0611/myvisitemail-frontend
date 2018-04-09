import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { ErrorService } from '../error/error.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    constructor(private componentService: ProfileService, private errorService: ErrorService) {
        this.componentService
            .getData()
            .then(result => {
            })
            .catch(error => {
                this.errorService.handleMessage(error);
            });
    }

    ngOnInit() {
    }
}
