
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
items: Observable<any[]>;
  
  constructor(db: AngularFirestore) {
    this.items = db.collection('Sports').valueChanges();
  }
ngOnInit() {
  }
}