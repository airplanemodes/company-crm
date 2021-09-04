import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FireauthService } from '../../services/fireauth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    input.ng-touched.ng-invalid {
      border: 2px solid red;
    }

    .fontAwesome{
      font-family: 'arial', fontAwesome, cursive;
    }
  `]
  })


  export class LoginComponent implements OnInit {
  // ViewChild for #f ngForm
  @ViewChild("f") formRef:any;
  constructor(private faService:FireauthService, private router:Router) { }

  ngOnInit(): void {};


  // Form submit function
  async onSub() {
    if (this.formRef.form.status == "VALID") {
      let formData = this.formRef.form.value;
      try {
        // check by service if email and password are valid
        let data = await this.faService.loginFire(formData.email, formData.password);
        // if credentials are OK, redirect to admin page
        if (data.user) {
          // also store user id at local storage
          localStorage.setItem("fb_user", data.user.uid);
          this.router.navigate(['/admin']);
        };
        console.log(data);
      } catch (error) {
        alert("Try again, email or password are wrong");
        console.log(error);
      };
      //console.log(this.formRef.form.value);
    };
  };

  
};