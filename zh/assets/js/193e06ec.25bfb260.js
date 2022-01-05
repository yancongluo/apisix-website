"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46534],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),o=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=o(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=o(t),h=r,k=d["".concat(p,".").concat(h)]||d[h]||s[h]||l;return t?a.createElement(k,i(i({ref:n},u),{},{components:t})):a.createElement(k,i({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var o=2;o<l;o++)i[o]=t[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},54203:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return o},default:function(){return s}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),i={title:"proxy-cache"},c=void 0,p={unversionedId:"plugins/proxy-cache",id:"version-2.4/plugins/proxy-cache",isDocsHomePage:!1,title:"proxy-cache",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.4/plugins/proxy-cache.md",sourceDirName:"plugins",slug:"/plugins/proxy-cache",permalink:"/zh/docs/apisix/2.4/plugins/proxy-cache",editUrl:"https://github.com/apache/apisix/edit/release/2.4/docs/zh/latest/plugins/proxy-cache.md",tags:[],version:"2.4",frontMatter:{title:"proxy-cache"},sidebar:"version-2.4/docs",previous:{title:"limit-count",permalink:"/zh/docs/apisix/2.4/plugins/limit-count"},next:{title:"request-validation",permalink:"/zh/docs/apisix/2.4/plugins/request-validation"}},o=[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}],u={toc:o};function s(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u4ee3\u7406\u7f13\u5b58\u63d2\u4ef6\uff0c\u8be5\u63d2\u4ef6\u63d0\u4f9b\u7f13\u5b58\u540e\u7aef\u54cd\u5e94\u6570\u636e\u7684\u80fd\u529b\uff0c\u5b83\u53ef\u4ee5\u548c\u5176\u4ed6\u63d2\u4ef6\u4e00\u8d77\u4f7f\u7528\u3002\u8be5\u63d2\u4ef6\u652f\u6301\u57fa\u4e8e\u78c1\u76d8\u7684\u7f13\u5b58\uff0c\u672a\u6765\u4e5f\u4f1a\u652f\u6301\u57fa\u4e8e\u5185\u5b58\u7684\u7f13\u5b58\u3002\u76ee\u524d\u53ef\u4ee5\u6839\u636e\u54cd\u5e94\u7801\u3001\u8bf7\u6c42 Method \u6765\u6307\u5b9a\u9700\u8981\u7f13\u5b58\u7684\u6570\u636e\uff0c\u53e6\u5916\u4e5f\u53ef\u4ee5\u901a\u8fc7 no_cache \u548c cache_bypass \u914d\u7f6e\u66f4\u590d\u6742\u7684\u7f13\u5b58\u7b56\u7565\u3002"),(0,l.kt)("p",null,"\u57fa\u4e8e\u78c1\u76d8\u7684\u7f13\u5b58\u9700\u8981\u6ce8\u610f\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4e0d\u80fd\u52a8\u6001\u914d\u7f6e\u7f13\u5b58\u7684\u8fc7\u671f\u65f6\u95f4\uff0c\u53ea\u80fd\u901a\u8fc7\u540e\u7aef\u670d\u52a1\u54cd\u5e94\u5934 Expires \u6216 Cache-Control \u6765\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4\uff0c\u5982\u679c\u540e\u7aef\u54cd\u5e94\u5934\u4e2d\u6ca1\u6709 Expires \u6216 Cache-Control\uff0c\u90a3\u4e48 APISIX \u5c06\u9ed8\u8ba4\u53ea\u7f13\u5b5810\u79d2\u949f"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u540e\u7aef\u670d\u52a1\u4e0d\u53ef\u7528\uff0c APISIX \u5c06\u8fd4\u56de502\u6216504\uff0c\u90a3\u4e48502\u6216504\u5c06\u88ab\u7f13\u5b5810\u79d2\u949f")),(0,l.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cache_zone"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"disk_cache_one"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u4f7f\u7528\u54ea\u4e2a\u7f13\u5b58\u533a\u57df\uff0c\u4e0d\u540c\u7684\u7f13\u5b58\u533a\u57df\u53ef\u4ee5\u914d\u7f6e\u4e0d\u540c\u7684\u8def\u5f84\uff0c\u5728 conf/config.yaml \u6587\u4ef6\u4e2d\u53ef\u4ee5\u9884\u5b9a\u4e49\u4f7f\u7528\u7684\u7f13\u5b58\u533a\u57df\u3002\u5f53\u4e0d\u4f7f\u7528\u9ed8\u8ba4\u503c\u65f6\uff0c\u6307\u5b9a\u7684\u7f13\u5b58\u533a\u57df\u4e0e conf/config.yaml \u6587\u4ef6\u4e2d\u9884\u5b9a\u4e49\u7684\u7f13\u5b58\u533a\u57df\u4e0d\u4e00\u81f4\uff0c\u7f13\u5b58\u65e0\u6548\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cache_key"),(0,l.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},'["$host", "$request_uri"]'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58key\uff0c\u53ef\u4ee5\u4f7f\u7528\u53d8\u91cf\u3002\u4f8b\u5982\uff1a",'["$host", "$uri", "-cache-id"]')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cache_bypass"),(0,l.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u8df3\u8fc7\u7f13\u5b58\u68c0\u7d22\uff0c\u5373\u4e0d\u5728\u7f13\u5b58\u4e2d\u67e5\u627e\u6570\u636e\uff0c\u53ef\u4ee5\u4f7f\u7528\u53d8\u91cf\uff0c\u9700\u8981\u6ce8\u610f\u5f53\u6b64\u53c2\u6570\u7684\u503c\u4e0d\u4e3a\u7a7a\u6216\u975e'0'\u65f6\u5c06\u4f1a\u8df3\u8fc7\u7f13\u5b58\u7684\u68c0\u7d22\u3002\u4f8b\u5982\uff1a",'["$arg_bypass"]')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cache_method"),(0,l.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},'["GET", "HEAD"]'),(0,l.kt)("td",{parentName:"tr",align:null},'["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD","OPTIONS", "CONNECT", "TRACE"]'),(0,l.kt)("td",{parentName:"tr",align:null},"\u6839\u636e\u8bf7\u6c42method\u51b3\u5b9a\u662f\u5426\u9700\u8981\u7f13\u5b58")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cache_http_status"),(0,l.kt)("td",{parentName:"tr",align:null},"array","[integer]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"[200, 301, 404]"),(0,l.kt)("td",{parentName:"tr",align:null},"[200, 599]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6839\u636e\u54cd\u5e94\u7801\u51b3\u5b9a\u662f\u5426\u9700\u8981\u7f13\u5b58")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hide_cache_headers"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5c06 Expires \u548c Cache-Control \u54cd\u5e94\u5934\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"no_cache"),(0,l.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u7f13\u5b58\u6570\u636e\uff0c\u53ef\u4ee5\u4f7f\u7528\u53d8\u91cf\uff0c\u9700\u8981\u6ce8\u610f\u5f53\u6b64\u53c2\u6570\u7684\u503c\u4e0d\u4e3a\u7a7a\u6216\u975e'0'\u65f6\u5c06\u4e0d\u4f1a\u7f13\u5b58\u6570\u636e")))),(0,l.kt)("p",null,"\u6ce8\uff1a\u53d8\u91cf\u4ee5$\u5f00\u5934\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u53d8\u91cf\u548c\u5b57\u7b26\u4e32\u7684\u7ed3\u5408\uff0c\u4f46\u662f\u9700\u8981\u4ee5\u6570\u7ec4\u7684\u5f62\u5f0f\u5206\u5f00\u5199\uff0c\u6700\u7ec8\u53d8\u91cf\u88ab\u89e3\u6790\u540e\u4f1a\u548c\u5b57\u7b26\u4e32\u62fc\u63a5\u5728\u4e00\u8d77\u3002"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u6587\u4ef6\u4e2d\u7684\u914d\u7f6e\u793a\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'proxy_cache:                       # \u4ee3\u7406\u7f13\u5b58\u914d\u7f6e\n    cache_ttl: 10s                 # \u5982\u679c\u4e0a\u6e38\u672a\u6307\u5b9a\u7f13\u5b58\u65f6\u95f4\uff0c\u5219\u4e3a\u9ed8\u8ba4\u7f13\u5b58\u65f6\u95f4\n    zones:                         # \u7f13\u5b58\u7684\u53c2\u6570\n    - name: disk_cache_one         # \u7f13\u5b58\u540d\u79f0(\u7f13\u5b58\u533a\u57df)\uff0c\u7ba1\u7406\u5458\u53ef\u4ee5\u901a\u8fc7admin api\u4e2d\u7684 cache_zone \u5b57\u6bb5\u6307\u5b9a\u8981\u4f7f\u7528\u7684\u7f13\u5b58\u533a\u57df\n      memory_size: 50m             # \u5171\u4eab\u5185\u5b58\u7684\u5927\u5c0f\uff0c\u7528\u4e8e\u5b58\u50a8\u7f13\u5b58\u7d22\u5f15\n      disk_size: 1G                # \u78c1\u76d8\u5927\u5c0f\uff0c\u7528\u4e8e\u5b58\u50a8\u7f13\u5b58\u6570\u636e\n      disk_path: "/tmp/disk_cache_one" # \u5b58\u50a8\u7f13\u5b58\u6570\u636e\u7684\u8def\u5f84\n      cache_levels: "1:2"          # \u7f13\u5b58\u7684\u5c42\u6b21\u7ed3\u6784\u7ea7\u522b\n')),(0,l.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("h4",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u793a\u4f8b\u4e00\uff1acache_zone \u53c2\u6570\u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"disk_cache_one")),(0,l.kt)("p",null,"1\u3001\u4e3a\u7279\u5b9a\u8def\u7531\u542f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"proxy-cache")," \u63d2\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "proxy-cache": {\n            "cache_key":  ["$uri", "-cache-id"],\n            "cache_bypass": ["$arg_bypass"],\n            "cache_method": ["GET"],\n            "cache_http_status": [200],\n            "hide_cache_headers": true,\n            "no_cache": ["$arg_test"]\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1999": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n')),(0,l.kt)("p",null,"\u6d4b\u8bd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/hello -i\nHTTP/1.1 200 OK\nContent-Type: application/octet-stream\nContent-Length: 6\nConnection: keep-alive\nServer: APISIX web server\nDate: Tue, 03 Mar 2020 10:45:36 GMT\nLast-Modified: Tue, 03 Mar 2020 10:36:38 GMT\nApisix-Cache-Status: MISS\n\nhello\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"http status \u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"200"),"\u5e76\u4e14\u54cd\u5e94\u5934\u4e2d\u5305\u542b ",(0,l.kt)("inlineCode",{parentName:"p"},"Apisix-Cache-Status"),"\uff0c\u8868\u793a\u8be5\u63d2\u4ef6\u5df2\u542f\u7528\u3002")),(0,l.kt)("p",null,"2\u3001\u9a8c\u8bc1\u6570\u636e\u662f\u5426\u88ab\u7f13\u5b58\uff0c\u518d\u6b21\u8bf7\u6c42\u4e0a\u8fb9\u7684\u5730\u5740\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/hello -i\nHTTP/1.1 200 OK\nContent-Type: application/octet-stream\nContent-Length: 6\nConnection: keep-alive\nServer: APISIX web server\nDate: Tue, 03 Mar 2020 11:14:46 GMT\nLast-Modified: Thu, 20 Feb 2020 14:21:41 GMT\nApisix-Cache-Status: HIT\n\nhello\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u54cd\u5e94\u5934  Apisix-Cache-Status \u503c\u53d8\u4e3a\u4e86 HIT\uff0c\u8bf4\u660e\u6570\u636e\u5df2\u7ecf\u88ab\u7f13\u5b58")),(0,l.kt)("p",null,"\u793a\u4f8b\u4e8c\uff1a\u81ea\u5b9a\u4e49 cache_zone \u53c2\u6570\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"disk_cache_two")),(0,l.kt)("p",null,"1\u3001\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u6587\u4ef6\u4e2d\u7684\u6307\u5b9a\u7f13\u5b58\u533a\u57df\u7b49\u4fe1\u606f:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'proxy_cache:\n    cache_ttl: 10s\n    zones:\n    - name: disk_cache_two\n      memory_size: 50m\n      disk_size: 1G\n      disk_path: "/tmp/disk_cache_one"\n      cache_levels: "1:2"\n')),(0,l.kt)("p",null,"2\u3001\u4e3a\u7279\u5b9a\u8def\u7531\u542f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"proxy-cache")," \u63d2\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "proxy-cache": {\n            "cache_zone": "disk_cache_two",\n            "cache_key":  ["$uri", "-cache-id"],\n            "cache_bypass": ["$arg_bypass"],\n            "cache_method": ["GET"],\n            "cache_http_status": [200],\n            "hide_cache_headers": true,\n            "no_cache": ["$arg_test"]\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1999": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n')),(0,l.kt)("p",null,"\u6d4b\u8bd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/hello -i\nHTTP/1.1 200 OK\nContent-Type: application/octet-stream\nContent-Length: 6\nConnection: keep-alive\nServer: APISIX web server\nDate: Tue, 03 Mar 2020 10:45:36 GMT\nLast-Modified: Tue, 03 Mar 2020 10:36:38 GMT\nApisix-Cache-Status: MISS\n\nhello\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"http status \u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"200"),"\u5e76\u4e14\u54cd\u5e94\u5934\u4e2d\u5305\u542b ",(0,l.kt)("inlineCode",{parentName:"p"},"Apisix-Cache-Status"),"\uff0c\u8868\u793a\u8be5\u63d2\u4ef6\u5df2\u542f\u7528\u3002")),(0,l.kt)("p",null,"3\u3001\u9a8c\u8bc1\u6570\u636e\u662f\u5426\u88ab\u7f13\u5b58\uff0c\u518d\u6b21\u8bf7\u6c42\u4e0a\u9762\u7684\u5730\u5740\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/hello -i\nHTTP/1.1 200 OK\nContent-Type: application/octet-stream\nContent-Length: 6\nConnection: keep-alive\nServer: APISIX web server\nDate: Tue, 03 Mar 2020 11:14:46 GMT\nLast-Modified: Thu, 20 Feb 2020 14:21:41 GMT\nApisix-Cache-Status: HIT\n\nhello\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u54cd\u5e94\u5934 ",(0,l.kt)("inlineCode",{parentName:"p"},"Apisix-Cache-Status")," \u503c\u53d8\u4e3a\u4e86 HIT\uff0c\u8bf4\u660e\u6570\u636e\u5df2\u7ecf\u88ab\u7f13\u5b58")),(0,l.kt)("p",null,"\u793a\u4f8b3\uff1a\u6307\u5b9a cache_zone \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"invalid_disk_cache")," \u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u6587\u4ef6\u4e2d\u6307\u5b9a\u7684\u7f13\u5b58\u533a\u57df ",(0,l.kt)("inlineCode",{parentName:"p"},"disk_cache_one")," \u4e0d\u4e00\u81f4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "proxy-cache": {\n            "cache_zone": "invalid_disk_cache",\n            "cache_key":  ["$uri", "-cache-id"],\n            "cache_bypass": ["$arg_bypass"],\n            "cache_method": ["GET"],\n            "cache_http_status": [200],\n            "hide_cache_headers": true,\n            "no_cache": ["$arg_test"]\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1999": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"error_msg":"failed to check the configuration of plugin proxy-cache err: cache_zone invalid_disk_cache not found"}\n')),(0,l.kt)("p",null,"\u54cd\u5e94\u9519\u8bef\u4fe1\u606f\uff0c\u8868\u793a\u63d2\u4ef6\u914d\u7f6e\u65e0\u6548\u3002"),(0,l.kt)("h4",{id:"\u6e05\u9664\u7f13\u5b58\u6570\u636e"},"\u6e05\u9664\u7f13\u5b58\u6570\u636e"),(0,l.kt)("p",null,"\u5982\u4f55\u6e05\u7406\u7f13\u5b58\u7684\u6570\u636e\uff0c\u53ea\u9700\u8981\u6307\u5b9a\u8bf7\u6c42\u7684 method \u4e3a PURGE\u3002"),(0,l.kt)("p",null,"\u6d4b\u8bd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i http://127.0.0.1:9080/hello -X PURGE\nHTTP/1.1 200 OK\nDate: Tue, 03 Mar 2020 11:17:35 GMT\nContent-Type: text/plain\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX web server\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u54cd\u5e94\u7801\u4e3a200\u5373\u8868\u793a\u5220\u9664\u6210\u529f\uff0c\u5982\u679c\u7f13\u5b58\u7684\u6570\u636e\u672a\u627e\u5230\u5c06\u8fd4\u56de404\u3002")),(0,l.kt)("p",null,"\u518d\u6b21\u8bf7\u6c42\uff0c\u7f13\u5b58\u6570\u636e\u672a\u627e\u5230\u8fd4\u56de404\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i http://127.0.0.1:9080/hello -X PURGE\nHTTP/1.1 404 Not Found\nDate: Wed, 18 Nov 2020 05:46:34 GMT\nContent-Type: text/plain\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX web server\n\n<html>\n<head><title>404 Not Found</title></head>\n<body>\n<center><h1>404 Not Found</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n")),(0,l.kt)("h4",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u79fb\u9664\u63d2\u4ef6\u914d\u7f6e\u4e2d\u76f8\u5e94\u7684 JSON \u914d\u7f6e\u53ef\u7acb\u5373\u7981\u7528\u8be5\u63d2\u4ef6\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1999": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"\u8fd9\u65f6\u8be5\u63d2\u4ef6\u5df2\u88ab\u7981\u7528\u3002"))}s.isMDXComponent=!0}}]);