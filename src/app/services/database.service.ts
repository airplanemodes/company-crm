import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})


export class DatabaseService {
  customersArray:any[] = [];
  searchCustomersArray:any[] = [];
  
  constructor(private afdb:AngularFireDatabase) { 
    this.getCustomers();
  }

  getCustomersArrayData():any {
    return this.customersArray;
  }


  // adds new user account
  addNewAccount(body:any):void {
    // for not showing the password at database
    body.password = "********"
    this.afdb.list("users").push(body);
  }



  // adds new entry to the database
  addCustomer(body:any):void {
    this.afdb.list('customers').push(body);
  }

  // deletes an entry
  delCustomer(id:any):void {
    this.afdb.list('customers/'+id).remove();
  }

  // edit an entry
  editCustomer(id:any, body:any):void {
    this.afdb.object('customers/'+id).update(body);
  }



  // returns observable that can be listened by subscribe()
  getObserCustomers():any {
    // getting a user_id from local storage, that stored at fb_user
    // then checks and shows all customers of that id
    let userId = localStorage['fb_user'] || "";
    return this.afdb.list('customers', ref => ref.orderByChild('user_id').equalTo(userId)).snapshotChanges();
  }

  getCustomers():void {
    this.getObserCustomers().subscribe((res:any) => {
      this.customersArray.splice(0, this.customersArray.length);
      res.map((item:any) => {
        let newItem = item.payload.val();
        newItem.id = item.payload.key;
        this.customersArray.push(newItem);
      })
      this.searchCustomersArray = [...this.customersArray];
      console.log(this.customersArray)
    })
  }



  // Search on customers
  filterArrayBy(filterSearch:any, key:any):void {
    let temp_ar = this.searchCustomersArray.filter((item) => {
      // toLowerCase() methods make it not case sensitive
      return item[key].toLowerCase().includes(filterSearch.toLowerCase());
    })
    // ...temp_ar parameter insted of push()
    this.customersArray.splice(0, this.customersArray.length, ...temp_ar)
  }

}
