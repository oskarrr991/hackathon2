import {Cases} from './../../moduls/cases.modul';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../moduls/user.modul';
import {Keyword} from '../../moduls/keyword.modul';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) {
  }

  private requestUrlErnest = 'http://api.kono.lt:9999/api/';
  private requestUrlJaroslav = 'http://c7750f685f46.ngrok.io/api/core';

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(`${this.requestUrlErnest}/getLeaderboard`);
  }

  getKeywordList(): Observable<Keyword[]> {
    return this.http.get<Keyword[]>(`${this.requestUrlJaroslav}/getTrendingKeywords`);
  }

  getCaseList(): Observable<Cases[]> {
    return this.http.get<Cases[]>(`${this.requestUrlJaroslav}/getTotalUserCasesByMonth`);
  }

  getTotalCases(): Promise<Cases> {
    return this.http.get<Cases>(`${this.requestUrlJaroslav}/getTotalUserCases`).toPromise();
  }

  getUser(username: string): Observable<User> {
    return this.http.get<User>(`${this.requestUrlErnest}/getExpert/${username}`);
  }
}
