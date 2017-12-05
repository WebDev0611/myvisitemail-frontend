import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ResortDetailsService } from './resort-details.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-resort-details',
    templateUrl: './resort-details.component.html'
})
export class ResortDetailsComponent implements OnInit, OnDestroy {
    resortId: string;
    private sub: Subscription;

    constructor(private componentService: ResortDetailsService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.resortId = params['resortId'];
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
