import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class RequestCacheService {

    cache = new Map();

    constructor() { }

    get(req: HttpRequest<any>): HttpResponse<any> | undefined {
        const url = req.urlWithParams;
        const cachedResponse = this.cache.get(url);
        if (cachedResponse) {
            return cachedResponse;
        }
        return undefined;
    }

    put(req: HttpRequest<any>, res: HttpResponse<any>): void {
        const url = req.urlWithParams;
        this.cache.set(url, res);
    }
}
