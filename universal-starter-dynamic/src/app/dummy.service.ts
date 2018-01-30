import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class DummyService {

  constructor() {}

  getPrice() : Observable < string > {
    return Observable.of((Math.random() * 1000).toFixed(2)).delay(5000);
  }

}
