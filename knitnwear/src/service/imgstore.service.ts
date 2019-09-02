import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

declare var Jimp;
@Injectable({
  providedIn: 'root',
})
export class Imgstore {
    private _imageurl: string

    private _imagecur: string
    imageditherurl: string
    _usrsee:string

    
  constructor(
  ) { }
   setimgurl(img:string):any{
        this._imageurl = img
        return Jimp.read(this._imageurl)
   }
   
   setcur(img:string){
    this._imagecur = img
  }

  setusrsee(img:string){
    this._usrsee = img

  }
  get imgcur(){
    return this._imagecur
  }
   
  get imgusrsee(){
    return this._usrsee
  }

   
   get imgurl(){
   return this._imageurl
    }
    _email:string;
    setemail(ff:string){
      this._email = ff 
    }
get email(){
  return  this._email
}
  

}