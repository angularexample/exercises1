import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    const url = 'https://coderbyte.com/api/challenges/json/all-posts';
    return this.http.get(url);
  }
}
