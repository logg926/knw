import { Component, OnInit } from '@angular/core';
import { Imgstore } from 'src/service/imgstore.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  email:string;

  loader:Promise<void | HTMLIonLoadingElement>;
  constructor(
    public toastController: ToastController,

    public loadingController: LoadingController,
    public imgstore: Imgstore,
    public router: Router
  ) {}

  ngOnInit(){

    this.showingloader =false;
  }
  ionViewWillEnter(){    
    if(this.imgstore.imgcur==""||this.imgstore.imgusrsee==""||this.imgstore.imgcur==null||this.imgstore.imgusrsee==null){

      this.router.navigate([this.router.url.slice(0, -1)+'1']);
    } 
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  async presentPopover() {
    const popoverController = document.querySelector('ion-popover-controller');
  
    const popoverElement = await popoverController.create({
      component: 'profile-page',
      event: event
    });
    return await popoverElement.present();
  }
  showingloader:boolean;

  
  showLoading() {
    if (!this.showingloader){
      this.showingloader = true;
      this.loader = this.loadingController.create({
        message: 'Loading',
        spinner: "bubbles",
        mode: "ios"

      }).then((res) => {
        res.present();
      });
    }
  }

  hideLoading(){
    this.loader.then(()=>{
      this.loadingController.dismiss();
      this.showingloader = false
    })
  }
  showToaster(mes:string){
    const toast = this.toastController.create({
      message: mes,
      duration: 2000
    }).then((res)=>{
      res.present();
    })
  }

  submit(){
    if (!this.validateEmail(this.email)){
      this.showToaster("Invalid Email Format")
    }else{
      this.showLoading()
      // console.log ("start uploading")
      // //upload 
      // console.log(this.imgstore.imgcur)
      // console.log("upload finish")
      this.imgstore.setemail(this.email)
      this.hideLoading()
      this.router.navigate([this.router.url.slice(0, -1)+'3']);
    }

    //1. loading 
    //2. Start uploading
    //3. Done show done

  }

}
