import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {DummyService} from '../dummy.service';

@Component({selector: 'app-container', templateUrl: './container.component.html', styleUrls: ['./container.component.css']})
export class ContainerComponent implements OnDestroy {

  items : Object[] = [];
  itemsSubscription : Subscription;
  loading : boolean = true;

  constructor(private dummyService : DummyService) {
    this.initItemsSubscription();
  }

  initItemsSubscription() {
    this.loading = true;
    this.itemsSubscription = this
      .dummyService
      .getItems()
      .subscribe(items => {
        this.items = items;
        this.loading = false;
      })
  }

  ngOnDestroy() {
    if (this.itemsSubscription) {
      this
        .itemsSubscription
        .unsubscribe();
    }
  }

}
