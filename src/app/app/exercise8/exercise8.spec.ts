import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise8 } from './exercise8';

describe('Exercise8', () => {
  let component: Exercise8;
  let fixture: ComponentFixture<Exercise8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise8]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise8);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
