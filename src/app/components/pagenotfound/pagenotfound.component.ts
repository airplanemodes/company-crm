import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-pagenotfound',

  // Writing HTML inside the *.ts file of component
  template: `
  <div class="container-fluid mx-auto text-center">
    <p class="display-3 pt-5">404 PAGE NOT FOUND <i class="fa fa-exclamation" aria-hidden="true"></i></p>
    <!-- Showing different links accordingly to the login information  -->
    <div *ngIf="logged; else elseBlock">
      <a class="text-success text-decoration-none fs-4" routerLink="/admin">Back to the system</a>
    </div>
    <ng-template #elseBlock>
      <a class="text-success text-decoration-none fs-4" routerLink="/">Back to login</a>
    </ng-template>
  </div> 
  `,
  
  styleUrls: ['./pagenotfound.component.css']
})



export class PageNotFoundComponent implements OnInit {

  logged = false;

  constructor(private authCheck:AngularFireAuth) { }

  // Getting a login information for that ngIf above
  ngOnInit(): void {
    this.authCheck.authState.subscribe((user:any) => {
      if (user) {
        this.logged = true;
      } else {
        this.logged = false;
      }
    });
  };

};