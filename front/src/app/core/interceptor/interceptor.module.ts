import { Injectable, NgModule } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Injectable()

export class HttpsRequestInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    if (this.userService.user) {
      const dupReq = req.clone({
        headers: req.headers.set('x-access-token', this.userService.user.token),
      });
      return next.handle(dupReq);
    }
    return next.handle(req.clone());
  }
}


@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsRequestInterceptor,
      multi: true,
    },
  ],
})


export class Interceptor { }