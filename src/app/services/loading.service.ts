import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoadingService {
  private _count = 0;
  private _subject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  get loading(): Observable<boolean> {
    return this._subject.asObservable();
  }

  // startで呼ばれる回数を保持
  start() {
    ++this._count;
    this._subject.next(true);
  }

  // カウントがゼロになったときにローディング終了
  stop(force: boolean = false) {
    --this._count;
    if (force || this._count === 0) {
      this._count = 0;
      this._subject.next(false);
    }
  }
}
