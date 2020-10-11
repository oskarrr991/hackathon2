import { Cases } from './../../moduls/cases.modul';
import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../moduls/user.modul';
import {Keyword} from '../../moduls/keyword.modul';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) {
  }

  private requestUrlErnest = 'http://api.kono.lt:9999/api/getLeaderboard';
  private requestUrlJaroslav = 'http://c7750f685f46.ngrok.io/api/core';
  private requestUrlJaroslav2 = 'http://c7750f685f46.ngrok.io/api/core/getTotalUserCasesByMonth';
  private requestUrlJaroslav3 = 'http://c7750f685f46.ngrok.io/api/core/getTotalUserCases';

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(this.requestUrlErnest);
  }

  getKeywordList(): Observable<Keyword[]> {
    return this.http.get<Keyword[]>(`${this.requestUrlJaroslav}/getTrendingKeywords`);
  }

  getCaseList(): Observable<Cases[]> {
    return this.http.get<Cases[]>(this.requestUrlJaroslav2);
  }

  getTotalCases(): Promise<Cases> {
    return this.http.get<Cases>(this.requestUrlJaroslav3).toPromise();
  }
}
