import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-exercise1',
  imports: [],
  templateUrl: './exercise1.html',
  styleUrl: './exercise1.scss',
  standalone: true,
})
export class Exercise1 {
  //changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
  items = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  decrementItem() {
    this.items.push(this.items.shift() || '0');
    this.items = this.items.filter(item => item !== '0');
    // this is not needed in this case, perhaps since it is Angular 20
    //this.changeDetectorRef.detectChanges();
  }

  incrementItem() {
    this.items.unshift(this.items.pop() || '0');
    this.items = this.items.filter(item => item !== '0');
    //this.changeDetectorRef.detectChanges();
  }
}
