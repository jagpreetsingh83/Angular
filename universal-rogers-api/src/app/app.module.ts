import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DummyService} from './dummy.service';
import {LoadingModule} from 'ngx-loading';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {PanelComponent} from './panel/panel.component';

@NgModule({
  declarations: [
    AppComponent, PanelComponent
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