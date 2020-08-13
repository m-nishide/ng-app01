import { LoadingService } from './services/loading.service';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'ng-forecast';
  public loadingObservable: Observable<boolean>;
  constructor(public loadingService: LoadingService) {}
  ngOnInit() {
    this.loadingObservable = this.loadingService.loading;
  }
}
