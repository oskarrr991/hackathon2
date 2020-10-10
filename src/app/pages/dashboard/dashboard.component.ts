import {Component, OnInit} from '@angular/core';
import {TestService} from '../../services/test.service';
import {User} from '../../../moduls/user.modul';

declare function getDoughnutChart(keywordAppearanceCount: number[], chartColors: string[], keywords: string[]): any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: User[] = [];
  maps: Map<string, string>[] = [];
  keywords: string[] = [];
  keywordAppearanceCount: number[] = [];
  chartColors = ['#696ffb', '#7db8f9', '#05478f', '#00cccc', '#6CA5E0', '#1A76CA'];

  constructor(private testService: TestService) {
  }

  ngOnInit(): void {
        this.testService.getKeywordList().subscribe(response => {
          response.forEach(o => {
            this.keywords.push(o.keyword);
            this.keywordAppearanceCount.push(o.keywordAppearanceCount);
          });
          getDoughnutChart(this.keywordAppearanceCount, this.chartColors, this.keywords);
        });
  }
}
