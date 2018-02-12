import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ItemComponent } from './item/item.component';
import { DummyService } from './dummy.service';
import { LoadingModule } from 'ngx-loading';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DefaultInterceptor } from './default.interceptor';
import * as xhr2 from 'xhr2';
xhr2.prototype._restrictedHeaders = {};

@NgModule({
  declarations: [
    AppComponent, ContainerComponent, ItemComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    LoadingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    BrowserTransferStateModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: DefaultInterceptor,
    multi: true,
  }, DummyService],
  bootstrap: [AppComponent]
})
export class AppModule { }