import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

declare var Jimp;
@Injectable({
  providedIn: 'root',
})
export class Imgstore {
    private _imageurl: string
    imageditherurl: string
  constructor(
    // private route: ActivatedRoute
  ) { }
   setimgurl(img:string):any{
        this._imageurl = img
        return Jimp.read(this._imageurl)
   }
   
   

   
   get imgurl(){
   return this._imageurl
    }


  

}