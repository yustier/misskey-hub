import{r as u,o as s,c as r,F as i,h as _,i as p,j as f,b as m,w as h,a as o,t as n}from"./app.a97285ae.js";import{_ as v}from"./plugin-vue_export-helper.21dcd24c.js";const g={props:{sort:{type:Function,required:!1,default:null}},setup(e){const a=p().value.childPages||[];return e.sort&&a.sort(e.sort),{childPages:a}}},x={class:"mk-index"};function k(e,l,a,d,y,P){const c=u("RouterLink");return s(),r("div",x,[(s(!0),r(i,null,_(d.childPages,t=>f(e.$slots,"default",{page:t},()=>[m(c,{class:"page",to:t.path},{default:h(()=>[o("header",null,n(t.title),1),o("div",null,n(t.summary),1)]),_:2},1032,["to"])],!0)),256))])}var B=v(g,[["render",k],["__scopeId","data-v-09987ede"]]);export{B as default};
