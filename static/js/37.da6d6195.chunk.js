(this["webpackJsonp2u-web-frontend"]=this["webpackJsonp2u-web-frontend"]||[]).push([[37],{1098:function(e,t,n){"use strict";var a=n(6),r=n.n(a),c=n(7),o=n.n(c),i=(n(2),n(0)),l=n.n(i),u=n(4),d=n(16),s=n(19),b=n(29);function f(e){var t=e.children,n=e.className,a=e.computer,c=e.color,i=e.floated,b=e.largeScreen,v=e.mobile,m=e.only,O=e.stretched,p=e.tablet,j=e.textAlign,g=e.verticalAlign,h=e.widescreen,y=e.width,C=o()(c,Object(u.a)(O,"stretched"),Object(u.c)(m,"only"),Object(u.d)(j),Object(u.e)(i,"floated"),Object(u.f)(g),Object(u.g)(a,"wide computer"),Object(u.g)(b,"wide large screen"),Object(u.g)(v,"wide mobile"),Object(u.g)(p,"wide tablet"),Object(u.g)(h,"wide widescreen"),Object(u.g)(y,"wide"),"column",n),S=Object(d.a)(f,e),E=Object(s.a)(f,e);return l.a.createElement(E,r()({},S,{className:C}),t)}f.handledProps=["as","children","className","color","computer","floated","largeScreen","mobile","only","stretched","tablet","textAlign","verticalAlign","widescreen","width"],f.propTypes={},f.create=Object(b.h)(f,(function(e){return{children:e}})),t.a=f},1108:function(e,t,n){"use strict";n(87);var a=n(6),r=n.n(a),c=n(7),o=n.n(c),i=(n(2),n(0)),l=n.n(i),u=n(4),d=n(16),s=n(19);function b(e){var t=e.centered,n=e.children,a=e.className,c=e.color,i=e.columns,f=e.divided,v=e.only,m=e.reversed,O=e.stretched,p=e.textAlign,j=e.verticalAlign,g=o()(c,Object(u.a)(t,"centered"),Object(u.a)(f,"divided"),Object(u.a)(O,"stretched"),Object(u.c)(v,"only"),Object(u.c)(m,"reversed"),Object(u.d)(p),Object(u.f)(j),Object(u.g)(i,"column",!0),"row",a),h=Object(d.a)(b,e),y=Object(s.a)(b,e);return l.a.createElement(y,r()({},h,{className:g}),n)}b.handledProps=["as","centered","children","className","color","columns","divided","only","reversed","stretched","textAlign","verticalAlign"],b.propTypes={},t.a=b},1180:function(e,t,n){"use strict";n(87);var a=n(6),r=n.n(a),c=n(7),o=n.n(c),i=(n(2),n(0)),l=n.n(i),u=n(4),d=n(16),s=n(19),b=n(1098),f=n(1108);function v(e){var t=e.celled,n=e.centered,a=e.children,c=e.className,i=e.columns,b=e.container,f=e.divided,m=e.doubling,O=e.inverted,p=e.padded,j=e.relaxed,g=e.reversed,h=e.stackable,y=e.stretched,C=e.textAlign,S=e.verticalAlign,E=o()("ui",Object(u.a)(n,"centered"),Object(u.a)(b,"container"),Object(u.a)(m,"doubling"),Object(u.a)(O,"inverted"),Object(u.a)(h,"stackable"),Object(u.a)(y,"stretched"),Object(u.b)(t,"celled"),Object(u.b)(f,"divided"),Object(u.b)(p,"padded"),Object(u.b)(j,"relaxed"),Object(u.c)(g,"reversed"),Object(u.d)(C),Object(u.f)(S),Object(u.g)(i,"column",!0),"grid",c),w=Object(d.a)(v,e),R=Object(s.a)(v,e);return l.a.createElement(R,r()({},w,{className:E}),a)}v.handledProps=["as","celled","centered","children","className","columns","container","divided","doubling","inverted","padded","relaxed","reversed","stackable","stretched","textAlign","verticalAlign"],v.Column=b.a,v.Row=f.a,v.propTypes={},t.a=v},1273:function(e,t,n){"use strict";var a=n(6),r=n.n(a),c=n(7),o=n.n(c),i=(n(2),n(0)),l=n.n(i),u=n(4),d=n(16),s=n(19),b=n(8),f=n(29),v=n(64);function m(e){var t=e.active,n=e.children,a=e.className,c=e.content,i=e.loading,f=o()(Object(u.a)(t,"active"),Object(u.a)(i,"loading"),"tab",a),O=Object(d.a)(m,e),p=Object(s.a)(m,e),j={};return p===v.a&&(j.attached="bottom"),l.a.createElement(p,r()({},j,O,{className:f}),b.b.isNil(n)?c:n)}m.handledProps=["active","as","children","className","content","loading"],m.defaultProps={as:v.a,active:!0},m.propTypes={},m.create=Object(f.h)(m,(function(e){return{content:e}})),t.a=m},1460:function(e,t,n){"use strict";var a=n(418),r=n.n(a),c=n(21),o=n.n(c),i=n(12),l=n.n(i),u=n(13),d=n.n(u),s=n(17),b=n.n(s),f=n(14),v=n.n(f),m=n(5),O=n.n(m),p=n(18),j=n.n(p),g=n(3),h=n.n(g),y=n(48),C=n.n(y),S=n(41),E=n.n(S),w=n(9),R=n.n(w),N=(n(2),n(0)),A=n.n(N),M=n(16),T=n(19),D=n(171),W=n(1180),V=n(1098),I=n(464),k=n(1273),P=function(e){function t(){var e,n;l()(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return n=b()(this,(e=v()(t)).call.apply(e,[this].concat(r))),h()(O()(n),"handleItemClick",(function(e,t){var a=t.index;R()(n.props,"onTabChange",e,o()({},n.props,{activeIndex:a})),n.trySetState({activeIndex:a})})),n}return j()(t,e),d()(t,[{key:"getInitialAutoControlledState",value:function(){return{activeIndex:0}}},{key:"renderItems",value:function(){var e=this.props,t=e.panes,n=e.renderActiveOnly,a=this.state.activeIndex;return n?R()(E()(t,"[".concat(a,"]")),"render",this.props):C()(t,(function(e,t){var n=e.pane;return k.a.create(n,{overrideProps:{active:t===a}})}))}},{key:"renderMenu",value:function(){var e=this.props,t=e.menu,n=e.panes,a=e.menuPosition,r=this.state.activeIndex;return!0===t.tabular&&"right"===a&&(t.tabular="right"),I.a.create(t,{autoGenerateKey:!1,overrideProps:{items:C()(n,"menuItem"),onItemClick:this.handleItemClick,activeIndex:r}})}},{key:"renderVertical",value:function(e){var t=this.props,n=t.grid,a=t.menuPosition,c=n.paneWidth,o=n.tabWidth,i=r()(n,["paneWidth","tabWidth"]),l=a||"right"===e.props.tabular&&"right"||"left";return A.a.createElement(W.a,i,"left"===l&&V.a.create({width:o,children:e},{autoGenerateKey:!1}),V.a.create({width:c,children:this.renderItems(),stretched:!0},{autoGenerateKey:!1}),"right"===l&&V.a.create({width:o,children:e},{autoGenerateKey:!1}))}},{key:"render",value:function(){var e=this.renderMenu(),n=Object(M.a)(t,this.props),a=Object(T.a)(t,this.props);return e.props.vertical?A.a.createElement(a,n,this.renderVertical(e)):A.a.createElement(a,n,"bottom"!==e.props.attached&&e,this.renderItems(),"bottom"===e.props.attached&&e)}}]),t}(D.a);h()(P,"autoControlledProps",["activeIndex"]),h()(P,"defaultProps",{grid:{paneWidth:12,tabWidth:4},menu:{attached:!0,tabular:!0},renderActiveOnly:!0}),h()(P,"Pane",k.a),h()(P,"handledProps",["activeIndex","as","defaultActiveIndex","grid","menu","menuPosition","onTabChange","panes","renderActiveOnly"]),P.propTypes={},t.a=P},1885:function(e,t,n){"use strict";(function(e){var a=n(1),r=n(22),c=n(0),o=n.n(c),i=n(11),l=n(73),u=n(1460),d=n(313),s=n(102),b=n(64),f=n(35),v=n(1013),m=n(1012),O=n(1004),p=n(1496),j=n(1498),g=n(1497),h=n.n(g),y=function(t){var n=t.selectedWallet,g=t.setSelectedWallet,y=t.onOptionsChange,C=t.form,S=t.setForm,E=t.onAddMoneyToVirtualCard,w=t.isViewingDetail,R=t.setIsViewingDetail,N=t.userLocationData,A=t.step,M=t.setStep,T=t.setErrors,D=t.errors,W=t.balanceOnWallet,V=t.checkTransactionConfirmation,I=t.confirmationData,k=t.confirmationError,P=t.checking,x=t.loading,Y=t.addMoneyOpen,F=t.setAddMoneyOpen,L=t.cardStatus,B=t.setCardStatus,G=t.onUpdateCardStatus,U=t.loadingStatus,K=t.onRenewVirtualCard,J=t.renewCardLoad,z=t.onRedeeMoney,H=t.setisRedeeming,q=t.isRedeeming,Q=t.loadRedeeMoney,X=t.error,Z=t.userData,$=t.confirmRedeem,_=t.setConfirmRedeem,ee=t.openConfirmModal,te=t.setOpenConfirmModal,ne=t.shouldClear,ae=Object(c.useState)(!0),re=Object(r.a)(ae,2),ce=re[0],oe=re[1],ie=Object(c.useState)(null),le=Object(r.a)(ie,2),ue=le[0],de=le[1],se=Object(c.useState)(0),be=Object(r.a)(se,2),fe=be[0],ve=be[1],me=Object(i.b)(),Oe=Object(i.c)((function(e){return e.virtualCard})).virtualCardList.data,pe=Object(l.h)(),je=Object(l.g)(),ge=new Date;Object(c.useEffect)((function(){de(null===Oe||void 0===Oe?void 0:Oe.find((function(e){var t;return e.CardNumber===(null===pe||void 0===pe?void 0:null===(t=pe.state)||void 0===t?void 0:t.item.CardNumber)})))}),[pe,Oe]),Object(c.useEffect)((function(){Oe||Object(p.a)(me)}),[]),Object(c.useEffect)((function(){R(!0)}),[]),Object(c.useEffect)((function(){var e,t;ue?B(ue.Enabled):B(null===pe||void 0===pe?void 0:null===(e=pe.state)||void 0===e?void 0:null===(t=e.item)||void 0===t?void 0:t.Enabled)}),[ue]);var he=function(){ve(1)};Object(c.useEffect)((function(){var e;S(Object(a.a)({},C,{CardNumber:null===pe||void 0===pe?void 0:null===(e=pe.state)||void 0===e?void 0:e.item.CardNumber}))}),[]);var ye=[{menuItem:"Virtual Card details",render:function(){var e;return o.a.createElement(u.a.Pane,{attached:!1},o.a.createElement(d.a.Group,null,"YES"===L?o.a.createElement(s.a,{as:"a",color:"green",ribbon:!0},"Active"):o.a.createElement(s.a,{as:"a",color:"red",ribbon:!0},"Disabled"),o.a.createElement(j.a,{virtualCard:ue||(null===pe||void 0===pe?void 0:null===(e=pe.state)||void 0===e?void 0:e.item),userData:null===Z||void 0===Z?void 0:Z.data,canViewDetail:ce,setCanViewDetail:oe,goToSetting:he,selectedWallet:n&&n,setSelectedWallet:g,onOptionsChange:y,form:C,setForm:S,onAddMoneyToVirtualCard:E,isViewingDetail:w,userLocationData:N,step:A,setStep:M,errors:D,setErrors:T,balanceOnWallet:W,checking:P,confirmationData:I,confirmationError:k,loading:x,addMoneyOpen:Y,setAddMoneyOpen:F,onRedeeMoney:z,isRedeeming:q,setisRedeeming:H,loadRedeeMoney:Q,error:X,confirmRedeem:$,setConfirmRedeem:_,checkTransactionConfirmation:V,setOpenConfirmModal:te,openConfirmModal:ee,shouldClear:ne})))}}];return o.a.createElement(v.a,null,o.a.createElement(m.a,null,o.a.createElement("div",{className:"contents"}," ",o.a.createElement("span",{className:"lighter"},e.translate("Manage My virtual card")))),o.a.createElement(O.a,{onClickHandler:function(){return je.goBack()}}),o.a.createElement("div",{className:h.a.Container},o.a.createElement(u.a,{menu:{text:!0},panes:ye,activeIndex:fe,onTabChange:function(e,t){var n=t.activeIndex;ve(n)}}),o.a.createElement(b.a,{piled:!0,style:{marginTop:"-0rem"}},o.a.createElement("span",{className:h.a.Titles},e.translate("Disable this virtual card")),o.a.createElement("br",null),o.a.createElement("span",{style:{color:"#9799AA",marginTop:".6rem"}},e.translate("When your virtual card is disabled, it will not be used\n            for any online transaction, until you enable it again"))," ",o.a.createElement("br",null),"YES"===L?o.a.createElement(f.a,{loading:U,onClick:G,style:{marginTop:".7rem",marginLeft:".4rem"},basic:!0,color:"orange"},e.translate("Disable")):o.a.createElement(f.a,{loading:U,onClick:G,style:{marginTop:".7rem",marginLeft:".4rem"},basic:!0,color:"green"},e.translate("Enable")),o.a.createElement("hr",{style:{margin:"1rem .4rem"}}),o.a.createElement("span",{className:h.a.Titles},e.translate("Renew a virtual card")),o.a.createElement("br",null),o.a.createElement("span",{style:{color:"#9799AA"}},e.translate("You can renew your virtual card for your online operation"))," ",o.a.createElement("br",null),o.a.createElement(f.a,{disabled:!(ge.getFullYear()>=(null===ue||void 0===ue?void 0:ue.YYYY)),loading:J,onClick:K,style:{marginTop:".7rem",marginLeft:".4rem"},basic:!0,color:"orange"},e.translate("Renew a virtual card")))))};y.defaultProps={selectedWallet:{},setSelectedWallet:function(){},onOptionsChange:function(){},form:{},setForm:function(){},onAddMoneyToVirtualCard:function(){},isViewingDetail:!1,setIsViewingDetail:function(){},userLocationData:{},step:null,setStep:function(){},setErrors:function(){},errors:null,balanceOnWallet:{},checkTransactionConfirmation:function(){},confirmationData:{},confirmationError:null,checking:!1,loading:!1,addMoneyOpen:!1,setAddMoneyOpen:function(){},cardStatus:"YES",setCardStatus:function(){},onUpdateCardStatus:function(){},loadingStatus:!1,onRenewVirtualCard:function(){},renewCardLoad:!1,onRedeeMoney:function(){},setisRedeeming:function(){},isRedeeming:!1,loadRedeeMoney:!1,error:null,userData:{},confirmRedeem:!1,setConfirmRedeem:function(){},openConfirmModal:!1,setOpenConfirmModal:function(){}},t.a=y}).call(this,n(28))},1886:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(1),r=n(216),c=n(27);t.b=function(e){return function(t){return t(Object(c.a)({method:"post",url:"/AddMoneyToVirtualCard",data:e,onStart:function(){return function(e){return e({type:r.b})}},onSuccess:function(e){return function(t){return"Success"===e[0].Result?t({type:r.c,payload:Object(a.a)({},e[0],{success:"Success"===e[0].Result})}):t({type:r.a,payload:Object(a.a)({},e[0])})}},onFailure:function(e){return function(t){return t({type:r.a,payload:Object(a.a)({},e[0])})}}}))}};var o=function(){return function(e){return e({type:r.d})}}},1887:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(1),r=n(217),c=n(27);t.b=function(e){return function(t){return t(Object(c.a)({method:"post",url:"/UpdateVirtualCardStatus",data:e,onStart:function(){return function(e){return e({type:r.c})}},onSuccess:function(e){return function(t){return"Success"===e[0].Result?t({type:r.d,payload:Object(a.a)({},e[0],{success:"Success"===e[0].Result})}):t({type:r.b,payload:Object(a.a)({},e[0])})}},onFailure:function(e){return function(t){return t({type:r.b,payload:Object(a.a)({},e[0])})}}}))}};var o=function(){return function(e){return e({type:r.a})}}},1888:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(1),r=n(218),c=n(27);t.b=function(e){return function(t){return t(Object(c.a)({method:"post",url:"/RenewVirtualCard",data:e,onStart:function(){return function(e){return e({type:r.c})}},onSuccess:function(e){return function(t){return"Success"===e[0].Result?t({type:r.d,payload:Object(a.a)({},e[0],{success:"Success"===e[0].Result})}):t({type:r.b,payload:Object(a.a)({},e[0])})}},onFailure:function(e){return function(t){return t({type:r.b,payload:Object(a.a)({},e[0])})}}}))}};var o=function(){return function(e){return e({type:r.a})}}},1889:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(1),r=n(219),c=n(27);t.b=function(e){return function(t){return t(Object(c.a)({method:"post",url:"/RedeemVirtualCardBalance",data:e,onStart:function(){return function(e){return e({type:r.c})}},onSuccess:function(e){return function(t){return"Success"===e[0].Result?t({type:r.d,payload:Object(a.a)({},e[0],{success:"Success"===e[0].Result})}):t({type:r.b,payload:Object(a.a)({},e[0])})}},onFailure:function(e){return function(t){return t({type:r.b,payload:Object(a.a)({},e[0])})}}}))}};var o=function(){return function(e){return e({type:r.a})}}},1943:function(e,t,n){"use strict";n.r(t),function(e){var a=n(52),r=n(1),c=n(22),o=n(0),i=n.n(o),l=n(11),u=n(31),d=n(1885),s=n(1886),b=n(1887),f=n(403),v=n(1014),m=n(1888),O=n(1889);t.default=function(){var t=Object(l.b)(),n=Object(o.useState)(null),p=Object(c.a)(n,2),j=p[0],g=p[1],h=Object(o.useState)({}),y=Object(c.a)(h,2),C=y[0],S=y[1],E=Object(o.useState)(null),w=Object(c.a)(E,2),R=w[0],N=w[1],A=Object(o.useState)(0),M=Object(c.a)(A,2),T=M[0],D=M[1],W=Object(o.useState)(1),V=Object(c.a)(W,2),I=V[0],k=V[1],P=Object(o.useState)(null),x=Object(c.a)(P,2),Y=x[0],F=x[1],L=Object(l.c)((function(e){return e.user})).userData,B=Object(o.useState)(null),G=Object(c.a)(B,2),U=G[0],K=G[1],J=Object(o.useState)(null),z=Object(c.a)(J,2),H=z[0],q=z[1],Q=Object(o.useState)(null),X=Object(c.a)(Q,2),Z=X[0],$=X[1],_=Object(o.useState)(null),ee=Object(c.a)(_,2),te=ee[0],ne=ee[1],ae=Object(o.useState)(!1),re=Object(c.a)(ae,2),ce=re[0],oe=re[1],ie=Object(o.useState)(null),le=Object(c.a)(ie,2),ue=le[0],de=le[1],se=Object(o.useState)("YES"),be=Object(c.a)(se,2),fe=be[0],ve=be[1],me=Object(o.useState)(!1),Oe=Object(c.a)(me,2),pe=Oe[0],je=Oe[1],ge=Object(o.useState)(!1),he=Object(c.a)(ge,2),ye=he[0],Ce=he[1],Se=Object(o.useState)(!1),Ee=Object(c.a)(Se,2),we=Ee[0],Re=Ee[1],Ne=Object(o.useState)(!1),Ae=Object(c.a)(Ne,2),Me=Ae[0],Te=Ae[1],De=Object(o.useState)(null),We=Object(c.a)(De,2),Ve=We[0],Ie=We[1],ke=Object(o.useState)(!1),Pe=Object(c.a)(ke,2),xe=Pe[0],Ye=Pe[1],Fe=Object(o.useState)(!1),Le=Object(c.a)(Fe,2),Be=Le[0],Ge=Le[1],Ue=Object(o.useState)(!1),Ke=Object(c.a)(Ue,2),Je=Ke[0],ze=Ke[1],He=Object(o.useState)(!1),qe=Object(c.a)(He,2),Qe=qe[0],Xe=qe[1],Ze=Object(l.c)((function(e){return e.user.myWallets})).walletList,$e=Object(l.c)((function(e){return e.virtualCard})),_e=$e.addMoneyToVirtualCard,et=$e.cardStatus,tt=$e.renewVirtualCard,nt=$e.redeeMoney,at=Object(l.c)((function(e){return e.moneyTransfer.confirmTransaction})),rt=at.checking,ct=at.confirmationError,ot=at.confirmationData;Object(o.useEffect)((function(){L.data&&L.data.Wallets.map((function(e){"YES"===e.Default&&g(e)}))}),[L.data]),Object(o.useEffect)((function(){var e;de(null===(e=L.data)||void 0===e?void 0:e.DefaultWallet)}),[L.data]),Object(o.useEffect)((function(){0===Ze.length&&Object(f.a)()(t)}),[Ze]),Object(o.useEffect)((function(){if(Ze.length&&ue){var e=Ze.find((function(e){return e.AccountNumber===ue}));D("".concat(null===e||void 0===e?void 0:e.Balance," ").concat(null===e||void 0===e?void 0:e.CurrencyCode)),S(Object(r.a)({},C,{sourceWallet:ue})),F(null===e||void 0===e?void 0:e.CurrencyCode)}}),[ue,Ze]),Object(o.useEffect)((function(){if(Ze.length&&C.sourceWallet){var e=Ze.find((function(e){return e.AccountNumber===C.sourceWallet}));D("".concat(null===e||void 0===e?void 0:e.Balance," ").concat(null===e||void 0===e?void 0:e.CurrencyCode)),F(null===e||void 0===e?void 0:e.CurrencyCode)}}),[C.sourceWallet,Ze]),Object(o.useEffect)((function(){var e;(null===_e||void 0===_e?void 0:_e.data)&&(K(null===_e||void 0===_e?void 0:null===(e=_e.data)||void 0===e?void 0:e.Description),S(Object(r.a)({},C,{amount:"",digit0:"",digit1:"",digit2:"",digit3:""})),k(1),Xe(!1),Ie(null),N(null))}),[null===_e||void 0===_e?void 0:_e.data]),Object(o.useEffect)((function(){(null===_e||void 0===_e?void 0:_e.error)&&(Ie(null===_e||void 0===_e?void 0:_e.error.Description),"Wrong PIN number. Try again."===_e.error.Description&&ze(!0))}),[null===_e||void 0===_e?void 0:_e.error]),Object(o.useEffect)((function(){U&&(u.b.success(U),K(null),Object(s.a)()(t),Object(v.a)()(t))}),[U]),Object(o.useEffect)((function(){(null===et||void 0===et?void 0:et.data)&&(q(et.data.Description),ve(et.data.Enabled))}),[null===et||void 0===et?void 0:et.data]),Object(o.useEffect)((function(){H&&(u.b.success(H),q(null),Object(b.a)()(t))}),[H]),Object(o.useEffect)((function(){(null===tt||void 0===tt?void 0:tt.data)&&ne(tt.data.Description)}),[null===tt||void 0===tt?void 0:tt.data]),Object(o.useEffect)((function(){te&&(u.b.success(te),ne(null),Object(m.a)()(t))}),te),Object(o.useEffect)((function(){(null===nt||void 0===nt?void 0:nt.data)&&$(nt.data.Description)}),[nt.data]),Object(o.useEffect)((function(){(null===nt||void 0===nt?void 0:nt.error)&&$(nt.error.Description)}),[null===nt||void 0===nt?void 0:nt.error]),Object(o.useEffect)((function(){(null===nt||void 0===nt?void 0:nt.data)&&(Object(O.a)()(t),u.b.success(Z),$(null),k(1),Te(!1),N(null),Ie(null),Ge(!1))}),[Z,nt.data]),Object(o.useEffect)((function(){(null===nt||void 0===nt?void 0:nt.error)&&(u.b.error(Z),$(null),k(1),Xe(!1),Ge(!1))}),[Z]),Object(o.useEffect)((function(){je(et.loading)}),[et.loading]),Object(o.useEffect)((function(){Ce(null===tt||void 0===tt?void 0:tt.loading)}),[null===tt||void 0===tt?void 0:tt.loading]),Object(o.useEffect)((function(){Re(nt.loading)}),[nt.loading]);var it=C.digit0,lt=C.digit1,ut=C.digit2,dt=C.digit3,st="".concat(it).concat(lt).concat(ut).concat(dt);return Object(o.useEffect)((function(){ot&&ot[0]&&k(I+1)}),[ot]),i.a.createElement(d.a,{selectedWallet:j&&j,setSelectedWallet:g,onOptionsChange:function(e,t){var n=t.name,c=t.value;ze(!1),S(Object(r.a)({},C,Object(a.a)({},n,c)))},onAddMoneyToVirtualCard:function(){var n={PIN:st,Amount:null===C||void 0===C?void 0:C.amount.toString(),Currency:null===C||void 0===C?void 0:C.CurrencyCode,SourceWallet:(null===C||void 0===C?void 0:C.sourceWallet)||ue,CardNumber:null===C||void 0===C?void 0:C.CardNumber};4===st.length?((null===C||void 0===C?void 0:C.amount)||N(e.translate("Please provide the amount to be added",393)),(null===C||void 0===C?void 0:C.AccountNumber)||N(e.translate("You did not select any wallet",437)),N(null),Object(s.b)(n,"/AddMoneyToVirtualCard")(t)):N(e.translate("Please provide your PIN number.",944))},errors:R,setForm:S,form:C,isViewingDetail:ce,setIsViewingDetail:oe,step:I,setStep:k,setErrors:N,balanceOnWallet:T,checkTransactionConfirmation:function(){var n={Amount:C.amount&&C.amount.toString(),TargetCurrency:Y&&Y,TargetType:"11",SourceWallet:C.sourceWallet||ue,CardNumber:null===C||void 0===C?void 0:C.CardNumber};N(null),function(){var t=!1;return 0===parseFloat(C.amount,10)&&(N(e.translate("The Transfer amount can not be zero",992)),t=!0),0===parseFloat(T,10)?(N(e.translate("You don't have enough money in this wallet for this operation",394)),t=!0,!0):(""!==C.amount&&C.amount||(N(e.translate("You must enter the amount for this operation.",393)),t=!0),t)}()||Object(v.b)(n)(t)},checking:rt,confirmationError:ct,confirmationData:ot,loading:null===_e||void 0===_e?void 0:_e.loading,addMoneyOpen:Qe,setAddMoneyOpen:Xe,cardStatus:fe,setCardStatus:ve,onUpdateCardStatus:function(){var e="YES"===fe?"NO":"YES",n={CardNumber:C.CardNumber,Enable:e};Object(b.b)(n,"/UpdateVirtualCardStatus")(t)},loadingStatus:pe,onRenewVirtualCard:function(){var e={CardNumber:null===C||void 0===C?void 0:C.CardNumber};Object(m.b)(e,"/RenewVirtualCard")(t)},onRedeeMoney:function(){var n=C.digit0,a=C.digit1,r=C.digit2,c=C.digit3,o="".concat(n).concat(a).concat(r).concat(c),i={PIN:o,CardNumber:null===C||void 0===C?void 0:C.CardNumber,TargetWallet:null===C||void 0===C?void 0:C.sourceWallet};4===o.length?Object(O.b)(i,"/RedeemVirtualCardBalance")(t):N(e.translate("Please provide your PIN number.",944))},renewCardLoad:ye,setisRedeeming:Te,isRedeeming:Me,loadRedeeMoney:we,error:Ve,userData:L,confirmRedeem:xe,setConfirmRedeem:Ye,setOpenConfirmModal:Ge,openConfirmModal:Be,shouldClear:Je})}}.call(this,n(28))}}]);
//# sourceMappingURL=37.da6d6195.chunk.js.map