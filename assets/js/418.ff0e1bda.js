"use strict";(self.webpackChunkroblox_ts_com=self.webpackChunkroblox_ts_com||[]).push([[418],{7512:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var r=n(4165),s=n(7855),a=n(5861),o=n(4996),i=n(9604),u=n(2949),c=n(6470),l=n.n(c),p=n(3945),d=n.n(p),f=n(9070),m=n.n(f),h=n(7294),g="subNavBar_s2i2",v="playground_yo3h",y="editorWrapper_TO5z",x="pointer_U5I7",b=n(4877),w=function(){function e(e){this.getValue=e,this.isInitialized=!1}return e.prototype.get=function(){return this.isInitialized||(this.isInitialized=!0,this.value=this.getValue()),this.value},e}(),E=n(5108),k={minimap:{enabled:!1},scrollbar:{useShadows:!1},scrollBeyondLastLine:!1,insertSpaces:!1,tabSize:4},Z=Object.assign({},k),_=Object.assign({},k,{readOnly:!0}),S=["Lava","t","Roact"],M=["types","compiler-types"],C={parser:"typescript",plugins:[m()],semi:!0,trailingComma:"all",singleQuote:!1,printWidth:120,tabWidth:4,useTabs:!0,arrowParens:"avoid"};function N(e,t){return j.apply(this,arguments)}function j(){return(j=(0,a.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(t+"/"+n+".tsx").then((function(e){return e.text()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P=new w((function(){return new Worker("../rbxts-worker.js")})),O=new Set,R=/["']@rbxts\/([^"']+)["']/g,T=/\/\/\/\s*<reference path=["']([^"']+)["']\s*\/>/g,F=/\/\/\/\s*<reference types=["']@rbxts\/([^"']+)["']\s*\/>/g,I=/(?:import|export)\s+.+\s+from\s+['"]([^'"]+)['"]/g;function K(e,t){for(var n,r=new Array,a=(0,s.Z)(t.matchAll(e));!(n=a()).done;){var o=n.value;r.push(o[1])}return r}var W="https://cdn.jsdelivr.net/npm";function D(e){return L.apply(this,arguments)}function L(){return(L=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=t.split("/"))[1].includes("@")||(n[1]+="@latest"),t=n.join("/"),e.abrupt("return",fetch(W+"/"+t));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e,t){return U.apply(this,arguments)}function U(){return(U=(0,a.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P.get().postMessage({type:"writeFile",filePath:"/node_modules/"+t,content:n}),e.next=3,i._m.init();case 3:e.sent.languages.typescript.typescriptDefaults.addExtraLib(n,t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A=new Set;function z(e,t,n){return J.apply(this,arguments)}function J(){return(J=(0,a.Z)((0,r.Z)().mark((function e(t,n,a){var o,u,c,p,d,f,m,h,g,v,y,x,b;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===a&&(a=!1),!A.has(n)){e.next=3;break}return e.abrupt("return",Promise.resolve());case 3:return A.add(n),e.next=6,D(n).then((function(e){return 404===e.status?D(n=n.slice(0,-".d.ts".length)+"/index.d.ts"):e})).then((function(e){return e.text()}));case 6:for(o=e.sent,u=new Array,c=(0,s.Z)(K(T,o));!(p=c()).done;)d=p.value,f=l().resolve(l().dirname(n),d).substr(1),u.push(z(t,f));for(m=(0,s.Z)(K(I,o));!(h=m()).done;)((g=h.value).endsWith(".")||g.endsWith(".."))&&(g+="/index"),v=l().resolve(l().dirname(n),g).substr(1)+".d.ts",u.push(z(t,v));for(y=(0,s.Z)(K(F,o));!(x=y()).done;)b=x.value,u.push(B(b));return e.next=13,V(n,o);case 13:if(!a){e.next=17;break}return e.next=16,i._m.init();case 16:e.sent.languages.typescript.typescriptDefaults.addExtraLib(o,l().join(t,"index.d.ts"));case 17:return e.abrupt("return",Promise.allSettled(u));case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e){return Q.apply(this,arguments)}function Q(){return(Q=(0,a.Z)((0,r.Z)().mark((function e(t){var n,s,a,o,i,u,c,p,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O.has(t)){e.next=22;break}return O.add(t),s=(n="@rbxts/"+t)+"/package.json",e.next=6,D(s);case 6:if(200!==(a=e.sent).status){e.next=21;break}return e.next=10,a.json();case 10:return c=e.sent,e.next=13,V(s,JSON.stringify(c));case 13:return E.log(n+"@"+c.version),p=l().resolve("/"+n,null!=(o=c.main)?o:"").substr(1),d=l().resolve("/"+n,null!=(i=null!=(u=c.types)?u:c.typings)?i:"index.d.ts").substr(1),P.get().postMessage({type:"setMapping",typingsPath:"/node_modules/"+d,mainPath:"/node_modules/"+p}),e.next=19,z(n,d,!0);case 19:e.next=22;break;case 21:E.warn("failed to download "+n);case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var q=function(e){return h.createElement("li",null,h.createElement("a",{className:x+" dropdown__link",onClick:e.onClick},e.name))},G=function(){P.get();var e=h.useState(""),t=e[0],n=e[1],s=h.useState(""),c=s[0],l=s[1],p=h.useState(),f=p[0],m=p[1],w=h.useState(!1),k=w[0],j=w[1],O=h.useState(),T=O[0],F=O[1],I=(0,o.Z)("playground-examples/src");function W(e){null==T||T.setValue(e)}function D(e){return L.apply(this,arguments)}function L(){return(L=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N(I,t).then((function(e){W(e),n(e)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}h.useEffect((function(){T&&(""!==location.hash?(0,b.E)(location.hash).then((function(e){e&&(W(e),n(e))})):T&&""===T.getValue()&&D(S[0]))}),[T]);h.useEffect((function(){T&&(location.hash=(0,b.T)(t))}),[t,T]),h.useEffect((function(){k&&(void 0!==f&&window.clearTimeout(f),m(window.setTimeout((function(){Promise.allSettled(K(R,t).map(B)).then((function(){P.get().postMessage({type:"compile",source:t})}))}),300)))}),[t,k]),h.useEffect((function(){P.get().addEventListener("message",(function(e){var t=e.data.source;"string"==typeof t&&l(t)}))}),[]),h.useEffect((function(){Promise.allSettled(M.map((function(e){return B(e)}))).then((function(){return j(!0)}))}),[]),h.useEffect((function(){window.addEventListener("keydown",(function(e){(e.ctrlKey||e.metaKey)&&"KeyS"===e.code&&(e.preventDefault(),navigator.clipboard.writeText(location.href))}))}),[]);var V="dark"===(0,u.I)().colorMode?"vs-dark":"light";return h.createElement(h.Fragment,null,h.createElement("nav",{className:g+" navbar"},h.createElement("div",{className:"navbar__inner"},h.createElement("div",{className:"navbar__items"},h.createElement("div",{className:"navbar__item dropdown dropdown--hoverable "+x},h.createElement("a",{className:"navbar__link "+x},"Examples"),h.createElement("ul",{className:"dropdown__menu"},S.map((function(e,t){return h.createElement(q,{key:t,name:e,onClick:function(){return D(e)}})}))))))),h.createElement("div",{className:v},h.createElement("div",{className:y},h.createElement(i.ZP,{language:"typescript",options:Z,theme:V,onMount:function(e){i._m.init().then((function(r){E.log("typescript@"+r.languages.typescript.typescriptVersion),r.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,allowSyntheticDefaultImports:!0,downlevelIteration:!0,module:r.languages.typescript.ModuleKind.CommonJS,moduleResolution:r.languages.typescript.ModuleResolutionKind.NodeJs,noLib:!0,strict:!0,target:r.languages.typescript.ScriptTarget.ESNext,typeRoots:["node_modules/@rbxts"],noEmit:!0,resolveJsonModule:!0,experimentalDecorators:!0,baseUrl:".",rootDir:".",jsx:r.languages.typescript.JsxEmit.React,jsxFactory:"Roact.createElement",jsxFragmentFactory:"Roact.Fragment"});var s=r.Uri.file("input.tsx"),a=r.editor.getModel(s)||r.editor.createModel(t,"typescript",s);e.setModel(a);var o=e.onDidChangeModelContent((function(){return n(e.getValue())}));return e.addCommand(r.KeyMod.Alt|r.KeyMod.Shift|r.KeyCode.KeyF,(function(){var t=d().formatWithCursor(a.getValue(),Object.assign({},C,{cursorOffset:a.getOffsetAt(e.getPosition()||new r.Position(0,0)),rangeStart:void 0,rangeEnd:void 0}));e.pushUndoStop(),e.executeEdits("prettier",[{range:a.getFullModelRange(),text:t.formatted}],(function(){return[r.Selection.fromPositions(a.getPositionAt(t.cursorOffset))]})),e.pushUndoStop()})),F(a),n(a.getValue()),function(){return o.dispose()}}))}})),h.createElement("div",{className:y},h.createElement(i.ZP,{language:"lua",options:_,theme:V,value:c}))))}},4877:function(e,t,n){n.d(t,{E:function(){return c},T:function(){return p}});var r=n(4165),s=n(5861),a=n(6961),o=n.n(a),i="#code/",u="#gist/";function c(e){return l.apply(this,arguments)}function l(){return(l=(0,s.Z)((0,r.Z)().mark((function e(t){var n,s,a,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.startsWith(i)){e.next=6;break}if(null===(n=o().decompressFromEncodedURIComponent(t.substr(i.length)))){e.next=4;break}return e.abrupt("return",n);case 4:e.next=16;break;case 6:if(!t.startsWith(u)){e.next=16;break}return s=t.substr(u.length),e.next=10,fetch("https://api.github.com/gists/"+s);case 10:if(200!==(a=e.sent).status){e.next=16;break}return e.next=14,a.json();case 14:return c=e.sent,e.abrupt("return",Object.values(c.files)[0].content);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return i+o().compressToEncodedURIComponent(e)}}}]);