(this.webpackJsonpkoappi=this.webpackJsonpkoappi||[]).push([[0],{35:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var s=t(5),n=t.n(s),i=t(28),c=t.n(i),r=(t(35),t(15)),o=t(14),d=t.n(o),l=t(17),u=t(19);t(37),t(49),t(50);u.a.initializeApp({apiKey:"AIzaSyC7Ax3VnVvwYLPuQcXAXRsF2ucP52w0hnI",authDomain:"koappi-test-server.firebaseapp.com",projectId:"koappi-test-server",storageBucket:"koappi-test-server.appspot.com",messagingSenderId:"922026094748",appId:"1:922026094748:web:a3f621331a1fa293eebd59",measurementId:"G-X4MNVQTV8Y"});u.a,u.a.auth();var j=u.a.firestore(),p=(u.a.storage(),function(){var e=Object(l.a)(d.a.mark((function e(a){var t,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.collection("landing").doc("messages").get();case 3:if(!(t=e.sent).exists){e.next=12;break}return(s=Array.from(t.data().messageList)).push(a),e.next=9,j.collection("landing").doc("messages").update({messageList:s});case 9:return e.abrupt("return",null);case 12:return e.next=14,j.collection("landing").doc("messages").set({messageList:[a]});case 14:return e.abrupt("return",null);case 15:e.next=20;break;case 17:return e.prev=17,e.t0=e.catch(0),e.abrupt("return",e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(a){return e.apply(this,arguments)}}()),m=function(){var e=Object(l.a)(d.a.mark((function e(a){var t,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=String(a).replace(/(\s*)/g,"").toLowerCase(),e.next=3,j.collection("permission").doc("code").get();case 3:return e.t0=e.sent.data().permissionCode,e.t1=t,(s=e.t0===e.t1)&&localStorage.setItem("isPermission",s),e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),b=t(1),h=function(e){var a=e.setIsLicensed,t=Object(s.useState)(""),i=Object(r.a)(t,2),c=i[0],o=i[1],u=function(){var e=Object(l.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,m(c);case 3:e.sent?a(!0):alert("\uc798\ubabb\ub41c \ucf54\ub4dc\uc785\ub2c8\ub2e4.");case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(b.jsx)(n.a.Fragment,{children:Object(b.jsx)("div",{className:"permission-container",children:Object(b.jsx)("form",{className:"permission-wrapper",onSubmit:u,children:Object(b.jsx)("input",{type:"text",name:"permissionCode",placeholder:"Enter Permission Code",onChange:function(e){var a=e.target,t=a.name,s=a.value;"permissionCode"===t&&o(s)}})})})})},x=t(22),g=t(6),O=t(29),f=t.n(O),v=(t(41),t.p+"static/media/logo.d34f1a49.png"),A=function(){function e(e){!function(e){var a=document.createElement("textarea");document.body.appendChild(a),a.value=e,a.select(),document.execCommand("copy"),document.body.removeChild(a)}(String(e)),alert("copy")}Object(s.useEffect)((function(){var e=document.createElement("script");return e.src="https://developers.kakao.com/sdk/js/kakao.js",e.async=!0,document.head.appendChild(e),function(){e&&document.head.removeChild(e)}}),[]);var a=function(){console.log("clipboardShare"),navigator.permissions.query({name:"clipboard-write"}).then((function(a){if("granted"!==a)e("https://tripu.fun/#/landing");else{var t=String("https://tripu.fun/#/landing");navigator.clipboard.writeText(t).then((function(){alert("copy")}),(function(){alert("error")}))}}))};return{clipboardShare:a,kakaoShare:function(){console.log("kakaoShare");var e="https://tripu.fun/#/landing";try{if(window.Kakao){var t=window.Kakao;t.isInitialized()||t.init("c17e02c875b0ed1852e6c348cd7da81a"),t.Link.sendDefault({objectType:"feed",content:{title:"TripU : customized Korean travel platform",description:"we are preparing hard now! Cheer for our one dream here",imageUrl:"https://tripu.fun/static/media/logo.d34f1a49.png",link:{mobileWebUrl:e,webUrl:e,androidExecutionParams:e,iosExecutionParams:e}},social:{likeCount:254,sharedCount:333,viewCount:513},buttons:[{title:"Move to Homepage",link:{mobileWebUrl:e,webUrl:e,androidExecutionParams:e,iosExecutionParams:e}}]})}}catch(s){a()}}}},N=function(e){var a=e.setLanguage,t=A(),s=t.clipboardShare,n=t.kakaoShare,i=function(e){e.preventDefault();var t=e.target.name;a(t)};return Object(b.jsx)("div",{className:"selectLangPage-container",children:Object(b.jsxs)("div",{className:"selectLangPage-wrapper",children:[Object(b.jsx)("img",{alt:"logo",src:v}),Object(b.jsx)("h1",{className:"title",children:"TripU"}),Object(b.jsx)("p",{className:"description",children:"Customized Korean travel product platform provided by Korean local residents."}),Object(b.jsxs)("div",{className:"submitLang",children:[Object(b.jsx)("input",{type:"button",onClick:i,name:"english",value:"English"}),Object(b.jsx)("input",{type:"button",onClick:i,name:"chinese",value:"\u4e2d\u570b\u8a9e"})]}),Object(b.jsxs)("div",{className:"landingShare-wrapper",children:[Object(b.jsxs)("label",{htmlFor:"landing-share_copy",className:"social-icon social-icon--copy",children:[Object(b.jsx)("i",{className:"fas fa-copy"}),Object(b.jsx)("input",{type:"button",id:"landing-share_copy",onClick:s}),Object(b.jsx)("div",{className:"name",children:"copy"})]}),Object(b.jsxs)("div",{className:"social-icon social-icon--kakaoTalk",children:[Object(b.jsx)("label",{htmlFor:"landing-share_kakao",children:Object(b.jsx)("i",{className:"fas fa-comment"})}),Object(b.jsx)("input",{type:"button",id:"landing-share_kakao",onClick:n}),Object(b.jsx)("div",{className:"name",children:"Kakao Talk"})]})]})]})})},k=function(e){var a=e.setSubmitDone,t=Object(s.useState)(!1),i=Object(r.a)(t,2),c=i[0],o=i[1],u=function(){var e=Object(l.a)(d.a.mark((function e(t){var s,n,i,r,o,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s=t.target,n=s[0].value,i=s[1].value,r=s[2].value,o={name:n,email:i,message:r,getInterview:c},e.next=8,p(o);case 8:(l=e.sent)?console.error(l):a(!0);case 10:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(b.jsxs)(n.a.Fragment,{children:[Object(b.jsxs)("div",{className:"submitLanding-container","data-aos":"fade-in","data-aos-offset":"300","data-aos-duration":"1000","data-aos-easing":"ease-in-out",children:[Object(b.jsx)("div",{className:"submitLanding-title",children:Object(b.jsx)("p",{children:"Experience TripU Faster than Anyone Else!"})}),Object(b.jsxs)("div",{className:"submitLanding-wrapper",children:[Object(b.jsxs)("div",{className:"info-wrapper",children:[Object(b.jsx)("div",{className:"title",children:"The first chance to experience TripU"}),Object(b.jsx)("p",{children:"Please leave your contact information,"}),Object(b.jsx)("p",{children:"and we will contact you as soon as TripU is released!"}),Object(b.jsx)("p",{children:"Please note that Team KOAPPI can ask for an interview for future product development."}),Object(b.jsx)("div",{className:"title",children:"Contact Info"}),Object(b.jsx)("p",{children:"Team KOAPPI | CEO : Hyun Lee"}),Object(b.jsx)("p",{children:"E-mail: funtripu@gmail.com"})]}),Object(b.jsxs)("form",{className:"form-wrapper",onSubmit:u,children:[Object(b.jsxs)("div",{className:"enter-userInfo",children:[Object(b.jsx)("input",{type:"text",className:"form-control",id:"name",placeholder:"Name",required:!0}),Object(b.jsx)("input",{type:"email",className:"form-control",id:"email",placeholder:"E-mail Address",required:!0})]}),Object(b.jsx)("div",{className:"enter-message",children:Object(b.jsx)("textarea",{className:"form-control",id:"message",rows:"3",placeholder:"Message",required:!0})}),Object(b.jsxs)("div",{className:"get-permission",children:[Object(b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"landing-permisiion-btn",onClick:function(){return o((function(e){return!e}))}}),Object(b.jsx)("label",{className:"form-check-label",htmlFor:"landing-permisiion-btn",children:"I am willing to take an interview for future product development."})]}),Object(b.jsx)("div",{className:"submit-wrapper",children:Object(b.jsx)("button",{type:"submit",id:"submitMessage",children:"Leave Message"})})]})]})]}),Object(b.jsxs)("footer",{className:"landing_footer-wrapper",children:[Object(b.jsx)("div",{className:"text-muted text-center",children:"\xa9 2021 KOAPPI."}),Object(b.jsx)("div",{className:"text-muted text-center",children:Object(b.jsx)("small",{children:"font by Open-sans."})})]})]})},w=t.p+"static/media/foreigner.ce9a2e35.png",y=t.p+"static/media/mock-up-1.742ba682.png",P=t.p+"static/media/mock-up-2-full.8be4254e.png",I=t.p+"static/media/korea.eeda08b1.png",E="data:image/png;base64,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",q=t.p+"static/media/airplane.1cf09d49.png",T=function(){return Object(b.jsxs)(n.a.Fragment,{children:[Object(b.jsxs)("div",{className:"landing_question-container",children:[Object(b.jsxs)("div",{className:"landing_question-wrapper q1 landing-fullsize",children:[Object(b.jsx)("h1",{"data-aos":"fade-up","data-aos-offset":"0","data-aos-duration":"400","data-aos-easing":"ease-in-out-quad",children:"Hello!"}),Object(b.jsx)("p",{"data-aos":"fade-up","data-aos-offset":"0","data-aos-duration":"1000","data-aos-easing":"ease-in-out-quad","data-aos-delay":"400",children:"Have you ever experienced any inconvenience"}),Object(b.jsx)("p",{"data-aos":"fade-up","data-aos-offset":"0","data-aos-duration":"1000","data-aos-easing":"ease-in-out-quad","data-aos-delay":"400",children:"while making an itinerary?"})]}),Object(b.jsxs)("div",{className:"landing_question-wrapper q2 landing-fullsize",children:[Object(b.jsx)("h1",{"data-aos":"fade-right","data-aos-offset":"0","data-aos-duration":"400","data-aos-easing":"ease-in-out-quad",children:"Or,"}),Object(b.jsx)("p",{"data-aos":"fade-right","data-aos-offset":"200","data-aos-duration":"1000","data-aos-easing":"ease-in-out-quad",children:"Are you tired of common Trip on internet?"})]})]}),Object(b.jsxs)("div",{className:"landing_introduce-container",children:[Object(b.jsxs)("div",{className:"landing_introduce-wrapper landing-fullsize",children:[Object(b.jsx)("h3",{children:"Now,"}),Object(b.jsx)("img",{className:"logo",alt:"logo",src:v,"data-aos":"fade-up","data-aos-offset":"300","data-aos-duration":"600","data-aos-easing":"ease-out-quad"}),Object(b.jsx)("img",{className:"foreigner",alt:"img",src:w}),Object(b.jsxs)("p",{children:["just request your own trip on"," ",Object(b.jsx)("span",{className:"p_emphasize",children:"TripU "}),"!"]})]}),Object(b.jsxs)("div",{className:"landing_introduce-wrapper landing-fullsize",children:[Object(b.jsx)("h3",{children:"Easy,"}),Object(b.jsxs)("div",{className:"mockImg-wrapper",children:[Object(b.jsx)("img",{alt:"mockImg1",src:y,"data-aos":"fade-up","data-aos-offset":"-50","data-aos-duration":"600","data-aos-easing":"ease-in-out-quad"}),Object(b.jsx)("img",{alt:"mockImg2",src:P,"data-aos":"fade-up","data-aos-offset":"-25","data-aos-duration":"600","data-aos-easing":"ease-in-out-quad"})]}),Object(b.jsxs)("p",{children:["and also ",Object(b.jsx)("span",{children:"convenient"}),"."]})]}),Object(b.jsxs)("div",{className:"landing_introduce-wrapper landing-fullsize",children:[Object(b.jsx)("h3",{className:"p3-h3",children:"Then,"}),Object(b.jsxs)("div",{className:"pin_image-wrapper",children:[Object(b.jsx)("img",{className:"land",alt:"land_img",src:I}),Object(b.jsx)("img",{"data-aos":"zoom-in-down","data-aos-offset":"300","data-aos-duration":"300","data-aos-easing":"ease-out-quad",className:"pin",alt:"pin",src:E}),Object(b.jsx)("img",{"data-aos":"zoom-in-down","data-aos-offset":"260","data-aos-duration":"300","data-aos-easing":"ease-out-quad",className:"pin",alt:"pin",src:E}),Object(b.jsx)("img",{"data-aos":"zoom-in-down","data-aos-offset":"220","data-aos-duration":"300","data-aos-easing":"ease-out-quad",className:"pin",alt:"pin",src:E}),Object(b.jsx)("img",{"data-aos":"zoom-in-down","data-aos-offset":"200","data-aos-duration":"300","data-aos-easing":"ease-out-quad",className:"pin",alt:"pin",src:E}),Object(b.jsx)("img",{"data-aos":"zoom-in-down","data-aos-offset":"150","data-aos-duration":"300","data-aos-easing":"ease-out-quad",className:"pin",alt:"pin",src:E})]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("span",{children:"Utriper"})," will make your own customized itinerary!"]}),Object(b.jsxs)("div",{className:"utriper-info","data-aos":"fade-up","data-aos-offset":"0","data-aos-duration":"600","data-aos-easing":"ease-in-out-quad",children:[Object(b.jsx)("h4",{children:"Who is Utriper?"}),Object(b.jsx)("p",{children:"native Korean residents who know their region well."})]})]}),Object(b.jsxs)("div",{className:"p4 landing_introduce-wrapper landing-fullsize",children:[Object(b.jsxs)("p",{children:[Object(b.jsx)("span",{children:"TripU"})," will do all the anoying tasks of preparation stage!"]}),Object(b.jsx)("img",{className:"landing-airplaneImg",alt:"airplane_img",src:q,"data-aos":"fade-up-right","data-aos-offset":"200","data-aos-duration":"600","data-aos-easing":"ease-out-quad"}),Object(b.jsx)("p",{children:"You can Just Enjoy!"})]})]})]})},U=function(){return Object(b.jsx)("div",{className:"landingSuccess-container",children:Object(b.jsxs)("div",{className:"landingSuccess-wrapper","data-aos":"fade","data-aos-offset":"0","data-aos-duration":"600","data-aos-easing":"ease-in-out-quad",children:[Object(b.jsx)("img",{alt:"logo",src:v}),Object(b.jsx)("h3",{children:"Thank you for your interest !"}),Object(b.jsx)("p",{children:"We will contact you as soon as possible! Hope to see you in Korea with your own happiness we\u2019ll make !"}),Object(b.jsx)("input",{type:"button",value:"Back to main page"})]})})},H=function(){var e=Object(s.useState)(null),a=Object(r.a)(e,2),t=a[0],i=a[1],c=Object(s.useState)(!1),o=Object(r.a)(c,2),d=o[0],l=o[1];return Object(s.useEffect)((function(){f.a.init()}),[]),Object(b.jsx)(n.a.Fragment,{children:d?Object(b.jsx)(U,{}):Object(b.jsx)(n.a.Fragment,{children:t?Object(b.jsxs)("div",{className:"landing-container",children:[Object(b.jsx)(T,{}),Object(b.jsx)(k,{setSubmitDone:l})]}):Object(b.jsx)(N,{setLanguage:i})})})},C=function(){return Object(b.jsx)("div",{className:"noPage-container",children:Object(b.jsxs)("div",{className:"noPage-wrapper",children:[Object(b.jsxs)("div",{className:"logo-box",children:[Object(b.jsx)("div",{className:"img-box",children:Object(b.jsx)("img",{alt:"logo",src:v})}),Object(b.jsxs)("div",{className:"text-box",children:[Object(b.jsx)("div",{className:"errorCode-box",children:Object(b.jsx)("span",{children:"404"})}),Object(b.jsx)("div",{className:"logoText-box",children:Object(b.jsx)("span",{children:"U're Gonna just Enjoy ! "})})]})]}),Object(b.jsx)("h1",{className:"warning-message",children:"OOPS! PAGE NOT FOUND"}),Object(b.jsx)("div",{className:"goback-wrapper",children:Object(b.jsx)(x.b,{to:"/",className:"goback-btn",onclick:function(){console.log("go to homePage")},children:Object(b.jsx)("span",{children:"GO TO HOME"})})})]})})},L=function(){var e=function(){var e=Object(s.useState)(!1),a=Object(r.a)(e,2),t=a[0],n=a[1];return Object(s.useEffect)((function(){var e=localStorage.getItem("isPermission");Boolean(e)&&n(!0)}),[]),{isLicensed:t,setIsLicensed:n}}(),a=e.isLicensed,t=e.setIsLicensed;return Object(b.jsx)(n.a.Fragment,{children:a?Object(b.jsx)(x.a,{children:Object(b.jsxs)(g.d,{children:[Object(b.jsx)(g.b,{exact:!0,path:"/",children:Object(b.jsx)(g.a,{to:"/landing"})}),Object(b.jsx)(g.b,{exact:!0,path:"/landing",component:H}),Object(b.jsx)(g.b,{path:"*",component:C})]})}):Object(b.jsx)(h,{setIsLicensed:t})})};c.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(L,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.00719abf.chunk.js.map