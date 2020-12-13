import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ActivatedRoute } from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-edit-activity',
  templateUrl: './edit-activity.page.html',
  styleUrls: ['./edit-activity.page.scss'],
})
export class EditActivityPage implements OnInit {
  
  Title:string;
  Type:string;
  Frequency:string;
  Datetime:string;
  index:number;

  constructor(private storage: Storage, private route:ActivatedRoute,private navCtrl: NavController) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.index=parseInt(this.route.snapshot.params.index);
    this.storage.get("Activity").then((val)=>{
      var activities=val.split("<>?");
      for(var i=0;i<activities.length;i++){
        if(parseInt(activities[i].split(",./")[4])==this.index){
          this.index=i;
          break;
        }
      }
      this.Title=activities[this.index].split(",./")[0];
      this.Type=activities[this.index].split(",./")[1];
      this.Frequency=activities[this.index].split(",./")[2];
      this.Datetime=activities[this.index].split(",./")[3];
    })
  }

  saveData(){
    var points=0;
    this.storage.get("Points").then((val)=>{
      points=val;
    })
    this.storage.get("Activity").then((val)=>{
      var activities=val.split("<>?");
      var type=activities[this.index].split(",./")[1];
      switch(type){
        case "walking":
          points=points-40;
          break;
        case "running":
          points=points-50;
          break;
        case "boxing":
          points=points-55;
          break;
        case "bench-press":
          points=points-60;
          break;
      }      
      activities[this.index]=this.Title+",./"+this.Type+",./"+this.Frequency+",./"+this.Datetime+",./"+parseInt(this.route.snapshot.params.index);
      var data="";
      for(var i=1;i<activities.length;i++){
        data+="<>?"+activities[i];
      }
      this.storage.set("Activity",data);
      switch(this.Type){
        case "walking":
          points=points+40;
          break;
        case "running":
          points=points+50;
          break;
        case "boxing":
          points=points+55;
          break;
        case "bench-press":
          points=points+60;
          break;
      }      
      this.storage.set("Points",points);
    })
    this.navCtrl.navigateForward("/home");
  }
}
