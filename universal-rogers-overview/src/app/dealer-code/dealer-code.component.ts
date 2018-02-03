import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dealer-code',
  template: `
  Change the dealer code <i class="fas fa-info-circle"></i> for this session
  <form class="form-inline">
    <input class="form-control" placeHolder="Dealer Code">
    <button type="submit" class="btn btn-light" style="margin-left:10px;">Submit</button>
  </form>
  `,
  styles: []
})
export class DealerCodeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
