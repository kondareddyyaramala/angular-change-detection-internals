import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {
  public appName = 'Angular';

  private localVar = null;

  changeName() {
    this.appName = `Angular - ${Math.random()}`;
  }

  doNothing() {
    this.localVar = 'something';
    console.log('I do nothing');
  }

  ngOnChanges(changes) {
    console.log(`App comp ngOnChanges  :::  ${JSON.stringify(changes.name)}`);
  }
}
