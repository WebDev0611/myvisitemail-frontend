import {
    HttpEvent,
    HttpHandler,
    HttpHeaders,
    HttpInterceptor,
    HttpParams,
    HttpRequest,
    HttpUrlEncodingCodec
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';


@Injectable()
export class ApiRequestsInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // adds baseUrl in case of relative paths
        if (req.url.indexOf('http') < 0) {
            req = req.clone({ url: `${environment.baseUrl}${req.url}` });
        }
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }
        if (!req.headers.has('Accept')) {
            req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        }
        if (!req.headers.has('origin')) {
            req = req.clone({ headers: req.headers.set('origin', environment.origin) });
        }

        return next.handle(req);
    }
}
