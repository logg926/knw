(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{mgaC:function(e,t,i){"use strict";i.r(t),i.d(t,"ion_modal",function(){return p});var o=i("S6Yj"),a=(i("OoTa"),i("1iah")),s=(i("igpV"),i("zZxQ")),n=i("pyhm"),r=i("tkfp"),d=i("qKn2");const l=e=>{const t=Object(a.a)(),i=Object(a.a)(),o=Object(a.a)();return i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.4),o.addElement(e.querySelector(".modal-wrapper")).beforeStyles({opacity:1}).fromTo("transform","translateY(100%)","translateY(0%)"),t.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(400).beforeAddClass("show-modal").addAnimation([i,o])},c=e=>{const t=Object(a.a)(),i=Object(a.a)(),o=Object(a.a)(),s=e.querySelector(".modal-wrapper"),n=s.getBoundingClientRect();return i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.4,0),o.addElement(s).beforeStyles({opacity:1}).fromTo("transform","translateY(0%)",`translateY(${e.ownerDocument.defaultView.innerHeight-n.top}px)`),t.addElement(e).easing("ease-out").duration(250).addAnimation([i,o])},h=e=>{const t=Object(a.a)(),i=Object(a.a)(),o=Object(a.a)();return i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.32),o.addElement(e.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]),t.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).beforeAddClass("show-modal").addAnimation([i,o])},m=e=>{const t=Object(a.a)(),i=Object(a.a)(),o=Object(a.a)(),s=e.querySelector(".modal-wrapper");return i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.32,0),o.addElement(s).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]),t.addElement(e).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([i,o])},p=class{constructor(e){Object(o.m)(this,e),this.presented=!1,this.mode=Object(o.e)(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.onBackdropTap=()=>{this.dismiss(void 0,s.a)},this.onDismiss=e=>{e.stopPropagation(),e.preventDefault(),this.dismiss()},this.onLifecycle=e=>{const t=this.usersElement,i=b[e.type];if(t&&i){const o=new CustomEvent(i,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(o)}},this.didPresent=Object(o.d)(this,"ionModalDidPresent",7),this.willPresent=Object(o.d)(this,"ionModalWillPresent",7),this.willDismiss=Object(o.d)(this,"ionModalWillDismiss",7),this.didDismiss=Object(o.d)(this,"ionModalDidDismiss",7)}async present(){if(this.presented)return;const e=this.el.querySelector(".modal-wrapper");if(!e)throw new Error("container is undefined");const t=Object.assign({},this.componentProps,{modal:this.el});return this.usersElement=await Object(r.a)(this.delegate,e,this.component,["ion-page"],t),await Object(d.a)(this.usersElement),Object(s.e)(this,"modalEnter",l,h)}async dismiss(e,t){const i=await Object(s.f)(this,e,t,"modalLeave",c,m);return i&&await Object(r.b)(this.delegate,this.usersElement),i}onDidDismiss(){return Object(s.g)(this.el,"ionModalDidDismiss")}onWillDismiss(){return Object(s.g)(this.el,"ionModalWillDismiss")}render(){const e=Object(o.e)(this);return Object(o.i)(o.a,{"no-router":!0,"aria-modal":"true",class:Object.assign({[e]:!0},Object(n.b)(this.cssClass)),style:{zIndex:`${2e4+this.overlayIndex}`},onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle},Object(o.i)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(o.i)("div",{role:"dialog",class:{"modal-wrapper":!0,[e]:!0}}))}get el(){return Object(o.f)(this)}static get style(){return".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color,#fff);--box-shadow:none;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width:768px) and (min-height:768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}"}},b={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"}}}]);