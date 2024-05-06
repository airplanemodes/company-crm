import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class FireauthService {
    userObj: any = {};

    /* declaring 'fa' variable for 'AngularFireAuth' module
    that makes all authentication actions such as: 
    login, log out, sign up, check if online */
  
    constructor(private fa: AngularFireAuth, private router: Router) { };

    // Sign In
    async loginFire(email: string, password: string) {
        let user = await this.fa.signInWithEmailAndPassword(email, password);
        return user;
    }

    // Sign Up
    async signUpNewUser(newUser: any) {
        try {
            let result = await this.fa.createUserWithEmailAndPassword(newUser.email, newUser.password);
            return result;
        } catch (error) {
            console.log(error);
            return error;
        };
    }

    // Log out
    async logOut() {
        await this.fa.signOut();
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
        this.fa.authState.subscribe((user: any) => {
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
