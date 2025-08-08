import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise6 } from './exercise6';

describe('Exercise6', () => {
  let component: Exercise6;
  let fixture: ComponentFixture<Exercise6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise6);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
