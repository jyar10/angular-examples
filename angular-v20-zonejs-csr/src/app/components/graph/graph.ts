import { Component, Input } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexOptions,
} from 'ng-apexcharts';

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [NgApexchartsModule],
  template: `
    <apx-chart
      [series]="series"
      [chart]="chartOptions.chart"
      [xaxis]="chartOptions.xaxis"
      [dataLabels]="chartOptions.dataLabels"
      [stroke]="chartOptions.stroke"
    ></apx-chart>
  `
})
export class Graph {
  @Input() series: ApexAxisChartSeries = [
    { name: 'Default Series', data: [10, 20, 30] }
  ];

  private readonly defaultChartOptions: Required<ApexOptions> = {
    chart: {
      id: 'main-chart',
      type: 'line',
      height: 350,
      toolbar: { show: true },
      foreColor: '#333',
      background: '#fff',
      fontFamily: 'Arial',
      offsetX: 0,
      offsetY: 0,
      dropShadow: { enabled: false, top: 0, left: 0, blur: 0, opacity: 0.5 },
      animations: {
        enabled: true,
        speed: 500,
        animateGradually: { enabled: true, delay: 100 },
        dynamicAnimation: { enabled: true, speed: 300 }
      },
      sparkline: { enabled: false },
      selection: { enabled: false },
      zoom: { enabled: false },
      events: {}
    },
    annotations: {
      xaxis: [],
      yaxis: [],
      points: []
    },
    colors: ['#008FFB'],
    series: [],
    labels: [],
    xaxis: {
      type: 'category',
      categories: ['Jan', 'Feb', 'Mar'],
      labels: { show: true, rotate: 0 },
      axisBorder: { show: true },
      axisTicks: { show: true },
      title: { text: '' },
      tooltip: { enabled: true },
      crosshairs: {
        show: true,
        width: 1,
        position: 'back',
        opacity: 0.9,
        fill: {
          type: 'solid',
          color: '#B1B9C4',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5
          }
        },
        stroke: { color: '#b6b6b6', width: 1, dashArray: 0 }
      }
    },
    yaxis: {
      show: true,
      labels: { show: true },
      axisBorder: { show: true },
      axisTicks: { show: true },
      title: { text: '' }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      width: 2,
      dashArray: 0
    },
    dataLabels: {
      enabled: false,
      background: {
        enabled: true,
        borderColor: '#fff',
        borderRadius: 2,
        borderWidth: 1,
        foreColor: '#fff',
        padding: 4,
        opacity: 0.9,
        dropShadow: {
          enabled: false,
          top: 1,
          left: 1,
          blur: 1,
          color: '#000',
          opacity: 0.45
        }
      }
    },
    fill: { type: 'solid', opacity: 0.6 },
    grid: {
      show: true,
      borderColor: '#e0e0e0',
      strokeDashArray: 4,
      position: 'back',
      xaxis: { lines: { show: true } },
      yaxis: { lines: { show: true } },
      row: { colors: [], opacity: 0.5 },
      column: { colors: [], opacity: 0.5 }
    },
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      floating: false,
      fontSize: '14px',
      markers: {
      },
      itemMargin: {
        horizontal: 5,
        vertical: 0
      },
      onItemClick: { toggleDataSeries: true },
      onItemHover: { highlightDataSeries: true }
    },
    markers: {
      size: 4,
      strokeWidth: 0,
      strokeColors: '#fff',
      fillOpacity: 1,
      shape: 'circle',
      hover: { size: 6 }
    },
    responsive: [],
    title: {
      text: '',
      align: 'left',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#263238'
      }
    },
    subtitle: {
      text: '',
      align: 'left',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: '14px',
        fontWeight: 'normal',
        color: '#9699a2'
      }
    },
    tooltip: {
      enabled: true,
      shared: true,
      followCursor: false,
      intersect: false,
      theme: 'light'
    },
    theme: {
      mode: 'light',
      palette: 'palette1',
      monochrome: {
        enabled: false,
        color: '#255aee',
        shadeTo: 'light',
        shadeIntensity: 0.65
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '70%',
      }
    },
    noData: {
      text: 'No Data Available',
      align: 'center',
      verticalAlign: 'middle',
      offsetX: 0,
      offsetY: 0,
      style: {
        color: '#666',
        fontSize: '14px',
        fontFamily: 'Arial'
      }
    },
    forecastDataPoints: {
      count: 0,
      fillOpacity: 0.5,
      dashArray: 4
    },
    parsing: {
    },
    states: {
      hover: {
        filter: { type: 'darken' }
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: { type: 'darken' }
      }
    }
  };

  private _chartOptions: Required<ApexOptions> = this.defaultChartOptions;

  @Input() set chartOptions(input: ApexOptions) {
    this._chartOptions = {
      ...this.defaultChartOptions,
      ...input,
      chart: { ...this.defaultChartOptions.chart, ...input.chart },
      xaxis: { ...this.defaultChartOptions.xaxis, ...input.xaxis },
      stroke: { ...this.defaultChartOptions.stroke, ...input.stroke },
      dataLabels: { ...this.defaultChartOptions.dataLabels, ...input.dataLabels }
    };
  }

  get chartOptions(): Required<ApexOptions> {
    return this._chartOptions;
  }
}
