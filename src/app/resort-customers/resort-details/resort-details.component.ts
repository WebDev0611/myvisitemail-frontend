import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ResortDetailsService } from './resort-details.service';
import { Subscription } from 'rxjs/Subscription';
import { IResortCustomerDetails } from '../resort-customers.models';
import { ErrorService } from '../../error/error.service';

@Component({
    selector: 'app-resort-details',
    templateUrl: './resort-details.component.html'
})
export class ResortDetailsComponent implements OnInit, OnDestroy {
    resort: IResortCustomerDetails;
    private sub: Subscription;

    constructor(private componentService: ResortDetailsService, private route: ActivatedRoute, private errorService: ErrorService) {

    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            const resortId = params['resortId'];

            this.componentService.getResort(resortId)
                .then(this.handleSuccess)
                .catch(this.errorService.handleError);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    private handleSuccess(result: IResortCustomerDetails) {
        debugger
        this.resort = result;
    }
}
