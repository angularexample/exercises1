import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise2 } from './exercise2';

describe('Exercise2', () => {
  let component: Exercise2;
  let fixture: ComponentFixture<Exercise2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
