import { Observable } from 'rxjs/Observable';
import { LoadingService } from './services/loading.service';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';

import 'rxjs/add/operator/finally';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  // 通信傍受処理
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadingService.start();
    return next.handle(request).finally(() => {
      this.loadingService.stop();
    });
  }
}
