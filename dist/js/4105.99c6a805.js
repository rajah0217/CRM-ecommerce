"use strict";(self["webpackChunkminible"]=self["webpackChunkminible"]||[]).push([[4105],{467:function(e,t,i){i.r(t),i.d(t,{default:function(){return $}});var a=i(6252),n=i(3577);const l=e=>((0,a.dD)("data-v-3d23b110"),e=e(),(0,a.Cn)(),e),r=l((()=>(0,a._)("h4",{class:"card-title mb-4"},"Horizontal Timeline",-1))),s={class:"hori-timeline"},o={class:"item event-list"},u={class:"event-date text-primary"},c={class:"text-primary"},d={class:"px-3"},v={class:"text-muted"},m=l((()=>(0,a._)("div",null,[(0,a._)("a",{href:"#"},[(0,a.Uk)(" View more "),(0,a._)("i",{class:"uil uil-arrow-right"})])],-1))),p={class:"d-flex justify-content-center"},f=l((()=>(0,a._)("i",{class:"bx bx-chevron-left"},null,-1))),h=l((()=>(0,a._)("i",{class:"bx bx-chevron-right"},null,-1))),g=l((()=>(0,a._)("h4",{class:"card-title mb-5"},"Vertical Timeline",-1))),w=l((()=>(0,a._)("div",{class:""},[(0,a._)("ul",{class:"verti-timeline list-unstyled"},[(0,a._)("li",{class:"event-list"},[(0,a._)("div",{class:"event-date text-primar"},"03 May"),(0,a._)("h5",null,"Timeline event One"),(0,a._)("p",{class:"text-muted"}," If several languages coalesce, the grammar of the resulting the individual ")]),(0,a._)("li",{class:"event-list"},[(0,a._)("div",{class:"event-date text-primar"},"08 May"),(0,a._)("h5",null,"Timeline event Two"),(0,a._)("p",{class:"text-muted"}," Sed ut perspiciatis unde omnis iste natus error sit illo inventore veritatis ")]),(0,a._)("li",{class:"event-list"},[(0,a._)("div",{class:"event-date text-primar"},"11 May"),(0,a._)("h5",null,"Timeline event Three"),(0,a._)("p",{class:"text-muted"}," Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit ")]),(0,a._)("li",{class:"event-list"},[(0,a._)("div",{class:"event-date text-primar"},"16 May"),(0,a._)("h5",null,"Timeline event Four"),(0,a._)("p",{class:"text-muted"}," Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam ")]),(0,a._)("li",{class:"event-list"},[(0,a._)("div",{class:"event-date text-primar"},"27 May"),(0,a._)("h5",null,"Timeline event Five"),(0,a._)("p",{class:"text-muted"}," Itaque earum rerum hic tenetur a sapiente delectus maiores alias consequatur aut ")])])],-1)));function x(e,t,i,l,x,b){const y=(0,a.up)("PageHeader"),_=(0,a.up)("Slide"),S=(0,a.up)("Carousel"),T=(0,a.up)("BButton"),C=(0,a.up)("BCardBody"),k=(0,a.up)("BCard"),A=(0,a.up)("BCol"),M=(0,a.up)("BRow"),j=(0,a.up)("Layout");return(0,a.wg)(),(0,a.j4)(j,null,{default:(0,a.w5)((()=>[(0,a.Wm)(y,{title:x.title,items:x.items},null,8,["title","items"]),(0,a.Wm)(M,null,{default:(0,a.w5)((()=>[(0,a.Wm)(A,{lg:"12"},{default:(0,a.w5)((()=>[(0,a.Wm)(k,{"no-body":""},{default:(0,a.w5)((()=>[(0,a.Wm)(C,null,{default:(0,a.w5)((()=>[r,(0,a._)("div",s,[(0,a.Wm)(S,{ref:"carousel",modelValue:x.currentSlide,"onUpdate:modelValue":t[0]||(t[0]=e=>x.currentSlide=e),"items-to-show":4,class:"events"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(x.carouselItems,(e=>((0,a.wg)(),(0,a.j4)(_,{key:e},{default:(0,a.w5)((()=>[(0,a._)("div",o,[(0,a._)("div",u,[(0,a._)("div",c,(0,n.zw)(e.date),1)]),(0,a._)("div",d,[(0,a._)("h5",null,(0,n.zw)(e.title),1),(0,a._)("p",v,(0,n.zw)(e.description),1),m])])])),_:2},1024)))),128))])),_:1},8,["modelValue"]),(0,a._)("div",p,[(0,a.Wm)(T,{onClick:b.prev,class:"me-2 rounded-circle bg-primary-subtle text-primary timeline-slider-btn",rounded:"circle",variant:"primary"},{default:(0,a.w5)((()=>[f])),_:1},8,["onClick"]),(0,a.Wm)(T,{onClick:b.next,class:"ms-2 rounded-circle bg-primary-subtle text-primary outline-none timeline-slider-btn",icon:"",variant:"primary"},{default:(0,a.w5)((()=>[h])),_:1},8,["onClick"])])])])),_:1})])),_:1})])),_:1})])),_:1}),(0,a.Wm)(M,null,{default:(0,a.w5)((()=>[(0,a.Wm)(A,{lg:"12"},{default:(0,a.w5)((()=>[(0,a.Wm)(k,{"no-body":""},{default:(0,a.w5)((()=>[(0,a.Wm)(C,null,{default:(0,a.w5)((()=>[g,w])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var b=i(2399),y=i(1022),_=i(2262);
/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */
const S={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},T={itemsToShow:{default:S.itemsToShow,type:Number},itemsToScroll:{default:S.itemsToScroll,type:Number},wrapAround:{default:S.wrapAround,type:Boolean},throttle:{default:S.throttle,type:Number},snapAlign:{default:S.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:S.transition,type:Number},breakpoints:{default:S.breakpoints,type:Object},autoplay:{default:S.autoplay,type:Number},pauseAutoplayOnHover:{default:S.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:S.mouseDrag,type:Boolean},touchDrag:{default:S.touchDrag,type:Boolean},dir:{default:S.dir,validator(e){return["rtl","ltr"].includes(e)}},i18n:{default:S.i18n,type:Object},settings:{default(){return{}},type:Object}};function C({config:e,slidesCount:t}){const{snapAlign:i,wrapAround:a,itemsToShow:n=1}=e;if(a)return Math.max(t-1,0);let l;switch(i){case"start":l=t-n;break;case"end":l=t-1;break;case"center":case"center-odd":l=t-Math.ceil((n-.5)/2);break;case"center-even":l=t-Math.ceil(n/2);break;default:l=0;break}return Math.max(l,0)}function k({config:e,slidesCount:t}){const{wrapAround:i,snapAlign:a,itemsToShow:n=1}=e;let l=0;if(i||n>t)return l;switch(a){case"start":l=0;break;case"end":l=n-1;break;case"center":case"center-odd":l=Math.floor((n-1)/2);break;case"center-even":l=Math.floor((n-2)/2);break;default:l=0;break}return l}function A({val:e,max:t,min:i}){return t<i?e:Math.min(Math.max(e,i),t)}function M({config:e,currentSlide:t,slidesCount:i}){const{snapAlign:a,wrapAround:n,itemsToShow:l=1}=e;let r=t;switch(a){case"center":case"center-odd":r-=(l-1)/2;break;case"center-even":r-=(l-2)/2;break;case"end":r-=l-1;break}return n?r:A({val:r,max:i-l,min:0})}function j(e){return e?e.reduce(((e,t)=>{var i;return t.type===a.HY?[...e,...j(t.children)]:"CarouselSlide"===(null===(i=t.type)||void 0===i?void 0:i.name)?[...e,t]:e}),[]):[]}function H({val:e,max:t,min:i=0}){return e>t?H({val:e-(t+1),max:t,min:i}):e<i?H({val:e+(t+1),max:t,min:i}):e}function O(e,t){let i;return t?function(...a){const n=this;i||(e.apply(n,a),i=!0,setTimeout((()=>i=!1),t))}:e}function L(e,t){let i;return function(...a){i&&clearTimeout(i),i=setTimeout((()=>{e(...a),i=null}),t)}}function q(e="",t={}){return Object.entries(t).reduce(((e,[t,i])=>e.replace(`{${t}}`,String(i))),e)}var I,N=(0,a.aZ)({name:"ARIA",setup(){const e=(0,a.f3)("config",(0,_.qj)(Object.assign({},S))),t=(0,a.f3)("currentSlide",(0,_.iH)(0)),i=(0,a.f3)("slidesCount",(0,_.iH)(0));return()=>(0,a.h)("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},q(e.i18n["itemXofY"],{currentSlide:t.value+1,slidesCount:i.value}))}}),D=(0,a.aZ)({name:"Carousel",props:T,setup(e,{slots:t,emit:i,expose:n}){var l;const r=(0,_.iH)(null),s=(0,_.iH)([]),o=(0,_.iH)(0),u=(0,_.iH)(0),c=(0,_.qj)(Object.assign({},S));let d,v=Object.assign({},S);const m=(0,_.iH)(null!==(l=e.modelValue)&&void 0!==l?l:0),p=(0,_.iH)(0),f=(0,_.iH)(0),h=(0,_.iH)(0),g=(0,_.iH)(0);let w,x;function b(){d=Object.assign({},e.breakpoints),v=Object.assign(Object.assign(Object.assign({},v),e),{i18n:Object.assign(Object.assign({},v.i18n),e.i18n),breakpoints:void 0}),q(v)}function y(){if(!d||!Object.keys(d).length)return;const e=Object.keys(d).map((e=>Number(e))).sort(((e,t)=>+t-+e));let t=Object.assign({},v);e.some((e=>{const i=window.matchMedia(`(min-width: ${e}px)`).matches;return i&&(t=Object.assign(Object.assign({},t),d[e])),i})),q(t)}function q(e){Object.entries(e).forEach((([e,t])=>c[e]=t))}(0,a.JJ)("config",c),(0,a.JJ)("slidesCount",u),(0,a.JJ)("currentSlide",m),(0,a.JJ)("maxSlide",h),(0,a.JJ)("minSlide",g),(0,a.JJ)("slideWidth",o);const I=L((()=>{y(),D()}),16);function D(){if(!r.value)return;const e=r.value.getBoundingClientRect();o.value=e.width/c.itemsToShow}function J(){u.value<=0||(f.value=Math.ceil((u.value-1)/2),h.value=C({config:c,slidesCount:u.value}),g.value=k({config:c,slidesCount:u.value}),c.wrapAround||(m.value=A({val:m.value,max:h.value,min:g.value})))}(0,a.bv)((()=>{(0,a.Y3)((()=>D())),setTimeout((()=>D()),1e3),y(),F(),window.addEventListener("resize",I,{passive:!0}),i("init")})),(0,a.Ah)((()=>{x&&clearTimeout(x),w&&clearInterval(w),window.removeEventListener("resize",I,{passive:!0})}));let B=!1;const E={x:0,y:0},W={x:0,y:0},Y=(0,_.qj)({x:0,y:0}),V=(0,_.iH)(!1),z=(0,_.iH)(!1),$=()=>{V.value=!0},P=()=>{V.value=!1};function U(e){["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)||(B="touchstart"===e.type,B||e.preventDefault(),!B&&0!==e.button||G.value||(E.x=B?e.touches[0].clientX:e.clientX,E.y=B?e.touches[0].clientY:e.clientY,document.addEventListener(B?"touchmove":"mousemove",R,!0),document.addEventListener(B?"touchend":"mouseup",X,!0)))}const R=O((e=>{z.value=!0,W.x=B?e.touches[0].clientX:e.clientX,W.y=B?e.touches[0].clientY:e.clientY;const t=W.x-E.x,i=W.y-E.y;Y.y=i,Y.x=t}),c.throttle);function X(){const e="rtl"===c.dir?-1:1,t=.4*Math.sign(Y.x),i=Math.round(Y.x/o.value+t)*e;if(i&&!B){const e=t=>{t.stopPropagation(),window.removeEventListener("click",e,!0)};window.addEventListener("click",e,!0)}Q(m.value-i),Y.x=0,Y.y=0,z.value=!1,document.removeEventListener(B?"touchmove":"mousemove",R,!0),document.removeEventListener(B?"touchend":"mouseup",X,!0)}function F(){!c.autoplay||c.autoplay<=0||(w=setInterval((()=>{c.pauseAutoplayOnHover&&V.value||K()}),c.autoplay))}function Z(){w&&(clearInterval(w),w=null),F()}const G=(0,_.iH)(!1);function Q(e){const t=c.wrapAround?e:A({val:e,max:h.value,min:g.value});m.value===t||G.value||(i("slide-start",{slidingToIndex:e,currentSlideIndex:m.value,prevSlideIndex:p.value,slidesCount:u.value}),G.value=!0,p.value=m.value,m.value=t,x=setTimeout((()=>{if(c.wrapAround){const a=H({val:t,max:h.value,min:0});a!==m.value&&(m.value=a,i("loop",{currentSlideIndex:m.value,slidingToIndex:e}))}i("update:modelValue",m.value),i("slide-end",{currentSlideIndex:m.value,prevSlideIndex:p.value,slidesCount:u.value}),G.value=!1,Z()}),c.transition))}function K(){Q(m.value+c.itemsToScroll)}function ee(){Q(m.value-c.itemsToScroll)}const te={slideTo:Q,next:K,prev:ee};(0,a.JJ)("nav",te),(0,a.JJ)("isSliding",G);const ie=(0,a.Fl)((()=>M({config:c,currentSlide:m.value,slidesCount:u.value})));(0,a.JJ)("slidesToScroll",ie);const ae=(0,a.Fl)((()=>{const e="rtl"===c.dir?-1:1,t=ie.value*o.value*e;return{transform:`translateX(${Y.x-t}px)`,transition:`${G.value?c.transition:0}ms`,margin:c.wrapAround?`0 -${u.value*o.value}px`:"",width:"100%"}}));function ne(){b(),y(),J(),D(),Z()}Object.keys(T).forEach((t=>{["modelValue"].includes(t)||(0,a.YP)((()=>e[t]),ne)})),(0,a.YP)((()=>e["modelValue"]),(e=>{e!==m.value&&Q(Number(e))})),(0,a.YP)(u,J),i("before-init"),b();const le={config:c,slidesCount:u,slideWidth:o,next:K,prev:ee,slideTo:Q,currentSlide:m,maxSlide:h,minSlide:g,middleSlide:f};n({updateBreakpointsConfigs:y,updateSlidesData:J,updateSlideWidth:D,initDefaultConfigs:b,restartCarousel:ne,slideTo:Q,next:K,prev:ee,nav:te,data:le});const re=t.default||t.slides,se=t.addons,oe=(0,_.qj)(le);return()=>{const e=j(null===re||void 0===re?void 0:re(oe)),t=(null===se||void 0===se?void 0:se(oe))||[];e.forEach(((e,t)=>e.props.index=t));let i=e;if(c.wrapAround){const t=e.map(((t,i)=>(0,a.Ho)(t,{index:-e.length+i,isClone:!0,key:`clone-before-${i}`}))),n=e.map(((t,i)=>(0,a.Ho)(t,{index:e.length+i,isClone:!0,key:`clone-after-${i}`})));i=[...t,...e,...n]}s.value=e,u.value=Math.max(e.length,1);const n=(0,a.h)("ol",{class:"carousel__track",style:ae.value,onMousedownCapture:c.mouseDrag?U:null,onTouchstartPassiveCapture:c.touchDrag?U:null},i),l=(0,a.h)("div",{class:"carousel__viewport"},n);return(0,a.h)("section",{ref:r,class:{carousel:!0,"is-sliding":G.value,"is-dragging":z.value,"is-hover":V.value,"carousel--rtl":"rtl"===c.dir},dir:c.dir,"aria-label":c.i18n["ariaGallery"],tabindex:"0",onMouseenter:$,onMouseleave:P},[l,t,(0,a.h)(N)])}}});(function(e){e["arrowUp"]="arrowUp",e["arrowDown"]="arrowDown",e["arrowRight"]="arrowRight",e["arrowLeft"]="arrowLeft"})(I||(I={}));const J={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"};function B(e){return e in I}const E=e=>{const t=(0,a.f3)("config",(0,_.qj)(Object.assign({},S))),i=String(e.name),n=`icon${i.charAt(0).toUpperCase()+i.slice(1)}`;if(!i||"string"!==typeof i||!B(i))return;const l=J[i],r=(0,a.h)("path",{d:l}),s=t.i18n[n]||e.title||i,o=(0,a.h)("title",s);return(0,a.h)("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img","aria-label":s},[o,r])};E.props={name:String,title:String};var W=(0,a.aZ)({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:t}){const i=(0,a.f3)("config",(0,_.qj)(Object.assign({},S))),n=(0,a.f3)("currentSlide",(0,_.iH)(0)),l=(0,a.f3)("slidesToScroll",(0,_.iH)(0)),r=(0,a.f3)("isSliding",(0,_.iH)(!1)),s=()=>e.index===n.value,o=()=>e.index===n.value-1,u=()=>e.index===n.value+1,c=()=>{const t=Math.floor(l.value),a=Math.ceil(l.value+i.itemsToShow-1);return e.index>=t&&e.index<=a};return()=>{var n;return(0,a.h)("li",{style:{width:100/i.itemsToShow+"%"},class:{carousel__slide:!0,"carousel__slide--clone":e.isClone,"carousel__slide--visible":c(),"carousel__slide--active":s(),"carousel__slide--prev":o(),"carousel__slide--next":u(),"carousel__slide--sliding":r.value},"aria-hidden":!c()},null===(n=t.default)||void 0===n?void 0:n.call(t))}}}),Y={components:{Layout:b.Z,PageHeader:y.Z,Carousel:D,Slide:W},data(){return{title:"Timeline",items:[{text:"Utility",href:"/"},{text:"Timeline",active:!0}],currentSlide:0,carouselItems:[{title:"First event",date:"03 May",description:"If several languages coalesce, the grammar of the resulting the individual"},{title:"Second event",date:"08 May",description:"Sed ut perspiciatis unde omnis iste natus error sit illo inventore veritatis"},{title:"Third event",date:"11 May",description:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit"},{title:"Fourth event",date:"16 May",description:"Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam"},{title:"Fifth event",date:"23 May",description:"Itaque earum rerum hic tenetur a sapiente delectus maiores alias consequatur aut"},{title:"sixth event",date:"27 May",description:"Donec quam felis ultricies nec pellentesque eu pretium sem consequat quis"}]}},methods:{next(){this.$refs.carousel.next()},prev(){this.$refs.carousel.prev()}},middleware:"authentication"},V=i(3744);const z=(0,V.Z)(Y,[["render",x],["__scopeId","data-v-3d23b110"]]);var $=z}}]);
//# sourceMappingURL=4105.99c6a805.js.map