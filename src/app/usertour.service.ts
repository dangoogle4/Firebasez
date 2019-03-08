
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface hoteldetail {

  
  username : String;
  password: String;
  phone: String;
  num_book: Number;
  hotelid: String;
  name: String;
  
  
}

@Injectable({
  providedIn: 'root'
})
export class UsertourService {

  private tourCollection : AngularFirestoreCollection<hoteldetail>;
  private tours : Observable<hoteldetail[]>;

  private tourdata : hoteldetail;
  private newcount : any;


  constructor(db : AngularFirestore) {
    this.tourCollection = db.collection<hoteldetail>('usertour');
    
    this.tours = this.tourCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );


   }

   getTour(){
     return this.tours;
   }
   addBooking(id){
    this.getTourSingle(id).subscribe(res => {
      this.tourdata = res;
      this.newcount = this.tourdata.num_book.valueOf()+1;
      this.tourdata.num_book = this.newcount;

      console.log(this.tourdata.num_book);
      this.updateTour(this.tourdata,id);

    });

   }

   getTourSingle(id) {
    return this.tourCollection.doc<hoteldetail>(id).valueChanges();
  }
  incrementAmount(id){
    this.tourCollection.ref.firestore.runTransaction(transaction => 
        transaction.get(this.tourCollection.doc(id).ref)
        .then(res => {
          var doc = res.data();
          doc.num_book = doc.num_book+ + 1;
          transaction.update(this.tourCollection.doc(id).ref, doc);
        })).then(() => console.log("Transaction successfully committed!"))
      .catch(error => console.log("Transaction failed: ", error));
  }
  updateTour(tour: hoteldetail, id: string) {
    return this.tourCollection.doc(id).update(tour);
  }
 
}

