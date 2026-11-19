import{t as Ht$1}from"./chunk-B21eoY6U.js";import{t as C}from"./chunk-B79n4ov4.js";import{S as zn,_ as ot,d as _i,f as ae,g as lt,h as jn,i as Hn,l as Xn,o as M,p as ci,u as Yn}from"./chunk-CHHYoMTi.js";import{i as Ke$1,o as Qe$1}from"./chunk-C0bA7zVm.js";import{A as qr,C as _n,D as lr,M as ts,O as mr,_ as Wr,a as Dt,d as Ot$1,h as Ur,i as Br,k as ns,l as Hr,m as Un,n as $r,o as Ee,r as At$1,w as ai,x as Yr,y as Xn$1}from"./chunk-DO_0XEei.js";import{a as xn,n as Nt,o as yn,t as Gt}from"./chunk-C8FGG_OT.js";import{a as R,l as w,n as F,o as b,s as h}from"./chunk-BqpvepPx.js";import{A as pt,S as he,T as le,_ as ce,b as fs,g as _,k as ot$1,r as Bt,w as ji,y as es}from"./chunk-b_Y57IRQ.js";import{$ as M$1,$n as yw,A as Gm,B as Hw,Bn as tw,Bt as br,C as Fd,D as Gc,Dt as XD,En as pw,Ft as Zh,G as Jn,Gn as vg,Gt as dg,Ht as cw,Nn as sC,Nt as Yh,O as Gh,Ot as XI,P as H,Pt as Yw,Qt as ey,Rt as b$1,Tn as pr,Un as up,Vn as ty,X as Li,Zt as ew,_ as Dg,_n as ne,_t as UE,an as ig,b as Ei,bt as Vi,c as $m,cn as ju,ct as Qh,d as At$2,en as g,er as zh,et as Mu,f as Aw,fn as lg,ft as RD,gn as mw,in as ie,it as Ou,j as Gn,jn as rg,k as Gl,l as AC,lt as Qi,m as BE,mn as ls,mt as Rt,nn as hj,ot as Q,q as Kh,qt as dw,rn as hw,s as $e,st as QI,tt as NI,un as kd,ut as Qn,v as Dw,vn as nw,vt as Uh,w as Fs,wn as pj,xn as og,yn as ny}from"./main-KNENK77K.js";var na=new b$1(`MatTabContent`);var ia=(()=>{class a{template=g(Gn);static ɵfac=function(e){return new(e||a)};static ɵdir=Mu({type:a,selectors:[[``,`matTabContent`,``]],features:[Yw([{provide:na,useExisting:a}])]})}return a})();var oa=new b$1(`MatTabLabel`);var Ge=new b$1(`MAT_TAB`);var ra=(()=>{class a extends _i{_closestTab=g(Ge,{optional:!0});static ɵfac=(()=>{let t;return function(n){return(t||(t=up(a)))(n||a)}})();static ɵdir=Mu({type:a,selectors:[[``,`mat-tab-label`,``],[``,`matTabLabel`,``]],features:[Yw([{provide:oa,useExisting:a}]),Uh]})}return a})();var qe=new b$1(`MAT_TAB_GROUP`);var Vt=(()=>{class a{_viewContainerRef=g(Jn);_closestTabGroup=g(qe,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel=``;ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new Q;position=null;origin=null;isActive=!1;constructor(){g(ce).load(Nt)}ngOnChanges(t){(Object.hasOwn(t,`textLabel`)||Object.hasOwn(t,`disabled`))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new M(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`*`];function e(n,d){n&1&&hw(0)}return NI({type:a,selectors:[[`mat-tab`]],contentQueries:function(d,h,y){if(d&1&&og(y,ra,5)(y,ia,7,Gn),d&2){let x;mw(x=yw())&&(h.templateLabel=x.first),mw(x=yw())&&(h._explicitContent=x.first)}},viewQuery:function(d,h){if(d&1&&ig(Gn,7),d&2){let y;mw(y=yw())&&(h._implicitContent=y.first)}},hostAttrs:[`hidden`,``],hostVars:1,hostBindings:function(d,h){d&2&&Yh(`id`,null)},inputs:{disabled:[2,`disabled`,`disabled`,pj],textLabel:[0,`label`,`textLabel`],ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],labelClass:`labelClass`,bodyClass:`bodyClass`,id:`id`},exportAs:[`matTab`],features:[Yw([{provide:Ge,useExisting:a}]),Gc],ngContentSelectors:t,decls:1,vars:0,template:function(d,h){d&1&&(pw(),Gh(0,e,1,0,`ng-template`))},encapsulation:2,changeDetection:1})})()}return a})();var At=`mdc-tab-indicator--active`;var je=`mdc-tab-indicator--no-transition`;var Ht=class{_items;_currentItem;constructor(r){this._items=r}hide(){this._items.forEach(r=>r.deactivateInkBar()),this._currentItem=void 0}alignToElement(r){let t=this._items.find(n=>n.elementRef.nativeElement===r),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let n=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t}}};var sa=(()=>{class a{_elementRef=g(Qn);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(At);return}let n=e.getBoundingClientRect(),d=t.width/n.width,h=t.left-n.left;e.classList.add(je),this._inkBarContentElement.style.setProperty(`transform`,`translateX(${h}px) scaleX(${d})`),e.getBoundingClientRect(),e.classList.remove(je),e.classList.add(At),this._inkBarContentElement.style.setProperty(`transform`,``)}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(At)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement(`span`),n=this._inkBarContentElement=t.createElement(`span`);e.className=`mdc-tab-indicator`,n.className=`mdc-tab-indicator__content mdc-tab-indicator__content--underline`,e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;(this._fitToContent?this._elementRef.nativeElement.querySelector(`.mdc-tab__content`):this._elementRef.nativeElement).appendChild(this._inkBarElement)}static ɵfac=function(e){return new(e||a)};static ɵdir=Mu({type:a,inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,pj]}})}return a})();var Ze=(()=>{class a extends sa{elementRef=g(Qn);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static ɵfac=(()=>{let t;return function(n){return(t||(t=up(a)))(n||a)}})();static ɵdir=Mu({type:a,selectors:[[``,`matTabLabelWrapper`,``]],hostVars:3,hostBindings:function(e,n){e&2&&(Yh(`aria-disabled`,!!n.disabled),dg(`mat-mdc-tab-disabled`,n.disabled))},inputs:{disabled:[2,`disabled`,`disabled`,pj]},features:[Uh]})}return a})();var We={passive:!0};var da=650;var la=100;function Ft(a){let r=a+``;return/^[0-9]+(?:\.[0-9]+)?$/.test(r)?`${a}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(r)?r:``}var ca=(()=>{class a{_elementRef=g(Qn);_changeDetectorRef=g(AC);_viewportRuler=g(Qe$1);_dir=g(Bt,{optional:!0});_ngZone=g(ne);_platform=g(_);_sharedResizeObserver=g(Xn$1);_injector=g(ie);_renderer=g(Vi);_animationsDisabled=es();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new Q;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new Q;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new $e;indexFocused=new $e;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,`mouseleave`,()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`before`),We),this._renderer.listen(this._nextPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`after`),We))}ngAfterContentInit(){let t=this._dir?this._dir.change:Fs(`ltr`),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Gm(32),ny(this._destroyed)),n=this._viewportRuler.change(150).pipe(ny(this._destroyed)),d=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new le(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),RD(d,{injector:this._injector}),$m(t,n,e,this._items.changes,this._itemsResized()).pipe(ny(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),d()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(h=>{this.indexFocused.emit(h),this._setTabFocus(h)})}_itemsResized(){return typeof ResizeObserver!=`function`?At$2:this._items.changes.pipe(ty(this._items),Gl(t=>new M$1(e=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(d=>e.next(d));return t.forEach(d=>n.observe(d.elementRef.nativeElement)),()=>{n.disconnect()}}))),ey(1),Rt(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!ot$1(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||``,this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()==`ltr`?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()===`ltr`?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,n=(t==`before`?-1:1)*e/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:d,offsetWidth:h}=e.elementRef.nativeElement,y,x;this._getLayoutDirection()==`ltr`?(y=d,x=y+h):(x=this._tabListInner.nativeElement.offsetWidth-d,y=x-h);let k=this.scrollDistance,p=this.scrollDistance+n;y<k?this.scrollDistance-=k-y:x>p&&(this.scrollDistance+=Math.min(x-p,y-k))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let n=this._tabListInner.nativeElement.scrollWidth-this._elementRef.nativeElement.offsetWidth>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabListInner.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),pr(da,la).pipe(ny($m(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:d}=this._scrollHeader(t);(d===0||d>=n)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static ɵfac=function(e){return new(e||a)};static ɵdir=Mu({type:a,inputs:{disablePagination:[2,`disablePagination`,`disablePagination`,pj],selectedIndex:[2,`selectedIndex`,`selectedIndex`,hj]},outputs:{selectFocusedIndex:`selectFocusedIndex`,indexFocused:`indexFocused`}})}return a})();var ma=(()=>{class a extends ca{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Ht(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static ɵfac=(()=>{let t;return function(n){return(t||(t=up(a)))(n||a)}})();static ɵcmp=(function(){let t=[`tabListContainer`],e=[`tabList`],n=[`tabListInner`],d=[`nextPaginator`],h=[`previousPaginator`];return NI({type:a,selectors:[[`mat-tab-header`]],contentQueries:function(k,p,m){if(k&1&&og(m,Ze,4),k&2){let u;mw(u=yw())&&(p._items=u)}},viewQuery:function(k,p){if(k&1&&ig(t,7)(e,7)(n,7)(d,5)(h,5),k&2){let m;mw(m=yw())&&(p._tabListContainer=m.first),mw(m=yw())&&(p._tabList=m.first),mw(m=yw())&&(p._tabListInner=m.first),mw(m=yw())&&(p._nextPaginator=m.first),mw(m=yw())&&(p._previousPaginator=m.first)}},hostAttrs:[1,`mat-mdc-tab-header`],hostVars:4,hostBindings:function(k,p){k&2&&dg(`mat-mdc-tab-header-pagination-controls-enabled`,p._showPaginationControls)(`mat-mdc-tab-header-rtl`,p._getLayoutDirection()==`rtl`)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],disableRipple:[2,`disableRipple`,`disableRipple`,pj]},features:[Uh],ngContentSelectors:[`*`],decls:13,vars:10,consts:[[`previousPaginator`,``],[`tabListContainer`,``],[`tabList`,``],[`tabListInner`,``],[`nextPaginator`,``],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-before`,3,`click`,`mousedown`,`touchend`,`matRippleDisabled`],[1,`mat-mdc-tab-header-pagination-chevron`],[1,`mat-mdc-tab-label-container`,3,`keydown`],[`role`,`tablist`,1,`mat-mdc-tab-list`,3,`cdkObserveContent`],[1,`mat-mdc-tab-labels`],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-after`,3,`mousedown`,`click`,`touchend`,`matRippleDisabled`]],template:function(k,p){k&1&&(pw(),Qi(0,`div`,5,0),rg(`click`,function(){return p._handlePaginatorClick(`before`)})(`mousedown`,function(u){return p._handlePaginatorPress(`before`,u)})(`touchend`,function(){return p._stopInterval()}),Kh(2,`div`,6),Ou(),Qi(3,`div`,7,1),rg(`keydown`,function(u){return p._handleKeydown(u)}),Qi(5,`div`,8,2),rg(`cdkObserveContent`,function(){return p._onContentChanges()}),Qi(7,`div`,9,3),hw(9),Ou()()(),Qi(10,`div`,10,4),rg(`mousedown`,function(u){return p._handlePaginatorPress(`after`,u)})(`click`,function(){return p._handlePaginatorClick(`after`)})(`touchend`,function(){return p._stopInterval()}),Kh(12,`div`,6),Ou()),k&2&&(dg(`mat-mdc-tab-header-pagination-disabled`,p._disableScrollBefore),Qh(`matRippleDisabled`,p._disableScrollBefore||p.disableRipple),XD(3),dg(`_mat-animation-noopable`,p._animationsDisabled),XD(2),Yh(`aria-label`,p.ariaLabel||null)(`aria-labelledby`,p.ariaLabelledby||null),XD(5),dg(`mat-mdc-tab-header-pagination-disabled`,p._disableScrollAfter),Qh(`matRippleDisabled`,p._disableScrollAfter||p.disableRipple))},dependencies:[Gt,ji],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--%NS%mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--%NS%mat-tab-pagination-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--%NS%mat-tab-divider-height, 1px);
  border-bottom-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--%NS%mat-tab-divider-height, 1px);
  border-top-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--%NS%mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2,changeDetection:1})})()}return a})();var ba=new b$1(`MAT_TABS_CONFIG`);var Qe=(()=>{class a extends ot{_host=g(zt);_ngZone=g(ne);_centeringSub=H.EMPTY;_leavingSub=H.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(ty(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static ɵfac=(()=>{let t;return function(n){return(t||(t=up(a)))(n||a)}})();static ɵdir=Mu({type:a,selectors:[[``,`matTabBodyHost`,``]],features:[Uh]})}return a})();var zt=(()=>{class a{_elementRef=g(Qn);_dir=g(Bt,{optional:!0});_ngZone=g(ne);_injector=g(ie);_renderer=g(Vi);_diAnimationsDisabled=es();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=H.EMPTY;_position;_previousPosition;_onCentering=new $e;_beforeCentering=new $e;_afterLeavingCenter=new $e;_onCentered=new $e(!0);_portalHost;_contentElement;_content;animationDuration=`500ms`;preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=g(AC);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position===`center`&&(this._setActiveClass(!0),RD(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove(`mat-tab-body-animating`),n.type===`transitionend`&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,`transitionstart`,n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add(`mat-tab-body-animating`),this._transitionStarted())}),this._renderer.listen(t,`transitionend`,e),this._renderer.listen(t,`transitioncancel`,e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position===`center`;this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position===`center`?this._onCentered.emit():this._previousPosition===`center`&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle(`mat-mdc-tab-body-active`,t)}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t==`ltr`?`left`:`right`:this._positionIndex>0?this._position=t==`ltr`?`right`:`left`:this._position=`center`,this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position===`center`||this._previousPosition===`center`)&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),RD(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration===`0ms`||this.animationDuration===`0s`}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`content`];function e(n,d){}return NI({type:a,selectors:[[`mat-tab-body`]],viewQuery:function(d,h){if(d&1&&ig(Qe,5)(t,5),d&2){let y;mw(y=yw())&&(h._portalHost=y.first),mw(y=yw())&&(h._contentElement=y.first)}},hostAttrs:[1,`mat-mdc-tab-body`],hostVars:1,hostBindings:function(d,h){d&2&&Yh(`inert`,h._position===`center`?null:``)},inputs:{_content:[0,`content`,`_content`],animationDuration:`animationDuration`,preserveContent:`preserveContent`,position:`position`},outputs:{_onCentering:`_onCentering`,_beforeCentering:`_beforeCentering`,_onCentered:`_onCentered`},decls:3,vars:6,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-mdc-tab-body-content`],[`matTabBodyHost`,``]],template:function(d,h){d&1&&(Qi(0,`div`,1,0),zh(2,e,0,0,`ng-template`,2),Ou()),d&2&&dg(`mat-tab-body-content-left`,h._position===`left`)(`mat-tab-body-content-right`,h._position===`right`)(`mat-tab-body-content-can-animate`,h._position===`center`||h._previousPosition===`center`)},dependencies:[Qe,Ke$1],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--%NS%mat-tab-body-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2,changeDetection:1})})()}return a})();var Ke=(()=>{class a{_elementRef=g(Qn);_changeDetectorRef=g(AC);_ngZone=g(ne);_tabsSubscription=H.EMPTY;_tabLabelSubscription=H.EMPTY;_tabBodySubscription=H.EMPTY;_diAnimationsDisabled=es();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Li;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition=`above`;get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=t,t&&typeof t==`object`?(this._bodyAnimationDuration=Ft(t.body),this._headerAnimationDuration=Ft(t.header)):this._headerAnimationDuration=this._bodyAnimationDuration=Ft(t)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-tabs-with-background`,`mat-background-${this.backgroundColor}`),t&&e.add(`mat-tabs-with-background`,`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new $e;focusChange=new $e;animationDone=new $e;selectedTabChange=new $e(!0);_groupId;_isServer=!g(_).isBrowser;constructor(){let t=g(ba,{optional:!0});this._groupId=g(he).getId(`mat-tab-group-`),this.animationDuration=t&&t.animationDuration?t.animationDuration:`500ms`,this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+`px`}Promise.resolve().then(()=>{this._tabs.forEach((n,d)=>n.isActive=d===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight=``)})}this._tabs.forEach((e,n)=>{e.position=n-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),n;for(let d=0;d<e.length;d++)if(e[d].isActive){this._indexToSelect=this._selectedIndex=d,this._lastFocusedTabIndex=null,n=e[d];break}!n&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(ty(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new Ot;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=$m(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+`px`,this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+`px`)}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height=``,this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,n){e.focusIndex=n,t.disabled||(this.selectedIndex=n)}_getTabIndex(t){return t===(this._lastFocusedTabIndex??this.selectedIndex)?0:-1}_tabFocusChanged(t,e){t&&t!==`mouse`&&t!==`touch`&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,n)=>e._setActiveClass(n===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration===`0`||this._bodyAnimationDuration===`0ms`}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`tabBodyWrapper`],e=[`tabHeader`],n=[`*`];function d(m,u){}function h(m,u){if(m&1&&zh(0,d,0,0,`ng-template`,12),m&2){let l=dw().$implicit;Qh(`cdkPortalOutlet`,l.templateLabel)}}function y(m,u){if(m&1&&Hw(0),m&2){let l=dw().$implicit;vg(l.textLabel)}}function x(m,u){if(m&1){let l=cw();Qi(0,`div`,7,2),rg(`click`,function(){let _=kd(l),C=_.$implicit,ut=_.$index,Xe=dw(),Je=Dw(1);return Fd(Xe._handleClick(C,Je,ut))})(`cdkFocusChange`,function(_){let C=kd(l).$index,ut=dw();return Fd(ut._tabFocusChanged(_,C))}),Kh(2,`span`,8)(3,`div`,9),Qi(4,`span`,10)(5,`span`,11),QI(6,h,1,1,null,12)(7,y,1,1),Ou()()()}if(m&2){let l=u.$implicit,g=u.$index,_=Dw(1),C=dw();Aw(l.labelClass),dg(`mdc-tab--active`,C.selectedIndex===g),Qh(`id`,C._getTabLabelId(l,g))(`disabled`,l.disabled)(`fitInkBarToContent`,C.fitInkBarToContent),Yh(`tabIndex`,C._getTabIndex(g))(`aria-posinset`,g+1)(`aria-setsize`,C._tabs.length)(`aria-controls`,C._getTabContentId(g))(`aria-selected`,C.selectedIndex===g)(`aria-label`,l.ariaLabel||null)(`aria-labelledby`,!l.ariaLabel&&l.ariaLabelledby?l.ariaLabelledby:null),XD(3),Qh(`matRippleTrigger`,_)(`matRippleDisabled`,l.disabled||C.disableRipple),XD(3),XI(l.templateLabel?6:7)}}function k(m,u){m&1&&hw(0)}function p(m,u){if(m&1){let l=cw();Qi(0,`mat-tab-body`,13),rg(`_onCentered`,function(){kd(l);let _=dw();return Fd(_._removeTabBodyWrapperHeight())})(`_onCentering`,function(_){kd(l);let C=dw();return Fd(C._setTabBodyWrapperHeight(_))})(`_beforeCentering`,function(_){kd(l);let C=dw();return Fd(C._bodyCentered(_))}),Ou()}if(m&2){let l=u.$implicit,g=u.$index,_=dw();Aw(l.bodyClass),Qh(`id`,_._getTabContentId(g))(`content`,l.content)(`position`,l.position)(`animationDuration`,_._bodyAnimationDuration)(`preserveContent`,_.preserveContent),Yh(`tabindex`,_.contentTabIndex!=null&&_.selectedIndex===g?_.contentTabIndex:null)(`aria-labelledby`,_._getTabLabelId(l,g))(`aria-hidden`,_.selectedIndex!==g)}}return NI({type:a,selectors:[[`mat-tab-group`]],contentQueries:function(u,l,g){if(u&1&&og(g,Vt,5),u&2){let _;mw(_=yw())&&(l._allTabs=_)}},viewQuery:function(u,l){if(u&1&&ig(t,5)(e,5)(zt,5),u&2){let g;mw(g=yw())&&(l._tabBodyWrapper=g.first),mw(g=yw())&&(l._tabHeader=g.first),mw(g=yw())&&(l._tabBodies=g)}},hostAttrs:[1,`mat-mdc-tab-group`],hostVars:13,hostBindings:function(u,l){u&2&&(Yh(`mat-align-tabs`,l.alignTabs),Aw(`mat-`+(l.color||`primary`)),lg(`--%NS%mat-tab-body-animation-duration`,l._bodyAnimationDuration)(`--%NS%mat-tab-header-animation-duration`,l._headerAnimationDuration),dg(`mat-mdc-tab-group-dynamic-height`,l.dynamicHeight)(`mat-mdc-tab-group-inverted-header`,l.headerPosition===`below`)(`mat-mdc-tab-group-stretch-tabs`,l.stretchTabs))},inputs:{color:`color`,fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,pj],stretchTabs:[2,`mat-stretch-tabs`,`stretchTabs`,pj],alignTabs:[0,`mat-align-tabs`,`alignTabs`],dynamicHeight:[2,`dynamicHeight`,`dynamicHeight`,pj],selectedIndex:[2,`selectedIndex`,`selectedIndex`,hj],headerPosition:`headerPosition`,animationDuration:`animationDuration`,contentTabIndex:[2,`contentTabIndex`,`contentTabIndex`,hj],disablePagination:[2,`disablePagination`,`disablePagination`,pj],disableRipple:[2,`disableRipple`,`disableRipple`,pj],preserveContent:[2,`preserveContent`,`preserveContent`,pj],backgroundColor:`backgroundColor`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`]},outputs:{selectedIndexChange:`selectedIndexChange`,focusChange:`focusChange`,animationDone:`animationDone`,selectedTabChange:`selectedTabChange`},exportAs:[`matTabGroup`],features:[Yw([{provide:qe,useExisting:a}])],ngContentSelectors:n,decls:9,vars:8,consts:[[`tabHeader`,``],[`tabBodyWrapper`,``],[`tabNode`,``],[3,`indexFocused`,`selectFocusedIndex`,`selectedIndex`,`disableRipple`,`disablePagination`,`aria-label`,`aria-labelledby`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`id`,`mdc-tab--active`,`class`,`disabled`,`fitInkBarToContent`],[1,`mat-mdc-tab-body-wrapper`],[`role`,`tabpanel`,3,`id`,`class`,`content`,`position`,`animationDuration`,`preserveContent`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`click`,`cdkFocusChange`,`id`,`disabled`,`fitInkBarToContent`],[1,`mdc-tab__ripple`],[`mat-ripple`,``,1,`mat-mdc-tab-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mdc-tab__content`],[1,`mdc-tab__text-label`],[3,`cdkPortalOutlet`],[`role`,`tabpanel`,3,`_onCentered`,`_onCentering`,`_beforeCentering`,`id`,`content`,`position`,`animationDuration`,`preserveContent`]],template:function(u,l){u&1&&(pw(),Qi(0,`mat-tab-header`,3,0),rg(`indexFocused`,function(_){return l._focusChanged(_)})(`selectFocusedIndex`,function(_){return l.selectedIndex=_}),tw(2,x,8,17,`div`,4,ew),Ou(),QI(4,k,1,0),Qi(5,`div`,5,1),tw(7,p,1,10,`mat-tab-body`,6,ew),Ou()),u&2&&(Qh(`selectedIndex`,l.selectedIndex||0)(`disableRipple`,l.disableRipple)(`disablePagination`,l.disablePagination),Zh(`aria-label`,l.ariaLabel)(`aria-labelledby`,l.ariaLabelledby),XD(2),nw(l._tabs),XD(2),XI(l._isServer?4:-1),XD(),dg(`_mat-animation-noopable`,l._bodyAnimationsDisabled()),XD(2),nw(l._tabs))},dependencies:[ma,Ze,pt,Gt,ot,zt],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--%NS%mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--%NS%mat-tab-container-height, 48px);
  font-family: var(--%NS%mat-tab-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-tab-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-tab-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  line-height: var(--%NS%mat-tab-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-weight: var(--%NS%mat-tab-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-tab-active-indicator-height, 2px);
  border-radius: var(--%NS%mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--%NS%mat-tab-active-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-hover-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-focus-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--%NS%mat-tab-disabled-ripple-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-label-text-color, var(--%NS%mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--%NS%mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2,changeDetection:1})})()}return a})();var Ot=class{index;tab};var Ye=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵmod=ls({type:a});static ɵinj=br({imports:[fs]})}return a})();function ha(a,r){if(a&1&&(Qi(0,`option`,5),Hw(1),Ou()),a&2){let t=r.$implicit;Qh(`value`,t),XD(),vg(t)}}function ua(a,r){if(a&1&&(Qi(0,`p`,6),Hw(1),Ou()),a&2){let t=dw();XD(),vg(t.error())}}var jt=(a,r)=>r.pension.id;var _a=(a,r)=>r.id;function ga(a,r){if(a&1){let t=cw();Qi(0,`tr`)(1,`td`),Hw(2),Ou(),Qi(3,`td`),Hw(4),Ou(),Qi(5,`td`),Hw(6),Ou(),Qi(7,`td`),Hw(8),Ou(),Qi(9,`td`)(10,`span`,19),Hw(11),Ou()(),Qi(12,`td`)(13,`button`,20),rg(`click`,function(){let n=kd(t).$implicit,d=dw(2);return Fd(d.register(n.pension))}),Hw(14,`Registrar pago`),Ou()()()}if(a&2){let t=r.$implicit,e=dw(2);XD(2),vg(t.student.name),XD(2),vg(t.pension.concept),XD(2),vg(e.shortDate(t.pension.due)),XD(2),vg(e.soles(t.pension.amount)),XD(2),dg(`alert`,t.pension.due<e.today),XD(),vg(t.pension.due<e.today?`Vencida`:`Pendiente`)}}function fa(a,r){if(a&1&&(Qi(0,`div`,6)(1,`table`,18)(2,`thead`)(3,`tr`)(4,`th`,11),Hw(5,`Estudiante`),Ou(),Qi(6,`th`,11),Hw(7,`Concepto`),Ou(),Qi(8,`th`,11),Hw(9,`Vencimiento`),Ou(),Qi(10,`th`,11),Hw(11,`Importe`),Ou(),Qi(12,`th`,11),Hw(13,`Estado`),Ou(),Qi(14,`th`,11),Hw(15,`Acciones`),Ou()()(),Qi(16,`tbody`),tw(17,ga,15,7,`tr`,null,jt),Ou()()()),a&2){let t=dw();XD(17),nw(t.pending())}}function va(a,r){a&1&&(Qi(0,`p`,7),Hw(1,`No hay pensiones pendientes.`),Ou())}function ya(a,r){if(a&1){let t=cw();Qi(0,`tr`)(1,`td`),Hw(2),Ou(),Qi(3,`td`),Hw(4),Ou(),Qi(5,`td`),Hw(6),Ou(),Qi(7,`td`),Hw(8),Ou(),Qi(9,`td`),Hw(10),Ou(),Qi(11,`td`)(12,`button`,20),rg(`click`,function(){let n=kd(t),d=dw(2);return Fd(d.receipt(n))}),Hw(13,`Ver comprobante`),Ou()()()}if(a&2){let t=r,e=dw().$implicit,n=dw();XD(2),vg(t.id),XD(2),vg(e.student.name),XD(2),vg(e.pension.concept),XD(2),vg(n.soles(e.pension.amount)),XD(2),vg(n.shortDate(t.date))}}function xa(a,r){if(a&1&&QI(0,ya,14,5,`tr`),a&2){let t,e=r.$implicit;XI((t=e.payment)?0:-1,t)}}function ka(a,r){if(a&1&&(Qi(0,`option`,17),Hw(1),Ou()),a&2){let t=r.$implicit;Qh(`value`,t.id),XD(),Dg(``,t.name,` · `,t.code)}}function Ca(a,r){if(a&1&&(Qi(0,`tr`)(1,`td`),Hw(2),Ou(),Qi(3,`td`),Hw(4),Ou(),Qi(5,`td`),Hw(6),Ou(),Qi(7,`td`),Hw(8),Ou()()),a&2){let t=r.$implicit,e=dw(3);XD(2),vg(t.pension.concept),XD(2),vg(e.shortDate(t.pension.due)),XD(2),vg(e.soles(t.pension.amount)),XD(2),ju(` `,t.payment?`Pagada`:t.pension.due<e.today?`Vencida`:`Pendiente`,` `)}}function Ta(a,r){if(a&1&&(Qi(0,`div`,21)(1,`table`,23)(2,`thead`)(3,`tr`)(4,`th`,11),Hw(5,`Concepto`),Ou(),Qi(6,`th`,11),Hw(7,`Vencimiento`),Ou(),Qi(8,`th`,11),Hw(9,`Importe`),Ou(),Qi(10,`th`,11),Hw(11,`Estado`),Ou()()(),Qi(12,`tbody`),tw(13,Ca,9,4,`tr`,null,jt),Ou()()()),a&2){let t=dw(2);XD(13),nw(t.account())}}function wa(a,r){a&1&&(Qi(0,`p`,22),Hw(1,`El estudiante no tiene pensiones registradas.`),Ou())}function Ia(a,r){if(a&1&&(Qi(0,`p`)(1,`strong`),Hw(2,`Saldo pendiente`),Ou(),Hw(3),Ou(),QI(4,Ta,15,0,`div`,21)(5,wa,2,0,`p`,22)),a&2){let t=dw();XD(3),ju(` · `,t.soles(t.accountBalance())),XD(),XI(t.account().length?4:5)}}var $t=class a{pension=g(ci);store=g(b);ref=g(lt);builder=g(Wr).nonNullable;today=h();soles=R;methods=w;error=Ei(``);form=this.builder.group({date:[this.today,Ee.required],method:this.builder.control(`Efectivo`)});save(){if(this.form.invalid){this.form.markAllAsTouched();return}let{date:r,method:t}=this.form.getRawValue();try{this.ref.close(this.store.pay(this.pension.id,r,t))}catch(e){this.error.set(e.message)}}static ɵfac=function(t){return new(t||a)};static ɵcmp=NI({type:a,selectors:[[`ng-component`]],decls:27,vars:6,consts:[[`mat-dialog-title`,``],[`id`,`payment-form`,`novalidate`,``,1,`admin-form`,3,`ngSubmit`,`formGroup`],[`appearance`,`outline`],[`matInput`,``,`type`,`date`,`formControlName`,`date`,3,`max`],[`matNativeControl`,``,`formControlName`,`method`],[3,`value`],[`role`,`alert`,1,`admin-error`],[`align`,`end`],[`matButton`,``,`mat-dialog-close`,``],[`matButton`,`filled`,`type`,`submit`,`form`,`payment-form`]],template:function(t,e){t&1&&(Qi(0,`h2`,0),Hw(1,`Registrar pago`),Ou(),Qi(2,`mat-dialog-content`)(3,`p`),Hw(4),Ou(),Qi(5,`p`)(6,`strong`),Hw(7),Ou()(),Qi(8,`form`,1),rg(`ngSubmit`,function(){return e.save()}),Qi(9,`mat-form-field`,2)(10,`mat-label`),Hw(11,`Fecha de pago`),Ou(),Qi(12,`input`,3),BE(),Ou(),Qi(13,`mat-error`),Hw(14,`Introduce la fecha de pago.`),Ou()(),Qi(15,`mat-form-field`,2)(16,`mat-label`),Hw(17,`Medio de pago`),Ou(),Qi(18,`select`,4),BE(),tw(19,ha,2,2,`option`,5,ew),Ou()(),QI(21,ua,2,1,`p`,6),Ou()(),Qi(22,`mat-dialog-actions`,7)(23,`button`,8),Hw(24,`Cancelar`),Ou(),Qi(25,`button`,9),Hw(26,`Confirmar pago`),Ou()()),t&2&&(XD(4),Dg(``,e.store.student(e.pension.studentId).name,` · `,e.pension.concept),XD(3),vg(e.soles(e.pension.amount)),XD(),Qh(`formGroup`,e.form),XD(4),Qh(`max`,e.today),UE(),XD(6),UE(),XD(),nw(e.methods),XD(2),XI(e.error()?21:-1))},dependencies:[xn,yn,Xn,jn,Hn,zn,Yn,Ot$1,ai,At$1,mr,ns,ts,Yr,Ur,qr,$r,_n,Un,Br,Hr,Dt,lr],encapsulation:2})};var Ue=class a{store=g(b);dialog=g(ae);snack=g(Ht$1);shortDate=F;soles=R;today=h();accountId=Ei(``);rows=sC(()=>{let{pensions:r,payments:t}=this.store.data();return r.map(e=>({pension:e,payment:t.find(n=>n.pensionId===e.id),student:this.store.student(e.studentId)}))});pending=sC(()=>this.rows().filter(r=>!r.payment));history=sC(()=>this.rows().filter(r=>r.payment).sort((r,t)=>t.payment.date.localeCompare(r.payment.date)||t.payment.id.localeCompare(r.payment.id)));account=sC(()=>this.rows().filter(r=>r.student.id===this.accountId()));accountBalance=sC(()=>this.account().reduce((r,t)=>r+(t.payment?0:t.pension.amount),0));collected=sC(()=>this.history().reduce((r,t)=>r+t.pension.amount,0));late=sC(()=>this.pending().filter(r=>r.pension.due<this.today));lateBalance=sC(()=>this.late().reduce((r,t)=>r+t.pension.amount,0));delinquency=sC(()=>this.rows().length?Math.round(100*this.late().length/this.rows().length):0);register(r){this.dialog.open($t,{data:r,width:`29rem`}).afterClosed().subscribe(t=>{t&&(this.snack.open(`Pago registrado.`,`Cerrar`,{duration:4e3}),this.receipt(t))})}receipt(r){let t=this.rows().find(n=>n.pension.id===r.pensionId),e={title:`Comprobante de pago`,simulated:!0,fields:[[`Código`,r.id],[`Estudiante`,t.student.name],[`Concepto`,t.pension.concept],[`Importe`,R(t.pension.amount)],[`Fecha`,F(r.date)],[`Medio de pago`,r.method]]};this.dialog.open(C,{data:e,width:`30rem`})}static ɵfac=function(t){return new(t||a)};static ɵcmp=NI({type:a,selectors:[[`ng-component`]],decls:64,vars:7,consts:[[`accountSelect`,``],[1,`admin-heading`],[`aria-label`,`Indicadores financieros`,1,`admin-metrics`],[1,`admin-metric`],[`aria-label`,`Gestión de pensiones`,1,`admin-card`],[`label`,`Pendientes`],[`tabindex`,`0`,`aria-label`,`Listado de pensiones pendientes`,1,`admin-scroll`],[`role`,`status`,1,`admin-note`],[`label`,`Historial`],[`tabindex`,`0`,`aria-label`,`Listado de pagos realizados`,1,`admin-scroll`],[`aria-label`,`Pagos realizados`,1,`admin-table`],[`scope`,`col`],[`label`,`Estados de cuenta`],[1,`admin-form`],[`appearance`,`outline`],[`matNativeControl`,``,3,`change`,`value`],[`value`,``],[3,`value`],[`aria-label`,`Pensiones pendientes`,1,`admin-table`],[1,`admin-chip`],[`matButton`,``,3,`click`],[`tabindex`,`0`,`aria-label`,`Detalle del estado de cuenta`,1,`admin-scroll`],[1,`admin-note`],[`aria-label`,`Estado de cuenta`,1,`admin-table`]],template:function(t,e){if(t&1){let n=cw();Qi(0,`header`,1)(1,`div`)(2,`h1`),Hw(3,`Pagos`),Ou(),Qi(4,`p`),Hw(5,`Consulta pensiones y registra pagos de la muestra de demostración.`),Ou()()(),Qi(6,`section`,2)(7,`div`,3)(8,`span`),Hw(9,`Pensiones pendientes`),Ou(),Qi(10,`strong`),Hw(11),Ou()(),Qi(12,`div`,3)(13,`span`),Hw(14,`Saldo vencido`),Ou(),Qi(15,`strong`),Hw(16),Ou()(),Qi(17,`div`,3)(18,`span`),Hw(19,`Morosidad de la muestra`),Ou(),Qi(20,`strong`),Hw(21),Ou()(),Qi(22,`div`,3)(23,`span`),Hw(24,`Recaudado en la muestra`),Ou(),Qi(25,`strong`),Hw(26),Ou()()(),Qi(27,`section`,4)(28,`mat-tab-group`)(29,`mat-tab`,5),QI(30,fa,19,0,`div`,6)(31,va,2,0,`p`,7),Ou(),Qi(32,`mat-tab`,8)(33,`div`,9)(34,`table`,10)(35,`thead`)(36,`tr`)(37,`th`,11),Hw(38,`Código`),Ou(),Qi(39,`th`,11),Hw(40,`Estudiante`),Ou(),Qi(41,`th`,11),Hw(42,`Concepto`),Ou(),Qi(43,`th`,11),Hw(44,`Importe`),Ou(),Qi(45,`th`,11),Hw(46,`Fecha`),Ou(),Qi(47,`th`,11),Hw(48,`Acciones`),Ou()()(),Qi(49,`tbody`),tw(50,xa,1,1,null,null,jt),Ou()()()(),Qi(52,`mat-tab`,12)(53,`div`,13)(54,`mat-form-field`,14)(55,`mat-label`),Hw(56,`Estudiante`),Ou(),Qi(57,`select`,15,0),rg(`change`,function(){kd(n);let h=Dw(58);return Fd(e.accountId.set(h.value))}),Qi(59,`option`,16),Hw(60,`Seleccionar estudiante`),Ou(),tw(61,ka,2,3,`option`,17,_a),Ou()()(),QI(63,Ia,6,2),Ou()()()}t&2&&(XD(11),vg(e.pending().length),XD(5),vg(e.soles(e.lateBalance())),XD(5),ju(``,e.delinquency(),` %`),XD(5),vg(e.soles(e.collected())),XD(4),XI(e.pending().length?30:31),XD(20),nw(e.history()),XD(7),Qh(`value`,e.accountId()),XD(4),nw(e.store.data().students),XD(2),XI(e.accountId()?63:-1))},dependencies:[xn,yn,Ot$1,ai,At$1,ns,ts,Ye,Vt,Ke],encapsulation:2})};export{Ue as Payments};