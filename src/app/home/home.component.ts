import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { ErrorService } from '../error/error.service';
import { IMailchimpReportData } from '../shared/models/mailchimp.models';


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
<<<<<<< HEAD
=======
    south: number;
    east: number;
    north: number;
    west: number;
    reykjavik: number;
    rejkjanes: number;
    westfjords: number;
    allBookings: number;
    newBookings: number;

>>>>>>> MVE-35

    constructor(private componentService: HomeService, private errorService: ErrorService) {
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
                this.errorService.handleError(error);
            });
    }

    private filterBookings(dataSet) {
        this.clearBookings();
        for (const index in dataSet) {
            let data = dataSet[index];
            let latitude = data['location']['latitude'];
            let longitude = data['location']['longitude'];
            const today = new Date().getTime();
            for (const key in data['bookings']) {
                const booking = data['bookings'][key];
                if (booking.startDate >= today) {
                    this.newBookings++;
                }
            }
            if (latitude > 64.860415) {
                this.north += data['bookings'].length;
            } else {
                this.south += data['bookings'].length;
            }

            if (longitude > -18.466512) {
                this.east += data['bookings'].length;
            } else {
                this.west += data['bookings'].length;
            }

            if (data['location']['city'] === 'Reykjavik') {
                this.reykjavik += data['bookings'].length;
            }

            if (data['location']['city'] === 'Rejkjanes') {
                this.rejkjanes += data['bookings'].length;
            }

            if (data['location']['city'] === 'Westfjords') {
                this.westfjords += data['bookings'].length;
            }
            this.allBookings += data['bookings'].length;
        }
    }

    private clearBookings () {
        this.newBookings = 0;
        this.south = 0;
        this.east = 0;
        this.north = 0;
        this.west = 0;
        this.reykjavik = 0;
        this.rejkjanes = 0;
        this.westfjords = 0;
        this.allBookings = 0;
    }

    getBookings() {
        this.componentService.getBookings()
            .then(data => {
                this.filterBookings(data);
            })
            .catch(error => {
                this.errorService.handleError(error);
            });
    };

    ngOnInit() {
        this.getReportData();
        window.setInterval(this.getReportData, 120000, this);
    }
}
