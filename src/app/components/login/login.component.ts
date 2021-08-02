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
  @ViewChild("f") myForm:any;
  constructor(private fas:FireauthService, private router:Router) { }

  ngOnInit(): void {
  }

  async onSub() {
    if (this.myForm.form.status == "VALID") {
      let formData = this.myForm.form.value;
      try {
        // check by service if email and password are valid
        let data = await this.fas.loginFire(formData.email, formData.password)
        // if login OK, redirect to admin page
        if (data.user) {
          // also store user id at local storage
          localStorage.setItem("fb_user", data.user.uid);
          this.router.navigate(['/admin']);
        }
        console.log(data)
      } catch (err) {
        if (err.code) {
          alert("Try again, email or password is wrong");
        }
        console.log(err);
      }
      console.log(this.myForm.form.value);
    }
  }
};