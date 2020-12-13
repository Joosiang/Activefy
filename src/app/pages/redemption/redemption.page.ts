import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-redemption',
  templateUrl: './redemption.page.html',
  styleUrls: ['./redemption.page.scss'],
})
export class RedemptionPage implements OnInit {

  points=0;

  constructor(private storage:Storage) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.storage.get("Points").then((val)=>{
      this.points=val;
    })
  }
}
