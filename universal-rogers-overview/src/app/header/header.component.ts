import {Component, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {DummyService} from '../dummy.service';
import {TransferState, makeStateKey} from '@angular/platform-browser';

const AGENT_KEY = makeStateKey < Object[] > ('agent');

@Component({selector: 'app-header', templateUrl: './header.component.html', styleUrls: ['./header.component.css']})
export class HeaderComponent implements OnDestroy {

  agent : Object;
  agentSubscription : Subscription;
  loading : boolean = false;

  constructor(private dummyService : DummyService, private state : TransferState) {
    this.initAgentSubscription();
  }

  initAgentSubscription() {
    this.agent = this
      .state
      .get(AGENT_KEY, null);
    if (!this.agent) {
      this.loading = true;
      this.agentSubscription = this
        .dummyService
        .agent()
        .subscribe(data => {
          this.agent = data;
          this
            .state
            .set(AGENT_KEY, data);
          this.loading = false;
        });
    }
  }

  ngOnDestroy() {
    if (this.agentSubscription) {
      this
        .agentSubscription
        .unsubscribe();
    }
  }
}
