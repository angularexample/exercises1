import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise4',
  imports: [],
  templateUrl: './exercise4.html',
  styleUrl: './exercise4.scss'
})
export class Exercise4 {
  items: number = 0;

  decrementItem() {
    this.items--;
  }

  incrementItem() {
    this.items++;
  }
}
