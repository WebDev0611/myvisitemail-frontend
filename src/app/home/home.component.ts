import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { ErrorService } from '../error/error.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    title: string;

    constructor(private componentService: HomeService, private errorService: ErrorService) {
        this.title = 'HOME';
    }

    ngOnInit() {
        this.componentService.getData()
            .then(data => {

            })
            .catch(error => {
                debugger
                this.errorService.showError(error);
            });
    }
}
