import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-singleinfo',
    templateUrl: './singleinfo.component.html',
    styleUrls: ['./singleinfo.component.css']
})

export class SingleInfoComponent implements OnInit {
    user: any = {};
    constructor(private firedb:AngularFireDatabase, private route:ActivatedRoute) { }

    ngOnInit(): void {
        this.getUserInfo();
    }


    getUserInfoObser():any {
        // get the needed customer info
        let id = this.route.snapshot.paramMap.get('id');
        return this.firedb.list('customers/'+id).snapshotChanges();
    }

    getUserInfo():void {
        this.getUserInfoObser().subscribe((ref: any) => {
            console.log(ref);
            // מכיוון שאנחנו אוספים אובייקט מהפיירבייס
            // הפיירבייס מחזיר אובייקט כמערך 
            // שבכל תא במארך הוא מכיל מאפיין אחר
            // ולכן אנחנו עושים לולאה שעושה 2 דברים
            // אוספת את הקיי מאותו תא ובנוסף את התוכן שלו
            // עם PAYLOAD.VAL
            ref.map((item:any) => {
                this.user[item.key] = item.payload.val()
                //console.log(item.payload.val())
            });
            console.log(this.user);
        });
    }
}
