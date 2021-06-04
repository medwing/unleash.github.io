(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[5506],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),h=l(n),m=a,d=h["".concat(s,".").concat(m)]||h[m]||p[m]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3677:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],u={id:"securing_unleash",title:"Securing Unleash"},s={unversionedId:"deploy/securing_unleash",id:"deploy/securing_unleash",isDocsHomePage:!1,title:"Securing Unleash",description:"If you are still using Unleash v3 you need to follow the securing-unleash-v3",source:"@site/docs/deploy/securing-unleash.md",sourceDirName:"deploy",slug:"/deploy/securing_unleash",permalink:"/deploy/securing_unleash",editUrl:"https://github.com/Unleash/unleash/edit/master/websitev2/docs/deploy/securing-unleash.md",version:"current",frontMatter:{id:"securing_unleash",title:"Securing Unleash"},sidebar:"Deploy and manage",previous:{title:"Configuring Unleash",permalink:"/deploy/configuring_unleash"},next:{title:"Email service",permalink:"/deploy/email"}},l=[{value:"Implementing Custom Authentication",id:"implementing-custom-authentication",children:[]}],c={toc:l};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If you are still using Unleash v3 you need to follow the ",(0,o.kt)("a",{parentName:"strong",href:"./securing-unleash-v3"},"securing-unleash-v3"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This guide is only relevant if you are using Unleash Open-Source. The Enterprise edition does already ship with multiple SSO options, such as SAML 2.0, OpenId Connect.")),(0,o.kt)("p",null,"Unleash Open-Source v4 comes with username/password authentication out of the box. In addition Unleash v4 also comes with API token support, to make it easy to handle access tokens for Client SDKs and programmatic asses to the Unleash APIs."),(0,o.kt)("h3",{id:"implementing-custom-authentication"},"Implementing Custom Authentication"),(0,o.kt)("p",null,"If you do not wish to use the built-in"),(0,o.kt)("p",null,"To secure the Admin API, you have to tell Unleash that you are using a custom admin authentication and implement your authentication logic as a preHook."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const unleash = require('unleash-server');\nconst myCustomAdminAuth = require('./auth-hook');\n\nunleash\n  .start({\n    databaseUrl: 'postgres://unleash_user:passord@localhost:5432/unleash',\n    authentication: {\n      type: 'custom',\n      customAuthHandler: myCustomAdminAuth,\n    },\n  })\n  .then(unleash => {\n    console.log(\n      `Unleash started on http://localhost:${unleash.app.get('port')}`,\n    );\n  });\n")),(0,o.kt)("p",null,"Additionally, you can trigger the admin interface to prompt the user to sign in by configuring your middleware to return a ",(0,o.kt)("inlineCode",{parentName:"p"},"401")," status on protected routes. The response body must contain a ",(0,o.kt)("inlineCode",{parentName:"p"},"message")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," used to redirect the user to the proper login route."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "message": "You must be logged in to use Unleash",\n  "path": "/custom/login"\n}\n')),(0,o.kt)("p",null,"Examples of custom authentication hooks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Unleash/unleash-examples/tree/main/v4/securing-google-auth"},"securing-google-auth")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Unleash/unleash-examples/tree/main/v4/securing-basic-auth"},"securing-basic-auth")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Unleash/unleash-examples/tree/main/v4/securing-keycloak-auth"},"securing-keycloak-auth"))))}p.isMDXComponent=!0}}]);