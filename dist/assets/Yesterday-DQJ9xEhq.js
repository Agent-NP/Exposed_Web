import{r as s,C as o,j as t}from"./index-BuEBJVTA.js";import{L as d,D as i,g as f}from"./Loader-D4l521FJ.js";function j(){const[e,n]=s.useState([]),{currentPage:x,updateCurrentPage:c}=s.useContext(o),[r,l]=s.useState(!0);return s.useEffect(()=>{(async()=>{try{c("/yesterday");const a=await f();n(a),setTimeout(()=>{l(!1)},1e4)}catch(a){console.error("Error fetching data:",a)}})()},[]),s.useEffect(()=>{},[e]),t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"pt-2 pb-1 text-center",children:t.jsx("span",{className:"fs-4 fw-bold",children:"Yesterday Matches"})}),t.jsxs("div",{className:"d-flex flex-fill justify-content-center py-2",style:{alignItems:(e==null?void 0:e.length)>0?"start":"center"},children:[(e==null?void 0:e.length)<=0&&r&&t.jsx(d,{}),(e==null?void 0:e.length)<=0&&!r&&t.jsx("div",{className:"d-flex justify-content-center align-items-center",children:t.jsx("span",{className:"fs-6",children:"No Match Found"})}),(e==null?void 0:e.length)>0&&t.jsx(i,{data:e})]})]})}export{j as default};
