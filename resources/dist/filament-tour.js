var Y={};function j(e={}){Y={animate:!0,allowClose:!0,overlayOpacity:.7,smoothScroll:!1,disableActiveInteraction:!1,showProgress:!1,stagePadding:10,stageRadius:5,popoverOffset:10,showButtons:["next","previous","close"],disableButtons:[],overlayColor:"#000",...e}}function c(e){return e?Y[e]:Y}function O(e,t,n,r){return(e/=r/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}function U(e){let t='a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])';return e.flatMap(n=>{let r=n.matches(t),i=Array.from(n.querySelectorAll(t));return[...r?[n]:[],...i]}).filter(n=>getComputedStyle(n).pointerEvents!=="none"&&ge(n))}function ee(e){if(!e||he(e))return;let t=c("smoothScroll");e.scrollIntoView({behavior:!t||me(e)?"auto":"smooth",inline:"center",block:"center"})}function me(e){if(!e||!e.parentElement)return;let t=e.parentElement;return t.scrollHeight>t.clientHeight}function he(e){let t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function ge(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)}var R={};function x(e,t){R[e]=t}function f(e){return e?R[e]:R}function X(){R={}}var F={};function W(e,t){F[e]=t}function B(e){var t;(t=F[e])==null||t.call(F)}function we(){F={}}function ye(e,t,n,r){let i=f("__activeStagePosition"),d=i||n.getBoundingClientRect(),l=r.getBoundingClientRect(),p=O(e,d.x,l.x-d.x,t),o=O(e,d.y,l.y-d.y,t),a=O(e,d.width,l.width-d.width,t),s=O(e,d.height,l.height-d.height,t);i={x:p,y:o,width:a,height:s},ne(i),x("__activeStagePosition",i)}function te(e){if(!e)return;let t=e.getBoundingClientRect(),n={x:t.x,y:t.y,width:t.width,height:t.height};x("__activeStagePosition",n),ne(n)}function be(){let e=f("__activeStagePosition"),t=f("__overlaySvg");if(!e)return;if(!t){console.warn("No stage svg found.");return}let n=window.innerWidth,r=window.innerHeight;t.setAttribute("viewBox",`0 0 ${n} ${r}`)}function xe(e){let t=Ce(e);document.body.appendChild(t),re(t,n=>{n.target.tagName==="path"&&B("overlayClick")}),x("__overlaySvg",t)}function ne(e){let t=f("__overlaySvg");if(!t){xe(e);return}let n=t.firstElementChild;if(n?.tagName!=="path")throw new Error("no path element found in stage svg");n.setAttribute("d",ie(e))}function Ce(e){let t=window.innerWidth,n=window.innerHeight,r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.classList.add("driver-overlay","driver-overlay-animated"),r.setAttribute("viewBox",`0 0 ${t} ${n}`),r.setAttribute("xmlSpace","preserve"),r.setAttribute("xmlnsXlink","http://www.w3.org/1999/xlink"),r.setAttribute("version","1.1"),r.setAttribute("preserveAspectRatio","xMinYMin slice"),r.style.fillRule="evenodd",r.style.clipRule="evenodd",r.style.strokeLinejoin="round",r.style.strokeMiterlimit="2",r.style.zIndex="10000",r.style.position="fixed",r.style.top="0",r.style.left="0",r.style.width="100%",r.style.height="100%";let i=document.createElementNS("http://www.w3.org/2000/svg","path");return i.setAttribute("d",ie(e)),i.style.fill=c("overlayColor")||"rgb(0,0,0)",i.style.opacity=`${c("overlayOpacity")}`,i.style.pointerEvents="auto",i.style.cursor="auto",r.appendChild(i),r}function ie(e){let t=window.innerWidth,n=window.innerHeight,r=c("stagePadding")||0,i=c("stageRadius")||0,d=e.width+r*2,l=e.height+r*2,p=Math.min(i,d/2,l/2),o=Math.floor(Math.max(p,0)),a=e.x-r+o,s=e.y-r,u=d-o*2,v=l-o*2;return`M${t},0L0,0L0,${n}L${t},${n}L${t},0Z
    M${a},${s} h${u} a${o},${o} 0 0 1 ${o},${o} v${v} a${o},${o} 0 0 1 -${o},${o} h-${u} a${o},${o} 0 0 1 -${o},-${o} v-${v} a${o},${o} 0 0 1 ${o},-${o} z`}function Se(){let e=f("__overlaySvg");e&&e.remove()}function Le(){let e=document.getElementById("driver-dummy-element");if(e)return e;let t=document.createElement("div");return t.id="driver-dummy-element",t.style.width="0",t.style.height="0",t.style.pointerEvents="none",t.style.opacity="0",t.style.position="fixed",t.style.top="50%",t.style.left="50%",document.body.appendChild(t),t}function V(e){let{element:t}=e,n=typeof t=="string"?document.querySelector(t):t;n||(n=Le()),_e(n,e)}function ke(){let e=f("__activeElement"),t=f("__activeStep");e&&(te(e),be(),le(e,t))}function _e(e,t){let n=Date.now(),r=f("__activeStep"),i=f("__activeElement")||e,d=!i||i===e,l=e.id==="driver-dummy-element",p=i.id==="driver-dummy-element",o=c("animate"),a=t.onHighlightStarted||c("onHighlightStarted"),s=t?.onHighlighted||c("onHighlighted"),u=r?.onDeselected||c("onDeselected"),v=c(),m=f();!d&&u&&u(p?void 0:i,r,{config:v,state:m}),a&&a(l?void 0:e,t,{config:v,state:m});let w=!d&&o,g=!1;$e(),x("previousStep",r),x("previousElement",i),x("activeStep",t),x("activeElement",e);let h=()=>{if(f("__transitionCallback")!==h)return;let y=Date.now()-n,L=400-y<=400/2;t.popover&&L&&!g&&w&&(Z(e,t),g=!0),c("animate")&&y<400?ye(y,400,i,e):(te(e),s&&s(l?void 0:e,t,{config:c(),state:f()}),x("__transitionCallback",void 0),x("__previousStep",r),x("__previousElement",i),x("__activeStep",t),x("__activeElement",e)),window.requestAnimationFrame(h)};x("__transitionCallback",h),window.requestAnimationFrame(h),ee(e),!w&&t.popover&&Z(e,t),i.classList.remove("driver-active-element","driver-no-interaction"),i.removeAttribute("aria-haspopup"),i.removeAttribute("aria-expanded"),i.removeAttribute("aria-controls"),c("disableActiveInteraction")&&e.classList.add("driver-no-interaction"),e.classList.add("driver-active-element"),e.setAttribute("aria-haspopup","dialog"),e.setAttribute("aria-expanded","true"),e.setAttribute("aria-controls","driver-popover-content")}function Ee(){var e;(e=document.getElementById("driver-dummy-element"))==null||e.remove(),document.querySelectorAll(".driver-active-element").forEach(t=>{t.classList.remove("driver-active-element","driver-no-interaction"),t.removeAttribute("aria-haspopup"),t.removeAttribute("aria-expanded"),t.removeAttribute("aria-controls")})}function $(){let e=f("__resizeTimeout");e&&window.cancelAnimationFrame(e),x("__resizeTimeout",window.requestAnimationFrame(ke))}function Pe(e){var t;if(!f("isInitialized")||!(e.key==="Tab"||e.keyCode===9))return;let n=f("__activeElement"),r=(t=f("popover"))==null?void 0:t.wrapper,i=U([...r?[r]:[],...n?[n]:[]]),d=i[0],l=i[i.length-1];if(e.preventDefault(),e.shiftKey){let p=i[i.indexOf(document.activeElement)-1]||l;p?.focus()}else{let p=i[i.indexOf(document.activeElement)+1]||d;p?.focus()}}function oe(e){var t;((t=c("allowKeyboardControl"))==null||t)&&(e.key==="Escape"?B("escapePress"):e.key==="ArrowRight"?B("arrowRightPress"):e.key==="ArrowLeft"&&B("arrowLeftPress"))}function re(e,t,n){let r=(i,d)=>{let l=i.target;e.contains(l)&&((!n||n(l))&&(i.preventDefault(),i.stopPropagation(),i.stopImmediatePropagation()),d?.(i))};document.addEventListener("pointerdown",r,!0),document.addEventListener("mousedown",r,!0),document.addEventListener("pointerup",r,!0),document.addEventListener("mouseup",r,!0),document.addEventListener("click",i=>{r(i,t)},!0)}function Ne(){window.addEventListener("keyup",oe,!1),window.addEventListener("keydown",Pe,!1),window.addEventListener("resize",$),window.addEventListener("scroll",$)}function Be(){window.removeEventListener("keyup",oe),window.removeEventListener("resize",$),window.removeEventListener("scroll",$)}function $e(){let e=f("popover");e&&(e.wrapper.style.display="none")}function Z(e,t){var n,r;let i=f("popover");i&&document.body.removeChild(i.wrapper),i=Te(),document.body.appendChild(i.wrapper);let{title:d,description:l,showButtons:p,disableButtons:o,showProgress:a,nextBtnText:s=c("nextBtnText")||"Next &rarr;",prevBtnText:u=c("prevBtnText")||"&larr; Previous",progressText:v=c("progressText")||"{current} of {total}"}=t.popover||{};i.nextButton.innerHTML=s,i.previousButton.innerHTML=u,i.progress.innerHTML=v,d?(i.title.innerHTML=d,i.title.style.display="block"):i.title.style.display="none",l?(i.description.innerHTML=l,i.description.style.display="block"):i.description.style.display="none";let m=p||c("showButtons"),w=a||c("showProgress")||!1,g=m?.includes("next")||m?.includes("previous")||w;i.closeButton.style.display=m.includes("close")?"block":"none",g?(i.footer.style.display="flex",i.progress.style.display=w?"block":"none",i.nextButton.style.display=m.includes("next")?"block":"none",i.previousButton.style.display=m.includes("previous")?"block":"none"):i.footer.style.display="none";let h=o||c("disableButtons")||[];h!=null&&h.includes("next")&&(i.nextButton.disabled=!0,i.nextButton.classList.add("driver-popover-btn-disabled")),h!=null&&h.includes("previous")&&(i.previousButton.disabled=!0,i.previousButton.classList.add("driver-popover-btn-disabled")),h!=null&&h.includes("close")&&(i.closeButton.disabled=!0,i.closeButton.classList.add("driver-popover-btn-disabled"));let y=i.wrapper;y.style.display="block",y.style.left="",y.style.top="",y.style.bottom="",y.style.right="",y.id="driver-popover-content",y.setAttribute("role","dialog"),y.setAttribute("aria-labelledby","driver-popover-title"),y.setAttribute("aria-describedby","driver-popover-description");let L=i.arrow;L.className="driver-popover-arrow";let _=((n=t.popover)==null?void 0:n.popoverClass)||c("popoverClass")||"";y.className=`driver-popover ${_}`.trim(),re(i.wrapper,E=>{var A,T,H;let N=E.target,M=((A=t.popover)==null?void 0:A.onNextClick)||c("onNextClick"),I=((T=t.popover)==null?void 0:T.onPrevClick)||c("onPrevClick"),D=((H=t.popover)==null?void 0:H.onCloseClick)||c("onCloseClick");if(N.classList.contains("driver-popover-next-btn"))return M?M(e,t,{config:c(),state:f()}):B("nextClick");if(N.classList.contains("driver-popover-prev-btn"))return I?I(e,t,{config:c(),state:f()}):B("prevClick");if(N.classList.contains("driver-popover-close-btn"))return D?D(e,t,{config:c(),state:f()}):B("closeClick")},E=>!(i!=null&&i.description.contains(E))&&!(i!=null&&i.title.contains(E))&&typeof E.className=="string"&&E.className.includes("driver-popover")),x("popover",i);let b=((r=t.popover)==null?void 0:r.onPopoverRender)||c("onPopoverRender");b&&b(i,{config:c(),state:f()}),le(e,t),ee(y);let C=e.classList.contains("driver-dummy-element"),S=U([y,...C?[]:[e]]);S.length>0&&S[0].focus()}function se(){let e=f("popover");if(!(e!=null&&e.wrapper))return;let t=e.wrapper.getBoundingClientRect(),n=c("stagePadding")||0,r=c("popoverOffset")||0;return{width:t.width+n+r,height:t.height+n+r,realWidth:t.width,realHeight:t.height}}function G(e,t){let{elementDimensions:n,popoverDimensions:r,popoverPadding:i,popoverArrowDimensions:d}=t;return e==="start"?Math.max(Math.min(n.top-i,window.innerHeight-r.realHeight-d.width),d.width):e==="end"?Math.max(Math.min(n.top-r?.realHeight+n.height+i,window.innerHeight-r?.realHeight-d.width),d.width):e==="center"?Math.max(Math.min(n.top+n.height/2-r?.realHeight/2,window.innerHeight-r?.realHeight-d.width),d.width):0}function Q(e,t){let{elementDimensions:n,popoverDimensions:r,popoverPadding:i,popoverArrowDimensions:d}=t;return e==="start"?Math.max(Math.min(n.left-i,window.innerWidth-r.realWidth-d.width),d.width):e==="end"?Math.max(Math.min(n.left-r?.realWidth+n.width+i,window.innerWidth-r?.realWidth-d.width),d.width):e==="center"?Math.max(Math.min(n.left+n.width/2-r?.realWidth/2,window.innerWidth-r?.realWidth-d.width),d.width):0}function le(e,t){let n=f("popover");if(!n)return;let{align:r="start",side:i="left"}=t?.popover||{},d=r,l=e.id==="driver-dummy-element"?"over":i,p=c("stagePadding")||0,o=se(),a=n.arrow.getBoundingClientRect(),s=e.getBoundingClientRect(),u=s.top-o.height,v=u>=0,m=window.innerHeight-(s.bottom+o.height),w=m>=0,g=s.left-o.width,h=g>=0,y=window.innerWidth-(s.right+o.width),L=y>=0,_=!v&&!w&&!h&&!L,b=l;if(l==="top"&&v?L=h=w=!1:l==="bottom"&&w?L=h=v=!1:l==="left"&&h?L=v=w=!1:l==="right"&&L&&(h=v=w=!1),l==="over"){let C=window.innerWidth/2-o.realWidth/2,S=window.innerHeight/2-o.realHeight/2;n.wrapper.style.left=`${C}px`,n.wrapper.style.right="auto",n.wrapper.style.top=`${S}px`,n.wrapper.style.bottom="auto"}else if(_){let C=window.innerWidth/2-o?.realWidth/2,S=10;n.wrapper.style.left=`${C}px`,n.wrapper.style.right="auto",n.wrapper.style.bottom=`${S}px`,n.wrapper.style.top="auto"}else if(h){let C=Math.min(g,window.innerWidth-o?.realWidth-a.width),S=G(d,{elementDimensions:s,popoverDimensions:o,popoverPadding:p,popoverArrowDimensions:a});n.wrapper.style.left=`${C}px`,n.wrapper.style.top=`${S}px`,n.wrapper.style.bottom="auto",n.wrapper.style.right="auto",b="left"}else if(L){let C=Math.min(y,window.innerWidth-o?.realWidth-a.width),S=G(d,{elementDimensions:s,popoverDimensions:o,popoverPadding:p,popoverArrowDimensions:a});n.wrapper.style.right=`${C}px`,n.wrapper.style.top=`${S}px`,n.wrapper.style.bottom="auto",n.wrapper.style.left="auto",b="right"}else if(v){let C=Math.min(u,window.innerHeight-o.realHeight-a.width),S=Q(d,{elementDimensions:s,popoverDimensions:o,popoverPadding:p,popoverArrowDimensions:a});n.wrapper.style.top=`${C}px`,n.wrapper.style.left=`${S}px`,n.wrapper.style.bottom="auto",n.wrapper.style.right="auto",b="top"}else if(w){let C=Math.min(m,window.innerHeight-o?.realHeight-a.width),S=Q(d,{elementDimensions:s,popoverDimensions:o,popoverPadding:p,popoverArrowDimensions:a});n.wrapper.style.left=`${S}px`,n.wrapper.style.bottom=`${C}px`,n.wrapper.style.top="auto",n.wrapper.style.right="auto",b="bottom"}_?n.arrow.classList.add("driver-popover-arrow-none"):Ae(d,b,e)}function Ae(e,t,n){let r=f("popover");if(!r)return;let i=n.getBoundingClientRect(),d=se(),l=r.arrow,p=d.width,o=window.innerWidth,a=i.width,s=i.left,u=d.height,v=window.innerHeight,m=i.top,w=i.height;l.className="driver-popover-arrow";let g=t,h=e;t==="top"?(s+a<=0?(g="right",h="end"):s+a-p<=0&&(g="top",h="start"),s>=o?(g="left",h="end"):s+p>=o&&(g="top",h="end")):t==="bottom"?(s+a<=0?(g="right",h="start"):s+a-p<=0&&(g="bottom",h="start"),s>=o?(g="left",h="start"):s+p>=o&&(g="bottom",h="end")):t==="left"?(m+w<=0?(g="bottom",h="end"):m+w-u<=0&&(g="left",h="start"),m>=v?(g="top",h="end"):m+u>=v&&(g="left",h="end")):t==="right"&&(m+w<=0?(g="bottom",h="start"):m+w-u<=0&&(g="right",h="start"),m>=v?(g="top",h="start"):m+u>=v&&(g="right",h="end")),g?(l.classList.add(`driver-popover-arrow-side-${g}`),l.classList.add(`driver-popover-arrow-align-${h}`)):l.classList.add("driver-popover-arrow-none")}function Te(){let e=document.createElement("div");e.classList.add("driver-popover");let t=document.createElement("div");t.classList.add("driver-popover-arrow");let n=document.createElement("header");n.id="driver-popover-title",n.classList.add("driver-popover-title"),n.style.display="none",n.innerText="Popover Title";let r=document.createElement("div");r.id="driver-popover-description",r.classList.add("driver-popover-description"),r.style.display="none",r.innerText="Popover description is here";let i=document.createElement("button");i.type="button",i.classList.add("driver-popover-close-btn"),i.setAttribute("aria-label","Close"),i.innerHTML="&times;";let d=document.createElement("footer");d.classList.add("driver-popover-footer");let l=document.createElement("span");l.classList.add("driver-popover-progress-text"),l.innerText="";let p=document.createElement("span");p.classList.add("driver-popover-navigation-btns");let o=document.createElement("button");o.type="button",o.classList.add("driver-popover-prev-btn"),o.innerHTML="&larr; Previous";let a=document.createElement("button");return a.type="button",a.classList.add("driver-popover-next-btn"),a.innerHTML="Next &rarr;",p.appendChild(o),p.appendChild(a),d.appendChild(l),d.appendChild(p),e.appendChild(i),e.appendChild(t),e.appendChild(n),e.appendChild(r),e.appendChild(d),{wrapper:e,arrow:t,title:n,description:r,footer:d,previousButton:o,nextButton:a,closeButton:i,footerButtons:p,progress:l}}function He(){var e;let t=f("popover");t&&((e=t.wrapper.parentElement)==null||e.removeChild(t.wrapper))}function J(e={}){j(e);function t(){c("allowClose")&&a()}function n(){let s=f("activeIndex"),u=c("steps")||[];if(typeof s>"u")return;let v=s+1;u[v]?o(v):a()}function r(){let s=f("activeIndex"),u=c("steps")||[];if(typeof s>"u")return;let v=s-1;u[v]?o(v):a()}function i(s){(c("steps")||[])[s]?o(s):a()}function d(){var s;if(f("__transitionCallback"))return;let u=f("activeIndex"),v=f("__activeStep"),m=f("__activeElement");if(typeof u>"u"||typeof v>"u"||typeof f("activeIndex")>"u")return;let w=((s=v.popover)==null?void 0:s.onPrevClick)||c("onPrevClick");if(w)return w(m,v,{config:c(),state:f()});r()}function l(){var s;if(f("__transitionCallback"))return;let u=f("activeIndex"),v=f("__activeStep"),m=f("__activeElement");if(typeof u>"u"||typeof v>"u")return;let w=((s=v.popover)==null?void 0:s.onNextClick)||c("onNextClick");if(w)return w(m,v,{config:c(),state:f()});n()}function p(){f("isInitialized")||(x("isInitialized",!0),document.body.classList.add("driver-active",c("animate")?"driver-fade":"driver-simple"),Ne(),W("overlayClick",t),W("escapePress",t),W("arrowLeftPress",d),W("arrowRightPress",l))}function o(s=0){var u,v,m,w,g,h,y,L;let _=c("steps");if(!_){console.error("No steps to drive through"),a();return}if(!_[s]){a();return}x("__activeOnDestroyed",document.activeElement),x("activeIndex",s);let b=_[s],C=_[s+1],S=_[s-1],E=((u=b.popover)==null?void 0:u.doneBtnText)||c("doneBtnText")||"Done",A=c("allowClose"),T=typeof((v=b.popover)==null?void 0:v.showProgress)<"u"?(m=b.popover)==null?void 0:m.showProgress:c("showProgress"),H=(((w=b.popover)==null?void 0:w.progressText)||c("progressText")||"{{current}} of {{total}}").replace("{{current}}",`${s+1}`).replace("{{total}}",`${_.length}`),N=((g=b.popover)==null?void 0:g.showButtons)||c("showButtons"),M=["next","previous",...A?["close"]:[]].filter(fe=>!(N!=null&&N.length)||N.includes(fe)),I=((h=b.popover)==null?void 0:h.onNextClick)||c("onNextClick"),D=((y=b.popover)==null?void 0:y.onPrevClick)||c("onPrevClick"),ve=((L=b.popover)==null?void 0:L.onCloseClick)||c("onCloseClick");V({...b,popover:{showButtons:M,nextBtnText:C?void 0:E,disableButtons:[...S?[]:["previous"]],showProgress:T,progressText:H,onNextClick:I||(()=>{C?o(s+1):a()}),onPrevClick:D||(()=>{o(s-1)}),onCloseClick:ve||(()=>{a()}),...b?.popover||{}}})}function a(s=!0){let u=f("__activeElement"),v=f("__activeStep"),m=f("__activeOnDestroyed"),w=c("onDestroyStarted");if(s&&w){let y=!u||u?.id==="driver-dummy-element";w(y?void 0:u,v,{config:c(),state:f()});return}let g=v?.onDeselected||c("onDeselected"),h=c("onDestroyed");if(document.body.classList.remove("driver-active","driver-fade","driver-simple"),Be(),He(),Ee(),Se(),we(),X(),u&&v){let y=u.id==="driver-dummy-element";g&&g(y?void 0:u,v,{config:c(),state:f()}),h&&h(y?void 0:u,v,{config:c(),state:f()})}m&&m.focus()}return{isActive:()=>f("isInitialized")||!1,refresh:$,drive:(s=0)=>{p(),o(s)},setConfig:j,setSteps:s=>{X(),j({...c(),steps:s})},getConfig:c,getState:f,getActiveIndex:()=>f("activeIndex"),isFirstStep:()=>f("activeIndex")===0,isLastStep:()=>{let s=c("steps")||[],u=f("activeIndex");return u!==void 0&&u===s.length-1},getActiveStep:()=>f("activeStep"),getActiveElement:()=>f("activeElement"),getPreviousElement:()=>f("previousElement"),getPreviousStep:()=>f("previousStep"),moveNext:n,movePrevious:r,moveTo:i,hasNextStep:()=>{let s=c("steps")||[],u=f("activeIndex");return u!==void 0&&s[u+1]},hasPreviousStep:()=>{let s=c("steps")||[],u=f("activeIndex");return u!==void 0&&s[u-1]},highlight:s=>{p(),V({...s,popover:s.popover?{showButtons:[],showProgress:!1,progressText:"",...s.popover}:void 0})},destroy:()=>{a(!1)}}}var de=0,ce=0,P=!1,Me=window.navigator.clipboard,K=!1,q=null,k=document.querySelector("#circle-cursor");function pe(){Livewire.on("filament-tour::change-css-selector-status",function({enabled:e}){if(e){let t=function(n){n.key==="Escape"&&(P=!1,q=null,k.style.display="none")};document.onmousemove=Oe,document.onkeyup=t,document.onmouseover=We,document.onmouseleave=Re,document.addEventListener("keydown",function(n){n.ctrlKey&&n.code==="Space"&&!P&&(Me?(P=!0,ue(de,ce),k.style.display="block",new FilamentNotification().title("Filament Tour - CSS Selector").body("Activated !<br>Press Ctrl + C to copy the CSS Selector of the selected element !").success().send()):new FilamentNotification().title("Filament Tour - CSS Selector").body("Your browser does not support the Clipboard API !<br>Don't forget to be in <b>https://</b> protocol").danger().send()),n.ctrlKey&&n.code==="KeyC"&&P&&(navigator.clipboard.writeText(Ie(q)??"Nothing selected !"),P=!1,q=null,k.style.display="none",new FilamentNotification().title("Filament Tour - CSS Selector").body("CSS Selector copied to clipboard !").success().send())})}})}function ae(e){return e.replace(/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g,"\\$1")}function Ie(e){let t=z(e);return De(t)}function De(e){let t=e.split(" > ");for(let n=t.length-2;n>=0;n--){let r=t.slice(n).join(" > ");if(document.querySelectorAll(r).length===1)return r}return e}function z(e){if(!e)return"";if(e.id)return"#"+ae(e.id);if(e===document.body)return"body";let t=e.tagName.toLowerCase(),n=e.className.split(/\s+/).filter(d=>d&&!d.startsWith("--")),r=n.length?"."+n.map(ae).join("."):"",i=t+r;try{let d=Array.from(e.parentNode.querySelectorAll(i));if(d.length===1&&d[0]===e)return z(e.parentNode)+" > "+i;let p=Array.from(e.parentNode.children).filter(o=>o.tagName===e.tagName&&o.className===e.className);if(p.length>1){let o=p.indexOf(e)+1;return z(e.parentNode)+" > "+t+r+":nth-of-type("+o+")"}else return z(e.parentNode)+" > "+t+r}catch{}}function Oe(e){de=e.clientX,ce=e.clientY,ue(e.clientX,e.clientY)}function ue(e,t){if(!P)return;let n=10;K||(k.style.left=e-n+"px",k.style.top=t-n+"px",k.style.width="20px",k.style.height="20px",k.style.borderRadius="50%")}function We(e){if(e.stopPropagation(),!P)return;K=!0;let t=e.target;for(;t.lastElementChild;)t=t.lastElementChild;if(t){let n=t.offsetParent?t.offsetLeft+t.offsetParent.offsetLeft:t.offsetLeft,r=t.offsetParent?t.offsetTop+t.offsetParent.offsetTop:t.offsetTop,i=t.offsetWidth,d=t.offsetHeight,l=6;q=t,k.style.left=n-l+"px",k.style.top=r-l+"px",k.style.width=i+l*2-1+"px",k.style.height=d+l*2-1+"px",k.style.borderRadius="5px"}}function Re(e){P&&(K=!1)}document.addEventListener("livewire:initialized",async function(){pe();let e,t=[],n=[];function r(l,p){if(document.querySelector(l)){p(document.querySelector(l));return}let o=new MutationObserver(function(a){document.querySelector(l)&&(p(document.querySelector(l)),o.disconnect())});o.observe(document.body,{childList:!0,subtree:!0})}Livewire.dispatch("filament-tour::load-elements",{request:window.location}),Livewire.on("filament-tour::loaded-elements",function(l){e=l,e.tours.forEach(p=>{t.push(p),localStorage.getItem("tours")||localStorage.setItem("tours","[]")}),i(t),e.highlights.forEach(p=>{p.route===window.location.pathname&&(r(p.parent,function(o){o.parentNode.style.position="relative";let a=document.createElement("div");a.innerHTML=p.button,a.firstChild.classList.add(p.position),o.parentNode.insertBefore(a.firstChild,o)}),n.push(p))})});function i(l,p=0){for(let o=p;o<l.length;o++){let a=l[o],s=a.alwaysShow,u=a.routesIgnored,v=a.route===window.location.pathname,m=!e.only_visible_once||e.only_visible_once&&!localStorage.getItem("tours").includes(a.id);if(s&&u||s&&!u&&v||u&&m||v&&m){d(a);break}}}Livewire.on("filament-tour::open-highlight",function(l){let p=n.find(o=>o.id===l.id);p?J({overlayColor:localStorage.theme==="light"?p.colors.light:p.colors.dark,onPopoverRender:(o,{config:a,state:s})=>{o.closeButton.style.top="8px",o.closeButton.style.right="8px",o.title.style.fontFamily="Inter",o.title.classList.add("tracking-tight"),o.description.style.fontFamily="Inter",o.description.style.fontFamily="Inter",o.title.innerHTML="",o.title.innerHTML=s.activeStep.popover.title,s.activeStep.popover.description||(o.title.firstChild.style.justifyContent="center");let u="dark:text-white fi-section rounded-xl bg-white shadow-sm ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 mb-4";o.footer.parentElement.classList.add(...u.split(" "))}}).highlight(p):console.error(`Highlight with id '${id}' not found`)}),Livewire.on("filament-tour::open-tour",function(l){let p=t.find(o=>o.id===l.id);p?d(p):console.error(`Tour with id '${id}' not found`)});function d(l){let p=JSON.parse(l.steps);if(p.length>0){let o=J({allowClose:!0,disableActiveInteraction:!0,overlayColor:localStorage.theme==="light"?l.colors.light:l.colors.dark,onDeselected:(a,s,{config:u,state:v})=>{},onCloseClick:(a,s,{config:u,state:v})=>{v.activeStep&&(!v.activeStep.uncloseable||l.uncloseable)&&o.destroy(),localStorage.getItem("tours").includes(l.id)||localStorage.setItem("tours",JSON.stringify([...JSON.parse(localStorage.getItem("tours")),l.id]))},onDestroyStarted:(a,s,{config:u,state:v})=>{v.activeStep&&!v.activeStep.uncloseable&&!l.uncloseable&&o.destroy()},onDestroyed:(a,s,{config:u,state:v})=>{},onNextClick:(a,s,{config:u,state:v})=>{if(t.length>1&&o.isLastStep()){let m=t.findIndex(w=>w.id===l.id);if(m!==-1&&m<t.length-1){let w=m+1;i(t,w)}}o.isLastStep()&&(localStorage.getItem("tours").includes(l.id)||localStorage.setItem("tours",JSON.stringify([...JSON.parse(localStorage.getItem("tours")),l.id])),o.destroy()),s.events&&(s.events.notifyOnNext&&new FilamentNotification().title(s.events.notifyOnNext.title).body(s.events.notifyOnNext.body).icon(s.events.notifyOnNext.icon).iconColor(s.events.notifyOnNext.iconColor).color(s.events.notifyOnNext.color).duration(s.events.notifyOnNext.duration).send(),s.events.dispatchOnNext&&Livewire.dispatch(s.events.dispatchOnNext.name,s.events.dispatchOnNext.params),s.events.clickOnNext&&document.querySelector(s.events.clickOnNext).click(),s.events.redirectOnNext&&window.open(s.events.redirectOnNext.url,s.events.redirectOnNext.newTab?"_blank":"_self")),o.moveNext()},onPopoverRender:(a,{config:s,state:u})=>{(u.activeStep.uncloseable||l.uncloseable)&&document.querySelector(".driver-popover-close-btn").remove(),a.closeButton.style.top="8px",a.closeButton.style.right="8px",a.title.style.fontFamily="Inter",a.title.classList.add("tracking-tight"),a.description.style.fontFamily="Inter",a.title.innerHTML="",a.title.innerHTML=u.activeStep.popover.title,u.activeStep.popover.description||(a.title.firstChild.style.justifyContent="center");let v="dark:text-white fi-section rounded-xl bg-white shadow-sm ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 mb-4";a.footer.parentElement.classList.add(...v.split(" ")),a.footer.innerHTML="",a.footer.classList.add("flex","mt-6","gap-3"),a.footer.classList.remove("driver-popover-footer");let m=document.createElement("button"),w="fi-btn fi-btn-size-md relative grid-flow-col items-center justify-center font-semibold outline-none transition duration-75 focus:ring-2 disabled:pointer-events-none disabled:opacity-70 rounded-lg fi-btn-color-primary gap-1.5 px-3 py-2 text-sm inline-grid shadow-sm bg-custom-600 text-white hover:bg-custom-500 dark:bg-custom-500 dark:hover:bg-custom-400 focus:ring-custom-500/50 dark:focus:ring-custom-400/50 fi-ac-btn-action";m.classList.add(...w.split(" "),"driver-popover-next-btn"),m.innerText=o.isLastStep()?l.doneButtonLabel:l.nextButtonLabel,m.style.setProperty("--c-400","var(--primary-400"),m.style.setProperty("--c-500","var(--primary-500"),m.style.setProperty("--c-600","var(--primary-600");let g=document.createElement("button"),h="fi-btn fi-btn-size-md relative grid-flow-col items-center justify-center font-semibold outline-none transition duration-75 focus:ring-2 disabled:pointer-events-none disabled:opacity-70 rounded-lg fi-btn-color-gray gap-1.5 px-3 py-2 text-sm inline-grid shadow-sm bg-white text-gray-950 hover:bg-gray-50 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 ring-1 ring-gray-950/10 dark:ring-white/20 fi-ac-btn-action";g.classList.add(...h.split(" "),"driver-popover-prev-btn"),g.innerText=l.previousButtonLabel,o.isFirstStep()||a.footer.appendChild(g),a.footer.appendChild(m)},steps:p});o.drive()}}});
