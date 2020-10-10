import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../moduls/user.modul";
import {Keyword} from "../../moduls/keyword.modul";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  private requestUrlErnest = 'http://api.kono.lt:9999/api/getExperts?keyword=Tensorflow';
  private requestUrlJaroslav = 'http://a6620c7796c1.ngrok.io/api/core';

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(this.requestUrlErnest);
  }

  getKeywordList(): Observable<Keyword[]> {
    return this.http.get<Keyword[]>(`${this.requestUrlJaroslav}/getTrendingKeywords`);
  }

}
