import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Heroku} from '../heroku';

@Injectable({
  providedIn: 'root'
})
export class OnelinerService {
  private proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  private baseUrl = 'https://uncle-pineapple.herokuapp.com/';
  private httpOptions = {
    headers: new HttpHeaders({
      Token: localStorage.getItem('token')
    })
      .set('Content-Type', 'application/x-www-form-urlencoded')
  };

  constructor(private http: HttpClient) { }

  getOneLiner(): Observable <Heroku> {
    return this.http.get<Heroku>(this.proxyUrl + this.baseUrl + 'joke', this.httpOptions);
  }
}
