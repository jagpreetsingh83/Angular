import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {DummyService} from '../dummy.service';
import {TransferState, makeStateKey} from '@angular/platform-browser';
import {Apimeta} from '../apimeta';

const DATA_KEY = makeStateKey < Object[] > ('data');

@Component({selector: 'app-panel', templateUrl: './panel.component.html', styleUrls: ['./panel.component.css']})
export class PanelComponent implements OnInit,
OnDestroy {

  @Input()apiDetail : Apimeta;

  data : Object;
  dataSubscription : Subscription;
  loading : boolean = false;

  constructor(private dummyService : DummyService, private state : TransferState) {}

  ngOnInit() {
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
        .fetchData(this.apiDetail.endpoint, this.apiDetail.payload)
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
