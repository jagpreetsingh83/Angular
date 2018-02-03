import {Component, OnInit} from '@angular/core';

@Component({selector: 'app-services', templateUrl: './services.component.html', styleUrls: ['./services.component.css']})
export class ServicesComponent implements OnInit {

  private services : Object[];

  constructor() {}

  ngOnInit() {
    this.services = [
      {
        name: 'Get Wireless',
        title: 'Leaving Overview',
        body: 'To view or make changes to the requested details, you\'ll need to leave OneView ' +
            'and access v21 or SSP.'
      }, {
        name: 'Get Internet',
        title: 'Leaving Overview',
        body: 'To view or make changes to the requested details, you\'ll need to leave OneView ' +
            'and access v21 or SSP.'
      }, {
        name: 'Get TV',
        title: 'Leaving Overview',
        body: 'To view or make changes to the requested details, you\'ll need to leave OneView ' +
            'and access v21 or SSP.'
      }, {
        name: 'Get Home Phone',
        title: 'Leaving Overview',
        body: 'To view or make changes to the requested details, you\'ll need to leave OneView ' +
            'and access v21 or SSP.'
      }, {
        name: 'Get Smart Home Monitoring',
        title: 'Leaving Overview',
        body: 'To view or make changes to the requested details, you\'ll need to leave OneView ' +
            'and access v21 or SSP.'
      }
    ]
  }

}
