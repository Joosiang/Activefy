import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  activities=[];
  points=0;

  constructor(private storage: Storage) {}

  ngOnInit() {    
  }

  ionViewDidEnter(){
    this.storage.get("Username").then((val)=>{
      if(val==null){
        this.storage.set("Username","Default");
        this.storage.set("Points",0);
      }
    })
    this.storage.get("Activity").then((val)=>{
      if(val!=null){
      var activities=val.split("<>?");
      var data=[];
      var index=0;
      for(var i=1;i<activities.length;i++){
        if((Date.parse(activities[i].split(",./")[3])>=Date.now())&&(Date.parse(activities[i].split(",./")[3])<(Math.ceil((Date.now()/86400000)))*86400000)){
          data[index]=activities[i];
          index++;
        }
      }      
      data.sort((a,b)=>Date.parse(a.split(",./")[3])-Date.parse(b.split(",./")[3]));
      this.activities=data;
    }
    })
    this.storage.get("Points").then((val)=>{
      this.points=val;
    })
  }
}
