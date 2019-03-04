import { BookingService, Booking } from './../booking.service';
import { tour } from './../usertour.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-firebase-s',
  templateUrl: './firebase-s.page.html',
  styleUrls: ['./firebase-s.page.scss'],
})
export class FirebaseSPage implements OnInit {

  booking: Booking = {
    name : 'String',
    phone: 'String',
    hotelid: 'String'
  };
 
  todoId = null;
 
  constructor(private route: ActivatedRoute, private nav: NavController,private bookservice: BookingService, private loadingController: LoadingController) { }
 
  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    console.log(this.todoId);
    if (this.todoId)  {
      //this.loadTodo();
    }
  }
 
 
 
  async saveBooking() {
 
    const loading = await this.loadingController.create({
      message: 'กรุณารอสักครู่..'
    });
    await loading.present();
 
    if (this.todoId) {
      this.bookservice.updateBooking(this.booking, this.todoId).then(() => {
        loading.dismiss();
        //this.nav.goBack('user');
      });
    } else {
      this.bookservice.addBooking(this.booking).then(() => {
        loading.dismiss();
        //this.nav.goBack('home');
      });
    }
  }

}
