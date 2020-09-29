(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1e3:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return i}));var n=o(19),a=o.n(n),r=o(24),l=o.n(r),p=(o(0),o(288)),u=o(884),s=o.n(u),d=function(){return Object(p.mdx)(s.a,{rows:[{name:"buttonAttrs",type:function(){var e={};function t(t){var o=t.components,n=l()(t,["components"]);return Object(p.mdx)("wrapper",a()({},e,n,{components:o,mdxType:"MDXLayout"}),Object(p.mdx)("p",null,"arrayOf"),Object(p.mdx)("pre",null,Object(p.mdx)("code",a()({parentName:"pre"},{className:"language-json"}),'{\n "name": "shape",\n "value": "Button.propTypes",\n "computed": true\n}\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var o=t.components,n=l()(t,["components"]);return Object(p.mdx)("wrapper",a()({},e,n,{components:o,mdxType:"MDXLayout"}),Object(p.mdx)("p",null,"An array of objects containing terra-button properties. A key attribute is required for each object.\nThis array is used to render buttons in the bottom section.\nExample:",Object(p.mdx)("inlineCode",{parentName:"p"},"[{ text: 'Refresh Application', key: 1, variant: 'neutral', onClick: myRefreshFunction}]")))}return t.isMDXComponent=!0,t({})}},{name:"message",type:function(){var e={};function t(t){var o=t.components,n=l()(t,["components"]);return Object(p.mdx)("wrapper",a()({},e,n,{components:o,mdxType:"MDXLayout"}),Object(p.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var o=t.components,n=l()(t,["components"]);return Object(p.mdx)("wrapper",a()({},e,n,{components:o,mdxType:"MDXLayout"}),Object(p.mdx)("p",null,"The descriptive text, displayed under the title."))}return t.isMDXComponent=!0,t({})}},{name:"variant",type:function(){var e={};function t(t){var o=t.components,n=l()(t,["components"]);return Object(p.mdx)("wrapper",a()({},e,n,{components:o,mdxType:"MDXLayout"}),Object(p.mdx)("p",null,"enum"),Object(p.mdx)("pre",null,Object(p.mdx)("code",a()({parentName:"pre"},{className:"language-json"}),'[\n "no-data",\n "no-matching-results",\n "not-authorized",\n "error"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var o=t.components,n=l()(t,["components"]);return Object(p.mdx)("wrapper",a()({},e,n,{components:o,mdxType:"MDXLayout"}),Object(p.mdx)("p",null,"Sets the glyph and title using a pre-baked variant. One of the following: ",Object(p.mdx)("inlineCode",{parentName:"p"},"no-data"),",\n",Object(p.mdx)("inlineCode",{parentName:"p"},"no-matching-results"),", ",Object(p.mdx)("inlineCode",{parentName:"p"},"not-authorized"),", or ",Object(p.mdx)("inlineCode",{parentName:"p"},"error")))}return t.isMDXComponent=!0,t({})}}]})},c={};function i(e){var t=e.components,o=l()(e,["components"]);return Object(p.mdx)("wrapper",a()({},c,o,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("h1",{id:"applicationstatusoverlay"},"ApplicationStatusOverlay"),Object(p.mdx)("p",null,"The ApplicationStatusOverlay is used to render a Status View within the application."),Object(p.mdx)("p",null,"When mounted, the ApplicationStatusOverlay will communicate with an ancestor\n",Object(p.mdx)("a",a()({parentName:"p"},{href:"/terra-application/application/terra-application/components/application-status-overlay-provider"}),"ApplicationStatusOverlayProvider")," to\npresent a staus view."),Object(p.mdx)("blockquote",null,Object(p.mdx)("p",{parentName:"blockquote"},"See the ",Object(p.mdx)("a",a()({parentName:"p"},{href:"/terra-application/application/terra-application/how-to/show-status-overlays"}),"How to Show Status Overlay View")," page for usage information.")),Object(p.mdx)("h2",{id:"usage"},"Usage"),Object(p.mdx)("pre",null,Object(p.mdx)("code",a()({parentName:"pre"},{className:"language-jsx"}),"import ApplicationStatusOverlay from 'terra-application/lib/application-status-overlay';\n")),Object(p.mdx)("h2",{id:"props"},"Props"),Object(p.mdx)(d,{mdxType:"ApplicationStatusOverlayProps"}))}i.isMDXComponent=!0},884:function(e,t,o){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var l=a?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(o,r,l):o[r]=e[r]}o.default=e,t&&t.set(e,o);return o}(o(0)),r=s(o(1)),l=s(o(3)),p=o(83),u=s(o(885));function s(e){return e&&e.__esModule?e:{default:e}}function d(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}var c=l.default.bind(u.default),i={rows:r.default.arrayOf(r.default.shape({name:r.default.string,type:r.default.func,required:r.default.bool,defaultValue:r.default.string,description:r.default.func}))},m=function(e){var t=e.rows,o=(0,a.useContext)(p.ThemeContext);return a.default.createElement("table",{className:c("table",o.className)},a.default.createElement("thead",null,a.default.createElement("tr",{className:c("tr")},a.default.createElement("th",{className:c("th")},"Prop Name"),a.default.createElement("th",{className:c("th")},"Type"),a.default.createElement("th",{className:c("th")},"Is Required"),a.default.createElement("th",{className:c("th")},"Default Value"),a.default.createElement("th",{className:c("th")},"Description"))),a.default.createElement("tbody",null,t.map((function(e){return a.default.createElement("tr",{className:c("tr","props-tr"),key:e.name},a.default.createElement("td",{className:c(["td","strong","props-td"])},e.name),a.default.createElement("td",{className:c(["td","props-td"])},e.type()),a.default.createElement("td",{className:c(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),a.default.createElement("td",{className:c(["td","props-td"])},e.defaultValue),a.default.createElement("td",{className:c(["td","props-td"])},e.description()))}))))};m.propTypes=i;var _=m;t.default=_},885:function(e,t,o){e.exports={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3s97-","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___1kDLT",a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}}}]);
//# sourceMappingURL=56-78ef412bd4a07a368d94.js.map