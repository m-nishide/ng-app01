import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { OpenWeatherMap } from '../shared/models/open-weather-map';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class OpenWeatherMapService {
  private API = environment.openWeatherMap.api;
  private APP_ID = environment.openWeatherMap.apiKey;
  constructor(public http: HttpClient) {}

  /**
   * 現在の天気を取得
   * @param city
   * @returns {Observable<OpenWeatherMap.WeatherCurrent>}
   */
  current(city: string): Observable<OpenWeatherMap.Current> {
    let params: HttpParams = new HttpParams();
    const data = {
      appid: this.APP_ID,
      units: 'metric',
      lang: 'ja',
      q: city,
    };
    Object.keys(data).forEach(function (key) {
      params = params.set(key, data[key]);
    });
    return this.http.get<OpenWeatherMap.Current>(`${this.API}/weather`, {
      params,
    });
  }
  /**
   * 1週間の天気予測を取得
   * @param city
   * @returns {Observable<OpenWeatherMap.Forecast>}
   */
  forecast(city: string): Observable<OpenWeatherMap.Forecast> {
    let params: HttpParams = new HttpParams();
    const data = {
      appid: this.APP_ID,
      // units: 'metric',
      lang: 'ja',
      exclude: 'daily',
      lat: 35.681236,
      lon: 139.767125,
      // zip: '100-0005,JP',
      // cnt: 7,
      // q: city,
    };
    Object.keys(data).forEach(function (key) {
      params = params.append(key, data[key]);
    });
    return this.http.get<OpenWeatherMap.Forecast>(
      // `${this.API}/forecast/daily`,
      `${this.API}/onecall`,
      {
        params,
      }
    );
  }
}
