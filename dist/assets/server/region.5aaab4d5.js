import{j as i}from"../static/sites-components-8fd6f800.js";import{g as n}from"../static/main-b0e00625.js";import{d as s}from"../static/head-02d7e8a1.js";import{R as m}from"../static/template-c17d7de5.js";import"../static/index-0cb05a32.js";import"../static/commonjsHelpers-88401c09.js";import"../static/index-0073c4d1.js";import"../static/index-7ed968af.js";import"../static/_arrayLikeKeys-4450ed75.js";import"../static/directory-c41987d1.js";import"../static/GeolocateButton-a88b90ab.js";const P=t=>t.document.slug,x=async t=>{const{dm_directoryParents:r,name:o}=t.document;(r||[]).push({name:o,slug:""});const e=await n(t.document.locale);return{...t,document:{...t.document,dm_directoryParents:r},translations:e}},R=t=>s(t),d=(t,r)=>({stream:{$id:t||"directory-region",fields:["id","uid","meta","name","slug","c_meta","dm_directoryParents.slug","dm_directoryParents.name","dm_directoryChildren.slug","dm_directoryChildren.name","dm_directoryChildren.dm_baseEntityCount"],filter:r||{savedFilterIds:["dm_defaultDirectory_address_region"]},localization:{locales:["en"]}}}),b=d(),j=t=>i.jsx(m,{...t});export{b as config,j as default,R as getHeadConfig,P as getPath,x as transformProps};