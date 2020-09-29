(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{913:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=l(t(0)),i=l(t(1)),o=l(t(3)),r=l(t(914));function l(e){return e&&e.__esModule?e:{default:e}}var p=o.default.bind(r.default),c={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},s=function(e){var a=e.src,t=e.name,i=e.url,o=e.version,r=n.default.createElement("a",{className:p("badge"),href:i||"https://www.npmjs.org/package/".concat(t,"/v/").concat(o)},n.default.createElement("span",{className:p("badge-name")},i?"package":"npm"),n.default.createElement("span",{className:p("badge-version")},"v".concat(o))),l=a?n.default.createElement("a",{className:p("badge"),href:a},n.default.createElement("span",{className:p("badge-name")},"github"),n.default.createElement("span",{className:p("badge-version")},"source")):void 0;return n.default.createElement("div",{className:p("badge-container")},r,l)};s.propTypes=c;var d=s;a.default=d},914:function(e,a,t){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}},993:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return b}));var n=t(19),i=t.n(n),o=t(24),r=t.n(o),l=t(0),p=t.n(l),c=t(288),s=t(913),d=t.n(s),m=function(e){var a=e.url;return p.a.createElement(d.a,{src:"https://github.com/cerner/terra-application",name:"terra-application",version:"1.36.0",url:a})},u={};function b(e){var a=e.components,t=r()(e,["components"]);return Object(c.mdx)("wrapper",i()({},u,t,{components:a,mdxType:"MDXLayout"}),Object(c.mdx)(m,{mdxType:"Badge"}),Object(c.mdx)("h1",{id:"terra-application"},"Terra Application"),Object(c.mdx)("p",null,"A React-based application framework from Cerner."),Object(c.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"Install with ",Object(c.mdx)("a",i()({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(c.mdx)("ul",{parentName:"li"},Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"npm install terra-application"))))),Object(c.mdx)("h2",{id:"why-create-an-application-framework"},"Why create an application framework?"),Object(c.mdx)("p",null,"As we have developed web applications at Cerner we have found that there are many questions that must be answered at the outset of an application's development and that many of those questions have a common answer that can be provided by an application framework."),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"How will this application provide accessible, consistent navigation?"),Object(c.mdx)("li",{parentName:"ul"},"When javascript errors in an highly composable application happen, how do we prevent the entire page from breaking?"),Object(c.mdx)("li",{parentName:"ul"},"How do we offer a consistent overlay experience?"),Object(c.mdx)("li",{parentName:"ul"},"How do we ensure modals are accessible and prevent multiple on the page at once? How can composable components flex between being presented as page content and modal content?"),Object(c.mdx)("li",{parentName:"ul"},"How can we prevent single page navigation while unsaved changes are present?"),Object(c.mdx)("li",{parentName:"ul"},"How does content get presented in a slide panel?"),Object(c.mdx)("li",{parentName:"ul"},"How do we enable responsive behavior in applications without sacrificing performance?"),Object(c.mdx)("li",{parentName:"ul"},"How do components provide a localized experience?"),Object(c.mdx)("li",{parentName:"ul"},"How do we theme highly composed applications?"),Object(c.mdx)("li",{parentName:"ul"},"How will this application consume existing components developed for other applications? How will interoperability be defined? How will dependencies be managed?"),Object(c.mdx)("li",{parentName:"ul"},"How will this application have a user experience that is consistent with that of other applications? How will that consistency be maintained over time?")),Object(c.mdx)("p",null,"The terra-application framework seeks to answer these questions and simplify the process of maintaining web applications."),Object(c.mdx)("h2",{id:"overview"},"Overview"),Object(c.mdx)("p",null,"Terra Application contains many components designed to help solve common web application problems."),Object(c.mdx)("h3",{id:"application-base"},"Application Base"),Object(c.mdx)("p",null,"The ApplicationBase component is the entrypoint into the Terra application framework. Applications must render ApplicationBase around their content to provide the content with ApplicationBase's features."),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",i()({parentName:"li"},{href:"/terra-application/application/terra-application/components/application-base"}),"Application Base API"))),Object(c.mdx)("h3",{id:"application-navigation"},"Application Navigation"),Object(c.mdx)("p",null,"Consistent navigation throughout Cerner applications helps provide a positive user experience by teaching users what to expect when interacting with applications. The ApplicationNavigation component provides a styled layout and controls used for navigating within an application."),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",i()({parentName:"li"},{href:"/terra-application/application/terra-application/components/application-navigation"}),"Application Navigation API"))),Object(c.mdx)("h3",{id:"js-error-handling"},"JS Error Handling"),Object(c.mdx)("p",null,"Typically when a javascript error occurs in a web application, the entire page will be broken. Using ",Object(c.mdx)("a",i()({parentName:"p"},{href:"https://reactjs.org/docs/error-boundaries.html"}),"react error boundaries"),", Terra provides a way to isolate the error to prevent the entire application from being taken down."),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",i()({parentName:"li"},{href:"/terra-application/application/terra-application/components/application-error-boundary"}),"Application Error Boundary API"))),Object(c.mdx)("h3",{id:"overlays"},"Overlays"),Object(c.mdx)("p",null,"Presenting overlays over content being loaded or saved to a server is a common application pattern. Terra provides an application overlay to overlay loading content, as well as an application overlay provider to redefine what portion of the page should be overlaid."),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",i()({parentName:"li"},{href:"/terra-application/application/terra-application/components/application-loading-overlay"}),"Application Overlay API")),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",i()({parentName:"li"},{href:"/terra-application/application/terra-application/components/application-loading-overlay-provider"}),"Application Overlay Provider API"))),Object(c.mdx)("h3",{id:"status-views"},"Status Views"),Object(c.mdx)("p",null,"Presenting status views to show the current state of the page is a common application pattern. Terra provides an application status view to present a status view over the content, as well as an application status view provider to redefine what portion of the page should be overlaid."),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",i()({parentName:"li"},{href:"/terra-application/application/terra-application/components/application-status-overlay"}),"Application Status View API")),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",i()({parentName:"li"},{href:"/terra-application/application/terra-application/components/application-status-overlay-provider"}),"Application Status View Provider API"))),Object(c.mdx)("h3",{id:"notification-banners"},"Notification Banners"),Object(c.mdx)("p",null,"Notification Banners are used to bring the user's attention to important displayed information. This common interface pattern requires strategic placement and ordering on the application screen to be effective. Terra Application provides banner management to align with these needs."),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",i()({parentName:"li"},{href:"/terra-application/application/terra-application/components/notification-banner"}),"Notification Banners API"))),Object(c.mdx)("h3",{id:"modal-disclosure"},"Modal disclosure"),Object(c.mdx)("p",null,"Presenting content within a modal is a common, yet tricky pattern. To help reduce this complexity Terra provides API's, through the disclosure manager, to present modal content."),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",i()({parentName:"li"},{href:"/terra-application/application/terra-application/contexts/disclosure-manager-context"}),"Disclosure Manager API"))),Object(c.mdx)("h3",{id:"unsaved-changes"},"Unsaved Changes"),Object(c.mdx)("p",null,"Unsaved form data is another common pattern. Terra provides the Navigation prompt to prevent navigating away from unsaved changes."),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",i()({parentName:"li"},{href:"/terra-application/application/terra-application/components/navigation-prompt"}),"Navigation Prompt API"))),Object(c.mdx)("h3",{id:"slide-panel-disclosure"},"Slide panel disclosure"),Object(c.mdx)("p",null,"Presenting content to a slide panel is less common, yet still tricky. Similar to modal manager we provide the disclosure manager api to disclose content to slide panels, as well as a slide panel manager to define the slide panel in the application."),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",i()({parentName:"li"},{href:"/terra-application/application/terra-application/components/slide-panel-manager"}),"Slide Panel Manager")),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",i()({parentName:"li"},{href:"/terra-application/application/terra-application/contexts/disclosure-manager-context"}),"Disclosure Manager API"))),Object(c.mdx)("h3",{id:"active-breakpoints"},"Active Breakpoints"),Object(c.mdx)("p",null,"Many applications respond to the current active breakpoint to adjust for screen size. We provide the active breakpoint as a context to limit the number of component that listen to the browser resize event."),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",i()({parentName:"li"},{href:"/terra-application/application/terra-application/contexts/active-breakpoint-context"}),"Active Breakpoint Context API"))),Object(c.mdx)("h3",{id:"internationalization"},"Internationalization"),Object(c.mdx)("p",null,"Terra applications must work for many locales, The Application Intl Context provides access to the frameworks i18n APIs."),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",i()({parentName:"li"},{href:"/terra-application/application/terra-application/contexts/application-intl-context"}),"Application Intl Context API"))),Object(c.mdx)("h3",{id:"theming"},"Theming"),Object(c.mdx)("p",null,"Applications commonly switch between light and dark modes. Terra provides theme APIs to allow theming of custom components within a terra application."),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",i()({parentName:"li"},{href:"/terra-application/application/terra-application/contexts/theme-context"}),"Theme Context API"))),Object(c.mdx)("h3",{id:"component-composition"},"Component Composition"),Object(c.mdx)("p",null,"The framework provides a large number of features using React's Context APIs. An application built with the framework is guaranteed to have access to these framework features and reusable components can be developed with the assumption that the framework will provide them. Any components requiring the same major version of terra-application will be interoperable."),Object(c.mdx)("p",null,"The terra-application package brings all the required framework logic into a single location, resulting in a simplified dependency that is easy to manage across the suite of developed components."),Object(c.mdx)("h3",{id:"ux-consistency"},"UX Consistency"),Object(c.mdx)("p",null,"The framework utilizes the full suite of Terra's components to ensure visual consistency and accessibility for applications. The framework also provides simplified APIs for common design patterns like loading overlays, modals, and error view presentation to further promote consistency."))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=50-2adaa210069281a6f5d5.js.map