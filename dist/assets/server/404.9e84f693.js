import{g as i,i as s,j as o,D as a}from"../static/sites-components-8fd6f800.js";import{L as m}from"../static/LostAndFound-5ef7c6cb.js";import"../static/index-0cb05a32.js";import"../static/commonjsHelpers-88401c09.js";import"../static/index-0073c4d1.js";import"../static/index-7ed968af.js";const g={name:"404"},w=()=>"404.html",x=t=>{if(i().name==="browser"){const n=`https://${window.location.hostname}/`,r=s(t.document.siteDomain),e=new m(window.location.href,document.referrer,{destinationUrl:n,isStaging:!r,siteDomain:t.document.siteDomain});e.installBasicHooks(),e.run()}return o.jsxs("div",{children:[o.jsx("p",{children:"Sorry, we could not find the URL you were looking for."}),o.jsxs("p",{children:["If you are not automatically redirected to our homepage,"," ",o.jsx(a,{href:"/index.html",children:"please click here."})]})]})};export{g as config,x as default,w as getPath};