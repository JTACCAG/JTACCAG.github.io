import{a as ht}from"./chunk-2HXE67OV.js";import{a as dt}from"./chunk-DNBDV3QB.js";import{a as ct,b as lt,c as mt,d as pt}from"./chunk-SCDVYOFQ.js";import{a as ut,b as gt}from"./chunk-DXJIT4UK.js";import{a as ft}from"./chunk-MGSMJCFJ.js";import{a as $e}from"./chunk-WPARBOJM.js";import{a as _t}from"./chunk-NXHVCFW4.js";import{a as Ne,c as Le,d as je,e as Ve,f as He}from"./chunk-KIYVIDYI.js";import{a as bt}from"./chunk-XB6SZAKC.js";import{a as it,b as at}from"./chunk-DW5BIR3M.js";import{e as ot,f as G,g as st,i as ke}from"./chunk-XVTO5U7V.js";import{$a as w,Ab as Re,B as Ie,Ba as V,Bb as l,Bc as Ue,C as Fe,Cb as g,D as be,Dc as me,Ec as Ze,Fb as $,Gc as We,Hc as Qe,Ia as h,Ja as O,Ka as Ae,Kc as Ke,L as _e,Ma as J,N as _,Nc as Je,Ob as X,Oc as Ye,Pc as P,Q as ve,Rc as M,U as D,Ub as q,Va as C,W as Q,Wa as f,Wb as ce,Xa as b,Xb as Ce,Y as a,Yc as et,Za as Y,Zc as pe,_a as ee,ab as o,ad as tt,ba as I,bb as s,c as Be,ca as F,cb as z,cd as nt,db as oe,dd as rt,e as k,eb as se,fa as re,fb as te,ga as K,ha as ie,ja as j,jb as H,ka as E,lb as y,nb as u,oa as v,ob as A,p as W,pb as x,qb as we,ra as ae,rb as xe,rc as le,sb as R,sc as Me,ta as S,tb as N,ua as ze,vc as Xe,w as Te,wc as qe,x as T,xa as d,xb as de,xc as Ge,ya as ye,yb as L,zb as p}from"./chunk-MBVSO2PD.js";import{a as U,b as Z}from"./chunk-2NFLSA4Y.js";function vt(n){n||(n=a(ie));let i=new Be(e=>{if(n.destroyed){e.next();return}return n.onDestroy(e.next.bind(e))});return e=>e.pipe(_(i))}function yt(n,i){let t=!i?.manualCleanup?i?.injector?.get(ie)??a(ie):null,r=Tt(i?.equal),c;i?.requireSync?c=v({kind:0},{equal:r}):c=v({kind:1,value:i?.initialValue},{equal:r});let m,ne=n.subscribe({next:B=>c.set({kind:1,value:B}),error:B=>{c.set({kind:2,error:B}),m?.()},complete:()=>{m?.()}});if(i?.requireSync&&c().kind===0)throw new ve(601,!1);return m=t?.onDestroy(ne.unsubscribe.bind(ne)),X(()=>{let B=c();switch(B.kind){case 1:return B.value;case 2:throw B.error;case 0:throw new ve(601,!1)}},{equal:i?.equal})}function Tt(n=Object.is){return(i,e)=>i.kind===1&&e.kind===1&&n(i.value,e.value)}var fe=["*"],Ft=["content"],zt=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],At=["mat-drawer","mat-drawer-content","*"];function Rt(n,i){if(n&1){let e=H();o(0,"div",1),y("click",function(){I(e);let r=u();return F(r._onBackdropClicked())}),s()}if(n&2){let e=u();p("mat-drawer-shown",e._isShowingBackdrop())}}function Nt(n,i){n&1&&(o(0,"mat-drawer-content"),x(1,2),s())}var Lt=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],jt=["mat-sidenav","mat-sidenav-content","*"];function Vt(n,i){if(n&1){let e=H();o(0,"div",1),y("click",function(){I(e);let r=u();return F(r._onBackdropClicked())}),s()}if(n&2){let e=u();p("mat-drawer-shown",e._isShowingBackdrop())}}function Ht(n,i){n&1&&(o(0,"mat-sidenav-content"),x(1,2),s())}var $t=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
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
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
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
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
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
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
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
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
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
`;var Xt=new Q("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Se=new Q("MAT_DRAWER_CONTAINER"),ue=(()=>{class n extends G{_platform=a(le);_changeDetectorRef=a(q);_container=a(Ee);constructor(){let e=a(S),t=a(ot),r=a(E);super(e,t,r)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=h({type:n,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,r){t&2&&(L("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),p("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[$([{provide:G,useExisting:n}]),J],ngContentSelectors:fe,decls:1,vars:0,template:function(t,r){t&1&&(A(),x(0))},encapsulation:2,changeDetection:0})}return n})(),De=(()=>{class n{_elementRef=a(S);_focusTrapFactory=a(Ze);_focusMonitor=a(Xe);_platform=a(le);_ngZone=a(E);_renderer=a(V);_interactivityChecker=a(me);_doc=a(K);_container=a(Se,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=M(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=M(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(M(e))}_opened=v(!1);_openedVia=null;_animationStarted=new k;_animationEnd=new k;openedChange=new j(!0);_openedStream=this.openedChange.pipe(T(e=>e),W(()=>{}));openedStart=this._animationStarted.pipe(T(()=>this.opened),be(void 0));_closedStream=this.openedChange.pipe(T(e=>!e),W(()=>{}));closedStart=this._animationStarted.pipe(T(()=>!this.opened),be(void 0));_destroyed=new k;onPositionChanged=new j;_content;_modeChanged=new k;_injector=a(re);_changeDetectorRef=a(q);constructor(){this.openedChange.pipe(_(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!Qe(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),e.listen(t,"transitionend",this._handleTransitionEvent),e.listen(t,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{c(),m(),e.removeAttribute("tabindex")},c=this._renderer.listen(e,"blur",r),m=this._renderer.listen(e,"mousedown",r)})),e.focus(t)}_focusByCssSelector(e,t){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,t)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":ye(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let r=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),r}_setOpen(e,t,r){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(c=>{this.openedChange.pipe(Fe(1)).subscribe(m=>c(m?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,r=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,t)),r.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=h({type:n,selectors:[["mat-drawer"]],viewQuery:function(t,r){if(t&1&&xe(Ft,5),t&2){let c;R(c=N())&&(r._content=c.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,r){t&2&&(C("align",null)("tabIndex",r.mode!=="side"?"-1":null),L("visibility",!r._container&&!r.opened?"hidden":null),p("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:fe,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,r){t&1&&(A(),o(0,"div",1,0),x(2),s())},dependencies:[G],encapsulation:2,changeDetection:0})}return n})(),Ee=(()=>{class n{_dir=a(Ye,{optional:!0});_element=a(S);_ngZone=a(E);_changeDetectorRef=a(q);_animationDisabled=pe();_transitionsEnabled=!1;_allDrawers;_drawers=new ze;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=M(e)}_autosize=a(Xt);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:M(e)}_backdropOverride=null;backdropClick=new j;_start=null;_end=null;_left=null;_right=null;_destroyed=new k;_doCheckSubject=new k;_contentMargins={left:null,right:null};_contentMarginChanges=new k;get scrollable(){return this._userContent||this._content}_injector=a(re);constructor(){let e=a(le),t=a(st);this._dir?.change.pipe(_(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(_(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(_e(this._allDrawers),_(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(_e(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Ie(10),_(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();e+=r,t-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();t+=r,e-=r}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(_(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(_(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(_(this._drawers.changes)).subscribe(()=>{ye({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(_(Te(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,r="mat-drawer-container-has-open";e?t.add(r):t.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=h({type:n,selectors:[["mat-drawer-container"]],contentQueries:function(t,r,c){if(t&1&&we(c,ue,5)(c,De,5),t&2){let m;R(m=N())&&(r._content=m.first),R(m=N())&&(r._allDrawers=m)}},viewQuery:function(t,r){if(t&1&&xe(ue,5),t&2){let c;R(c=N())&&(r._userContent=c.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,r){t&2&&p("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[$([{provide:Se,useExisting:n}])],ngContentSelectors:At,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,r){t&1&&(A(zt),f(0,Rt,1,2,"div",0),x(1),x(2,1),f(3,Nt,2,0,"mat-drawer-content")),t&2&&(b(r.hasBackdrop?0:-1),d(3),b(r._content?-1:3))},dependencies:[ue],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
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
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
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
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
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
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
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
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
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
`],encapsulation:2,changeDetection:0})}return n})(),ge=(()=>{class n extends ue{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ae(n)))(r||n)}})();static \u0275cmp=h({type:n,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[$([{provide:G,useExisting:n}]),J],ngContentSelectors:fe,decls:1,vars:0,template:function(t,r){t&1&&(A(),x(0))},encapsulation:2,changeDetection:0})}return n})(),Oe=(()=>{class n extends De{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=M(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=Me(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=Me(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=ae(n)))(r||n)}})();static \u0275cmp=h({type:n,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(t,r){t&2&&(C("tabIndex",r.mode!=="side"?"-1":null)("align",null),L("top",r.fixedInViewport?r.fixedTopGap:null,"px")("bottom",r.fixedInViewport?r.fixedBottomGap:null,"px"),p("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side")("mat-sidenav-fixed",r.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[$([{provide:De,useExisting:n}]),J],ngContentSelectors:fe,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,r){t&1&&(A(),o(0,"div",1,0),x(2),s())},dependencies:[G],encapsulation:2,changeDetection:0})}return n})(),wt=(()=>{class n extends Ee{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=ae(n)))(r||n)}})();static \u0275cmp=h({type:n,selectors:[["mat-sidenav-container"]],contentQueries:function(t,r,c){if(t&1&&we(c,ge,5)(c,Oe,5),t&2){let m;R(m=N())&&(r._content=m.first),R(m=N())&&(r._allDrawers=m)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(t,r){t&2&&p("mat-drawer-container-explicit-backdrop",r._backdropOverride)},exportAs:["matSidenavContainer"],features:[$([{provide:Se,useExisting:n},{provide:Ee,useExisting:n}]),J],ngContentSelectors:jt,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,r){t&1&&(A(Lt),f(0,Vt,1,2,"div",0),x(1),x(2,1),f(3,Ht,2,0,"mat-sidenav-content")),t&2&&(b(r.hasBackdrop?0:-1),d(3),b(r._content?-1:3))},dependencies:[ge],styles:[$t],encapsulation:2,changeDetection:0})}return n})(),xt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=O({type:n});static \u0275inj=D({imports:[ke,P,ke]})}return n})();function Gt(n,i){n&1&&te(0,"div",2)}var Ut=new Q("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var Mt=(()=>{class n{_elementRef=a(S);_ngZone=a(E);_changeDetectorRef=a(q);_renderer=a(V);_cleanupTransitionEnd;constructor(){let e=et(),t=a(Ut,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),t&&(t.color&&(this.color=this._defaultColor=t.color),this.mode=t.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=Ct(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=Ct(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new j;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=h({type:n,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(t,r){t&2&&(C("aria-valuenow",r._isIndeterminate()?null:r.value)("mode",r.mode),Re("mat-"+r.color),p("_mat-animation-noopable",r._isNoopAnimation)("mdc-linear-progress--animation-ready",!r._isNoopAnimation)("mdc-linear-progress--indeterminate",r._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",Ce],bufferValue:[2,"bufferValue","bufferValue",Ce],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(t,r){t&1&&(oe(0,"div",0),te(1,"div",1),f(2,Gt,1,0,"div",2),se(),oe(3,"div",3),te(4,"span",4),se(),oe(5,"div",5),te(6,"span",4),se()),t&2&&(d(),L("flex-basis",r._getBufferBarFlexBasis()),d(),b(r.mode==="buffer"?2:-1),d(),L("transform",r._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function Ct(n,i=0,e=100){return Math.max(i,Math.min(e,n))}var kt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=O({type:n});static \u0275inj=D({imports:[P]})}return n})();var Dt="mat-badge-content",Wt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=h({type:n,selectors:[["ng-component"]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-badge {
  position: relative;
}
.mat-badge.mat-badge {
  overflow: visible;
}

.mat-badge-content {
  position: absolute;
  text-align: center;
  display: inline-block;
  transition: transform 200ms ease-in-out;
  transform: scale(0.6);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  pointer-events: none;
  background-color: var(--mat-badge-background-color, var(--mat-sys-error));
  color: var(--mat-badge-text-color, var(--mat-sys-on-error));
  font-family: var(--mat-badge-text-font, var(--mat-sys-label-small-font));
  font-weight: var(--mat-badge-text-weight, var(--mat-sys-label-small-weight));
  border-radius: var(--mat-badge-container-shape, var(--mat-sys-corner-full));
}
.mat-badge-above .mat-badge-content {
  bottom: 100%;
}
.mat-badge-below .mat-badge-content {
  top: 100%;
}
.mat-badge-before .mat-badge-content {
  right: 100%;
}
[dir=rtl] .mat-badge-before .mat-badge-content {
  right: auto;
  left: 100%;
}
.mat-badge-after .mat-badge-content {
  left: 100%;
}
[dir=rtl] .mat-badge-after .mat-badge-content {
  left: auto;
  right: 100%;
}
@media (forced-colors: active) {
  .mat-badge-content {
    outline: solid 1px;
    border-radius: 0;
  }
}

.mat-badge-disabled .mat-badge-content {
  background-color: var(--mat-badge-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-error) 38%, transparent));
  color: var(--mat-badge-disabled-state-text-color, var(--mat-sys-on-error));
}

.mat-badge-hidden .mat-badge-content {
  display: none;
}

.ng-animate-disabled .mat-badge-content,
.mat-badge-content._mat-animation-noopable {
  transition: none;
}

.mat-badge-content.mat-badge-active {
  transform: none;
}

.mat-badge-small .mat-badge-content {
  width: var(--mat-badge-legacy-small-size-container-size, unset);
  height: var(--mat-badge-legacy-small-size-container-size, unset);
  min-width: var(--mat-badge-small-size-container-size, 6px);
  min-height: var(--mat-badge-small-size-container-size, 6px);
  line-height: var(--mat-badge-small-size-line-height, 6px);
  padding: var(--mat-badge-small-size-container-padding, 0);
  font-size: var(--mat-badge-small-size-text-size, 0);
  margin: var(--mat-badge-small-size-container-offset, -6px 0);
}
.mat-badge-small.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-small-size-container-overlap-offset, -6px);
}

.mat-badge-medium .mat-badge-content {
  width: var(--mat-badge-legacy-container-size, unset);
  height: var(--mat-badge-legacy-container-size, unset);
  min-width: var(--mat-badge-container-size, 16px);
  min-height: var(--mat-badge-container-size, 16px);
  line-height: var(--mat-badge-line-height, 16px);
  padding: var(--mat-badge-container-padding, 0 4px);
  font-size: var(--mat-badge-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-container-offset, -12px 0);
}
.mat-badge-medium.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-container-overlap-offset, -12px);
}

.mat-badge-large .mat-badge-content {
  width: var(--mat-badge-legacy-large-size-container-size, unset);
  height: var(--mat-badge-legacy-large-size-container-size, unset);
  min-width: var(--mat-badge-large-size-container-size, 16px);
  min-height: var(--mat-badge-large-size-container-size, 16px);
  line-height: var(--mat-badge-large-size-line-height, 16px);
  padding: var(--mat-badge-large-size-container-padding, 0 4px);
  font-size: var(--mat-badge-large-size-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-large-size-container-offset, -12px 0);
}
.mat-badge-large.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-large-size-container-overlap-offset, -12px);
}
`],encapsulation:2,changeDetection:0})}return n})(),Et=(()=>{class n{_ngZone=a(E);_elementRef=a(S);_ariaDescriber=a(Je);_renderer=a(V);_animationsDisabled=pe();_idGenerator=a(Ke);get color(){return this._color}set color(e){this._setColor(e),this._color=e}_color="primary";overlap=!0;disabled=!1;position="above after";get content(){return this._content}set content(e){this._updateRenderedContent(e)}_content;get description(){return this._description}set description(e){this._updateDescription(e)}_description;size="medium";hidden=!1;_badgeElement;_inlineBadgeDescription;_isInitialized=!1;_interactivityChecker=a(me);_document=a(K);constructor(){let e=a(qe);e.load(Wt),e.load(Ge)}isAbove(){return this.position.indexOf("below")===-1}isAfter(){return this.position.indexOf("before")===-1}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngAfterViewInit(){}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){let e=this._renderer.createElement("span"),t="mat-badge-active";return e.setAttribute("id",this._idGenerator.getId("mat-badge-content-")),e.setAttribute("aria-hidden","true"),e.classList.add(Dt),this._animationsDisabled&&e.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(e),typeof requestAnimationFrame=="function"&&!this._animationsDisabled?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{e.classList.add(t)})}):e.classList.add(t),e}_updateRenderedContent(e){let t=`${e??""}`.trim();this._isInitialized&&t&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=t),this._content=t}_updateDescription(e){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!e||this._isHostInteractive())&&this._removeInlineDescription(),this._description=e,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,e):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(e){let t=this._elementRef.nativeElement.classList;t.remove(`mat-badge-${this._color}`),e&&t.add(`mat-badge-${e}`)}_clearExistingBadges(){let e=this._elementRef.nativeElement.querySelectorAll(`:scope > .${Dt}`);for(let t of Array.from(e))t!==this._badgeElement&&t.remove()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=Ae({type:n,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(t,r){t&2&&p("mat-badge-overlap",r.overlap)("mat-badge-above",r.isAbove())("mat-badge-below",!r.isAbove())("mat-badge-before",!r.isAfter())("mat-badge-after",r.isAfter())("mat-badge-small",r.size==="small")("mat-badge-medium",r.size==="medium")("mat-badge-large",r.size==="large")("mat-badge-hidden",r.hidden||!r.content)("mat-badge-disabled",r.disabled)},inputs:{color:[0,"matBadgeColor","color"],overlap:[2,"matBadgeOverlap","overlap",ce],disabled:[2,"matBadgeDisabled","disabled",ce],position:[0,"matBadgePosition","position"],content:[0,"matBadge","content"],description:[0,"matBadgeDescription","description"],size:[0,"matBadgeSize","size"],hidden:[2,"matBadgeHidden","hidden",ce]}})}return n})(),St=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=O({type:n});static \u0275inj=D({imports:[We,P]})}return n})();var Ot=(()=>{class n{get vertical(){return this._vertical}set vertical(e){this._vertical=M(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=M(e)}_inset=!1;static \u0275fac=function(t){return new(t||n)};static \u0275cmp=h({type:n,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(t,r){t&2&&(C("aria-orientation",r.vertical?"vertical":"horizontal"),p("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(t,r){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2,changeDetection:0})}return n})(),Pt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=O({type:n});static \u0275inj=D({imports:[P]})}return n})();var Pe=[{title:"Principal",items:[{label:"Dashboard",icon:"space_dashboard",route:"/dashboard"},{label:"Usuarios",icon:"group",route:"/users"}]},{title:"An\xE1lisis",items:[{label:"Reportes",icon:"assessment",route:"/reports"}]},{title:"Sistema",items:[{label:"Configuraci\xF3n",icon:"settings",route:"/settings"}]}];var Jt=(n,i)=>i.title,Yt=(n,i)=>i.url,en=(n,i)=>i.text,tn=(n,i)=>i.route;function nn(n,i){if(n&1&&(o(0,"div",7)(1,"strong"),l(2),s(),o(3,"small"),l(4,"Panel corporativo"),s()()),n&2){let e=u();d(2),g(e.appName)}}function rn(n,i){n&1&&z(0,"mat-divider",35)}function an(n,i){if(n&1){let e=H();o(0,"button",40),y("click",function(){I(e);let r=u().$implicit,c=u();return F(c.toggleSection(r.title))}),o(1,"span"),l(2),s(),o(3,"mat-icon",41),l(4,"expand_more"),s()()}if(n&2){let e=u().$implicit,t=u();p("open",t.isExpanded(e.title))("has-active",t.sectionActive(e)),C("aria-expanded",t.isExpanded(e.title))("aria-controls","nav-"+e.title),d(2),g(e.title)}}function on(n,i){if(n&1&&(o(0,"span"),l(1),s()),n&2){let e=u().$implicit;d(),g(e.label)}}function sn(n,i){if(n&1&&(o(0,"a",39)(1,"mat-icon"),l(2),s(),f(3,on,2,1,"span"),s()),n&2){let e=i.$implicit,t=u(2);w("routerLink",e.route)("matTooltip",e.label)("matTooltipDisabled",!t.mini()),d(2),g(e.icon),d(),b(t.mini()?-1:3)}}function dn(n,i){if(n&1&&(f(0,rn,1,0,"mat-divider",35)(1,an,5,7,"button",36),o(2,"div",37)(3,"div",38),Y(4,sn,4,5,"a",39,tn),s()()),n&2){let e=i.$implicit,t=u();b(t.mini()?0:1),d(2),p("open",t.mini()||t.isExpanded(e.title)),w("id","nav-"+e.title),d(),C("inert",t.mini()||t.isExpanded(e.title)?null:""),d(),ee(e.items)}}function cn(n,i){n&1&&(o(0,"small",11),l(1,"v1.0.0"),s())}function ln(n,i){if(n&1&&(o(0,"span",43),l(1),s()),n&2){let e=u().$implicit;d(),g(e.label)}}function mn(n,i){if(n&1&&(o(0,"a",44),l(1),s()),n&2){let e=u().$implicit;w("routerLink",e.url),d(),g(e.label)}}function pn(n,i){if(n&1&&(o(0,"mat-icon",42),l(1,"chevron_right"),s(),f(2,ln,2,1,"span",43)(3,mn,2,2,"a",44)),n&2){let e=i.$index,t=i.$count;d(2),b(e===t-1?2:3)}}function un(n,i){if(n&1&&(o(0,"button",45)(1,"mat-icon"),l(2),s(),o(3,"span",46)(4,"span"),l(5),s(),o(6,"small",11),l(7),s()()()),n&2){let e=i.$implicit;p("unread",!e.read),d(2),g(e.icon),d(3),g(e.text),d(2),g(e.time)}}function gn(n,i){if(n&1&&(o(0,"span",47)(1,"strong"),l(2),s(),o(3,"small",11),l(4),s()(),o(5,"mat-icon"),l(6,"expand_more"),s()),n&2){let e,t,r=u();d(2),g((e=r.auth.user())==null?null:e.name),d(2),g(r.roleLabels[((t=r.auth.user())==null?null:t.role)??"user"])}}function hn(n,i){n&1&&z(0,"mat-progress-bar",33)}var Bt=class n{router=a(je);auth=a($e);loading=a(ht);theme=a(ft);appName=dt.appName;sections=Pe;roleLabels=bt;expanded=v(Object.fromEntries(Pe.map(i=>[i.title,!0])));currentUrl=v(this.router.url);isHandset=yt(a(Ue).observe("(max-width: 959px)").pipe(W(i=>i.matches)),{initialValue:!1});collapsed=v(!1);mobileOpen=v(!1);mini=X(()=>this.collapsed()&&!this.isHandset());userInitials=X(()=>_t(this.auth.user()?.name));breadcrumbs=v([]);notifications=v([{icon:"person_add",text:"Nuevo usuario registrado: Luc\xEDa Torres",time:"Hace 5 min",read:!1},{icon:"receipt_long",text:"Reporte mensual de ventas disponible",time:"Hace 1 h",read:!1},{icon:"security",text:"Contrase\xF1a actualizada correctamente",time:"Ayer",read:!0}]);unread=X(()=>this.notifications().filter(i=>!i.read).length);constructor(){this.breadcrumbs.set(this.buildCrumbs()),this.openActiveSection(),this.router.events.pipe(T(i=>i instanceof Ne),vt()).subscribe(()=>{this.currentUrl.set(this.router.url),this.breadcrumbs.set(this.buildCrumbs()),this.openActiveSection(),this.mobileOpen.set(!1)})}isExpanded(i){return this.expanded()[i]!==!1}toggleSection(i){this.expanded.update(e=>Z(U({},e),{[i]:!e[i]}))}sectionActive(i){let e=this.currentUrl().split("?")[0].split("#")[0];return i.items.some(t=>e===t.route||e.startsWith(`${t.route}/`))}toggleMenu(){this.isHandset()?this.mobileOpen.update(i=>!i):this.collapsed.update(i=>!i)}search(i){let e=i.trim();e&&this.router.navigate(["/users"],{queryParams:{q:e}})}markAllRead(){this.notifications.update(i=>i.map(e=>Z(U({},e),{read:!0})))}openActiveSection(){let i=this.router.url.split("?")[0].split("#")[0],e=this.sections.find(t=>t.items.some(r=>i===r.route||i.startsWith(`${r.route}/`)));!e||this.expanded()[e.title]||this.expanded.update(t=>Z(U({},t),{[e.title]:!0}))}buildCrumbs(){let i=[],e="",t=this.router.routerState.snapshot.root;for(;t;){let r=t.url.map(c=>c.path).join("/");r&&(e+=`/${r}`),t.title&&r&&!i.some(c=>c.label===t.title)&&i.push({label:t.title,url:e}),t=t.firstChild}return i}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=h({type:n,selectors:[["app-main-layout"]],decls:73,vars:22,consts:[["q",""],["notifMenu","matMenu"],["userMenu","matMenu"],["autosize","",1,"shell"],[1,"sidenav","no-print",3,"closedStart","mode","opened"],[1,"brand"],[1,"logo"],[1,"brand-text"],[1,"nav"],[1,"sidenav-footer"],["mat-icon-button","","matTooltipPosition","right",1,"collapse-btn",3,"click","matTooltip"],[1,"text-muted"],[1,"main"],[1,"topbar","no-print"],["mat-icon-button","","aria-label","Men\xFA","matTooltip","Men\xFA",3,"click"],["aria-label","Ruta de navegaci\xF3n",1,"breadcrumbs"],["routerLink","/dashboard","aria-label","Inicio"],[1,"spacer"],[1,"search"],["type","search","placeholder","Buscar usuarios...",3,"keyup.enter"],["mat-icon-button","",3,"click","matTooltip"],["mat-icon-button","","matTooltip","Notificaciones",3,"matMenuTriggerFor"],["matBadgeSize","small",3,"matBadge","matBadgeHidden"],["xPosition","before",1,"notif-menu"],[1,"menu-header"],["mat-button","",3,"click","disabled"],["mat-menu-item","",1,"notif",3,"unread"],[1,"user-btn",3,"matMenuTriggerFor"],[1,"avatar"],["xPosition","before"],[1,"menu-header","column"],["mat-menu-item","","routerLink","/settings"],["mat-menu-item","",3,"click"],["mode","indeterminate",1,"loader"],[1,"content"],[1,"nav-divider"],["type","button",1,"nav-section",3,"open","has-active"],[1,"nav-group",3,"id"],[1,"nav-group-inner"],["routerLinkActive","active","matTooltipPosition","right",1,"nav-item",3,"routerLink","matTooltip","matTooltipDisabled"],["type","button",1,"nav-section",3,"click"],[1,"chevron"],[1,"sep"],[1,"current"],[3,"routerLink"],["mat-menu-item","",1,"notif"],[1,"notif-body"],[1,"user-info"]],template:function(e,t){if(e&1){let r=H();o(0,"mat-sidenav-container",3)(1,"mat-sidenav",4),y("closedStart",function(){return t.mobileOpen.set(!1)}),o(2,"div",5)(3,"div",6)(4,"mat-icon"),l(5,"hub"),s()(),f(6,nn,5,1,"div",7),s(),o(7,"nav",8),Y(8,dn,6,5,null,null,Jt),s(),o(10,"div",9)(11,"button",10),y("click",function(){return t.toggleMenu()}),o(12,"mat-icon"),l(13),s()(),f(14,cn,2,0,"small",11),s()(),o(15,"mat-sidenav-content",12)(16,"header",13)(17,"button",14),y("click",function(){return t.toggleMenu()}),o(18,"mat-icon"),l(19,"menu"),s()(),o(20,"nav",15)(21,"a",16)(22,"mat-icon"),l(23,"home"),s()(),Y(24,pn,4,1,null,null,Yt),s(),z(26,"span",17),o(27,"label",18)(28,"mat-icon"),l(29,"search"),s(),o(30,"input",19,0),y("keyup.enter",function(){I(r);let m=de(31);return t.search(m.value),F(m.value="")}),s()(),o(32,"button",20),y("click",function(){return t.theme.toggle()}),o(33,"mat-icon"),l(34),s()(),o(35,"button",21)(36,"mat-icon",22),l(37,"notifications"),s()(),o(38,"mat-menu",23,1)(40,"div",24)(41,"strong"),l(42,"Notificaciones"),s(),o(43,"button",25),y("click",function(m){return I(r),m.stopPropagation(),F(t.markAllRead())}),l(44," Marcar le\xEDdas "),s()(),z(45,"mat-divider"),Y(46,un,8,5,"button",26,en),s(),o(48,"button",27)(49,"span",28),l(50),s(),f(51,gn,7,2),s(),o(52,"mat-menu",29,2)(54,"div",30)(55,"strong"),l(56),s(),o(57,"small",11),l(58),s()(),z(59,"mat-divider"),o(60,"a",31)(61,"mat-icon"),l(62,"manage_accounts"),s(),o(63,"span"),l(64,"Mi perfil y preferencias"),s()(),o(65,"button",32),y("click",function(){return t.auth.logout()}),o(66,"mat-icon"),l(67,"logout"),s(),o(68,"span"),l(69,"Cerrar sesi\xF3n"),s()()()(),f(70,hn,1,0,"mat-progress-bar",33),o(71,"main",34),z(72,"router-outlet"),s()()()}if(e&2){let r,c,m=de(39),ne=de(53);d(),p("mini",t.mini()),w("mode",t.isHandset()?"over":"side")("opened",t.isHandset()?t.mobileOpen():!0),d(5),b(t.mini()?-1:6),d(2),ee(t.sections),d(3),w("matTooltip",t.mini()?"Expandir men\xFA":"Contraer men\xFA"),d(2),g(t.mini()?"keyboard_double_arrow_right":"keyboard_double_arrow_left"),d(),b(t.mini()?-1:14),d(10),ee(t.breadcrumbs()),d(8),w("matTooltip",t.theme.dark()?"Modo claro":"Modo oscuro"),d(2),g(t.theme.dark()?"light_mode":"dark_mode"),d(),w("matMenuTriggerFor",m),d(),w("matBadge",t.unread())("matBadgeHidden",!t.unread()),d(7),w("disabled",!t.unread()),d(3),ee(t.notifications()),d(2),w("matMenuTriggerFor",ne),d(2),g(t.userInitials()),d(),b(t.isHandset()?-1:51),d(5),g((r=t.auth.user())==null?null:r.name),d(2),g((c=t.auth.user())==null?null:c.email),d(12),b(t.loading.isLoading()?70:-1),d(),p("full",t.mini())}},dependencies:[Le,Ve,He,xt,Oe,wt,ge,at,it,rt,nt,tt,pt,lt,ct,mt,kt,Mt,gt,ut,St,Et,Pt,Ot],styles:["[_nghost-%COMP%]{display:block;height:100%}.shell[_ngcontent-%COMP%]{height:100%;background:var(--mat-sys-surface-container-lowest)}.sidenav[_ngcontent-%COMP%]{width:260px;display:flex;flex-direction:column;border:none;border-right:1px solid var(--mat-sys-outline-variant);border-radius:0;background:var(--mat-sys-surface-container-low);transition:width .2s ease}.sidenav.mini[_ngcontent-%COMP%]{width:76px}.sidenav[_ngcontent-%COMP%]     .mat-drawer-inner-container{display:flex;flex-direction:column}.brand[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;height:64px;padding:0 18px;flex:none}.logo[_ngcontent-%COMP%]{display:grid;place-items:center;width:40px;height:40px;flex:none;border-radius:12px;background:var(--mat-sys-primary);color:var(--mat-sys-on-primary)}.brand-text[_ngcontent-%COMP%]{display:flex;flex-direction:column;white-space:nowrap;overflow:hidden}.brand-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font:var(--mat-sys-title-small)}.brand-text[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant)}.nav[_ngcontent-%COMP%]{flex:1;overflow-y:auto;padding:8px 12px}.nav-section[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%;margin:4px 0 0;padding:12px 8px 6px 12px;border:none;border-radius:8px;background:transparent;cursor:pointer;text-align:left;font:var(--mat-sys-label-small);text-transform:uppercase;letter-spacing:.08em;color:var(--mat-sys-on-surface-variant)}.nav-section[_ngcontent-%COMP%]:hover{color:var(--mat-sys-on-surface)}.nav-section.has-active[_ngcontent-%COMP%]{color:var(--mat-sys-primary)}.nav-section[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;transition:transform .2s ease;transform:rotate(-90deg)}.nav-section.open[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%]{transform:rotate(0)}.nav-group[_ngcontent-%COMP%]{display:grid;grid-template-rows:0fr;transition:grid-template-rows .2s ease}.nav-group.open[_ngcontent-%COMP%]{grid-template-rows:1fr}.nav-group-inner[_ngcontent-%COMP%]{overflow:hidden}.nav-divider[_ngcontent-%COMP%]{margin:10px 4px}.nav-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:14px;height:44px;padding:0 14px;margin:2px 0;border-radius:12px;color:var(--mat-sys-on-surface-variant);text-decoration:none;font:var(--mat-sys-label-large);white-space:nowrap;transition:background .15s}.nav-item[_ngcontent-%COMP%]:hover{background:var(--mat-sys-surface-container-highest);color:var(--mat-sys-on-surface)}.nav-item.active[_ngcontent-%COMP%]{background:var(--mat-sys-secondary-container);color:var(--mat-sys-on-secondary-container)}.nav-item.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--mat-sys-primary)}.mini[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{justify-content:center;padding:0}.sidenav-footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:8px 14px;border-top:1px solid var(--mat-sys-outline-variant);flex:none}.mini[_ngcontent-%COMP%]   .sidenav-footer[_ngcontent-%COMP%]{justify-content:center}.main[_ngcontent-%COMP%]{display:flex;flex-direction:column}.topbar[_ngcontent-%COMP%]{position:sticky;top:0;z-index:3;display:flex;align-items:center;gap:4px;height:64px;padding:0 12px;background:color-mix(in srgb,var(--mat-sys-surface-container-lowest) 85%,transparent);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);border-bottom:1px solid var(--mat-sys-outline-variant)}.breadcrumbs[_ngcontent-%COMP%]{display:flex;align-items:center;gap:2px;min-width:0;margin-left:4px;font:var(--mat-sys-body-medium)}.breadcrumbs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-flex;color:var(--mat-sys-on-surface-variant);text-decoration:none}.breadcrumbs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--mat-sys-primary)}.breadcrumbs[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}.breadcrumbs[_ngcontent-%COMP%]   .sep[_ngcontent-%COMP%]{color:var(--mat-sys-outline)}.breadcrumbs[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]{font-weight:500;white-space:nowrap}.spacer[_ngcontent-%COMP%]{flex:1}.search[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;height:40px;width:260px;padding:0 12px;margin-right:8px;border-radius:999px;background:var(--mat-sys-surface-container-high);color:var(--mat-sys-on-surface-variant)}.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex:1;min-width:0;border:none;outline:none;background:transparent;color:var(--mat-sys-on-surface);font:var(--mat-sys-body-medium)}.search[_ngcontent-%COMP%]:focus-within{outline:2px solid var(--mat-sys-primary)}.user-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin-left:6px;padding:4px 8px 4px 4px;border:none;border-radius:999px;background:transparent;color:inherit;cursor:pointer;text-align:left}.user-btn[_ngcontent-%COMP%]:hover{background:var(--mat-sys-surface-container-high)}.user-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;line-height:1.2}.user-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font:var(--mat-sys-label-large)}.menu-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:8px 16px}.menu-header.column[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;gap:2px}.notif[_ngcontent-%COMP%]{height:auto;min-height:56px;padding-top:8px;padding-bottom:8px}.notif.unread[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--mat-sys-primary) 8%,transparent)}.notif-body[_ngcontent-%COMP%]{display:flex;flex-direction:column;white-space:normal;max-width:260px}.loader[_ngcontent-%COMP%]{position:sticky;top:64px;z-index:3}.content[_ngcontent-%COMP%]{width:100%;max-width:1440px;margin:0 auto;padding:28px 32px}.content.full[_ngcontent-%COMP%]{max-width:none}@media(max-width:959px){.search[_ngcontent-%COMP%]{display:none}.content[_ngcontent-%COMP%]{padding:20px 16px}}@media(max-width:599px){.breadcrumbs[_ngcontent-%COMP%]{display:none}}"]})};export{Bt as MainLayout};
