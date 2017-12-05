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
    statistics: Array<Object> = [];
    total: {
        ctr: number,
        bounceRate: number,
        emailsSent: number
    };

    constructor(private componentService: HomeService, private errorService: ErrorService) {
        this.title = 'HOME';
        this.total = {
            ctr: 0,
            bounceRate: 0,
            emailsSent: 0
        };
        for (let i = 0; i < 5; i++) {
            this.statistics[i] = {
                emailsSent: 0,
                ctr: 0,
                numberOf: 0,
                bounceRate: 0,
            }
        }
    }

    private clearReports() {
        this.total = {
            ctr: 0,
            bounceRate: 0,
            emailsSent: 0
        };
        for (let i = 0; i < 5; i++) {
            this.statistics[i] = {
                emailsSent: 0,
                ctr: 0,
                numberOf: 0,
                bounceRate: 0,
            };
        }
    }

    private getConditionArray() {
        const thisDay = new Date();
        const toDate = new Date();
        thisDay.setMinutes(1);
        thisDay.setHours(0);
        toDate.setMinutes(59)
        toDate.setHours(23);
        return [
            thisDay.getTime(),
            new Date().setDate(thisDay.getDate() - 1),
            new Date().setDate(thisDay.getDate() - 7),
            new Date().setDate(thisDay.getDate() - 30),
            new Date().setDate(thisDay.getDate() - 365),
            toDate.getTime()
        ]
    }

    private filterReports(dataSet: Array<Object>) {
        this.clearReports();
        const conditions = this.getConditionArray();

        for (const index in dataSet) {
            if (dataSet.hasOwnProperty(index)) {
                const report = dataSet[index];
                const sent = new Date(report['send_time']);
                this.total.emailsSent += report['emails_sent'];
                if ((conditions[0] <= sent.getTime()) && (sent.getTime() <= conditions[5])) {
                    this.statistics[0]['emailsSent'] += report['emails_sent'];
                    this.statistics[0]['ctr'] += report['clicks']['click_rate'];
                    this.statistics[0]['bounceRate'] +=
                        report['bounces']['soft_bounces'] +
                        report['bounces']['hard_bounces'] +
                        report['bounces']['syntax_errors'];
                    this.statistics[0]['numberOf']++;
                }
                if ((conditions[1] <= sent.getTime()) && (sent.getTime() <= conditions[5])) {
                    this.statistics[1]['emailsSent'] += report['emails_sent'];
                    this.statistics[1]['ctr'] += report['clicks']['click_rate'];
                    this.statistics[1]['bounceRate'] +=
                        report['bounces']['soft_bounces'] +
                        report['bounces']['hard_bounces'] +
                        report['bounces']['syntax_errors'];
                    this.statistics[1]['numberOf']++;
                }
                if ((conditions[2] <= sent.getTime()) && (sent.getTime() <= conditions[5])) {
                    this.statistics[2]['emailsSent'] += report['emails_sent'];
                    this.statistics[2]['ctr'] += report['clicks']['click_rate'];
                    this.statistics[2]['bounceRate'] +=
                        report['bounces']['soft_bounces'] +
                        report['bounces']['hard_bounces'] +
                        report['bounces']['syntax_errors'];
                    this.statistics[2]['numberOf']++;
                }
                if ((conditions[3] <= sent.getTime()) && (sent.getTime() <= conditions[5])) {
                    this.statistics[3]['emailsSent'] += report['emails_sent'];
                    this.statistics[3]['ctr'] += report['clicks']['click_rate'];
                    this.statistics[3]['bounceRate'] +=
                        report['bounces']['soft_bounces'] +
                        report['bounces']['hard_bounces'] +
                        report['bounces']['syntax_errors'];
                    this.statistics[3]['numberOf']++;
                }
                if ((conditions[3] <= sent.getTime()) && (sent.getTime() <= conditions[5])) {
                    this.statistics[4]['emailsSent'] += report['emails_sent'];
                    this.statistics[4]['ctr'] += report['clicks']['click_rate'];
                    this.statistics[4]['bounceRate'] +=
                        report['bounces']['soft_bounces'] +
                        report['bounces']['hard_bounces'] +
                        report['bounces']['syntax_errors'];
                    this.statistics[4]['numberOf']++;
                }
            }
        }

        for (let i = 0; i < 5; i++) {
            if (this.statistics[i]['numberOf'] > 0) {
                this.total.ctr += this.statistics[i]['ctr'] = this.statistics[i]['ctr'] / this.statistics[i]['numberOf'];
                this.total.bounceRate += this.statistics[i]['bounceRate'] =
                                         this.statistics[i]['bounceRate'] / this.statistics[i]['numberOf'];
            }
        }
        this.total.ctr = this.total.ctr / 5;
        this.total.bounceRate = this.total.bounceRate / 5;
    }

    private getReportData() {
        this.componentService.getData()
            .then(data => {
                this.filterReports(data);
            })
            .catch(error => {
                this.errorService.showError(error);
            });
    }

    ngOnInit() {
        this.getReportData();
        window.setInterval(this.getReportData, 120000, this);
    }
}
