import { Component, OnInit } from '@angular/core';
import { FireauthService } from '../../services/fireauth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private check:FireauthService) { }

  ngOnInit(): void {
    this.check.checkUserAuth();
  };

};