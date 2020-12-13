import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  BMI:string;
  Height:string;
  Weight:string;
  Age:string;
  User:string;

  constructor(private storage: Storage, private navCtrl: NavController, private route:ActivatedRoute) { }

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
  
  saveData(){
    this.storage.set("Username",this.User);
    this.storage.set("BMI",this.BMI);
    this.storage.set("Height",this.Height);
    this.storage.set("Weight",this.Weight);
    this.storage.set("Age",this.Age);
    this.navCtrl.navigateForward("/profile");
  }
}
