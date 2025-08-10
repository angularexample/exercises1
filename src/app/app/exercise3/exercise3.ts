import { ChangeDetectionStrategy, Component } from '@angular/core';
//import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-exercise3',
  imports: [],
  templateUrl: './exercise3.html',
  styleUrl: './exercise3.scss',
  standalone: true,
})
/**
 * Rotate array items, starting at the index of the first item number.
 * The Coderbyte "Array Rotation" challenge requires a function that takes an array of non-negative integers as input. The core task is to rotate the array circularly, starting from the n-th element, where n is determined by the first integer of the input array. The function must then return the rotated array as a string of numbers, without commas.
 * Example:
 * If the input array is [2, 3, 4, 1, 6, 10]:
 * The first element is 2, so the rotation should begin from the 2nd position (0-indexed, this refers to the element 4).
 * The elements 4, 1, 6, 10 are moved to the front.
 * The elements 2, 3 are moved to the end.
 * The resulting array is [4, 1, 6, 10, 2, 3].
 * The function should return the string "4161023".
 * Constraints:
 * The array is numbers.
 * The first element in the array will always be an integer greater than or equal to 0 and less than the size of the array.
 * Reference CoderByte Challenges
 * https://coderbyte.com/challenges
 */
export class Exercise3 {
  // changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
  items = [2, 3, 4, 1, 6, 10];

  rotateArray() {
    // Create 2 new arrays, split at the given index
    const index = this.items[0];
    const first = this.items.slice(index, this.items.length);
    const second = this.items.slice(0, index);
    this.items = [...first, ...second];
  }
}
