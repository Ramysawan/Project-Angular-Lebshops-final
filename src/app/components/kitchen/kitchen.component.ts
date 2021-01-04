
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {
items: Observable<any[]>;
  
  constructor(db: AngularFirestore) {
    this.items = db.collection('Kitchen').valueChanges();
  }
ngOnInit() {
  }
}