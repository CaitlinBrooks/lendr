(function(e){function t(t){for(var r,i,o=t[0],c=t[1],l=t[2],u=0,f=[];u<o.length;u++)i=o[u],a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"02b0":function(e,t,n){e.exports=n.p+"img/Untitled.75470df6.png"},"034f":function(e,t,n){"use strict";var r=n("c21b"),a=n.n(r);a.a},1745:function(e,t,n){"use strict";var r=n("232e"),a=n.n(r);a.a},"232e":function(e,t,n){},"2f37":function(e,t,n){"use strict";var r=n("db71"),a=n.n(r);a.a},"33fd":function(e,t,n){"use strict";var r=n("4882"),a=n.n(r);a.a},"473b":function(e,t,n){"use strict";var r=n("71bd"),a=n.n(r);a.a},4882:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=n("ce5b"),s=n.n(a);n("bf40");r["default"].use(s.a,{});var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-navigation-drawer",{attrs:{persistent:"","mini-variant":e.miniVariant,clipped:e.clipped,"enable-resize-watcher":"",fixed:"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list",e._l(e.items,function(t,n){return r("v-list-tile",{key:n,attrs:{value:"true"}},[r("v-list-tile-content",[r("v-list-tile-title",{staticClass:"teal--text text--lighten-2",style:{cursor:"pointer"},domProps:{textContent:e._s(t.title)},on:{click:t.action}})],1)],1)}))],1),r("v-toolbar",{staticClass:"teal lighten-2",attrs:{app:"","clipped-left":e.clipped}},[r("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),r("v-toolbar-title",[r("span",{staticClass:"capitalize"},[e._v(e._s(e.currentRoute))])]),r("v-spacer"),r("img",{attrs:{src:n("02b0"),height:"35"}}),r("v-spacer")],1),r("v-content",[r("router-view")],1),r("v-footer",{staticClass:"teal lighten-2 justify-space-between",attrs:{fixed:e.fixed,app:""}},[r("span",{staticClass:"px-3"},[e._v("© 2018")]),r("span",{staticClass:"px-3"},[e._v("Make lending easier")])])],1)},o=[],c=(n("7f7f"),{name:"App",data:function(){return{userSearch:"",clipped:!1,drawer:!1,fixed:!1,items:[{title:"My Profile",action:this.profilePage},{title:"My Lends",action:this.lendsPage},{title:"My Calendar",action:this.calendarPage},{title:"Search Users",action:this.searchUsers},{title:"Logout",action:this.logout}],miniVariant:!1,right:!0,rightDrawer:!1}},computed:{currentRoute:function(){return this.$route.name}},methods:{logout:function(){this.$store.dispatch("logout"),this.drawer=!1},calendarPage:function(){this.$router.push("Calendar"),this.drawer=!1},lendsPage:function(){this.$router.push("Lends"),this.drawer=!1},profilePage:function(){this.$router.push("Profile"),this.drawer=!1},searchUsers:function(){this.$router.push("SearchUsers"),this.drawer=!1}}}),l=c,d=(n("034f"),n("2877")),u=Object(d["a"])(l,i,o,!1,null,null,null);u.options.__file="App.vue";var f=u.exports,v=n("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-slide-y-transition",{attrs:{mode:"out-in"}},[n("v-layout",{attrs:{"align-center":"","justify-center":"",row:""}},[e.newUserForm?n("v-form",{ref:"form",staticClass:"elevation-2 pa-5",on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[n("v-text-field",{attrs:{type:"text",label:"Username",required:""},model:{value:e.newUser.name,callback:function(t){e.$set(e.newUser,"name",t)},expression:"newUser.name"}}),n("v-text-field",{attrs:{type:"text",label:"E-mail",required:""},model:{value:e.newUser.email,callback:function(t){e.$set(e.newUser,"email",t)},expression:"newUser.email"}}),n("v-text-field",{attrs:{type:"password",label:"Password",required:""},model:{value:e.newUser.password,callback:function(t){e.$set(e.newUser,"password",t)},expression:"newUser.password"}}),n("v-btn",{staticClass:"teal lighten-2",attrs:{type:"submit"}},[e._v("\n          submit\n        ")]),n("v-btn",{staticClass:"teal lighten-2",on:{click:function(t){e.newUserForm=!e.newUserForm}}},[e._v("Returning user?")])],1):n("v-form",{ref:"form",staticClass:"elevation-2 pa-5",on:{submit:function(t){return t.preventDefault(),e.loginUser(t)}}},[n("v-text-field",{attrs:{type:"text",label:"Username",required:"",id:"username-field"},model:{value:e.creds.name,callback:function(t){e.$set(e.creds,"name",t)},expression:"creds.name"}}),n("v-text-field",{attrs:{type:"password",label:"Password",required:"",id:"password-field"},model:{value:e.creds.password,callback:function(t){e.$set(e.creds,"password",t)},expression:"creds.password"}}),n("v-btn",{staticClass:"teal lighten-2",attrs:{type:"submit"}},[e._v("\n          submit\n        ")]),n("v-btn",{staticClass:"teal lighten-2",on:{click:function(t){e.newUserForm=!e.newUserForm}}},[e._v("New user?")])],1)],1)],1),n("v-tour",{attrs:{name:"myTour",steps:e.steps}})],1)},h=[],p={name:"Home",data:function(){return{newUserForm:!1,creds:{email:"",password:""},newUser:{email:"",password:"",name:""},steps:[{target:"#username-field",content:"Welcome to Lendr! We've set up an example account for you to easily explore all of Lendr's functionality!",params:{placement:"top"}},{target:"#username-field",content:'Use username "Charlie"'},{target:"#password-field",content:'Use password "test1"'}]}},methods:{register:function(){this.$store.dispatch("register",this.newUser)},loginUser:function(){this.$store.dispatch("login",this.creds)}},mounted:function(){this.$tours["myTour"].start()}},g=p,b=(n("33fd"),Object(d["a"])(g,m,h,!1,null,"bf29fbc2",null));b.options.__file="Home.vue";var w=b.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fill-height"},[n("v-container",{attrs:{fluid:"","fill-height":"","justify-center":""}},[n("v-layout",{attrs:{row:"","justify-center":"","align-center":""}},[n("v-flex",{attrs:{xs12:"",md6:"","mx-3":"","mt-2":"","elevation-2":""}},[n("v-card",{staticClass:"white--text",attrs:{color:"teal"}},[n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{"xs-5":"","py-1":"","justify-center":""}},[n("v-img",{attrs:{src:this.user.picture,height:"125px",contain:""}}),n("v-layout",{attrs:{row:"","justify-center":""}},[n("v-btn",{attrs:{color:"teal accent-4",dark:""},on:{click:function(t){e.changeImg=!e.changeImg}}},[e._v("Change Image")])],1)],1),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.changeImg,callback:function(t){e.changeImg=t},expression:"changeImg"}},[n("v-card",[n("v-card-title",[e._v("\n                                    Update Profile Image\n                                ")]),n("v-card-text",[n("v-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.updateProfilePicture(t)}}},[n("v-text-field",{attrs:{label:"Image URL",required:""},model:{value:e.imgUrl,callback:function(t){e.imgUrl=t},expression:"imgUrl"}}),n("v-btn",{staticClass:"white--text",attrs:{type:"submit",color:"teal accent-4"},on:{click:function(t){e.changeImg=!1}}},[e._v("\n                                            Submit\n                                        ")])],1)],1),n("v-card-actions",[n("v-btn",{attrs:{color:"teal accent-4",flat:""},on:{click:function(t){e.changeImg=!1}}},[e._v("Close")])],1)],1)],1),n("v-flex",{attrs:{"xs-7":""}},[n("v-card-title",{staticStyle:{"justify-content":"center"},attrs:{"primary-title":""}},[n("div",[n("div",{staticClass:"headline"},[e._v("Welcome, "+e._s(this.user.name))]),n("div",[e._v("You have "+e._s(this.lends.length)+" current lends")]),n("div",[e._v("You have "+e._s(this.borrows.length)+" current borrows")]),n("v-btn",{attrs:{color:"teal accent-4",dark:""},on:{click:function(t){e.newLend=!e.newLend}}},[e._v("New Lend")])],1)])],1)],1),n("v-divider",{attrs:{light:""}}),n("v-card-actions",{staticClass:"pa-3"},[n("v-flex",[e._v("\n                            Your rating\n                            "),n("v-rating",{attrs:{readonly:"",color:"orange"},model:{value:e.rating,callback:function(t){e.rating=t},expression:"rating"}})],1)],1)],1)],1)],1)],1),n("v-layout",{attrs:{wrap:""}},[n("v-snackbar",{attrs:{bottom:"bottom"===e.y,left:"left"===e.x,"multi-line":"multi-line"===e.mode,right:"right"===e.x,timeout:e.timeout,top:"top"===e.y,vertical:"vertical"===e.mode},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n            You have unread borrows!\n            "),n("v-btn",{attrs:{color:"pink",flat:""},on:{click:e.viewLends}},[e._v("\n                View\n            ")])],1),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.newLend,callback:function(t){e.newLend=t},expression:"newLend"}},[n("v-card",[n("v-card-title",[e._v("\n                    Create New Lend\n                ")]),n("v-card-text",[n("v-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.findUserId(t)}}},[n("v-text-field",{attrs:{label:"Title",required:""},model:{value:e.lendTitle,callback:function(t){e.lendTitle=t},expression:"lendTitle"}}),n("v-text-field",{attrs:{label:"Item Description",required:""},model:{value:e.lendDescription,callback:function(t){e.lendDescription=t},expression:"lendDescription"}}),n("v-text-field",{attrs:{label:"Who Is This For?",required:""},model:{value:e.lendBorrower,callback:function(t){e.lendBorrower=t},expression:"lendBorrower"}}),n("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.dateMenu,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},on:{"update:returnValue":function(t){e.dateMenu=t}},model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[n("v-text-field",{attrs:{slot:"activator",label:"Due Date","prepend-icon":"event",readonly:""},slot:"activator",model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),n("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},[n("v-spacer"),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v("Cancel")]),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.$refs.menu.save(e.dateMenu)}}},[e._v("OK")])],1)],1)],1),n("v-btn",{staticClass:"white--text",attrs:{type:"submit",color:"teal accent-4"},on:{click:function(t){e.confirmLend=!e.confirmLend}}},[e._v("\n                            Submit\n                        ")])],1)],1),n("v-card-actions",[n("v-btn",{attrs:{color:"teal accent-4",flat:""},on:{click:function(t){e.newLend=!1}}},[e._v("Close")])],1)],1)],1),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.confirmLend,callback:function(t){e.confirmLend=t},expression:"confirmLend"}},[n("v-card",[n("v-card-title",[e._v("\n                    Confirm New Lend\n                ")]),n("v-card-text",{attrs:{"text-center":""}},[n("div",{staticClass:"title"},[e._v("Are you sure you want to create this lend?")]),n("div",{staticClass:"subheading"},[e._v("Title")]),n("div",{staticClass:"body-1"},[e._v(e._s(this.lendTitle))]),n("div",{staticClass:"subheading"},[e._v("Description")]),n("div",{staticClass:"body-1"},[e._v(e._s(this.lendDescription))]),n("div",{staticClass:"subheading"},[e._v("Borrower")]),n("div",{staticClass:"body-1"},[e._v(e._s(this.lendBorrower))]),n("div",{staticClass:"subheading"},[e._v("Due Date")]),n("div",{staticClass:"body-1"},[e._v(e._s(this.date))])]),n("v-btn",{on:{click:e.createLend}},[e._v("Confirm Lend")]),n("v-card-actions",[n("v-btn",{attrs:{color:"teal accent-4",flat:""},on:{click:function(t){e.confirmLend=!1}}},[e._v("Cancel")])],1)],1)],1)],1)],1)},_=[],y={name:"Profile",created:function(){this.$store.state.user._id||this.$router.push({name:"home"})},data:function(){return{imgUrl:"",changeImg:!1,newLend:!1,confirmLend:!1,lendTitle:"",lendDescription:"",lendBorrower:"",date:null,dateMenu:!1,menu:!1,y:"bottom",x:"right",mode:"",timeout:6e3,newRating:0,rateUser:!1}},computed:{user:function(){return this.$store.state.user},lends:function(){return this.$store.state.lends},borrows:function(){return this.$store.state.borrows},snackbar:function(){return this.$store.state.snackbar},rating:function(){return this.$store.state.rating}},methods:{createLend:function(){var e={title:this.lendTitle,description:this.lendDescription,borrower:{userId:this.$store.state.borrower},lendr:{userId:this.user._id},dueDate:this.date};this.$store.dispatch("createLend",e),this.newLend=!1,this.confirmLend=!1},deleteLend:function(){},updateProfilePicture:function(){var e={_id:this.user._id,picture:this.imgUrl};this.$store.dispatch("updateProfilePicture",e),console.log(e)},findUserId:function(){this.$store.dispatch("findUserId",this.lendBorrower)},viewLends:function(){this.$router.push("Lends")},sendRating:function(){var e={rating:this.newRating,userId:this.$store.state.user._id};this.$store.dispatch("sendRating",e),this.rateUser=!1}},components:{}},k=y,C=(n("1745"),Object(d["a"])(k,x,_,!1,null,"a81954ce",null));C.options.__file="Profile.vue";var U=C.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",{attrs:{row:"",wrap:"","justify-space-between":""}},[n("v-flex",{attrs:{xs12:"",md4:"","two-line":""}},[n("div",{staticClass:"display-1"},[e._v("\n        My Lends\n      ")]),n("v-divider"),n("v-expansion-panel",e._l(this.myLends,function(t,r){return n("v-expansion-panel-content",{key:r,attrs:{color:"teal"}},[n("div",{attrs:{slot:"header"},slot:"header"},[e._v(e._s(t.title))]),n("v-card",{attrs:{color:"grey darken-3 white--text"}},[n("div",{staticClass:"pl-4"},[e._v(e._s(t.description))]),n("v-layout",{staticClass:"pt-2",attrs:{row:""}},[t.borrower.returned?n("div",{staticClass:"pl-4 pt-2"},[e._v("\n                This item has been returned\n              ")]):n("div",{staticClass:"pl-3"},[n("v-btn",{attrs:{color:"teal"},on:{click:function(n){e.validateReturn(t)}}},[e._v("Has this been returned?")])],1)]),n("v-layout",{staticClass:"pt-2 pl-4",attrs:{row:""}},[t.lendr.lent?n("div",[e._v("\n                Your borrower has recieved this.\n              ")]):n("div",{staticClass:"red--text"},[e._v("\n                Your borrower has not recieved this.\n              ")])])],1)],1)}))],1),n("v-flex",{attrs:{xs12:"",md4:"","two-line":""}},[n("div",{staticClass:"display-1"},[e._v("\n        My Borrows\n      ")]),n("v-divider"),n("v-expansion-panel",e._l(this.myBorrows,function(t,r){return n("v-expansion-panel-content",{key:r,attrs:{color:"teal"}},[n("div",{attrs:{slot:"header"},slot:"header"},[e._v(e._s(t.title))]),n("v-card",{attrs:{color:"grey darken-3 white--text"}},[n("div",{staticClass:"pl-4"},[e._v(e._s(t.description))]),n("v-layout",{staticClass:"pt-2",attrs:{row:""}},[t.lendr.lent?n("div",{staticClass:"pl-4 pt-2"},[e._v("\n                You have marked this as recieved.\n              ")]):n("div",{staticClass:"pl-3"},[n("v-btn",{attrs:{color:"teal"},on:{click:function(n){e.validateLend(t)}}},[e._v("Have you recieved this item?")])],1)]),n("v-layout",{staticClass:"pt-2 pl-4",attrs:{row:""}},[t.lendr.returned?n("div",[e._v("\n                This item has been returned.\n              ")]):n("div",{staticClass:"red--text"},[e._v("\n                Your lendr has not marked this as returned.\n              ")])])],1)],1)}))],1)],1)],1)},$=[],D={name:"Lends",created:function(){this.$store.state.user._id||this.$router.push({name:"home"})},computed:{myLends:function(){return this.$store.state.lends},myBorrows:function(){return this.$store.state.borrows},user:function(){return this.$store.state.user}},methods:{validateLend:function(e){this.$store.dispatch("validateLend",e)},validateReturn:function(e){this.$store.dispatch("validateReturn",e)},changeDueDate:function(e){var t=new Date;return parseInt(e[5]+e[6])<t.getMonth()+1?"red":parseInt(e[8]+e[9])<t.getDate()?"red":void 0}}},j=D,I=Object(d["a"])(j,L,$,!1,null,null,null);I.options.__file="Lends.vue";var P=I.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Profile"},[n("v-flex",{attrs:{xs12:"","mx-3":"","mt-2":"","elevation-2":""}},[n("v-card",{staticClass:"white--text",attrs:{color:"teal"}},[n("v-layout",{attrs:{row:""}},[n("v-flex",{staticStyle:{"justify-content":"center"},attrs:{"xs-5":"","py-1":""}},[n("v-img",{attrs:{src:this.user.picture,height:"125px",contain:""}})],1),n("v-flex",{attrs:{"xs-7":""}},[n("v-card-title",{staticStyle:{"justify-content":"center"},attrs:{"primary-title":""}},[n("div",[n("div",{staticClass:"headline"},[e._v("Welcome to "+e._s(this.user.name)+"'s page")])])])],1)],1),n("v-divider",{attrs:{light:""}}),n("v-card-actions",{staticClass:"pa-3"},[n("v-flex",[e._v("\n          User's rating\n          "),n("v-rating",{attrs:{readonly:"",color:"orange"},model:{value:e.rating,callback:function(t){e.rating=t},expression:"rating"}}),n("v-btn",{on:{click:function(t){e.rateUser=!0}}},[e._v("Rate This User")]),n("v-dialog",{attrs:{"max-width":"290"},model:{value:e.rateUser,callback:function(t){e.rateUser=t},expression:"rateUser"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("How would you rate this user?")]),n("v-rating",{attrs:{color:"orange"},model:{value:e.newRating,callback:function(t){e.newRating=t},expression:"newRating"}}),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:function(t){e.rateUser=!1}}},[e._v("\n                  Cancel\n                ")]),n("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:e.sendRating}},[e._v("\n                  Rate\n                ")])],1)],1)],1)],1)],1)],1)],1),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-snackbar",{attrs:{bottom:"bottom"===e.y,left:"left"===e.x,"multi-line":"multi-line"===e.mode,right:"right"===e.x,timeout:e.timeout,top:"top"===e.y,vertical:"vertical"===e.mode},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      You have unread borrows!\n      "),n("v-btn",{attrs:{color:"pink",flat:""},on:{click:e.viewLends}},[e._v("\n        View\n      ")])],1)],1)],1)},S=[],B={name:"Profile",created:function(){this.$store.state.user._id||this.$router.push({name:"home"})},data:function(){return{imgUrl:"",changeImg:!1,newLend:!1,confirmLend:!1,lendTitle:"",lendDescription:"",lendBorrower:"",date:null,dateMenu:!1,menu:!1,y:"bottom",x:"right",mode:"",timeout:6e3,myCal:null,newRating:0,rateUser:!1}},computed:{user:function(){return this.$store.state.searchedUser},rating:function(){return this.$store.state.rating}},methods:{sendRating:function(){var e={rating:this.newRating,userId:this.$store.state.user._id};this.$store.dispatch("sendRating",e),this.rateUser=!1}}},M=B,T=(n("2f37"),Object(d["a"])(M,R,S,!1,null,"c25ce9b8",null));T.options.__file="FriendProfile.vue";var O=T.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-slide-y-transition",{attrs:{mode:"out-in"}},[n("v-layout",{attrs:{"align-center":"","justify-center":"",row:""}},[n("v-form",{ref:"form",staticClass:"elevation-2 pa-5",on:{submit:function(t){return t.preventDefault(),e.findUserId(t)}}},[n("v-text-field",{attrs:{type:"text",label:"Search for Username"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),n("v-btn",{staticClass:"teal lighten-2",attrs:{type:"submit"}},[e._v("\n          Search\n        ")])],1),n("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},[n("v-card",{attrs:{color:"primary",dark:""}},[n("v-card-text",[e._v("\n            Please stand by\n            "),n("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1),n("v-dialog",{attrs:{width:"500"},model:{value:e.notFound,callback:function(t){e.notFound=t},expression:"notFound"}},[n("v-card",[n("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[e._v('\n            User "'+e._s(this.username)+'" not found\n          ')]),n("v-card-text",[e._v("\n            Please try again with a different user name.\n          ")]),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(t){e.notFound=!1}}},[e._v("\n              OK\n            ")])],1)],1)],1)],1)],1)],1)},E=[],N={name:"App",data:function(){return{username:"",loading:!1,notFound:!1}},methods:{findUserId:function(){this.loading=!0,this.$store.dispatch("findUser",this.username)},noUsers:function(){this.loading=!1,this.notFound=!0}},watch:{loading:function(e){e&&setTimeout(this.noUsers,1e3)}}},Y=N,q=Object(d["a"])(Y,F,E,!1,null,null,null);q.options.__file="SearchUsers.vue";var A=q.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{row:"",wrap:"","justify-center":"","align-center":""}},[n("v-flex",{staticClass:"my-3 mx-3",attrs:{xs12:"",sm6:""}},[n("v-flex",{attrs:{"text-xs-center":""}},[n("p",{staticClass:"display-2 font-weight-medium"},[e._v("\n          My Calendar\n        ")])]),n("v-layout",[n("v-flex",{staticClass:"desktop-calendar"},[n("v-date-picker",{attrs:{"full-width":"",landscape:"",events:e.dueDates,"event-color":function(t){return e.checkDate(t)},color:"green lighten-1","header-color":"teal darken-2"},model:{value:e.myCal,callback:function(t){e.myCal=t},expression:"myCal"}})],1),n("v-flex",{staticClass:"mobile-calendar"},[n("v-date-picker",{attrs:{events:e.dueDates,"event-color":function(t){return e.checkDate(t)},color:"green lighten-1","header-color":"teal darken-2"},model:{value:e.myCal,callback:function(t){e.myCal=t},expression:"myCal"}})],1)],1)],1)],1)],1)},V=[],W={name:"Calendar",data:function(){return{myCal:null}},computed:{dueDates:function(){return this.$store.getters.dueDates}},methods:{checkDate:function(e){var t=new Date;return parseInt(e[5]+e[6])<t.getMonth()+1&&parseInt(e[8]+e[9])<t.getDate()?"red":"green"}}},J=W,z=(n("473b"),Object(d["a"])(J,H,V,!1,null,null,null));z.options.__file="Calendar.vue";var K=z.exports;r["default"].use(v["a"]);var G=new v["a"]({routes:[{path:"/",name:"home",component:w},{path:"/profile",name:"profile",component:U},{path:"/user",name:"user",component:O},{path:"/lends",name:"lends",component:P},{path:"/searchUsers",name:"searchUsers",component:A},{path:"/calendar",name:"calendar",component:K}]}),Q=(n("ac6a"),n("6762"),n("2fdb"),n("2f62")),X=n("bc3a"),Z=n.n(X),ee=n("8055"),te=n.n(ee),ne=(n("3c43"),{}),re=!window.location.host.includes("localhost"),ae=re?"//lendr-app.herokuapp.com/":"//localhost:3000/",se=Z.a.create({baseURL:ae+"auth/",timeout:3e3,withCredentials:!0}),ie=Z.a.create({baseURL:ae+"api/",timeout:6e4,withCredentials:!0});r["default"].use(Q["a"]);var oe=new Q["a"].Store({state:{user:{},searchedUser:{},lends:[],borrows:[],borrower:"",joined:!1,name:"",messages:[],roomData:{},snackbar:!1,rating:null},mutations:{setUser:function(e,t){e.user=t},setLends:function(e,t){e.lends=t},setBorrows:function(e,t){e.borrows=t},setBorrower:function(e,t){e.borrower=t},changeSnackbar:function(e,t){e.snackbar=t},setJoined:function(e,t){e.joined=!0,e.name=t},setRoom:function(e,t){e.roomData=t},newUser:function(e,t){r["default"].set(e.roomData.connectedUsers,t.userName,t.userName)},leave:function(e){e.joined=!1,e.name="",e.messages=[],e.roomData={}},setRating:function(e,t){e.rating=t},setSearchedUser:function(e,t){e.searchedUser=t,G.push({name:"user"})}},actions:{register:function(e,t){var n=e.commit;e.dispatch;se.post("register",t).then(function(e){n("setUser",e.data),G.push({name:"profile"})})},authenticate:function(e){var t=this,n=e.commit,r=e.dispatch;se.get("authenticate").then(function(e){n("setUser",e.data),n("setRating",e.data.rating.reduce(function(e,t){return e+t},0)/e.data.rating.length),G.push({name:"profile"}),r("getLends",t.state.user._id),r("getBorrows",t.state.user._id),r("join",t.state.user._id)})},login:function(e,t){var n=this,r=e.commit,a=e.dispatch;se.post("login",t).then(function(e){r("setUser",e.data),r("setRating",e.data.rating.reduce(function(e,t){return e+t},0)/e.data.rating.length),G.push({name:"profile"}),a("getLends",n.state.user._id),a("getBorrows",n.state.user._id)})},logout:function(e){var t=e.commit;se.delete("logout").then(function(e){G.push({name:"home"}),t("setUser",{})})},addLend:function(e,t){e.commit;var n=e.dispatch;ie.post("lend",t).then(function(e){n("getLends"),n("sendMessage",t.borrower.userId)}).catch(function(e){console.error(e.response.data.message)})},lendConfirm:function(){},deleteLend:function(e,t){var n=e.dispatch;e.commit;ie.delete("lend/"+t).then(function(e){n("getAllLends")}).catch(function(e){console.error(e.response.data.message)})},updateProfilePicture:function(e,t){var n=e.dispatch;ie.put("user/edit",t).then(function(){n("getUser")})},getUser:function(e){var t=e.commit;e.dispatch;ie.get("user").then(function(e){console.log(e.data[0]),t("setUser",e.data[0]),t("setRating",e.data[0].rating.reduce(function(e,t){return e+t},0)/e.data[0].rating.length)})},getLends:function(e,t){var n=e.commit;e.dispatch;ie.get("lend/mylends/"+t).then(function(e){n("setLends",e.data)}).catch(function(e){console.error(e.response.data.message)})},getBorrows:function(e,t){var n=e.commit;ie.get("lend/myborrows/"+t).then(function(e){n("setBorrows",e.data)}).catch(function(e){console.error(e.response.data.message)})},findUserId:function(e,t){var n=e.commit;e.dispatch;ie.get("/user/findByName/"+t).then(function(e){n("setBorrower",e.data)})},findUser:function(e,t){var n=e.commit;e.dispatch;ie.get("/user/findByNameFull/"+t).then(function(e){""!=e.data&&n("setSearchedUser",e.data)})},createLend:function(e,t){e.commit;var n=e.dispatch;ie.post("/lend/createLend/",t).then(function(e){n("getLends",t.lendr.userId),n("sendMessage",t.borrower.userId)}).catch(function(e){console.error(e.response.data.message)})},validateLend:function(e,t){e.commit;var n=e.dispatch;t.lendr.lent=!0,ie.put("/lend/myBorrows/update/"+t._id,t).then(function(){n("getBorrows",t.borrower.userId)})},validateReturn:function(e,t){e.commit;var n=e.dispatch;t.lendr.lent=!0,ie.put("/lend/myLends/update/"+t._id,t).then(function(){n("getLends",t.lendr.userId)})},hideSnackbar:function(e){var t=e.commit;t("changeSnackbar",!1)},showSnackbar:function(e){var t=e.commit,n=e.dispatch;t("changeSnackbar",!0),setTimeout(function(){n("hideSnackbar")},6e3)},sendRating:function(e,t){e.commit;var n=e.dispatch;ie.put("/user/rating",t).then(function(){n("getUser",t.userId)})},join:function(e,t){var n=e.commit,r=e.dispatch;n("setJoined",t),r("socket",t)},socket:function(e,t){var n=this,r=e.commit,a=e.dispatch;ne=te()(ae),ne.on("CONNECTED",function(e){console.log("Connected to socket"),ne.emit("join",{name:t})}),ne.on("joinedRoom",function(e){r("setRoom",e)}),ne.on("newUser",function(e){r("newUser",e)}),ne.on("newMessage",function(e){console.log("message for"+e),e==n.state.user._id&&(a("getBorrows",e),a("showSnackbar"),console.log("You have a new borrow!"))})},sendMessage:function(e,t){e.commit,e.dispatch;ne.emit("message",t)},leaveRoom:function(e,t){var n=e.commit;e.dispatch;ne.emit("leave"),ne.close(),n("leave")}},getters:{dueDates:function(e){var t=[];return e.lends.forEach(function(e){return t.push(e.dueDate)}),e.borrows.forEach(function(e){return t.push(e.dueDate)}),t}}}),ce=n("2536"),le=n.n(ce);n("2440"),r["default"].config.productionTip=!1,r["default"].use(le.a),new r["default"]({router:G,store:oe,created:function(){this.$store.dispatch("authenticate")},render:function(e){return e(f)}}).$mount("#app")},7:function(e,t){},"71bd":function(e,t,n){},c21b:function(e,t,n){},db71:function(e,t,n){}});
//# sourceMappingURL=app.38672094.js.map