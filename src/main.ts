import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { Observable } from 'rxjs';
import { AppModule } from './app/';

Observable.prototype.debug = function(message: string) {
  return this.do(
    nextValue => {
      if (!environment.production) {
        console.log(message, nextValue);
      }
    },
    error => {
      if (!environment.production) {
        console.error(message, error);
      }
    },
    () => {
      if (!environment.production) {
        console.error('Observable completed - ', message);
      }
    }
  );
};


declare module 'rxjs/Observable' {
  interface Observable<T> {
    debug: (...any) => Observable<T>;
  }
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
