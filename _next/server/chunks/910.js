exports.id=910,exports.ids=[910],exports.modules={5396:(e,t,r)=>{"use strict";r.d(t,{default:()=>u});var a=r(326),n=r(7577),s=r.n(n);r(8465);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,r(2881).Z)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),u=function({steps:e}){let[t,r]=s().useState(3);return e.length,a.jsx(s().Fragment,{children:a.jsx("div",{className:"flex justify-between",children:e.map((e,r)=>(0,a.jsxs)("div",{className:`step-item ${t===r+1?"active":""}
              ${t>r+1?"complete":""}`,children:[a.jsx("div",{className:"step-index",children:t>r+1?a.jsx(l,{color:"white"}):r+1}),a.jsx("p",{className:"capitalize text-sm text-[#D4DEFF] mt-1",children:e})]},r))})})}},3993:(e,t,r)=>{"use strict";r.d(t,{Progress:()=>b});var a=r(326),n=r(7577),s=r(5353),l=r(3095),u=r(5226);let o="Progress",[i,d]=(0,l.b)(o),[c,m]=i(o),p=(0,n.forwardRef)((e,t)=>{let{__scopeProgress:r,value:a,max:l,getValueLabel:o=v,...i}=e,d=g(l)?l:100,m=N(a,d)?a:null,p=h(m)?o(m,d):void 0;return(0,n.createElement)(c,{scope:r,value:m,max:d},(0,n.createElement)(u.WV.div,(0,s.Z)({"aria-valuemax":d,"aria-valuemin":0,"aria-valuenow":h(m)?m:void 0,"aria-valuetext":p,role:"progressbar","data-state":x(m,d),"data-value":null!=m?m:void 0,"data-max":d},i,{ref:t})))});p.propTypes={max(e,t,r){let a=e[t],n=String(a);return a&&!g(a)?Error(`Invalid prop \`max\` of value \`${n}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`):null},value(e,t,r){let a=e[t],n=String(a),s=g(e.max)?e.max:100;return null==a||N(a,s)?null:Error(`Invalid prop \`value\` of value \`${n}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`)}};let f=(0,n.forwardRef)((e,t)=>{var r;let{__scopeProgress:a,...l}=e,o=m("ProgressIndicator",a);return(0,n.createElement)(u.WV.div,(0,s.Z)({"data-state":x(o.value,o.max),"data-value":null!==(r=o.value)&&void 0!==r?r:void 0,"data-max":o.max},l,{ref:t}))});function v(e,t){return`${Math.round(e/t*100)}%`}function x(e,t){return null==e?"indeterminate":e===t?"complete":"loading"}function h(e){return"number"==typeof e}function g(e){return h(e)&&!isNaN(e)&&e>0}function N(e,t){return h(e)&&!isNaN(e)&&e<=t&&e>=0}var w=r(7863);let b=n.forwardRef(({className:e,value:t,type:r,...n},s)=>a.jsx(p,{ref:s,className:(0,w.cn)("relative h-4 w-full overflow-hidden rounded-full bg-slate-300",e),...n,children:a.jsx(f,{className:(0,w.cn)("h-full w-full flex-1 transition-all","0"===r||"1"===r?"bg-emerald-light":"bg-sky"),style:{transform:`translateX(-${100-(t||0)}%)`}})}));b.displayName=p.displayName},7863:(e,t,r)=>{"use strict";r.d(t,{cn:()=>s});var a=r(1135),n=r(1009);function s(...e){return(0,n.m6)((0,a.W)(e))}},5047:(e,t,r)=>{"use strict";var a=r(7389);r.o(a,"usePathname")&&r.d(t,{usePathname:function(){return a.usePathname}}),r.o(a,"useRouter")&&r.d(t,{useRouter:function(){return a.useRouter}})},7980:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>u});var a=r(8570);let n=(0,a.createProxy)(String.raw`/home/farendivaz/dev/nextjs/fulusme-test/app/components/Stepper.tsx`),{__esModule:s,$$typeof:l}=n;n.default;let u=(0,a.createProxy)(String.raw`/home/farendivaz/dev/nextjs/fulusme-test/app/components/Stepper.tsx#default`)},7439:(e,t,r)=>{"use strict";r.d(t,{E:()=>u});var a=r(8570);let n=(0,a.createProxy)(String.raw`/home/farendivaz/dev/nextjs/fulusme-test/components/ui/progress.tsx`),{__esModule:s,$$typeof:l}=n;n.default;let u=(0,a.createProxy)(String.raw`/home/farendivaz/dev/nextjs/fulusme-test/components/ui/progress.tsx#Progress`)},7371:(e,t,r)=>{"use strict";r.d(t,{default:()=>n.a});var a=r(1812),n=r.n(a)},1812:(e,t,r)=>{"use strict";let{createProxy:a}=r(8570);e.exports=a("/home/farendivaz/dev/nextjs/fulusme-test/node_modules/next/dist/client/link.js")},8465:()=>{},3095:(e,t,r)=>{"use strict";r.d(t,{b:()=>n});var a=r(7577);function n(e,t=[]){let r=[],n=()=>{let t=r.map(e=>(0,a.createContext)(e));return function(r){let n=(null==r?void 0:r[e])||t;return(0,a.useMemo)(()=>({[`__scope${e}`]:{...r,[e]:n}}),[r,n])}};return n.scopeName=e,[function(t,n){let s=(0,a.createContext)(n),l=r.length;function u(t){let{scope:r,children:n,...u}=t,o=(null==r?void 0:r[e][l])||s,i=(0,a.useMemo)(()=>u,Object.values(u));return(0,a.createElement)(o.Provider,{value:i},n)}return r=[...r,n],u.displayName=t+"Provider",[u,function(r,u){let o=(null==u?void 0:u[e][l])||s,i=(0,a.useContext)(o);if(i)return i;if(void 0!==n)return n;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=r.reduce((t,{useScope:r,scopeName:a})=>{let n=r(e)[`__scope${a}`];return{...t,...n}},{});return(0,a.useMemo)(()=>({[`__scope${t.scopeName}`]:n}),[n])}};return r.scopeName=t.scopeName,r}(n,...t)]}},5226:(e,t,r)=>{"use strict";r.d(t,{WV:()=>u,jH:()=>o});var a=r(5353),n=r(7577),s=r(962),l=r(4214);let u=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=(0,n.forwardRef)((e,r)=>{let{asChild:s,...u}=e,o=s?l.g7:t;return(0,n.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,n.createElement)(o,(0,a.Z)({},u,{ref:r}))});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function o(e,t){e&&(0,s.flushSync)(()=>e.dispatchEvent(t))}}};