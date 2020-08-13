import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { OpenWeatherMapService } from '../services/open-weather-map.service';
import { OpenWeatherMap } from './../shared/models/open-weather-map';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { FnParam } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  public currentWeatherObservable: Observable<OpenWeatherMap.Current>;
  public forecastObervale: Observable<OpenWeatherMap.Forecast>;
  constructor(
    private route: ActivatedRoute,
    private openWeatherMapService: OpenWeatherMapService
  ) {}

  ngOnInit() {
    // 現在の天気
    this.currentWeatherObservable = this.route.params.switchMap((param) => {
      return this.openWeatherMapService.current(param['city']);
    });
    console.log('現在の天気：', this.currentWeatherObservable);

    // １週間の天気予報を取得
    this.forecastObervale = this.route.params.switchMap((param) => {
      return this.openWeatherMapService.forecast(param['city']);
    });
    console.log('１週間の天気予報を取得：', this.forecastObervale);
  }
}
