(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{247:function(e,n){},256:function(e,n){},274:function(e,n){},276:function(e,n){},295:function(e,n){},296:function(e,n){},359:function(e,n){},361:function(e,n){},394:function(e,n){},396:function(e,n){},397:function(e,n){},402:function(e,n){},404:function(e,n){},410:function(e,n){},412:function(e,n){},425:function(e,n){},437:function(e,n){},440:function(e,n){},445:function(e,n){},453:function(e,n){},462:function(e,n){},464:function(e,n){},534:function(e,n,t){},535:function(e,n,t){"use strict";t.r(n);var c,r,a,o,i,s,l,d,u,j,x,b,h,p,O,f,g=t(2),m=t(86),v=t.n(m),y=t(30),w=t(18),C=t.n(w),S=t(46),T=t(12),A=t(60),E=t(70),N=t.n(E),_=t(221),k=t.n(_),D=t(71),M=t(222),I=t(17),L={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CONNECTION_REQUEST":return Object(I.a)(Object(I.a)({},L),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(I.a)(Object(I.a)({},e),{},{loading:!1,account:n.payload.account,smartContract:n.payload.smartContract,web3:n.payload.web3});case"CONNECTION_FAILED":return Object(I.a)(Object(I.a)({},L),{},{loading:!1,errorMsg:n.payload});case"UPDATE_ACCOUNT":return Object(I.a)(Object(I.a)({},e),{},{account:n.payload.account});default:return e}},R={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHECK_DATA_REQUEST":return Object(I.a)(Object(I.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(I.a)(Object(I.a)({},e),{},{loading:!1,totalSupply:n.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(I.a)(Object(I.a)({},R),{},{loading:!1,error:!0,errorMsg:n.payload});default:return e}},F=Object(D.b)({blockchain:z,data:K}),P=[M.a],U=Object(D.c)(D.a.apply(void 0,P)),W=Object(D.d)(F,U),Y=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},H=function(){return function(){var e=Object(S.a)(C.a.mark((function e(n){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,W.getState().blockchain.smartContract.methods.totalSupply().call();case 4:t=e.sent,n({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:t}}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),n(Y("Could not load data from contract."));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}()},B=function(e){return{type:"CONNECTION_FAILED",payload:e}},G=function(e){return function(){var n=Object(S.a)(C.a.mark((function n(t){return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t({type:"UPDATE_ACCOUNT",payload:{account:e}}),t(H());case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},Q=t(13),X=Q.a.div(c||(c=Object(T.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var n=e.image;return n?"url(".concat(n,")"):"none"})),q=Q.a.div(r||(r=Object(T.a)(["\n  height: 8px;\n  width: 8px;\n"]))),J=Q.a.div(a||(a=Object(T.a)(["\n  height: 16px;\n  width: 16px;\n"]))),Z=Q.a.div(o||(o=Object(T.a)(["\n  height: 24px;\n  width: 24px;\n"]))),V=Q.a.div(i||(i=Object(T.a)(["\n  height: 32px;\n  width: 32px;\n"]))),$=Q.a.div(s||(s=Object(T.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var n=e.flex;return n||0}),(function(e){var n=e.fd;return n||"column"}),(function(e){var n=e.jc;return n||"flex-start"}),(function(e){var n=e.ai;return n||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var n=e.image;return n?"url(".concat(n,")"):"none"})),ee=Q.a.p(l||(l=Object(T.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),ne=(Q.a.p(d||(d=Object(T.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),Q.a.p(u||(u=Object(T.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),te=(Q.a.div(j||(j=Object(T.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),t(1)),ce=Q.a.button(x||(x=Object(T.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),re=Q.a.button(b||(b=Object(T.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),ae=Q.a.div(h||(h=Object(T.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),oe=Q.a.img(p||(p=Object(T.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),ie=Q.a.img(O||(O=Object(T.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),se=Q.a.a(f||(f=Object(T.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var le,de,ue,je,xe,be,he,pe=function(){var e,n,t=Object(A.b)(),c=Object(A.c)((function(e){return e.blockchain})),r=Object(A.c)((function(e){return e.data})),a=Object(g.useState)(!1),o=Object(y.a)(a,2),i=o[0],s=o[1],l=Object(g.useState)("Click buy to mint your NFT."),d=Object(y.a)(l,2),u=d[0],j=d[1],x=Object(g.useState)(1),b=Object(y.a)(x,2),h=b[0],p=b[1],O=Object(g.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),f=Object(y.a)(O,2),m=f[0],v=f[1],w=function(){""!==c.account&&null!==c.smartContract&&t(H(c.account))},T=function(){var e=Object(S.a)(C.a.mark((function e(){var n,t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,v(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.useEffect)((function(){T()}),[]),Object(g.useEffect)((function(){w()}),[c.account]),Object(te.jsx)(X,{children:Object(te.jsxs)($,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:m.SHOW_BACKGROUND?"/config/images/bg.jpg":null,children:[Object(te.jsx)(oe,{alt:"logo",src:"/config/images/logo.png"}),Object(te.jsx)(J,{}),Object(te.jsxs)(ae,{flex:1,style:{padding:24},test:!0,children:[Object(te.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(te.jsx)(ie,{alt:"example",src:"/config/images/example.gif"})}),Object(te.jsx)(V,{}),Object(te.jsxs)($,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"4px dashed var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(te.jsxs)(ee,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[r.totalSupply," / ",m.MAX_SUPPLY]}),Object(te.jsx)(ne,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(te.jsx)(se,{target:"_blank",href:m.SCAN_LINK,children:(e=m.CONTRACT_ADDRESS,n=15,e.length>n?"".concat(e.substring(0,n),"..."):e)})}),Object(te.jsx)(J,{}),Number(r.totalSupply)>=m.MAX_SUPPLY?Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(ee,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(te.jsxs)(ne,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",m.NFT_NAME," on"]}),Object(te.jsx)(J,{}),Object(te.jsx)(se,{target:"_blank",href:m.MARKETPLACE_LINK,children:m.MARKETPLACE})]}):Object(te.jsxs)(te.Fragment,{children:[Object(te.jsxs)(ee,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",m.SYMBOL," costs ",m.DISPLAY_COST," ",m.NETWORK.SYMBOL,"."]}),Object(te.jsx)(q,{}),Object(te.jsx)(ne,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(te.jsx)(J,{}),""===c.account||null===c.smartContract?Object(te.jsxs)($,{ai:"center",jc:"center",children:[Object(te.jsxs)(ne,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",m.NETWORK.NAME," network"]}),Object(te.jsx)(J,{}),Object(te.jsx)(ce,{onClick:function(e){e.preventDefault(),t(function(){var e=Object(S.a)(C.a.mark((function e(n){var t,c,r,a,o,i,s,l,d;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"CONNECTION_REQUEST"}),e.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:return c=e.sent,e.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=e.sent,e.next=12,r.json();case 12:if(a=e.sent,o=window,!(i=o.ethereum)||!i.isMetaMask){e.next=33;break}return N.a.setProvider(i),s=new k.a(i),e.prev=18,e.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=e.sent,e.next=24,i.request({method:"net_version"});case 24:e.sent==a.NETWORK.ID?(d=new N.a(c,a.CONTRACT_ADDRESS),n({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:s}}),i.on("accountsChanged",(function(e){n(G(e[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):n(B("Change network to ".concat(a.NETWORK.NAME,"."))),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(18),n(B("Something went wrong."));case 31:e.next=34;break;case 33:n(B("Install Metamask."));case 34:case"end":return e.stop()}}),e,null,[[18,28]])})));return function(n){return e.apply(this,arguments)}}()),w()},children:"CONNECT"}),""!==c.errorMsg?Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(J,{}),Object(te.jsx)(ne,{style:{textAlign:"center",color:"var(--accent-text)"},children:c.errorMsg})]}):null]}):Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(ne,{style:{textAlign:"center",color:"var(--accent-text)"},children:u}),Object(te.jsx)(Z,{}),Object(te.jsxs)($,{ai:"center",jc:"center",fd:"row",children:[Object(te.jsx)(re,{style:{lineHeight:.4},disabled:i?1:0,onClick:function(e){e.preventDefault(),function(){var e=h-1;e<1&&(e=1),p(e)}()},children:"-"}),Object(te.jsx)(Z,{}),Object(te.jsx)(ne,{style:{textAlign:"center",color:"var(--accent-text)"},children:h}),Object(te.jsx)(Z,{}),Object(te.jsx)(re,{disabled:i?1:0,onClick:function(e){e.preventDefault(),function(){var e=h+1;e>10&&(e=10),p(e)}()},children:"+"})]}),Object(te.jsx)(J,{}),Object(te.jsx)($,{ai:"center",jc:"center",fd:"row",children:Object(te.jsx)(ce,{disabled:i?1:0,onClick:function(e){e.preventDefault(),function(){var e=m.WEI_COST,n=m.GAS_LIMIT,r=String(e*h),a=String(n*h);console.log("Cost: ",r),console.log("Gas limit: ",a),j("Minting your ".concat(m.NFT_NAME,"...")),s(!0),c.smartContract.methods.mint(h).send({gasLimit:String(a),to:m.CONTRACT_ADDRESS,from:c.account,value:r}).once("error",(function(e){console.log(e),j("Sorry, something went wrong please try again later."),s(!1)})).then((function(e){console.log(e),j("WOW, the ".concat(m.NFT_NAME," is yours! go visit Opensea.io to view it.")),s(!1),t(H(c.account))}))}(),w()},children:i?"BUSY":"BUY"})})]})]}),Object(te.jsx)(Z,{})]}),Object(te.jsx)(V,{}),Object(te.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(te.jsx)(ie,{alt:"example",src:"/config/images/example.gif",style:{transform:"scaleX(-1)"}})})]}),Object(te.jsx)(Z,{}),Object(te.jsxs)($,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(te.jsxs)(ne,{style:{textAlign:"center",color:"var(--primary-text)"},children:["Please make sure you are connected to the right network (",m.NETWORK.NAME," Mainnet) and the correct address. Please note: Once you make the purchase, you cannot undo this action."]}),Object(te.jsx)(J,{}),Object(te.jsxs)(ne,{style:{textAlign:"center",color:"var(--primary-text)"},children:["We have set the gas limit to ",m.GAS_LIMIT," for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit."]})]})]})})},Oe=t(31),fe=Q.a.div(le||(le=Object(T.a)(["\n  width: 100%;\n"]))),ge=Object(Q.a)(fe)(de||(de=Object(T.a)(["\n  width: 100%;\n  display: flex;\n"]))),me=Object(Q.a)(ge)(ue||(ue=Object(T.a)(["\n  ",";\n  width: 100%;\n  ",";\n  ",";\n  ",";\n  box-sizing: content-box;\n  margin: 10px;\n\n  @media screen and (min-width: 580px) and (max-width: 650px) {\n    flex-direction: column-reverse;\n    height: 100px;\n  }\n"])),Oe.b,Oe.e,Oe.c,Oe.d),ve=Object(Q.a)(ge)(je||(je=Object(T.a)(["\n  text-align: center;\n"]))),ye=Object(Q.a)(ge)(xe||(xe=Object(T.a)(["\n  ",";\n  text-align: center;\n  flex-direction: column;\n  justify-content: center;\n  ",";\n  ",";\n  ",";\n"])),Oe.d,Oe.g,Oe.f,Oe.a),we=function(e){var n=Object.assign({},e);return Object(te.jsx)(ye,Object(I.a)({fontSize:["10vw","1em"],minWidth:["15vw",62,66],color:"light.tertiary"},n))},Ce=Object(Q.a)(fe)(be||(be=Object(T.a)(["\n  ",";\n"])),Oe.d),Se=Object(Q.a)(ge)(he||(he=Object(T.a)(["\n  text-align: center;\n  flex-direction: column;\n"]))),Te=function(e){return e<10?"0".concat(e):e},Ae=function(e){var n=(new Date).getTime(),t=e.getTime();if(n>t)return{days:0,hours:0,minutes:0,seconds:0};var c=Math.abs(t-n)/1e3,r=Math.floor(c/86400);c-=60*r*60*24;var a=Math.floor(c/3600)%24;c-=60*a*60;var o=Math.floor(c/60)%60;return c-=60*o,{days:r,hours:a,minutes:o,seconds:Math.floor(c%60)}},Ee=function(e,n){return(new Date).getTime()>e.getTime()&&(new Date).getTime()<n.getTime()},Ne=18e5,_e=function(e){return new Date(e.getTime()+Ne)},ke=function(e){var n=e.date,t=e.startDate,c=e.onDeadline,r=Object(g.useState)({days:0,hours:0,minutes:0,seconds:0}),a=Object(y.a)(r,2),o=a[0],i=a[1],s=Object(g.useState)(Ee(t,_e(n))),l=Object(y.a)(s,2),d=l[0],u=l[1],j=function(e){setTimeout((function(){u(!1)}),e)};return Object(g.useEffect)((function(){u(Ee(t,_e(n)));var e,r=Ae(n),a=r.days,o=r.hours,s=r.minutes,l=r.seconds;return i({days:a,hours:o,minutes:s,seconds:l}),a+o+s+l>0?e=setInterval((function(){var r=Ae(n);i(r),r.days+r.hours+r.minutes+r.seconds===0?(j(Ne),clearInterval(e),c()):d||u(Ee(t,_e(n)))}),1e3):d&&j(_e(n).getTime()-Date.now()),function(){clearInterval(e)}}),[]),Object(te.jsx)(ge,{width:1,children:d&&Object(te.jsx)(me,{fontSize:["medium"],minHeight:[134,84,64],p:[null,"small"],fontFamily:"Gotham.bold",flexDirection:["column-reverse","row"],justifyContent:["space-around","center"],children:Object(te.jsxs)(ve,{justifyContent:"center",fontSize:["largeCounter"],children:[Object(te.jsxs)(Se,{children:[Object(te.jsx)(we,{children:Te(o.days)}),Object(te.jsx)(Ce,{fontSize:[10,8,10],children:"days"})]}),Object(te.jsxs)(Se,{children:[Object(te.jsx)(we,{children:Te(o.hours)}),Object(te.jsx)(Ce,{fontSize:[10,8,10],children:"hours"})]}),Object(te.jsxs)(Se,{children:[Object(te.jsx)(we,{children:Te(o.minutes)}),Object(te.jsx)(Ce,{fontSize:[10,8,10],children:"minutes"})]}),Object(te.jsxs)(Se,{children:[Object(te.jsx)(we,{children:Te(o.seconds)}),Object(te.jsx)(Ce,{fontSize:[10,8,10],children:"seconds"})]})]})})})};ke.defaultProps={onDeadline:function(e){return e}};var De,Me,Ie,Le,ze,Re=ke,Ke=Q.a.div(De||(De=Object(T.a)(["\n  width: 100%;\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background-image: linear-gradient(rgb(225, 246, 100), rgb(254, 176, 254));\n"]))),Fe=Q.a.h1(Me||(Me=Object(T.a)(["\n  font-size: 24px;\n  margin: 10px;\n"]))),Pe=Q.a.p(Ie||(Ie=Object(T.a)(["\n  font-size: 18px;\n"]))),Ue=(Q.a.a(Le||(Le=Object(T.a)(["\n  font-size: 14px;\n  margin: 10px;\n"]))),Q.a.img(ze||(ze=Object(T.a)(["\n  width: 200px;\n  margin: 20px;\n"])))),We=function(e){var n=e.children;return Object(te.jsxs)(Ke,{children:[Object(te.jsx)(Ue,{alt:"Galexyz",src:"/halfies.gif"}),Object(te.jsx)(Fe,{children:"NFT Drop Coming Soon!!"}),Object(te.jsx)(Pe,{children:"1111 of Galexyz will be available very soon!"}),Object(te.jsx)("div",{children:n}),Object(te.jsx)("div",{children:Object(te.jsx)("a",{children:Object(te.jsx)("span",{children:"Join the Community"})})}),Object(te.jsx)("header",{children:Object(te.jsx)("div",{class:"container",children:Object(te.jsxs)("div",{class:"menu",children:[Object(te.jsx)("a",{href:"https://discord.gg/74ZZmrECre",target:"_blank",rel:"noopener noreferrer",children:Object(te.jsx)("img",{src:"/discord.png",alt:"Discord"})}),Object(te.jsx)("a",{href:"https://twitter.com/GalexyzNft",target:"_blank",rel:"noopener noreferrer",children:Object(te.jsx)("img",{src:"/twitter.png",alt:"Twitter"})})]})})}),Object(te.jsx)(Ue,{alt:"Halfie NFT Logo",src:"/logo192.png"})]})},Ye=new Date,He=new Date("2022-08-05T19:00:00.000Z"),Be=function(){var e=He.getTime()-Ye.getTime();console.log(e);var n=Object(g.useState)(!(e>0)),t=Object(y.a)(n,2),c=t[0],r=t[1];return c?Object(te.jsx)(pe,{}):Object(te.jsx)(We,{children:Object(te.jsx)(Re,{date:He,startDate:Ye,onDeadline:function(){return r(!0)}})})},Ge=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,539)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,o=n.getTTFB;t(e),c(e),r(e),a(e),o(e)}))};t(534);v.a.render(Object(te.jsx)(A.a,{store:W,children:Object(te.jsx)(Be,{})}),document.getElementById("root")),Ge()}},[[535,1,2]]]);
//# sourceMappingURL=main.7eaf3e27.chunk.js.map