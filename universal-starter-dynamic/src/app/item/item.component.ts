import {Component, OnInit} from '@angular/core';
import {DummyService} from '../dummy.service';
import {Observable} from 'rxjs/Observable';

@Component({selector: 'app-item', templateUrl: './item.component.html', styleUrls: ['./item.component.css']})
export class ItemComponent implements OnInit {

  price$ : Observable < string >;

  constructor(private dummyService : DummyService) {}

  ngOnInit() {
    this.price$ = this
      .dummyService
      .getPrice();
  }
}
