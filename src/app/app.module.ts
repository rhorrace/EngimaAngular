import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LightboardComponent } from './lightboard/lightboard.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { PlugboardComponent } from './plugboard/plugboard.component';
import { RotorsComponent } from './rotors/rotors.component';
import { ReflectorComponent } from './reflector/reflector.component';
import { EntrywheelComponent } from './entrywheel/entrywheel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LightboardComponent,
    KeyboardComponent,
    PlugboardComponent,
    RotorsComponent,
    ReflectorComponent,
    EntrywheelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
