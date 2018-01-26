import {Component} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({selector: 'app-root', template: `
    <div>
      <p *ngFor="let content of contents">
        {{content}}
      </p>
    </div>
  `, styles: []})
export class AppComponent {
  contents : string[] = [];
  ngOnInit() {
    for (let i = 1; i <= 10 * 1000; i++) {
      this
        .contents
        .push(`Content ${i}`);
    }
  }
}