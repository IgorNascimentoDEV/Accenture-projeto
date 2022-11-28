import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    new Chart('myChart02', {
      type: 'bar',

      data: {
        labels: ['A Entrevistar', 'Aprovados', 'Contratados', 'Inaptos'],
        datasets: [
          {
            label: 'Candidatos',
            data: [26, 29, 23, 15],
            borderColor:['#F1F1F1'],
            borderWidth: [1.5],
            hoverBackgroundColor:['#8A2BE2', '#FFB627', '#63C035', '#FF1D15'],
            hoverBorderColor:['#f2f2f2'],
            backgroundColor: ['#892be21b', '#892be21b', '#892be21b', '#892be21b'],
          },
        ],
      },
      plugins: [ChartDataLabels],
      options: {
        color: 'white'
      },
      
    });
    }

  }

