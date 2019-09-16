import { HttpHandler, HttpRequest } from '@angular/common/http';

export function MatchUrl(props) {
    return function(target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
        const originalMethod: Function = descriptor.value;
        descriptor.value = function(req: HttpRequest<any>, next: HttpHandler) {
            if (req.url.indexOf(props)) {
                return originalMethod.apply(this, arguments);
            }
            return next.handle(req);
        };
        return descriptor;
    };
}
