(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{891:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i.default}});var i=a(n(892))},892:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(0)),l=a(n(1)),o=a(n(143)),r=a(n(291)),s={bannerAction:l.default.shape({text:l.default.string,onClick:l.default.func}),description:l.default.node,onRequestClose:l.default.func,variant:l.default.oneOf(["hazard-high","hazard-medium","hazard-low","error","unsatisfied","unverified","custom"]).isRequired,custom:l.default.shape({signalWord:l.default.string,iconClassName:l.default.string})},u=function(e){var t=e.bannerAction,n=e.custom,a=e.description,l=e.onRequestClose,s=e.variant,u=i.default.useContext(r.default),d=i.default.useRef((0,o.default)());return i.default.useEffect((function(){if(!u)throw new Error("A NotificationBanner was not rendered within the context of a NotificationBannerProvider. If this is unexpected, validate that the expected version of the terra-application package is installed.");u.registerNotificationBanner(d.current,{bannerAction:t,custom:n,description:a,key:d.current,onRequestClose:l,variant:s})}),[u,a,n,t,l,s]),i.default.useEffect((function(){return function(){u.unregisterNotificationBanner(d.current,s)}}),[u,s]),null};u.propTypes=s;var d=u;t.default=d},895:function(e,t,n){"use strict";var a=n(11),i=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(62)),o=a(n(0)),r=i(n(3)),s=i(n(1)),u=i(n(891)),d=i(n(896)),c=r.default.bind(d.default),f=function(e){var t=e.isInitiallyClosed,n=e.id,a=(0,o.useState)(!t),i=(0,l.default)(a,2),r=i[0],s=i[1],d=(0,o.useState)(!t),f=(0,l.default)(d,2),m=f[0],p=f[1],h=(0,o.useState)(!t),v=(0,l.default)(h,2),b=v[0],g=v[1],y=(0,o.useState)(!t),C=(0,l.default)(y,2),E=C[0],_=C[1],k=(0,o.useState)(!t),S=(0,l.default)(k,2),D=S[0],P=S[1],w=(0,o.useState)(!t),z=(0,l.default)(w,2),O=z[0],N=z[1],x=(0,o.useState)(!t),B=(0,l.default)(x,2),M=B[0],R=B[1];return o.default.createElement(o.default.Fragment,null,r&&o.default.createElement(u.default,{variant:"hazard-high",id:"hazard-high-banner-".concat(n)}),m&&o.default.createElement(u.default,{variant:"hazard-medium",id:"hazard-medium-banner-".concat(n),onRequestClose:function(){return p(!1)}}),b&&o.default.createElement(u.default,{variant:"hazard-low",id:"hazard-low-banner-".concat(n)}),E&&o.default.createElement(u.default,{variant:"error",id:"error-banner-".concat(n),description:"Something happened..."}),D&&o.default.createElement(u.default,{variant:"unsatisfied",id:"unsatisfied-banner-".concat(n)}),O&&o.default.createElement(u.default,{variant:"unverified",id:"unverified-banner-".concat(n),description:o.default.createElement("div",null,"There are records that have been included that need to be verified before they are officially added. Please review and ensure they should be included."),bannerAction:{text:"Verify Records",onClick:function(){alert("records verified."),N(!1)}}}),M&&o.default.createElement(u.default,{variant:"custom",id:"custom-banner-".concat(n),custom:{signalWord:"Check this out!",customIconClass:c("custom-notification-banner-icon")},description:"This is a custom banner."}),o.default.createElement("p",null,"Show Banner Options: "),o.default.createElement("button",{onClick:function(){return s(!r)},type:"button",id:"toggle-hazard-high-banner-".concat(n)},"Show/Hide Hazard-High Banner"),o.default.createElement("button",{onClick:function(){return p(!m)},type:"button",id:"toggle-hazard-medium-banner-".concat(n)},"Show/Hide Hazard-Medium Banner"),o.default.createElement("button",{onClick:function(){return g(!b)},type:"button",id:"toggle-hazard-low-banner-".concat(n)},"Show/Hide Hazard-Low Banner"),o.default.createElement("button",{onClick:function(){return _(!E)},type:"button",id:"toggle-error-banner-".concat(n)},"Show/Hide Error Banner"),o.default.createElement("button",{onClick:function(){return P(!D)},type:"button",id:"toggle-unsatisfied-banner-".concat(n)},"Show/Hide Unsatisfied Banner"),o.default.createElement("button",{onClick:function(){return N(!O)},type:"button",id:"toggle-unverified-banner-".concat(n)},"Show/Hide Unverified Banner"),o.default.createElement("button",{onClick:function(){return R(!M)},type:"button",id:"toggle-custom-banner-".concat(n)},"Show/Hide Custom Banner"))};f.propTypes={id:s.default.string,isInitiallyClosed:s.default.bool},f.defaultProps={id:"1",isInitiallyClosed:!1};var m=f;t.default=m},896:function(e,t,n){e.exports={"custom-notification-banner-icon":"CustomVariant-module__custom-notification-banner-icon___TEPhb","clinical-lowlight-theme":"CustomVariant-module__clinical-lowlight-theme___1kKaY"}},909:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(76)),l=a(n(25)),o=a(n(26)),r=a(n(33)),s=a(n(27)),u=a(n(28)),d=a(n(29)),c=a(n(0)),f=a(n(1)),m=a(n(3)),p=a(n(906)),h=a(n(50)),v=n(86),b=a(n(84)),g=a(n(85)),y=a(n(895)),C=a(n(142)),E=a(n(947));function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,d.default)(e);if(t){var i=(0,d.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,u.default)(this,n)}}var k=m.default.bind(E.default),S=Object.keys(v.availableDisclosureHeights),D=Object.keys(v.availableDisclosureWidths),P=function(e){(0,s.default)(n,e);var t=_(n);function n(e){var a;return(0,l.default)(this,n),(a=t.call(this,e)).disclose=a.disclose.bind((0,r.default)(a)),a.dismiss=a.dismiss.bind((0,r.default)(a)),a.closeDisclosure=a.closeDisclosure.bind((0,r.default)(a)),a.goBack=a.goBack.bind((0,r.default)(a)),a.maximize=a.maximize.bind((0,r.default)(a)),a.minimize=a.minimize.bind((0,r.default)(a)),a.generateOptions=a.generateOptions.bind((0,r.default)(a)),a.handleSelectChange=a.handleSelectChange.bind((0,r.default)(a)),a.renderFormButton=a.renderFormButton.bind((0,r.default)(a)),a.renderForm=a.renderForm.bind((0,r.default)(a)),a.getId=a.getId.bind((0,r.default)(a)),a.state={id:"disclosureDimensions",disclosureHeight:S[0],disclosureWidth:D[0],hasPendingAction:!1,hasLoadingOverlay:!1,hasError:!1,hasStatusOverlay:!1,disclosureCount:null},a}return(0,o.default)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({disclosureCount:(0,v.getActiveDisclosureCount)()})})),this.props.useCustomDismissCheck&&this.props.disclosureManager.registerDismissCheck&&this.props.disclosureManager.registerDismissCheck((function(){return Promise.reject()}))}},{key:"getId",value:function(e){return"".concat(this.state.id,"-").concat(e,"-").concat(this.props.nestedIndex)}},{key:"generateOptions",value:function(e,t){var n=this;return e.map((function(e,a){var i=a;return c.default.createElement("option",{id:"".concat(t,"-").concat(e,"-").concat(n.props.nestedIndex),key:i,value:e},e)}))}},{key:"handleSelectChange",value:function(e){this.setState((0,i.default)({},e.target.name,e.target.value))}},{key:"disclose",value:function(e,t){var n=this,a=this.props,i=a.disclosureType,l=a.nestedIndex,o=a.renderHeaderAdapter,r=a.useCustomDismissCheck,s=l+1;return function(){n.props.disclosureManager.disclose({preferredType:i,size:e,dimensions:t,content:{key:"DemoContainer-".concat(s),component:c.default.createElement(w,{identifier:"DemoContainer-".concat(s),nestedIndex:s,disclosureType:i,renderHeaderAdapter:o,useCustomDismissCheck:r})}})}}},{key:"dismiss",value:function(){this.props.disclosureManager.dismiss()}},{key:"closeDisclosure",value:function(){this.props.disclosureManager.closeDisclosure()}},{key:"goBack",value:function(){this.props.disclosureManager.goBack()}},{key:"maximize",value:function(){this.props.disclosureManager.maximize()}},{key:"minimize",value:function(){this.props.disclosureManager.minimize()}},{key:"renderFormButton",value:function(){var e="Disclose (".concat(this.state.disclosureHeight,") x (").concat(this.state.disclosureWidth,")");return c.default.createElement("button",{type:"button",id:"disclose-dimension-".concat(this.props.nestedIndex),onClick:this.disclose(void 0,{height:this.state.disclosureHeight,width:this.state.disclosureWidth})},e)}},{key:"renderForm",value:function(){return c.default.createElement("form",null,c.default.createElement("label",{htmlFor:this.getId("height")},"Pop Content Height"),c.default.createElement("select",{id:this.getId("height"),name:"disclosureHeight",value:this.state.disclosureHeight,onChange:this.handleSelectChange},this.generateOptions(S,"height")),c.default.createElement("br",null),c.default.createElement("br",null),c.default.createElement("label",{htmlFor:this.getId("width")},"Pop Content Width"),c.default.createElement("select",{id:this.getId("width"),name:"disclosureWidth",value:this.state.disclosureWidth,onChange:this.handleSelectChange},this.generateOptions(D,"width")),c.default.createElement("br",null),c.default.createElement("br",null))}},{key:"render",value:function(){var e=this,t=this.props,n=t.disclosureManager,a=t.identifier,i=t.nestedIndex,l=t.renderHeaderAdapter,o=this.state,r=o.hasPendingAction,s=o.hasLoadingOverlay,u=o.hasError,d=o.hasStatusOverlay,f=o.disclosureCount;if(u)throw new Error("Test Error");return c.default.createElement(h.default,{id:a,className:"nested-component",fill:!0,header:c.default.createElement("h2",{className:k("content-wrapper")},"Content Component")},l&&i>0?c.default.createElement(v.DisclosureManagerHeaderAdapter,{title:"Disclosure - ".concat(a),collapsibleMenuView:c.default.createElement(p.default,null,c.default.createElement(p.default.Item,{text:"Header Button 1",key:"button_1"}),c.default.createElement(p.default.Item,{text:"Header Button 2",key:"button_2"}))}):void 0,c.default.createElement("p",null,"id:"," ",a),c.default.createElement("button",{type:"button",className:"disclose",onClick:this.disclose()},"Disclose"),c.default.createElement("button",{type:"button",className:"disclose-tiny",onClick:this.disclose("tiny")},"Disclose Tiny"),c.default.createElement("button",{type:"button",className:"disclose-small",onClick:this.disclose("small")},"Disclose Small"),c.default.createElement("button",{type:"button",className:"disclose-medium",onClick:this.disclose("medium")},"Disclose Medium"),c.default.createElement("button",{type:"button",className:"disclose-large",onClick:this.disclose("large")},"Disclose Large"),c.default.createElement("button",{type:"button",className:"disclose-huge",onClick:this.disclose("huge")},"Disclose Huge"),c.default.createElement("button",{type:"button",className:"disclose-fullscreen",onClick:this.disclose("fullscreen")},"Disclose Fullscreen"),c.default.createElement("button",{type:"button",className:"pending-action-toggle",onClick:function(){e.setState((function(e){return{hasPendingAction:!e.hasPendingAction}}))}},"Pending Action"),c.default.createElement("button",{type:"button",className:"loading-overlay-toggle",onClick:function(){e.setState((function(e){return{hasLoadingOverlay:!e.hasLoadingOverlay}}))}},"Loading Overlay"),c.default.createElement("button",{type:"button",className:"status-view-toggle",onClick:function(){e.setState((function(e){return{hasStatusOverlay:!e.hasStatusOverlay}}))}},"Status View"),c.default.createElement("button",{type:"button",className:"error-toggle",onClick:function(){e.setState((function(e){return{hasError:!e.hasError}}))}},"Error"),c.default.createElement("div",{className:k("form-wrapper")},this.renderForm(),this.renderFormButton()),n&&n.dismiss?c.default.createElement("button",{type:"button",className:"dismiss",onClick:this.dismiss},"Dismiss"):null,n&&n.closeDisclosure?c.default.createElement("button",{type:"button",className:"close-disclosure",onClick:this.closeDisclosure},"Close Disclosure"):null,n&&n.goBack?c.default.createElement("button",{type:"button",className:"go-back",onClick:this.goBack},"Go Back"):null,n&&n.maximize?c.default.createElement("button",{type:"button",className:"maximize",onClick:this.maximize},"Maximize"):null,n&&n.minimize?c.default.createElement("button",{type:"button",className:"minimize",onClick:this.minimize},"Minimize"):null,c.default.createElement("button",{type:"button",className:"global-close-disclosure",onClick:v.closeMostRecentDisclosure},"Global Close (".concat(f,")")),r&&c.default.createElement(b.default,{description:"Test Action"}),s&&c.default.createElement(g.default,{isOpen:!0,backgroundStyle:"light"}),c.default.createElement(y.default,{isInitiallyClosed:!0,id:a}),d&&c.default.createElement(C.default,{message:"Test status view",variant:"no-data"}))}}]),n}(c.default.Component);P.propTypes={disclosureManager:v.disclosureManagerShape,identifier:f.default.string,disclosureType:f.default.string,nestedIndex:f.default.number,renderHeaderAdapter:f.default.bool,useCustomDismissCheck:f.default.bool},P.defaultProps={nestedIndex:0};var w=(0,v.withDisclosureManager)(P),z=w;t.default=z},910:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(948)).default;t.default=i},947:function(e,t,n){e.exports={"content-wrapper":"DisclosureComponent-module__content-wrapper___3RZ1E","form-wrapper":"DisclosureComponent-module__form-wrapper___1DfL-"}},948:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(19)),l=a(n(24)),o=a(n(0)),r=a(n(1)),s=a(n(949)),u=n(84),d=a(n(301)),c={children:r.default.node,panelBehavior:r.default.oneOf(["overlay","squish"]),disclosureAccessory:r.default.element,navigationPromptResolutionOptions:u.navigationPromptResolutionOptionsShape},f=function(e){var t=e.navigationPromptResolutionOptions,n=(0,l.default)(e,["navigationPromptResolutionOptions"]);return o.default.createElement(s.default,(0,i.default)({},n,{withDisclosureContainer:function(e){return o.default.createElement(d.default,{navigationPromptResolutionOptions:t},e)}}))};f.propTypes=c,f.defaultProps=s.default.defaultProps;var m=f;t.default=m},949:function(e,t,n){"use strict";var a=n(4),i=n(11);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.disclosureType=void 0;var l,o=a(n(19)),r=a(n(24)),s=a(n(25)),u=a(n(26)),d=a(n(33)),c=a(n(27)),f=a(n(28)),m=a(n(29)),p=a(n(76)),h=a(n(0)),v=a(n(1)),b=a(n(77)),g=a(n(50)),y=i(n(195)),C=a(n(300)),E=a(n(950));function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,m.default)(e);if(t){var i=(0,m.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,f.default)(this,n)}}t.disclosureType="panel";var k={children:v.default.node,panelBehavior:v.default.oneOf(["overlay","squish"]),disclosureAccessory:v.default.element,withDisclosureContainer:v.default.func},S=(l={},(0,p.default)(l,y.availableDisclosureSizes.TINY,"small"),(0,p.default)(l,y.availableDisclosureSizes.SMALL,"small"),(0,p.default)(l,y.availableDisclosureSizes.MEDIUM,"large"),(0,p.default)(l,y.availableDisclosureSizes.LARGE,"large"),(0,p.default)(l,y.availableDisclosureSizes.HUGE,"large"),l),D=function(e){(0,c.default)(n,e);var t=_(n);function n(e){var a;return(0,s.default)(this,n),(a=t.call(this,e)).renderSlidePanel=a.renderSlidePanel.bind((0,d.default)(a)),a}return(0,u.default)(n,[{key:"renderSlidePanel",value:function(e){var t,n,a,i,l,s=this.props,u=(s.children,s.disclosureAccessory),d=(s.withDisclosureContainer,(0,r.default)(s,["children","disclosureAccessory","withDisclosureContainer"]));(e.disclosure.size===y.availableDisclosureSizes.FULLSCREEN||e.disclosure.isMaximized)&&(a=!0),i=e.disclosure.dimensions?(l=e.disclosure.dimensions).width>480||l.height>600?"large":"small":S[e.disclosure.size];var c=(null==e||null===(t=e.disclosure)||void 0===t||null===(n=t.typeConfig)||void 0===n?void 0:n.panelBehavior)?e.disclosure.typeConfig.panelBehavior:d.panelBehavior,f=e.disclosureComponentKeys[e.disclosureComponentKeys.length-1],m=(e.disclosureComponentData[f]||{}).headerAdapterData;return h.default.createElement(E.default,(0,o.default)({},d,{fill:!0,panelBehavior:c,isFullscreen:a,panelSize:i,isOpen:e.disclosure.isOpen,panelContent:h.default.createElement(g.default,{fill:!0,header:h.default.createElement(h.default.Fragment,null,m?h.default.createElement(b.default,{title:m.title,onClose:e.closeDisclosure,onBack:e.disclosureComponentKeys.length>1?e.dismissPresentedComponent:void 0,onMaximize:e.maximizeDisclosure,onMinimize:e.minimizeDisclosure},m.collapsibleMenuView):void 0,u)},h.default.createElement(C.default,{items:e.disclosure.components,isAnimated:!0})),mainContent:e.children.components}))}},{key:"render",value:function(){var e=this.props,t=e.withDisclosureContainer,n=e.children;return h.default.createElement(y.default,{withDisclosureContainer:t,supportedDisclosureTypes:["panel"],render:this.renderSlidePanel},n)}}]),n}(h.default.Component);D.propTypes=k,D.defaultProps={panelBehavior:"overlay"};var P=D;t.default=P},950:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.SlidePanelPositions=t.default=void 0;var i=a(n(19)),l=a(n(24)),o=a(n(25)),r=a(n(26)),s=a(n(33)),u=a(n(27)),d=a(n(28)),c=a(n(29)),f=a(n(0)),m=a(n(1)),p=a(n(9)),h=a(n(3)),v=a(n(5)),b=a(n(951));function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.default)(e);if(t){var i=(0,c.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,d.default)(this,n)}}var y=h.default.bind(b.default),C={START:"start",END:"end"};t.SlidePanelPositions=C;var E={panelAriaLabel:m.default.string,mainAriaLabel:m.default.string,mainContent:m.default.node,panelContent:m.default.node,panelBehavior:m.default.oneOf(["overlay","squish"]),panelPosition:m.default.oneOf(["start","end"]),panelSize:m.default.oneOf(["small","large"]),isFullscreen:m.default.bool,isOpen:m.default.bool,fill:m.default.bool},_={panelBehavior:"overlay",panelPosition:C.END,panelSize:"small"},k=function(e){(0,u.default)(n,e);var t=g(n);function n(e){var a;return(0,o.default)(this,n),(a=t.call(this,e)).setPanelNode=a.setPanelNode.bind((0,s.default)(a)),a.mainNode=f.default.createRef(),a}return(0,r.default)(n,[{key:"componentDidUpdate",value:function(e){this.props.isOpen&&this.props.isOpen!==e.isOpen?this.panelNode.focus():this.props.isOpen||this.props.isOpen===e.isOpen||this.mainNode.current.focus()}},{key:"setPanelNode",value:function(e){this.panelNode=e}},{key:"render",value:function(){var e=this.props,t=e.panelAriaLabel,n=e.mainAriaLabel,a=e.mainContent,o=e.panelContent,r=e.panelBehavior,s=e.panelPosition,u=e.panelSize,d=e.isFullscreen,c=e.isOpen,m=e.fill,h=(0,l.default)(e,["panelAriaLabel","mainAriaLabel","mainContent","panelContent","panelBehavior","panelPosition","panelSize","isFullscreen","isOpen","fill"]),v=this.context,b=(0,p.default)(y("slide-panel",{"is-open":c},{"is-fullscreen":d},{fill:m},v.className),h.className),g=f.default.createElement("div",{className:y(["panel"]),key:"panel",tabIndex:"-1","aria-label":t,"aria-hidden":c?"false":"true",ref:this.setPanelNode},o),E=f.default.createElement("div",{className:y("main"),key:"main",tabIndex:"-1","aria-label":n,ref:this.mainNode},a),_=s===C.START?f.default.createElement(f.default.Fragment,null,g,E):f.default.createElement(f.default.Fragment,null,E,g);return f.default.createElement("div",(0,i.default)({},h,{className:b,"data-slide-panel-panel-behavior":r,"data-slide-panel-panel-position":s,"data-slide-panel-panel-size":u}),_)}}]),n}(f.default.Component);k.propTypes=E,k.defaultProps=_,k.contextType=v.default;var S=k;t.default=S},951:function(e,t,n){e.exports={"clinical-lowlight-theme":"SlidePanel-module__clinical-lowlight-theme___3ceMF","orion-fusion-theme":"SlidePanel-module__orion-fusion-theme___1Gbzu","slide-panel":"SlidePanel-module__slide-panel___ITIbM",main:"SlidePanel-module__main___2oo1I",panel:"SlidePanel-module__panel___22lWd","is-open":"SlidePanel-module__is-open___3OdYE","is-fullscreen":"SlidePanel-module__is-fullscreen___32Wbh",fill:"SlidePanel-module__fill___2g_EL"}}}]);
//# sourceMappingURL=1-4bdfdddcfe59d3943a1b.js.map