import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { Item } from './item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injector } from '@angular/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { isPlatformBrowser } from '@angular/common';

import * as xhr2 from 'xhr2';
xhr2.prototype._restrictedHeaders = {};

/*
const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
*/

@Injectable()
export class DummyService {

        delay: number = 1000;

        cookies: string;

        constructor(private http: HttpClient, private injector: Injector, @Inject(PLATFORM_ID)
        private platformId: string) {
                if (!isPlatformBrowser(this.platformId)) {
                        this.cookies = this
                                .injector
                                .get(REQUEST).headers.cookie;
                }
        }

        /*
        items : Object[] = [
                new Item(1, 'IPhone X', 'https://www.rogers.com/web/totes/cms/ute/rogers/consumer/BFA/images/wireless/dev' +
                                'ices/apple/UTE-iPhoneX-silver-225x338-01.png'),
                new Item(2, 'IPhone 8', 'https://www.rogers.com/web/totes/cms/ute/rogers/consumer/BFA/images/wireless/dev' +
                                'ices/apple/UTE-iPhone-8-grey-800x1200-01.png'),
                new Item(3, 'IPhone 7', 'https://www.rogers.com/web/totes/cms/ute/rogers/consumer/BFA/images/wireless/dev' +
                                'ices/apple/apple-iphone-7-black-front-IP732BLK.png'),
                new Item(4, 'Galaxy S8', 'https://www.rogers.com/web/totes/cms/ute/rogers/consumer/BFA/images/wireless/dev' +
                                'ices/samsung/UTE-SamsungS8-800x1200-01-S8BLK.png'),
                new Item(5, 'Google Pixel 2', 'https://www.rogers.com/web/totes/cms/ute/rogers/consumer/BFA/images/wireless/dev' +
                                'ices/google/UTE-google-pixel2-wht-225x338-01.png'),
                new Item(6, 'LG G6', 'https://www.rogers.com/web/totes/cms/ute/rogers/consumer/BFA/images/wireless/dev' +
                                'ices/lg/UTE-LGG6-800x1200-01-G6PLT.png'),
                new Item(7, 'LG V3', 'https://www.rogers.com/web/totes/cms/ute/rogers/consumer/BFA/images/wireless/dev' +
                                'ices/lg/UTE-LGV30-225x338-01.png'),
                new Item(8, 'Huawei P10', 'https://www.rogers.com/web/totes/cms/ute/rogers/consumer/BFA/images/wireless/dev' +
                                'ices/huawei/UTE-huawei-p10-blk-800x1200-01-EN-P10BLK-.png')
        ];
        */

        getPrice(): Observable<string> {
                // return Observable.of((Math.random() * 1000).toFixed(2)).delay(this.delay);
                console.log('=======  COMPLETE HEADER ========');
                const cookieStr = this.cookies;
                console.log(cookieStr);
                return this.http.get<string>('http://localhost:5000/api/price', {
                        headers: {
                                Cookie: cookieStr
                        }
                });
        }

        getItems(): Observable<Object[]> {
                // return Observable.of(this.items).delay(this.delay);
                console.log('=======  COMPLETE HEADER ========');
                const cookieStr = this.cookies;
                console.log(cookieStr);
                return this.http.get<Object[]>('http://localhost:5000/api/phones', {
                        headers: {
                                Cookie: cookieStr
                        }
                });
        }

}
