import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { ErrorService } from '../error/error.service';
import { IMailchimpReportData } from '../shared/models/mailchimp.models';
import { ManageCustomersService } from '../shared/services/manage-customers.service';
import { ResortCustomer } from "../resort-customers/resort-customers.models";


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    title: string;
    statistics: Array<Object> = [];
    total: {
        ctr: number,
        bounceRate: number,
        emailsSent: number
    };

    south: number;
    east: number;
    north: number;
    west: number;
    reykjavik: number;
    rejkjanes: number;
    westfjords: number;
    allCustomers: number;
    newBookings: number;
    newCustomers: number;
    deletedCustomers: number;
    intervalIds: any[];

    constructor(private componentService: HomeService, private errorService: ErrorService, private customerService: ManageCustomersService) {
        this.title = 'HOME';
        this.total = {
            ctr: 0,
            bounceRate: 0,
            emailsSent: 0
        };
        this.newBookings = 0;
        for (let i = 0; i < 5; i++) {
            this.statistics[i] = {
                emailsSent: 0,
                ctr: 0,
                numberOf: 0,
                bounceRate: 0,
            };
        }

        this.intervalIds = [];

        this.south = 0;
        this.east = 0;
        this.north = 0;
        this.west = 0;
        this.reykjavik = 0;
        this.rejkjanes = 0;
        this.westfjords = 0;
        this.allCustomers = 0;
        this.newCustomers = 0;
        this.deletedCustomers = 0;
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
        toDate.setMinutes(59);
        toDate.setHours(23);
        return [
            thisDay.getTime(),
            new Date().setDate(thisDay.getDate() - 1),
            new Date().setDate(thisDay.getDate() - 7),
            new Date().setDate(thisDay.getDate() - 30),
            new Date().setDate(thisDay.getDate() - 365),
            toDate.getTime()
        ];
    }

    private filterReports(dataSet: IMailchimpReportData[]) {
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
                    this.statistics[i]['bounceRate'] / this.total.emailsSent;
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
                this.errorService.handleError(error);
            });
    }

    private filterBookings(dataSet) {
        this.newBookings = 0;
        const condition = new Date().setDate(
            new Date().getDate() - 7
        );
        for (const key in dataSet) {
            const booking = dataSet[key];
            if (booking.creationDate >= condition) {
                this.newBookings++;
            }
        }
    }

    private filterCustomers(dataSet: ResortCustomer[]) {
        this.clearBookings();
        this.allCustomers = dataSet.length;
        const condition = new Date().setDate(
            new Date().getDate() - 7
        );
        for (const index in dataSet) {
            let data = dataSet[index];
            if (data.metadata && data.metadata.creationDate &&
                condition <= data.metadata.creationDate) {
                this.newCustomers++;
            }
            switch (data.area) {
                case 'South':
                    this.south++;
                    break;
                case 'West':
                    this.west++;
                    break;
                case 'North':
                    this.north++
                    break;
                case 'East':
                    this.east++;
                    break;
            }

            if (/reykjavik/i.test(data.contact.address)) {
                this.reykjavik++;
            }

            if (/rejkjanes/i.test(data.contact.address)) {
                this.rejkjanes++;
            }

            if (/westfjords/i.test(data.contact.address)) {
                this.westfjords++;
            }
        }
    }

    private clearBookings() {
        this.south = 0;
        this.east = 0;
        this.north = 0;
        this.west = 0;
        this.reykjavik = 0;
        this.rejkjanes = 0;
        this.westfjords = 0;
    }

    private getBookings() {
        this.componentService.getBookings()
            .then(data => {
                this.filterBookings(data.results);
            })
            .catch(err => {
                this.errorService.handleError(err);
            })
    }

    getResorts() {
        this.customerService.getResortCustomers()
            .then(data => {
                this.filterCustomers(data);
            })
            .catch(error => {
                this.errorService.handleError(error);
            });
        this.customerService.getDeletedCustomer()
            .then(data => {
                this.deletedCustomers = data.length;
            })
            .catch(error => {
                this.errorService.handleError(error);
            });
    };

    ngOnInit() {
        this.getReportData();
        this.getResorts();
        this.getBookings();
        this.intervalIds[0] = window.setInterval(this.getReportData, 120000, this);
        this.intervalIds[1] = window.setInterval(this.getResorts, 120000, this);
        this.intervalIds[2] = window.setInterval(this.getBookings, 120000, this);
    }

    ngOnDestroy() {
        for (let id of this.intervalIds) {
            window.clearInterval(id);
        }
    }
}
