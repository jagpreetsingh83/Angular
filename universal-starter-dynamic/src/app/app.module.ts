import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ContainerComponent} from './container/container.component';
import {ItemComponent} from './item/item.component';
import {DummyService} from './dummy.service';
import {LoadingModule} from 'ngx-loading';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent, ContainerComponent, ItemComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    LoadingModule,
    NgbModule.forRoot()
  ],
  providers: [DummyService],
  bootstrap: [AppComponent]
})
export class AppModule {}