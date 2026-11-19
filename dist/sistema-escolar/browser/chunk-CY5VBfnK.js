import{t as C}from"./chunk-BXcgUFip.js";import{$n as yw,A as Gm,B as Hw,Bn as tw,Bt as br,C as Fd,Dn as qd,Dt as XD,E as G,En as pw,Et as Wm,Gn as vg,Gt as dg,H as In,Hn as uj,Ht as cw,Mt as Xw,Nt as Yh,Ot as XI,Pt as Yw,Rt as b,T as Fu,Un as up,Ut as dH,Vn as ty,X as Li,Z as Ls,_n as ne,a as ue,an as ig,b as Ei,bn as oe,bt as Vi,c as $m,ct as Qh,dn as ku,en as g,fn as lg,ft as RD,gn as mw,i as hr,in as ie,it as Ou,jn as rg,kt as Xh,l as AC,lt as Qi,mn as ls,mt as Rt,n as Nt,nr as s,o as a,ot as Q,q as Kh,qt as dw,r as Uo,rn as hw,s as $e,st as QI,t as G$1,tt as NI,un as kd,ut as Qn,v as Dw,vn as nw,vt as Uh,xn as og,yn as ny}from"./main-KNENK77K.js";import{i as Ke,n as I,o as Qe}from"./chunk-C0bA7zVm.js";import{a as xn,o as yn,r as Rt$1}from"./chunk-C8FGG_OT.js";import{o as b$1}from"./chunk-BqpvepPx.js";import{D as ne$1,N as ss,P as tt,a as Ge,b as fs,g as _,k as ot$1,r as Bt,u as St,v as ee,y as es}from"./chunk-b_Y57IRQ.js";var nt=new b(`MAT_DRAWER_DEFAULT_AUTOSIZE`,{providedIn:`root`,factory:()=>!1});var me=new b(`MAT_DRAWER_CONTAINER`);var H=(()=>{class r extends Ke{_platform=g(_);_changeDetectorRef=g(AC);_element=g(Qn);_ngZone=g(ne);_isInert=!1;_container=g(le);ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>this._changeDetectorRef.markForCheck())}_drawerToggled(e){e.opened?this._ngZone.runOutsideAngular(()=>{e._animationEnd.pipe(Wm(50),In(1)).subscribe(()=>this._updateInert())}):this._updateInert()}_drawerModeChanged(){this._updateInert()}_updateInert(){let e=this._container._isShowingBackdrop();if(e!==this._isInert){let t=this._element.nativeElement;this._isInert=e,e?t.setAttribute(`inert`,`true`):t.removeAttribute(`inert`)}}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!==`over`&&e.opened||t!=null&&t.mode!==`over`&&t.opened}static ɵfac=(()=>{let e;return function(n){return(e||(e=up(r)))(n||r)}})();static ɵcmp=(function(){return NI({type:r,selectors:[[`mat-drawer-content`]],hostAttrs:[1,`mat-drawer-content`],hostVars:6,hostBindings:function(n,a){n&2&&(lg(`margin-left`,a._container._contentMargins.left,`px`)(`margin-right`,a._container._contentMargins.right,`px`),dg(`mat-drawer-content-hidden`,a._shouldBeHidden()))},features:[Yw([{provide:Ke,useExisting:r}]),Uh],ngContentSelectors:[`*`],decls:1,vars:0,template:function(n,a){n&1&&(pw(),hw(0))},encapsulation:2})})()}return r})();var ce=(()=>{class r{_elementRef=g(Qn);_focusTrapFactory=g(St);_focusMonitor=g(Ge);_platform=g(_);_ngZone=g(ne);_renderer=g(Vi);_interactivityChecker=g(tt);_doc=g(G);_isAnimating=!1;_container=g(me,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e===`end`?`end`:`start`,e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position=`start`;get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next(),this._getContent()?._drawerModeChanged()}_mode=`over`;get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=ss(e)}_disableClose=!1;get autoFocus(){return this._autoFocus??(this.mode===`side`?`dialog`:`first-tabbable`)}set autoFocus(e){(e===`true`||e===`false`||e==null)&&(e=ss(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(ss(e))}_opened=Ei(!1);_openedVia=null;_animationStarted=new Q;_animationEnd=new Q;openedChange=new $e(!0);_openedStream=this.openedChange.pipe(Rt(e=>e),oe(()=>{}));openedStart=this._animationStarted.pipe(Rt(()=>this.opened),Ls(void 0));_closedStream=this.openedChange.pipe(Rt(e=>!e),oe(()=>{}));closedStart=this._animationStarted.pipe(Rt(()=>!this.opened),Ls(void 0));_destroyed=new Q;onPositionChanged=new $e;_content;_modeChanged=new Q;_injector=g(ie);_changeDetectorRef=g(AC);constructor(){this.openedChange.pipe(ny(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||`program`)}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,`keydown`,n=>{n.keyCode===27&&!this.disableClose&&!ot$1(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault()})}),e.listen(t,`transitionend`,this._handleTransitionEvent),e.listen(t,`transitioncancel`,this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&(this._interactivityChecker.isFocusable(n)||(n.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let a=()=>{i(),s(),n.removeAttribute(`tabindex`)},i=this._renderer.listen(n,`blur`,a),s=this._renderer.listen(n,`mousedown`,a)})),n.focus(t))}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case`dialog`:return;case!0:case`first-tabbable`:RD(()=>{let t=this._isAnimating?{preventScroll:!0}:void 0;!this._focusTrap.focusInitialElement(t)&&typeof e.focus==`function`&&e.focus(t)},{injector:this._injector});break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`);break;default:this._focusByCssSelector(this.autoFocus)}}_restoreFocus(e){this.autoFocus!==`dialog`&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position===`end`&&this._updatePositionInParent(`end`),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,`mouse`)}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let n=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||`program`);return e||(this._openedVia=null),n}_setOpen(e,t,n){return e===this.opened?Promise.resolve(e?`open`:`close`):(this._opened.set(e),this._getContent()?._drawerToggled(this),this._container?._transitionsEnabled?this._isAnimating?(this._setIsAnimating(!1),this._simulateAnimation()):(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):this._simulateAnimation(),this._elementRef.nativeElement.classList.toggle(`mat-drawer-opened`,e),!e&&t&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(a=>{this.openedChange.pipe(In(1)).subscribe(i=>a(i?`open`:`close`))}))}_getContent(){return this._container?._content||this._container?._userContent}_setIsAnimating(e){e!==this._isAnimating&&(this._isAnimating=e,this._elementRef.nativeElement.classList.toggle(`mat-drawer-animating`,e))}_simulateAnimation(){setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()})}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,n=t.parentNode;e===`end`?(this._anchor||(this._anchor=this._doc.createComment(`mat-drawer-anchor`),n.insertBefore(this._anchor,t)),n.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type===`transitionend`&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static ɵfac=function(t){return new(t||r)};static ɵcmp=(function(){let e=[`content`];return NI({type:r,selectors:[[`mat-drawer`]],viewQuery:function(a,i){if(a&1&&ig(e,5),a&2){let s;mw(s=yw())&&(i._content=s.first)}},hostAttrs:[1,`mat-drawer`],hostVars:12,hostBindings:function(a,i){a&2&&(Yh(`align`,null)(`tabIndex`,i.mode!==`side`?`-1`:null),lg(`visibility`,!i._container&&!i.opened?`hidden`:null),dg(`mat-drawer-end`,i.position===`end`)(`mat-drawer-over`,i.mode===`over`)(`mat-drawer-push`,i.mode===`push`)(`mat-drawer-side`,i.mode===`side`))},inputs:{position:`position`,mode:`mode`,disableClose:`disableClose`,autoFocus:`autoFocus`,opened:`opened`},outputs:{openedChange:`openedChange`,_openedStream:`opened`,openedStart:`openedStart`,_closedStream:`closed`,closedStart:`closedStart`,onPositionChanged:`positionChanged`},exportAs:[`matDrawer`],ngContentSelectors:[`*`],decls:3,vars:0,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-drawer-inner-container`]],template:function(a,i){a&1&&(pw(),Qi(0,`div`,1,0),hw(2),Ou())},dependencies:[Ke],encapsulation:2})})()}return r})();var le=(()=>{class r{_dir=g(Bt,{optional:!0});_element=g(Qn);_ngZone=g(ne);_changeDetectorRef=g(AC);_animationDisabled=es();_transitionsEnabled=!1;_allDrawers;_drawers=new Li;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=ss(e)}_autosize=g(nt);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:ss(e)}_backdropOverride=null;backdropClick=new $e;_start=null;_end=null;_left=null;_right=null;_destroyed=new Q;_doCheckSubject=new Q;_contentMargins={left:null,right:null};_contentMarginChanges=new Q;get scrollable(){return this._userContent||this._content}_injector=g(ie);constructor(){let e=g(_),t=g(Qe);this._dir?.change.pipe(ny(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(ny(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add(`mat-drawer-transition`),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(ty(this._allDrawers),ny(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(ty(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Gm(10),ny(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode==`side`)e+=this._left._getWidth();else if(this._left.mode==`push`){let n=this._left._getWidth();e+=n,t-=n}}if(this._right&&this._right.opened){if(this._right.mode==`side`)t+=this._right._getWidth();else if(this._right.mode==`push`){let n=this._right._getWidth();t+=n,e-=n}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(ny(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!==`side`&&e.openedChange.pipe(ny(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(ny(this._drawers.changes)).subscribe(()=>{RD({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(ny($m(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,n=`mat-drawer-container-has-open`;e?t.add(n):t.remove(n)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position==`end`?(this._end,this._end=e):(this._start,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value===`rtl`?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!=`over`||this._isDrawerOpen(this._end)&&this._end.mode!=`over`}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!==`side`:this._backdropOverride}static ɵfac=function(t){return new(t||r)};static ɵcmp=(function(){let e=[[[`mat-drawer`],[`mat-sidenav`]],[[`mat-drawer-content`],[`mat-sidenav-content`]],`*`],t=[`mat-drawer, mat-sidenav`,`mat-drawer-content, mat-sidenav-content`,`*`];function n(i,s){if(i&1){let d=cw();Qi(0,`div`,1),rg(`click`,function(){kd(d);let u=dw();return Fd(u._onBackdropClicked())}),Ou()}if(i&2){let d=dw();dg(`mat-drawer-shown`,d._isShowingBackdrop())}}function a(i,s){i&1&&(Qi(0,`mat-drawer-content`),hw(1,2),Ou())}return NI({type:r,selectors:[[`mat-drawer-container`]],contentQueries:function(s,d,w){if(s&1&&og(w,H,5)(w,ce,5),s&2){let u;mw(u=yw())&&(d._content=u.first),mw(u=yw())&&(d._allDrawers=u)}},viewQuery:function(s,d){if(s&1&&ig(H,5),s&2){let w;mw(w=yw())&&(d._userContent=w.first)}},hostAttrs:[1,`mat-drawer-container`],hostVars:2,hostBindings:function(s,d){s&2&&dg(`mat-drawer-container-explicit-backdrop`,d._backdropOverride)},inputs:{autosize:`autosize`,hasBackdrop:`hasBackdrop`},outputs:{backdropClick:`backdropClick`},exportAs:[`matDrawerContainer`],features:[Yw([{provide:me,useExisting:r}])],ngContentSelectors:t,decls:4,vars:2,consts:[[1,`mat-drawer-backdrop`,3,`mat-drawer-shown`],[1,`mat-drawer-backdrop`,3,`click`]],template:function(s,d){s&1&&(pw(e),QI(0,n,1,2,`div`,0),hw(1),hw(2,1),QI(3,a,2,0,`mat-drawer-content`)),s&2&&(XI(d.hasBackdrop?0:-1),XD(3),XI(d._content?-1:3))},dependencies:[H],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--%NS%mat-sidenav-content-text-color, var(--%NS%mat-sys-on-background));
  background-color: var(--%NS%mat-sidenav-content-background-color, var(--%NS%mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--%NS%mat-sidenav-scrim-color, color-mix(in srgb, var(--%NS%mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--%NS%mat-sidenav-container-text-color, var(--%NS%mat-sys-on-surface-variant));
  box-shadow: var(--%NS%mat-sidenav-container-elevation-shadow, none);
  background-color: var(--%NS%mat-sidenav-container-background-color, var(--%NS%mat-sys-surface));
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  width: var(--%NS%mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2})})()}return r})();var K=(()=>{class r extends H{static ɵfac=(()=>{let e;return function(n){return(e||(e=up(r)))(n||r)}})();static ɵcmp=(function(){return NI({type:r,selectors:[[`mat-sidenav-content`]],hostAttrs:[1,`mat-drawer-content`,`mat-sidenav-content`],features:[Yw([{provide:Ke,useExisting:r},{provide:H,useExisting:r}]),Uh],ngContentSelectors:[`*`],decls:1,vars:0,template:function(n,a){n&1&&(pw(),hw(0))},encapsulation:2})})()}return r})();var pe=(()=>{class r extends ce{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=ss(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=ne$1(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=ne$1(e)}_fixedBottomGap=0;static ɵfac=(()=>{let e;return function(n){return(e||(e=up(r)))(n||r)}})();static ɵcmp=(function(){return NI({type:r,selectors:[[`mat-sidenav`]],hostAttrs:[1,`mat-drawer`,`mat-sidenav`],hostVars:16,hostBindings:function(n,a){n&2&&(Yh(`tabIndex`,a.mode!==`side`?`-1`:null)(`align`,null),lg(`top`,a.fixedInViewport?a.fixedTopGap:null,`px`)(`bottom`,a.fixedInViewport?a.fixedBottomGap:null,`px`),dg(`mat-drawer-end`,a.position===`end`)(`mat-drawer-over`,a.mode===`over`)(`mat-drawer-push`,a.mode===`push`)(`mat-drawer-side`,a.mode===`side`)(`mat-sidenav-fixed`,a.fixedInViewport))},inputs:{fixedInViewport:`fixedInViewport`,fixedTopGap:`fixedTopGap`,fixedBottomGap:`fixedBottomGap`},exportAs:[`matSidenav`],features:[Yw([{provide:ce,useExisting:r}]),Uh],ngContentSelectors:[`*`],decls:3,vars:0,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-drawer-inner-container`]],template:function(n,a){n&1&&(pw(),Qi(0,`div`,1,0),hw(2),Ou())},dependencies:[Ke],encapsulation:2})})()}return r})();var Je=(()=>{class r extends le{_allDrawers=void 0;_content=void 0;static ɵfac=(()=>{let e;return function(n){return(e||(e=up(r)))(n||r)}})();static ɵcmp=(function(){let e=[[[`mat-drawer`],[`mat-sidenav`]],[[`mat-drawer-content`],[`mat-sidenav-content`]],`*`],t=[`mat-drawer, mat-sidenav`,`mat-drawer-content, mat-sidenav-content`,`*`];function n(i,s){if(i&1){let d=cw();Qi(0,`div`,1),rg(`click`,function(){kd(d);let u=dw();return Fd(u._onBackdropClicked())}),Ou()}if(i&2){let d=dw();dg(`mat-drawer-shown`,d._isShowingBackdrop())}}function a(i,s){i&1&&(Qi(0,`mat-sidenav-content`),hw(1,2),Ou())}return NI({type:r,selectors:[[`mat-sidenav-container`]],contentQueries:function(s,d,w){if(s&1&&og(w,K,5)(w,pe,5),s&2){let u;mw(u=yw())&&(d._content=u.first),mw(u=yw())&&(d._allDrawers=u)}},hostAttrs:[1,`mat-drawer-container`,`mat-sidenav-container`],hostVars:2,hostBindings:function(s,d){s&2&&dg(`mat-drawer-container-explicit-backdrop`,d._backdropOverride)},exportAs:[`matSidenavContainer`],features:[Yw([{provide:me,useExisting:r},{provide:le,useExisting:r}]),Uh],ngContentSelectors:t,decls:4,vars:2,consts:[[1,`mat-drawer-backdrop`,3,`mat-drawer-shown`],[1,`mat-drawer-backdrop`,3,`click`]],template:function(s,d){s&1&&(pw(e),QI(0,n,1,2,`div`,0),hw(1),hw(2,1),QI(3,a,2,0,`mat-sidenav-content`)),s&2&&(XI(d.hasBackdrop?0:-1),XD(3),XI(d._content?-1:3))},dependencies:[K],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--%NS%mat-sidenav-content-text-color, var(--%NS%mat-sys-on-background));
  background-color: var(--%NS%mat-sidenav-content-background-color, var(--%NS%mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--%NS%mat-sidenav-scrim-color, color-mix(in srgb, var(--%NS%mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--%NS%mat-sidenav-container-text-color, var(--%NS%mat-sys-on-surface-variant));
  box-shadow: var(--%NS%mat-sidenav-container-elevation-shadow, none);
  background-color: var(--%NS%mat-sidenav-container-background-color, var(--%NS%mat-sys-surface));
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  width: var(--%NS%mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2})})()}return r})();var Xe=(()=>{class r{static ɵfac=function(t){return new(t||r)};static ɵmod=ls({type:r});static ɵinj=br({imports:[I,fs,I]})}return r})();var it={menu:`M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z`,close:`m6.4 5 5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6L6.4 19 5 17.6l5.6-5.6L5 6.4z`,dashboard:`M3 3h8v10H3zm10 0h8v6h-8zM3 15h8v6H3zm10-4h8v10h-8z`,module:`M4 4h16v16H4zm2 2v12h12V6zm2 2h8v2H8zm0 4h8v2H8z`,logout:`M3 3h9v2H5v14h7v2H3zm14.6 3L23 12l-5.4 6-1.5-1.4 3.3-3.6H9v-2h10.4l-3.3-3.6z`,arrow:`M12 4l-8 8 8 8 1.4-1.4-5.6-5.6H20v-2H7.8l5.6-5.6z`};var Y=class r{name=uj.required();icons=it;static ɵfac=function(e){return new(e||r)};static ɵcmp=NI({type:r,selectors:[[`app-school-icon`]],inputs:{name:[1,`name`]},decls:2,vars:1,consts:[[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`],[`fill`,`currentColor`,`fill-rule`,`evenodd`]],template:function(e,t){e&1&&(qd(),ku(0,`svg`,0),Xh(1,`path`,1),Fu()),e&2&&(XD(),Yh(`d`,t.icons[t.name()]))},styles:[`[_nghost-%COMP%]{display:inline-flex;flex:0 0 auto}svg[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem}`]})};var ot=(r,p)=>[`/`,r,p];var st=(r,p)=>p.path;function dt(r,p){if(r&1){let e=cw();Qi(0,`a`,19),rg(`click`,function(){kd(e);let n=dw();return Fd(n.menuOpen.set(!1))}),Kh(1,`app-school-icon`,20),Qi(2,`span`),Hw(3),Ou()()}if(r&2){let e=p.$implicit,t=dw();Qh(`routerLink`,Xw(3,ot,t.role,e.path)),XD(),Qh(`name`,e.path===`dashboard`?`dashboard`:`module`),XD(2),vg(e.title)}}function ct(r,p){if(r&1){let e=cw();Qi(0,`button`,21),rg(`click`,function(){kd(e);let n=dw();return Fd(n.menuOpen.set(!0))}),Kh(1,`app-school-icon`,22),Ou()}if(r&2){let e=dw();Yh(`aria-expanded`,e.menuOpen())}}function lt(r,p){r&1&&(Qi(0,`strong`),Hw(1),Ou()),r&2&&(XD(),vg(p.data().institution.name))}var et=class r{session=g(a);router=g(ue);role=g(G$1).snapshot.data.role;administration=this.role===`admin`?g(b$1):null;profile=dH[this.role];modules=s[this.role];dashboard=[`/`,this.role,`dashboard`];compact=C(g(ee).observe(`(max-width: 960px)`).pipe(oe(p=>p.matches)),{initialValue:!1});menuOpen=Ei(!1);resetPage(p){p.parentElement?.scrollTo?.(0,0)}signOut(){this.session.end(),this.router.navigate([`/login`],{replaceUrl:!0})}static ɵfac=function(e){return new(e||r)};static ɵcmp=NI({type:r,selectors:[[`ng-component`]],decls:31,vars:9,consts:[[`page`,``],[1,`school-shell`],[`id`,`school-menu`,1,`sidebar`,3,`closedStart`,`mode`,`opened`],[1,`brand`,3,`click`,`routerLink`],[`src`,`colegio.svg`,`alt`,``,`width`,`42`,`height`,`42`],[`routerLinkActive`,`active`,`ariaCurrentWhenActive`,`page`,1,`nav-link`,3,`routerLink`],[1,`content`],[`type`,`button`,1,`skip-link`,3,`click`],[1,`header`],[1,`header-leading`],[`matIconButton`,``,`type`,`button`,`aria-controls`,`school-menu`,`aria-label`,`Abrir menú`],[1,`header-context`],[1,`header-label`],[1,`account`],[1,`account-name`],[`matButton`,``,`type`,`button`,`aria-label`,`Cerrar sesión`,`title`,`Cerrar sesión`,1,`sign-out`,3,`click`],[`name`,`logout`],[`tabindex`,`-1`,1,`page`],[3,`activate`],[`routerLinkActive`,`active`,`ariaCurrentWhenActive`,`page`,1,`nav-link`,3,`click`,`routerLink`],[3,`name`],[`matIconButton`,``,`type`,`button`,`aria-controls`,`school-menu`,`aria-label`,`Abrir menú`,3,`click`],[`name`,`menu`]],template:function(e,t){if(e&1){let n=cw();Qi(0,`mat-sidenav-container`,1)(1,`mat-sidenav`,2),rg(`closedStart`,function(){return t.menuOpen.set(!1)}),Qi(2,`a`,3),rg(`click`,function(){return t.menuOpen.set(!1)}),Kh(3,`img`,4),Qi(4,`span`),Hw(5),Qi(6,`small`),Hw(7,`Primaria y Secundaria`),Ou()()(),Qi(8,`nav`),tw(9,dt,4,6,`a`,5,st),Ou()(),Qi(11,`mat-sidenav-content`,6)(12,`button`,7),rg(`click`,function(){kd(n);let i=Dw(29);return Fd(i.focus())}),Hw(13,`Ir al contenido`),Ou(),Qi(14,`header`,8)(15,`div`,9),QI(16,ct,2,1,`button`,10),Qi(17,`div`,11),QI(18,lt,2,1,`strong`),Qi(19,`span`,12),Hw(20),Ou()()(),Qi(21,`div`,13)(22,`span`,14),Hw(23),Ou(),Qi(24,`button`,15),rg(`click`,function(){return t.signOut()}),Kh(25,`app-school-icon`,16),Qi(26,`span`),Hw(27,`Cerrar sesión`),Ou()()()(),Qi(28,`main`,17,0)(30,`router-outlet`,18),rg(`activate`,function(){kd(n);let i=Dw(29);return Fd(t.resetPage(i))}),Ou()()()()}if(e&2){let n;XD(),Qh(`mode`,t.compact()?`over`:`side`)(`opened`,!t.compact()||t.menuOpen()),XD(),Qh(`routerLink`,t.dashboard),XD(3),vg(t.administration?.data()?.institution?.name??`Gestión Escolar`),XD(3),Yh(`aria-label`,`Menú · `+t.profile.label),XD(),nw(t.modules),XD(7),XI(t.compact()?16:-1),XD(2),XI((n=t.administration)?18:-1,n),XD(2),vg(t.profile.label),XD(3),vg(t.profile.name)}},dependencies:[xn,yn,Rt$1,Xe,pe,Je,K,Nt,Uo,hr,Y],styles:[`.school-shell[_ngcontent-%COMP%]{block-size:100dvh;background:var(--%NS%school-background)}.sidebar[_ngcontent-%COMP%]{inline-size:min(16.75rem,86vw);border:0;border-radius:0;background:var(--%NS%school-navy);color:#fff}.brand[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;padding:1.25rem 1.15rem;color:#fff;font-weight:700;text-decoration:none}.brand[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{display:block;color:#b5c9e9;font-size:.72rem;font-weight:500}nav[_ngcontent-%COMP%]{display:grid;gap:.2rem;padding:.75rem;border-block-start:1px solid rgba(255,255,255,.1411764706)}.nav-link[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;min-block-size:2.65rem;padding:.45rem .8rem;border-radius:.55rem;text-decoration:none;color:#d3e0f5;font-size:.9rem}.nav-link[_ngcontent-%COMP%]:hover{background:#ffffff14;color:#fff}.nav-link.active[_ngcontent-%COMP%]{background:#2858ab;color:#fff;font-weight:650}.header[_ngcontent-%COMP%], .header-leading[_ngcontent-%COMP%], .account[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem}.header[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1;justify-content:space-between;min-block-size:4.5rem;padding-inline:clamp(.75rem,3vw,2rem);background:var(--%NS%school-surface);border-block-end:1px solid var(--%NS%school-border)}.header-label[_ngcontent-%COMP%], .account-name[_ngcontent-%COMP%]{font-size:.875rem;font-weight:650}.account-name[_ngcontent-%COMP%]{color:var(--%NS%school-muted)}.sign-out[_ngcontent-%COMP%]   app-school-icon[_ngcontent-%COMP%]{vertical-align:middle}.sign-out[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-inline-start:.35rem}.page[_ngcontent-%COMP%]{max-inline-size:86rem;margin-inline:auto;padding:clamp(1.25rem,4vw,3.5rem)}@media(max-width:480px){.account-name[_ngcontent-%COMP%], .sign-out[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}}.skip-link[_ngcontent-%COMP%]{position:absolute;z-index:2;inset-block-start:.5rem;inset-inline-start:.5rem;padding:.6rem 1rem;border:1px solid var(--%NS%school-blue-ink);border-radius:.5rem;background:var(--%NS%school-surface);color:var(--%NS%school-blue-ink);font:inherit;transform:translateY(calc(-100% - 1rem))}.skip-link[_ngcontent-%COMP%]:focus-visible{transform:none}.header-leading[_ngcontent-%COMP%], .header-context[_ngcontent-%COMP%]{min-inline-size:0}.header-context[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.header-context[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] + .header-label[_ngcontent-%COMP%]{color:var(--%NS%school-muted)}.brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{overflow-wrap:anywhere}.account[_ngcontent-%COMP%]{flex:0 0 auto}.page[_ngcontent-%COMP%]:focus{outline-offset:-3px}`]})};export{et as SchoolLayout};