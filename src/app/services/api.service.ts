import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // HttpClient can do API requests, also it observable by itself
  constructor(private http:HttpClient) { }

  doApiGet(url:string):any {
    // returns observable that can be subscribed
    return this.http.get(url);
  }
}
