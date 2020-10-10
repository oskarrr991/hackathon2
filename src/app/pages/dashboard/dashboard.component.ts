import { Component, OnInit } from '@angular/core';
import {TestService} from "../../services/test.service";
import {Keyword} from "../../../moduls/keyword.modul";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  keywords: Keyword[];
  keywordAppeareanceCount: number[] = [];

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.getDoughnutChart();
   /* this.testService.getKeywordList().subscribe(response => {
      response.forEach(o => console.log(o.keyword + ':' + o.keywordAppeareanceCount + '\n'));
    });*/
    this.testService.getKeywordList().subscribe(response => {
      response.forEach(o => {
        console.log(o.keywordAppeareanceCount);
        this.keywordAppeareanceCount.push(o.keywordAppeareanceCount)
      });
      });

  }

  private getDoughnutChart() {
    if ($("#chartjs-doughnut-chart").length) {
      var DoughnutData = {
        datasets: [{
          data: this.keywordAppeareanceCount,
          backgroundColor: chartColors,
          borderColor: chartColors,
          borderWidth: chartColors
        }],
        labels: [
          'Data 1',
          'Data 2',
          'Data 3',
        ]
      };
      var DoughnutOptions = {
        responsive: true,
        animation: {
          animateScale: true,
          animateRotate: true
        }
      };
      var doughnutChartCanvas = $("#chartjs-doughnut-chart").get(0).getContext("2d");
      var doughnutChart = new Chart(doughnutChartCanvas, {
        type: 'doughnut',
        data: DoughnutData,
        options: DoughnutOptions
      });
    }
  }

}
