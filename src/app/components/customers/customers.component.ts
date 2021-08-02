import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})



export class CustomersComponent implements OnInit {
  customersArr:any[] = [];
  constructor(private dbfb:DatabaseService) { }

  ngOnInit(): void {
    this.customersArr = this.dbfb.getCustomersArrayData()
  }

  deleteCustomer(id:any):void {
    if (confirm("Are you sure?")) {
      this.dbfb.delCustomer(id);
    }
  }

  // Search functions
  searchByFirstName(event:any):void {
    console.log(event.target.value);
    this.dbfb.filterArrayBy(event.target.value, 'first');
  }

  searchByLastName(event:any):void {
    console.log(event.target.value);
    this.dbfb.filterArrayBy(event.target.value, 'last');
  }

  searchByPhone(event:any):void {
    console.log(event.target.value);
    this.dbfb.filterArrayBy(event.target.value, 'phone');
  }
};