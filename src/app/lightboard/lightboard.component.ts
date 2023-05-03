import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Row1, Row2, Row3 } from '../board';

@Component({
  selector: 'app-lightboard',
  templateUrl: './lightboard.component.html',
  styleUrls: ['./lightboard.component.css']
})
export class LightboardComponent {
  row1: string[] = Array.from(Row1);
  row2: string[] = Array.from(Row2);
  row3: string[] = Array.from(Row3);
  
  @Input() toLightUp: string = "";


  getLightClass(value: string): string {
    console.log(this.toLightUp);
    return value === this.toLightUp ?
    "lightboard-light-on" : "lightboard-light";
  }
}
