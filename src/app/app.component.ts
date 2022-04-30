import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';
  lineChartData: ChartDataSets[] = [
    { data: [2500, 2000, 1500, 2000, 2500, 3200, 3860, 3500, 3300, 3100, 3400, 3700, 4500], label: 'Completed' },
    { data: [1500, 2200, 2500, 3100, 3500, 3000, 2560, 2000, 2500, 3300, 3800, 3300, 4500], label: 'Pending' },
  ];
  lineChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  lineChartOptions = {
    responsive: true,
    scales: {
      yAxes: [
        {
          gridLines: {
            drawticks: false,
          },
          ticks: {
            min: 0,
            stepSize: 1000,
            max: 5000,
          }
        },
      ],
      xAxes: [
        {
          gridLines: {
            drawticks: false,
          }
        },
      ],
    }
  };
  lineChartColors: Color[] = [
    {
      borderColor: 'red',
      backgroundColor: 'rgb(243, 87, 80, 0.5)',
    },
    {
      borderColor: 'green',
      backgroundColor: 'rgb(80, 243, 87,0.5)',
    },
  ];
  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType = 'line';
  legends = ['Completed', 'Pending']
  events = [
    { eventName: 'Event Name', time: '9:12 P.M', activity: 'Running' },
    { eventName: 'Event Name', time: '9:11 P.M', activity: 'Idle' },
    { eventName: 'Event Name', time: '9:10 P.M', activity: 'Done' }
  ]
  tableData = [
    { event: 'Event 1', progress: 70, timestamp: '26/11/2021 21:12', origin: 'Backend', mobile: 9879474785, remark: 'Remark 1' },
    { event: 'Event 2', progress: 50, timestamp: '07/01/2020 11:12', origin: 'Backend', mobile: 7544677885, remark: 'Remark 2' },
    { event: 'Event 3', progress: 80, timestamp: '10/04/2018 10:52', origin: 'Backend', mobile: 9343476655, remark: 'Remark 3' },
    { event: 'Event 4', progress: 40, timestamp: '16/11/2019 12:03', origin: 'Backend', mobile: 9886754335, remark: 'Remark 4' }
  ]

  chartOptions = {
    responsive: true,
    legend: {
      labels: {
        padding: 4
      }

    },
    scales: {
      yAxes: [
        {
          display: false,
          ticks: {
            padding: 4
          }
        },

      ],
      xAxes: [
        {
          gridLines: {
            drawticks: false,
            display: false
          },
          ticks: {
            padding: 8
          }
        }
      ]
    }
  }

  labels = ['16', '17', '18', '19'];

  chartData = [
    {
      label: '1st Year',
      data: [15, 26, 8, 30],
      barThickness: 4
    },
    {
      label: '2nd Year',
      data: [12, 18, 14, 9],
      barThickness: 4
    }
  ];

  colors = [
    {
      backgroundColor: 'rgb(80, 243, 87,0.5)'
    },
    {
      backgroundColor: 'rgb(243, 87, 80, 0.5)'
    }
  ]
}
