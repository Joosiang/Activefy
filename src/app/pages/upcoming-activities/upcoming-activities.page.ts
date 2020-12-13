import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-upcoming-activities',
  templateUrl: './upcoming-activities.page.html',
  styleUrls: ['./upcoming-activities.page.scss'],
})
export class UpcomingActivitiesPage implements OnInit {

  activities=[];

  constructor(private storage: Storage) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.storage.get("Activity").then((val)=>{
      var activities=val.split("<>?");
      var data=[];
      var index=0;
      for(var i=0;i<activities.length;i++){
        if(Date.parse(activities[i].split(",./")[3])>=Date.now()){
          data[index]=activities[i];
          index++;
        }
      }
      data.sort((a,b)=>Date.parse(a.split(",./")[3])-Date.parse(b.split(",./")[3]));
      this.activities=data;
    })
  }

}
