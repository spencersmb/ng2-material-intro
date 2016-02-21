import {Component, Injectable} from "angular2/core";

import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/Rx";

function getWindowSize() {
  return {
    height: window.innerHeight,
    width: window.innerWidth
  };
}

@Injectable()
export class Device {
  windowObject$: Observable<any>;

  constructor () {

    let windowSize$ = new BehaviorSubject(this.newWindowSize());
    this.windowObject$ = windowSize$.distinctUntilChanged();
    Observable.fromEvent(window, 'resize')
      .map(this.newWindowSize)
      .subscribe(windowSize$);

  }
  loadWindow(): any {
    return this.windowObject$;
  }
  newWindowSize(): Object{
    return {
      height: window.innerHeight,
      width: window.innerWidth
    };
  }

}
