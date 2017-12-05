import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ResortSettingsService } from '../resort-settings.service';
import { Subscription } from 'rxjs/Subscription';
import { IEmailMessage, EmailMessage } from './email-form.models';

@Component({
    selector: 'app-email-form',
    templateUrl: './email-form.component.html'
})
export class EmailFormComponent implements OnInit, OnDestroy {
    resortId: string;
    actionName: string;
    email: EmailMessage;

    resultMsg: string;

    private sub: Subscription;
    constructor(private componentService: ResortSettingsService, private route: ActivatedRoute, private router: Router) {
        this.email = new EmailMessage();
        this.resultMsg = '';
    }

    ngOnInit() {
        this.sub = this.route.url.subscribe(url => {
            this.actionName = url[1].path;
            this.resortId = url[2].path;
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    save() {
        this.resultMsg = '';
        this.componentService.saveTemplate(this.actionName, this.email)
            .then(result => {
                this.router.navigateByUrl(`/resort-settings/${ this.resortId }`);
            })
            .catch(error => {
                throw error;
            });
    }

    sendTest() {
        this.resultMsg = '';
        this.componentService.sendTestEmail(this.email)
            .then(result => {
                this.resultMsg = 'Test email has been sent';
            })
            .catch(error => {
                throw error;
            });
    }
}