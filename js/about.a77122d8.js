"use strict";(self["webpackChunkstake"]=self["webpackChunkstake"]||[]).push([[443],{552:function(e,t,s){s.r(t),s.d(t,{default:function(){return P}});var a=s(252);const n={class:"main-container"},i=(0,a._)("h1",null,"Gerenciar pedidos:",-1);function l(e,t,s,l,o,r){const d=(0,a.up)("Dashboard");return(0,a.wg)(),(0,a.iD)("div",n,[i,(0,a.Wm)(d)])}var o=s(577);const r=e=>((0,a.dD)("data-v-9f06c28e"),e=e(),(0,a.Cn)(),e),d={key:0,id:"burger-table"},u=r((()=>(0,a._)("div",null,[(0,a._)("div",{id:"burger-table-heading"},[(0,a._)("div",{class:"order-id"},"#:"),(0,a._)("div",null,"Cliente:"),(0,a._)("div",null,"Pão:"),(0,a._)("div",null,"Carne:"),(0,a._)("div",null,"Opcionais:"),(0,a._)("div",null,"Ações:")])],-1))),c={id:"burger-table-rows"},g={class:"order-number"},h=["onChange"],v=["value","selected"],w=["onClick"],b={key:1},p=r((()=>(0,a._)("h2",null,"Não há pedidos no momento!",-1))),_=[p];function f(e,t,s,n,i,l){return i.burgers?((0,a.wg)(),(0,a.iD)("div",d,[u,(0,a._)("div",c,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.burgers,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"burger-table-row",key:e.id},[(0,a._)("div",g,(0,o.zw)(e.id),1),(0,a._)("div",null,(0,o.zw)(e.nome),1),(0,a._)("div",null,(0,o.zw)(e.pao),1),(0,a._)("div",null,(0,o.zw)(e.carne),1),(0,a._)("div",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.opcionais,((e,t)=>((0,a.wg)(),(0,a.iD)("ul",{key:t},[(0,a._)("li",null,(0,o.zw)(e),1)])))),128))]),(0,a._)("div",null,[(0,a._)("select",{name:"status",class:"status",onChange:t=>l.updateBurger(t,e.id)},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.status,(t=>((0,a.wg)(),(0,a.iD)("option",{value:t.tipo,key:t.id,selected:e.status==t.tipo},(0,o.zw)(t.tipo),9,v)))),128))],40,h),(0,a._)("button",{class:"delete-btn",onClick:t=>l.deleteBurger(e.id)},"Cancelar",8,w)])])))),128))])])):((0,a.wg)(),(0,a.iD)("div",b,_))}var m={name:"Dashboard",data(){return{burgers:null,burger_id:null,status:[]}},methods:{async getPedidos(){const e=await fetch("http://localhost:3000/burgers"),t=await e.json();this.burgers=t,this.getStatus()},async getStatus(){const e=await fetch("http://localhost:3000/status"),t=await e.json();this.status=t},async deleteBurger(e){const t=await fetch(`http://localhost:3000/burgers/${e}`,{method:"DELETE"});await t.json();this.getPedidos()},async updateBurger(e,t){const s=e.target.value,a=JSON.stringify({status:s}),n=await fetch(`http://localhost:3000/burgers/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:a}),i=await n.json();console.log(i)}},mounted(){this.getPedidos()}},D=s(744);const k=(0,D.Z)(m,[["render",f],["__scopeId","data-v-9f06c28e"]]);var y=k,C={name:"Pedidos",components:{Dashboard:y}};const z=(0,D.Z)(C,[["render",l]]);var P=z}}]);
//# sourceMappingURL=about.a77122d8.js.map