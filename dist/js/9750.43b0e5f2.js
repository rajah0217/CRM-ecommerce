"use strict";(self["webpackChunkminible"]=self["webpackChunkminible"]||[]).push([[9750],{79:function(e,l,a){a.d(l,{Z:function(){return b}});var t=a(6252),o=a(3577),i=a(9963);const r={class:"dz-message needsclick mt-5"},s={class:"mb-3"},d={key:0,class:"display-4 text-muted uil uil-cloud-upload"},c={key:1,class:"bi bi-cloud-download fs-1"},n={key:0,class:"fs-md mb-0"},u={key:1},m=["for"],p=["id","multiple"];function f(e,l,a,f,g,v){return(0,t.wg)(),(0,t.iD)("div",{class:(0,o.C_)([[{"active-dropzone":g.active},a.dropzoneClass],"dropzone text-center dz-clickable"]),onDragenter:l[0]||(l[0]=(0,i.iM)(((...e)=>v.toggleActive&&v.toggleActive(...e)),["prevent"])),onDragleave:l[1]||(l[1]=(0,i.iM)(((...e)=>v.toggleActive&&v.toggleActive(...e)),["prevent"])),onDragover:l[2]||(l[2]=(0,i.iM)((()=>{}),["prevent"])),onDrop:l[3]||(l[3]=(0,i.iM)(((...e)=>v.toggleActive&&v.toggleActive(...e)),["prevent"]))},[(0,t._)("div",r,[(0,t._)("div",s,["remix"==a.cloudIcon?((0,t.wg)(),(0,t.iD)("i",d)):(0,t.kq)("",!0),"bootstrap"==a.cloudIcon?((0,t.wg)(),(0,t.iD)("i",c)):(0,t.kq)("",!0)]),"bootstrap"==a.cloudIcon?((0,t.wg)(),(0,t.iD)("h5",n," Drop files here or click to upload. ")):(0,t.kq)("",!0),"remix"==a.cloudIcon?((0,t.wg)(),(0,t.iD)("h4",u," Drop "+(0,o.zw)(a.files)+" here or click to upload. ",1)):(0,t.kq)("",!0),(0,t._)("label",{for:a.dropzoneFile,class:"stretched-link"},null,8,m),(0,t._)("input",{type:"file",id:a.dropzoneFile,class:(0,o.C_)(["btn btn-primary d-none",a.dropzoneFile]),multiple:a.isMultiple,accept:".jpg,.jpeg,.png,.tiff,.webp"},null,10,p)])],34)}var g={name:"dropzone",props:{files:{type:String,default:""},cloudIcon:{type:String,default:""},dropzoneClass:{type:String,default:""},dropzoneFile:{type:String,default:"dropzoneFile"},isMultiple:{type:Boolean,default:!1}},data(){return{active:!1}},methods:{toggleActive(){this.active=!this.active}}},v=a(3744);const _=(0,v.Z)(g,[["render",f]]);var b=_},7054:function(e,l,a){a.r(l),a.d(l,{default:function(){return J}});var t=a(6252),o=a(9963),i=a(3577),r=a(2381);const s={id:"addproduct-accordion",class:"custom-accordion"},d={href:"javascript: void(0);",class:"text-dark","data-toggle":"collapse","aria-expanded":"true","aria-controls":"addproduct-billinginfo-collapse"},c=(0,t._)("div",{class:"p-4"},[(0,t._)("div",{class:"d-flex align-items-center"},[(0,t._)("div",{class:"flex-shrink-0 me-3"},[(0,t._)("div",{class:"avatar-xs"},[(0,t._)("div",{class:"avatar-title rounded-circle bg-primary-subtle text-primary"}," 01 ")])]),(0,t._)("div",{class:"media-body flex-grow-1 overflow-hidden"},[(0,t._)("h5",{class:"font-size-16 mb-1"},"Billing Info"),(0,t._)("p",{class:"text-muted text-truncate mb-0"}," Fill all information below ")]),(0,t._)("i",{class:"mdi mdi-chevron-up accor-down-icon font-size-24"})])],-1),n=[c],u={class:"p-4 border-top"},m=(0,t._)("div",{class:"mb-3"},[(0,t._)("label",{for:"productname"},"Product Name"),(0,t._)("input",{id:"productname",name:"productname",type:"text",class:"form-control",placeholder:"Enter your Product Name"})],-1),p=(0,t._)("div",{class:"mb-3"},[(0,t._)("label",{for:"manufacturername"},"Manufacturer Name"),(0,t._)("input",{id:"manufacturername",name:"manufacturername",type:"text",class:"form-control",placeholder:"Enter your Manufacturer Name"})],-1),f=(0,t._)("div",{class:"mb-3"},[(0,t._)("label",{for:"manufacturerbrand"},"Manufacturer Brand"),(0,t._)("input",{id:"manufacturerbrand",name:"manufacturerbrand",type:"text",class:"form-control",placeholder:"Enter your Manufacturer Brand"})],-1),g=(0,t._)("div",{class:"mb-3"},[(0,t._)("label",{for:"price"},"Price"),(0,t._)("input",{id:"price",name:"price",type:"text",class:"form-control",placeholder:"Enter your Price"})],-1),v=(0,t._)("div",{class:"mb-3"},[(0,t._)("label",{class:"control-label"},"Category"),(0,t._)("select",{class:"form-control select2"},[(0,t._)("option",null,"Select"),(0,t._)("option",{value:"EL"},"Electronic"),(0,t._)("option",{value:"FA"},"Fashion"),(0,t._)("option",{value:"FI"},"Fitness")])],-1),_={class:"mb-3"},b=(0,t._)("label",{class:"control-label"},"Specifications",-1),y=(0,t._)("div",{class:"mb-3 mb-0"},[(0,t._)("label",{for:"productdesc"},"Product Description"),(0,t._)("textarea",{class:"form-control",id:"productdesc",rows:"4",placeholder:"Enter your Product Description"})],-1),w={href:"javascript: void(0);",class:"text-dark collapsed","data-toggle":"collapse","aria-expanded":"false","aria-controls":"addproduct-img-collapse"},h=(0,t._)("div",{class:"p-4"},[(0,t._)("div",{class:"d-flex align-items-center"},[(0,t._)("div",{class:"me-3"},[(0,t._)("div",{class:"avatar-xs"},[(0,t._)("div",{class:"avatar-title rounded-circle bg-primary-subtle text-primary"}," 02 ")])]),(0,t._)("div",{class:"media-body flex-grow-1 overflow-hidden"},[(0,t._)("h5",{class:"font-size-16 mb-1"},"Product Image"),(0,t._)("p",{class:"text-muted text-truncate mb-0"}," Fill all information below ")]),(0,t._)("i",{class:"mdi mdi-chevron-up accor-down-icon font-size-24"})])],-1),D=[h],x={class:"p-4 border-top"},A={class:"list-unstyled mb-0",id:"dropzone-preview2"},z={class:"mt-2",id:"dropzone-preview-list2"},k={class:"d-flex p-2"},F=(0,t._)("div",{class:"flex-shrink-0 me-3"},[(0,t._)("div",{class:"avatar-sm bg-light rounded"},[(0,t._)("img",{class:"img-fluid rounded d-block",src:r,alt:"Dropzone-Image"})])],-1),M={class:"flex-grow-1"},W={class:"pt-1"},C={class:"fs-md mb-1"},E={class:"fs-sm text-muted mb-0"},B=(0,t._)("strong",{class:"error text-danger"},null,-1),S={class:"flex-shrink-0 ms-3"},P={href:"javascript: void(0);",class:"text-dark collapsed"},Q=(0,t._)("div",{class:"p-4"},[(0,t._)("div",{class:"d-flex align-items-center"},[(0,t._)("div",{class:"me-3"},[(0,t._)("div",{class:"avatar-xs"},[(0,t._)("div",{class:"avatar-title rounded-circle bg-primary-subtle text-primary"}," 03 ")])]),(0,t._)("div",{class:"media-body flex-grow-1 overflow-hidden"},[(0,t._)("h5",{class:"font-size-16 mb-1"},"Meta Data"),(0,t._)("p",{class:"text-muted text-truncate mb-0"}," Fill all information below ")]),(0,t._)("i",{class:"mdi mdi-chevron-up accor-down-icon font-size-24"})])],-1),U=[Q],I={class:"p-4 border-top"},K=(0,t._)("div",{class:"mb-3"},[(0,t._)("label",{for:"metatitle"},"Meta title"),(0,t._)("input",{id:"metatitle",name:"metatitle",type:"text",class:"form-control",placeholder:"Enter your Meta title"})],-1),N=(0,t._)("div",{class:"mb-3"},[(0,t._)("label",{for:"metakeywords"},"Meta Keywords"),(0,t._)("input",{id:"metakeywords",name:"metakeywords",type:"text",class:"form-control",placeholder:"Enter your Meta Keywords"})],-1),T=(0,t._)("div",{class:"mb-3 mb-0"},[(0,t._)("label",{for:"metadescription"},"Meta Description"),(0,t._)("textarea",{class:"form-control",id:"metadescription",rows:"4",placeholder:"Enter your Meta Description"})],-1),j=(0,t._)("a",{href:"#",class:"btn btn-danger"},[(0,t._)("i",{class:"uil uil-times me-1"}),(0,t.Uk)(" Cancel ")],-1),R=(0,t._)("a",{href:"#",class:"btn btn-success ms-1"},[(0,t._)("i",{class:"uil uil-file-alt me-1"}),(0,t.Uk)(" Save ")],-1);function Y(e,l,a,r,c,h){const Q=(0,t.up)("PageHeader"),Y=(0,t.up)("BCol"),Z=(0,t.up)("BRow"),H=(0,t.up)("Multiselect"),X=(0,t.up)("b-collapse"),q=(0,t.up)("BCard"),L=(0,t.up)("DropZone"),V=(0,t.up)("BButton"),G=(0,t.up)("BCollapse"),J=(0,t.up)("Layout"),O=(0,t.Q2)("b-toggle");return(0,t.wg)(),(0,t.j4)(J,null,{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{title:c.title,items:c.items},null,8,["title","items"]),(0,t.Wm)(Z,null,{default:(0,t.w5)((()=>[(0,t.Wm)(Y,{lg:"12"},{default:(0,t.w5)((()=>[(0,t._)("div",s,[(0,t.Wm)(q,{"no-body":""},{default:(0,t.w5)((()=>[(0,t.wy)(((0,t.wg)(),(0,t.iD)("a",d,n)),[[O,void 0,void 0,{"accordion-1":!0}]]),(0,t.Wm)(X,{"data-parent":"#addproduct-accordion",id:"accordion-1",visible:"",accordion:"my-accordion"},{default:(0,t.w5)((()=>[(0,t._)("div",u,[(0,t._)("form",null,[m,(0,t.Wm)(Z,null,{default:(0,t.w5)((()=>[(0,t.Wm)(Y,{lg:"4"},{default:(0,t.w5)((()=>[p])),_:1}),(0,t.Wm)(Y,{lg:"4"},{default:(0,t.w5)((()=>[f])),_:1}),(0,t.Wm)(Y,{lg:"4"},{default:(0,t.w5)((()=>[g])),_:1})])),_:1}),(0,t.Wm)(Z,null,{default:(0,t.w5)((()=>[(0,t.Wm)(Y,{md:"6"},{default:(0,t.w5)((()=>[v])),_:1}),(0,t.Wm)(Y,{md:"6"},{default:(0,t.w5)((()=>[(0,t._)("div",_,[b,(0,t.Wm)(H,{modelValue:c.value1,"onUpdate:modelValue":l[0]||(l[0]=e=>c.value1=e),options:c.options,mode:"tags",class:"form-control p-0","close-on-select":!1},null,8,["modelValue","options"])])])),_:1})])),_:1}),y])])])),_:1})])),_:1}),(0,t.Wm)(q,{"no-body":""},{default:(0,t.w5)((()=>[(0,t.wy)(((0,t.wg)(),(0,t.iD)("a",w,D)),[[O,void 0,void 0,{"accordion-2":!0}]]),(0,t.Wm)(G,{id:"accordion-2",accordion:"my-accordion","data-parent":"#addproduct-accordion"},{default:(0,t.w5)((()=>[(0,t._)("div",x,[(0,t.Wm)(L,{files:"files",cloudIcon:"remix",dropzoneFile:"galleryDropzoneFile",isMultiple:!0,onDrop:(0,o.iM)(h.galleryDrop,["prevent"]),onChange:h.gallerySelectedFile},null,8,["onDrop","onChange"]),(0,t._)("ul",A,[(0,t._)("li",z,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(c.galleryFiles,((e,l)=>((0,t.wg)(),(0,t.iD)("div",{class:"border rounded mb-1",key:l},[(0,t._)("div",k,[F,(0,t._)("div",M,[(0,t._)("div",W,[(0,t._)("h5",C,"   "+(0,i.zw)(e.name),1),(0,t._)("p",E,[(0,t._)("strong",null,(0,i.zw)(e.size/1024),1),(0,t.Uk)(" KB ")]),B])]),(0,t._)("div",S,[(0,t.Wm)(V,{size:"sm",variant:"danger",onClick:()=>h.deleteRecord(e)},{default:(0,t.w5)((()=>[(0,t.Uk)("Delete")])),_:2},1032,["onClick"])])])])))),128))])])])])),_:1})])),_:1}),(0,t.Wm)(q,{"no-body":""},{default:(0,t.w5)((()=>[(0,t.wy)(((0,t.wg)(),(0,t.iD)("a",P,U)),[[O,void 0,void 0,{"accordion-3":!0}]]),(0,t.Wm)(G,{id:"accordion-3",accordion:"my-accordion","data-parent":"#addproduct-accordion"},{default:(0,t.w5)((()=>[(0,t._)("div",I,[(0,t._)("form",null,[(0,t.Wm)(Z,null,{default:(0,t.w5)((()=>[(0,t.Wm)(Y,{"sm-":"6"},{default:(0,t.w5)((()=>[K])),_:1}),(0,t.Wm)(Y,{sm:"6"},{default:(0,t.w5)((()=>[N])),_:1})])),_:1}),T])])])),_:1})])),_:1})])])),_:1})])),_:1}),(0,t.Wm)(Z,{class:"mb-4"},{default:(0,t.w5)((()=>[(0,t.Wm)(Y,{class:"ms-1"},{default:(0,t.w5)((()=>[j,R])),_:1})])),_:1})])),_:1})}a(7658);var Z=a(7091),H=a(2399),X=a(1022),q=a(79),L={components:{DropZone:q.Z,Multiselect:Z.Z,Layout:H.Z,PageHeader:X.Z},data(){return{title:"Add Product",items:[{text:"Ecommerce"},{text:"Add Product",active:!0}],value1:null,options:["High Quality","Leather","Notifications","Sizes","Different Color"],galleryFiles:[],galleryDropzoneFile:""}},methods:{deleteRecord(e){e.id&&(this.galleryFiles=this.galleryFiles.filter((l=>l.id!=e.id)))},galleryDrop(e){this.galleryDropzoneFile=e.dataTransfer.files,this.galleryFiles.push(this.galleryDropzoneFile)},gallerySelectedFile(){this.galleryDropzoneFile=document.querySelector(".galleryDropzoneFile").files;const e=Object.values(this.galleryDropzoneFile).map((e=>({name:e.name,lastModified:e.lastModified,lastModifiedDate:e.lastModifiedDate,webkitRelativePath:e.webkitRelativePath,size:e.size})));this.galleryFiles.push(...e),this.galleryFiles=this.galleryFiles.map(((e,l)=>({id:l+1,...e})))}},middleware:"authentication"},V=a(3744);const G=(0,V.Z)(L,[["render",Y]]);var J=G},2381:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAA+klEQVR4nO1ZSw6CUAzkGpzKSDyLhzDBV0+En1XLzpsYXbQrDQGNMTEE0FfQmWTWzHSmfQuSBAAAYNRYl7og0T2xXkjsGoVcfUt3QTQbJD6wUTTR8pb5gMm7i782icx7TF8P7sKlZmDddjYQtfPSauDc3cAIhNMTYYCQgI2rQuny+FESDLzAu/OEKyTf3QH3BNKpGyDsgE27QngH2uDdecISy4+f0XTqBgg7YNOuEN6BNnh3nrDE4j91+uszGljP3qKpYRA99UhAd97C6U62onsCopm7cKm5KXXW2UCdguXe4olt1Uv8wwTrvIow+i8mtqL35AEAAJJYuAH+VvCKQX6pigAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=9750.43b0e5f2.js.map