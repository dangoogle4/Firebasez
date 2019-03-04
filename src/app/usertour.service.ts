
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface tour {

  
  username : String;
  password: String;
  phone: String;
  
  
}

@Injectable({
  providedIn: 'root'
})
export class UsertourService {

  private tourCollection : AngularFirestoreCollection<tour>;
  private tours : Observable<tour[]>;

  constructor(db : AngularFirestore) {
    this.tourCollection = db.collection<tour>('usertour');
    
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

}
