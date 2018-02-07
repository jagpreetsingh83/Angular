import {Component, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {DummyService} from '../dummy.service';
import {TransferState, makeStateKey} from '@angular/platform-browser';

const DATA_KEY = makeStateKey < Object[] > ('overview');

@Component({selector: 'app-account-overview', templateUrl: './account-overview.component.html', styleUrls: ['./account-overview.component.css']})
export class AccountOverviewComponent implements OnDestroy {

  data : Object;
  dataSubscription : Subscription;
  loading : boolean = false;

  constructor(private dummyService : DummyService, private state : TransferState) {
    this.initDataSubscription();
  }

  initDataSubscription() {
    this.data = this
      .state
      .get(DATA_KEY, null);
    if (!this.data) {
      this.loading = true;
      this.dataSubscription = this
        .dummyService
        .overview()
        .subscribe(data => {
          this.data = data;
          this
            .state
            .set(DATA_KEY, data);
          this.loading = false;
        });
    }
  }

  ngOnDestroy() {
    if (this.dataSubscription) {
      this
        .dataSubscription
        .unsubscribe();
    }
  }
}
