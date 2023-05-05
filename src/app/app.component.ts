import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { map } from './board';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges{
  title = 'enigma';

  keyPressed: string = "";
  plugboardMap: map = {};

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.keyPressed = changes['keyPressed'].currentValue;
    this.plugboardMap = changes['plugboardMap'].currentValue;
  }

  onKeyPress(value: string) {
    this.keyPressed = value;
  }
}
