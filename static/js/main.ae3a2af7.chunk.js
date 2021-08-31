(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports={SearchForm:"Searchbar_SearchForm__2T1y7",SearchFormButton:"Searchbar_SearchFormButton__2CuQI",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__1W0Qp",SearchFormInput:"Searchbar_SearchFormInput__3nGO9"}},,,function(e,t,a){e.exports={Overlay:"Modal_Overlay__1hVhU",Modal:"Modal_Modal__7lzE3"}},function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1SESF",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__28SG8"}},,,function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__AplHX"}},function(e,t,a){e.exports={wrap:"ImageNotFound_wrap__1hB0V"}},,function(e,t,a){e.exports={Button:"Button_Button__jtGcs"}},,,,,function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(6),o=a.n(c),i=(a(23),a(2)),s=a(3),l=a(5),u=a(4),h=a(7),m=(a(24),a(8)),j=a.n(m),d=a(1),p=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={imageName:""},e.handleNameChange=function(t){e.setState({imageName:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.imageName)},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(d.jsx)("header",{className:j.a.Searchbar,children:Object(d.jsxs)("form",{className:j.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(d.jsx)("button",{type:"submit",className:j.a.SearchFormButton,children:Object(d.jsx)("span",{className:j.a.SearchFormButtonLabel,children:"Search"})}),Object(d.jsx)("input",{className:j.a.SearchFormInput,type:"text",name:"imageName",value:this.state.imageName,onChange:this.handleNameChange,placeholder:"Search images and photos"})]})})}}]),a}(r.Component),g=a(13),b=(a(26),a(15)),O=a.n(b),x=a(10),f=a.n(x);function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a="22421278-3374a5bf35dcd0f85e00cdc81",r="https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(e.pictureName||e,"&page=").concat(t,"&per_page=12&key=").concat(a);return fetch(r).then((function(t){return t.ok?t.json():Promise.reject(new Error("Image not found ".concat(e)))}))}y.propTypes={searchQuery:f.a.string,page:f.a.number};var v=a(11),w=a.n(v),S=document.querySelector("#modal-root"),I=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).clickEscape=function(t){"Escape"===t.code&&e.props.onClose()},e.clickOnOverlay=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.clickEscape)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.clickEscape)}},{key:"render",value:function(){return Object(c.createPortal)(Object(d.jsx)("div",{className:w.a.Overlay,onClick:this.clickOnOverlay,children:Object(d.jsx)("div",{className:w.a.Modal,children:this.props.children})}),S)}}]),a}(r.Component),_=a(12),N=a.n(_),k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.showModal,t=this.props,a=t.imageURL,r=t.tags,n=t.largeImg;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("li",{className:N.a.ImageGalleryItem,onClick:this.toggleModal,children:Object(d.jsx)("img",{src:a,alt:r,className:N.a.ImageGalleryItemImage})}),e&&Object(d.jsx)(I,{onClose:this.toggleModal,children:Object(d.jsx)("img",{src:n,alt:r})})]})}}]),a}(r.Component),F=a.p+"static/media/sadCat.c32810d8.jpg",C=a(16),L=a.n(C);function G(){return Object(d.jsx)("div",{className:L.a.wrap,children:Object(d.jsx)("img",{src:F,alt:"sad cat",width:"450"})})}var M=a(14),B=a(17),E=function(e){return Object(d.jsxs)(B.a,Object(M.a)(Object(M.a)({width:800,height:575,viewBox:"0 0 800 575",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb"},e),{},{children:[Object(d.jsx)("rect",{x:"537",y:"9",rx:"2",ry:"2",width:"140",height:"10"}),Object(d.jsx)("rect",{x:"14",y:"30",rx:"2",ry:"2",width:"667",height:"11"}),Object(d.jsx)("rect",{x:"12",y:"58",rx:"2",ry:"2",width:"211",height:"211"}),Object(d.jsx)("rect",{x:"240",y:"57",rx:"2",ry:"2",width:"211",height:"211"}),Object(d.jsx)("rect",{x:"467",y:"56",rx:"2",ry:"2",width:"211",height:"211"}),Object(d.jsx)("rect",{x:"12",y:"283",rx:"2",ry:"2",width:"211",height:"211"}),Object(d.jsx)("rect",{x:"240",y:"281",rx:"2",ry:"2",width:"211",height:"211"}),Object(d.jsx)("rect",{x:"468",y:"279",rx:"2",ry:"2",width:"211",height:"211"}),Object(d.jsx)("circle",{cx:"286",cy:"536",r:"12"}),Object(d.jsx)("circle",{cx:"319",cy:"535",r:"12"}),Object(d.jsx)("circle",{cx:"353",cy:"535",r:"12"}),Object(d.jsx)("rect",{x:"378",y:"524",rx:"0",ry:"0",width:"52",height:"24"}),Object(d.jsx)("rect",{x:"210",y:"523",rx:"0",ry:"0",width:"52",height:"24"}),Object(d.jsx)("circle",{cx:"210",cy:"535",r:"12"}),Object(d.jsx)("circle",{cx:"428",cy:"536",r:"12"})]}))};E.metadata={name:"Hassan Tijani.A",github:"surepeps",description:"Image Grid with Pagination",filename:"ImageGrid"};var T=E,U=a(18),A=a.n(U);function P(e){var t=e.name,a=e.onLoadMore;return Object(d.jsx)("button",{className:A.a.Button,type:"button",onClick:a,children:t})}var R=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={pictures:null,page:1,status:"idle",error:null},e.clickOnLoad=function(){y(e.props.pictureName,e.state.page).then((function(t){var a=t.hits;e.setState((function(e){return{pictures:[].concat(Object(g.a)(e.pictures),Object(g.a)(a)),status:"resolved",page:e.page+1}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,r=this.props.pictureName,n=this.state.page;e.pictureName!==r&&(this.setState({status:"pending",page:1}),h.b.info(" Waiting... "),y({pictureName:r,page:n}).then((function(e){if(0===e.total)return h.b.error("Image ".concat(r," not found")),void a.setState({status:"reject"});a.setState((function(t){return{pictures:e.hits,status:"resolved",page:t.page+1}}))})).catch((function(e){return a.setState({error:"Image not found ".concat(r),status:"reject"})})))}},{key:"render",value:function(){var e=this.state,t=e.pictures,a=e.status;return"idle"===a?Object(d.jsx)(d.Fragment,{}):"pending"===a?Object(d.jsx)(T,{}):"reject"===a?Object(d.jsx)(G,{}):"resolved"===a?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("ul",{className:O.a.ImageGallery,children:t.map((function(e){return Object(d.jsx)(k,{largeImg:e.largeImageURL,imageURL:e.previewURL||e.webformatURL,tags:e.tags},e.id)}))}),Object(d.jsx)(P,{name:"Load more",onLoadMore:this.clickOnLoad})]}):void 0}}]),a}(r.Component),D=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={pictureName:e.props.initialName},e.handleFormSubmit=function(t){""!==t.trim()?e.setState({pictureName:t}):h.b.info(" Enter anything word! ")},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p,{onSubmit:this.handleFormSubmit}),Object(d.jsx)(R,{pictureName:this.state.pictureName}),Object(d.jsx)(h.a,{})]})}}]),a}(r.Component);D.defaultProps={initialName:""};var H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,30)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),r(e),n(e),c(e),o(e)}))};o.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(D,{})}),document.getElementById("root")),H()}],[[29,1,2]]]);
//# sourceMappingURL=main.ae3a2af7.chunk.js.map