import {Component, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {DummyService} from '../dummy.service';
import {TransferState, makeStateKey} from '@angular/platform-browser';

const BILL_KEY = makeStateKey < Object[] > ('bill');

@Component({selector: 'app-bill', template: `
  <div class="card">
  <div class="card-body">
    <pre>{{bill | json}}</pre>
  </div>
  </div>
  <ngx-loading [show]="loading"></ngx-loading>
  `, styles: []})
export class BillComponent implements OnDestroy {

  bill : Object;
  billSubscription : Subscription;
  loading : boolean = false;

  constructor(private dummyService : DummyService, private state : TransferState) {
    this.initBillSubscription();
  }

  initBillSubscription() {
    this.bill = this
      .state
      .get(BILL_KEY, null);
    if (!this.bill) {
      this.loading = true;
      this.billSubscription = this
        .dummyService
        .bill()
        .subscribe(data => {
          this.bill = data;
          this
            .state
            .set(BILL_KEY, data);
          this.loading = false;
        });
    }
  }

  ngOnDestroy() {
    if (this.billSubscription) {
      this
        .billSubscription
        .unsubscribe();
    }
  }
}
