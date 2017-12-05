import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PercentPipe } from '@angular/common';

import { ResortDetailsService } from './resort-details.service';
import { Subscription } from 'rxjs/Subscription';
import { IResortCustomerDetails, ResortCustomerDetails } from '../resort-customers.models';
import { ErrorService } from '../../error/error.service';

@Component({
    selector: 'app-resort-details',
    templateUrl: './resort-details.component.html'
})
export class ResortDetailsComponent implements OnInit, OnDestroy {
    resort: ResortCustomerDetails;
    private sub: Subscription;

    constructor(private componentService: ResortDetailsService, private route: ActivatedRoute, private errorService: ErrorService) {
        this.resort = new ResortCustomerDetails();
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            const resortId = params['resortId'];

            this.componentService.getResort(resortId)
                .then(this.handleSuccess.bind(this))
                .catch(this.errorService.handleError);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    private handleSuccess(result: IResortCustomerDetails) {
        if (!result.profileBkg) {
            // in case of no profile background we are using default one
            result.profileBkg = 'assets/img/default_profileBkg.jpg';
        }

        this.resort = result;
    }
}
