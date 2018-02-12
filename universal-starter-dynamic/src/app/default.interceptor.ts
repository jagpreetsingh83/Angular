import { Injectable, PLATFORM_ID, Inject, Injector } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {

    cookies: string;
    ssr: boolean;

    constructor(@Inject(PLATFORM_ID) private platformId: string, private injector: Injector) {
        this.ssr = !isPlatformBrowser(this.platformId);
        if (this.ssr) {
            this.cookies = this
                .injector
                .get(REQUEST).headers.cookie;
        }
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (this.ssr) {
            /**
             * Interceptor For:
             *  1:  Attaching the Cookie.
             *  2:  Prefixing the domain since SSR requires absolute URL.
             */
            req = req.clone({
                headers: req.headers.set('Cookie', this.cookies),
                url: `http://localhost:5000${req.url}`
            });
        }
        return next.handle(req);
    }
}