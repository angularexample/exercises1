import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BlogService } from './blog-service';

@Component({
  selector: 'app-exercise6',
  imports: [],
  templateUrl: './exercise6.html',
  styleUrl: './exercise6.scss'
})
export class Exercise6 implements OnInit, OnDestroy {
 posts: any[] = [];
 private mySubscription: Subscription = new Subscription();

 constructor(private blogService: BlogService ) { }

 ngOnInit() {
  this.mySubscription = this.blogService.getPosts().subscribe(data => {
    this.posts = data;
  })
 }

 ngOnDestroy() {
   if (this.mySubscription) {
     this.mySubscription.unsubscribe();
   }
 }
}
