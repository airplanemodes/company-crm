import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FireauthService {
  userObj:any = {};
  // entering 'afa' variable, that can do all authentication actions
  // like: login, log out, sign up, check if online
  constructor(private afa:AngularFireAuth, private router:Router) { };


  // Sign In
  async loginFire(email:string, password:string) {
    let user = await this.afa.signInWithEmailAndPassword(email, password);
    return user;
  };


  // Sign Up
  async signupNewUser(userObj2:any) {
    try {
      let result = await this.afa.createUserWithEmailAndPassword(userObj2.email, userObj2.password);
      return result;
    } catch (error) {
      console.log(error);
      return error;
    };
  };

  // Log out
  async logOut() {
    await this.afa.signOut();
    localStorage.removeItem("fb_user");
    this.router.navigate(["/"]);
    setTimeout(() => {
      location.reload();
    }, 200);
  };

  getUserData():any {
    return this.userObj;
  };

  // Check if user are already logged in
  checkUserAuth() {
    this.afa.authState.subscribe((user:any) => {
      if(!user) {
        alert("You must login first");
        this.router.navigate(["/"]); // back to login page
      } else {
        for (let key in user) {
          this.userObj[key] = user[key];
        };
      };

      console.log(user);
    });
  };
};
