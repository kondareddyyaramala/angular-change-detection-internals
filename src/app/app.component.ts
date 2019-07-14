import { Component } from '@angular/core';
import { Person } from './person.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public person: Person = {
    firstName: 'John',
    lastName: 'Doe'
  }

  getRandomNum = () => Math.random();
  
  changeFirstName() {
    this.person.firstName = `John - ${this.getRandomNum()}`;
  }

  createNewObj() {
    this.person = {
      ...this.person,
      firstName: `John - ${this.getRandomNum()}`
    }
  }
}
