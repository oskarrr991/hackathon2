import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../modules/user.module";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  private requestUrlErnest = 'api.kono.lt:9999/api/getExperts?keyword=Tensorflow';

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(this.requestUrlErnest);
  }
}
