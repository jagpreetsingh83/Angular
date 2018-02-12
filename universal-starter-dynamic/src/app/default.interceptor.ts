import { Injectable, PLATFORM_ID, Inject, Injector } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {

    cookies: string;

    constructor(@Inject(PLATFORM_ID) private platformId: string, private injector: Injector) {
        if (!isPlatformBrowser(this.platformId)) {
            this.cookies = this
                .injector
                .get(REQUEST).headers.cookie;
        }
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        req = req.clone({
            headers: req.headers.set('Cookie', this.cookies)
        });
        return next.handle(req);
    }
}