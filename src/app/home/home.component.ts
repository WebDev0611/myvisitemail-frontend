import { Component } from '@angular/core';
import { HomeService } from './home.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    title: string;

    constructor(private componentService: HomeService) {
        this.title = 'HOME';
    }

}
