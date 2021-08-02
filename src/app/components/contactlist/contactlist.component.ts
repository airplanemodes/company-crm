import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { DatabaseService } from '../../services/database.service';


@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})



export class ContactListComponent implements OnInit {
  _ar:any[] = [];
  constructor(private afdb:AngularFireDatabase, private dbfb:DatabaseService) { }

  ngOnInit(): void {
    this.getListUserContacts();
  };

  getObserUserContacts():any {
    return this.afdb.list("users").snapshotChanges();
  };

  getListUserContacts():void {
    this.getObserUserContacts().subscribe((ref:any) => {
      this._ar.splice(0, this._ar.length);
      ref.map((item:any) => {
        let newItem = item.payload.val();
        this._ar.push(newItem);
      });
    });
  };

};