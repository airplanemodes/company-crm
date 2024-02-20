# CRM Company

A simplest customer relationship management application.

![CRM](/crm.png "CRM Company")

## Firebase setup

* Enter the [Firebase console](https://console.firebase.google.com) and create a project.
* In the project settings find the web app Firebase configuration (`firebaseConfig`) and add it to `src/environment/environment.ts`.
    * You have to create this file (`environment.prod.ts` can be used as a template, just add the API credentials into `environment` object, next to `production`).
* Add **Realtime database** and **Authentication** features as well.

## Usage

* Run `npm install` to install dependencies.
* Install Angular CLI:
    * via `npm install -g @angular/cli`.
    * or via `brew install angular-cli`.
* Run `ng serve`.
* Navigate to `http://localhost:4200/`.
* Create a user account or login with existing account.
* Add customers.
* Each user account has its own customers.
* Edit or delete entries if needed.
