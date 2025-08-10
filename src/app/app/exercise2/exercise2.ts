import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise2',
  imports: [],
  templateUrl: './exercise2.html',
  styleUrl: './exercise2.scss'
})
export class Exercise2 {
  myItems = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  myNewItems: string[] = [];

  reverseItems() {
    this.myNewItems = this.myItems.reverse();
    this.myItems = [...this.myNewItems];
    this.myNewItems = [];
  }

  reverseItemsSimple() {
    // iterate myItems from last to first,
    // push each item to a new array
    for (let i = this.myItems.length - 1; i > -1; i--) {
      this.myNewItems.push(this.myItems[i]);
    }
    this.myItems = [...this.myNewItems];
    this.myNewItems = [];
  }
}
