"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[129],{2312:function(n,e,r){r.r(e),r.d(e,{default:function(){return $}});var t=r(885),i=r(2791),a=r(3044),o=r(6151),c=r(4708),s=r(6214),u=r(2982),p=r(4942),l=r(3366),m=r(7462),d=r(8182),f=r(1184),v=r(8519),g=r(4419),x=r(6934),h=r(1402),w=r(3967);var b=i.createContext(),Z=r(1217);function k(n){return(0,Z.Z)("MuiGrid",n)}var S=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],j=(0,r(5878).Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,u.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(n){return"spacing-xs-".concat(n)}))),(0,u.Z)(["column-reverse","column","row-reverse","row"].map((function(n){return"direction-xs-".concat(n)}))),(0,u.Z)(["nowrap","wrap-reverse","wrap"].map((function(n){return"wrap-xs-".concat(n)}))),(0,u.Z)(S.map((function(n){return"grid-xs-".concat(n)}))),(0,u.Z)(S.map((function(n){return"grid-sm-".concat(n)}))),(0,u.Z)(S.map((function(n){return"grid-md-".concat(n)}))),(0,u.Z)(S.map((function(n){return"grid-lg-".concat(n)}))),(0,u.Z)(S.map((function(n){return"grid-xl-".concat(n)}))))),W=r(184),y=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function M(n){var e=parseFloat(n);return"".concat(e).concat(String(n).replace(String(e),"")||"px")}function N(n){var e=n.breakpoints,r=n.values,t="";Object.keys(r).forEach((function(n){""===t&&0!==r[n]&&(t=n)}));var i=Object.keys(e).sort((function(n,r){return e[n]-e[r]}));return i.slice(0,i.indexOf(t))}var z=(0,x.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(n,e){var r=n.ownerState,t=r.container,i=r.direction,a=r.item,o=r.spacing,c=r.wrap,s=r.zeroMinWidth,p=r.breakpoints,l=[];t&&(l=function(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return[r["spacing-xs-".concat(String(n))]];var t=[];return e.forEach((function(e){var i=n[e];Number(i)>0&&t.push(r["spacing-".concat(e,"-").concat(String(i))])})),t}(o,p,e));var m=[];return p.forEach((function(n){var t=r[n];t&&m.push(e["grid-".concat(n,"-").concat(String(t))])})),[e.root,t&&e.container,a&&e.item,s&&e.zeroMinWidth].concat((0,u.Z)(l),["row"!==i&&e["direction-xs-".concat(String(i))],"wrap"!==c&&e["wrap-xs-".concat(String(c))]],m)}})((function(n){var e=n.ownerState;return(0,m.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})}),(function(n){var e=n.theme,r=n.ownerState,t=(0,f.P$)({values:r.direction,breakpoints:e.breakpoints.values});return(0,f.k9)({theme:e},t,(function(n){var e={flexDirection:n};return 0===n.indexOf("column")&&(e["& > .".concat(j.item)]={maxWidth:"none"}),e}))}),(function(n){var e=n.theme,r=n.ownerState,t=r.container,i=r.rowSpacing,a={};if(t&&0!==i){var o,c=(0,f.P$)({values:i,breakpoints:e.breakpoints.values});"object"===typeof c&&(o=N({breakpoints:e.breakpoints.values,values:c})),a=(0,f.k9)({theme:e},c,(function(n,r){var t,i=e.spacing(n);return"0px"!==i?(0,p.Z)({marginTop:"-".concat(M(i))},"& > .".concat(j.item),{paddingTop:M(i)}):null!=(t=o)&&t.includes(r)?{}:(0,p.Z)({marginTop:0},"& > .".concat(j.item),{paddingTop:0})}))}return a}),(function(n){var e=n.theme,r=n.ownerState,t=r.container,i=r.columnSpacing,a={};if(t&&0!==i){var o,c=(0,f.P$)({values:i,breakpoints:e.breakpoints.values});"object"===typeof c&&(o=N({breakpoints:e.breakpoints.values,values:c})),a=(0,f.k9)({theme:e},c,(function(n,r){var t,i=e.spacing(n);return"0px"!==i?(0,p.Z)({width:"calc(100% + ".concat(M(i),")"),marginLeft:"-".concat(M(i))},"& > .".concat(j.item),{paddingLeft:M(i)}):null!=(t=o)&&t.includes(r)?{}:(0,p.Z)({width:"100%",marginLeft:0},"& > .".concat(j.item),{paddingLeft:0})}))}return a}),(function(n){var e,r=n.theme,t=n.ownerState;return r.breakpoints.keys.reduce((function(n,i){var a={};if(t[i]&&(e=t[i]),!e)return n;if(!0===e)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===e)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var o=(0,f.P$)({values:t.columns,breakpoints:r.breakpoints.values}),c="object"===typeof o?o[i]:o;if(void 0===c||null===c)return n;var s="".concat(Math.round(e/c*1e8)/1e6,"%"),u={};if(t.container&&t.item&&0!==t.columnSpacing){var p=r.spacing(t.columnSpacing);if("0px"!==p){var l="calc(".concat(s," + ").concat(M(p),")");u={flexBasis:l,maxWidth:l}}}a=(0,m.Z)({flexBasis:s,flexGrow:0,maxWidth:s},u)}return 0===r.breakpoints.values[i]?Object.assign(n,a):n[r.breakpoints.up(i)]=a,n}),{})}));var P=function(n){var e=n.classes,r=n.container,t=n.direction,i=n.item,a=n.spacing,o=n.wrap,c=n.zeroMinWidth,s=n.breakpoints,p=[];r&&(p=function(n,e){if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return["spacing-xs-".concat(String(n))];var r=[];return e.forEach((function(e){var t=n[e];if(Number(t)>0){var i="spacing-".concat(e,"-").concat(String(t));r.push(i)}})),r}(a,s));var l=[];s.forEach((function(e){var r=n[e];r&&l.push("grid-".concat(e,"-").concat(String(r)))}));var m={root:["root",r&&"container",i&&"item",c&&"zeroMinWidth"].concat((0,u.Z)(p),["row"!==t&&"direction-xs-".concat(String(t)),"wrap"!==o&&"wrap-xs-".concat(String(o))],l)};return(0,g.Z)(m,k,e)},_=i.forwardRef((function(n,e){var r=(0,h.Z)({props:n,name:"MuiGrid"}),t=(0,w.Z)().breakpoints,a=(0,v.Z)(r),o=a.className,c=a.columns,s=a.columnSpacing,u=a.component,p=void 0===u?"div":u,f=a.container,g=void 0!==f&&f,x=a.direction,Z=void 0===x?"row":x,k=a.item,S=void 0!==k&&k,j=a.rowSpacing,M=a.spacing,N=void 0===M?0:M,_=a.wrap,C=void 0===_?"wrap":_,E=a.zeroMinWidth,G=void 0!==E&&E,T=(0,l.Z)(a,y),O=j||N,B=s||N,D=i.useContext(b),F=g?c||12:D,L={},$=(0,m.Z)({},T);t.keys.forEach((function(n){null!=T[n]&&(L[n]=T[n],delete $[n])}));var q=(0,m.Z)({},a,{columns:F,container:g,direction:Z,item:S,rowSpacing:O,columnSpacing:B,wrap:C,zeroMinWidth:G,spacing:N},L,{breakpoints:t.keys}),R=P(q);return(0,W.jsx)(b.Provider,{value:F,children:(0,W.jsx)(z,(0,m.Z)({ownerState:q,className:(0,d.Z)(R.root,o),as:p,ref:e},$))})})),C=_,E=r(4554),G=r(403),T=r(890),O=r(1614),B=r(7107),D=r(7012),F=r(2628),L=(0,B.Z)();function $(){var n=(0,F.eF)(),e=(0,t.Z)(n,1)[0];return(0,W.jsx)(D.Z,{theme:L,children:(0,W.jsxs)(O.Z,{component:"main",maxWidth:"xs",children:[(0,W.jsx)(c.ZP,{}),(0,W.jsxs)(E.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,W.jsx)(a.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,W.jsx)(G.Z,{})}),(0,W.jsx)(T.Z,{component:"h1",variant:"h5",children:"Sign up"}),(0,W.jsxs)(E.Z,{component:"form",noValidate:!0,onSubmit:function(n){n.preventDefault();var r=new FormData(n.currentTarget),t=r.get("email"),i=r.get("password"),a=r.get("name");e({name:a,email:t,password:i})},sx:{mt:3},children:[(0,W.jsxs)(C,{container:!0,spacing:2,children:[(0,W.jsx)(C,{item:!0,xs:12,children:(0,W.jsx)(s.Z,{autoComplete:"given-name",name:"name",required:!0,fullWidth:!0,id:"name",label:"Name",autoFocus:!0})}),(0,W.jsx)(C,{item:!0,xs:12,children:(0,W.jsx)(s.Z,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),(0,W.jsx)(C,{item:!0,xs:12,children:(0,W.jsx)(s.Z,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"})})]}),(0,W.jsx)(o.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"})]})]})]})})}}}]);
//# sourceMappingURL=registration.0d9a083d.chunk.js.map