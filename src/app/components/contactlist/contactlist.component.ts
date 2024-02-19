import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})



export class ContactListComponent implements OnInit {

  contactsArray:any[] = [];
  searchContactsArray:any[] = [];  


  constructor(private afdb:AngularFireDatabase) { }



  ngOnInit(): void {
    this.getListUserContacts();
  };



  getObserUserContacts():any {
    return this.afdb.list("users").snapshotChanges();
  };

  getListUserContacts():void {
    this.getObserUserContacts().subscribe((ref:any) => {
      this.contactsArray.splice(0, this.contactsArray.length);
      ref.map((item:any) => {
        let newItem = item.payload.val();
        this.contactsArray.push(newItem);
      });
      this.searchContactsArray = [...this.contactsArray];
    });
  };



  // Search on contacts page
  searchByName(event:any):void {
    console.log(event.target.value);
    this.filterContactsBy(event.target.value, 'name');
  };

  filterContactsBy(filterSearch:any, key:any):void {
    let temp_ar = this.searchContactsArray.filter((item) => {
      // toLowerCase() methods make it not case sensitive
      return item[key].toLowerCase().includes(filterSearch.toLowerCase());
    })
    // ...temp_ar parameter insted of push()
    this.contactsArray.splice(0, this.contactsArray.length, ...temp_ar)
  };

};