import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise1 } from './exercise1';

describe('Exercise1', () => {
  let component: Exercise1;
  let fixture: ComponentFixture<Exercise1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
