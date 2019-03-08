import { UsertourService, hoteldetail } from './../usertour.service';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit {

  usertours : hoteldetail[];

  constructor( private UsertourService : UsertourService) { }

  ngOnInit() {
    this.UsertourService.getTour().subscribe(
      res => {
        this.usertours = res;
        console.log(this.usertours[0].username)
      }
    )
  }

}
