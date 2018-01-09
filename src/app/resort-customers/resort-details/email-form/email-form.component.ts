import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {ResortDetailsService} from '../resort-details.service';
import {ErrorService} from '../../../error/error.service';
import {ResortCustomer, IDbTemplate} from "../../resort-customers.models";


@Component({
    selector: 'app-email-form',
    templateUrl: './email-form.component.html'
})
export class EmailFormComponent implements OnInit, OnDestroy {
    resortId: string;
    actionName: string;
    messageHTML: string;
    resort: ResortCustomer;
    address: string;
    emails: string;

    resultMsg: string;

    private sub: Subscription;
    constructor(private componentService: ResortDetailsService, private route: ActivatedRoute, private router: Router,
        private errorService: ErrorService) {
        this.resultMsg = '';
        this.messageHTML = '';
        this.address = '';
        this.emails = '';
    }

    ngOnInit() {
        this.sub = this.route.url.subscribe(url => {
            this.actionName = url[1].path;
            this.resortId = url[2].path;
        });

        this.componentService.getResort(this.resortId).then(result => {
            this.resort = result;
            if (!this.resort[this.actionName]) {
                this.resort[this.actionName] = {}
            } else  if (this.resort[this.actionName].html) {
                this.messageHTML = this.resort[this.actionName].html;
            } else {
                this.resort[this.actionName] = {
                    html: ''
                }
            }
        }).catch(error => {
            this.errorService.handleError(error);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    save() {
        this.resultMsg = '';
        this.resort[this.actionName].html = this.messageHTML;
            this.componentService.updateResort(this.resort)
            .then(result => {
                this.router.navigateByUrl(`/resort-settings/${ this.resortId }`);
            })
            .catch(error => {
                this.errorService.handleError(error);
            });
    }

    clearCampaigns() {
        this.componentService.clearCampaigns(this.resort[this.actionName].templateId)
            .then(result => {
                this.resultMsg = 'Cleared test campaigns.';
            })
            .catch(error => {
                this.errorService.handleError(error);
            });
    }

    sendTest() {
        this.resultMsg = '';
        let data: IDbTemplate = {
            name: this.actionName,
            html: this.messageHTML,
            folder_id: this.resort.templateFolderId // folder_id
        };
        this.componentService.sendTestEmail(this.emails.split(';'), {
            templateId: this.resort[this.actionName].templateId,
            data: data
        })
        .then(result => {
            this.resultMsg = result.message;
        })
        .catch(error => {
            this.errorService.handleError(error);
        });
    }
}
