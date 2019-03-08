import { BookingService } from './../booking.service';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { hoteldetail, UsertourService } from '../usertour.service';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.page.html',
  styleUrls: ['./hotel-detail.page.scss'],
})
export class HotelDetailPage implements OnInit {

  booking: hoteldetail = {
    username : '',
    password: '',
    phone: '',
    num_book: 0,
    hotelid: '',
    name: 'boooking',
    
    
  };
 
  todoId = null;
  constructor(private route: ActivatedRoute, private nav: NavController, private loadingController: LoadingController,private tourservice: UsertourService,private UsertourService : UsertourService) { 
    
  }

  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
  console.log(this.todoId);
  if (this.todoId)  {
    this.booking.hotelid = this.todoId;
    this.UsertourService.getTourSingle(this.todoId).subscribe(
      res => {
        this.booking = res;
        
      }
    )
  }
  
  }
}
