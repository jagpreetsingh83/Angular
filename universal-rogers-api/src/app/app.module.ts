import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ContainerComponent} from './container/container.component';
import {DummyService} from './dummy.service';
import {LoadingModule} from 'ngx-loading';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './header/header.component';
import {ClientComponent} from './client/client.component';
import {DealerCodeComponent} from './dealer-code/dealer-code.component';
import {SubmenuComponent} from './submenu/submenu.component';
import {BillComponent} from './bill/bill.component';
import {InteractionComponent} from './interaction/interaction.component';
import {ServicesComponent} from './services/services.component';
import {FooterComponent} from './footer/footer.component';
import {AssetBannerComponent} from './asset-banner/asset-banner.component';
import {NoticeComponent} from './notice/notice.component';
import {RowoneComponent} from './rowone/rowone.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    ClientComponent,
    DealerCodeComponent,
    SubmenuComponent,
    BillComponent,
    InteractionComponent,
    ServicesComponent,
    FooterComponent,
    AssetBannerComponent,
    NoticeComponent,
    RowoneComponent
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