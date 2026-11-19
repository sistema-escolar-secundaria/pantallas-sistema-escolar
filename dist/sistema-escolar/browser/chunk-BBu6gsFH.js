import{t as Ht}from"./chunk-B21eoY6U.js";import{t as C}from"./chunk-B79n4ov4.js";import{_ as ot,f as ae,o as M,r as F}from"./chunk-CHHYoMTi.js";import"./chunk-C0bA7zVm.js";import{E as ci,M as ts,d as Ot,k as ns,r as At,t as $$1,w as ai}from"./chunk-DO_0XEei.js";import{a as xn$1,i as wt,n as Nt,o as yn$1,t as Gt}from"./chunk-C8FGG_OT.js";import{d as y,n as F$1,o as b,r as I}from"./chunk-BqpvepPx.js";import{E as mt,S as he$1,T as le,_ as ce,a as Ge$1,b as fs,g as _,k as ot$1,m as Ze$1,r as Bt,x as gt,y as es}from"./chunk-b_Y57IRQ.js";import{$n as yw,B as Hw,Bn as tw,Bt as br,C as Fd,Cn as oy,Ct as Vs,D as Gc,Dt as XD,E as G,En as pw,F as Hb,G as Jn,Gn as vg,Gt as dg,H as In$1,Hn as uj,Ht as cw,J as Kw,K as Jw,L as Hl,Ln as tg,M as Gw,Nn as sC,Nt as Yh,O as Gh,Ot as XI,P as H,Pt as Yw,Rt as b$1,Tt as WC,Un as up,Vn as ty,X as Li,Yn as x,Yt as eg,Zt as ew,_ as Dg,_n as ne,an as ig,b as Ei,bn as oe,bt as Vi,cn as ju,ct as Qh,en as g,er as zh,et as Mu,f as Aw,fn as lg,gn as mw,gt as Sg,h as Bb,ht as S,it as Ou,j as Gn,jn as rg,k as Gl,kn as rC,l as AC,lt as Qi,mn as ls,nn as hj,nt as Ne,ot as Q,p as B,q as Kh,qn as we,qt as dw,rn as hw,s as $e,st as QI,tt as NI,u as Am,un as kd,ut as Qn,v as Dw,vn as nw,vt as Uh,w as Fs,wn as pj,xn as og,yn as ny,yt as Um,z as Hs}from"./main-KNENK77K.js";var Qe=(()=>{class n{_elementRef=g(Qn);focus(){this._elementRef.nativeElement.focus()}static ɵfac=function(t){return new(t||n)};static ɵdir=Mu({type:n,selectors:[[``,`cdkStepHeader`,``]],hostAttrs:[`role`,`tab`]})}return n})();var We=(()=>{class n{template=g(Gn);static ɵfac=function(t){return new(t||n)};static ɵdir=Mu({type:n,selectors:[[``,`cdkStepLabel`,``]]})}return n})();var ee={NUMBER:`number`,EDIT:`edit`,DONE:`done`,ERROR:`error`};var fn=new b$1(`STEPPER_GLOBAL_OPTIONS`);var Fe=(()=>{class n{_stepperOptions;_stepper=g(he);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;get interacted(){return this._interacted()}set interacted(e){this._interacted.set(e)}_interacted=Ei(!1);interactedStream=new $e;label;errorMessage;ariaLabel;ariaLabelledby;get state(){return this._state()}set state(e){this._state.set(e)}_state=Ei(void 0);get editable(){return this._editable()}set editable(e){this._editable.set(e)}_editable=Ei(!0);optional=!1;get completed(){let e=this._completedOverride(),t=this._interacted();return e??(t&&(!this.stepControl||gn(this.stepControl)))}set completed(e){this._completedOverride.set(e)}_completedOverride=Ei(null);index=Ei(-1);isSelected=sC(()=>this._stepper.selectedIndex===this.index());indicatorType=sC(()=>{let e=this.isSelected(),t=this.completed,a=this._state()??ee.NUMBER,i=this._editable();return this._showError()&&this.hasError&&!e?ee.ERROR:this._displayDefaultIndicatorType?!t||e?ee.NUMBER:i?ee.EDIT:ee.DONE:t&&!e?ee.DONE:t&&e?a:i&&e?ee.EDIT:a});isNavigable=sC(()=>{let e=this.isSelected();return this.completed||e||!this._stepper.linear});get hasError(){return this._customError()??this._getDefaultError()}set hasError(e){this._customError.set(e)}_customError=Ei(null);_getDefaultError(){return this.interacted&&!!this.stepControl&&Yt(this.stepControl)}constructor(){let e=g(fn,{optional:!0});this._stepperOptions=e||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==!1}select(){this._stepper.selected=this}reset(){this._interacted.set(!1),this._completedOverride()!=null&&this._completedOverride.set(!1),this._customError()!=null&&this._customError.set(!1),this.stepControl&&(this._childForms?.forEach(e=>e.resetForm?.()),_n(this.stepControl))}ngOnChanges(){this._stepper._stateChanged()}_markAsInteracted(){this._interacted()||(this._interacted.set(!0),this.interactedStream.emit(this))}_showError(){return this._stepperOptions.showError??this._customError()!=null}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`*`];function t(a,i){a&1&&hw(0)}return NI({type:n,selectors:[[`cdk-step`]],contentQueries:function(i,p,f){if(i&1&&og(f,We,5)(f,$$1,5),i&2){let S;mw(S=yw())&&(p.stepLabel=S.first),mw(S=yw())&&(p._childForms=S)}},viewQuery:function(i,p){if(i&1&&ig(Gn,7),i&2){let f;mw(f=yw())&&(p.content=f.first)}},inputs:{stepControl:`stepControl`,label:`label`,errorMessage:`errorMessage`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],state:`state`,editable:[2,`editable`,`editable`,pj],optional:[2,`optional`,`optional`,pj],completed:[2,`completed`,`completed`,pj],hasError:[2,`hasError`,`hasError`,pj]},outputs:{interactedStream:`interacted`},exportAs:[`cdkStep`],features:[Gc],ngContentSelectors:e,decls:1,vars:0,template:function(i,p){i&1&&(pw(),Gh(0,t,1,0,`ng-template`))},encapsulation:2})})()}return n})();var he=(()=>{class n{_dir=g(Bt,{optional:!0});_changeDetectorRef=g(AC);_elementRef=g(Qn);_destroyed=new Q;_keyManager;_steps;steps=new Li;_stepHeader;_sortedHeaders=new Li;get linear(){return this._linear()}set linear(e){this._linear.set(e)}_linear=Ei(!1);get selectedIndex(){return this._selectedIndex()}set selectedIndex(e){this._steps?(this._isValidIndex(e),this.selectedIndex!==e&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(e)&&(e>=this.selectedIndex||this.steps.toArray()[e].editable)&&this._updateSelectedItemIndex(e))):this._selectedIndex.set(e)}_selectedIndex=Ei(0);get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(e){this.selectedIndex=e&&this.steps?this.steps.toArray().indexOf(e):-1}selectionChange=new $e;selectedIndexChange=new $e;_groupId=g(he$1).getId(`cdk-stepper-`);get orientation(){return this._orientation}set orientation(e){this._orientation=e,this._keyManager&&this._keyManager.withVerticalOrientation(e===`vertical`)}_orientation=`horizontal`;ngAfterContentInit(){this._steps.changes.pipe(ty(this._steps),ny(this._destroyed)).subscribe(e=>{this.steps.reset(e.filter(t=>t._stepper===this)),this.steps.forEach((t,a)=>t.index.set(a)),this.steps.notifyOnChanges()})}ngAfterViewInit(){if(this._stepHeader.changes.pipe(ty(this._stepHeader),ny(this._destroyed)).subscribe(e=>{this._sortedHeaders.reset(e.toArray().sort((t,a)=>t._elementRef.nativeElement.compareDocumentPosition(a._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges()}),this._keyManager=new le(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation===`vertical`),this._keyManager.updateActiveItem(this.selectedIndex),(this._dir?this._dir.change:Fs()).pipe(ty(this._layoutDirection()),ny(this._destroyed)).subscribe(e=>this._keyManager?.withHorizontalOrientation(e)),this._keyManager.updateActiveItem(this.selectedIndex),this.steps.changes.subscribe(()=>{this.selected||this._selectedIndex.set(Math.max(this.selectedIndex-1,0))}),this._isValidIndex(this.selectedIndex)||this._selectedIndex.set(0),this.linear&&this.selectedIndex>0){let e=this.steps.toArray().slice(0,this._selectedIndex());for(let t of e)t._markAsInteracted()}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete()}next(){this.selectedIndex=Math.min(this._selectedIndex()+1,this.steps.length-1)}previous(){this.selectedIndex=Math.max(this._selectedIndex()-1,0)}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(e=>e.reset()),this._stateChanged()}_getStepLabelId(e){return`${this._groupId}-label-${e}`}_getStepContentId(e){return`${this._groupId}-content-${e}`}_stateChanged(){this._changeDetectorRef.markForCheck()}_getAnimationDirection(e){let t=e-this._selectedIndex();return t<0?this._layoutDirection()===`rtl`?`next`:`previous`:t>0?this._layoutDirection()===`rtl`?`previous`:`next`:`current`}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex()}_updateSelectedItemIndex(e){let t=this.steps.toArray(),a=this._selectedIndex();this.selectionChange.emit({selectedIndex:e,previouslySelectedIndex:a,selectedStep:t[e],previouslySelectedStep:t[a]}),this._keyManager&&(this._containsFocus()?this._keyManager.setActiveItem(e):this._keyManager.updateActiveItem(e)),this._selectedIndex.set(e),this.selectedIndexChange.emit(e),this._stateChanged()}_onKeydown(e){let t=ot$1(e),a=e.keyCode,i=this._keyManager;i?.activeItemIndex!=null&&!t&&(a===32||a===13)?(this.selectedIndex=i.activeItemIndex,e.preventDefault()):i?.setFocusOrigin(`keyboard`).onKeydown(e)}_anyControlsInvalidOrPending(e){return this.linear&&e>=0?this.steps.toArray().slice(0,e).some(t=>{let a=t.stepControl;return(a?Yt(a)||vn(a)||!t.interacted:!t.completed)&&!t.optional&&!t._completedOverride()}):!1}_layoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_containsFocus(){let e=this._elementRef.nativeElement,t=mt();return e===t||e.contains(t)}_isValidIndex(e){return e>-1&&(!this.steps||e<this.steps.length)}static ɵfac=function(t){return new(t||n)};static ɵdir=Mu({type:n,selectors:[[``,`cdkStepper`,``]],contentQueries:function(t,a,i){if(t&1&&og(i,Fe,5)(i,Qe,5),t&2){let p;mw(p=yw())&&(a._steps=p),mw(p=yw())&&(a._stepHeader=p)}},inputs:{linear:[2,`linear`,`linear`,pj],selectedIndex:[2,`selectedIndex`,`selectedIndex`,hj],selected:`selected`,orientation:`orientation`},outputs:{selectionChange:`selectionChange`,selectedIndexChange:`selectedIndexChange`},exportAs:[`cdkStepper`]})}return n})();function Le(n){return typeof n==`function`}function gn(n){return Le(n)?n().valid():n.valid}function Yt(n){return Le(n)?n().invalid():n.invalid}function vn(n){return Le(n)?n().pending():n.pending}function _n(n){Le(n)?n().reset():n.reset()}var Zt=(()=>{class n{_stepper=g(he);type=`submit`;static ɵfac=function(t){return new(t||n)};static ɵdir=Mu({type:n,selectors:[[`button`,`cdkStepperNext`,``]],hostVars:1,hostBindings:function(t,a){t&1&&rg(`click`,function(){return a._stepper.next()}),t&2&&tg(`type`,a.type)},inputs:{type:`type`}})}return n})();var Jt=(()=>{class n{_stepper=g(he);type=`button`;static ɵfac=function(t){return new(t||n)};static ɵdir=Mu({type:n,selectors:[[`button`,`cdkStepperPrevious`,``]],hostVars:1,hostBindings:function(t,a){t&1&&rg(`click`,function(){return a._stepper.previous()}),t&2&&tg(`type`,a.type)},inputs:{type:`type`}})}return n})();var Xt=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ls({type:n});static ɵinj=br({imports:[fs]})}return n})();function en(n){return Error(`Unable to find icon with the name "${n}"`)}function bn(){return Error(`Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.`)}function tn(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function nn(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var $=class{url;svgText;options;svgElement=null;constructor(u,e,t){this.url=u,this.svgText=e,this.options=t}};var rn=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=/* @__PURE__ */ new Map;_iconSetConfigs=/* @__PURE__ */ new Map;_cachedIconsByUrl=/* @__PURE__ */ new Map;_inProgressUrlFetches=/* @__PURE__ */ new Map;_fontCssClassesByAlias=/* @__PURE__ */ new Map;_resolvers=[];_defaultFontSetClass;constructor(e,t,a,i){this._httpClient=e,this._sanitizer=t,this._errorHandler=i,this._document=a}addSvgIcon(e,t,a){return this.addSvgIconInNamespace(``,e,t,a)}addSvgIconLiteral(e,t,a){return this.addSvgIconLiteralInNamespace(``,e,t,a)}addSvgIconInNamespace(e,t,a,i){return this._addSvgIconConfig(e,t,new $(a,null,i))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,a,i){let p=this._sanitizer.sanitize(B.HTML,a);if(!p)throw nn(a);let f=gt(p);return this._addSvgIconConfig(e,t,new $(``,f,i))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace(``,e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace(``,e,t)}addSvgIconSetInNamespace(e,t,a){return this._addSvgIconSetConfig(e,new $(t,null,a))}addSvgIconSetLiteralInNamespace(e,t,a){let i=this._sanitizer.sanitize(B.HTML,t);if(!i)throw nn(t);let p=gt(i);return this._addSvgIconSetConfig(e,new $(``,p,a))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass??=xn(this._document),this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(B.RESOURCE_URL,e);if(!t)throw tn(e);let a=this._cachedIconsByUrl.get(t);return a?Fs(Oe(a)):this._loadSvgIconFromConfig(new $(e,null)).pipe(oy(i=>this._cachedIconsByUrl.set(t,i)),oe(i=>Oe(i)))}getNamedSvgIcon(e,t=``){let a=an(t,e),i=this._svgIconConfigs.get(a);if(i)return this._getSvgFromConfig(i);if(i=this._getIconConfigFromResolvers(t,e),i)return this._svgIconConfigs.set(a,i),this._getSvgFromConfig(i);let p=this._iconSetConfigs.get(t);return p?this._getSvgFromIconSetConfigs(e,p):Am(en(a))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?Fs(Oe(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(oe(t=>Oe(t)))}_getSvgFromIconSetConfigs(e,t){let a=this._extractIconWithNameFromAnySet(e,t);if(a)return Fs(a);let i=t.filter(p=>!p.svgText).map(p=>this._loadSvgIconSetFromConfig(p).pipe(Hl(f=>{let N=`Loading icon set URL: ${this._sanitizer.sanitize(B.RESOURCE_URL,p.url)} failed: ${f.message}`;return this._errorHandler.handleError(new Error(N)),Fs(null)})));return Um(i).pipe(oe(()=>{let p=this._extractIconWithNameFromAnySet(e,t);if(!p)throw en(e);return p}))}_extractIconWithNameFromAnySet(e,t){for(let a=t.length-1;a>=0;a--){let i=t[a];if(i.svgText&&i.svgText.toString().indexOf(e)>-1){let p=this._svgElementFromConfig(i),f=this._extractSvgIconFromSet(p,e,i.options);if(f)return f}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(oy(t=>e.svgText=t),oe(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?Fs(null):this._fetchIcon(e).pipe(oy(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,a){let i=e.querySelector(`[id="${t}"]`);if(!i)return null;let p=i.cloneNode(!0);if(p.removeAttribute(`id`),p.nodeName.toLowerCase()===`svg`)return this._setSvgAttributes(p,a);if(p.nodeName.toLowerCase()===`symbol`)return this._setSvgAttributes(this._toSvgElement(p),a);let f=this._svgElementFromString(gt(`<svg></svg>`));return f.appendChild(p),this._setSvgAttributes(f,a)}_svgElementFromString(e){let t=this._document.createElement(`DIV`);t.innerHTML=e;let a=t.querySelector(`svg`);if(!a)throw Error(`<svg> tag not found`);return a}_toSvgElement(e){let t=this._svgElementFromString(gt(`<svg></svg>`)),a=e.attributes;for(let i=0;i<a.length;i++){let{name:p,value:f}=a[i],S=p.toLowerCase();S!==`id`&&!S.startsWith(`on`)&&t.setAttribute(p,f)}for(let i=0;i<e.childNodes.length;i++)e.childNodes[i].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[i].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute(`fit`,``),e.setAttribute(`height`,`100%`),e.setAttribute(`width`,`100%`),e.setAttribute(`preserveAspectRatio`,`xMidYMid meet`),e.setAttribute(`focusable`,`false`),t&&t.viewBox&&e.setAttribute(`viewBox`,t.viewBox),e}_fetchIcon(e){let{url:t,options:a}=e,i=a?.withCredentials??!1;if(!this._httpClient)throw bn();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let p=this._sanitizer.sanitize(B.RESOURCE_URL,t);if(!p)throw tn(t);let f=this._inProgressUrlFetches.get(p);if(f)return f;let S=this._httpClient.get(p,{responseType:`text`,withCredentials:i}).pipe(oe(N=>gt(N)),Vs(()=>this._inProgressUrlFetches.delete(p)),Hs());return this._inProgressUrlFetches.set(p,S),S}_addSvgIconConfig(e,t,a){return this._svgIconConfigs.set(an(e,t),a),this}_addSvgIconSetConfig(e,t){let a=this._iconSetConfigs.get(e);return a?a.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let a=0;a<this._resolvers.length;a++){let i=this._resolvers[a](t,e);if(i)return yn(i)?new $(i.url,null,i.options):new $(i,null)}}static ɵfac=function(t){return new(t||n)(S(Bb,8),S(Hb),S(G,8),S(we))};static ɵprov=x({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();function Oe(n){return n.cloneNode(!0)}function an(n,u){return n+`:`+u}function yn(n){return!!(n.url&&n.options)}function xn(n){let u=null,e=!1;return n.fonts&&typeof n.fonts.forEach==`function`&&n.fonts.forEach(t=>{let a=t.family.replace(/['"]/g,``).trim().toLowerCase();(a===`material icons`||a.startsWith(`material icons `))&&(e=!0),a.startsWith(`material symbols rounded`)?u=`rounded`:a.startsWith(`material symbols sharp`)?u=`sharp`:a.startsWith(`material symbols`)&&(u=`outlined`)}),[u&&!e?`material-symbols-${u}`:`material-icons`,`mat-ligature-font`]}var Sn=new b$1(`MAT_ICON_DEFAULT_OPTIONS`);var Cn=new b$1(`mat-icon-location`,{providedIn:`root`,factory:()=>{let n=g(G),u=n?n.location:null;return{getPathname:()=>u?u.pathname+u.search:``}}});var on=[`clip-path`,`color-profile`,`src`,`cursor`,`fill`,`filter`,`marker`,`marker-start`,`marker-mid`,`marker-end`,`mask`,`stroke`];var In=on.map(n=>`[${n}]`).join(`, `);var Mn=/^url\(['"]?#(.*?)['"]?\)$/;var sn=(()=>{class n{_elementRef=g(Qn);_iconRegistry=g(rn);_location=g(Cn);_errorHandler=g(we);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=H.EMPTY;constructor(){let e=g(new Sg(`aria-hidden`),{optional:!0}),t=g(Sn,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute(`aria-hidden`,`true`)}_splitIconName(e){if(!e)return[``,``];let t=e.split(`:`);switch(t.length){case 1:return[``,t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let a=e.childNodes[t];(a.nodeType!==1||a.nodeName.toLowerCase()===`svg`)&&a.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(a=>a.length>0);this._previousFontSetClass.forEach(a=>e.classList.remove(a)),t.forEach(a=>e.classList.add(a)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes(`mat-ligature-font`)&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e==`string`?e.trim().split(` `)[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences,a=e.startsWith(`//`)?`/.${e}`:e;t&&t.forEach((i,p)=>{i.forEach(f=>{p.setAttribute(f.name,`url('${a}#${f.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(In),a=this._elementsWithExternalReferences=this._elementsWithExternalReferences||/* @__PURE__ */ new Map;for(let i=0;i<t.length;i++)on.forEach(p=>{let f=t[i],S=f.getAttribute(p),N=S?S.match(Mn):null;if(N){let U=a.get(f);U||(U=[],a.set(f,U)),U.push({name:p,value:N[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,a]=this._splitIconName(e);t&&(this._svgNamespace=t),a&&(this._svgName=a),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(a,t).pipe(In$1(1)).subscribe(i=>this._setSvgElement(i),i=>{let p=`Error retrieving icon ${t}:${a}! ${i.message}`;this._errorHandler.handleError(new Error(p))})}}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){return NI({type:n,selectors:[[`mat-icon`]],hostAttrs:[`role`,`img`,1,`mat-icon`,`notranslate`],hostVars:10,hostBindings:function(a,i){a&2&&(Yh(`data-mat-icon-type`,i._usingFontIcon()?`font`:`svg`)(`data-mat-icon-name`,i._svgName||i.fontIcon)(`data-mat-icon-namespace`,i._svgNamespace||i.fontSet)(`fontIcon`,i._usingFontIcon()?i.fontIcon:null),Aw(i.color?`mat-`+i.color:``),dg(`mat-icon-inline`,i.inline)(`mat-icon-no-color`,i.color!==`primary`&&i.color!==`accent`&&i.color!==`warn`))},inputs:{color:`color`,inline:[2,`inline`,`inline`,pj],svgIcon:`svgIcon`,fontSet:`fontSet`,fontIcon:`fontIcon`},exportAs:[`matIcon`],ngContentSelectors:[`*`],decls:1,vars:0,template:function(a,i){a&1&&(pw(),hw(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})})()}return n})();var ln=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ls({type:n});static ɵinj=br({imports:[fs]})}return n})();var qe=(()=>{class n extends We{static ɵfac=(()=>{let e;return function(a){return(e||(e=up(n)))(a||n)}})();static ɵdir=Mu({type:n,selectors:[[``,`matStepLabel`,``]],features:[Uh]})}return n})();var En=(()=>{class n{changes=new Q;optionalLabel=`Optional`;completedLabel=`Completed`;editableLabel=`Editable`;static ɵfac=function(t){return new(t||n)};static ɵprov=Ne({token:n,factory:n.ɵfac})}return n})();var Ge=(()=>{class n extends Qe{_intl=g(En);_focusMonitor=g(Ge$1);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected=!1;active=!1;optional=!1;disableRipple=!1;color;constructor(){super();let e=g(ce);e.load(Nt),e.load(Ze$1);let t=g(AC);this._intlSubscription=this._intl.changes.subscribe(()=>t.markForCheck())}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef)}focus(e,t){e?this._focusMonitor.focusVia(this._elementRef,e,t):this._elementRef.nativeElement.focus(t)}_stringLabel(){return this.label instanceof qe?null:this.label}_templateLabel(){return this.label instanceof qe?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getDefaultTextForState(e){return e==`number`?`${this.index+1}`:e==`edit`?`create`:e==`error`?`warning`:e}_hasEmptyLabel(){return!this._stringLabel()&&!this._templateLabel()&&!this._hasOptionalLabel()&&!this._hasErrorLabel()}_hasOptionalLabel(){return this.optional&&this.state!==`error`}_hasErrorLabel(){return this.state===`error`}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=(_,M,d)=>({index:_,active:M,optional:d});function t(_,M){if(_&1&&eg(0,2),_&2){let d=dw();Qh(`ngTemplateOutlet`,d.iconOverrides[d.state])(`ngTemplateOutletContext`,Jw(2,e,d.index,d.active,d.optional))}}function a(_,M){if(_&1&&(Qi(0,`span`,7),Hw(1),Ou()),_&2){let d=dw(2);XD(),vg(d._getDefaultTextForState(d.state))}}function i(_,M){if(_&1&&(Qi(0,`span`,8),Hw(1),Ou()),_&2){let d=dw(3);XD(),vg(d._intl.completedLabel)}}function p(_,M){if(_&1&&(Qi(0,`span`,8),Hw(1),Ou()),_&2){let d=dw(3);XD(),vg(d._intl.editableLabel)}}function f(_,M){if(_&1&&(QI(0,i,2,1,`span`,8)(1,p,2,1,`span`,8),Qi(2,`mat-icon`,7),Hw(3),Ou()),_&2){let d=dw(2);XI(d.state===`done`?0:d.state===`edit`?1:-1),XD(3),vg(d._getDefaultTextForState(d.state))}}function S(_,M){if(_&1&&QI(0,a,2,1,`span`,7)(1,f,4,2),_&2){let te=dw();XI(te.state===`number`?0:1)}}function N(_,M){_&1&&(Qi(0,`div`,4),eg(1,9),Ou()),_&2&&(XD(),Qh(`ngTemplateOutlet`,M.template))}function U(_,M){if(_&1&&(Qi(0,`div`,4),Hw(1),Ou()),_&2){let d=dw();XD(),vg(d.label)}}function Re(_,M){if(_&1&&(Qi(0,`div`,5),Hw(1),Ou()),_&2){let d=dw();XD(),vg(d._intl.optionalLabel)}}function Ae(_,M){if(_&1&&(Qi(0,`div`,6),Hw(1),Ou()),_&2){let d=dw();XD(),vg(d.errorMessage)}}return NI({type:n,selectors:[[`mat-step-header`]],hostAttrs:[`role`,``,1,`mat-step-header`],hostVars:4,hostBindings:function(M,d){M&2&&(Aw(`mat-`+(d.color||`primary`)),dg(`mat-step-header-empty-label`,d._hasEmptyLabel()))},inputs:{state:`state`,label:`label`,errorMessage:`errorMessage`,iconOverrides:`iconOverrides`,index:`index`,selected:`selected`,active:`active`,optional:`optional`,disableRipple:`disableRipple`,color:`color`},features:[Uh],decls:10,vars:17,consts:[[`matRipple`,``,1,`mat-step-header-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mat-step-icon-content`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`mat-step-label`],[1,`mat-step-text-label`],[1,`mat-step-optional`],[1,`mat-step-sub-label-error`],[`aria-hidden`,`true`],[1,`cdk-visually-hidden`],[3,`ngTemplateOutlet`]],template:function(M,d){if(M&1&&(Kh(0,`div`,0),Qi(1,`div`)(2,`div`,1),QI(3,t,1,6,`ng-container`,2)(4,S,2,1),Ou()(),Qi(5,`div`,3),QI(6,N,2,1,`div`,4)(7,U,2,1,`div`,4),QI(8,Re,2,1,`div`,5),QI(9,Ae,2,1,`div`,6),Ou()),M&2){let te;Qh(`matRippleTrigger`,d._getHostElement())(`matRippleDisabled`,d.disableRipple),XD(),Aw(Gw(`mat-step-icon-state-`,d.state,` mat-step-icon`)),dg(`mat-step-icon-selected`,d.selected),XD(2),XI(d.iconOverrides&&d.iconOverrides[d.state]?3:4),XD(2),dg(`mat-step-label-active`,d.active)(`mat-step-label-selected`,d.selected)(`mat-step-label-error`,d.state==`error`),XD(),XI((te=d._templateLabel())?6:d._stringLabel()?7:-1,te),XD(2),XI(d._hasOptionalLabel()?8:-1),XD(),XI(d._hasErrorLabel()?9:-1)}},dependencies:[Gt,WC,sn],styles:[`.mat-step-header {
  overflow: hidden;
  outline: none;
  cursor: pointer;
  position: relative;
  box-sizing: content-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-step-header:focus-visible .mat-focus-indicator::before {
  content: "";
}
.mat-step-header:hover[aria-disabled=true] {
  cursor: default;
}
.mat-step-header:hover:not([aria-disabled]), .mat-step-header:hover[aria-disabled=false] {
  background-color: var(--%NS%mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
  border-radius: var(--%NS%mat-stepper-header-hover-state-layer-shape, var(--%NS%mat-sys-corner-medium));
}
.mat-step-header:hover:not([aria-disabled]) .mat-step-header-ripple::before, .mat-step-header:hover[aria-disabled=false] .mat-step-header-ripple::before {
  border-radius: var(--%NS%mat-stepper-header-hover-state-layer-shape, var(--%NS%mat-sys-corner-medium));
}
.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused {
  background-color: var(--%NS%mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  border-radius: var(--%NS%mat-stepper-header-focus-state-layer-shape, var(--%NS%mat-sys-corner-medium));
}
.mat-step-header.cdk-keyboard-focused .mat-step-header-ripple::before, .mat-step-header.cdk-program-focused .mat-step-header-ripple::before {
  border-radius: var(--%NS%mat-stepper-header-focus-state-layer-shape, var(--%NS%mat-sys-corner-medium));
}
@media (hover: none) {
  .mat-step-header:hover {
    background: none;
  }
}
@media (forced-colors: active) {
  .mat-step-header {
    outline: solid 1px;
  }
  .mat-step-header[aria-selected=true] .mat-step-label {
    text-decoration: underline;
  }
  .mat-step-header[aria-disabled=true] {
    outline-color: GrayText;
  }
  .mat-step-header[aria-disabled=true] .mat-step-label,
  .mat-step-header[aria-disabled=true] .mat-step-icon,
  .mat-step-header[aria-disabled=true] .mat-step-optional {
    color: GrayText;
  }
}

.mat-step-optional {
  font-size: 12px;
  color: var(--%NS%mat-stepper-header-optional-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-step-sub-label-error {
  font-size: 12px;
  font-weight: normal;
}

.mat-step-icon {
  border-radius: 50%;
  height: 24px;
  width: 24px;
  flex-shrink: 0;
  position: relative;
  color: var(--%NS%mat-stepper-header-icon-foreground-color, var(--%NS%mat-sys-surface));
  background-color: var(--%NS%mat-stepper-header-icon-background-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-step-icon-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
}

.mat-step-icon .mat-icon {
  font-size: 16px;
  height: 16px;
  width: 16px;
}

.mat-step-icon-state-error {
  background-color: var(--%NS%mat-stepper-header-error-state-icon-background-color, transparent);
  color: var(--%NS%mat-stepper-header-error-state-icon-foreground-color, var(--%NS%mat-sys-error));
}
.mat-step-icon-state-error .mat-icon {
  font-size: 24px;
  height: 24px;
  width: 24px;
}

.mat-step-label {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 50px;
  vertical-align: middle;
  font-family: var(--%NS%mat-stepper-header-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-stepper-header-label-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-stepper-header-label-text-weight, var(--%NS%mat-sys-title-small-weight));
  color: var(--%NS%mat-stepper-header-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-active {
  color: var(--%NS%mat-stepper-header-selected-state-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-error {
  color: var(--%NS%mat-stepper-header-error-state-label-text-color, var(--%NS%mat-sys-error));
  font-size: var(--%NS%mat-stepper-header-error-state-label-text-size, var(--%NS%mat-sys-title-small-size));
}
.mat-step-label.mat-step-label-selected {
  font-size: var(--%NS%mat-stepper-header-selected-state-label-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-stepper-header-selected-state-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-step-header-empty-label .mat-step-label {
  min-width: 0;
}

.mat-step-text-label {
  text-overflow: ellipsis;
  overflow: hidden;
}

.mat-step-header .mat-step-header-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-step-icon-selected {
  background-color: var(--%NS%mat-stepper-header-selected-state-icon-background-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-stepper-header-selected-state-icon-foreground-color, var(--%NS%mat-sys-on-primary));
}

.mat-step-icon-state-done {
  background-color: var(--%NS%mat-stepper-header-done-state-icon-background-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-stepper-header-done-state-icon-foreground-color, var(--%NS%mat-sys-on-primary));
}

.mat-step-icon-state-edit {
  background-color: var(--%NS%mat-stepper-header-edit-state-icon-background-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-stepper-header-edit-state-icon-foreground-color, var(--%NS%mat-sys-on-primary));
}
`],encapsulation:2})})()}return n})();var wn=(()=>{class n{templateRef=g(Gn);name;static ɵfac=function(t){return new(t||n)};static ɵdir=Mu({type:n,selectors:[[`ng-template`,`matStepperIcon`,``]],inputs:{name:[0,`matStepperIcon`,`name`]}})}return n})();var Nn=(()=>{class n{_template=g(Gn);static ɵfac=function(t){return new(t||n)};static ɵdir=Mu({type:n,selectors:[[`ng-template`,`matStepContent`,``]]})}return n})();var Ke=(()=>{class n extends Fe{_errorStateMatcher=g(ci,{skipSelf:!0});_viewContainerRef=g(Jn);_isSelected=H.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(Gl(()=>this._stepper.selectionChange.pipe(oe(e=>e.selectedStep===this),ty(this._stepper.selected===this)))).subscribe(e=>{e&&this._lazyContent&&!this._portal&&(this._portal=new M(this._lazyContent._template,this._viewContainerRef))})}ngOnDestroy(){this._isSelected.unsubscribe()}isErrorState(e,t){let a=this._errorStateMatcher.isErrorState(e,t),i=!!(e&&e.invalid&&this.interacted);return a||i}isSignalErrorState(e){let t=this._errorStateMatcher.isSignalErrorState?.(e)??!1,a=!!(e&&e().invalid()&&this.interacted);return t||a}static ɵfac=(()=>{let e;return function(a){return(e||(e=up(n)))(a||n)}})();static ɵcmp=(function(){let e=[`*`];function t(i,p){}function a(i,p){if(i&1&&(hw(0),zh(1,t,0,0,`ng-template`,0)),i&2){let f=dw();XD(),Qh(`cdkPortalOutlet`,f._portal)}}return NI({type:n,selectors:[[`mat-step`]],contentQueries:function(p,f,S){if(p&1&&og(S,qe,5)(S,Nn,5),p&2){let N;mw(N=yw())&&(f.stepLabel=N.first),mw(N=yw())&&(f._lazyContent=N.first)}},hostAttrs:[`hidden`,``],inputs:{color:`color`},exportAs:[`matStep`],features:[Yw([{provide:ci,useExisting:n},{provide:Fe,useExisting:n}]),Uh],ngContentSelectors:e,decls:1,vars:0,consts:[[3,`cdkPortalOutlet`]],template:function(p,f){p&1&&(pw(),zh(0,a,2,1,`ng-template`))},dependencies:[ot],encapsulation:2})})()}return n})();var Ye=(()=>{class n extends he{_ngZone=g(ne);_renderer=g(Vi);_animationsDisabled=es();_cleanupTransition;_isAnimating=Ei(!1);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new Li;_icons;animationDone=new $e;disableRipple=!1;color;labelPosition=`end`;headerPosition=`top`;ariaLabel=null;headerPrefix=uj(null);_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(e){/^[0-9]+(?:\.[0-9]+)?$/.test(e)?this._animationDuration=e+`ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(e)?this._animationDuration=e:this._animationDuration=``}_animationDuration=``;_isServer=!g(_).isBrowser;constructor(){super();let t=g(Qn).nativeElement.nodeName.toLowerCase();this.orientation=t===`mat-vertical-stepper`?`vertical`:`horizontal`}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:e,templateRef:t})=>this._iconOverrides[e]=t),this.steps.changes.pipe(ny(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(ny(this._destroyed)).subscribe(()=>{let e=this._getAnimationDuration();e===`0ms`||e===`0s`?this._onAnimationDone():this._isAnimating.set(!0)}),this._ngZone.runOutsideAngular(()=>{this._animationsDisabled||setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-stepper-animations-enabled`),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionend)},200)})}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask==`function`){let e=!1;this._animatedContainers.changes.pipe(ty(null),ny(this._destroyed)).subscribe(()=>queueMicrotask(()=>{e||(e=!0,this.animationDone.emit()),this._stateChanged()}))}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.()}_getAnimationDuration(){return this._animationsDisabled?`0ms`:this.animationDuration?this.animationDuration:this.orientation===`horizontal`?`500ms`:`225ms`}_handleTransitionend=e=>{let t=e.target;if(!t)return;let a=this.orientation===`horizontal`&&e.propertyName===`transform`&&t.classList.contains(`mat-horizontal-stepper-content-current`),i=this.orientation===`vertical`&&e.propertyName===`grid-template-rows`&&t.classList.contains(`mat-vertical-content-container-active`);(a||i)&&this._animatedContainers.find(f=>f.nativeElement===t)&&this._onAnimationDone()};_onAnimationDone(){this._isAnimating.set(!1),this.animationDone.emit()}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`animatedContainer`],t=[`*`],a=h=>({steps:h}),i=h=>({step:h});function p(h,b){h&1&&hw(0)}function f(h,b){if(h&1&&(Qi(0,`div`,5),eg(1,9)(2,6),Ou()),h&2){let s=dw(2),m=Dw(6);XD(),Qh(`ngTemplateOutlet`,s.headerPrefix()),XD(),Qh(`ngTemplateOutlet`,m)(`ngTemplateOutletContext`,Kw(3,a,s.steps))}}function S(h,b){if(h&1&&eg(0,6),h&2){let s=dw(2),m=Dw(6);Qh(`ngTemplateOutlet`,m)(`ngTemplateOutletContext`,Kw(2,a,s.steps))}}function N(h,b){if(h&1&&(Qi(0,`div`,10,2),eg(2,9),Ou()),h&2){let s=b.$implicit,m=b.$index,w=dw(2);Aw(`mat-horizontal-stepper-content-`+w._getAnimationDirection(m)),Qh(`id`,w._getStepContentId(m)),Yh(`aria-labelledby`,w._getStepLabelId(m))(`inert`,w.selectedIndex===m?null:``),XD(2),Qh(`ngTemplateOutlet`,s.content)}}function U(h,b){if(h&1&&(Qi(0,`div`,3),QI(1,f,3,5,`div`,5)(2,S,1,4,`ng-container`,6),Qi(3,`div`,7),tw(4,N,3,6,`div`,8,ew),Ou()()),h&2){let s=dw();XD(),XI(s.headerPrefix()?1:2),XD(3),nw(s.steps)}}function Re(h,b){if(h&1&&eg(0,9),h&2){let s=dw(2);Qh(`ngTemplateOutlet`,s.headerPrefix())}}function Ae(h,b){if(h&1&&(Qi(0,`div`,11),eg(1,6),Qi(2,`div`,12,2)(4,`div`,13)(5,`div`,14),eg(6,9),Ou()()()()),h&2){let s=b.$implicit,m=b.$index,w=b.$index,fe=b.$count,ge=dw(2),hn=Dw(4);XD(),Qh(`ngTemplateOutlet`,hn)(`ngTemplateOutletContext`,Kw(11,i,s)),XD(),dg(`mat-stepper-vertical-line`,w!==fe-1)(`mat-vertical-content-container-active`,ge.selectedIndex===m),Yh(`inert`,ge.selectedIndex===m?null:``)(`aria-label`,ge.ariaLabel),XD(2),Qh(`id`,ge._getStepContentId(m)),Yh(`aria-labelledby`,ge._getStepLabelId(m)),XD(2),Qh(`ngTemplateOutlet`,s.content)}}function _(h,b){if(h&1&&(Qi(0,`div`,4),QI(1,Re,1,1,`ng-container`,9),tw(2,Ae,7,13,`div`,11,ew),Ou()),h&2){let s=dw();XD(),XI(s.headerPrefix()?1:-1),XD(),nw(s.steps)}}function M(h,b){if(h&1){let s=cw();Qi(0,`mat-step-header`,15),rg(`click`,function(){let w=kd(s).step;return Fd(w.select())})(`keydown`,function(w){kd(s);let fe=dw();return Fd(fe._onKeydown(w))}),Ou()}if(h&2){let s=b.step,m=dw();dg(`mat-horizontal-stepper-header`,m.orientation===`horizontal`)(`mat-vertical-stepper-header`,m.orientation===`vertical`),Qh(`tabIndex`,m._getFocusIndex()===s.index()?0:-1)(`id`,m._getStepLabelId(s.index()))(`index`,s.index())(`state`,s.indicatorType())(`label`,s.stepLabel||s.label)(`selected`,s.isSelected())(`active`,s.isNavigable())(`optional`,s.optional)(`errorMessage`,s.errorMessage)(`iconOverrides`,m._iconOverrides)(`disableRipple`,m.disableRipple||!s.isNavigable())(`color`,s.color||m.color),Yh(`role`,m.orientation===`horizontal`?`tab`:`button`)(`aria-posinset`,m.orientation===`horizontal`?s.index()+1:null)(`aria-setsize`,m.orientation===`horizontal`?m.steps.length:null)(`aria-selected`,m.orientation===`horizontal`?s.isSelected():null)(`aria-current`,m.orientation===`vertical`&&s.isSelected()?`step`:null)(`aria-disabled`,m.orientation===`vertical`&&s.isSelected()?`true`:null)(`aria-expanded`,m.orientation===`vertical`?s.isSelected():null)(`aria-controls`,m._getStepContentId(s.index()))(`aria-label`,s.ariaLabel||null)(`aria-labelledby`,!s.ariaLabel&&s.ariaLabelledby?s.ariaLabelledby:null)(`aria-disabled`,s.isNavigable()?null:!0)}}function d(h,b){h&1&&Kh(0,`div`,17)}function te(h,b){if(h&1&&(eg(0,6),QI(1,d,1,0,`div`,17)),h&2){let s=b.$implicit,m=b.$index,w=b.$count;dw(2);let fe=Dw(4);Qh(`ngTemplateOutlet`,fe)(`ngTemplateOutletContext`,Kw(3,i,s)),XD(),XI(m!==w-1?1:-1)}}function un(h,b){if(h&1&&(Qi(0,`div`,16),tw(1,te,2,5,null,null,ew),Ou()),h&2){let s=b.steps,m=dw();Yh(`aria-label`,m.ariaLabel),XD(),nw(s)}}return NI({type:n,selectors:[[`mat-stepper`],[`mat-vertical-stepper`],[`mat-horizontal-stepper`],[``,`matStepper`,``]],contentQueries:function(b,s,m){if(b&1&&og(m,Ke,5)(m,wn,5),b&2){let w;mw(w=yw())&&(s._steps=w),mw(w=yw())&&(s._icons=w)}},viewQuery:function(b,s){if(b&1&&ig(Ge,5)(e,5),b&2){let m;mw(m=yw())&&(s._stepHeader=m),mw(m=yw())&&(s._animatedContainers=m)}},hostVars:14,hostBindings:function(b,s){b&2&&(lg(`--%NS%mat-stepper-animation-duration`,s._getAnimationDuration()),dg(`mat-stepper-horizontal`,s.orientation===`horizontal`)(`mat-stepper-vertical`,s.orientation===`vertical`)(`mat-stepper-label-position-end`,s.orientation===`horizontal`&&s.labelPosition==`end`)(`mat-stepper-label-position-bottom`,s.orientation===`horizontal`&&s.labelPosition==`bottom`)(`mat-stepper-header-position-bottom`,s.headerPosition===`bottom`)(`mat-stepper-animating`,s._isAnimating()))},inputs:{disableRipple:`disableRipple`,color:`color`,labelPosition:`labelPosition`,headerPosition:`headerPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],headerPrefix:[1,`headerPrefix`],animationDuration:`animationDuration`},outputs:{animationDone:`animationDone`},exportAs:[`matStepper`,`matVerticalStepper`,`matHorizontalStepper`],features:[Yw([{provide:he,useExisting:n}]),Uh],ngContentSelectors:t,decls:7,vars:2,consts:[[`stepTemplate`,``],[`horizontalStepsTemplate`,``],[`animatedContainer`,``],[1,`mat-horizontal-stepper-wrapper`],[1,`mat-vertical-stepper-wrapper`],[1,`mat-horizontal-stepper-header-wrapper`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`mat-horizontal-content-container`],[`role`,`tabpanel`,1,`mat-horizontal-stepper-content`,3,`id`,`class`],[3,`ngTemplateOutlet`],[`role`,`tabpanel`,1,`mat-horizontal-stepper-content`,3,`id`],[1,`mat-step`],[1,`mat-vertical-content-container`],[`role`,`region`,1,`mat-vertical-stepper-content`,3,`id`],[1,`mat-vertical-content`],[3,`click`,`keydown`,`tabIndex`,`id`,`index`,`state`,`label`,`selected`,`active`,`optional`,`errorMessage`,`iconOverrides`,`disableRipple`,`color`],[`aria-orientation`,`horizontal`,`role`,`tablist`,1,`mat-horizontal-stepper-header-container`],[1,`mat-stepper-horizontal-line`]],template:function(b,s){if(b&1&&(pw(),QI(0,p,1,0),QI(1,U,6,1,`div`,3)(2,_,4,1,`div`,4),zh(3,M,1,27,`ng-template`,null,0,rC)(5,un,3,1,`ng-template`,null,1,rC)),b&2){let m;XI(s._isServer?0:-1),XD(),XI((m=s.orientation)===`horizontal`?1:m===`vertical`?2:-1)}},dependencies:[WC,Ge],styles:[`.mat-stepper-vertical,
.mat-stepper-horizontal {
  display: block;
  font-family: var(--%NS%mat-stepper-container-text-font, var(--%NS%mat-sys-body-medium-font));
  background: var(--%NS%mat-stepper-container-color, var(--%NS%mat-sys-surface));
}

.mat-horizontal-stepper-header-wrapper {
  align-items: center;
  display: flex;
}

.mat-horizontal-stepper-header-container {
  white-space: nowrap;
  display: flex;
  align-items: center;
  flex-grow: 1;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container {
  align-items: flex-start;
}
.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container {
  order: 1;
}

.mat-stepper-horizontal-line {
  border-top-width: 1px;
  border-top-style: solid;
  flex: auto;
  height: 0;
  margin: 0 -16px;
  min-width: 32px;
  border-top-color: var(--%NS%mat-stepper-line-color, var(--%NS%mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-stepper-horizontal-line {
  margin: 0;
  min-width: 0;
  position: relative;
  top: calc(calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}

.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  border-top-width: 1px;
  border-top-style: solid;
  content: "";
  display: inline-block;
  height: 0;
  position: absolute;
  width: calc(50% - 20px);
}

.mat-horizontal-stepper-header {
  display: flex;
  overflow: hidden;
  align-items: center;
  padding: 0 24px;
  height: var(--%NS%mat-stepper-header-height, 72px);
}
.mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 8px;
  flex: none;
}
[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 8px;
}
.mat-horizontal-stepper-header.mat-step-header-empty-label .mat-step-icon {
  margin: 0;
}
.mat-horizontal-stepper-header::before, .mat-horizontal-stepper-header::after {
  border-top-color: var(--%NS%mat-stepper-line-color, var(--%NS%mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  padding: calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after {
  top: calc(calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  box-sizing: border-box;
  flex-direction: column;
  height: auto;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  right: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before {
  left: 0;
}
[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after {
  display: none;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label {
  padding: 16px 0 0 0;
  text-align: center;
  width: 100%;
}

.mat-vertical-stepper-header {
  display: flex;
  align-items: center;
  height: 24px;
  padding: calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-vertical-stepper-header .mat-step-icon {
  margin-right: 12px;
}
[dir=rtl] .mat-vertical-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 12px;
}

.mat-horizontal-stepper-wrapper {
  display: flex;
  flex-direction: column;
}

.mat-horizontal-stepper-content {
  visibility: hidden;
  overflow: hidden;
  outline: 0;
  height: 0;
}
.mat-stepper-animations-enabled .mat-horizontal-stepper-content {
  transition: transform var(--%NS%mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-previous {
  transform: translate3d(-100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-next {
  transform: translate3d(100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  visibility: visible;
  transform: none;
  height: auto;
}
.mat-stepper-horizontal:not(.mat-stepper-animating) .mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  overflow: visible;
}

.mat-horizontal-content-container {
  overflow: hidden;
  padding: 0 24px 24px 24px;
}
@media (forced-colors: active) {
  .mat-horizontal-content-container {
    outline: solid 1px;
  }
}
.mat-stepper-header-position-bottom .mat-horizontal-content-container {
  padding: 24px 24px 0 24px;
}

.mat-vertical-content-container {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
  margin-left: 36px;
  border: 0;
  position: relative;
}
.mat-stepper-animations-enabled .mat-vertical-content-container {
  transition: grid-template-rows var(--%NS%mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-vertical-content-container.mat-vertical-content-container-active {
  grid-template-rows: 1fr;
}
.mat-step:last-child .mat-vertical-content-container {
  border: none;
}
@media (forced-colors: active) {
  .mat-vertical-content-container {
    outline: solid 1px;
  }
}
[dir=rtl] .mat-vertical-content-container {
  margin-left: 0;
  margin-right: 36px;
}
@supports not (grid-template-rows: 0fr) {
  .mat-vertical-content-container {
    height: 0;
  }
  .mat-vertical-content-container.mat-vertical-content-container-active {
    height: auto;
  }
}

.mat-stepper-vertical-line::before {
  content: "";
  position: absolute;
  left: 0;
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: var(--%NS%mat-stepper-line-color, var(--%NS%mat-sys-outline));
  top: calc(8px - calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2));
  bottom: calc(8px - calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2));
}
[dir=rtl] .mat-stepper-vertical-line::before {
  left: auto;
  right: 0;
}

.mat-vertical-stepper-content {
  overflow: hidden;
  outline: 0;
  visibility: hidden;
}
.mat-stepper-animations-enabled .mat-vertical-stepper-content {
  transition: visibility var(--%NS%mat-stepper-animation-duration, 0) linear;
}
.mat-vertical-content-container-active > .mat-vertical-stepper-content {
  visibility: visible;
}

.mat-vertical-content {
  padding: 0 24px 24px 24px;
}
`],encapsulation:2})})()}return n})();var pn=(()=>{class n extends Zt{static ɵfac=(()=>{let e;return function(a){return(e||(e=up(n)))(a||n)}})();static ɵdir=Mu({type:n,selectors:[[`button`,`matStepperNext`,``]],hostAttrs:[1,`mat-stepper-next`],hostVars:1,hostBindings:function(t,a){t&2&&tg(`type`,a.type)},features:[Uh]})}return n})();var cn=(()=>{class n extends Jt{static ɵfac=(()=>{let e;return function(a){return(e||(e=up(n)))(a||n)}})();static ɵdir=Mu({type:n,selectors:[[`button`,`matStepperPrevious`,``]],hostAttrs:[1,`mat-stepper-previous`],hostVars:1,hostBindings:function(t,a){t&2&&tg(`type`,a.type)},features:[Uh]})}return n})();var dn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ls({type:n});static ɵinj=br({providers:[ci],imports:[F,Xt,ln,wt,Ye,Ge,fs]})}return n})();var Ze=(n,u)=>u.id;function zn(n,u){if(n&1){let e=cw();Qi(0,`button`,11),rg(`click`,function(){kd(e);let a=dw();return Fd(a.start())}),Hw(1,`Nueva matrícula`),Ou()}}function Dn(n,u){if(n&1&&(Qi(0,`option`,21),Hw(1),Ou()),n&2){let e=u.$implicit;Qh(`value`,e.id),XD(),Dg(``,e.name,` · `,e.code)}}function Tn(n,u){n&1&&(Qi(0,`p`,22),Hw(1,`No se encontraron estudiantes.`),Ou())}function Fn(n,u){if(n&1&&(Qi(0,`option`,21),Hw(1),Ou()),n&2){let e=u.$implicit;Qh(`value`,e),XD(),vg(e)}}function Ln(n,u){if(n&1&&(Qi(0,`option`,21),Hw(1),Ou()),n&2){let e=u.$implicit,t=dw(2);Qh(`value`,e.id),XD(),vg(t.sectionLabel(e))}}function On(n,u){if(n&1&&(Qi(0,`p`,29),Hw(1),Ou()),n&2){let e=dw(3);XD(),vg(e.issue())}}function Rn(n,u){if(n&1&&(Qi(0,`p`,31),Hw(1),Ou(),QI(2,On,2,1,`p`,29)),n&2){let e=dw(2);XD(),ju(`Cupos disponibles · `,e.seats()),XD(),XI(e.issue()?2:-1)}}function An(n,u){if(n&1&&(Qi(0,`dl`,28)(1,`div`)(2,`dt`),Hw(3,`Estudiante`),Ou(),Qi(4,`dd`),Hw(5),Ou()(),Qi(6,`div`)(7,`dt`),Hw(8,`Año académico`),Ou(),Qi(9,`dd`),Hw(10),Ou()(),Qi(11,`div`)(12,`dt`),Hw(13,`Grado y sección`),Ou(),Qi(14,`dd`),Hw(15),Ou()(),Qi(16,`div`)(17,`dt`),Hw(18,`Cupos disponibles`),Ou(),Qi(19,`dd`),Hw(20),Ou()()()),n&2){let e=dw(2);XD(5),vg(e.store.student(e.studentId()).name),XD(5),vg(e.year()),XD(5),vg(e.sectionLabel(e.store.section(e.sectionId()))),XD(5),vg(e.seats())}}function Pn(n,u){if(n&1&&(Qi(0,`p`,29),Hw(1),Ou()),n&2){let e=dw(2);XD(),vg(e.error())}}function Hn(n,u){if(n&1){let e=cw();Qi(0,`section`,6)(1,`div`,4)(2,`h2`,12),Hw(3,`Nueva matrícula`),Ou(),Qi(4,`button`,13),rg(`click`,function(){kd(e);let a=dw();return Fd(a.creating.set(!1))}),Hw(5,`Cancelar matrícula`),Ou()(),Qi(6,`mat-vertical-stepper`,14)(7,`mat-step`,15)(8,`div`,16)(9,`mat-form-field`,17)(10,`mat-label`),Hw(11,`Buscar estudiante`),Ou(),Qi(12,`input`,18,0),rg(`input`,function(){kd(e);let a=Dw(13),i=dw();return Fd(i.search(a.value))}),Ou()(),Qi(14,`mat-form-field`,17)(15,`mat-label`),Hw(16,`Estudiante`),Ou(),Qi(17,`select`,19,1),rg(`change`,function(){kd(e);let a=Dw(18),i=dw();return Fd(i.studentId.set(a.value))}),Qi(19,`option`,20),Hw(20,`Seleccionar estudiante`),Ou(),tw(21,Dn,2,3,`option`,21,Ze),Ou()()(),QI(23,Tn,2,0,`p`,22),Qi(24,`button`,23),Hw(25,`Continuar`),Ou()(),Qi(26,`mat-step`,24)(27,`div`,16)(28,`mat-form-field`,17)(29,`mat-label`),Hw(30,`Año académico`),Ou(),Qi(31,`select`,19,2),rg(`change`,function(){kd(e);let a=Dw(32),i=dw();return Fd(i.year.set(+a.value))}),tw(33,Fn,2,2,`option`,21,ew),Ou()(),Qi(35,`mat-form-field`,17)(36,`mat-label`),Hw(37,`Grado y sección`),Ou(),Qi(38,`select`,19,3),rg(`change`,function(){kd(e);let a=Dw(39),i=dw();return Fd(i.sectionId.set(a.value))}),Qi(40,`option`,20),Hw(41,`Seleccionar sección`),Ou(),tw(42,Ln,2,2,`option`,21,Ze),Ou()()(),QI(44,Rn,3,2),Qi(45,`div`,25)(46,`button`,26),Hw(47,`Atrás`),Ou(),Qi(48,`button`,23),Hw(49,` Revisar matrícula `),Ou()()(),Qi(50,`mat-step`,27),QI(51,An,21,4,`dl`,28),QI(52,Pn,2,1,`p`,29),Qi(53,`div`,25)(54,`button`,26),Hw(55,`Atrás`),Ou(),Qi(56,`button`,30),rg(`click`,function(){kd(e);let a=dw();return Fd(a.confirm())}),Hw(57,` Confirmar matrícula `),Ou()()()()()}if(n&2){let e=dw();XD(7),Qh(`completed`,!!e.studentId()),XD(5),Qh(`value`,e.query()),XD(5),Qh(`value`,e.studentId()),XD(4),nw(e.students()),XD(2),XI(e.students().length?-1:23),XD(),Qh(`disabled`,!e.studentId()),XD(2),Qh(`completed`,!!e.sectionId()&&!e.issue()),XD(5),Qh(`value`,e.year()),XD(2),nw(e.years),XD(5),Qh(`value`,e.sectionId()),XD(4),nw(e.store.sections()),XD(2),XI(e.sectionId()?44:-1),XD(4),Qh(`disabled`,!!e.issue()),XD(3),XI(e.studentId()&&e.sectionId()?51:-1),XD(),XI(e.error()?52:-1),XD(4),Qh(`disabled`,!!e.issue())}}function Vn(n,u){if(n&1){let e=cw();Qi(0,`tr`)(1,`td`),Hw(2),Ou(),Qi(3,`td`),Hw(4),Ou(),Qi(5,`td`),Hw(6),Ou(),Qi(7,`td`),Hw(8),Ou(),Qi(9,`td`),Hw(10),Ou(),Qi(11,`td`)(12,`button`,13),rg(`click`,function(){let a=kd(e).$implicit,i=dw();return Fd(i.document(a))}),Hw(13,`Ver constancia`),Ou()()()}if(n&2){let e=u.$implicit,t=dw();XD(2),vg(e.id),XD(2),vg(t.store.student(e.studentId).name),XD(2),vg(e.year),XD(2),vg(t.sectionLabel(t.store.section(e.sectionId))),XD(2),vg(t.shortDate(e.date))}}var mn=class n{store=g(b);dialog=g(ae);snack=g(Ht);creating=Ei(!1);query=Ei(``);studentId=Ei(``);year=Ei(I[0]);sectionId=Ei(``);error=Ei(``);years=I;sectionLabel=y;shortDate=F$1;students=sC(()=>this.store.data().students.filter(u=>this.store.matches(u,this.query())));records=sC(()=>[...this.store.data().enrollments].reverse());issue=sC(()=>this.store.enrollmentIssue(this.studentId(),this.year(),this.sectionId()));seats=sC(()=>this.store.seats(this.sectionId(),this.year()));start(){this.query.set(``),this.studentId.set(``),this.year.set(I[0]),this.sectionId.set(``),this.error.set(``),this.creating.set(!0)}search(u){this.query.set(u),this.students().some(e=>e.id===this.studentId())||this.studentId.set(``)}confirm(){try{let u=this.store.enroll(this.studentId(),this.year(),this.sectionId());this.creating.set(!1),this.snack.open(`Matrícula confirmada.`,`Cerrar`,{duration:4e3}),this.document(u)}catch(u){this.error.set(u.message)}}document(u){let e=this.store.student(u.studentId),t={title:`Constancia de matrícula`,simulated:!0,fields:[[`Código`,u.id],[`Estudiante`,e.name],[`Año académico`,String(u.year)],[`Grado y sección`,y(this.store.section(u.sectionId))],[`Fecha`,F$1(u.date)]]};this.dialog.open(C,{data:t,width:`30rem`})}static ɵfac=function(e){return new(e||n)};static ɵcmp=NI({type:n,selectors:[[`ng-component`]],decls:30,vars:2,consts:[[`searchInput`,``],[`studentSelect`,``],[`yearSelect`,``],[`sectionSelect`,``],[1,`admin-heading`],[`matButton`,`filled`],[`aria-labelledby`,`enrollment-title`,1,`admin-card`],[1,`admin-card`],[`tabindex`,`0`,`aria-label`,`Listado de matrículas`,1,`admin-scroll`],[`aria-label`,`Matrículas registradas`,1,`admin-table`],[`scope`,`col`],[`matButton`,`filled`,3,`click`],[`id`,`enrollment-title`],[`matButton`,``,3,`click`],[`linear`,``,`aria-label`,`Pasos de matrícula`],[`label`,`Buscar estudiante`,3,`completed`],[1,`admin-filters`],[`appearance`,`outline`],[`matInput`,``,`placeholder`,`Nombre, DNI o código`,3,`input`,`value`],[`matNativeControl`,``,3,`change`,`value`],[`value`,``],[3,`value`],[`role`,`status`,1,`admin-note`],[`matButton`,`filled`,`matStepperNext`,``,3,`disabled`],[`label`,`Año, grado y sección`,3,`completed`],[1,`admin-actions`],[`matButton`,``,`matStepperPrevious`,``],[`label`,`Revisar y confirmar`],[1,`admin-details`],[`role`,`alert`,1,`admin-error`],[`matButton`,`filled`,3,`click`,`disabled`],[`aria-live`,`polite`,1,`admin-note`]],template:function(e,t){e&1&&(Qi(0,`header`,4)(1,`div`)(2,`h1`),Hw(3,`Matrículas`),Ou(),Qi(4,`p`),Hw(5,`Gestiona la inscripción y consulta los cupos por sección.`),Ou()(),QI(6,zn,2,0,`button`,5),Ou(),QI(7,Hn,58,13,`section`,6),Qi(8,`section`,7)(9,`h2`),Hw(10,`Matrículas registradas`),Ou(),Qi(11,`div`,8)(12,`table`,9)(13,`thead`)(14,`tr`)(15,`th`,10),Hw(16,`Código`),Ou(),Qi(17,`th`,10),Hw(18,`Estudiante`),Ou(),Qi(19,`th`,10),Hw(20,`Año`),Ou(),Qi(21,`th`,10),Hw(22,`Grado y sección`),Ou(),Qi(23,`th`,10),Hw(24,`Fecha`),Ou(),Qi(25,`th`,10),Hw(26,`Acciones`),Ou()()(),Qi(27,`tbody`),tw(28,Vn,14,5,`tr`,null,Ze),Ou()()()()),e&2&&(XD(6),XI(t.creating()?-1:6),XD(),XI(t.creating()?7:-1),XD(21),nw(t.records()))},dependencies:[xn$1,yn$1,Ot,ai,At,ns,ts,dn,Ke,Ye,pn,cn],encapsulation:2})};export{mn as Enrollments};