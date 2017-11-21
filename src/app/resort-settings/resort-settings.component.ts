import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ResortSettingsService } from './resort-settings.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-resort-settings',
    templateUrl: './resort-settings.component.html'
})
export class ResortSettingsComponent implements OnInit, OnDestroy {
    resortId: string;
    private sub: Subscription;
    constructor(private componentService: ResortSettingsService, private route: ActivatedRoute) {

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
