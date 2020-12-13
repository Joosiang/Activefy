import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  BMI:string;
  Height:string;
  Weight:string;
  Age:string;
  User:string;

  constructor(private storage: Storage, private route:ActivatedRoute) { }

  ngOnInit() {
    this.storage.get("Username").then((val)=>{
      this.User=val;
    })
    this.storage.get("BMI").then((val)=>{
      this.BMI=val;
    })
    this.storage.get("Height").then((val)=>{
      this.Height=val;
    })
    this.storage.get("Weight").then((val)=>{
      this.Weight=val;
    })
    this.storage.get("Age").then((val)=>{
      this.Age=val;
    })
  }

  ionViewDidEnter(){
    this.storage.get("Username").then((val)=>{
      this.User=val;
    })
    this.storage.get("BMI").then((val)=>{
      this.BMI=val;
    })
    this.storage.get("Height").then((val)=>{
      this.Height=val;
    })
    this.storage.get("Weight").then((val)=>{
      this.Weight=val;
    })
    this.storage.get("Age").then((val)=>{
      this.Age=val;
    })
  }
}
