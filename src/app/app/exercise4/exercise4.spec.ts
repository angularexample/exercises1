import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise4 } from './exercise4';

describe('Exercise4', () => {
  let component: Exercise4;
  let fixture: ComponentFixture<Exercise4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
