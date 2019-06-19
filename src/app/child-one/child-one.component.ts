import { Component, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildOneComponent implements OnChanges {
  @Input() name: string;

  ngOnChanges(changes) {
    console.log(`Child-one ngOnChanges :::  ${JSON.stringify(changes.name)}`);
  }

}
