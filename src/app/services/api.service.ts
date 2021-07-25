import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  // the HttpClient module can make API requests and it's observable by itself
  constructor(private http:HttpClient) { }

  doApiGet(url:string):any {
    // returns observable that can be subscribed
    return this.http.get(url);
  }
}
