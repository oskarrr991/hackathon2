import {Component, OnInit} from '@angular/core';
import {TestService} from "../../services/test.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  keywords: string[] = [];
  keywordAppeareanceCount: number[] = [];
  chartColors = ["#696ffb", "#7db8f9", "#05478f", "#00cccc", "#6CA5E0", "#1A76CA"];

  constructor(private testService: TestService) {
  }

  ngOnInit(): void {
    this.testService.getKeywordList().subscribe(response => {
      response.forEach(o => {
        this.keywords.push(o.keyword)
        this.keywordAppeareanceCount.push(o.keywordAppeareanceCount)
      });
      this.calculateDoughnutChart();
    });
  }

  private calculateDoughnutChart() {
    if ($("#chartjs-doughnut-chart").length) {
      var DoughnutData = {
        datasets: [{
          data: this.keywordAppeareanceCount,
          backgroundColor: this.chartColors,
          borderColor: this.chartColors,
          borderWidth: this.chartColors
        }],
        labels: this.keywords
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
