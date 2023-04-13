import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectorComponent } from './reflector.component';

describe('ReflectorComponent', () => {
  let component: ReflectorComponent;
  let fixture: ComponentFixture<ReflectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReflectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReflectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
