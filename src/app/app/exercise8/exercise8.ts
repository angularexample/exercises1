import { Component, OnDestroy, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-exercise8',
  imports: [
    JsonPipe, ReactiveFormsModule
  ],
  templateUrl: './exercise8.html',
  styleUrl: './exercise8.css',
  standalone: true,
})
export class Exercise8 implements OnInit, OnDestroy {
  protected person = {
    firstname: 'John',
    lastname: 'Doe',
    age: 30,
    twitter: "@johndoe"
  }
  private mySubscription: Subscription = new Subscription();

  protected personForm: FormGroup = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      twitter: new FormControl('', Validators.required)
    }
  )

  protected updatePerson(): void {
    // To show the changes only after clicking the button
    // this.person = this.personForm.value;
  }

  ngOnInit(): void {
    this.personForm.patchValue(this.person);
    // To show instantly the changes without the need to click the button
    this.mySubscription = this.personForm.valueChanges.subscribe(value => {
      this.person = {
        firstname: value.firstname,
        lastname: value.lastname,
        age: parseInt(value.age),
        twitter: value.twitter
      };
    })
  }

  ngOnDestroy(): void {
    if(this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }
}
