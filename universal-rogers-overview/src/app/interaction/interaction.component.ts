import {Component, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {DummyService} from '../dummy.service';
import {TransferState, makeStateKey} from '@angular/platform-browser';

const INTERACTION_KEY = makeStateKey < Object[] > ('interaction');

@Component({selector: 'app-interaction', template: `
  <div class="card">
  <div class="card-body">
    <pre>{{interaction | json}}</pre>
  </div>
  </div>
  <ngx-loading [show]="loading"></ngx-loading>
  `, styles: []})
export class InteractionComponent implements OnDestroy {

  interaction : Object;
  interactionSubscription : Subscription;
  loading : boolean = false;

  constructor(private dummyService : DummyService, private state : TransferState) {
    this.initInteractionSubscription();
  }

  initInteractionSubscription() {
    this.interaction = this
      .state
      .get(INTERACTION_KEY, null);
    if (!this.interaction) {
      this.loading = true;
      this.interactionSubscription = this
        .dummyService
        .interactions()
        .subscribe(data => {
          this.interaction = data;
          this
            .state
            .set(INTERACTION_KEY, data);
          this.loading = false;
        });
    }
  }

  ngOnDestroy() {
    if (this.interactionSubscription) {
      this
        .interactionSubscription
        .unsubscribe();
    }
  }
}
