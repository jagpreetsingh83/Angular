import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ContainerComponent} from './container/container.component';
import {DummyService} from './dummy.service';
import {LoadingModule} from 'ngx-loading';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { ClientComponent } from './client/client.component';

@NgModule({
  declarations: [
    AppComponent, ContainerComponent, HeaderComponent, ClientComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    LoadingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    BrowserTransferStateModule
  ],
  providers: [DummyService],
  bootstrap: [AppComponent]
})
export class AppModule {}