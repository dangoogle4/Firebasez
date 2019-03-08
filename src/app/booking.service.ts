import { map } from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Booking {

  
  name : String;
  phone: String;
  hotelid: String;
  guest: String;
  
  
}


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private bookingCollection : AngularFirestoreCollection<Booking>;
  private booking : Observable<Booking[]>;

  constructor(db : AngularFirestore) {
    this.bookingCollection = db.collection<Booking>('booking');
    
    this.booking = this.bookingCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
   }

   getBookings() {
    return this.booking;
  }
 
  getBooking(id) {
    return this.bookingCollection.doc<Booking>(id).valueChanges();
  }
 
  updateBooking(booking: Booking, id: string) {
    return this.bookingCollection.doc(id).update(booking);
  }
 
  addBooking(booking: Booking) {
    return this.bookingCollection.add(booking);
  }
 
  removeTodo(id) {
    return this.bookingCollection.doc(id).delete();
  }
}


