(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(e,t,n){e.exports={list:"statistics_list__W9a-h",item:"statistics_item__13Zam"}},,function(e,t,n){e.exports={good:"options_good__3HS3L",bad:"options_bad__7n9-k",neutral:"options_neutral__25EI5"}},,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(6),o=n.n(s),i=(n(11),n(3)),r=(n(12),n(4)),j=n.n(r),l=n(0);function u(e){var t=e.onLeaveGoodFB,n=e.onLeaveNeutralFB,c=e.onLeaveBadFB;return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:t,className:j.a.good,children:"Good"}),Object(l.jsx)("button",{onClick:n,className:j.a.neutral,children:"Neutral"}),Object(l.jsx)("button",{onClick:c,className:j.a.bad,children:"Bad"})]})}function b(e){var t=e.message;return Object(l.jsx)("p",{children:t})}var d=n(2),O=n.n(d);function f(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,s=e.percentage;return Object(l.jsxs)("ul",{className:O.a.list,children:[Object(l.jsxs)("li",{className:O.a.item,children:["Good ",Object(l.jsx)("span",{children:t})]}),Object(l.jsxs)("li",{className:O.a.item,children:["Neutral ",Object(l.jsx)("span",{children:n})]}),Object(l.jsxs)("li",{className:O.a.item,children:["Bad ",Object(l.jsx)("span",{children:c})]}),Object(l.jsxs)("li",{className:O.a.item,children:["Total",Object(l.jsx)("span",{children:a})]}),Object(l.jsxs)("li",{className:O.a.item,children:["Positive feedback ",Object(l.jsxs)("span",{children:[s,"%"]})]})]})}var h=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(0),o=Object(i.a)(s,2),r=o[0],j=o[1],d=Object(c.useState)(0),O=Object(i.a)(d,2),h=O[0],x=O[1],m=Object(c.useState)(0),g=Object(i.a)(m,2),p=g[0],v=g[1],N=Object(c.useState)(0),_=Object(i.a)(N,2),k=_[0],B=_[1];return Object(c.useEffect)((function(){v((function(e){return n+r+h}))}),[n,r,h]),Object(c.useEffect)((function(){B((function(e){return Math.round(n/p*100)}))}),[n,r,h,p]),Object(l.jsxs)("section",{className:"section",children:[Object(l.jsx)("h2",{children:"Leave feedback"}),Object(l.jsx)(u,{onLeaveGoodFB:function(){a((function(e){return e+1}))},onLeaveNeutralFB:function(){x((function(e){return e+1}))},onLeaveBadFB:function(){j((function(e){return e+1}))}}),0===p?Object(l.jsx)(b,{message:"No feedback given"}):Object(l.jsx)(f,{good:n,neutral:h,bad:r,total:p,percentage:k})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),s(e),o(e)}))};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),x()}],[[14,1,2]]]);
//# sourceMappingURL=main.286b314b.chunk.js.map