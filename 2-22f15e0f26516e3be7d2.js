(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{891:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i.default}});var i=a(n(892))},892:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(0)),o=a(n(1)),s=a(n(143)),l=a(n(291)),r={bannerAction:o.default.shape({text:o.default.string,onClick:o.default.func}),description:o.default.node,onRequestClose:o.default.func,variant:o.default.oneOf(["hazard-high","hazard-medium","hazard-low","error","unsatisfied","unverified","custom"]).isRequired,custom:o.default.shape({signalWord:o.default.string,iconClassName:o.default.string})},u=function(e){var t=e.bannerAction,n=e.custom,a=e.description,o=e.onRequestClose,r=e.variant,u=i.default.useContext(l.default),c=i.default.useRef((0,s.default)());return i.default.useEffect((function(){if(!u)throw new Error("A NotificationBanner was not rendered within the context of a NotificationBannerProvider. If this is unexpected, validate that the expected version of the terra-application package is installed.");u.registerNotificationBanner(c.current,{bannerAction:t,custom:n,description:a,key:c.current,onRequestClose:o,variant:r})}),[u,a,n,t,o,r]),i.default.useEffect((function(){return function(){u.unregisterNotificationBanner(c.current,r)}}),[u,r]),null};u.propTypes=r;var c=u;t.default=c},895:function(e,t,n){"use strict";var a=n(11),i=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(62)),s=a(n(0)),l=i(n(3)),r=i(n(1)),u=i(n(891)),c=i(n(896)),d=l.default.bind(c.default),f=function(e){var t=e.isInitiallyClosed,n=e.id,a=(0,s.useState)(!t),i=(0,o.default)(a,2),l=i[0],r=i[1],c=(0,s.useState)(!t),f=(0,o.default)(c,2),m=f[0],h=f[1],p=(0,s.useState)(!t),g=(0,o.default)(p,2),b=g[0],v=g[1],y=(0,s.useState)(!t),C=(0,o.default)(y,2),E=C[0],k=C[1],D=(0,s.useState)(!t),w=(0,o.default)(D,2),S=w[0],_=w[1],z=(0,s.useState)(!t),x=(0,o.default)(z,2),H=x[0],N=x[1],B=(0,s.useState)(!t),M=(0,o.default)(B,2),O=M[0],I=M[1];return s.default.createElement(s.default.Fragment,null,l&&s.default.createElement(u.default,{variant:"hazard-high",id:"hazard-high-banner-".concat(n)}),m&&s.default.createElement(u.default,{variant:"hazard-medium",id:"hazard-medium-banner-".concat(n),onRequestClose:function(){return h(!1)}}),b&&s.default.createElement(u.default,{variant:"hazard-low",id:"hazard-low-banner-".concat(n)}),E&&s.default.createElement(u.default,{variant:"error",id:"error-banner-".concat(n),description:"Something happened..."}),S&&s.default.createElement(u.default,{variant:"unsatisfied",id:"unsatisfied-banner-".concat(n)}),H&&s.default.createElement(u.default,{variant:"unverified",id:"unverified-banner-".concat(n),description:s.default.createElement("div",null,"There are records that have been included that need to be verified before they are officially added. Please review and ensure they should be included."),bannerAction:{text:"Verify Records",onClick:function(){alert("records verified."),N(!1)}}}),O&&s.default.createElement(u.default,{variant:"custom",id:"custom-banner-".concat(n),custom:{signalWord:"Check this out!",customIconClass:d("custom-notification-banner-icon")},description:"This is a custom banner."}),s.default.createElement("p",null,"Show Banner Options: "),s.default.createElement("button",{onClick:function(){return r(!l)},type:"button",id:"toggle-hazard-high-banner-".concat(n)},"Show/Hide Hazard-High Banner"),s.default.createElement("button",{onClick:function(){return h(!m)},type:"button",id:"toggle-hazard-medium-banner-".concat(n)},"Show/Hide Hazard-Medium Banner"),s.default.createElement("button",{onClick:function(){return v(!b)},type:"button",id:"toggle-hazard-low-banner-".concat(n)},"Show/Hide Hazard-Low Banner"),s.default.createElement("button",{onClick:function(){return k(!E)},type:"button",id:"toggle-error-banner-".concat(n)},"Show/Hide Error Banner"),s.default.createElement("button",{onClick:function(){return _(!S)},type:"button",id:"toggle-unsatisfied-banner-".concat(n)},"Show/Hide Unsatisfied Banner"),s.default.createElement("button",{onClick:function(){return N(!H)},type:"button",id:"toggle-unverified-banner-".concat(n)},"Show/Hide Unverified Banner"),s.default.createElement("button",{onClick:function(){return I(!O)},type:"button",id:"toggle-custom-banner-".concat(n)},"Show/Hide Custom Banner"))};f.propTypes={id:r.default.string,isInitiallyClosed:r.default.bool},f.defaultProps={id:"1",isInitiallyClosed:!1};var m=f;t.default=m},896:function(e,t,n){e.exports={"custom-notification-banner-icon":"CustomVariant-module__custom-notification-banner-icon___TEPhb","clinical-lowlight-theme":"CustomVariant-module__clinical-lowlight-theme___1kKaY"}},905:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(76)),o=a(n(25)),s=a(n(26)),l=a(n(33)),r=a(n(27)),u=a(n(28)),c=a(n(29)),d=a(n(0)),f=a(n(1)),m=a(n(3)),h=a(n(906)),p=a(n(50)),g=n(86),b=a(n(84)),v=a(n(85)),y=a(n(895)),C=a(n(142)),E=a(n(945));function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.default)(e);if(t){var i=(0,c.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,u.default)(this,n)}}var D=m.default.bind(E.default),w=Object.keys(g.availableDisclosureHeights),S=Object.keys(g.availableDisclosureWidths),_=function(e){(0,r.default)(n,e);var t=k(n);function n(e){var a;return(0,o.default)(this,n),(a=t.call(this,e)).disclose=a.disclose.bind((0,l.default)(a)),a.dismiss=a.dismiss.bind((0,l.default)(a)),a.closeDisclosure=a.closeDisclosure.bind((0,l.default)(a)),a.goBack=a.goBack.bind((0,l.default)(a)),a.maximize=a.maximize.bind((0,l.default)(a)),a.minimize=a.minimize.bind((0,l.default)(a)),a.generateOptions=a.generateOptions.bind((0,l.default)(a)),a.handleSelectChange=a.handleSelectChange.bind((0,l.default)(a)),a.renderFormButton=a.renderFormButton.bind((0,l.default)(a)),a.renderForm=a.renderForm.bind((0,l.default)(a)),a.getId=a.getId.bind((0,l.default)(a)),a.state={id:"disclosureDimensions",disclosureHeight:w[0],disclosureWidth:S[0],hasPendingAction:!1,hasLoadingOverlay:!1,hasError:!1,hasStatusOverlay:!1,disclosureCount:null},a}return(0,s.default)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({disclosureCount:(0,g.getActiveDisclosureCount)()})})),this.props.useCustomDismissCheck&&this.props.disclosureManager.registerDismissCheck&&this.props.disclosureManager.registerDismissCheck((function(){return Promise.reject()})).then((function(){}))}},{key:"getId",value:function(e){return"".concat(this.state.id,"-").concat(e,"-").concat(this.props.nestedIndex)}},{key:"generateOptions",value:function(e,t){var n=this;return e.map((function(e,a){var i=a;return d.default.createElement("option",{id:"".concat(t,"-").concat(e,"-").concat(n.props.nestedIndex),key:i,value:e},e)}))}},{key:"handleSelectChange",value:function(e){this.setState((0,i.default)({},e.target.name,e.target.value))}},{key:"disclose",value:function(e,t){var n=this,a=this.props,i=a.disclosureType,o=a.nestedIndex,s=a.renderHeaderAdapter,l=a.useCustomDismissCheck,r=o+1;return function(){n.props.disclosureManager.disclose({preferredType:i,size:e,dimensions:t,content:{key:"DemoContainer-".concat(r),component:d.default.createElement(z,{identifier:"DemoContainer-".concat(r),nestedIndex:r,renderHeaderAdapter:s,useCustomDismissCheck:l})}})}}},{key:"dismiss",value:function(){this.props.disclosureManager.dismiss()}},{key:"closeDisclosure",value:function(){this.props.disclosureManager.closeDisclosure()}},{key:"goBack",value:function(){this.props.disclosureManager.goBack()}},{key:"maximize",value:function(){this.props.disclosureManager.maximize()}},{key:"minimize",value:function(){this.props.disclosureManager.minimize()}},{key:"renderFormButton",value:function(){var e="Disclose (".concat(this.state.disclosureHeight,") x (").concat(this.state.disclosureWidth,")");return d.default.createElement("button",{type:"button",id:"disclose-dimension-".concat(this.props.nestedIndex),onClick:this.disclose(void 0,{height:this.state.disclosureHeight,width:this.state.disclosureWidth})},e)}},{key:"renderForm",value:function(){return d.default.createElement("form",null,d.default.createElement("label",{htmlFor:this.getId("height")},"Pop Content Height"),d.default.createElement("select",{id:this.getId("height"),name:"disclosureHeight",value:this.state.disclosureHeight,onChange:this.handleSelectChange},this.generateOptions(w,"height")),d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement("label",{htmlFor:this.getId("width")},"Pop Content Width"),d.default.createElement("select",{id:this.getId("width"),name:"disclosureWidth",value:this.state.disclosureWidth,onChange:this.handleSelectChange},this.generateOptions(S,"width")),d.default.createElement("br",null),d.default.createElement("br",null))}},{key:"render",value:function(){var e=this,t=this.props,n=t.disclosureManager,a=t.identifier,i=t.nestedIndex,o=t.renderHeaderAdapter,s=this.state,l=s.hasPendingAction,r=s.hasLoadingOverlay,u=s.hasError,c=s.hasStatusOverlay,f=s.disclosureCount;if(u)throw new Error("Test Error");return d.default.createElement(p.default,{id:a,className:"nested-component",fill:!0,header:d.default.createElement("h2",{className:D("header")},"Content Component")},o&&i>0?d.default.createElement(g.DisclosureManagerHeaderAdapter,{title:"Disclosure - ".concat(a),collapsibleMenuView:d.default.createElement(h.default,null,d.default.createElement(h.default.Item,{text:"Header Button 1",key:"button_1"}),d.default.createElement(h.default.Item,{text:"Header Button 2",key:"button_2"}))}):void 0,d.default.createElement("p",null,"id:"," ",a),d.default.createElement("button",{type:"button",className:"disclose",onClick:this.disclose()},"Disclose"),d.default.createElement("button",{type:"button",className:"disclose-tiny",onClick:this.disclose("tiny")},"Disclose Tiny"),d.default.createElement("button",{type:"button",className:"disclose-small",onClick:this.disclose("small")},"Disclose Small"),d.default.createElement("button",{type:"button",className:"disclose-medium",onClick:this.disclose("medium")},"Disclose Medium"),d.default.createElement("button",{type:"button",className:"disclose-large",onClick:this.disclose("large")},"Disclose Large"),d.default.createElement("button",{type:"button",className:"disclose-huge",onClick:this.disclose("huge")},"Disclose Huge"),d.default.createElement("button",{type:"button",className:"disclose-fullscreen",onClick:this.disclose("fullscreen")},"Disclose Fullscreen"),d.default.createElement("button",{type:"button",className:"pending-action-toggle",onClick:function(){e.setState((function(e){return{hasPendingAction:!e.hasPendingAction}}))}},"Pending Action"),d.default.createElement("button",{type:"button",className:"loading-overlay-toggle",onClick:function(){e.setState((function(e){return{hasLoadingOverlay:!e.hasLoadingOverlay}}))}},"Loading Overlay"),d.default.createElement("button",{type:"button",className:"status-view-toggle",onClick:function(){e.setState((function(e){return{hasStatusOverlay:!e.hasStatusOverlay}}))}},"Status View"),d.default.createElement("button",{type:"button",className:"error-toggle",onClick:function(){e.setState((function(e){return{hasError:!e.hasError}}))}},"Error"),d.default.createElement("div",{className:D("content-form")},this.renderForm(),this.renderFormButton()),n&&n.dismiss?d.default.createElement("button",{type:"button",className:"dismiss",onClick:this.dismiss},"Dismiss"):null,n&&n.closeDisclosure?d.default.createElement("button",{type:"button",className:"close-disclosure",onClick:this.closeDisclosure},"Close Disclosure"):null,n&&n.goBack?d.default.createElement("button",{type:"button",className:"go-back",onClick:this.goBack},"Go Back"):null,n&&n.maximize?d.default.createElement("button",{type:"button",className:"maximize",onClick:this.maximize},"Maximize"):null,n&&n.minimize?d.default.createElement("button",{type:"button",className:"minimize",onClick:this.minimize},"Minimize"):null,d.default.createElement("button",{type:"button",className:"global-close-disclosure",onClick:g.closeMostRecentDisclosure},"Global Close (".concat(f,")")),l&&d.default.createElement(b.default,{description:"Test Action"}),r&&d.default.createElement(v.default,{isOpen:!0,backgroundStyle:"light"}),d.default.createElement(y.default,{isInitiallyClosed:!0,id:a}),c&&d.default.createElement(C.default,{message:"Test status view",variant:"no-data"}))}}]),n}(d.default.Component);_.propTypes={disclosureManager:g.disclosureManagerShape,identifier:f.default.string,disclosureType:f.default.string,nestedIndex:f.default.number,renderHeaderAdapter:f.default.bool,useCustomDismissCheck:f.default.bool},_.defaultProps={nestedIndex:0};var z=(0,g.withDisclosureManager)(_),x=z;t.default=x},945:function(e,t,n){e.exports={header:"DisclosureComponentCommon-test-module__header___3XNkp","content-form":"DisclosureComponentCommon-test-module__content-form___3YiZK","select-field":"DisclosureComponentCommon-test-module__select-field___3vveU"}}}]);
//# sourceMappingURL=2-22f15e0f26516e3be7d2.js.map