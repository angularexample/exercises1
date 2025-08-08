import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise5 } from './exercise5';

describe('Exercise5', () => {
  let component: Exercise5;
  let fixture: ComponentFixture<Exercise5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
