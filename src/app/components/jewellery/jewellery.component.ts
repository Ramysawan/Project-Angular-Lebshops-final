
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-jewellery',
  templateUrl: './jewellery.component.html',
  styleUrls: ['./jewellery.component.css']
})
export class JewelleryComponent implements OnInit {
items: Observable<any[]>;
  
  constructor(db: AngularFirestore) {
    this.items = db.collection('Jewellery').valueChanges();
  }
ngOnInit() {
  }
}