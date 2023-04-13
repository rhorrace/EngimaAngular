import { Component } from '@angular/core';
import { ReflectorTags } from './reflectorData';

@Component({
  selector: 'app-reflector',
  templateUrl: './reflector.component.html',
  styleUrls: ['./reflector.component.css']
})
export class ReflectorComponent {
  reflectorTags: string[] = ReflectorTags;
  reflectorSelected: string = "";
}
