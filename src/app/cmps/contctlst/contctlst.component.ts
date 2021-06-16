import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { DbfbService } from '../../services/dbfb.service';

@Component({
  selector: 'app-contctlst',
  templateUrl: './contctlst.component.html',
  styleUrls: ['./contctlst.component.css']
})
export class ContctlstComponent implements OnInit {
  _ar:any[] = [];
  constructor(private afdb:AngularFireDatabase, private dbfb:DbfbService) { }

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

}