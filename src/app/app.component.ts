import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'enigma';

  keyPressed: string = "";

  onKeyPress(value: string) {
    this.keyPressed = value;
  }
}
