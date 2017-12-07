import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PercentPipe } from '@angular/common';

import { Chart } from 'chart.js';

import { ResortDetailsService } from './resort-details.service';
import { Subscription } from 'rxjs/Subscription';
import { IResortCustomerDetails, ResortCustomerDetails } from '../resort-customers.models';
import { ErrorService } from '../../error/error.service';

@Component({
    selector: 'app-resort-details',
    templateUrl: './resort-details.component.html'
})
export class ResortDetailsComponent implements OnInit, OnDestroy {
    chartTimespan: number;
    resortId: string;
    resort: ResortCustomerDetails;

    private sub: Subscription;
    private lineChart: Chart;
    private littleLineChart: Chart;

    constructor(private componentService: ResortDetailsService, private route: ActivatedRoute, private errorService: ErrorService) {
        this.chartTimespan = 7;
        this.resort = new ResortCustomerDetails();
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.resortId = params['resortId'];

            this.componentService.getResort(this.resortId)
                .then(this.handleSuccess.bind(this))
                .catch(error => this.errorService.handleError(error));

        });

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    changeChartTimespan(timespan: number) {
        this.chartTimespan = timespan;
        this.prepareLineChart();

    }

    private handleSuccess(result: IResortCustomerDetails) {
        if (result) {
            if (!result.profileBkg) {
                // in case of no profile background we are using default one
                result.profileBkg = 'assets/img/default_profileBkg.jpg';
            }
            this.resort = result;

            this.getMailStatistics();
        }
    }

    private getMailStatistics() {
        this.componentService.getMailchimpStatistics('18bcdfb6db') // (this.resort.id)
            .then(result => {
                this.prepareLitleLineChart();
                this.prepareLineChart();
            })
            .catch(error => this.errorService.handleError(error));
    }
    private prepareLitleLineChart() {
        if (this.littleLineChart) {
            this.littleLineChart.destroy();
        }
        const littleLineChart = document.querySelector('#liteLineChart');

        const liteLineGradient = (littleLineChart as any).getContext('2d').createLinearGradient(0, 0, 0, 200);
        liteLineGradient.addColorStop(0, 'rgba(30,22,170,0.08)');
        liteLineGradient.addColorStop(1, 'rgba(30,22,170,0)');

        // line chart data
        const liteLineData = {
            labels: ['January 1', 'January 5', 'January 10', 'January 15', 'January 20', 'January 25'],
            datasets: [{
                label: 'Sold',
                fill: true,
                lineTension: 0.4,
                backgroundColor: liteLineGradient,
                borderColor: '#8f1cad',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#fff',
                pointBackgroundColor: '#2a2f37',
                pointBorderWidth: 2,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: '#FC2055',
                pointHoverBorderColor: '#fff',
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                pointHitRadius: 5,
                data: [13, 28, 19, 24, 43, 49],
                spanGaps: false
            }]
        };

        // line chart init
        this.littleLineChart = new Chart(littleLineChart as HTMLCanvasElement, {
            type: 'line',
            data: liteLineData,
            options: {
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [],
                    yAxes: []
                }
            }
        });
    }

    private upadateLittleLineChart() {

    }

    private getDaysOfMonth() {
        const today = new Date();
        return new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    private prepareLineChart() {
        if (this.lineChart) {
            this.lineChart.destroy();
        }
        const lineChart = document.querySelector('#lineChart');

        const randLineData = [];
        const randLabels = [];
        const points: number = this.chartTimespan === 0 ? this.getDaysOfMonth() :
            this.chartTimespan === 1 ? 24 :
                this.chartTimespan;

        for (let i = 1; i <= points; i++) {
            randLineData.push(Math.floor(Math.random() * 100));
            let label = i.toString();
            if (this.chartTimespan === 1) {
                label += 'h';
            }
            randLabels.push(label);
        }


        // line chart data
        const lineData = {
            labels: randLabels, // ['1', '5', '10', '15', '20', '25', '30', '35'],
            datasets: [{
                label: 'Visitors Graph',
                fill: false,
                lineTension: 0,
                backgroundColor: '#fff',
                borderColor: '#6896f9',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#fff',
                pointBackgroundColor: '#2a2f37',
                pointBorderWidth: 3,
                pointHoverRadius: 10,
                pointHoverBackgroundColor: '#FC2055',
                pointHoverBorderColor: '#fff',
                pointHoverBorderWidth: 3,
                pointRadius: 6,
                pointHitRadius: 10,
                data: randLineData, // [27, 20, 44, 24, 29, 22, 43, 52],
                spanGaps: false
            }]
        };

        // line chart init
        this.lineChart = new Chart(lineChart as HTMLCanvasElement, {
            type: 'line',
            data: lineData,
            options: {
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [],
                    yAxes: [{
                        display: false
                    }]
                }
            }
        });
    }

    private upadateLineChart() {
        const randLineData = [];
        const randLabels = [];
        const points: number = this.chartTimespan === 0 ? this.getDaysOfMonth() :
            this.chartTimespan === 1 ? 24 :
                this.chartTimespan;

        for (let i = 1; i <= points; i++) {
            randLineData.push(Math.floor(Math.random() * 100));
            let label = i.toString();
            if (this.chartTimespan === 1) {
                label += 'h';
            }
            randLabels.push(label);
        }

    }
}
