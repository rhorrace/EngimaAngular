import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrywheelComponent } from './entrywheel.component';

describe('EntrywheelComponent', () => {
  let component: EntrywheelComponent;
  let fixture: ComponentFixture<EntrywheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrywheelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrywheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
