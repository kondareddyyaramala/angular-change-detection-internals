import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss']
})
export class ChildTwoComponent implements OnChanges {
  @Input() name: string;

  ngOnChanges(changes) {
    console.log(`Child-two ngOnChanges :::  ${JSON.stringify(changes.name)}`);
  }

}
