import { Component, EventEmitter, Output } from '@angular/core';
import { Row1, Row2, Row3 } from '../board';
@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent {
  row1: string[] = Array.from(Row1);
  row2: string[] = Array.from(Row2); 
  row3: string[] = Array.from(Row3);

  @Output() keyPressed = new EventEmitter<string>();

  onKeyPress(value: string) {
    this.keyPressed.emit(value);
  }

}
