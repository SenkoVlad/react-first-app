(this["webpackJsonpfirst-app"]=this["webpackJsonpfirst-app"]||[]).push([[0],{107:function(e,t,n){"use strict";t.a=n.p+"static/media/avatar.32962620.png"},128:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var r=n(39),a=n(3),i=n(6),s={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,text:"Hi"},{id:2,text:"How is your it-kamasutra?"},{id:3,text:"Yo"},{id:4,text:"Yo"},{id:5,text:"Yo"}]},o=function(e){return e.messages.reduce((function(e,t){return t.id>e?t.id:e}),e.messages[0].id)},c=function(e){return{type:i.a,text:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.a:if(""!==t.text){var n={id:o(e)+1,text:t.text};return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[n])})}default:return Object(a.a)({},e)}}},132:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__1Eszi",currentPage:"Users_currentPage__25BYV"}},164:function(e,t,n){},165:function(e,t,n){},17:function(e,t,n){e.exports={nav:"Navbar_nav__3wVRQ",item:"Navbar_item__1oiZs",active:"Navbar_active__3xbXc"}},171:function(e,t,n){},172:function(e,t,n){},173:function(e,t,n){},21:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));var r=n(131),a=r.create({withCredentials:!0,baseURL:"https://localhost:5001/"}),i={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},followUser:function(e){return a.post("users/follow/".concat(e)).then((function(e){return e.data}))},unfollowUser:function(e){return a.post("users/unfollow/".concat(e)).then((function(e){return e.data}))},getUserProfile:function(e){return a.get("users/".concat(e)).then((function(e){return e.data}))},updateUserStatus:function(e){return a.put("users/updatestatus",{status:e}).then((function(e){return e.data}))},saveUser:function(e){return a.put("users",e).then((function(e){return e.data}))},saveAvatar:function(e){var t=new FormData;return t.append("image",e),a.put("users/savephoto",t,{headers:{"Content-type":"multipart/form-data"}}).then((function(e){return e.data}))}},s={getAuthState:function(){return a.get("auth/status").then((function(e){return e.data}))},login:function(e,t){return a.post("auth/login",{login:e,password:t}).then((function(e){return e.data}))},logout:function(){return a.delete("auth/logout").then((function(e){return e.data}))}}},292:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),i=n(65),s=n.n(i),o=(n(164),function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,300)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),i(e),s(e)}))}),c=n(29),u=n(30),l=n(32),d=n(31),f=(n(165),n(13)),j=n(17),b=n.n(j),p=n(0),g=function(){return Object(p.jsxs)("nav",{className:b.a.nav,children:[Object(p.jsx)("div",{children:Object(p.jsx)(f.b,{to:"/profile",className:b.a.item,activeClassName:b.a.active,children:"Profile"})}),Object(p.jsx)("div",{children:Object(p.jsx)(f.b,{to:"/dialogs",className:b.a.item,activeClassName:b.a.active,children:"Dialogs"})}),Object(p.jsx)("div",{children:Object(p.jsx)(f.b,{to:"/news",className:b.a.item,activeClassName:b.a.active,children:"News"})}),Object(p.jsx)("div",{children:Object(p.jsx)(f.b,{to:"/music",className:b.a.item,activeClassName:b.a.active,children:"Music"})}),Object(p.jsx)("div",{children:Object(p.jsx)(f.b,{to:"/settings",className:b.a.item,activeClassName:b.a.active,children:"Settings"})}),Object(p.jsx)("div",{children:Object(p.jsx)(f.b,{to:"/users",className:b.a.item,activeClassName:b.a.active,children:"Users"})})]})},h=(n(171),function(){return Object(p.jsx)("div",{children:"Music"})}),O=(n(172),function(){return Object(p.jsx)("div",{children:"News"})}),x=(n(173),function(){return Object(p.jsx)("div",{children:"Settings"})}),v=n(12),m=n(15),w=n(10),P=n.n(w),C=n(20),y=n(39),_=n(3),k=n(6),U=n(21),I=function(e,t,n,r){return e.map((function(e){return e[t]===n?Object(_.a)(Object(_.a)({},e),r):e}))},S={users:[],currentPage:1,totalPageCount:0,pageSize:5,paginatorPartSize:10,isLoading:!1,followingUsersId:[]},L=function(e){return{type:k.d,userId:e}},N=function(e){return{type:k.o,userId:e}},z=function(e){return{type:k.l,users:e}},M=function(e){return{type:k.n,usersTotalCount:e}},F=function(e){return{type:k.m,currentPage:e}},B=function(e){return{type:k.h,isLoading:e}},T=function(e,t){return{type:k.f,isFollowing:e,userId:t}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k.d:var n=I(e.users,"id",t.userId,{followed:!0});return Object(_.a)(Object(_.a)({},e),{},{users:n});case k.o:var r=I(e.users,"id",t.userId,{followed:!1});return Object(_.a)(Object(_.a)({},e),{},{users:r});case k.l:return Object(_.a)(Object(_.a)({},e),{},{users:Object(y.a)(t.users)});case k.n:return Object(_.a)(Object(_.a)({},e),{},{totalPageCount:t.usersTotalCount});case k.m:return Object(_.a)(Object(_.a)({},e),{},{currentPage:t.currentPage});case k.h:return Object(_.a)(Object(_.a)({},e),{},{isLoading:t.isLoading});case k.f:return Object(_.a)(Object(_.a)({},e),{},{followingUsersId:t.isFollowing?[].concat(Object(y.a)(e.followingUsersId),[t.userId]):e.followingUsersId.filter((function(e){return e!=t.userId}))});default:return Object(_.a)({},e)}},A=n(97),E=n(91),V=n.n(E),H=a.a.memo((function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,i=e.setCurrentPage,s=e.paginatorPartSize,o=Math.ceil(t/n),c=[],u=1;u<=o;u++)c.push(u);var l=Math.ceil(o/s),d=Object(r.useState)(1),f=Object(A.a)(d,2),j=f[0],b=f[1],g=(j-1)*s+1,h=j*s;return Object(p.jsxs)("div",{children:[j>1&&Object(p.jsx)("button",{onClick:function(){return b(j-1)},children:"Prev"}),c.filter((function(e){return e>=g&&e<=h})).map((function(e){return Object(p.jsx)("span",{className:e===a?V.a.currentPage:V.a.page,onClick:function(t){return i(e)},children:e},e)})),j<l&&Object(p.jsx)("button",{onClick:function(){return b(j+1)},children:"Next"})]})})),J=n(132),R=n.n(J),Y=n(107),W=function(e){var t=e.followingUsersId,n=e.unfollowUser,r=e.followUser,a=e.user;return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:Object(p.jsx)(f.b,{to:"/profile/"+a.id,children:Object(p.jsx)("img",{src:""===a.photoUrl?Y.a:a.photoUrl,className:R.a.userPhoto})})}),Object(p.jsx)("div",{children:a.name}),Object(p.jsx)("div",{children:a.Status}),Object(p.jsx)("div",{children:a.location.city}),Object(p.jsx)("div",{children:a.location.country}),Object(p.jsx)("div",{children:1==a.followed?Object(p.jsx)("button",{disabled:t.some((function(e){return e===a.id})),onClick:function(){return n(a.id)},children:"unfollow"}):Object(p.jsx)("button",{disabled:t.some((function(e){return e===a.id})),onClick:function(){return r(a.id)},children:"follow"})})]},a.id)},X=a.a.memo((function(e){var t=e.totalPageCount,n=e.currentPage,r=e.users,a=e.followingUsersId,i=e.unfollowUser,s=e.followUser,o=e.setCurrentPage,c=e.pageSize,u=e.paginatorPartSize;return Object(p.jsxs)("div",{children:[Object(p.jsx)(H,{totalItemsCount:t,currentPage:n,setCurrentPage:o,pageSize:c,paginatorPartSize:u}),r.map((function(e){return Object(p.jsx)(W,{user:e,followingUsersId:a,unfollowUser:i,followUser:s})}))]})})),K=n(42),q=function(e){return e.usersPage.users},Q=function(e){return e.usersPage.currentPage},Z=function(e){return e.usersPage.totalPageCount},G=function(e){return e.usersPage.pageSize},$=function(e){return e.usersPage.isLoading},ee=function(e){return e.usersPage.followingUsersId},te=function(e){return e.usersPage.paginatorPartSize},ne=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).setCurrentPage=function(t){e.props.getUsers(t,e.props.pageSize,!0)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"componentWillUnmount",value:function(){this.props.setUsers([])}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[this.props.isLoading?Object(p.jsx)(K.a,{}):null,Object(p.jsx)(X,{totalPageCount:this.props.totalPageCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,unfollowUser:this.props.unfollowUser,followUser:this.props.followUser,setCurrentPage:this.setCurrentPage,users:this.props.users,followingUsersId:this.props.followingUsersId,paginatorPartSize:this.props.paginatorPartSize})]})}}]),n}(a.a.PureComponent),re=Object(m.b)((function(e){return{users:q(e),currentPage:Q(e),totalPageCount:Z(e),pageSize:G(e),isLoading:$(e),followingUsersId:ee(e),paginatorPartSize:te(e)}}),{followUser:function(e){return function(){var t=Object(C.a)(P.a.mark((function t(n){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(T(!0,e)),t.next=3,U.b.followUser(e);case 3:0==t.sent.resultCode&&n(L(e)),n(T(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollowUser:function(e){return function(){var t=Object(C.a)(P.a.mark((function t(n){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(T(!0,e)),t.next=3,U.b.unfollowUser(e);case 3:0==t.sent.resultCode&&n(N(e)),n(T(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setFollowingProcess:T,getUsers:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){var r=Object(C.a)(P.a.mark((function r(a){var i;return P.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n&&a(F(e)),a(B(!0)),r.next=4,U.b.getUsers(e,t);case 4:i=r.sent,a(B(!1)),0==i.resultCode&&(a(z(i.result.items)),a(M(i.result.totalCount)));case 7:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},setUsers:z})(ne),ae=n(92),ie=n.n(ae),se=function(e){return Object(p.jsxs)("header",{className:ie.a.header,children:[Object(p.jsx)("img",{src:"https://placeit-assets1.s3-accelerate.amazonaws.com/custom-pages/make-a-gaming-logo/gaming-logo-maker-for-an-rpg-guild.png"}),Object(p.jsx)("div",{className:ie.a.loginBlock,children:e.isLogin?Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:e.login}),Object(p.jsx)("div",{children:Object(p.jsx)(f.b,{to:"/login",onClick:e.logout,children:"Logout"})})]}):Object(p.jsx)(f.b,{to:"/login",children:"Login"})})]})},oe=n(35),ce={userId:null,login:null,email:null,errorMessage:null,isLogin:!1},ue=function(e,t,n){return{type:k.i,data:{userId:n,login:t,email:e}}},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k.i:return Object(_.a)(Object(_.a)(Object(_.a)({},e),t.data),{},{isLogin:!0});case k.j:return Object(_.a)(Object(_.a)({},e),{},{isLogin:t.data});case k.c:return{userId:null,login:null,email:null,isLogin:null};default:return Object(_.a)({},e)}},de=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)(se,Object(_.a)({},this.props))}}]),n}(a.a.Component),fe=Object(m.b)((function(e){return{login:e.auth.login,isLogin:e.auth.isLogin}}),{logout:function(){return function(){var e=Object(C.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.logout();case 2:0===e.sent.resultCode&&t({type:k.c});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(de),je=n(88),be=n(129),pe=n(56),ge=n(85),he=n(55),Oe=n.n(he),xe=Object(be.a)({form:"login"})((function(e){return Object(p.jsx)("div",{children:Object(p.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{className:Oe.a.inputLabelwhite,for:"login",children:"Login:"}),Object(p.jsx)(je.a,{component:pe.a,id:"login",name:"login",validate:[ge.b]})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{className:Oe.a.inputLabelwhite,for:"password",children:"Password:"}),Object(p.jsx)(je.a,{component:pe.a,id:"password",name:"password",validate:[ge.b]})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{className:Oe.a.inputLabelwhite,for:"rememberMe",children:"remember me"}),Object(p.jsx)(je.a,{component:pe.a,type:"checkbox",name:"rememberMe"})]}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:"Login"})}),null!=e.error?Object(p.jsx)("div",{className:Oe.a.errorBlock,children:e.error}):Object(p.jsx)(p.Fragment,{})]})})})),ve=function(e){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Login"}),Object(p.jsx)(xe,{errorMessage:e.errorMessage,onSubmit:function(t){e.login(t.login,t.password)}})]})})},me=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:this.props.isLogin?Object(p.jsx)(v.a,{to:"/profile"}):Object(p.jsx)(ve,{login:this.props.login,errorMessage:this.props.errorMessage})})}}]),n}(a.a.Component),we=Object(m.b)((function(e){return{isLogin:e.auth.isLogin,errorMessage:e.auth.errorMessage}}),{login:function(e,t){return function(){var n=Object(C.a)(P.a.mark((function n(r){var a,i,s,o,c;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,U.a.login(e,t);case 2:0===(a=n.sent).resultCode?(i=a.result,s=i.email,o=i.login,c=i.userId,r(ue(s,o,c))):r(Object(oe.a)("login",{_error:a.message}));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(me),Pe=n(11),Ce={isInitialized:!1},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k.g:return{isInitialized:t.data};default:return Object(_.a)({},e)}},_e=n(96),ke=n(128),Ue={},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue;return e},Se=n(134),Le=n(130),Ne=Object(Pe.c)({profilePage:_e.a,dialogsPage:ke.a,sidebarPage:Ie,usersPage:D,auth:le,app:ye,form:Le.a}),ze=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Pe.d,Me=Object(Pe.e)(Ne,ze(Object(Pe.a)(Se.a)));window.store=Me;var Fe=Me,Be=function(e){return function(t){return Object(p.jsx)(a.a.Suspense,{fallback:Object(p.jsx)(K.a,{}),children:Object(p.jsx)(e,Object(_.a)({},t))})}},Te=a.a.lazy((function(){return n.e(4).then(n.bind(null,302))})),De=a.a.lazy((function(){return n.e(3).then(n.bind(null,301))})),Ae=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initialize()}},{key:"render",value:function(){return this.props.isInitialized?Object(p.jsxs)("div",{className:"app-wrapper",children:[Object(p.jsx)(fe,{}),Object(p.jsx)(g,{}),Object(p.jsxs)("div",{className:"dialog-container",children:[Object(p.jsx)(v.b,{path:"/dialogs",render:function(e){return Be(Te)(e)}}),Object(p.jsx)(v.b,{path:"/profile/:userId?",render:function(e){return Be(De)(e)}}),Object(p.jsx)(v.b,{path:"/music",render:function(){return Object(p.jsx)(h,{})}}),Object(p.jsx)(v.b,{path:"/news",render:function(){return Object(p.jsx)(O,{})}}),Object(p.jsx)(v.b,{path:"/settings",render:function(){return Object(p.jsx)(x,{})}}),Object(p.jsx)(v.b,{path:"/users",render:function(){return Object(p.jsx)(re,{})}}),Object(p.jsx)(v.b,{path:"/login",render:function(){return Object(p.jsx)(we,{})}})]})]}):Object(p.jsx)(K.a,{})}}]),n}(a.a.Component),Ee=Object(Pe.d)(v.f,Object(m.b)((function(e){return{isInitialized:e.app.isInitialized}}),{initialize:function(){return function(e){var t=function(){var e=Object(C.a)(P.a.mark((function e(t){var n,r,a,i,s;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.getAuthState();case 2:0===(n=e.sent).resultCode?(r=n.result,a=r.email,i=r.login,s=r.userId,t(ue(a,i,s))):t({type:k.j,data:!1});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(e);Promise.all([t]).then((function(){var t;e((t=!0,{type:k.g,data:t}))}))}}}))(Ae),Ve=function(e){return Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(f.a,{children:Object(p.jsx)(m.a,{store:Fe,children:Object(p.jsx)(Ee,{})})})})};s.a.render(Object(p.jsx)(Ve,{}),document.getElementById("root")),window.state=Fe.getState(),o(console.log)},42:function(e,t,n){"use strict";var r=n.p+"static/media/preloader.7f686c03.gif",a=n(0);t.a=function(e){return Object(a.jsx)("img",{src:r})}},55:function(e,t,n){e.exports={loginBlock:"Login_loginBlock__3uSW6",inputLabelwhite:"Login_inputLabelwhite__2Jz4g",errorBlock:"Login_errorBlock__3SUkJ"}},56:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return j}));var r=n(3),a=n(70),i=(n(1),n(88),n(93)),s=n.n(i),o=n(0),c=["input","meta"],u=["input","meta"],l=["input","meta"],d=function(e){e.input;var t=e.meta,n=Object(a.a)(e,c),r=t.touched&&t.error,i=r?t.error:"";return Object(o.jsxs)("div",{className:s.a.formControl+" "+(r?s.a.error:""),children:[Object(o.jsx)("div",{children:n.children}),r?Object(o.jsx)("span",{children:i}):Object(o.jsx)(o.Fragment,{})]})},f=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,u));return Object(o.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},j=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,l));return Object(o.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))}},6:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"k",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"o",(function(){return o})),n.d(t,"l",(function(){return c})),n.d(t,"n",(function(){return u})),n.d(t,"m",(function(){return l})),n.d(t,"h",(function(){return d})),n.d(t,"i",(function(){return f})),n.d(t,"j",(function(){return j})),n.d(t,"f",(function(){return b})),n.d(t,"p",(function(){return p})),n.d(t,"c",(function(){return g})),n.d(t,"g",(function(){return h})),n.d(t,"e",(function(){return O}));n(1);var r="add-new-post",a="set-profile-info",i="add-new-message",s="follow-user",o="unfollow-user",c="set-users",u="set-users-total-count",l="set-users-current-page",d="set-loading-gif",f="set-login-data",j="set-logout",b="set-following_process",p="update-user-status",g="delete-auth-data",h="set-initialization-data",O="set-avatar"},85:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){return t&&t.length>e?"Max length is ".concat(e):void 0}}},91:function(e,t,n){e.exports={currentPage:"Paginator_currentPage__305K3",page:"Paginator_page__1Rla7"}},92:function(e,t,n){e.exports={header:"Header_header__3SpcS",loginBlock:"Header_loginBlock__3BwlA"}},93:function(e,t,n){e.exports={formControl:"FormControls_formControl__3WxnP",error:"FormControls_error__3KV0-"}},96:function(e,t,n){"use strict";n.d(t,"c",(function(){return j})),n.d(t,"f",(function(){return b})),n.d(t,"b",(function(){return h})),n.d(t,"g",(function(){return O})),n.d(t,"d",(function(){return x})),n.d(t,"e",(function(){return v}));var r=n(10),a=n.n(r),i=n(20),s=n(39),o=n(3),c=n(35),u=n(21),l=n(6),d={posts:[{id:1,text:"The First post",likes:5},{id:2,text:"The second post",likes:6},{id:3,text:"The third post",likes:3},{id:4,text:"The fourth post",likes:7}],profileInfo:{status:""},isLoading:!1},f=function(e){return e.posts.reduce((function(e,t){return t.id>e?t.id:e}),e.posts[0].id)},j=function(e){return{type:l.b,text:e}},b=function(e){return{type:l.k,profileInfo:e}},p=function(e){return{type:l.h,isLoading:e}},g=function(e){return{type:l.p,status:e}},h=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(p(!0)),t.next=3,u.b.getUserProfile(e);case 3:0===(r=t.sent).resultCode&&n(b(r.result)),n(p(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateUserStatus(e);case 2:0===t.sent.resultCode&&n(g(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.saveAvatar(e);case 2:0===(r=t.sent).resultCode&&n((a=r.result,{type:l.e,imagePath:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.saveUser(e);case 2:if(0!==(r=t.sent).resultCode){t.next=7;break}n(b(r.result)),t.next=9;break;case 7:return n(Object(c.a)("profile",{_error:r.message})),t.abrupt("return","error");case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.b:if(""!==t.text){var n=f(e),r={id:n+1,text:t.text,likes:0};return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[r])})}case l.k:return Object(o.a)(Object(o.a)({},e),{},{profileInfo:t.profileInfo});case l.h:return Object(o.a)(Object(o.a)({},e),{},{isLoading:t.isLoading});case l.p:return Object(o.a)(Object(o.a)({},e),{},{profileInfo:Object(o.a)(Object(o.a)({},e.profileInfo),{},{status:t.status})});case l.e:return Object(o.a)(Object(o.a)({},e),{},{profileInfo:Object(o.a)(Object(o.a)({},e.profileInfo),{},{photoUrl:t.imagePath})});default:return Object(o.a)({},e)}}}},[[292,1,2]]]);
//# sourceMappingURL=main.3d8cabf8.chunk.js.map