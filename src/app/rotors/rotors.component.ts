import { Component } from '@angular/core';
import { rotorNumbers } from './rotorData';

@Component({
  selector: 'app-rotors',
  templateUrl: './rotors.component.html',
  styleUrls: ['./rotors.component.css']
})
export class RotorsComponent {
  numRotors: number = 3;
  rotorNumbers: string[] = rotorNumbers;
  rotorSelect1: string = "";
  rotorSelect2: string = "";
  rotorSelect3: string = "";

  isSelectedRotor1(value: string): boolean {
    return this.rotorSelect1 === value;
  }

  isSelectedRotor2(value: string): boolean {
    return this.rotorSelect2 === value;
  }

  isSelectedRotor3(value: string): boolean {
    return this.rotorSelect3 === value;
  }

}
