import { Component, ViewChild } from '@angular/core';
import { Imgstore } from 'src/service/imgstore.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { Jimp } from 'jimp/browser/lib/jimp.js'
declare var Jimp;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild('myPond', { static: true }) myPond: any;
  

constructor(public imgstore: Imgstore, private router: Router) {
  this.imgshowing = ""
}
tar_width:number;
tar_height:number;
whratio: number;
pondOptions = {
  class: 'my-filepond',
  multiple: false,
  labelIdle: '<b>Click<span class="filepond--label-action"> here </span>to upload your photo!</b>',
  acceptedFileTypes: 'image/jpeg, image/png, image/jpg, image/bmp ',
}
imgshowing: string;

pondFiles = [
]

pondHandleInit() {
  // console.log('FilePond has initialised', this.myPond);
}

pondHandleAddFile(event: any) {
  [this.tar_width, this.tar_height, this.whratio] = this.router.url.split("/").slice(2, 5).map((int) => { return parseFloat(int) });
  console.log(this.tar_width)
  console.log(this.tar_height)
  console.log(this.whratio)

  var file: File = event.file.file;
  // console.log(file)
  const fr = new FileReader()
  fr.readAsDataURL(file)
  fr.addEventListener("load", () => {
    //fr.result is the dataurl of the original image
    this.imgstore.setimgurl(<string>fr.result).then((image) => {
      const options = {"tar_width": this.tar_width ,"tar_height": this.tar_height,"whratio": this.whratio}
      image.dither3(options)               // set greyscale
        .getBase64(Jimp.MIME_BMP, (err, src) => {
          //src is the dataurl of the transformed image
          this.imgshowing = src;
        });
    }).catch(function (err) {
      console.error(err);
    });
    // console.log(this.imgstore.imgurl);
  }, false);
}

pondHandleRemoveFile(event: any){
  this.imgshowing = ""

}
}
