import {Component, OnInit} from '@angular/core';
import {TestService} from "../../services/test.service";

declare function getDoughnutChart(keywordAppeareanceCount: number[], chartColors: string[], keywords: string[]): any;

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
      getDoughnutChart(this.keywordAppeareanceCount, this.chartColors, this.keywords);
    });
  }
}
