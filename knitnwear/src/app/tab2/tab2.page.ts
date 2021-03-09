import { Component, OnInit } from '@angular/core';
import { Imgstore } from 'src/service/imgstore.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    public router: Router,
    private http: HttpClient
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
  dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
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

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  submit(){
    if (!this.validateEmail(this.email)){
      this.showToaster("Invalid Email Format")
    }else{

      this.imgstore.setemail(this.email)
      this.showLoading()
      // console.log ("start uploading")
      // //upload 
      // console.log(this.imgstore.imgcur)
      // console.log("upload finish")


      const endpoint = "http://220.241.121.87:2222/";
      // const httpOptions = {
      //   headers: new HttpHeaders({
      //   'Content-Type':  'multipart/form-data'
      //   })
      //   };
      // const content = {"img":this.imgstore.imgcur,"email":this.imgstore.email}
      const name = this.imgstore.email+"!!!"+Date.now().toString()+".bmp";
    var blob = this.dataURLtoBlob(this.imgstore.imgcur);
    var fd = new FormData();
    fd.append("file", blob, name);

      // console.log(content)
      this.http.post(endpoint, fd,
        {responseType: 'text'}).subscribe(
        // this.http.post(endpoint, fd, httpOptions).subscribe(
      (res)=>{
          // console.log(res)

      this.hideLoading()
      this.router.navigate([this.router.url.slice(0, -1)+'3']);
      },
      (err)=>{
        // console.log(err)

      this.hideLoading()
      })

      // this.router.navigate([this.router.url.slice(0, -1)+'3']);
    }

    //1. loading 
    //2. Start uploading
    //3. Done show done

  }

}
