import {Component, OnInit} from '@angular/core';

@Component({selector: 'app-submenu', template: `
  <nav class="navbar bg-light navbar-expand-sm navbar-light">
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">OVERVIEW</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">BILLING & PAYMENT</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">SERVICES</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">PROFILE & SETTINGS</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">INTERACTIONS <span class="badge badge-secondary">11</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">ACTIONS & OFFERS</a>
    </li>
  </ul>
  </nav>
  `, styles: []})
export class SubmenuComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
