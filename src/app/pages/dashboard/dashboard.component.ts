import { Cases } from './../../../moduls/cases.modul';
import {Component, OnInit} from '@angular/core';
import {TestService} from '../../services/test.service';
import {User} from '../../../moduls/user.modul';

declare function getDoughnutChart(keywordAppearanceCount: number[], chartColors: string[], keywords: string[]): any;
declare function getLineChart(receivedCases: number[], solvedCases: number[], month: string[]): any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userReceivedCases: number;
  userSolvedCases: number;
  totalReceivedCases: number;
  totalSolvedCases: number;
  monthNumber: number;
  months: string[] = [];
  receivedCases: number[] = [];
  solvedCases: number[] = [];
  users: User[] = [];
  cases: Cases[] = [];
  urls: string[] = [];
  imageUrls: string[] = [];
  displayNames: string[] = [];
  maps: Map<string, string>[] = [];
  keywords: string[] = [];
  keywordAppearanceCount: number[] = [];
  chartColors = ['#696ffb', '#7db8f9', '#05478f', '#00cccc', '#6CA5E0', '#1A76CA'];
  allMonths = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

  constructor(private testService: TestService) {
  }

  ngOnInit(): void {
    this.testService.getUserList().subscribe(response => {
      this.users = response;
      response.forEach(user => {
        this.urls.push(user.avatar);
        this.displayNames.push(user.displayName);
      });
    });
    this.testService.getKeywordList().subscribe(response => {
      response.forEach(o => {
        this.keywords.push(o.keyword);
        this.keywordAppearanceCount.push(o.keywordAppearanceCount)
        this.keywords.push(o.keyword);
        this.keywordAppearanceCount.push(o.keywordAppearanceCount);
      });
      getDoughnutChart(this.keywordAppearanceCount, this.chartColors, this.keywords);
    });
    this.testService.getCaseList().subscribe(response => {
      response.forEach(keyword => {
        this.receivedCases.push(keyword.totalReceivedCases);
        this.solvedCases.push(keyword.totalSolvedCases);
        this.monthNumber = this.getMonth(keyword.startPeriod);
        this.months.push(this.allMonths[this.monthNumber]);
      });
      getLineChart(this.receivedCases, this.solvedCases, this.months);
    });
    this.testService.getTotalCases().then(data => {
      // this.totalReceivedCases = data[0].totalReceivedCases;
      console.log(data.);
      // console.log(data.totalSolvedCases);
    });
  }

  getMonth(startPeriod): number {
    const date = new Date(startPeriod);
    return date.getMonth() + 1;
  }
}
