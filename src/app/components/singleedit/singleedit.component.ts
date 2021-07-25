import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from '../../services/database.service';


@Component({
  selector: 'app-singleedit',
  templateUrl: './singleedit.component.html',
  styleUrls: ['./singleedit.component.css']
})



export class SingleeditComponent implements OnInit {
  @ViewChild('f') crmForm:any;
  typeInput = "date";
  user:any = {};
  constructor(private afs:AngularFireDatabase,
    private route:ActivatedRoute,
    private dbfb:DatabaseService,
    private router:Router) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  onSub() {
    let id = this.route.snapshot.paramMap.get('id');
    if (this.crmForm.form.status == "VALID") {
      // console.log(this.crmForm.form.value)
      let bodyForm = this.crmForm.form.value;
      // adding 'id' property
      bodyForm.user_id = localStorage["fb_user"];
      this.dbfb.editCustomer(id, bodyForm);
      this.router.navigate(['/admin']);
    }
  }


  getUserInfoObser():any {
    let id = this.route.snapshot.paramMap.get('id');
    return this.afs.list("customers/"+id).snapshotChanges();
  }

  getUserInfo():void {
    this.getUserInfoObser().subscribe((ref:any) => {
      console.log(ref);
      // מכיוון שאנחנו אוספים אובייקט מהפיירבייס
      // הפיירבייס מחזיר אובייקט כמערך 
      // שבכל תא במארך הוא מכיל מאפיין אחר
      //  ולכן אנחנו עושים לולאה שעושה 2 דברים
      // אוספת את הקיי מאותו תא ובנוסף את התוכן שלו
      // עם PAYLOAD.VAL
      ref.map((item:any) => {
        // item.key -> מכיל את שם הקיי/מאפיין
        // item.payload.val() -> מכיל את הערך
        this.user[item.key] = item.payload.val();
        // console.log(item.payload.val())
      })
      console.log(this.user)
    })
  }

}
