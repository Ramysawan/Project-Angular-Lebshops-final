
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-liquors',
  templateUrl: './liquors.component.html',
  styleUrls: ['./liquors.component.css']
})
export class LiquorsComponent implements OnInit {
items: Observable<any[]>;
  
  constructor(db: AngularFirestore) {
    this.items = db.collection('Liquors').valueChanges();
  }
ngOnInit() {
  }
}