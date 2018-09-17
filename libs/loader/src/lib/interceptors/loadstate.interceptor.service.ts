import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingBarService } from '../services/loading-bar.service';
/*
* taken from https://github.com/aitboudad/ngx-loading-bar/blob/master/packages/core/src/loading-bar.service.ts
*/
@Injectable()
export class LoadingBarInterceptor implements HttpInterceptor {
  constructor(private loadingBar: LoadingBarService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.headers.has('ignoreLoadingBar')) {
      return next.handle(
        req.clone({ headers: req.headers.delete('ignoreLoadingBar') })
      );
    }

    const r = next.handle(req);

    let started = false;
    const responseSubscribe = r.subscribe.bind(r);
    r.subscribe = (...args) => {
      this.loadingBar.start();
      started = true;
      return responseSubscribe(...args);
    };

    return r.pipe(finalize(() => started && this.loadingBar.complete()));
  }
}
