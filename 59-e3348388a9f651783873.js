(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{884:function(e,t,o){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=e[a]}o.default=e,t&&t.set(e,o);return o}(o(0)),a=_(o(1)),l=_(o(3)),p=o(83),u=_(o(885));function _(e){return e&&e.__esModule?e:{default:e}}function d(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}var s=l.default.bind(u.default),c={rows:a.default.arrayOf(a.default.shape({name:a.default.string,type:a.default.func,required:a.default.bool,defaultValue:a.default.string,description:a.default.func}))},i=function(e){var t=e.rows,o=(0,n.useContext)(p.ThemeContext);return n.default.createElement("table",{className:s("table",o.className)},n.default.createElement("thead",null,n.default.createElement("tr",{className:s("tr")},n.default.createElement("th",{className:s("th")},"Prop Name"),n.default.createElement("th",{className:s("th")},"Type"),n.default.createElement("th",{className:s("th")},"Is Required"),n.default.createElement("th",{className:s("th")},"Default Value"),n.default.createElement("th",{className:s("th")},"Description"))),n.default.createElement("tbody",null,t.map((function(e){return n.default.createElement("tr",{className:s("tr","props-tr"),key:e.name},n.default.createElement("td",{className:s(["td","strong","props-td"])},e.name),n.default.createElement("td",{className:s(["td","props-td"])},e.type()),n.default.createElement("td",{className:s(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),n.default.createElement("td",{className:s(["td","props-td"])},e.defaultValue),n.default.createElement("td",{className:s(["td","props-td"])},e.description()))}))))};i.propTypes=c;var m=i;t.default=m},885:function(e,t,o){e.exports={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3s97-","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___1kDLT",a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},992:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return c}));var r=o(19),n=o.n(r),a=o(24),l=o.n(a),p=(o(0),o(288)),u=o(884),_=o.n(u),d=function(){return Object(p.mdx)(_.a,{rows:[{name:"description",type:function(){var e={};function t(t){var o=t.components,r=l()(t,["components"]);return Object(p.mdx)("wrapper",n()({},e,r,{components:o,mdxType:"MDXLayout"}),Object(p.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var o=t.components,r=l()(t,["components"]);return Object(p.mdx)("wrapper",n()({},e,r,{components:o,mdxType:"MDXLayout"}),Object(p.mdx)("p",null,"A string describing the content or concept for which the NavigationPrompt is being rendered."))}return t.isMDXComponent=!0,t({})}},{name:"metaData",type:function(){var e={};function t(t){var o=t.components,r=l()(t,["components"]);return Object(p.mdx)("wrapper",n()({},e,r,{components:o,mdxType:"MDXLayout"}),Object(p.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var o=t.components,r=l()(t,["components"]);return Object(p.mdx)("wrapper",n()({},e,r,{components:o,mdxType:"MDXLayout"}),Object(p.mdx)("p",null,"An object containing any other pertinent information related to the NavigationPrompt."))}return t.isMDXComponent=!0,t({})}}]})},s={};function c(e){var t=e.components,o=l()(e,["components"]);return Object(p.mdx)("wrapper",n()({},s,o,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("h1",{id:"navigationprompt"},"NavigationPrompt"),Object(p.mdx)("p",null,"The NavigationPrompt communicates with ",Object(p.mdx)("a",n()({parentName:"p"},{href:"/terra-application/application/terra-application/components/navigation-prompt-checkpoint"}),"NavigationPromptCheckpoints"),"\nrendered by ApplicationBase and other framework components. NavigationPrompts should be rendered by a component when the component wants to indicate the presence\nof pending actions or unsaved changes to the framework."),Object(p.mdx)("h2",{id:"usage"},"Usage"),Object(p.mdx)("pre",null,Object(p.mdx)("code",n()({parentName:"pre"},{className:"language-jsx"}),"import NavigationPrompt from 'terra-application/lib/navigation-prompt';\n")),Object(p.mdx)("h2",{id:"props"},"Props"),Object(p.mdx)(d,{mdxType:"NavigationPromptProps"}))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=59-e3348388a9f651783873.js.map