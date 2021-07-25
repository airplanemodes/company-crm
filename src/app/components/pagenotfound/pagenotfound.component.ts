import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',

  // Writing HTML inside the *.ts file of component
  template: `
  <div class="container-fluid mx-auto text-center">
    <p class="display-3 pt-5">404 PAGE NOT FOUND <i class="fa fa-exclamation" aria-hidden="true"></i></p>
    <a class="text-success text-decoration-none fs-4" routerLink="/">Back to login</a>
  </div> 
  `,
  
  styleUrls: ['./pagenotfound.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
