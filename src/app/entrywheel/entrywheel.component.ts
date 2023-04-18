import { Component } from '@angular/core';
import { EntrywheelTags } from './entrywheelData';

@Component({
  selector: 'app-entrywheel',
  templateUrl: './entrywheel.component.html',
  styleUrls: ['./entrywheel.component.css']
})
export class EntrywheelComponent {
  readonly entrywheelTags = Array.from(EntrywheelTags);
  entrywheelSelected: string = this.entrywheelTags[0];
}
