"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35798],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var p=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,p)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,p,n=function(e,t){if(null==e)return{};var a,p,n={},r=Object.keys(e);for(p=0;p<r.length;p++)a=r[p],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(p=0;p<r.length;p++)a=r[p],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=p.createContext({}),u=function(e){var t=p.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return p.createElement(o.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},h=p.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(a),m=n,k=h["".concat(o,".").concat(m)]||h[m]||l[m]||r;return a?p.createElement(k,i(i({ref:t},c),{},{components:a})):p.createElement(k,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<r;u++)i[u]=a[u];return p.createElement.apply(null,i)}return p.createElement.apply(null,a)}h.displayName="MDXCreateElement"},39842:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return o},assets:function(){return u},toc:function(){return c},default:function(){return h}});var p=a(87462),n=a(63366),r=(a(67294),a(3905)),i={title:"Apache APISIX \u793e\u533a\u5468\u62a5 \uff5c 08-09 \uff5e 08-15",keywords:["\u793e\u533a\u5468\u62a5","\u8d21\u732e\u8005","APISIX","Apache","Good first issue","contributor","API Gateway"],description:"\u201c\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\u201d\u3002Apache APISIX \u793e\u533a\u5468\u62a5\u5e0c\u671b\u53ef\u4ee5\u5e2e\u52a9\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u66f4\u597d\u5730\u638c\u63e1 Apache APISIX \u793e\u533a\u7684\u6bcf\u5468\u8fdb\u5c55\uff0c\u65b9\u4fbf\u5927\u5bb6\u53c2\u4e0e\u5230 Apache APISIX \u793e\u533a\u4e2d\u6765\u3002",tags:["Events"]},s=void 0,o={permalink:"/zh/blog/2021/08/19/weekly-report",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021/08/19/weekly-report.md",title:"Apache APISIX \u793e\u533a\u5468\u62a5 \uff5c 08-09 \uff5e 08-15",description:"\u201c\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\u201d\u3002Apache APISIX \u793e\u533a\u5468\u62a5\u5e0c\u671b\u53ef\u4ee5\u5e2e\u52a9\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u66f4\u597d\u5730\u638c\u63e1 Apache APISIX \u793e\u533a\u7684\u6bcf\u5468\u8fdb\u5c55\uff0c\u65b9\u4fbf\u5927\u5bb6\u53c2\u4e0e\u5230 Apache APISIX \u793e\u533a\u4e2d\u6765\u3002",date:"2021-08-19T00:00:00.000Z",formattedDate:"2021\u5e748\u670819\u65e5",tags:[{label:"Events",permalink:"/zh/blog/tags/events"}],readingTime:1.36,truncated:!0,authors:[],prevItem:{title:"Go \u8ba9 Apache APISIX \u5982\u864e\u6dfb\u7ffc",permalink:"/zh/blog/2021/08/19/go-makes-Apache-APISIX-better"},nextItem:{title:"\u5728 Apache APISIX \u4e2d\u4f7f\u7528 Casbin \u8fdb\u884c\u6388\u6743",permalink:"/zh/blog/2021/08/18/Auth-with-Casbin-in-Apache-APISIX"}},u={authorsImageUrls:[]},c=[{value:"\u5bfc\u8bed",id:"\u5bfc\u8bed",children:[]},{value:"\u8d21\u732e\u8005\u7edf\u8ba1",id:"\u8d21\u732e\u8005\u7edf\u8ba1",children:[]},{value:"Good first issue",id:"good-first-issue",children:[{value:"Issue #4800",id:"issue-4800",children:[]}]},{value:"\u672c\u5468\u529f\u80fd\u7279\u6027\u4eae\u70b9",id:"\u672c\u5468\u529f\u80fd\u7279\u6027\u4eae\u70b9",children:[]},{value:"\u672c\u5468\u535a\u6587\u63a8\u8350",id:"\u672c\u5468\u535a\u6587\u63a8\u8350",children:[]}],l={toc:c};function h(e){var t=e.components,i=(0,n.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,p.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u672c\u5468\uff0c\u6709 26 \u4f4d\u5f00\u53d1\u8005\u4e3a Apache APISIX \u63d0\u4ea4\u4e86 96 \u4e2a commit \u3002\u611f\u8c22\u672c\u5468\u4ee5\u4e0b\u5c0f\u4f19\u4f34\u4e3a Apache APISIX \u6dfb\u7816\u52a0\u74e6\uff08\u6392\u540d\u4e0d\u5206\u5148\u540e\uff09\uff0c\u662f\u4f60\u4eec\u7684\u65e0\u79c1\u4ed8\u51fa\uff0c\u8ba9 Apache APISIX \u53d8\u5f97\u66f4\u597d\uff01")),(0,r.kt)("h2",{id:"\u5bfc\u8bed"},"\u5bfc\u8bed"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"Apache APISIX")," \u4ece\u5f00\u6e90\u7b2c\u4e00\u5929\u5c31\u4ee5\u793e\u533a\u65b9\u5f0f\u6210\u957f\uff0c\u8fc5\u901f\u6210\u4e3a\u5168\u4e16\u754c\u6700\u6d3b\u8dc3\u7684\u5f00\u6e90 API \u7f51\u5173\u9879\u76ee\u3002\u8fd9\u4e9b\u6210\u5c31\uff0c\u79bb\u4e0d\u5f00\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u7684\u5171\u540c\u594b\u6597\u3002"),(0,r.kt)("p",null,"\u201c\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\u201d\u3002Apache APISIX \u793e\u533a\u5468\u62a5\u5e0c\u671b\u53ef\u4ee5\u5e2e\u52a9\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u66f4\u597d\u5730\u638c\u63e1 Apache APISIX \u793e\u533a\u7684\u6bcf\u5468\u8fdb\u5c55\uff0c\u65b9\u4fbf\u5927\u5bb6\u53c2\u4e0e\u5230 Apache APISIX \u793e\u533a\u4e2d\u6765\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u8fd8\u6574\u7406\u4e86\u4e00\u4e9b\u9002\u5408\u65b0\u6765\u793e\u533a\u7684\u5c0f\u4f19\u4f34\u4eec\u53c2\u52a0\u7684 issue \uff01\u611f\u5174\u8da3\u7684\u540c\u5b66\u4eec\uff0c\u8d70\u8fc7\u8def\u8fc7\u4e0d\u8981\u9519\u8fc7\uff01"),(0,r.kt)("h2",{id:"\u8d21\u732e\u8005\u7edf\u8ba1"},"\u8d21\u732e\u8005\u7edf\u8ba1"),(0,r.kt)("p",null,"\u672c\u5468\uff0c\u6709 26 \u4f4d\u5f00\u53d1\u8005\u4e3a Apache APISIX \u63d0\u4ea4\u4e86 96 \u4e2a commit \u3002\u611f\u8c22\u672c\u5468\u4ee5\u4e0b\u5c0f\u4f19\u4f34\u4e3a Apache APISIX \u6dfb\u7816\u52a0\u74e6\uff08\u6392\u540d\u4e0d\u5206\u5148\u540e\uff09\uff0c\u662f\u4f60\u4eec\u7684\u65e0\u79c1\u4ed8\u51fa\uff0c\u8ba9 Apache APISIX \u53d8\u5f97\u66f4\u597d\uff01"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"juzhiyuan, Baoyuantop, spacewander, okaybase, liuxiran, Serendipity96, nic-chen, tao12345666333, shuaijinchao, Yiyiyimu, jbampton, tzssangglass, foolwc, dickens7, Xunzhuo, jagerzhang, tong3jie, sunhao-java, gxthrj, chzhuo, qsliu2017, bisakhmondal, LiteSun, wmdmomo, Ylikj, bzp2010")),(0,r.kt)("h2",{id:"good-first-issue"},"Good first issue"),(0,r.kt)("h3",{id:"issue-4800"},"Issue #4800"),(0,r.kt)("p",null,"\u94fe\u63a5\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/4800"},"https://github.com/apache/apisix/issues/4800"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"\u95ee\u9898\u63cf\u8ff0"),"\uff1aAdmin API \u4e2d\u5173\u4e8e\u521b\u5efa Route \u5165\u53c2 (vars) \u7684\u63cf\u8ff0\u6709\u9519\u8bef.\n",(0,r.kt)("img",{alt:"issue",src:a(90261).Z}),"\n",(0,r.kt)("strong",{parentName:"p"},"\u89e3\u51b3\u65b9\u6848"),"\uff1a\u5728 json \u4e2d\uff0c\u65b9\u62ec\u53f7\u8868\u793a\u6570\u7ec4\uff0c\u800c\u82b1\u62ec\u53f7\u8868\u793a\u5bf9\u8c61\u3002\u8fd9\u91cc\u660e\u663e\u662f\u60f3\u8868\u8ff0\u662f\u6570\u7ec4\u5d4c\u5957\u6570\u7ec4\u7684\u65b9\u5f0f\uff0c\u4f46\u662f\u7528\u4e24\u4e2a\u82b1\u62ec\u53f7\u5728 json \u91cc\u9762\u662f\u9519\u8bef\u7684\u4e66\u5199\u65b9\u5f0f\u3002\u6240\u4ee5\u8fd9\u91cc\u5e94\u8be5\u662f\u65b9\u62ec\u53f7\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  ["arg_name", "==", "json"],\n  ["arg_age", ">", 18]\n]\n')),(0,r.kt)("h4",{id:"issue-4441"},"Issue #4441"),(0,r.kt)("p",null,"\u94fe\u63a5\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/4441"},"https://github.com/apache/apisix/issues/4441")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u95ee\u9898\u63cf\u8ff0"),'\uff1a\u73b0\u5728 APISIX stream_routes \u7684\u53c2\u6570 "remote_addr"\u53ea\u652f\u6301\u5355\u4e2a ip\uff0c\u9700\u8981\u652f\u6301\u591a\u4e2a ip \u6216\u8005\u50cf "192.168.0.0/16 "\u8fd9\u6837\u7684\u5339\u914d\u89c4\u5219\uff0c\u5c31\u50cf http \u8def\u7531\u53c2\u6570 "remote_addr"\u4e00\u6837\u3002'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u89e3\u51b3\u65b9\u6848"),'\uff1a\u4e3a APISIX stream_routes \u7684 "remote_addr"\u53c2\u6570\u652f\u6301\u591a\u4e2a ip \u5730\u5740\u6216\u5339\u914d\u89c4\u5219\uff0c\u5982 "192.168.0.0/16"'),(0,r.kt)("p",null,"\u76f8\u5173\u7cfb\u7edf\u53c2\u6570\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"apisix version (cmd: ",(0,r.kt)("inlineCode",{parentName:"li"},"apisix version"),"): 2.6"),(0,r.kt)("li",{parentName:"ul"},"OS (cmd: ",(0,r.kt)("inlineCode",{parentName:"li"},"uname -a"),"): CentOS7")),(0,r.kt)("h4",{id:"issue-3931"},"Issue #3931"),(0,r.kt)("p",null,"\u94fe\u63a5\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/3931"},"https://github.com/apache/apisix/issues/3931")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u95ee\u9898\u63cf\u8ff0"),"\uff1a \u91cd\u5b9a\u5411\u63d2\u4ef6\u4e2d\u7684 http_to_https \u7f3a\u4e4f curl \u6d4b\u8bd5"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u89e3\u51b3\u65b9\u6848"),"\uff1a\u4e3a\u91cd\u5b9a\u5411\u63d2\u4ef6\u4e2d\u7684 http_to_https \u6dfb\u52a0 curl \u6d4b\u8bd5"),(0,r.kt)("p",null,"\u66f4\u65b0\u6587\u6863 ",(0,r.kt)("a",{parentName:"p",href:"http://apisix.apache.org/docs/apisix/plugins/redirect"},"http://apisix.apache.org/docs/apisix/plugins/redirect")),(0,r.kt)("h2",{id:"\u672c\u5468\u529f\u80fd\u7279\u6027\u4eae\u70b9"},"\u672c\u5468\u529f\u80fd\u7279\u6027\u4eae\u70b9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"request-id \u63d2\u4ef6\u652f\u6301\u96ea\u82b1\u7b97\u6cd5\u751f\u6210 ID"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"\u76f8\u5173 PR"),"\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/4559"},"https://github.com/apache/apisix/pull/4559"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8d21\u732e\u8005"),"\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dickens7"},"dickens7"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6d41\u91cf\u63a7\u5236\u7c7b\u63d2\u4ef6\u589e\u52a0\u964d\u7ea7\u5904\u7406"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"\u76f8\u5173 PR"),"\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/4774"},"https://github.com/apache/apisix/pull/4774"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8d21\u732e\u8005"),"\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/okaybase"},"okaybase"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"log-rotate \u63d2\u4ef6\u652f\u6301\u538b\u7f29\u5df2\u5207\u5272\u7684\u65e5\u5fd7\u6587\u4ef6"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"\u76f8\u5173 PR"),"\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/4795"},"https://github.com/apache/apisix/pull/4795"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8d21\u732e\u8005"),"\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/okaybase"},"okaybase"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"real-ip \u63d2\u4ef6\u5b9e\u73b0\u7b2c\u4e00\u4e2a\u7248\u672c"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"\u76f8\u5173 PR"),"\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/4813"},"https://github.com/apache/apisix/pull/4813"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8d21\u732e\u8005"),"\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spacewander"},"spacewander"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"consumer-restriction \u652f\u6301\u6839\u636e Route \u5bf9\u8c61\u505a\u9650\u5236"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"\u76f8\u5173 PR"),"\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/4759"},"https://github.com/apache/apisix/pull/4759"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8d21\u732e\u8005"),"\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jagerzhang"},"jagerzhang")))),(0,r.kt)("p",null,"Apache APISIX \u7684",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/"},"\u9879\u76ee\u5b98\u7f51"),"\u548c Github \u4e0a\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc"},"issue")," \u4e0a\u5df2\u7ecf\u79ef\u7d2f\u4e86\u6bd4\u8f83\u4e30\u5bcc\u7684\u6587\u6863\u6559\u7a0b\u548c\u4f7f\u7528\u7ecf\u9a8c\uff0c\u5982\u679c\u60a8\u9047\u5230\u95ee\u9898\u53ef\u4ee5\u7ffb\u9605\u6587\u6863\uff0c\u7528\u5173\u952e\u8bcd\u5728 issue \u4e2d\u641c\u7d22\uff0c\u4e5f\u53ef\u4ee5\u53c2\u4e0e issue \u4e0a\u7684\u8ba8\u8bba\uff0c\u63d0\u51fa\u81ea\u5df1\u7684\u60f3\u6cd5\u548c\u5b9e\u8df5\u7ecf\u9a8c\u3002"),(0,r.kt)("h2",{id:"\u672c\u5468\u535a\u6587\u63a8\u8350"},"\u672c\u5468\u535a\u6587\u63a8\u8350"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/YIoc7XlgZIq0V-CyTDD2VA"},"8 \u6708 21 \u65e5 Apache APISIX Meetup \u4e0a\u6d77\u7ad9\uff0c\u6b22\u8fce\u62a5\u540d\u53c2\u52a0\uff01"),(0,r.kt)("br",{parentName:"p"}),"\n","\u672c\u6b21 Meetup \u7531 API7.AI \u53d1\u8d77\uff0c\u5e76\u9080\u8bf7\u7231\u5947\u827a\u3001\u7a7a\u4e2d\u4e91\u6c47\u7b49\u5408\u4f5c\u4f19\u4f34\u5171\u540c\u4e3a\u5927\u5bb6\u5448\u73b0\u3002Apache APISIX PMC \u6210\u5458\u3001\u8d21\u732e\u8005\u3001\u793e\u533a\u6280\u672f\u4e13\u5bb6\u6c47\u805a\u4e00\u5802\uff0c\u5171\u540c\u63a2\u8ba8 Apache APISIX \u793e\u533a\u53d1\u5c55\u3001\u884c\u4e1a\u5b9e\u8df5\u7b49\u8bdd\u9898\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/pyfBAHONGjkKJhwsjyhdUA"},"\u4ece\u65b0\u624b\u6751\u51fa\u6765\uff0c\u6211\u5728 Apache APISIX \u793e\u533a\u53d1\u51fa\u4e86\u7b2c\u4e00\u4e2a PR"),(0,r.kt)("br",{parentName:"p"}),"\n","\u5c60\u6b63\u677e\u540c\u5b66\u7684\u91c7\u8bbf\u6587\u7ae0\uff0c\u4e0b\u56de\u6211\u4eec\u4f1a\u91c7\u8bbf\u54ea\u4f4d\u793e\u533a\u7684\u5c0f\u4f19\u4f34\u5462\uff1f\u5feb\u6765 Apache APISIX \u793e\u533a\u77a7\u4e00\u77a7\u5427\uff01\u6ca1\u51c6\uff0c\u4e0b\u4e00\u4f4d committer \u5c31\u662f\u4f60\uff01")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/oARDFf_48X99MXBwoXcSHw"},"\u820d\u5f03 Kong \u548c Nginx\uff0cApache APISIX \u5728\u8da3\u94fe\u79d1\u6280 BaaS \u5e73\u53f0\u7684\u843d\u5730\u5b9e\u8df5"),(0,r.kt)("br",{parentName:"p"}),"\n","\u4ecb\u7ecd\u4e86 Apache APISIX \u5728\u8da3\u94fe\u79d1\u6280 BaaS \u5e73\u53f0\u4e2d\u7684\u843d\u5730\u5b9e\u8df5\u60c5\u51b5\uff0c\u4ee5\u53ca\u8da3\u94fe\u79d1\u6280\u5728\u4f17\u591a\u7f51\u5173\u5e94\u7528\u4e2d\u9009\u62e9 Apache APISIX \u7684\u539f\u56e0\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/G1lQUdZ05_HlZLNcY9tflw"},"\u8d21\u732e\u8005\uff0c\u662f\u8861\u91cf\u5f00\u6e90\u9879\u76ee\u7684\u91d1\u6307\u6807"),(0,r.kt)("br",{parentName:"p"}),"\n","\u79c9\u627f The Apache Way\uff0c\u6211\u4eec\u76f8\u4fe1\uff0c\u53ea\u6709\u6d3b\u8dc3\u7684\u793e\u533a\u624d\u80fd\u4fdd\u8bc1\u5f00\u6e90\u9879\u76ee\u7684\u672a\u6765\u3002\u540c\u65f6\uff0c\u6211\u4eec\u4e5f\u5e0c\u671b\u53ef\u4ee5\u901a\u8fc7\u66f4\u52a0\u76f4\u89c2\u7684\u56fe\u8868\u6765\u5c55\u793a\u793e\u533a\u6d3b\u8dc3\u5ea6\u3002"))))}h.isMDXComponent=!0},90261:function(e,t,a){t.Z=a.p+"assets/images/issue_photo-09addbbcbea6116f36fdad097e6c6265.png"}}]);