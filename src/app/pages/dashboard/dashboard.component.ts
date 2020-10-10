import {Component, OnInit} from '@angular/core';
import { Months } from 'src/moduls/months.modul';
import { User } from 'src/moduls/user.modul';
import {TestService} from '../../services/test.service';

declare function getDoughnutChart(keywordAppearanceCount: number[], chartColors: string[], keywords: string[]): any;
declare function getLineChart(months: Months[]): any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: User[] = [];
  urls: string[] = [];
  keywords: string[] = [];
  imageUrls: string[] = [];
  displayNames: string[] = [];
  keywordAppearanceCount: number[] = [];
  chartColors = ['#696ffb', '#7db8f9', '#05478f', '#00cccc', '#6CA5E0', '#1A76CA'];
  months: Months[] = [];

  constructor(private testService: TestService) {
  }

  ngOnInit(): void {
    this.testService.getUserList().subscribe(response => {
      this.users = response;
      response.forEach(user => {
        console.log(user);
        this.urls.push(user.avatar);
        this.displayNames.push(user.displayName);
      });
    });
    this.testService.getKeywordList().subscribe(response => {
      response.forEach(o => {
        this.keywords.push(o.keyword);
        this.keywordAppearanceCount.push(o.keywordAppearanceCount);
      });
      getDoughnutChart(this.keywordAppearanceCount, this.chartColors, this.keywords);
    });
    this.months = this.testService.getMonthData();
  }
}
