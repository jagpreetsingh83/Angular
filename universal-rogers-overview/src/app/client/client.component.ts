import {Component, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {DummyService} from '../dummy.service';
import {TransferState, makeStateKey} from '@angular/platform-browser';

const CLIENT_KEY = makeStateKey < Object[] > ('client');

@Component({selector: 'app-client', templateUrl: './client.component.html', styleUrls: ['./client.component.css']})
export class ClientComponent implements OnDestroy {

  client : Object;
  clientSubscription : Subscription;
  loading : boolean = false;

  constructor(private dummyService : DummyService, private state : TransferState) {
    this.initClientSubscription();
  }

  initClientSubscription() {
    this.client = this
      .state
      .get(CLIENT_KEY, null);
    if (!this.client) {
      this.loading = true;
      this.clientSubscription = this
        .dummyService
        .customer()
        .subscribe(data => {
          this.client = data;
          this
            .state
            .set(CLIENT_KEY, data);
          this.loading = false;
        });
    }
  }

  ngOnDestroy() {
    if (this.clientSubscription) {
      this
        .clientSubscription
        .unsubscribe();
    }
  }

}
