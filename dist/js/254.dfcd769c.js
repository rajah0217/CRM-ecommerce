"use strict";(self["webpackChunkminible"]=self["webpackChunkminible"]||[]).push([[254],{5464:function(e,t,l){l.r(t),l.d(t,{default:function(){return oe}});var o=l(6252),a=l(7676);const n=(0,o._)("p",{class:"card-title-desc"},"Example of image popup.",-1),i={class:"popup-gallery"},r=(0,o._)("p",{class:"card-title-desc"}," In this example lazy-loading of images is enabled for the next image based on move direction. ",-1),s={class:"popup-gallery"},c=["onClick"],d=["src"],u=(0,o._)("p",{class:"card-title-desc"},"Show caption with popup.",-1),m={class:"popup-gallery"},p=["onClick"],b=["src"],g={class:"popup-form btn btn-primary",href:"javascript: void(0);"},v=(0,o._)("div",{class:"mb-3"},[(0,o._)("label",{for:"name"},"Name"),(0,o._)("input",{type:"text",class:"form-control",id:"name",placeholder:"Enter Name"})],-1),f=(0,o._)("div",{class:"mb-3"},[(0,o._)("label",{for:"email"},"Email"),(0,o._)("input",{type:"email",class:"form-control",id:"email",placeholder:"Enter Email"})],-1),h=(0,o._)("div",{class:"mb-3"},[(0,o._)("label",{for:"password"},"Password"),(0,o._)("input",{type:"text",class:"form-control",id:"password",placeholder:"Enter Password"})],-1),w=(0,o._)("div",{class:"mb-3"},[(0,o._)("label",{for:"subject"},"Subject"),(0,o._)("textarea",{class:"form-control",id:"subject",rows:"3"})],-1),x={class:"text-end"};function y(e,t,y,_,W,k){const z=(0,o.up)("PageHeader"),C=(0,o.up)("BCardTitle"),D=(0,o.up)("vue-easy-lightbox"),S=(0,o.up)("BCardBody"),M=(0,o.up)("BCard"),Y=(0,o.up)("BCol"),L=(0,o.up)("BRow"),B=(0,o.up)("BButton"),E=(0,o.up)("BForm"),H=(0,o.up)("BModal"),j=(0,o.up)("Layout"),T=(0,o.Q2)("b-modal");return(0,o.wg)(),(0,o.j4)(j,null,{default:(0,o.w5)((()=>[(0,o.Wm)(z,{title:W.title,items:W.items},null,8,["title","items"]),(0,o.Wm)(L,null,{default:(0,o.w5)((()=>[(0,o.Wm)(Y,{lg:"6"},{default:(0,o.w5)((()=>[(0,o.Wm)(M,{"no-body":""},{default:(0,o.w5)((()=>[(0,o.Wm)(S,null,{default:(0,o.w5)((()=>[(0,o.Wm)(C,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Single image lightbox")])),_:1}),n,(0,o._)("div",i,[(0,o._)("img",{src:a,width:"120",onClick:t[0]||(t[0]=e=>W.singleImage=!0)}),(0,o.Wm)(D,{visible:W.singleImage,imgs:l(7676),onHide:t[1]||(t[1]=e=>W.singleImage=!1)},null,8,["visible","imgs"])])])),_:1})])),_:1})])),_:1}),(0,o.Wm)(Y,{lg:"6"},{default:(0,o.w5)((()=>[(0,o.Wm)(M,{"no-body":""},{default:(0,o.w5)((()=>[(0,o.Wm)(S,null,{default:(0,o.w5)((()=>[(0,o.Wm)(C,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Lightbox gallery")])),_:1}),r,(0,o._)("div",s,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(W.imgs,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t,class:"float-start",onClick:()=>k.showImg(t)},[(0,o._)("img",{src:e,width:"120"},null,8,d)],8,c)))),128)),(0,o.Wm)(D,{visible:W.visible,imgs:W.imgs,index:W.index,onHide:k.handleHide},null,8,["visible","imgs","index","onHide"])])])),_:1})])),_:1})])),_:1})])),_:1}),(0,o.Wm)(L,null,{default:(0,o.w5)((()=>[(0,o.Wm)(Y,{lg:"6"},{default:(0,o.w5)((()=>[(0,o.Wm)(M,null,{default:(0,o.w5)((()=>[(0,o.Wm)(S,null,{default:(0,o.w5)((()=>[(0,o.Wm)(C,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Caption")])),_:1}),u,(0,o._)("div",m,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(W.captionimgs,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t,class:"float-start",onClick:()=>k.showCaptiomImg(t)},[(0,o._)("img",{src:e.src,width:"275"},null,8,b)],8,p)))),128)),(0,o.Wm)(D,{visible:W.visibleCaption,imgs:W.captionimgs,index:W.index,onHide:k.handleCaptionHide},null,8,["visible","imgs","index","onHide"])])])),_:1})])),_:1})])),_:1}),(0,o.Wm)(Y,{lg:"6"},{default:(0,o.w5)((()=>[(0,o.Wm)(M,{"no-body":""},{default:(0,o.w5)((()=>[(0,o.Wm)(S,null,{default:(0,o.w5)((()=>[(0,o.Wm)(C,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Popup with form")])),_:1}),(0,o._)("div",null,[(0,o.wy)(((0,o.wg)(),(0,o.iD)("a",g,[(0,o.Uk)("Popup form")])),[[T,void 0,void 0,{"modal-1":!0}]]),(0,o.Wm)(H,{id:"modal-1",title:"Form","hide-footer":"",size:"lg",centered:""},{default:(0,o.w5)((()=>[(0,o.Wm)(S,null,{default:(0,o.w5)((()=>[(0,o.Wm)(E,null,{default:(0,o.w5)((()=>[(0,o.Wm)(L,null,{default:(0,o.w5)((()=>[(0,o.Wm)(Y,{lg:"4"},{default:(0,o.w5)((()=>[v])),_:1}),(0,o.Wm)(Y,{lg:"4"},{default:(0,o.w5)((()=>[f])),_:1}),(0,o.Wm)(Y,{lg:"4"},{default:(0,o.w5)((()=>[h])),_:1})])),_:1}),(0,o.Wm)(L,null,{default:(0,o.w5)((()=>[(0,o.Wm)(Y,{lg:"12"},{default:(0,o.w5)((()=>[w])),_:1})])),_:1}),(0,o.Wm)(L,null,{default:(0,o.w5)((()=>[(0,o.Wm)(Y,{lg:"12"},{default:(0,o.w5)((()=>[(0,o._)("div",x,[(0,o.Wm)(B,{type:"submit",variant:"primary"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Submit ")])),_:1})])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var _=l(2399),W=l(1022),k=l(2262),z=l(9963);function C(e,t){void 0===t&&(t={});var l=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===l&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}C(".vel-fade-enter-active,.vel-fade-leave-active{-webkit-transition:all .3s ease;transition:all .3s ease}.vel-fade-enter-from,.vel-fade-leave-to{opacity:0}.vel-img-swiper{display:block;position:relative}.vel-modal{background:rgba(0,0,0,.5);bottom:0;left:0;margin:0;position:fixed;right:0;top:0;z-index:9998}.vel-img-wrapper{left:50%;margin:0;position:absolute;top:50%;-webkit-transform:translate(-50% -50%);transform:translate(-50% -50%);-webkit-transition:.3s linear;transition:.3s linear;will-change:transform opacity}.vel-img,.vel-img-wrapper{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vel-img{background-color:rgba(0,0,0,.7);-webkit-box-shadow:0 5px 20px 2px rgba(0,0,0,.7);box-shadow:0 5px 20px 2px rgba(0,0,0,.7);display:block;max-height:80vh;max-width:80vw;position:relative;-webkit-transition:-webkit-transform .3s ease-in-out;transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out}@media (max-width:750px){.vel-img{max-height:95vh;max-width:85vw}}.vel-btns-wrapper{position:static}.vel-btns-wrapper .btn__close,.vel-btns-wrapper .btn__next,.vel-btns-wrapper .btn__prev{-webkit-tap-highlight-color:transparent;color:#fff;cursor:pointer;font-size:32px;opacity:.6;outline:none;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:.15s linear;transition:.15s linear;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vel-btns-wrapper .btn__close:hover,.vel-btns-wrapper .btn__next:hover,.vel-btns-wrapper .btn__prev:hover{opacity:1}.vel-btns-wrapper .btn__close.disable,.vel-btns-wrapper .btn__close.disable:hover,.vel-btns-wrapper .btn__next.disable,.vel-btns-wrapper .btn__next.disable:hover,.vel-btns-wrapper .btn__prev.disable,.vel-btns-wrapper .btn__prev.disable:hover{cursor:default;opacity:.2}.vel-btns-wrapper .btn__next{right:12px}.vel-btns-wrapper .btn__prev{left:12px}.vel-btns-wrapper .btn__close{right:10px;top:24px}@media (max-width:750px){.vel-btns-wrapper .btn__next,.vel-btns-wrapper .btn__prev{font-size:20px}.vel-btns-wrapper .btn__close{font-size:24px}.vel-btns-wrapper .btn__next{right:4px}.vel-btns-wrapper .btn__prev{left:4px}}.vel-modal.is-rtl .vel-btns-wrapper .btn__next{left:12px;right:auto}.vel-modal.is-rtl .vel-btns-wrapper .btn__prev{left:auto;right:12px}@media (max-width:750px){.vel-modal.is-rtl .vel-btns-wrapper .btn__next{left:4px;right:auto}.vel-modal.is-rtl .vel-btns-wrapper .btn__prev{left:auto;right:4px}}.vel-modal.is-rtl .vel-img-title{direction:rtl}"),C('.vel-loading{left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vel-loading .ring{display:inline-block;height:64px;width:64px}.vel-loading .ring:after{-webkit-animation:ring 1.2s linear infinite;animation:ring 1.2s linear infinite;border-color:hsla(0,0%,100%,.7) transparent;border-radius:50%;border-style:solid;border-width:5px;content:" ";display:block;height:46px;margin:1px;width:46px}@-webkit-keyframes ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}'),C(".vel-on-error{left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vel-on-error .icon{color:#aaa;font-size:80px}"),C(".vel-img-title{bottom:60px;color:#ccc;cursor:default;font-size:12px;left:50%;line-height:1;max-width:80%;opacity:.8;overflow:hidden;position:absolute;text-align:center;text-overflow:ellipsis;-webkit-transform:translate(-50%);transform:translate(-50%);-webkit-transition:opacity .15s;transition:opacity .15s;white-space:nowrap}.vel-img-title:hover{opacity:1}"),C(".vel-icon{fill:currentColor;height:1em;overflow:hidden;vertical-align:-.15em;width:1em}"),C(".vel-toolbar{border-radius:4px;bottom:8px;display:-webkit-box;display:-ms-flexbox;display:flex;left:50%;opacity:.9;overflow:hidden;padding:0;position:absolute;-webkit-transform:translate(-50%);transform:translate(-50%)}.vel-toolbar,.vel-toolbar .toolbar-btn{background-color:#2d2d2d;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vel-toolbar .toolbar-btn{-ms-flex-negative:0;-webkit-tap-highlight-color:transparent;color:#fff;cursor:pointer;flex-shrink:0;font-size:20px;outline:none;padding:6px 10px}.vel-toolbar .toolbar-btn:active,.vel-toolbar .toolbar-btn:hover{background-color:#3d3d3d}");const D="vel",S=(0,o.aZ)({name:"SvgIcon",props:{type:{type:String,default:""}},setup:e=>()=>(0,o.Wm)("svg",{class:`${D}-icon icon`,"aria-hidden":"true"},[(0,o.Wm)("use",{"xlink:href":`#icon-${e.type}`},null)])}),M="undefined"!=typeof window,Y=()=>{};let L=!1;if(M)try{const e={};Object.defineProperty(e,"passive",{get(){L=!0}}),window.addEventListener("test-passive",Y,e)}catch(ae){}const B=function(e,t,l){let o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];M&&e.addEventListener(t,l,!!L&&{capture:!1,passive:o})},E=(e,t,l)=>{M&&e.removeEventListener(t,l)},H=e=>{e.preventDefault()},j=Object.prototype.toString,T=e=>t=>j.call(t).slice(8,-1)===e,X=e=>!!e&&T("Object")(e),I=e=>!!e&&T("String")(e);function $(e){return null!=e}const F=(0,o.aZ)({name:"Toolbar",props:{zoomIn:{type:Function,default:Y},zoomOut:{type:Function,default:Y},rotateLeft:{type:Function,default:Y},rotateRight:{type:Function,default:Y},resize:{type:Function,default:Y},rotateDisabled:{type:Boolean,default:!1},zoomDisabled:{type:Boolean,default:!1}},setup:e=>()=>(0,o.Wm)("div",{class:`${D}-toolbar`},[!e.zoomDisabled&&(0,o.Wm)(o.HY,null,[(0,o.Wm)("div",{role:"button","aria-label":"zoom in button",class:"toolbar-btn toolbar-btn__zoomin",onClick:e.zoomIn},[(0,o.Wm)(S,{type:"zoomin"},null)]),(0,o.Wm)("div",{role:"button","aria-label":"zoom out button",class:"toolbar-btn toolbar-btn__zoomout",onClick:e.zoomOut},[(0,o.Wm)(S,{type:"zoomout"},null)])]),(0,o.Wm)("div",{role:"button","aria-label":"resize image button",class:"toolbar-btn toolbar-btn__resize",onClick:e.resize},[(0,o.Wm)(S,{type:"resize"},null)]),!e.rotateDisabled&&(0,o.Wm)(o.HY,null,[(0,o.Wm)("div",{role:"button","aria-label":"image rotate left button",class:"toolbar-btn toolbar-btn__rotate",onClick:e.rotateLeft},[(0,o.Wm)(S,{type:"rotate-left"},null)]),(0,o.Wm)("div",{role:"button","aria-label":"image rotate right button",class:"toolbar-btn toolbar-btn__rotate",onClick:e.rotateRight},[(0,o.Wm)(S,{type:"rotate-right"},null)])])])}),P=()=>(0,o.Wm)("div",{class:`${D}-loading`},[(0,o.Wm)("div",{class:"ring"},null)]),O=()=>(0,o.Wm)("div",{class:`${D}-on-error`},[(0,o.Wm)("div",{class:"ring"},null),(0,o.Wm)(S,{type:"img-broken"},null)]),Z=(e,t)=>{let{slots:l}=t;return(0,o.Wm)("div",{class:`${D}-img-title`},[l.default?l.default():""])},A=(0,o.aZ)({name:"DefaultIcons",setup:()=>()=>(0,o.Wm)("svg",{"aria-hidden":!0,style:"position: absolute; width: 0; height: 0; overflow: hidden; visibility: hidden;"},[(0,o.Wm)("symbol",{id:"icon-rotate-right",viewBox:"0 0 1024 1024"},[(0,o.Wm)("path",{d:"M275.199914 450.496179v20.031994c0.384-38.079988 12.543996-67.423979 36.479989-87.967973 22.431993-20.351994 49.215985-30.55999 80.319975-30.55999 32.06399 0 59.295981 10.175997 81.759974 30.55999 22.815993 20.543994 34.591989 49.887984 35.359989 87.967973v123.935961c-0.768 37.887988-12.543996 67.135979-35.359989 87.679973-22.431993 20.351994-49.695984 30.75199-81.759974 31.10399a120.255962 120.255962 0 0 1-72.991978-24.895992c-21.503993-15.839995-35.359989-38.751988-41.567987-68.735979h60.831981c9.247997 23.007993 27.167992 34.495989 53.759983 34.49599 37.535988-0.384 56.863982-21.407993 57.983982-63.071981v-38.751988c-28.095991 8.863997-54.303983 13.119996-78.623975 12.735996a91.263971 91.263971 0 0 1-68.447979-27.711991c-18.847994-18.303994-28.095991-47.231985-27.711991-86.847973z m62.55998 24.863992c7.103998 24.799992 25.215992 37.343988 54.271983 37.663989 27.103992-0.288 44.703986-11.327996 52.831984-33.11999 3.135999-8.383997 2.655999-29.599991-1.28-38.559988-8.607997-19.615994-25.791992-29.695991-51.551984-30.20799-28.383991 0.576-46.303986 12.639996-53.759983 36.159988a58.719982 58.719982 0 0 0-0.512 28.063991z m390.335878 115.711964v-116.895963c-1.12-41.311987-20.447994-62.335981-57.983981-63.07198-37.727988 0.768-56.959982 21.791993-57.695982 63.07198v116.895963c0.768 41.663987 19.999994 62.68798 57.695982 63.071981 37.535988-0.384 56.863982-21.407993 57.983981-63.071981z m-174.815945 3.391999v-123.935961c0.384-38.079988 12.543996-67.423979 36.479989-87.967973 22.431993-20.351994 49.215985-30.55999 80.319975-30.55999 32.06399 0 59.295981 10.175997 81.759974 30.55999 22.815993 20.543994 34.591989 49.887984 35.359989 87.967973v123.935961c-0.768 37.887988-12.543996 67.135979-35.359989 87.679973-22.431993 20.351994-49.695984 30.75199-81.759974 31.10399-31.10399-0.384-57.887982-10.751997-80.319975-31.10399-23.935993-20.543994-36.127989-49.791984-36.479989-87.679973z m282.559912-479.07185A509.887841 509.887841 0 0 0 511.99984 0.00032C229.215928 0.00032 0 229.216248 0 512.00016s229.215928 511.99984 511.99984 511.99984 511.99984-229.215928 511.99984-511.99984c0-3.743999-0.032-7.455998-0.128-11.167997-1.631999-11.295996-8.159997-27.103992-31.87199-27.103991-27.487991 0-31.67999 21.247993-32.03199 32.06399l0.032 4.127999a30.62399 30.62399 0 0 0 0.16 2.079999H959.9997c0 247.423923-200.575937 447.99986-447.99986 447.99986S63.99998 759.424083 63.99998 512.00016 264.575917 64.0003 511.99984 64.0003a446.079861 446.079861 0 0 1 277.439913 96.22397l-94.91197 91.679971c-25.439992 24.607992-17.439995 44.991986 17.887994 45.599986l188.031942 3.295999a64.31998 64.31998 0 0 0 65.055979-62.84798l3.295999-188.127942C969.407697 15.040315 949.311703 5.792318 923.871711 30.368311l-87.999972 85.023973z",fill:""},null)]),(0,o.Wm)("symbol",{id:"icon-rotate-left",viewBox:"0 0 1024 1024"},[(0,o.Wm)("path",{d:"M275.199914 450.496179v20.031994c0.384-38.079988 12.543996-67.423979 36.479989-87.967973 22.431993-20.351994 49.215985-30.55999 80.319975-30.55999 32.06399 0 59.295981 10.175997 81.759974 30.55999 22.815993 20.543994 34.591989 49.887984 35.359989 87.967973v123.935961c-0.768 37.887988-12.543996 67.135979-35.359989 87.679973-22.431993 20.351994-49.695984 30.75199-81.759974 31.10399a120.255962 120.255962 0 0 1-72.991978-24.895992c-21.503993-15.839995-35.359989-38.751988-41.567987-68.735979h60.831981c9.247997 23.007993 27.167992 34.495989 53.759983 34.49599 37.535988-0.384 56.863982-21.407993 57.983982-63.071981v-38.751988c-28.095991 8.863997-54.303983 13.119996-78.623975 12.735996a91.263971 91.263971 0 0 1-68.447979-27.711991c-18.847994-18.303994-28.095991-47.231985-27.711991-86.847973z m62.55998 24.863992c7.103998 24.799992 25.215992 37.343988 54.271983 37.663989 27.103992-0.288 44.703986-11.327996 52.831984-33.11999 3.135999-8.383997 2.655999-29.599991-1.28-38.559988-8.607997-19.615994-25.791992-29.695991-51.551984-30.20799-28.383991 0.576-46.303986 12.639996-53.759983 36.159988a58.719982 58.719982 0 0 0-0.512 28.063991z m390.335878 115.711964v-116.895963c-1.12-41.311987-20.447994-62.335981-57.983981-63.07198-37.727988 0.768-56.959982 21.791993-57.695982 63.07198v116.895963c0.768 41.663987 19.999994 62.68798 57.695982 63.071981 37.535988-0.384 56.863982-21.407993 57.983981-63.071981z m-174.815945 3.391999v-123.935961c0.384-38.079988 12.543996-67.423979 36.479989-87.967973 22.431993-20.351994 49.215985-30.55999 80.319975-30.55999 32.06399 0 59.295981 10.175997 81.759974 30.55999 22.815993 20.543994 34.591989 49.887984 35.359989 87.967973v123.935961c-0.768 37.887988-12.543996 67.135979-35.359989 87.679973-22.431993 20.351994-49.695984 30.75199-81.759974 31.10399-31.10399-0.384-57.887982-10.751997-80.319975-31.10399-23.935993-20.543994-36.127989-49.791984-36.479989-87.679973zM188.159941 115.392284A509.887841 509.887841 0 0 1 511.99984 0.00032c282.783912 0 511.99984 229.215928 511.99984 511.99984s-229.215928 511.99984-511.99984 511.99984S0 794.784072 0 512.00016c0-3.743999 0.032-7.455998 0.128-11.167997 1.631999-11.295996 8.159997-27.103992 31.87199-27.103991 27.487991 0 31.67999 21.247993 32.03199 32.06399L63.99998 509.920161a30.62399 30.62399 0 0 1-0.16 2.079999H63.99998c0 247.423923 200.575937 447.99986 447.99986 447.99986s447.99986-200.575937 447.99986-447.99986S759.423763 64.0003 511.99984 64.0003a446.079861 446.079861 0 0 0-277.439913 96.22397l94.91197 91.679971c25.439992 24.607992 17.439995 44.991986-17.887994 45.599986L123.551961 300.800226a64.31998 64.31998 0 0 1-65.055979-62.84798l-3.295999-188.127942C54.591983 15.040315 74.687977 5.792318 100.127969 30.368311l87.999972 85.023973z",fill:""},null)]),(0,o.Wm)("symbol",{id:"icon-resize",viewBox:"0 0 1024 1024"},[(0,o.Wm)("path",{d:"M456.036919 791.8108 270.553461 791.8108 460.818829 601.572038l-39.593763-39.567157L231.314785 751.915162l0.873903-183.953615c0-15.465227-12.515035-27.981285-27.981285-27.981285s-27.981285 12.515035-27.981285 27.981285l0 251.829516c0 8.3072 3.415796 14.975063 8.826016 19.564591 5.082762 5.192256 12.132318 8.416693 19.947308 8.416693l251.036453 0c15.46625 0 27.981285-12.514012 27.981285-27.981285C484.018204 804.325835 471.504192 791.8108 456.036919 791.8108zM838.945819 184.644347c-5.082762-5.191232-12.132318-8.416693-19.947308-8.416693L567.961034 176.227654c-15.46625 0-27.981285 12.515035-27.981285 27.981285 0 15.46625 12.514012 27.981285 27.981285 27.981285l185.483458 0L563.206754 422.427962l39.567157 39.567157 189.910281-189.910281-0.873903 183.953615c0 15.46625 12.514012 27.981285 27.981285 27.981285s27.981285-12.514012 27.981285-27.981285L847.772858 204.208938C847.771835 195.902762 844.356039 189.234899 838.945819 184.644347zM847.771835 64.303538 176.227142 64.303538c-61.809741 0-111.924115 50.115398-111.924115 111.924115l0 671.544693c0 61.809741 50.114374 111.924115 111.924115 111.924115l671.544693 0c61.809741 0 111.924115-50.114374 111.924115-111.924115l0-671.544693C959.69595 114.418936 909.581576 64.303538 847.771835 64.303538zM903.733381 847.772346c0 30.878265-25.056676 55.962569-55.962569 55.962569L176.227142 903.734916c-30.90487 0-55.962569-25.084305-55.962569-55.962569l0-671.544693c0-30.9325 25.056676-55.962569 55.962569-55.962569l671.544693 0c30.90487 0 55.962569 25.03007 55.962569 55.962569L903.734404 847.772346z"},null)]),(0,o.Wm)("symbol",{id:"icon-img-broken",viewBox:"0 0 1024 1024"},[(0,o.Wm)("path",{d:"M810.666667 128H213.333333c-46.933333 0-85.333333 38.4-85.333333 85.333333v597.333334c0 46.933333 38.4 85.333333 85.333333 85.333333h597.333334c46.933333 0 85.333333-38.4 85.333333-85.333333V213.333333c0-46.933333-38.4-85.333333-85.333333-85.333333z m0 682.666667H213.333333v-195.413334l42.24 42.24 170.666667-170.666666 170.666667 170.666666 170.666666-170.24L810.666667 530.346667V810.666667z m0-401.493334l-43.093334-43.093333-170.666666 171.093333-170.666667-170.666666-170.666667 170.666666-42.24-42.666666V213.333333h597.333334v195.84z"},null)]),(0,o.Wm)("symbol",{id:"icon-prev",viewBox:"0 0 1024 1024"},[(0,o.Wm)("path",{d:"M784.652701 955.6957 346.601985 517.644983c-2.822492-2.822492-2.822492-7.902977 0-11.289967l439.179713-439.179713c6.77398-6.77398 10.725469-16.370452 10.725469-25.966924L796.507166 36.692393c0-20.32194-16.370452-36.692393-36.692393-36.692393l-4.515987 0c-9.596472 0-19.192944 3.951488-25.966924 10.725469L250.072767 489.420066c-12.418964 12.418964-12.418964 32.740904 0 45.159868l477.565601 477.565601c7.338479 7.338479 17.499449 11.854465 28.224917 11.854465l0 0c22.015436 0 40.079383-18.063947 40.079383-40.079383l0 0C796.507166 973.759647 791.99118 963.598677 784.652701 955.6957z"},null)]),(0,o.Wm)("symbol",{id:"icon-next",viewBox:"0 0 1024 1024"},[(0,o.Wm)("path",{d:"M246.121279 955.6957l438.050717-438.050717c2.822492-2.822492 2.822492-7.902977 0-11.289967L244.992282 67.175303c-6.77398-6.77398-10.725469-16.370452-10.725469-25.966924L234.266814 36.692393C234.266814 16.370452 250.637266 0 270.959206 0l4.515987 0c9.596472 0 19.192944 3.951488 25.966924 10.725469l478.694598 478.694598c12.418964 12.418964 12.418964 32.740904 0 45.159868l-477.565601 477.565601c-7.338479 7.338479-17.499449 11.854465-28.224917 11.854465l0 0c-22.015436 0-40.079383-18.063947-40.079383-40.079383l0 0C234.266814 973.759647 238.7828 963.598677 246.121279 955.6957z"},null)]),(0,o.Wm)("symbol",{id:"icon-zoomin",viewBox:"0 0 1024 1024"},[(0,o.Wm)("path",{d:"M725.504 652.864c46.4-61.44 71.744-136.448 71.744-218.752C797.248 230.464 632.768 64 430.656 64S64 230.464 64 434.112C64 639.36 228.48 805.76 430.656 805.76c86.656 0 164.48-30.144 227.52-81.088L889.984 960 960 891.264l-234.496-238.4z m-294.848 67.456c-155.776 0-282.624-128.896-282.624-286.208s126.848-286.208 282.624-286.208 282.624 128.896 282.624 286.208-126.912 286.208-282.624 286.208z"},null),(0,o.Wm)("path",{d:"M235.712 369.92h390.72v127.104H235.712z"},null),(0,o.Wm)("path",{d:"M367.488 238.144h127.104v390.72H367.488z"},null)]),(0,o.Wm)("symbol",{id:"icon-close",viewBox:"0 0 1024 1024"},[(0,o.Wm)("path",{d:"M570.24 512l259.2 259.2-58.88 58.24L512 570.24l-261.12 261.12-58.24-58.24L453.76 512 194.56 252.8l58.24-58.24L512 453.76l261.12-261.12 58.24 58.24z"},null)]),(0,o.Wm)("symbol",{id:"icon-zoomout",viewBox:"0 0 1024 1024"},[(0,o.Wm)("path",{d:"M725.504 652.864c46.4-61.44 71.744-136.448 71.744-218.752C797.248 230.464 632.768 64 430.656 64S64 230.464 64 434.112C64 639.36 228.48 805.76 430.656 805.76c86.656 0 164.48-30.144 227.52-81.088L889.984 960 960 891.264l-234.496-238.4z m-294.848 67.456c-155.776 0-282.624-128.896-282.624-286.208s126.848-286.208 282.624-286.208 282.624 128.896 282.624 286.208-126.912 286.208-282.624 286.208z"},null),(0,o.Wm)("path",{d:"M235.712 369.92h390.72v127.104H235.712z"},null)])])}),R=M?window:global;let N=Date.now();function U(e){const t=Date.now(),l=Math.max(0,16-(t-N)),o=setTimeout(e,l);return N=t+l,o}function q(e){return(R.requestAnimationFrame||U).call(R,e)}function V(e){(R.cancelAnimationFrame||R.clearTimeout).call(R,e)}function K(e,t){const l=e.clientX-t.clientX,o=e.clientY-t.clientY;return Math.sqrt(l*l+o*o)}function J(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!(0,o.lA)(e)}var Q=(0,o.aZ)({name:"VueEasyLightbox",props:{imgs:{type:[Array,String],default:()=>""},visible:{type:Boolean,default:!1},index:{type:Number,default:0},scrollDisabled:{type:Boolean,default:!0},escDisabled:{type:Boolean,default:!1},moveDisabled:{type:Boolean,default:!1},titleDisabled:{type:Boolean,default:!1},maskClosable:{type:Boolean,default:!0},teleport:{type:[String,Object],default:null},swipeTolerance:{type:Number,default:50},loop:{type:Boolean,default:!1},rtl:{type:Boolean,default:!1},zoomScale:{type:Number,default:.12},maxZoom:{type:Number,default:3},minZoom:{type:Number,default:.1},rotateDisabled:{type:Boolean,default:!1},zoomDisabled:{type:Boolean,default:!1},pinchDisabled:{type:Boolean,default:!1}},emits:{hide:()=>!0,"on-error":e=>!0,"on-prev":(e,t)=>!0,"on-next":(e,t)=>!0,"on-prev-click":(e,t)=>!0,"on-next-click":(e,t)=>!0,"on-index-change":(e,t)=>!0,"on-rotate":e=>!0},setup(e,t){let{emit:l,slots:a}=t;const{imgRef:n,imgState:i,setImgSize:r}=(()=>{const e=(0,k.iH)(),t=(0,k.qj)({width:0,height:0,maxScale:1});return{imgRef:e,imgState:t,setImgSize:()=>{if(e.value){const{width:l,height:o,naturalWidth:a}=e.value;t.maxScale=a/l,t.width=l,t.height=o}}}})(),s=(0,k.iH)(0),c=(0,k.iH)(""),d=(0,k.qj)({scale:1,lastScale:1,rotateDeg:0,top:0,left:0,initX:0,initY:0,lastX:0,lastY:0,touches:[]}),u=(0,k.qj)({loadError:!1,loading:!1,dragging:!1,gesturing:!1,wheeling:!1}),m=(0,o.Fl)((()=>{return t=e.imgs,T("Array")(t)?e.imgs.map((e=>"string"==typeof e?{src:e}:function(e){return X(e)&&I(e.src)}(e)?e:void 0)).filter($):I(e.imgs)?[{src:e.imgs}]:[];var t})),p=(0,o.Fl)((()=>{const e=m.value[s.value]?.src;return e})),b=(0,o.Fl)((()=>m.value[s.value]?.title)),g=(0,o.Fl)((()=>m.value[s.value]?.alt)),v=(0,o.Fl)((()=>({cursor:u.loadError?"default":e.moveDisabled?u.dragging?"grabbing":"grab":"move",top:`calc(50% + ${d.top}px)`,left:`calc(50% + ${d.left}px)`,transition:u.dragging||u.gesturing?"none":"",transform:`translate(-50%, -50%) scale(${d.scale}) rotate(${d.rotateDeg}deg)`}))),f=()=>{l("hide")},h=()=>{d.scale=1,d.lastScale=1,d.rotateDeg=0,d.top=0,d.left=0,u.loadError=!1,u.dragging=!1,u.loading=!0},w=(t,a)=>{const n=s.value;h(),s.value=t,m.value[s.value]===m.value[t]&&(0,o.Y3)((()=>{u.loading=!1})),e.visible&&n!==t&&(a&&a(n,t),l("on-index-change",n,t))},x=()=>{const t=s.value,o=e.loop?(t+1)%m.value.length:t+1;!e.loop&&o>m.value.length-1||w(o,((e,t)=>{l("on-next",e,t),l("on-next-click",e,t)}))},y=()=>{const t=s.value;let o=t-1;if(0===t){if(!e.loop)return;o=m.value.length-1}w(o,((e,t)=>{l("on-prev",e,t),l("on-prev-click",e,t)}))},_=e=>{Math.abs(1-e)<.05?e=1:Math.abs(i.maxScale-e)<.05&&(e=i.maxScale),d.lastScale=d.scale,d.scale=e},W=()=>{const t=d.scale+e.zoomScale;t<i.maxScale*e.maxZoom&&_(t)},C=()=>{const t=d.scale-e.zoomScale;t>e.minZoom&&_(t)},M=()=>{const e=d.rotateDeg%360;l("on-rotate",Math.abs(e<0?e+360:e))},Y=()=>{d.rotateDeg-=90,M()},L=()=>{d.rotateDeg+=90,M()},j=()=>{d.scale=1,d.top=0,d.left=0},R=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return!e.moveDisabled&&0===t},{onMouseDown:N,onMouseMove:U,onMouseUp:Q}=((e,t,l)=>{let o,a=!1;return{onMouseDown:l=>{e.initX=e.lastX=l.clientX,e.initY=e.lastY=l.clientY,t.dragging=!0,a=!1,l.stopPropagation()},onMouseUp:e=>{l(e.button)&&V(o),t.dragging=!1,a=!1},onMouseMove:n=>{if(t.dragging)if(l(n.button)){if(a)return;a=!0,o=q((()=>{const{top:t,left:l,lastY:o,lastX:i}=e;e.top=t-o+n.clientY,e.left=l-i+n.clientX,e.lastX=n.clientX,e.lastY=n.clientY,a=!1}))}else e.lastX=n.clientX,e.lastY=n.clientY;n.stopPropagation()}}})(d,u,R),{onTouchStart:G,onTouchMove:ee,onTouchEnd:te}=((e,t,l,o,a)=>{let n,i=!1;return{onTouchStart:e=>{const{touches:o}=e;o.length>1&&a()?(l.gesturing=!0,t.touches=o):(t.initX=t.lastX=o[0].clientX,t.initY=t.lastY=o[0].clientY,l.dragging=!0),e.stopPropagation()},onTouchMove:r=>{if(i)return;const{touches:s}=r,{lastX:c,lastY:d,left:u,top:m,scale:p}=t;if(!l.gesturing&&l.dragging){if(!s[0])return;const{clientX:e,clientY:l}=s[0];o()?n=q((()=>{t.lastX=e,t.lastY=l,t.top=m-d+l,t.left=u-c+e,i=!1})):(t.lastX=e,t.lastY=l)}else l.gesturing&&t.touches.length>1&&s.length>1&&a()&&(n=q((()=>{const l=(K(t.touches[0],t.touches[1])-K(s[0],s[1]))/e.width;t.touches=s;const o=p-1.3*l;o>.5&&o<1.5*e.maxScale&&(t.scale=o),i=!1})))},onTouchEnd:()=>{V(n),l.dragging=!1,l.gesturing=!1,i=!1}}})(i,d,u,R,(()=>!e.pinchDisabled)),le=()=>{d.scale!==i.maxScale?(d.lastScale=d.scale,d.scale=i.maxScale):d.scale=d.lastScale},oe=t=>{u.loadError||u.gesturing||u.loading||u.dragging||u.wheeling||!e.scrollDisabled||e.zoomDisabled||(u.wheeling=!0,setTimeout((()=>{u.wheeling=!1}),80),t.deltaY<0?W():C())},ae=t=>{const l=t;e.visible&&(!e.escDisabled&&"Escape"===l.key&&e.visible&&f(),"ArrowLeft"===l.key&&(e.rtl?x():y()),"ArrowRight"===l.key&&(e.rtl?y():x()))},ne=()=>{e.maskClosable&&f()},ie=()=>{r()},re=()=>{u.loading=!1},se=e=>{u.loading=!1,u.loadError=!0,l("on-error",e)},ce=()=>{e.visible&&r()};(0,o.YP)((()=>e.index),(e=>{e<0||e>=m.value.length||w(e)})),(0,o.YP)((()=>u.dragging),((t,l)=>{const o=!t&&l;if(!R()&&o){const t=d.lastX-d.initX,l=d.lastY-d.initY,o=e.swipeTolerance;Math.abs(t)>Math.abs(l)&&(t<-1*o?x():t>o&&y())}})),(0,o.YP)((()=>e.visible),(t=>{if(t){h();const t=m.value.length;if(0===t)return s.value=0,u.loading=!1,void(0,o.Y3)((()=>u.loadError=!0));s.value=e.index>=t?t-1:e.index<0?0:e.index,e.scrollDisabled&&de()}else e.scrollDisabled&&ue()}));const de=()=>{document&&(c.value=document.body.style.overflowY,document.body.style.overflowY="hidden")},ue=()=>{document&&(document.body.style.overflowY=c.value)};(0,o.bv)((()=>{B(document,"keydown",ae),B(window,"resize",ce)})),(0,o.Jd)((()=>{E(document,"keydown",ae),E(window,"resize",ce),ue()}));const me=()=>u.loading?a.loading?a.loading({key:"loading"}):(0,o.Wm)(P,{key:"img-loading"},null):u.loadError?a.onerror?a.onerror({key:"onerror"}):(0,o.Wm)(O,{key:"img-on-error"},null):(0,o.Wm)("div",{class:`${D}-img-wrapper`,style:v.value,key:"img-wrapper"},[(0,o.Wm)("img",{alt:g.value,ref:n,draggable:"false",class:`${D}-img`,src:p.value,onMousedown:N,onMouseup:Q,onMousemove:U,onTouchstart:G,onTouchmove:ee,onTouchend:te,onLoad:ie,onDblclick:le,onDragstart:e=>{e.preventDefault()}},null)]),pe=()=>{if(a["prev-btn"])return a["prev-btn"]({prev:y});if(m.value.length<=1)return;const t=!e.loop&&s.value<=0;return(0,o.Wm)("div",{role:"button","aria-label":"previous image button",class:"btn__prev "+(t?"disable":""),onClick:y},[e.rtl?(0,o.Wm)(S,{type:"next"},null):(0,o.Wm)(S,{type:"prev"},null)])},be=()=>{if(a["next-btn"])return a["next-btn"]({next:x});if(m.value.length<=1)return;const t=!e.loop&&s.value>=m.value.length-1;return(0,o.Wm)("div",{role:"button","aria-label":"next image button",class:"btn__next "+(t?"disable":""),onClick:x},[e.rtl?(0,o.Wm)(S,{type:"prev"},null):(0,o.Wm)(S,{type:"next"},null)])},ge=()=>{if(b.value&&!e.titleDisabled&&!u.loading&&!u.loadError)return a.title?a.title():(0,o.Wm)(Z,null,{default:()=>[b.value]})},ve=()=>{let t;if(e.visible)return(0,o.Wm)("div",{onTouchmove:H,class:[`${D}-modal`,e.rtl?"is-rtl":""],onClick:(0,z.iM)(ne,["self"]),onWheel:oe},[(0,o.Wm)(A,null,null),(0,o.Wm)(z.uT,{name:`${D}-fade`,mode:"out-in"},J(t=me())?t:{default:()=>[t]}),(0,o.Wm)("img",{style:"display:none;",src:p.value,onError:se,onLoad:re},null),(0,o.Wm)("div",{class:`${D}-btns-wrapper`},[pe(),be(),ge(),a["close-btn"]?a["close-btn"]({close:f}):(0,o.Wm)("div",{role:"button","aria-label":"close image preview button",class:"btn__close",onClick:f},[(0,o.Wm)(S,{type:"close"},null)]),a.toolbar?a.toolbar({toolbarMethods:{zoomIn:W,zoomOut:C,rotate:Y,rotateLeft:Y,rotateRight:L,resize:j},zoomIn:W,zoomOut:C,rotate:Y,rotateLeft:Y,rotateRight:L,resize:j}):(0,o.Wm)(F,{zoomIn:W,zoomOut:C,resize:j,rotateLeft:Y,rotateRight:L,rotateDisabled:e.rotateDisabled,zoomDisabled:e.zoomDisabled},null)])])};return()=>{let t;if(e.teleport){let t;return(0,o.Wm)(o.lR,{to:e.teleport},{default:()=>[(0,o.Wm)(z.uT,{name:`${D}-fade`},J(t=ve())?t:{default:()=>[t]})]})}return(0,o.Wm)(z.uT,{name:`${D}-fade`},J(t=ve())?t:{default:()=>[t]})}}});const G=Object.assign(Q,{install:e=>{e.component(Q.name,Q)}});var ee={components:{Layout:_.Z,PageHeader:W.Z,VueEasyLightbox:G},data(){return{title:"Lightbox",items:[{text:"UI Elements"},{text:"Lightbox",active:!0}],visible:!1,singleImage:!1,visibleCaption:!1,index:0,imgs:[l(7676),l(2382),l(3883),l(8799),l(1407),l(3328)],captionimgs:[{src:l(3883),title:"Caption 1"},{src:l(1020),title:"Caption 2"}]}},methods:{showImg(e){this.index=e,this.visible=!0},handleHide(){this.visible=!1},showCaptiomImg(e){this.index=e,this.visibleCaption=!0},handleCaptionHide(){this.visibleCaption=!1}},middleware:"authentication"},te=l(3744);const le=(0,te.Z)(ee,[["render",y]]);var oe=le},7676:function(e,t,l){e.exports=l.p+"img/img-1.cad60acf.jpg"},2382:function(e,t,l){e.exports=l.p+"img/img-2.0f2150e5.jpg"},3883:function(e,t,l){e.exports=l.p+"img/img-3.58905ca7.jpg"},8799:function(e,t,l){e.exports=l.p+"img/img-4.e5bf7bdb.jpg"},1407:function(e,t,l){e.exports=l.p+"img/img-5.b8caa1a6.jpg"},3328:function(e,t,l){e.exports=l.p+"img/img-6.f0213121.jpg"},1020:function(e,t,l){e.exports=l.p+"img/img-7.95bb300f.jpg"}}]);
//# sourceMappingURL=254.dfcd769c.js.map