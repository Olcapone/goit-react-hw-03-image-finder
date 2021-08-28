(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1SESF",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__28SG8"}},12:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__AplHX"}},18:function(e,t,a){},19:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(8),i=a.n(n),o=(a(18),a(3)),s=a(4),h=a(6),m=a(5),u=a(2),l=(a(19),a(7)),j=a.n(l),b=a(1),g=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={imageName:""},e.handleNameChange=function(t){e.setState({imageName:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.imageName)},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(b.jsx)("header",{className:j.a.Searchbar,children:Object(b.jsxs)("form",{className:j.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(b.jsx)("button",{type:"submit",className:j.a.SearchFormButton,children:Object(b.jsx)("span",{className:j.a.SearchFormButtonLabel,children:"Search"})}),Object(b.jsx)("input",{className:j.a.SearchFormInput,type:"text",name:"imageName",value:this.state.imageName,onChange:this.handleNameChange,placeholder:"Search images and photos"})]})})}}]),a}(r.Component),x=(a(21),a(10)),d=a.n(x);function p(e){var t=e.imageURL,a=e.tags;return Object(b.jsx)("li",{className:d.a.ImageGalleryItem,children:Object(b.jsx)("img",{src:t,alt:a,className:d.a.ImageGalleryItemImage})})}var y=a(12),f=a.n(y);function O(e){var t=e.images;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("ul",{className:f.a.ImageGallery,children:t.hits.map((function(e){return Object(b.jsx)(p,{imageURL:e.userImageURL||e.webformatURL,tags:e.tags},e.id)}))})})}var S=a(11),I=a(13),v=function(e){return Object(b.jsxs)(I.a,Object(S.a)(Object(S.a)({width:800,height:575,viewBox:"0 0 800 575",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb"},e),{},{children:[Object(b.jsx)("rect",{x:"537",y:"9",rx:"2",ry:"2",width:"140",height:"10"}),Object(b.jsx)("rect",{x:"14",y:"30",rx:"2",ry:"2",width:"667",height:"11"}),Object(b.jsx)("rect",{x:"12",y:"58",rx:"2",ry:"2",width:"211",height:"211"}),Object(b.jsx)("rect",{x:"240",y:"57",rx:"2",ry:"2",width:"211",height:"211"}),Object(b.jsx)("rect",{x:"467",y:"56",rx:"2",ry:"2",width:"211",height:"211"}),Object(b.jsx)("rect",{x:"12",y:"283",rx:"2",ry:"2",width:"211",height:"211"}),Object(b.jsx)("rect",{x:"240",y:"281",rx:"2",ry:"2",width:"211",height:"211"}),Object(b.jsx)("rect",{x:"468",y:"279",rx:"2",ry:"2",width:"211",height:"211"}),Object(b.jsx)("circle",{cx:"286",cy:"536",r:"12"}),Object(b.jsx)("circle",{cx:"319",cy:"535",r:"12"}),Object(b.jsx)("circle",{cx:"353",cy:"535",r:"12"}),Object(b.jsx)("rect",{x:"378",y:"524",rx:"0",ry:"0",width:"52",height:"24"}),Object(b.jsx)("rect",{x:"210",y:"523",rx:"0",ry:"0",width:"52",height:"24"}),Object(b.jsx)("circle",{cx:"210",cy:"535",r:"12"}),Object(b.jsx)("circle",{cx:"428",cy:"536",r:"12"})]}))};v.metadata={name:"Hassan Tijani.A",github:"surepeps",description:"Image Grid with Pagination",filename:"ImageGrid"};var w=v,F=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={pictures:null,status:"idle",error:null},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t){var a=this,r=this.props.pictureName;e.pictureName!==r&&(this.setState({status:"pending"}),u.b.info(" Waiting... "),fetch("https://pixabay.com/api/?q=".concat(r,"&page=1&key=22421278-3374a5bf35dcd0f85e00cdc81&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Image not found ".concat(r)))})).then((function(e){a.setState({pictures:e,status:"resolved"}),0===e.total&&u.b.error("Image ".concat(r," not found"))})).catch((function(e){a.setState({error:e,status:"reject"}),u.b.error("Image ".concat(r," not found"))})))}},{key:"render",value:function(){var e=this.state,t=e.pictures,a=e.status;return"idle"===a?Object(b.jsx)(b.Fragment,{}):"pending"===a?Object(b.jsx)(w,{}):"resolved"===a?Object(b.jsx)(b.Fragment,{}):"resolved"===a&&0!==t.total?Object(b.jsx)(O,{images:t}):void 0}}]),a}(r.Component),_=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={pictureName:""},e.handleFormSubmit=function(t){""!==t.trim()?e.setState({pictureName:t}):u.b.info(" Enter anything word! ")},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g,{onSubmit:this.handleFormSubmit}),Object(b.jsx)(F,{pictureName:this.state.pictureName}),Object(b.jsx)(u.a,{})]})}}]),a}(r.Component),N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,23)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),r(e),c(e),n(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(_,{})}),document.getElementById("root")),N()},7:function(e,t,a){e.exports={SearchForm:"Searchbar_SearchForm__2T1y7",SearchFormButton:"Searchbar_SearchFormButton__2CuQI",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__1W0Qp",SearchFormInput:"Searchbar_SearchFormInput__3nGO9"}}},[[22,1,2]]]);
//# sourceMappingURL=main.7061596e.chunk.js.map