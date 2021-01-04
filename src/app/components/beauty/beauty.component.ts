
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.css']
})
export class BeautyComponent implements OnInit {
items: Observable<any[]>;
  
  constructor(db: AngularFirestore) {
    this.items = db.collection('Beauty').valueChanges();
  }
ngOnInit() {
  }
}