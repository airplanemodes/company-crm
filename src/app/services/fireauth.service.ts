import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class FireauthService {
    userObj: any = {};

    /* declaring 'fireAuth' variable for 'AngularFireAuth' module
    that makes all authentication actions such as: 
    login, log out, sign up, check if online */
  
    constructor(private fireAuth: AngularFireAuth, private router: Router) { };

    // Sign In
    async loginFire(email: string, password: string) {
        let user = await this.fireAuth.signInWithEmailAndPassword(email, password);
        return user;
    }

    // Sign Up
    async signupNewUser(userObj2:any) {
        try {
            let result = await this.fireAuth.createUserWithEmailAndPassword(userObj2.email, userObj2.password);
            return result;
        } catch (error) {
            console.log(error);
            return error;
        };
    }

    // Log out
    async logOut() {
        await this.fireAuth.signOut();
        localStorage.removeItem("fb_user");
        this.router.navigate([ "/" ]);
        setTimeout(() => {
            location.reload();
        }, 200);
    }

    getUserData(): any {
        return this.userObj;
    }

    // Check if user are already logged in
    checkUserAuth() {
        this.fireAuth.authState.subscribe((user: any) => {
            if(!user) {
                alert("You must login first");
                this.router.navigate([ "/" ]); // back to the login page
            } else {
                for (let key in user) {
                    this.userObj[key] = user[key];
                }
            }
            console.log(user);
        });
    }
}
