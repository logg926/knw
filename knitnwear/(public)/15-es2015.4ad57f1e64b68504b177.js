(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"8cDG":function(l,n,e){"use strict";e.r(n);var u=e("8Y7J");class t{}var i=e("pMnS"),o=e("oBZk"),r=e("ZZ/e"),s=e("s7LF"),a=e("mrSG"),b=e("cgVw");class h{constructor(l,n,e,u){this.toastController=l,this.loadingController=n,this.imgstore=e,this.router=u}ngOnInit(){this.showingloader=!1}ionViewWillEnter(){""!=this.imgstore.imgcur&&""!=this.imgstore.imgusrsee&&null!=this.imgstore.imgcur&&null!=this.imgstore.imgusrsee||this.router.navigate([this.router.url.slice(0,-1)+"1"])}validateEmail(l){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(l).toLowerCase())}presentPopover(){return a.b(this,void 0,void 0,function*(){const l=document.querySelector("ion-popover-controller"),n=yield l.create({component:"profile-page",event});return yield n.present()})}showLoading(){this.showingloader||(this.showingloader=!0,this.loader=this.loadingController.create({message:"Loading",spinner:"bubbles",mode:"ios"}).then(l=>{l.present()}))}hideLoading(){this.loader.then(()=>{this.loadingController.dismiss(),this.showingloader=!1})}showToaster(l){this.toastController.create({message:l,duration:2e3}).then(l=>{l.present()})}submit(){this.validateEmail(this.email)?(this.showLoading(),this.imgstore.setemail(this.email),this.hideLoading(),this.router.navigate([this.router.url.slice(0,-1)+"3"])):this.showToaster("Invalid Email Format")}}var d=e("iInd"),c=u.qb({encapsulation:0,styles:[[""]],data:{}});function g(l){return u.Jb(0,[(l()(),u.sb(0,0,null,null,6,"ion-header",[],null,null,null,o.E,o.i)),u.rb(1,49152,null,0,r.z,[u.h,u.k,u.x],null,null),(l()(),u.sb(2,0,null,0,4,"ion-toolbar",[],null,null,null,o.R,o.v)),u.rb(3,49152,null,0,r.zb,[u.h,u.k,u.x],null,null),(l()(),u.sb(4,0,null,0,2,"ion-title",[],null,null,null,o.P,o.t)),u.rb(5,49152,null,0,r.xb,[u.h,u.k,u.x],null,null),(l()(),u.Ib(-1,0,[" Email "])),(l()(),u.sb(7,0,null,null,21,"ion-content",[],null,null,null,o.C,o.g)),u.rb(8,49152,null,0,r.s,[u.h,u.k,u.x],null,null),(l()(),u.sb(9,0,null,0,19,"ion-card",[],null,null,null,o.A,o.c)),u.rb(10,49152,null,0,r.k,[u.h,u.k,u.x],null,null),(l()(),u.sb(11,0,null,0,2,"ion-card-header",[],null,null,null,o.z,o.e)),u.rb(12,49152,null,0,r.m,[u.h,u.k,u.x],null,null),(l()(),u.Ib(-1,0,[" If you confirm you want to knit the pattern below, please enter your Email Address below. Otherwise, Please modify the picture until you confirm: "])),(l()(),u.sb(14,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),u.sb(15,0,null,0,8,"ion-card-content",[],null,null,null,o.y,o.d)),u.rb(16,49152,null,0,r.l,[u.h,u.k,u.x],null,null),(l()(),u.sb(17,0,null,0,6,"ion-input",[["placeholder","Enter Email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,e){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==u.Eb(l,19)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Eb(l,19)._handleInputEvent(e.target)&&t),"ngModelChange"===n&&(t=!1!==(i.email=e)&&t),t},o.G,o.k)),u.rb(18,49152,null,0,r.E,[u.h,u.k,u.x],{placeholder:[0,"placeholder"]},null),u.rb(19,16384,null,0,r.Kb,[u.k],null,null),u.Fb(1024,null,s.b,function(l){return[l]},[r.Kb]),u.rb(21,671744,null,0,s.e,[[8,null],[8,null],[8,null],[6,s.b]],{model:[0,"model"]},{update:"ngModelChange"}),u.Fb(2048,null,s.c,null,[s.e]),u.rb(23,16384,null,0,s.d,[[4,s.c]],null,null),(l()(),u.sb(24,0,null,0,4,"ion-card-content",[],null,null,null,o.y,o.d)),u.rb(25,49152,null,0,r.l,[u.h,u.k,u.x],null,null),(l()(),u.sb(26,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.submit()&&u),u},o.x,o.b)),u.rb(27,49152,null,0,r.i,[u.h,u.k,u.x],{expand:[0,"expand"]},null),(l()(),u.Ib(-1,0,[" Done "]))],function(l,n){var e=n.component;l(n,18,0,"Enter Email"),l(n,21,0,e.email),l(n,27,0,"block")},function(l,n){l(n,14,0,n.component.imgstore.imgusrsee),l(n,17,0,u.Eb(n,23).ngClassUntouched,u.Eb(n,23).ngClassTouched,u.Eb(n,23).ngClassPristine,u.Eb(n,23).ngClassDirty,u.Eb(n,23).ngClassValid,u.Eb(n,23).ngClassInvalid,u.Eb(n,23).ngClassPending)})}function m(l){return u.Jb(0,[(l()(),u.sb(0,0,null,null,1,"app-tab2",[],null,null,null,g,c)),u.rb(1,114688,null,0,h,[r.Lb,r.Db,b.a,d.m],null,null)],function(l,n){l(n,1,0)},null)}var p=u.ob("app-tab2",h,m,{},{},[]),C=e("SVse");e.d(n,"Tab2PageModuleNgFactory",function(){return v});var v=u.pb(t,[],function(l){return u.Bb([u.Cb(512,u.j,u.ab,[[8,[i.a,p]],[3,u.j],u.v]),u.Cb(4608,C.k,C.j,[u.s,[2,C.r]]),u.Cb(4608,r.a,r.a,[u.x,u.g]),u.Cb(4608,r.Eb,r.Eb,[r.a,u.j,u.p]),u.Cb(4608,r.Hb,r.Hb,[r.a,u.j,u.p]),u.Cb(4608,s.g,s.g,[]),u.Cb(1073742336,C.b,C.b,[]),u.Cb(1073742336,r.Bb,r.Bb,[]),u.Cb(1073742336,s.f,s.f,[]),u.Cb(1073742336,s.a,s.a,[]),u.Cb(1073742336,d.o,d.o,[[2,d.t],[2,d.m]]),u.Cb(1073742336,t,t,[]),u.Cb(1024,d.k,function(){return[[{path:"",component:h}]]},[])])})}}]);