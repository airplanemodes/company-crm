import { Component, OnInit } from '@angular/core';
import { FireauthService } from '../../services/fireauth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:any = {};
  constructor(private authS:FireauthService) { }

  logOut() {
    this.authS.logOut()
  }

  ngOnInit(): void {
    this.user = this.authS.getUserData();
  }

};