import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { SCREEN_SIZE } from '../enum/screen-size.enum';
@Injectable({
  providedIn: 'root'
})
export class ResizeService {

  get onResize$(): Observable<SCREEN_SIZE> {
    return this.resizeSubject.asObservable().pipe(distinctUntilChanged());
  }

  private resizeSubject: Subject<SCREEN_SIZE>;

  constructor() {
    this.resizeSubject = new Subject();
  }

  onResize(size: SCREEN_SIZE) {
    this.resizeSubject.next(size);
  }

  getCountsMovieByRow(size: number): number {
    switch (size) {
      case 4:
        return 4;
        break;
      case 3:
        return 4;
        break;
      case 2:
        return 3;
        break;
      case 1:
        return 2;
        break;
      case 0:
        return 1;
        break;
      default:
        return 1;
    }
  }

  
}
