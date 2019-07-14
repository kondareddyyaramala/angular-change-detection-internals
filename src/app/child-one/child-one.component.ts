import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Person } from '../person.interface';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildOneComponent {
  @Input() person: Person;
}
