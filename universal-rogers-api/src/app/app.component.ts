import {Component} from '@angular/core';

@Component({selector: 'app-root', templateUrl: './app.component.html', styles: []})
export class AppComponent {
    apiList = [
        {
            title: 'Billing Info',
            endpoint: '/v1/accounts/billing/info',
            payload: {
                applicationId: 'Rogers.com',
                accountNumber: '792728743'
            }
        }, {
            title: 'Account Overview',
            endpoint: '/v1/accounts/overview',
            payload: {
                applicationId: 'Rogers.com',
                refresh: false,
                acctNbr: '792728743'
            }
        }, {
            title: 'Preferences',
            endpoint: '/v1/session/preferences',
            payload: {
                userId: 'Tanmay.kar'
            }
        }, {
            title: 'Settings',
            endpoint: '/v1/session/settings',
            payload: {
                name: 'test'
            }
        }, {
            title: 'Customer Info',
            endpoint: '/v1/accounts/customerInfo',
            payload: {
                applicationId: 'Rogers.com',
                accountNumber: '792728743'
            }
        }, {
            title: 'Interactions',
            endpoint: '/v1/accounts/interactions/details',
            payload: {
                accountNumber: '780906111'
            }
        }
    ]
}