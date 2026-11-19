import{$n as yw,$t as fH,B as Hw,Bn as tw,Bt as br,C as Fd,D as Gc,Dn as qd,Dt as XD,En as pw,Gn as vg,Gt as dg,H as In,Ht as cw,Ln as tg,Nt as Yh,Ot as XI,Pt as Yw,R as Hm,Rt as b,Ut as dH,Vn as ty,_t as UE,a as ue,an as ig,b as Ei,bn as oe,bt as Vi,c as $m,cn as ju,ct as Qh,en as g,er as zh,f as Aw,gn as mw,gt as Sg,in as ie,it as Ou,jn as rg,k as Gl,l as AC,lt as Qi,m as BE,mn as ls,mt as Rt$1,nn as hj,o as a,ot as Q,q as Kh,qt as dw,rn as hw,s as $e,st as QI,tt as NI,un as kd,ut as Qn,v as Dw,vn as nw,wn as pj,xn as og,yn as ny,zt as bi}from"./main-KNENK77K.js";import{t as m}from"./chunk-BVJmFw7f.js";import{S as zn,f as ae,h as jn,i as Hn,l as Xn,m as ei,n as $t$1,u as Yn,v as qt$1,x as te,y as rt}from"./chunk-CHHYoMTi.js";import{n as I,o as Qe}from"./chunk-C0bA7zVm.js";import{C as _n,D as lr,E as ci,M as ts,O as mr,S as Zn,_ as Wr,a as Dt,c as G,d as Ot,g as Vt,h as Ur,i as Br,k as ns,l as Hr,o as Ee,p as Rt$2,r as At$1,s as Et,v as Xe,w as ai,x as Yr}from"./chunk-DO_0XEei.js";import{a as xn,i as wt,n as Nt,o as yn,t as Gt}from"./chunk-C8FGG_OT.js";import{F as ue$1,S as he,_ as ce,b as fs,k as ot,l as Ot$1,m as Ze,n as A,r as Bt$1,y as es}from"./chunk-b_Y57IRQ.js";var Tt=(()=>{class a{_animationsDisabled=es();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(t){return new(t||a)};static ɵcmp=NI({type:a,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(t,i){t&2&&dg(`mat-pseudo-checkbox-indeterminate`,i.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,i.state===`checked`)(`mat-pseudo-checkbox-disabled`,i.disabled)(`mat-pseudo-checkbox-minimal`,i.appearance===`minimal`)(`mat-pseudo-checkbox-full`,i.appearance===`full`)(`_mat-animation-noopable`,i._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(t,i){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return a})();var _e=new b(`MAT_OPTION_PARENT_COMPONENT`);var xe=new b(`MatOptgroup`);var ve=class{source;isUserInput;constructor(f,e=!1){this.source=f,this.isUserInput=e}};var K=(()=>{class a{_element=g(Qn);_changeDetectorRef=g(AC);_parent=g(_e,{optional:!0});group=g(xe,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=g(he).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=Ei(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new $e;_text;_stateChanges=new Q;constructor(){let e=g(ce);e.load(Nt),e.load(Ze),this._signalDisableRipple=!!this._parent&&bi(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let i=this._getHostElement();typeof i.focus==`function`&&i.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!ot(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new ve(this,e))}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`text`],t=[[[`mat-icon`]],`*`],i=[`mat-icon`,`*`];function p(d,y){if(d&1&&Kh(0,`mat-pseudo-checkbox`,1),d&2){let s=dw();Qh(`disabled`,s.disabled)(`state`,s.selected?`checked`:`unchecked`)}}function h(d,y){if(d&1&&Kh(0,`mat-pseudo-checkbox`,3),d&2){let s=dw();Qh(`disabled`,s.disabled)}}function _(d,y){if(d&1&&(Qi(0,`span`,4),Hw(1),Ou()),d&2){let s=dw();XD(),ju(`(`,s.group.label,`)`)}}return NI({type:a,selectors:[[`mat-option`]],viewQuery:function(y,s){if(y&1&&ig(e,7),y&2){let c;mw(c=yw())&&(s._text=c.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(y,s){y&1&&rg(`click`,function(){return s._selectViaInteraction()})(`keydown`,function(b){return s._handleKeydown(b)}),y&2&&(tg(`id`,s.id),Yh(`aria-selected`,s.selected)(`aria-disabled`,s.disabled.toString()),dg(`mdc-list-item--selected`,s.selected)(`mat-mdc-option-multiple`,s.multiple)(`mat-mdc-option-active`,s.active)(`mdc-list-item--disabled`,s.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,pj]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:i,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(y,s){y&1&&(pw(t),QI(0,p,1,2,`mat-pseudo-checkbox`,1),hw(1),Qi(2,`span`,2,0),hw(4,1),Ou(),QI(5,h,1,1,`mat-pseudo-checkbox`,3),QI(6,_,2,1,`span`,4),Kh(7,`div`,5)),y&2&&(XI(s.multiple?0:-1),XD(5),XI(!s.multiple&&s.selected&&!s.hideSingleSelectionIndicator?5:-1),XD(),XI(s.group&&s.group._inert?6:-1),XD(),Qh(`matRippleTrigger`,s._getHostElement())(`matRippleDisabled`,s.disabled||s.disableRipple))},dependencies:[Tt,Gt],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return a})();function At(a,f,e){if(e.length){let t=f.toArray(),i=e.toArray(),p=0;for(let h=0;h<a+1;h++)t[h].group&&t[h].group===i[p]&&p++;return p}return 0}function Rt(a,f,e,t){return a<e?a:a+f>e+t?Math.max(0,a-t+f):e}var Ft=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=ls({type:a});static ɵinj=br({imports:[fs]})}return a})();var ke=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=ls({type:a});static ɵinj=br({imports:[wt,Ft,K,fs]})}return a})();var qt=new b(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let a=g(ie);return()=>qt$1(a)}});var Qt=new b(`MAT_SELECT_CONFIG`);var Yt=new b(`MatSelectTrigger`);var Ce=class{source;value;constructor(f,e){this.source=f,this.value=e}};var Lt=(()=>{class a{_viewportRuler=g(Qe);_changeDetectorRef=g(AC);_elementRef=g(Qn);_dir=g(Bt$1,{optional:!0});_idGenerator=g(he);_renderer=g(Vi);_parentFormField=g(Rt$2,{optional:!0});ngControl=g(G,{self:!0,optional:!0});_liveAnnouncer=g(Ot$1);_defaultOptions=g(Qt,{optional:!0});_animationsDisabled=es();_popoverLocation;_initialized=new Q;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,p=At(e,this.options,this.optionGroups),h=t._getHostElement();e===0&&p===1?i.scrollTop=0:i.scrollTop=Rt(h.offsetTop,h.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Ce(this,e)}_scrollStrategyFactory=g(qt);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new Q;_errorStateTracker;stateChanges=new Q;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=Ei(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Ee.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Hm(()=>{let e=this.options;return e?e.changes.pipe(ty(e),Gl(()=>$m(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Gl(()=>this.optionSelectionChanges))});openedChange=new $e;_openedStream=this.openedChange.pipe(Rt$1(e=>e),oe(()=>{}));_closedStream=this.openedChange.pipe(Rt$1(e=>!e),oe(()=>{}));selectionChange=new $e;valueChange=new $e;constructor(){let e=g(ci),t=g(Et,{optional:!0}),i=g(Dt,{optional:!0}),p=g(new Sg(`tabindex`),{optional:!0}),h=g(te,{optional:!0}),_=g(Zn,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Xe(e,_||this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=p==null?0:parseInt(p)||0,this._popoverLocation=h?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new m(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(ny(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(ny(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(ty(null),ny(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute(`aria-labelledby`,e):i.removeAttribute(`aria-labelledby`)}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(In(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,`animationend`,p=>{p.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,p=t===13||t===32,h=this._keyManager;if(!h.isTyping()&&p&&!ot(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let _=this.selected;h.onKeydown(e);let d=this.selected;d&&_!==d&&this._liveAnnouncer.announce(d.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,p=i===40||i===38,h=t.isTyping();if(p&&e.altKey)e.preventDefault(),this.close();else if(!h&&(i===13||i===32)&&t.activeItem&&!ot(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!h&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let _=this.options.some(d=>!d.disabled&&!d.selected);this.options.forEach(d=>{d.disabled||(_?d.select():d.deselect())})}else{let _=t.activeItemIndex;t.onKeydown(e),this._multiple&&p&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==_&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!ot(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof $t$1?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new ue$1(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=$m(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(ny(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),$m(...this.options.map(t=>t._stateChanges)).pipe(ny(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+` `:``;return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(e){let t=A(e);t&&(t.tagName===`MAT-OPTION`||t.classList.contains(`cdk-overlay-backdrop`)||t.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`trigger`],t=[`panel`],i=[[[`mat-select-trigger`]],`*`],p=[`mat-select-trigger`,`*`];function h(c,b){if(c&1&&(Qi(0,`span`,4),Hw(1),Ou()),c&2){let n=dw();XD(),vg(n.placeholder)}}function _(c,b){c&1&&hw(0)}function d(c,b){if(c&1&&(Qi(0,`span`,11),Hw(1),Ou()),c&2){let n=dw(2);XD(),vg(n.triggerValue)}}function y(c,b){if(c&1&&(Qi(0,`span`,5),QI(1,_,1,0)(2,d,2,1,`span`,11),Ou()),c&2){let n=dw();XD(),XI(n.customTrigger?1:2)}}function s(c,b){if(c&1){let n=cw();Qi(0,`div`,12,1),rg(`keydown`,function(v){kd(n);let Gt=dw();return Fd(Gt._handleKeydown(v))}),hw(2,1),Ou()}if(c&2){let n=dw();Aw(n.panelClass),dg(`mat-select-panel-animations-enabled`,!n._animationsDisabled)(`mat-primary`,n._parentFormField?.color===`primary`)(`mat-accent`,n._parentFormField?.color===`accent`)(`mat-warn`,n._parentFormField?.color===`warn`)(`mat-undefined`,!n._parentFormField?.color),Yh(`id`,n.id+`-panel`)(`aria-multiselectable`,n.multiple)(`aria-label`,n.ariaLabel||null)(`aria-labelledby`,n._getPanelAriaLabelledby())}}return NI({type:a,selectors:[[`mat-select`]],contentQueries:function(b,n,u){if(b&1&&og(u,Yt,5)(u,K,5)(u,xe,5),b&2){let v;mw(v=yw())&&(n.customTrigger=v.first),mw(v=yw())&&(n.options=v),mw(v=yw())&&(n.optionGroups=v)}},viewQuery:function(b,n){if(b&1&&ig(e,5)(t,5)(ei,5),b&2){let u;mw(u=yw())&&(n.trigger=u.first),mw(u=yw())&&(n.panel=u.first),mw(u=yw())&&(n._overlayDir=u.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(b,n){b&1&&rg(`keydown`,function(v){return n._handleKeydown(v)})(`focus`,function(){return n._onFocus()})(`blur`,function(){return n._onBlur()}),b&2&&(Yh(`id`,n.id)(`tabindex`,n.disabled?-1:n.tabIndex)(`aria-controls`,n.panelOpen?n.id+`-panel`:null)(`aria-expanded`,n.panelOpen)(`aria-label`,n.ariaLabel||null)(`aria-required`,n.required.toString())(`aria-disabled`,n.disabled.toString())(`aria-invalid`,n.errorState)(`aria-activedescendant`,n._getAriaActiveDescendant()),dg(`mat-mdc-select-disabled`,n.disabled)(`mat-mdc-select-invalid`,n.errorState)(`mat-mdc-select-required`,n.required)(`mat-mdc-select-empty`,n.empty)(`mat-mdc-select-multiple`,n.multiple)(`mat-select-open`,n.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,pj],disableRipple:[2,`disableRipple`,`disableRipple`,pj],tabIndex:[2,`tabIndex`,`tabIndex`,c=>c==null?0:hj(c)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,pj],placeholder:`placeholder`,required:[2,`required`,`required`,pj],multiple:[2,`multiple`,`multiple`,pj],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,pj],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,hj],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,pj]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[Yw([{provide:Vt,useExisting:a},{provide:_e,useExisting:a}]),Gc],ngContentSelectors:p,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(b,n){if(b&1&&(pw(i),Qi(0,`div`,2,0),rg(`click`,function(){return n.open()}),Qi(3,`div`,3),QI(4,h,2,1,`span`,4)(5,y,3,1,`span`,5),Ou(),Qi(6,`div`,6)(7,`div`,7),qd(),Qi(8,`svg`,8),Kh(9,`path`,9),Ou()()()(),zh(10,s,3,16,`ng-template`,10),rg(`detach`,function(){return n.close()})(`backdropClick`,function(){return n.close()})(`overlayKeydown`,function(v){return n._handleOverlayKeydown(v)})),b&2){let u=Dw(1);XD(3),Yh(`id`,n._valueId),XD(),XI(n.empty?4:5),XD(6),Qh(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,n._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,n._scrollStrategy)(`cdkConnectedOverlayOrigin`,n._preferredOverlayOrigin||u)(`cdkConnectedOverlayPositions`,n._positions)(`cdkConnectedOverlayWidth`,n._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,n._popoverLocation)}},dependencies:[$t$1,ei],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear forwards;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})})()}return a})();var zt=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=ls({type:a});static ɵinj=br({imports:[rt,ke,fs,I,Ot,ke]})}return a})();var Xt=(a,f)=>f.role;function $t(a,f){if(a&1&&(Qi(0,`mat-option`,14),Hw(1),Ou()),a&2){let e=f.$implicit;Qh(`value`,e.role),XD(),vg(e.label)}}var Se=class a{static ɵfac=function(e){return new(e||a)};static ɵcmp=NI({type:a,selectors:[[`ng-component`]],decls:7,vars:0,consts:[[`mat-dialog-title`,``],[`align`,`end`],[`matButton`,`filled`,`mat-dialog-close`,``]],template:function(e,t){e&1&&(Qi(0,`h2`,0),Hw(1,`Recuperar contraseña`),Ou(),Qi(2,`mat-dialog-content`),Hw(3,` Esta recuperación es simulada. Puedes seleccionar tu perfil para volver a cargar las credenciales de demostración. No se enviará ningún correo. `),Ou(),Qi(4,`mat-dialog-actions`,1)(5,`button`,2),Hw(6,`Entendido`),Ou()())},dependencies:[xn,yn,Xn,jn,Hn,zn,Yn],encapsulation:2})};var Bt=class a$1{session=g(a);router=g(ue);dialog=g(ae);forms=g(Wr).nonNullable;profiles=Object.values(dH);form=this.forms.group({role:this.forms.control(`admin`),email:this.forms.control(dH.admin.email,[Ee.required,Ee.email]),password:this.forms.control(fH,Ee.required)});fillCredentials(f){this.form.controls.email.reset(dH[f].email),this.form.controls.password.reset(fH)}signIn(){if(this.form.invalid){this.form.markAllAsTouched();return}this.session.start(this.form.controls.role.value),this.router.navigate(this.session.dashboard())}recover(){this.dialog.open(Se,{width:`28rem`})}static ɵfac=function(e){return new(e||a$1)};static ɵcmp=NI({type:a$1,selectors:[[`ng-component`]],decls:45,vars:1,consts:[[1,`login`],[`aria-label`,`Sistema de Gestión Escolar`,1,`identity`],[1,`identity-content`],[1,`brand`],[`src`,`colegio.svg`,`alt`,``,`width`,`48`,`height`,`48`],[1,`identity-heading`],[`aria-labelledby`,`login-title`,1,`access`],[1,`access-content`],[1,`demo`],[`id`,`login-title`],[1,`intro`],[`novalidate`,``,3,`ngSubmit`,`formGroup`],[`appearance`,`outline`],[`formControlName`,`role`,3,`selectionChange`],[3,`value`],[`matInput`,``,`type`,`email`,`formControlName`,`email`,`autocomplete`,`off`,`spellcheck`,`false`],[`matInput`,``,`type`,`password`,`formControlName`,`password`,`autocomplete`,`off`],[`matButton`,`filled`,`type`,`submit`,1,`submit`],[`matButton`,``,`type`,`button`,1,`recover`,3,`click`]],template:function(e,t){e&1&&(Qi(0,`main`,0)(1,`section`,1)(2,`div`,2)(3,`div`,3),Kh(4,`img`,4),Qi(5,`span`),Hw(6,`Gestión Escolar`),Ou()(),Qi(7,`div`,5)(8,`h1`),Hw(9,`Sistema de`),Kh(10,`br`),Hw(11,`Gestión Escolar`),Ou(),Qi(12,`p`),Hw(13,`Primaria y Secundaria · Perú`),Ou()()()(),Qi(14,`section`,6)(15,`div`,7)(16,`span`,8),Hw(17,`Demostración`),Ou(),Qi(18,`h2`,9),Hw(19,`Iniciar sesión`),Ou(),Qi(20,`p`,10),Hw(21,`Selecciona un perfil para explorar el sistema con credenciales ficticias.`),Ou(),Qi(22,`form`,11),rg(`ngSubmit`,function(){return t.signIn()}),Qi(23,`mat-form-field`,12)(24,`mat-label`),Hw(25,`Perfil de demostración`),Ou(),Qi(26,`mat-select`,13),BE(),rg(`selectionChange`,function(p){return t.fillCredentials(p.value)}),tw(27,$t,2,2,`mat-option`,14,Xt),Ou()(),Qi(29,`mat-form-field`,12)(30,`mat-label`),Hw(31,`Correo electrónico`),Ou(),Qi(32,`input`,15),BE(),Ou(),Qi(33,`mat-error`),Hw(34,`Introduce un correo electrónico válido.`),Ou()(),Qi(35,`mat-form-field`,12)(36,`mat-label`),Hw(37,`Contraseña`),Ou(),Qi(38,`input`,16),BE(),Ou(),Qi(39,`mat-error`),Hw(40,`Introduce una contraseña de demostración.`),Ou()(),Qi(41,`button`,17),Hw(42,`Iniciar sesión`),Ou(),Qi(43,`button`,18),rg(`click`,function(){return t.recover()}),Hw(44,` ¿Olvidaste tu contraseña? `),Ou()()()()()),e&2&&(XD(22),Qh(`formGroup`,t.form),XD(4),UE(),XD(),nw(t.profiles),XD(5),UE(),XD(6),UE())},dependencies:[Yr,Ur,_n,Br,Hr,Dt,lr,xn,yn,Ot,ai,At$1,mr,ns,ts,zt,Lt,K],styles:[`.login[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);min-block-size:100dvh}.identity[_ngcontent-%COMP%]{display:grid;align-items:center;position:relative;overflow:hidden;color:#fff;padding:clamp(2rem,6vw,6rem);background:radial-gradient(circle at 100% 100%,#2a58a2 0,transparent 55%),linear-gradient(145deg,#0a1a35,#112d5c)}.identity[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;pointer-events:none;background-image:radial-gradient(rgba(181,208,255,.2078431373) 1px,transparent 1px);background-size:22px 22px;-webkit-mask-image:linear-gradient(135deg,transparent 42%,black);mask-image:linear-gradient(135deg,transparent 42%,black)}.identity-content[_ngcontent-%COMP%]{position:relative;z-index:1}.brand[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.875rem;font-weight:650}.identity-heading[_ngcontent-%COMP%]{margin-block-start:clamp(3rem,12vh,8rem)}h1[_ngcontent-%COMP%]{font-size:clamp(2.65rem,5vw,5.25rem);line-height:1.04;letter-spacing:-.055em;margin:0}.identity[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#c5dbff;margin-block:1.25rem 0}.access[_ngcontent-%COMP%]{display:grid;place-items:center;background:var(--%NS%school-surface);padding:clamp(1.5rem,5vw,4rem)}.access-content[_ngcontent-%COMP%]{inline-size:min(100%,25rem)}.demo[_ngcontent-%COMP%]{background:var(--%NS%school-blue-soft);color:var(--%NS%school-blue-ink);border-radius:999px;padding:.35rem .75rem;font-size:.8rem;font-weight:650}h2[_ngcontent-%COMP%]{margin-block:1.15rem .4rem;font-size:2rem;letter-spacing:-.035em}.intro[_ngcontent-%COMP%]{color:var(--%NS%school-muted);margin-block:0 1.75rem}form[_ngcontent-%COMP%]{display:grid;gap:.25rem}.submit[_ngcontent-%COMP%]{min-block-size:2.85rem}.recover[_ngcontent-%COMP%]{justify-self:center;margin-block-start:.5rem}@media(max-width:720px){.login[_ngcontent-%COMP%]{grid-template-columns:minmax(0,1fr);grid-template-rows:auto 1fr}.identity-heading[_ngcontent-%COMP%]{margin-block-start:1.5rem}.access[_ngcontent-%COMP%]{align-items:start;padding-block:2.5rem}}`]})};export{Bt as Login};