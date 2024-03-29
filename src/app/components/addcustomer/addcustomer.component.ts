import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../../services/database.service';

@Component({
    selector: 'app-addcustomer',
    templateUrl: './addcustomer.component.html',

    styles: [`
        input.ng-touched.ng-invalid {
            border:1px solid #dc3545;
        }
    `]
})

export class AddCustomerComponent implements OnInit {
    @ViewChild('f') crmForm: any;
    constructor(private dbService: DatabaseService, private router: Router) { }

    ngOnInit(): void {};

    addNewCustomer(): any {
        if (this.crmForm.form.status == "VALID") {
            let formBody = this.crmForm.form.value;
            // console.log(formBody);
            // adding the 'user_id' property
            formBody.user_id = localStorage[ "fb_user" ];
            this.dbService.addCustomer(formBody);
            alert("Success!");
            this.router.navigate([ "/admin" ]).then(() => {
                window.location.reload();
            });
        }
    }
}
