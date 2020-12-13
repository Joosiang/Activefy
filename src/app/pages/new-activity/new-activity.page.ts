import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.page.html',
  styleUrls: ['./new-activity.page.scss'],
})
export class NewActivityPage implements OnInit {
  Title:string;
  Type:string;
  Frequency:string;
  Datetime:string;

  constructor(private storage: Storage, private navCtrl: NavController, private route:ActivatedRoute) { }
  
  saveData(){
    this.storage.get("Activity").then((val)=>{
      switch(this.Type){
        case "walking":
          this.storage.get("Points").then((val)=>{
            this.storage.set("Points",parseInt(val)+40);
          })
          break;
        case "running":
          this.storage.get("Points").then((val)=>{
            this.storage.set("Points",parseInt(val)+50);
          })
          break;
        case "boxing":
          this.storage.get("Points").then((val)=>{
            this.storage.set("Points",parseInt(val)+55);
          })
          break;
        case "bench-press":
          this.storage.get("Points").then((val)=>{
            this.storage.set("Points",parseInt(val)+60);
          })
          break;
      }
      var id=Date.now()+(Math.floor(Math.random() * 5));
      this.storage.set("Activity",val+"<>?"+this.Title+",./"+this.Type+",./"+this.Frequency+",./"+this.Datetime+",./"+id);
    })
    this.navCtrl.navigateForward("/home");
  }

  ngOnInit() {
  }

}
