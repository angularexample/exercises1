import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise3 } from './exercise3';

describe('Exercise3', () => {
  let component: Exercise3;
  let fixture: ComponentFixture<Exercise3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
