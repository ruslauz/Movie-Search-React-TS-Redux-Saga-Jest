(this["webpackJsonpsearch-movie"]=this["webpackJsonpsearch-movie"]||[]).push([[0],{17:function(e,t,a){e.exports={card:"style_card__2d9uP",imageContainer:"style_imageContainer__3TDk9",poster:"style_poster__3yd1T",text:"style_text__aLZKa",title:"style_title__21b3g",description:"style_description__1mYNf",additional:"style_additional__2Xv0f",year:"style_year__37YT3",rating:"style_rating__12w1p",layer:"style_layer__3Ljua"}},23:function(e,t,a){e.exports={app:"style_app__1DjLB",header:"style_header__nAvKQ",link:"style_link__1FxKX",main:"style_main__sl9V2"}},27:function(e,t,a){e.exports={search:"style_search__1P1Jo",input:"style_input__1eqlo",button:"style_button__1_0P8"}},28:function(e,t,a){e.exports={label:"style_label__1eeAj",select:"style_select__1P8Xx",labelText:"style_labelText__3hkmr"}},29:function(e,t,a){e.exports={title:"style_title__1GhQA",imageWrapper:"style_imageWrapper__3o0PL",image:"style_image__3xWrD"}},3:function(e,t,a){e.exports={content:"style_content__3R8iM",title:"style_title__1qQyR",information:"style_information__VrTKL",imageWrapper:"style_imageWrapper__13Srf",poster:"style_poster__Og-IE",description:"style_description__2e0HL",item:"style_item__oFN2c",name:"style_name__QDz0h",value:"style_value__XOmls"}},39:function(e,t,a){e.exports={cards:"style_cards__wtWXP"}},40:function(e,t,a){e.exports={home:"style_home__3s-J3"}},41:function(e,t,a){e.exports={noResults:"style_noResults__1UTbq"}},42:function(e,t,a){e.exports={home:"style_home__3bxzu"}},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var c,n=a(2),s=a(24),r=a.n(s),i=a(8),l=a(18),o=a(10),j=a(38),u=a.n(j),p="APP/SET_QUERY",b="APP/SET_SEARCH_INPUT",d="APP/SEND_REQUEST",O="APP/SET_IF_FETCHING_MOVIES",m="APP/SAVE_MOVIES",h="APP/SET_NO_RESULTS",x="APP/SET_CURRENT_PAGE",f="APP/SET_TOTAL_PAGES",_="APP/SET_IF_FETCHING_MORE_MOVIES",v="APP/REQUEST_MORE_MOVIES",y="APP/ADD_MORE_MOVIES",N="APP/SET_SORT",g="APP/RESET_APP",E=function(e){return{type:O,payload:e}},P=function(e){return{type:m,payload:e}},T=function(e){return{type:h,payload:e}},R=function(e){return{type:b,payload:e}},S=function(e){return{type:x,payload:e}},A=function(e){return{type:f,payload:e}},w=function(e){return{type:_,payload:e}},M=function(e){return{type:N,payload:e}},I=a(27),k=a.n(I),D=a(0),F=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.app.isFetchingMovies})),a=Object(i.c)((function(e){return e.app.searchInput})),c=Object(o.f)();return Object(D.jsxs)("form",{className:k.a.search,onSubmit:function(e){e.preventDefault(),a.length&&c.replace("/?search=".concat(a))},children:[Object(D.jsx)("input",{type:"search",className:k.a.input,placeholder:"Search",onChange:function(t){var a=t.target.value.trimStart();e(R(a))},value:a}),Object(D.jsx)("button",{className:k.a.button,type:"submit",children:t?Object(D.jsx)("i",{className:"fas fa-cog fa-spin"}):Object(D.jsx)("i",{className:"fas fa-search"})})]})},C=a(19),V="YEAR_ASC",Y="YEAR_DESC",q="NAME_ASC",L="NAME_DESC",W=(c={},Object(C.a)(c,V,(function(e,t){return parseInt(e.Year)-parseInt(t.Year)})),Object(C.a)(c,Y,(function(e,t){return parseInt(t.Year)-parseInt(e.Year)})),Object(C.a)(c,q,(function(e,t){return e.Title.localeCompare(t.Title)})),Object(C.a)(c,L,(function(e,t){return e.Title.localeCompare(e.Title)})),c),G=a(28),B=a.n(G),Q=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.app.sort}));return Object(D.jsxs)("label",{className:B.a.label,children:[Object(D.jsx)("span",{className:B.a.labelText,children:"Sort By :"}),Object(D.jsxs)("select",{className:B.a.select,placeholder:"Sort By",onChange:function(t){e(M(t.target.value))},value:t,children:[Object(D.jsx)("option",{value:""}),Object(D.jsx)("option",{value:V,children:"Year Asc"}),Object(D.jsx)("option",{value:Y,children:"Year Desc"}),Object(D.jsx)("option",{value:q,children:"Name Asc"}),Object(D.jsx)("option",{value:L,children:"Name Desc"})]})]})},U=a(22),H=a(17),X=a.n(H),J=function(e){var t=e.id,a=e.title,c=e.poster,n=e.year,s=e.type;return Object(D.jsx)(l.b,{to:t,title:a,children:Object(D.jsxs)("div",{className:X.a.card,children:[Object(D.jsx)("div",{className:X.a.imageContainer,children:Object(D.jsx)("img",{src:c,alt:a,className:X.a.poster})}),Object(D.jsxs)("div",{className:X.a.text,children:[Object(D.jsx)("div",{className:X.a.layer}),Object(D.jsx)("p",{className:X.a.title,children:a}),Object(D.jsxs)("div",{className:X.a.additional,children:[Object(D.jsxs)("span",{className:X.a.year,children:["Year ",n]}),Object(D.jsx)("span",{className:X.a.rating,children:s})]})]})]})})},K=a(39),z=a.n(K),Z="http://fpae.pt/backup/20181025/wp/wp-content/plugins/post-slider-carousel/images/no-image-available-grid.jpg",$=function(){var e=Object(i.c)((function(e){return e.app.movies})),t=Object(i.c)((function(e){return e.app.sort})),a=Object(i.c)((function(e){return e.app.isFetchingMovies})),c=t?Object(U.a)(e).sort(W[t]):e;return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)("div",{className:z.a.cards,children:!a&&!!e.length&&c.map((function(e){return Object(D.jsx)(J,{title:e.Title,poster:"N/A"===e.Poster?Z:e.Poster,year:e.Year,type:e.Type,id:e.imdbID},e.id)}))})})},ee=a(40),te=a.n(ee),ae=function(e){var t=e.children,a=Object(i.b)(),c=Object(i.c)((function(e){return e.app.query})),n=Object(i.c)((function(e){return e.app.currentPage}));return Object(D.jsx)("button",{className:te.a.home,onClick:function(){return a({type:v,payload:[c,n+1]})},children:t})},ce=a(41),ne=a.n(ce),se=function(){var e=Object(i.c)((function(e){return e.app.noResults})),t=Object(i.c)((function(e){return e.app.isFetchingMoreMovies})),a=Object(i.c)((function(e){return e.app.currentPage})),c=Object(i.c)((function(e){return e.app.totalPages}));return Object(D.jsxs)(D.Fragment,{children:[e&&Object(D.jsx)("h2",{className:ne.a.noResults,children:"There are no results for this request"}),Object(D.jsx)($,{}),a<c&&Object(D.jsx)(ae,{children:t?Object(D.jsx)("i",{className:"fas fa-cog fa-spin"}):Object(D.jsx)("i",{className:"fas fa-plus"})})]})},re=a(42),ie=a.n(re),le=function(){var e=Object(i.c)((function(e){return e.app.query})),t=Object(o.f)();return Object(D.jsx)("button",{className:ie.a.home,onClick:function(){e?t.goBack():t.replace("/")},children:Object(D.jsx)("i",{className:"fas fa-home"})})},oe="MOVIE/SET_IS_REQUESTING",je="MOVIE/REQUEST_MOVIE",ue="MOVIE/SAVE_MOVIE_DATA",pe="MOVIE/SET_REDIRECTED",be=function(e){return{type:oe,payload:e}},de=function(e){return{type:ue,payload:e}},Oe=function(e){return{type:pe,payload:e}},me=a(3),he=a.n(me),xe=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.movie.movieData})),a=Object(i.c)((function(e){return e.movie.isRequesting})),c=Object(o.h)().id,s=Object(o.f)();return Object(n.useEffect)((function(){return e({type:je,payload:{id:c,history:s}}),function(){e(Oe(!0))}}),[c,s,e]),Object(D.jsxs)(D.Fragment,{children:[a&&Object(D.jsxs)("h2",{className:he.a.title,children:["Data is Loading...",Object(D.jsx)("i",{className:"fas fa-cog fa-spin"})]}),!a&&Object(D.jsxs)("div",{className:he.a.content,children:[Object(D.jsx)("h2",{className:he.a.title,children:t.Title}),Object(D.jsxs)("div",{className:he.a.information,children:[Object(D.jsx)("div",{className:he.a.imageWrapper,children:Object(D.jsx)("img",{src:"N/A"===t.Poster?Z:t.Poster,alt:t.Title,className:he.a.poster})}),Object(D.jsxs)("div",{className:he.a.description,children:[Object(D.jsxs)("div",{className:he.a.item,children:[Object(D.jsx)("span",{className:he.a.name,children:"Year: "}),Object(D.jsx)("span",{className:he.a.value,children:t.Year})]}),Object(D.jsxs)("div",{className:he.a.item,children:[Object(D.jsx)("span",{className:he.a.name,children:"Rated: "}),Object(D.jsx)("span",{className:he.a.value,children:t.Rated})]}),Object(D.jsxs)("div",{className:he.a.item,children:[Object(D.jsx)("span",{className:he.a.name,children:"Released: "}),Object(D.jsx)("span",{className:he.a.value,children:t.Released})]}),Object(D.jsxs)("div",{className:he.a.item,children:[Object(D.jsx)("span",{className:he.a.name,children:"Runtime: "}),Object(D.jsx)("span",{className:he.a.value,children:t.Runtime})]}),Object(D.jsxs)("div",{className:he.a.item,children:[Object(D.jsx)("span",{className:he.a.name,children:"Genre: "}),Object(D.jsx)("span",{className:he.a.value,children:t.Genre})]}),Object(D.jsxs)("div",{className:he.a.item,children:[Object(D.jsx)("span",{className:he.a.name,children:"Director: "}),Object(D.jsx)("span",{className:he.a.value,children:t.Director})]}),Object(D.jsxs)("div",{className:he.a.item,children:[Object(D.jsx)("span",{className:he.a.name,children:"Writer: "}),Object(D.jsx)("span",{className:he.a.value,children:t.Writer})]}),Object(D.jsxs)("div",{className:he.a.item,children:[Object(D.jsx)("span",{className:he.a.name,children:"Actors: "}),Object(D.jsx)("span",{className:he.a.value,children:t.Actors})]}),Object(D.jsxs)("div",{className:he.a.item,children:[Object(D.jsx)("span",{className:he.a.name,children:"Plot: "}),Object(D.jsx)("span",{className:he.a.value,children:t.Plot})]}),Object(D.jsxs)("div",{className:he.a.item,children:[Object(D.jsx)("span",{className:he.a.name,children:"Language: "}),Object(D.jsx)("span",{className:he.a.value,children:t.Language})]}),Object(D.jsxs)("div",{className:he.a.item,children:[Object(D.jsx)("span",{className:he.a.name,children:"Country: "}),Object(D.jsx)("span",{className:he.a.value,children:t.Country})]}),Object(D.jsxs)("div",{className:he.a.item,children:[Object(D.jsx)("span",{className:he.a.name,children:"Awards: "}),Object(D.jsx)("span",{className:he.a.value,children:t.Awards})]}),Object(D.jsxs)("div",{className:he.a.item,children:[Object(D.jsx)("span",{className:he.a.name,children:"IMDb Rating: "}),Object(D.jsx)("span",{className:he.a.value,children:t.imdbRating})]}),Object(D.jsxs)("div",{className:he.a.item,children:[Object(D.jsx)("span",{className:he.a.name,children:"IMDb Votes: "}),Object(D.jsx)("span",{className:he.a.value,children:t.imdbVotes})]}),Object(D.jsxs)("div",{className:he.a.item,children:[Object(D.jsx)("span",{className:he.a.name,children:"Type: "}),Object(D.jsx)("span",{className:he.a.value,children:t.Type})]}),Object(D.jsxs)("div",{className:he.a.item,children:[Object(D.jsx)("span",{className:he.a.name,children:"DVD: "}),Object(D.jsx)("span",{className:he.a.value,children:t.DVD})]}),Object(D.jsxs)("div",{className:he.a.item,children:[Object(D.jsx)("span",{className:he.a.name,children:"Box Office: "}),Object(D.jsx)("span",{className:he.a.value,children:t.BoxOffice})]}),Object(D.jsxs)("div",{className:he.a.item,children:[Object(D.jsx)("span",{className:he.a.name,children:"Production: "}),Object(D.jsx)("span",{className:he.a.value,children:t.Production})]})]})]}),Object(D.jsx)(le,{})]})]})},fe=a(29),_e=a.n(fe),ve=function(){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)("h1",{className:_e.a.title,children:["Something went wrong. Page\xa0not\xa0found\xa0",Object(D.jsx)("i",{className:"far fa-frown"})]}),Object(D.jsxs)("div",{className:_e.a.imageWrapper,children:[Object(D.jsx)("img",{src:"https://ctoetotakoe.ru/wp-content/uploads/2016/05/404-not-found.png",alt:"404",className:_e.a.image}),Object(D.jsx)(le,{})]})]})},ye=a(23),Ne=a.n(ye),ge=function(){var e=Object(i.b)(),t=Object(o.g)(),a=Object(i.c)((function(e){return e.app.query})),c=u()(t.search,!0).query.search||"";Object(n.useEffect)((function(){c&&c!==a?(e(function(e){return{type:d,payload:e}}(c)),e(function(e){return{type:p,payload:e}}(c)),e(R(c))):!c&&a&&"/"===t.pathname&&e({type:g})}),[c,a,e,t.pathname]);var s=Object(i.c)((function(e){return Boolean(e.app.movies.length)}));return Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)("div",{className:Ne.a.app,children:[Object(D.jsxs)("header",{className:Ne.a.header,children:[Object(D.jsxs)(l.c,{to:"/",className:Ne.a.link,children:[Object(D.jsx)("i",{className:"fas fa-video"})," Movie Searching"]}),Object(D.jsx)(F,{}),s&&"/"===t.pathname&&Object(D.jsx)(Q,{})]}),Object(D.jsx)("main",{className:Ne.a.main,children:Object(D.jsxs)(o.c,{children:[Object(D.jsx)(o.a,{path:"/",exact:!0,children:Object(D.jsx)(se,{})}),Object(D.jsx)(o.a,{path:"/404",exact:!0,children:Object(D.jsx)(ve,{})}),Object(D.jsx)(o.a,{path:"/:id",children:Object(D.jsx)(xe,{})})]})})]})})},Ee=a(16),Pe=a(43),Te=a(44),Re=a(5),Se={isFetchingMovies:!1,errorFetchingMovies:!1,isFetchingMoreMovies:!1,errorFetchingMoreMovies:!1,noResults:!1,query:"",searchInput:"",sort:"",movies:[],currentPage:1,totalPages:0},Ae={isRequesting:!1,movieData:{},isRedirected:!1},we=Object(Ee.combineReducers)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(Re.a)(Object(Re.a)({},e),{},{isFetchingMovies:t.payload});case m:return Object(Re.a)(Object(Re.a)({},e),{},{movies:t.payload});case h:return Object(Re.a)(Object(Re.a)({},e),{},{noResults:t.payload});case p:return Object(Re.a)(Object(Re.a)({},e),{},{query:t.payload});case b:return Object(Re.a)(Object(Re.a)({},e),{},{searchInput:t.payload});case x:return Object(Re.a)(Object(Re.a)({},e),{},{currentPage:t.payload});case f:return Object(Re.a)(Object(Re.a)({},e),{},{totalPages:t.payload});case _:return Object(Re.a)(Object(Re.a)({},e),{},{isFetchingMoreMovies:t.payload});case y:return Object(Re.a)(Object(Re.a)({},e),{},{movies:[].concat(Object(U.a)(e.movies),Object(U.a)(t.payload))});case N:return Object(Re.a)(Object(Re.a)({},e),{},{sort:t.payload});case g:return Object(Re.a)(Object(Re.a)({},e),Se);default:return e}},movie:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe:return Object(Re.a)(Object(Re.a)({},e),{},{isRequesting:t.payload});case ue:return Object(Re.a)(Object(Re.a)({},e),{},{movieData:t.payload});case pe:return Object(Re.a)(Object(Re.a)({},e),{},{isRedirected:t.payload});default:return e}}}),Me=a(11),Ie=a.n(Me),ke=a(9),De=a(36),Fe="https://www.omdbapi.com/?apikey=".concat("fd8f696d","&"),Ce=function(){var e=Object(De.a)(Ie.a.mark((function e(t){var a,c;return Ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(Fe,"s=").concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:return"True"===(c=e.sent).Response?console.log("success",c):console.log("failed",c),e.abrupt("return",c);case 11:throw e.prev=11,e.t0=e.catch(0),new Error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),Ve=function(){var e=Object(De.a)(Ie.a.mark((function e(t){var a,c;return Ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(Fe,"i=").concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:return"True"===(c=e.sent).Response?console.log("success",c):console.log("failed",c),e.abrupt("return",c);case 11:throw e.prev=11,e.t0=e.catch(0),console.log(e.t0),new Error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),Ye=Ie.a.mark((function e(){return Ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ke.e)(je,qe);case 2:case"end":return e.stop()}}),e)})),qe=Ie.a.mark((function e(t){var a;return Ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ke.c)(be(!0));case 2:return e.next=4,Object(ke.c)(Oe(!1));case 4:return e.prev=4,e.next=7,Object(ke.b)(Ve,t.payload.id);case 7:if("True"!==(a=e.sent).Response){e.next=13;break}return e.next=11,Object(ke.c)(de(a));case 11:e.next=14;break;case 13:t.payload.history.replace("/404");case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(4),t.payload.history.replace("/404");case 20:return e.prev=20,e.next=23,Object(ke.d)((function(e){return e.movie.isRedirected}));case 23:if(e.sent){e.next=27;break}return e.next=27,Object(ke.c)(be(!1));case 27:return e.finish(20);case 28:case"end":return e.stop()}}),e,null,[[4,16,20,28]])})),Le=a(61),We=Ie.a.mark((function e(){return Ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ke.g)(v,Ge);case 2:case"end":return e.stop()}}),e)})),Ge=Ie.a.mark((function e(t){var a,c,n,s;return Ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ke.c)(w(!0));case 2:return e.prev=2,a=t.payload[0],c=t.payload[1],e.next=7,Object(ke.b)(Ce,"".concat(a,"&page=").concat(c));case 7:if("True"!==(n=e.sent).Response){e.next=16;break}return s=n.Search.map((function(e){return Object(Re.a)(Object(Re.a)({},e),{},{id:Object(Le.a)()})})),e.next=12,Object(ke.c)({type:y,payload:s});case 12:return e.next=14,Object(ke.c)(S(c));case 14:e.next=16;break;case 16:e.next=23;break;case 18:return e.prev=18,e.t0=e.catch(2),e.next=22,Object(ke.c)({type:"APP/SET_ERROR_FETCHING_MOVIES",payload:!0});case 22:console.log(e.t0);case 23:return e.prev=23,e.next=26,Object(ke.c)(w(!1));case 26:return e.finish(23);case 27:case"end":return e.stop()}}),e,null,[[2,18,23,27]])})),Be=Ie.a.mark((function e(){return Ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ke.f)(d,Qe);case 2:case"end":return e.stop()}}),e)})),Qe=Ie.a.mark((function e(t){var a,c;return Ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ke.c)(E(!0));case 2:return e.next=4,Object(ke.c)(T(!1));case 4:return e.next=6,Object(ke.c)(A(0));case 6:return e.next=8,Object(ke.c)(S(0));case 8:return e.next=10,Object(ke.c)(M(""));case 10:return e.prev=10,e.next=13,Object(ke.b)(Ce,t.payload);case 13:if("True"!==(a=e.sent).Response){e.next=22;break}return c=a.Search.map((function(e){return Object(Re.a)(Object(Re.a)({},e),{},{id:Object(Le.a)()})})),e.next=18,Object(ke.c)(P(c));case 18:return e.next=20,Object(ke.c)(A(Math.ceil(Number(a.totalResults)/10)));case 20:e.next=26;break;case 22:return e.next=24,Object(ke.c)(P([]));case 24:return e.next=26,Object(ke.c)(T(!0));case 26:e.next=33;break;case 28:return e.prev=28,e.t0=e.catch(10),e.next=32,Object(ke.c)({type:"APP/SET_ERROR_FETCHING_MOVIES",payload:!0});case 32:console.log(e.t0);case 33:return e.prev=33,e.next=36,Object(ke.c)(E(!1));case 36:return e.finish(33);case 37:case"end":return e.stop()}}),e,null,[[10,28,33,37]])})),Ue=Ie.a.mark((function e(){return Ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ke.a)([Be(),We(),Ye()]);case 2:case"end":return e.stop()}}),e)})),He=Object(Te.a)(),Xe=Object(Ee.createStore)(we,void 0,Object(Pe.composeWithDevTools)(Object(Ee.applyMiddleware)(He)));He.run(Ue);var Je=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,62)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};a(59);r.a.render(Object(D.jsx)(i.a,{store:Xe,children:Object(D.jsx)(l.a,{children:Object(D.jsx)(ge,{})})}),document.getElementById("root")),Je()}},[[60,1,2]]]);