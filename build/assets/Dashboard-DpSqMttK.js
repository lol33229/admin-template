import{r as l,j as e}from"./index-CIPnb7uo.js";import{a as j}from"./axios-upsvKRUO.js";import{C as m,a as C}from"./CRow-Bj6YVasv.js";import{C as u,a as f}from"./CCardBody-DvvP1WT8.js";import{C as p}from"./CCardHeader-xCuztrud.js";import{C as b,a as g,b as i,c as s,d as D,e as r}from"./CTable-B6N2MehJ.js";const S=()=>{const[t,o]=l.useState([]),[c,h]=l.useState(!0),[d,x]=l.useState(null);return l.useEffect(()=>{(async()=>{try{const n=await j.get("http://localhost/api/contact-forms/");o(n.data)}catch(n){x(n)}finally{h(!1)}})()},[]),c?e.jsx("div",{children:"Loading..."}):d?e.jsxs("div",{children:["Error: ",d.message]}):e.jsx(e.Fragment,{children:e.jsx(m,{children:e.jsx(C,{xs:!0,children:e.jsxs(u,{className:"mb-4",children:[e.jsx(p,{children:"Messages"}),e.jsx(f,{children:e.jsxs(b,{align:"middle",className:"mb-0 border",hover:!0,responsive:!0,children:[e.jsx(g,{children:e.jsxs(i,{children:[e.jsx(s,{children:"ID"}),e.jsx(s,{children:"Full Name"}),e.jsx(s,{children:"Organization"}),e.jsx(s,{children:"Email"}),e.jsx(s,{children:"Phone Number"}),e.jsx(s,{children:"Message"}),e.jsx(s,{children:"Created At"})]})}),e.jsx(D,{children:t&&t.map(a=>e.jsxs(i,{children:[e.jsx(r,{children:a.id}),e.jsx(r,{children:a.full_name}),e.jsx(r,{children:a.organization}),e.jsx(r,{children:a.email}),e.jsx(r,{children:a.phone_number}),e.jsx(r,{children:a.message}),e.jsx(r,{children:new Date(a.created_at).toLocaleString()})]},a.id))})]})})]})})})})};export{S as default};
