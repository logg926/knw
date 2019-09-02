import { Component, OnInit } from '@angular/core';
import { Imgstore } from 'src/service/imgstore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page  {

  constructor(
    public imgstore: Imgstore,
    public router: Router

  ) {}
  ionViewWillEnter(){    
    if(this.imgstore.email==""||this.imgstore.email==null){
      this.router.navigate([this.router.url.slice(0, -1)+'1']);
    } 
  }
}
