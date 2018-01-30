import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {DummyService} from '../dummy.service';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {Item} from '../item';

@Component({selector: 'app-item', templateUrl: './item.component.html', styleUrls: ['./item.component.css']})
export class ItemComponent implements OnDestroy {

  price : string;
  priceSubscription : Subscription;
  loading : boolean = false;

  @Input()phone : Item;

  constructor(private dummyService : DummyService) {
    this.initPriceSubscription();
  }

  initPriceSubscription() {
    this.loading = true;
    this.priceSubscription = this
      .dummyService
      .getPrice()
      .subscribe(p => {
        this.price = p;
        this.loading = false;
      })
  }

  ngOnDestroy() {
    if (this.priceSubscription) {
      this
        .priceSubscription
        .unsubscribe();
    }
  }
}
