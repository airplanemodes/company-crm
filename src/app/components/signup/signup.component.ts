import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DbfbService } from '../../services/dbfb.service';
import { FireauthService } from '../../services/fireauth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {
  @ViewChild('f') theForm:any
  constructor(
    private authFb:FireauthService,
    private router:Router,
    private dbfire:DbfbService) { }

  ngOnInit(): void {
  }

  async onSub():Promise<any> {
    console.log(this.theForm.form.value);
    let user = this.theForm.form.value;
    let result = await this.authFb.signupNewUser(user);
    console.log(result)
    if(result.user){
      alert("Sign up successful! Now login")
      this.dbfire.addNewAccount(user);
      this.router.navigate(["/"]);
    }
    if(result.code){
      alert(result.message);
    }
    return result;
    // result.user -> success
    // result.code -> problem
  }
}
