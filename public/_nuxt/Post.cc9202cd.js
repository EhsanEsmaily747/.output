import d from"./Icon.deda8fe1.js";import{k as a,c as r,l as m,h as _,b as e,d as i,u as h,n as u}from"./entry.dac6c7c1.js";import{u as k}from"./navBar.css.33dbc752.js";/* empty css                 */const v={style:{position:"relative"}},D={class:"postbody"},g={class:"title"},y={class:"desc"},f=["src"],B={__name:"Post",props:{post:Object,showDelete:String},emits:["handle-Delete"],setup(t,{emit:c}){const s=t,l=async()=>{c("handle-Delete",s.post._id),await k(`http://api2.kdanish.com/api/posts/${s.post._id}`,{method:"DELETE"},"$BjiLPPTCDE")};return(o,n)=>{const p=d;return a(),r("div",v,[t.showDelete=="true"?(a(),m(p,{key:0,class:"delete",name:"material-symbols:delete-outline",onClick:l})):_("",!0),e("div",{class:"post",onClick:n[0]||(n[0]=E=>("navigateTo"in o?o.navigateTo:h(u))(`/PostPage-${t.post._id}`))},[e("div",D,[e("p",g,i(t.post.title),1),e("p",y,i(t.post.content),1)]),e("img",{class:"postpic",src:t.post.picture,alt:""},null,8,f)])])}}},$=B;export{$ as _};
