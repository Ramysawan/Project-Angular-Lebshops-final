import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';    // Import this
import { Electronics } from 'src/app/entities/electronics.model';

@Injectable({
  providedIn: 'root'
})
export class ElectronicService {

  constructor(private firestore: AngularFirestore) { }      // Inject through the constructor


// Retrive student data from firestore
getElectronic() {
    return this.firestore.collection('electronics').snapshotChanges();
}

// Store student data in firestore
createElectronic(electronic: Electronics){
  return this.firestore.collection('electronics').add(electronic);
}

// Delete a record
deleteElectronic(electronicId: string){
  this.firestore.doc('electronics/' + electronicId).delete();
}

// Update student data
updateElectronic(electronic: Electronics){
  delete electronic.id;
  this.firestore.doc('students/' + electronic.id).update(electronic);
}

}