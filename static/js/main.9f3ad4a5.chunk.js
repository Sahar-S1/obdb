(this.webpackJsonpobdb=this.webpackJsonpobdb||[]).push([[0],{121:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(74),i=n.n(o),c=(n(92),n(150)),s=n(82),l=Object(s.a)({palette:{mode:"light",primary:{main:"#3f51b5"},secondary:{main:"#f50057"}},typography:{}}),u=n(29),j=n(11),d=n(152),b=n(154),h=n(155),m=n(1),x=function(e){return Object(m.jsx)(d.a,{position:"static",color:"primary",style:{position:"absolute",bottom:0},children:Object(m.jsx)(b.a,{children:Object(m.jsx)(h.a,{variant:"body1",color:"white",children:"\xa9 2021 Vidyalankar Polytechnic"})})})},v=function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(d.a,{position:"static",color:"primary",children:Object(m.jsx)(b.a,{children:Object(m.jsx)(u.b,{to:"/",style:{textDecoration:"none"},children:Object(m.jsx)(h.a,{color:"white",variant:"h6",children:"OBDB"})})})})})},O=function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(v,{}),Object(m.jsx)(j.a,{}),Object(m.jsx)(x,{})]})},f=n(157),g=n(10),p=n(153),y=n(145),I=n(156),k=n(80),w=n.n(k),B=function(e){var t=a.a.useState(""),n=Object(g.a)(t,2),r=n[0],o=n[1],i=Object(j.g)();return Object(m.jsxs)(p.a,{component:"form",onSubmit:function(e){e.preventDefault(),i({pathname:"/search",search:"query=".concat(r)})},sx:{p:"2px 4px",display:"flex",alignItems:"center",width:"100%"},children:[Object(m.jsx)(y.a,{name:"query",sx:{ml:1,flex:1},placeholder:"Search Book",onChange:function(e){return o(e.target.value)}}),Object(m.jsx)(I.a,{type:"submit",sx:{p:"10px"},children:Object(m.jsx)(w.a,{})})]})},P=function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(f.a,{children:Object(m.jsx)(h.a,{variant:"h2",margin:10,color:"primary",textAlign:"center",children:"Open Books DataBase"})}),Object(m.jsx)(f.a,{style:{margin:"2rem auto",width:"80%"},children:Object(m.jsx)(B,{})})]})},S=n(151),C=n(147),L=n(158),D=n(159),F=n(160),R=function(e){var t,n,r=e.book;return Object(m.jsxs)(L.a,{style:{height:"100%"},children:[Object(m.jsx)(D.a,{component:"img",image:null!==(t=null===(n=r.volumeInfo.imageLinks)||void 0===n?void 0:n.thumbnail)&&void 0!==t?t:"/assets/image_nav.jpg"}),Object(m.jsxs)(F.a,{children:[Object(m.jsx)(h.a,{gutterBottom:!0,variant:"h6",color:"secondary",children:r.volumeInfo.title}),Object(m.jsx)(h.a,{gutterBottom:!0,variant:"subtitle1",color:"secondary",children:r.volumeInfo.subtitle}),Object(m.jsx)(h.a,{variant:"body2",children:r.volumeInfo.description})]})]})},q=n(161),A=function(e){return Object(m.jsx)(q.a,{})},_=n(44),E=n.n(_),T=n(61),U=n(81),J=n.n(U).a.create({baseURL:"https://www.googleapis.com/books/v1/",timeout:1e4,headers:void 0}),M=function(){var e=Object(T.a)(E.a.mark((function e(t,n){var r,a,o=arguments;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>2&&void 0!==o[2]?o[2]:1,e.next=3,J.get("volumes",{params:{q:t,maxResults:n,startIndex:(r-1)*n}});case 3:return a=e.sent,e.abrupt("return",{totalBooks:a.data.totalItems,books:a.data.items});case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),W=function(){var e=Object(T.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.get("volumes/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var G=function(e){var t,n=Object(j.f)(),r=function(e,t){var n=a.a.useState(1),r=Object(g.a)(n,2),o=r[0],i=r[1],c=a.a.useState(),s=Object(g.a)(c,2),l=s[0],u=s[1],j=a.a.useState(0),d=Object(g.a)(j,2),b=d[0],h=d[1];return a.a.useEffect((function(){u(void 0),M(e,t,o).then((function(e){u(e.books),h(e.totalBooks)}))}),[o]),{books:l,totalBooks:b,page:o,setPage:i}}(null!==(t=new URLSearchParams(n.search.substring(1)).get("query"))&&void 0!==t?t:"",24),o=r.books,i=(r.totalBooks,r.page),c=r.setPage;return void 0===o?Object(m.jsx)(A,{}):Object(m.jsxs)(f.a,{style:{margin:"2rem 2rem 0 2rem"},children:[Object(m.jsx)(S.a,{container:!0,spacing:{xs:2,md:3},alignItems:"stretch",children:o.map((function(e){return Object(m.jsx)(S.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(m.jsx)(u.b,{to:{pathname:"/book",search:"id=".concat(e.id)},style:{textDecoration:"none"},children:Object(m.jsx)(R,{book:e})})},e.id)}))}),Object(m.jsx)(f.a,{style:{padding:"2rem"},children:Object(m.jsx)(C.a,{color:"primary",count:25,page:i,onChange:function(e,t){return c(t)},showFirstButton:!0,showLastButton:!0,style:{display:"flex",justifyContent:"center"}})})]})},H=n(148),N=function(e){var t,n=Object(j.f)(),r=function(e){var t=a.a.useState(),n=Object(g.a)(t,2),r=n[0],o=n[1];return a.a.useEffect((function(){W(e).then((function(e){return o(e)}))}),[]),r}(null!==(t=new URLSearchParams(n.search.substring(1)).get("id"))&&void 0!==t?t:"");if(void 0===r)return Object(m.jsx)(A,{});var o,i,c,s,l,u,d,b,x,v,O,p,y,I,k,w,B,P,C,L={ISBN:null!==(o=null===(i=r.volumeInfo.industryIdentifiers)||void 0===i?void 0:i.map((function(e){return e.identifier})).join(", "))&&void 0!==o?o:"-",Published:null!==(c=r.volumeInfo.publishedDate)&&void 0!==c?c:"-",Publisher:null!==(s=r.volumeInfo.publisher)&&void 0!==s?s:"-",Author:null!==(l=null===(u=r.volumeInfo.authors)||void 0===u?void 0:u.join(", "))&&void 0!==l?l:"-","Page Count":null!==(d=null===(b=r.volumeInfo.pageCount)||void 0===b?void 0:b.toString())&&void 0!==d?d:"-",Language:null!==(x=r.volumeInfo.language)&&void 0!==x?x:"-",Genere:null!==(v=null===(O=r.volumeInfo.categories)||void 0===O?void 0:O.join(", "))&&void 0!==v?v:"-",Price:(null===(p=r.saleInfo.listPrice)||void 0===p?void 0:p.amount)?(null===(y=r.saleInfo.listPrice)||void 0===y?void 0:y.amount)+" "+(null!==(I=null===(k=r.saleInfo.listPrice)||void 0===k?void 0:k.currencyCode)&&void 0!==I?I:""):"-",Ratings:r.volumeInfo.averageRating+";"+(null===(w=r.volumeInfo)||void 0===w?void 0:w.ratingsCount)};return Object(m.jsx)(f.a,{style:{margin:"2rem"},children:Object(m.jsxs)(S.a,{container:!0,spacing:2,children:[Object(m.jsx)(S.a,{item:!0,xs:12,sm:3,children:Object(m.jsx)("img",{width:"80%",src:null!==(B=null===(P=r.volumeInfo.imageLinks)||void 0===P?void 0:P.thumbnail)&&void 0!==B?B:"/assets/image_nav.jpg",alt:"bookCoverPage"})}),Object(m.jsxs)(S.a,{item:!0,xs:12,sm:9,children:[Object(m.jsx)(h.a,{variant:"h5",children:"Details: "}),Object(m.jsx)(f.a,{style:{textAlign:"justify",wordWrap:"break-word"},children:Object(m.jsx)("table",{children:Object.entries(L).map((function(e){var t=Object(g.a)(e,2),n=t[0],a=t[1];return"Ratings"===n?Object(m.jsxs)("tr",{children:[Object(m.jsxs)("td",{children:[n,": "]}),Object(m.jsxs)("td",{children:[r.volumeInfo.averageRating?Object(m.jsx)(H.a,{value:parseFloat(a.split(";")[0]),precision:.5,readOnly:!0}):"-",r.volumeInfo.ratingsCount?"(".concat(a.split(";")[1],")"):""]})]}):Object(m.jsxs)("tr",{children:[Object(m.jsxs)("td",{children:[n,": "]}),Object(m.jsx)("td",{children:a})]})}))})})]}),Object(m.jsxs)(S.a,{item:!0,xs:12,sm:12,children:[Object(m.jsx)(h.a,{variant:"h5",children:"Description: "}),Object(m.jsx)(f.a,{style:{textAlign:"justify",wordWrap:"break-word"},children:Object(m.jsx)("div",{style:{marginRight:"2rem"},dangerouslySetInnerHTML:{__html:null!==(C=r.volumeInfo.description)&&void 0!==C?C:""}})})]})]})})},V=function(e){return Object(m.jsx)(u.a,{children:Object(m.jsx)(j.d,{children:Object(m.jsxs)(j.b,{path:"/",element:Object(m.jsx)(O,{}),children:[Object(m.jsx)(j.b,{index:!0,element:Object(m.jsx)(P,{})}),Object(m.jsx)(j.b,{path:"search",element:Object(m.jsx)(G,{})}),Object(m.jsx)(j.b,{path:"book",element:Object(m.jsx)(N,{})})]})})})};var z=function(){return Object(m.jsx)(c.a,{theme:l,children:Object(m.jsx)(V,{})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,162)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)}))};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(z,{})}),document.getElementById("root")),K()},92:function(e,t,n){}},[[121,1,2]]]);
//# sourceMappingURL=main.9f3ad4a5.chunk.js.map