import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { RequestCacheService } from './request-cache.service';
import { MatchUrl } from './match-url-decorator';

@Injectable({ providedIn: 'root' })
export class CachingInterceptor implements HttpInterceptor {

    constructor(private requestCache: RequestCacheService) { }

    @MatchUrl('/api/user/setting')
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const cachedResponse = this.requestCache.get(req);
        return cachedResponse ? of(cachedResponse) : this.cacheResponse(req, next);

    }

    cacheResponse(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap(response => {
                if (response instanceof HttpResponse) {
                    this.requestCache.put(req, response);
                }
            })
        );
    }
}
