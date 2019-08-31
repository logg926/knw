import { Component, ViewChild, OnInit } from '@angular/core';
import { Imgstore } from 'src/service/imgstore.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
declare var Jimp;
declare var RgbQuant;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  @ViewChild('myPond', { static: true }) myPond: any;

  ngOnInit(){
    this.imgshowing = ""
    this.contrast = 0;
    this.greyscale = false;
    this.brightness = 0;
    this.picloading = false
    this.uploadpicloading = false
    this.showingloader =false;
    this.arrayColors={'color1':'#ffffff','color2':'#7f7f7f','color3':'#000'}
    this.autogeneratepalette= true
  }
  constructor(
    public imgstore: Imgstore, 
    private router: Router,
    public loadingController: LoadingController) {
  }
  arrayColors;
  tar_width: number;
  tar_height: number;
  whratio: number;
  greyscale : boolean;
  contrast: number;//-1 to 1
  brightness: number;//-1 to 1

  pondOptions = {
    class: 'my-filepond',
    multiple: false,
    labelIdle: '<b>Click<span class="filepond--label-action"> here </span>to upload your photo!</b>',
    acceptedFileTypes: 'image/jpeg, image/png, image/jpg, image/bmp ',
  }
  imgshowing: string;
  imgupload: string;

  pondFiles = [
  ]

  generatePalette(){
    this.arrayColors={'color1':'#ffffff','color2':'#7f7f7f','color3':'#000'}
  }

  pondHandleInit() {
    // console.log('FilePond has initialised', this.myPond);
  }
  changePhoto(){
    this.updatePhoto(this.originalimage)
  }
  originalimage: string;
  picloading: boolean;
  uploadpicloading :boolean;
  loader:Promise<void | HTMLIonLoadingElement>;
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

  showcp:boolean;
  hideLoading(){
    this.loader.then(()=>{
      this.loadingController.dismiss();
      this.showingloader = false
    })
  }
  autogeneratepalette:boolean;

  updatePhoto(originalimage){
    this.picloading = true
    this.showLoading()
    this.uploadpicloading = true
    
    setTimeout(()=>{this.imgstore.setimgurl(originalimage).then((image) => {
      function hexToRgb(hex:string) {
        // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function(m, r, g, b) {
          return r + r + g + g + b + b;
        });
      
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? [parseInt(result[1], 16),
           parseInt(result[2], 16),
          parseInt(result[3], 16)
       ] : null;
      }
      const backgroundcolor = 0xFFFFFFFF
      
      // const palette = [[0xff,0xff,0xff],[0x7f,0x7f,0x7f],[0,0,0]]
      
      const knitcolors = [[0xff,0xff,0xff],[0x7f,0x7f,0x7f],[0,0,0]]

      var step1img = image
      .resize(image.bitmap.width,Math.trunc(image.bitmap.height*this.whratio))

      if (this.contrast!=0){
        step1img = step1img.contrast(this.contrast/100)
      }
      if (this.brightness!=0){
        step1img = step1img.brightness(this.brightness/100)
      }
      if (this.greyscale){
        step1img = step1img.greyscale()
      }

      // do median cut here step1img store on this.arrayColors
      if (this.autogeneratepalette){

        step1img.clone().getBase64(Jimp.MIME_BMP, (err, src) => {
          //src is the dataurl of the transformed image
          // const newimage = new Image(step1img.bitmap.width, step1img.bitmap.height)
          var newimage = new Image()
          newimage.src = src
          var can = document.createElement("canvas");
          can.width = step1img.bitmap.width;
          can.height = step1img.bitmap.height;
          var ctx = can.getContext("2d");
          ctx.drawImage(newimage,0,0);
          
          console.log(ctx)
          var opts = {
            colors: 256,             // desired palette size
            method: 2,               // histogram method, 2: min-population threshold within subregions; 1: global top-population
            boxSize: [64,64],        // subregion dims (if method = 2)
            boxPxls: 2,              // min-population threshold (if method = 2)
            initColors: 4096,        // # of top-occurring colors  to start with (if method = 1)
            minHueCols: 0,           // # of colors per hue group to evaluate regardless of counts, to retain low-count hues
            dithKern: null,          // dithering kernel name, see available kernels in docs below
            dithDelta: 0,            // dithering threshhold (0-1) e.g: 0.05 will not dither colors with <= 5% difference
            dithSerp: false,         // enable serpentine pattern dithering
            palette: [],             // a predefined palette to start with in r,g,b tuple format: [[r,g,b],[r,g,b]...]
            reIndex: false,          // affects predefined palettes only. if true, allows compacting of sparsed palette once target palette size is reached. also enables palette sorting.
            useCache: true,          // enables caching for perf usually, but can reduce perf in some cases, like pre-def palettes
            cacheFreq: 10,           // min color occurance count needed to qualify for caching
            colorDist: "euclidean",  // method used to determine color distance, can also be "manhattan"
        };
         console.log(newimage)
        var q = new RgbQuant(opts);

        console.log(q.reduce(ctx))
        })

      }
      const palette = [this.arrayColors.color1,this.arrayColors.color2,this.arrayColors.color3].map((hex)=>hexToRgb(hex))
      // console.log (palette)

      var ditheredimg = step1img
        .background(backgroundcolor)
        .contain(this.tar_width,this.tar_height)
        .dither3(palette,knitcolors)              // set greyscale
      ditheredimg.clone().getBase64(Jimp.MIME_BMP, (err, src) => {
          //src is the dataurl of the transformed image
          this.imgupload = src
          this.uploadpicloading =  false
        })
      ditheredimg.resize(Math.trunc(image.bitmap.width*this.whratio)*16,image.bitmap.height*16,Jimp.RESIZE_NEAREST_NEIGHBOR)
        .getBase64(Jimp.MIME_PNG, (err, src) => {
          //src is the dataurl of the transformed image

          this.imgshowing = src;
          this.picloading = false;
          this.hideLoading()
          this.showcp=false
        });
    }).catch(function (err) {
      console.error(err);
    });
  },100)

  }

  pondHandleAddFile(event: any) {

    // this.showLoading()
    [this.tar_width, this.tar_height, this.whratio] = this.router.url.split("/").slice(2, 5).map((int) => { return parseFloat(int) });
    var file: File = event.file.file;
    const fr = new FileReader()
    fr.readAsDataURL(file)
    fr.addEventListener("load", () => {
      
      //fr.result is the dataurl of the original image
      this.originalimage = <string>fr.result
      setTimeout(()=>this.updatePhoto(<string>fr.result),200)
      // console.log(this.imgstore.imgurl);
    }, false);
  }

  pondHandleRemoveFile(event: any) {
    this.imgshowing = ""

  }
  closedialog(dialogid){
    console.log(dialogid)
  }
}
