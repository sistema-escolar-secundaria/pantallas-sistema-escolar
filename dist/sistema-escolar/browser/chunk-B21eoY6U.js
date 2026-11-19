import{_ as ot,a as L,b as st,c as U,o as M,s as Q,t as $}from"./chunk-CHHYoMTi.js";import{o as yn}from"./chunk-C8FGG_OT.js";import{S as he,g as _,l as Ot,p as Xt,v as ee,y as es}from"./chunk-b_Y57IRQ.js";import{$n as yw,B as Hw,C as Fd,Dt as XD,E as G,Gt as dg,Ht as cw,Nt as Yh,Ot as XI,Rt as b,Y as L$1,_n as ne,an as ig,cn as ju,en as g,er as zh,et as Mu,ft as RD,gn as mw,in as ie,it as Ou,j as Gn,jn as rg,l as AC,lt as Qi,nt as Ne,ot as Q$1,q as Kh,qt as dw,st as QI,tt as NI,un as kd,ut as Qn,vt as Uh,w as Fs,yn as ny}from"./main-KNENK77K.js";var pt=Math.pow(2,31)-1;var h=class{_overlayRef;instance;containerInstance;_afterDismissed=new Q$1;_afterOpened=new Q$1;_onAction=new Q$1;_durationTimeoutId;_dismissedByAction=!1;constructor(f,t){this._overlayRef=t,this.containerInstance=f,f._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(f){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(f,pt))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}};var lt=new b(`MatSnackBarData`);var d=class{politeness=`polite`;announcementMessage=``;viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition=`center`;verticalPosition=`bottom`};var ut=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵdir=Mu({type:i,selectors:[[``,`matSnackBarLabel`,``]],hostAttrs:[1,`mat-mdc-snack-bar-label`,`mdc-snackbar__label`]})}return i})();var bt=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵdir=Mu({type:i,selectors:[[``,`matSnackBarActions`,``]],hostAttrs:[1,`mat-mdc-snack-bar-actions`,`mdc-snackbar__actions`]})}return i})();var ht=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵdir=Mu({type:i,selectors:[[``,`matSnackBarAction`,``]],hostAttrs:[1,`mat-mdc-snack-bar-action`,`mdc-snackbar__action`]})}return i})();var ft=(()=>{class i{snackBarRef=g(h);data=g(lt);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){function t(n,e){if(n&1){let a=cw();Qi(0,`div`,1)(1,`button`,2),rg(`click`,function(){kd(a);let s=dw();return Fd(s.action())}),Hw(2),Ou()()}if(n&2){let a=dw();XD(2),ju(` `,a.data.action,` `)}}return NI({type:i,selectors:[[`simple-snack-bar`]],hostAttrs:[1,`mat-mdc-simple-snack-bar`],exportAs:[`matSnackBar`],decls:3,vars:2,consts:[[`matSnackBarLabel`,``],[`matSnackBarActions`,``],[`matButton`,``,`matSnackBarAction`,``,3,`click`]],template:function(e,a){e&1&&(Qi(0,`div`,0),Hw(1),Ou(),QI(2,t,3,1,`div`,1)),e&2&&(XD(),ju(` `,a.data.message,`
`),XD(),XI(a.hasAction?2:-1))},dependencies:[yn,ut,bt,ht],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})})()}return i})();var T=`_mat-snack-bar-enter`;var R=`_mat-snack-bar-exit`;var _t=(()=>{class i extends ${_ngZone=g(ne);_elementRef=g(Qn);_changeDetectorRef=g(AC);_platform=g(_);_animationsDisabled=es();snackBarConfig=g(d);_document=g(G);_trackedModals=/* @__PURE__ */ new Set;_enterFallback;_exitFallback;_injector=g(ie);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new Q$1;_onExit=new Q$1;_onEnter=new Q$1;_animationState=`void`;_live;_label;_role;_liveElementId=g(he).getId(`mat-snack-bar-container-live-`);constructor(){super();let t=this.snackBarConfig;t.politeness===`assertive`&&!t.announcementMessage?this._live=`assertive`:t.politeness===`off`?this._live=`off`:this._live=`polite`,this._platform.FIREFOX&&(this._live===`polite`&&(this._role=`status`),this._live===`assertive`&&(this._role=`alert`))}attachComponentPortal(t){this._assertNotAttached();let n=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),n}attachTemplatePortal(t){this._assertNotAttached();let n=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),n}attachDomPortal=t=>{this._assertNotAttached();let n=this._portalOutlet.attachDomPortal(t);return this._afterPortalAttached(),n};onAnimationEnd(t){t===R?this._completeExit():t===T&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?RD(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(T)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-snack-bar-fallback-visible`),this.onAnimationEnd(T)},200)))}exit(){return this._destroyed?Fs(void 0):(this._ngZone.run(()=>{this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute(`mat-exit`,``),clearTimeout(this._announceTimeoutId),this._animationsDisabled?RD(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(R)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(R),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,n=this.snackBarConfig.panelClass;n&&(Array.isArray(n)?n.forEach(r=>t.classList.add(r)):t.classList.add(n)),this._exposeToModals();let e=this._label.nativeElement,a=`mdc-snackbar__label`;e.classList.toggle(a,!e.querySelector(`.${a}`))}_exposeToModals(){let t=this._liveElementId,n=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let e=0;e<n.length;e++){let a=n[e],r=a.getAttribute(`aria-owns`);this._trackedModals.add(a),r?r.indexOf(t)===-1&&a.setAttribute(`aria-owns`,r+` `+t):a.setAttribute(`aria-owns`,t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let n=t.getAttribute(`aria-owns`);if(n){let e=n.replace(this._liveElementId,``).trim();e.length>0?t.setAttribute(`aria-owns`,e):t.removeAttribute(`aria-owns`)}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let t=this._elementRef.nativeElement,n=t.querySelector(`[aria-hidden]`),e=t.querySelector(`[aria-live]`);if(n&&e){let a=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&n.contains(document.activeElement)&&(a=document.activeElement),n.removeAttribute(`aria-hidden`),e.appendChild(n),a?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){let t=[`label`];function n(e,a){}return NI({type:i,selectors:[[`mat-snack-bar-container`]],viewQuery:function(a,r){if(a&1&&ig(ot,7)(t,7),a&2){let s;mw(s=yw())&&(r._portalOutlet=s.first),mw(s=yw())&&(r._label=s.first)}},hostAttrs:[1,`mdc-snackbar`,`mat-mdc-snack-bar-container`],hostVars:6,hostBindings:function(a,r){a&1&&rg(`animationend`,function(c){return r.onAnimationEnd(c.animationName)})(`animationcancel`,function(c){return r.onAnimationEnd(c.animationName)}),a&2&&dg(`mat-snack-bar-container-enter`,r._animationState===`visible`)(`mat-snack-bar-container-exit`,r._animationState===`hidden`)(`mat-snack-bar-container-animations-enabled`,!r._animationsDisabled)},features:[Uh],decls:6,vars:3,consts:[[`label`,``],[1,`mdc-snackbar__surface`,`mat-mdc-snackbar-surface`],[1,`mat-mdc-snack-bar-label`],[`aria-hidden`,`true`],[`cdkPortalOutlet`,``]],template:function(a,r){a&1&&(Qi(0,`div`,1)(1,`div`,2,0)(3,`div`,3),zh(4,n,0,0,`ng-template`,4),Ou(),Kh(5,`div`),Ou()()),a&2&&(XD(5),Yh(`aria-live`,r._live)(`role`,r._role)(`id`,r._liveElementId))},dependencies:[ot],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--%NS%mat-snack-bar-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-snack-bar-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-snack-bar-container-color, var(--%NS%mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--%NS%mat-snack-bar-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-snack-bar-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-snack-bar-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  line-height: var(--%NS%mat-snack-bar-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--%NS%mat-snack-bar-button-color, var(--%NS%mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --%NS%mat-button-text-state-layer-color: currentColor;
  --%NS%mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})})()}return i})();var kt=new b(`mat-snack-bar-default-options`,{providedIn:`root`,factory:()=>new d});var Ht=(()=>{class i{_live=g(Ot);_injector=g(ie);_breakpointObserver=g(ee);_parentSnackBar=g(i,{optional:!0,skipSelf:!0});_defaultConfig=g(kt);_animationsDisabled=es();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=ft;snackBarContainerComponent=_t;handsetCssClass=`mat-mdc-snack-bar-handset`;get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}openFromComponent(t,n){return this._attach(t,n)}openFromTemplate(t,n){return this._attach(t,n)}open(t,n=``,e){let a=L$1(L$1({},this._defaultConfig),e);return a.data={message:t,action:n},a.announcementMessage===t&&(a.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,a)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,n){let e=n&&n.viewContainerRef&&n.viewContainerRef.injector,a=ie.create({parent:e||this._injector,providers:[{provide:d,useValue:n}]}),r=new U(this.snackBarContainerComponent,n.viewContainerRef,a),s=t.attach(r);return s.instance.snackBarConfig=n,s.instance}_attach(t,n){let e=L$1(L$1(L$1({},new d),this._defaultConfig),n),a=this._createOverlay(e),r=this._attachSnackBarContainer(a,e),s=new h(r,a);if(t instanceof Gn){let c=new M(t,null,{$implicit:e.data,snackBarRef:s});s.instance=r.attachTemplatePortal(c)}else{let c=this._createInjector(e,s),mt=new U(t,void 0,c);s.instance=r.attachComponentPortal(mt).instance}return this._breakpointObserver.observe(Xt.HandsetPortrait).pipe(ny(a.detachments())).subscribe(c=>{a.overlayElement.classList.toggle(this.handsetCssClass,c.matches)}),e.announcementMessage&&r._onAnnounce.subscribe(()=>{this._live.announce(e.announcementMessage,e.politeness)}),this._animateSnackBar(s,e),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(t,n){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),n.announcementMessage&&this._live.clear()}),n.duration&&n.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(n.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter()}_createOverlay(t){let n=new L;n.direction=t.direction;let e=Q(this._injector),a=t.direction===`rtl`,r=t.horizontalPosition===`left`||t.horizontalPosition===`start`&&!a||t.horizontalPosition===`end`&&a,s=!r&&t.horizontalPosition!==`center`;return r?e.left(`0`):s?e.right(`0`):e.centerHorizontally(),t.verticalPosition===`top`?e.top(`0`):e.bottom(`0`),n.positionStrategy=e,n.disableAnimations=this._animationsDisabled,st(this._injector,n)}_createInjector(t,n){let e=t&&t.viewContainerRef&&t.viewContainerRef.injector;return ie.create({parent:e||this._injector,providers:[{provide:h,useValue:n},{provide:lt,useValue:t.data}]})}static ɵfac=function(n){return new(n||i)};static ɵprov=Ne({token:i,factory:i.ɵfac})}return i})();export{Ht as t};