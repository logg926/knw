(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"8cDG":function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),e=function(){return function(){}}(),o=t("pMnS"),i=t("oBZk"),r=t("ZZ/e"),a=t("gIcY"),s=t("mrSG"),b=t("cgVw"),c=function(){function n(n,l,t,u){this.toastController=n,this.loadingController=l,this.imgstore=t,this.router=u}return n.prototype.ngOnInit=function(){this.showingloader=!1},n.prototype.ionViewWillEnter=function(){""!=this.imgstore.imgcur&&""!=this.imgstore.imgusrsee&&null!=this.imgstore.imgcur&&null!=this.imgstore.imgusrsee||this.router.navigate([this.router.url.slice(0,-1)+"1"])},n.prototype.validateEmail=function(n){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(n).toLowerCase())},n.prototype.presentPopover=function(){return s.b(this,void 0,void 0,function(){return s.e(this,function(n){switch(n.label){case 0:return[4,document.querySelector("ion-popover-controller").create({component:"profile-page",event:event})];case 1:return[4,n.sent().present()];case 2:return[2,n.sent()]}})})},n.prototype.showLoading=function(){this.showingloader||(this.showingloader=!0,this.loader=this.loadingController.create({message:"Loading",spinner:"bubbles",mode:"ios"}).then(function(n){n.present()}))},n.prototype.hideLoading=function(){var n=this;this.loader.then(function(){n.loadingController.dismiss(),n.showingloader=!1})},n.prototype.showToaster=function(n){this.toastController.create({message:n,duration:2e3}).then(function(n){n.present()})},n.prototype.submit=function(){this.validateEmail(this.email)?(this.showLoading(),this.imgstore.setemail(this.email),this.hideLoading(),this.router.navigate([this.router.url.slice(0,-1)+"3"])):this.showToaster("Invalid Email Format")},n}(),h=t("ZYCi"),d=u.sb({encapsulation:0,styles:[[""]],data:{}});function g(n){return u.Lb(0,[(n()(),u.ub(0,0,null,null,6,"ion-header",[],null,null,null,i.E,i.i)),u.tb(1,49152,null,0,r.z,[u.h,u.k,u.z],null,null),(n()(),u.ub(2,0,null,0,4,"ion-toolbar",[],null,null,null,i.R,i.v)),u.tb(3,49152,null,0,r.zb,[u.h,u.k,u.z],null,null),(n()(),u.ub(4,0,null,0,2,"ion-title",[],null,null,null,i.P,i.t)),u.tb(5,49152,null,0,r.xb,[u.h,u.k,u.z],null,null),(n()(),u.Kb(-1,0,[" Email "])),(n()(),u.ub(7,0,null,null,21,"ion-content",[],null,null,null,i.C,i.g)),u.tb(8,49152,null,0,r.s,[u.h,u.k,u.z],null,null),(n()(),u.ub(9,0,null,0,19,"ion-card",[],null,null,null,i.A,i.c)),u.tb(10,49152,null,0,r.k,[u.h,u.k,u.z],null,null),(n()(),u.ub(11,0,null,0,2,"ion-card-header",[],null,null,null,i.z,i.e)),u.tb(12,49152,null,0,r.m,[u.h,u.k,u.z],null,null),(n()(),u.Kb(-1,0,[" If you confirm you want to knit the pattern below, please enter your Email Address below. Otherwise, Please modify the picture until you confirm: "])),(n()(),u.ub(14,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),u.ub(15,0,null,0,8,"ion-card-content",[],null,null,null,i.y,i.d)),u.tb(16,49152,null,0,r.l,[u.h,u.k,u.z],null,null),(n()(),u.ub(17,0,null,0,6,"ion-input",[["placeholder","Enter Email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,t){var e=!0,o=n.component;return"ionBlur"===l&&(e=!1!==u.Gb(n,19)._handleBlurEvent(t.target)&&e),"ionChange"===l&&(e=!1!==u.Gb(n,19)._handleInputEvent(t.target)&&e),"ngModelChange"===l&&(e=!1!==(o.email=t)&&e),e},i.G,i.k)),u.tb(18,49152,null,0,r.E,[u.h,u.k,u.z],{placeholder:[0,"placeholder"]},null),u.tb(19,16384,null,0,r.Kb,[u.k],null,null),u.Hb(1024,null,a.b,function(n){return[n]},[r.Kb]),u.tb(21,671744,null,0,a.e,[[8,null],[8,null],[8,null],[6,a.b]],{model:[0,"model"]},{update:"ngModelChange"}),u.Hb(2048,null,a.c,null,[a.e]),u.tb(23,16384,null,0,a.d,[[4,a.c]],null,null),(n()(),u.ub(24,0,null,0,4,"ion-card-content",[],null,null,null,i.y,i.d)),u.tb(25,49152,null,0,r.l,[u.h,u.k,u.z],null,null),(n()(),u.ub(26,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.submit()&&u),u},i.x,i.b)),u.tb(27,49152,null,0,r.i,[u.h,u.k,u.z],{expand:[0,"expand"]},null),(n()(),u.Kb(-1,0,[" Done "]))],function(n,l){var t=l.component;n(l,18,0,"Enter Email"),n(l,21,0,t.email),n(l,27,0,"block")},function(n,l){n(l,14,0,l.component.imgstore.imgusrsee),n(l,17,0,u.Gb(l,23).ngClassUntouched,u.Gb(l,23).ngClassTouched,u.Gb(l,23).ngClassPristine,u.Gb(l,23).ngClassDirty,u.Gb(l,23).ngClassValid,u.Gb(l,23).ngClassInvalid,u.Gb(l,23).ngClassPending)})}function p(n){return u.Lb(0,[(n()(),u.ub(0,0,null,null,1,"app-tab2",[],null,null,null,g,d)),u.tb(1,114688,null,0,c,[r.Lb,r.Db,b.a,h.m],null,null)],function(n,l){n(l,1,0)},null)}var m=u.qb("app-tab2",c,p,{},{},[]),f=t("Ip0R");t.d(l,"Tab2PageModuleNgFactory",function(){return E});var E=u.rb(e,[],function(n){return u.Db([u.Eb(512,u.j,u.cb,[[8,[o.a,m]],[3,u.j],u.x]),u.Eb(4608,f.k,f.j,[u.u,[2,f.r]]),u.Eb(4608,r.a,r.a,[u.z,u.g]),u.Eb(4608,r.Eb,r.Eb,[r.a,u.j,u.q]),u.Eb(4608,r.Hb,r.Hb,[r.a,u.j,u.q]),u.Eb(4608,a.g,a.g,[]),u.Eb(1073742336,f.b,f.b,[]),u.Eb(1073742336,r.Bb,r.Bb,[]),u.Eb(1073742336,a.f,a.f,[]),u.Eb(1073742336,a.a,a.a,[]),u.Eb(1073742336,h.o,h.o,[[2,h.t],[2,h.m]]),u.Eb(1073742336,e,e,[]),u.Eb(1024,h.k,function(){return[[{path:"",component:c}]]},[])])})}}]);