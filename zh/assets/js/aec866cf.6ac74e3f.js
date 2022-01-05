"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70347],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return t?r.createElement(h,o(o({ref:n},c),{},{components:t})):r.createElement(h,o({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},66206:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o={title:"Consumer"},u=void 0,l={unversionedId:"architecture-design/consumer",id:"version-2.8/architecture-design/consumer",isDocsHomePage:!1,title:"Consumer",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.8/architecture-design/consumer.md",sourceDirName:"architecture-design",slug:"/architecture-design/consumer",permalink:"/zh/docs/apisix/2.8/architecture-design/consumer",editUrl:"https://github.com/apache/apisix/edit/release/2.8/docs/zh/latest/architecture-design/consumer.md",tags:[],version:"2.8",frontMatter:{title:"Consumer"},sidebar:"version-2.8/docs",previous:{title:"Service",permalink:"/zh/docs/apisix/2.8/architecture-design/service"},next:{title:"Upstream",permalink:"/zh/docs/apisix/2.8/architecture-design/upstream"}},s=[],c={toc:s};function p(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5bf9\u4e8e API \u7f51\u5173\u901a\u5e38\u53ef\u4ee5\u7528\u8bf7\u6c42\u57df\u540d\u3001\u5ba2\u6237\u7aef IP \u5730\u5740\u7b49\u5b57\u6bb5\u8bc6\u522b\u5230\u67d0\u7c7b\u8bf7\u6c42\u65b9\uff0c\n\u7136\u540e\u8fdb\u884c\u63d2\u4ef6\u8fc7\u6ee4\u5e76\u8f6c\u53d1\u8bf7\u6c42\u5230\u6307\u5b9a\u4e0a\u6e38\uff0c\u4f46\u6709\u65f6\u5019\u8fd9\u4e2a\u6df1\u5ea6\u4e0d\u591f\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@release/2.8/docs/assets/images/consumer-who.png",alt:"Consumer"})),(0,i.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u4f5c\u4e3a API \u7f51\u5173\uff0c\u9700\u8981\u77e5\u9053 API Consumer\uff08\u6d88\u8d39\u65b9\uff09\u5177\u4f53\u662f\u8c01\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u5bf9\u4e0d\u540c API Consumer \u914d\u7f6e\u4e0d\u540c\u89c4\u5219\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"username"),(0,i.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:null},"Consumer \u540d\u79f0\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"plugins"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u8be5 Consumer \u5bf9\u5e94\u7684\u63d2\u4ef6\u914d\u7f6e\uff0c\u5b83\u7684\u4f18\u5148\u7ea7\u662f\u6700\u9ad8\u7684\uff1aConsumer > Route > Service\u3002\u5bf9\u4e8e\u5177\u4f53\u63d2\u4ef6\u914d\u7f6e\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,i.kt)("a",{parentName:"td",href:"/zh/docs/apisix/2.8/architecture-design/plugin"},"Plugins")," \u7ae0\u8282\u3002")))),(0,i.kt)("p",null,"\u5728 APISIX \u4e2d\uff0c\u8bc6\u522b Consumer \u7684\u8fc7\u7a0b\u5982\u4e0b\u56fe\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@release/2.8/docs/assets/images/consumer-internal.png",alt:"Consumer Internal"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u6388\u6743\u8ba4\u8bc1\uff1a\u6bd4\u5982\u6709 ",(0,i.kt)("a",{parentName:"li",href:"/zh/docs/apisix/2.8/plugins/key-auth"},"key-auth"),"\u3001",(0,i.kt)("a",{parentName:"li",href:"/zh/docs/apisix/2.8/plugins/jwt-auth"},"JWT")," \u7b49\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u83b7\u53d6 consumer_name\uff1a\u901a\u8fc7\u6388\u6743\u8ba4\u8bc1\uff0c\u5373\u53ef\u81ea\u7136\u83b7\u53d6\u5230\u5bf9\u5e94\u7684 Consumer name\uff0c\u5b83\u662f Consumer \u5bf9\u8c61\u7684\u552f\u4e00\u8bc6\u522b\u6807\u8bc6\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u83b7\u53d6 Consumer \u4e0a\u7ed1\u5b9a\u7684 Plugin \u6216 Upstream \u4fe1\u606f\uff1a\u5b8c\u6210\u5bf9\u4e0d\u540c Consumer \u505a\u4e0d\u540c\u914d\u7f6e\u7684\u6548\u679c\u3002")),(0,i.kt)("p",null,"\u6982\u62ec\u4e00\u4e0b\uff0cConsumer \u662f\u67d0\u7c7b\u670d\u52a1\u7684\u6d88\u8d39\u8005\uff0c\u9700\u4e0e\u7528\u6237\u8ba4\u8bc1\u4f53\u7cfb\u914d\u5408\u624d\u80fd\u4f7f\u7528\u3002\n\u6bd4\u5982\u4e0d\u540c\u7684 Consumer \u8bf7\u6c42\u540c\u4e00\u4e2a API\uff0c\u7f51\u5173\u670d\u52a1\u6839\u636e\u5f53\u524d\u8bf7\u6c42\u7528\u6237\u4fe1\u606f\uff0c\u5bf9\u5e94\u4e0d\u540c\u7684 Plugin \u6216 Upstream \u914d\u7f6e\u3002"),(0,i.kt)("p",null,"\u6b64\u5916\uff0c\u5927\u5bb6\u4e5f\u53ef\u4ee5\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.8/plugins/key-auth"},"key-auth")," \u8ba4\u8bc1\u6388\u6743\u63d2\u4ef6\u7684\u8c03\u7528\u903b\u8f91\uff0c\u8f85\u52a9\u5927\u5bb6\u6765\u8fdb\u4e00\u6b65\u7406\u89e3 Consumer \u6982\u5ff5\u548c\u4f7f\u7528\u3002"),(0,i.kt)("p",null,"\u5982\u4f55\u5bf9\u67d0\u4e2a Consumer \u5f00\u542f\u6307\u5b9a\u63d2\u4ef6\uff0c\u53ef\u4ee5\u770b\u4e0b\u9762\u4f8b\u5b50\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'# \u521b\u5efa Consumer \uff0c\u6307\u5b9a\u8ba4\u8bc1\u63d2\u4ef6 key-auth \uff0c\u5e76\u5f00\u542f\u7279\u5b9a\u63d2\u4ef6 limit-count\n$ curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n        "key-auth": {\n            "key": "auth-one"\n        },\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    }\n}\'\n\n# \u521b\u5efa Router\uff0c\u8bbe\u7f6e\u8def\u7531\u89c4\u5219\u548c\u542f\u7528\u63d2\u4ef6\u914d\u7f6e\n$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "key-auth": {}\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n\n# \u53d1\u6d4b\u8bd5\u8bf7\u6c42\uff0c\u524d\u4e24\u6b21\u8fd4\u56de\u6b63\u5e38\uff0c\u6ca1\u8fbe\u5230\u9650\u901f\u9608\u503c\n$ curl http://127.0.0.1:9080/hello -H \'apikey: auth-one\' -I\n...\n\n$ curl http://127.0.0.1:9080/hello -H \'apikey: auth-one\' -I\n...\n\n# \u7b2c\u4e09\u6b21\u6d4b\u8bd5\u8fd4\u56de 503\uff0c\u8bf7\u6c42\u88ab\u9650\u5236\n$ curl http://127.0.0.1:9080/hello -H \'apikey: auth-one\' -I\nHTTP/1.1 503 Service Temporarily Unavailable\n...\n\n')),(0,i.kt)("p",null,"\u7ed3\u5408 ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.8/plugins/consumer-restriction"},"consumer-restriction")," \u63d2\u4ef6\uff0c\u9650\u5236 jack \u5bf9\u8be5 route \u7684\u8bbf\u95ee"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'# \u8bbe\u7f6e\u9ed1\u540d\u5355\uff0c\u7981\u6b62jack\u8bbf\u95ee\u8be5API\n\n$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "key-auth": {},\n        "consumer-restriction": {\n            "blacklist": [\n                "jack"\n            ]\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n\n# \u53cd\u590d\u6d4b\u8bd5\uff0c\u5747\u8fd4\u56de 403\uff0cjack\u88ab\u7981\u6b62\u8bbf\u95ee\n$ curl http://127.0.0.1:9080/hello -H \'apikey: auth-one\' -I\nHTTP/1.1 403\n...\n\n')))}p.isMDXComponent=!0}}]);