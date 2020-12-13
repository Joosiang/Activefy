import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.page.html',
  styleUrls: ['./rewards.page.scss'],
})
export class RewardsPage implements OnInit {

  points=0;

  constructor(private storage: Storage) { }

  ngOnInit() {
  }

  ionViewDidEnter(){    
    this.storage.get("Points").then((val)=>{
      this.points=val;
    })
  }

  redeem(x){
    this.points=this.points-x;
    this.storage.set("Points",this.points);
  }
}
