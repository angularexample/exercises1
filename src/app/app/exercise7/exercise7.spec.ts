import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise7 } from './exercise7';

describe('Exercise7', () => {
  let component: Exercise7;
  let fixture: ComponentFixture<Exercise7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise7);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
