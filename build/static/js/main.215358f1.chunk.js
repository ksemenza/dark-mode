(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{188:function(e,a,t){e.exports=t(388)},387:function(e,a,t){},388:function(e,a,t){"use strict";t.r(a);var n=t(10),c=t(1),l=t.n(c),r=t(57),o=t.n(r),s=t(20),m=t(42),i=t(40),d=t.n(i),u=t(85),p=t.n(u),E=t(25);var g=({sparklineData:e})=>{const a=e.map((a,t)=>{if(t%6===0){const e=168-t;return{value:a,date:p()().subtract(e,"hours").format("ddd h:mma")}}return t===e.length-1?{value:a,date:p()().format("ddd h:mma")}:null}).filter(e=>e);return l.a.createElement(E.c,{width:1100,height:300,data:a},l.a.createElement(E.b,{type:"monotone",dataKey:"value",stroke:"#8884d8"}),l.a.createElement(E.a,{stroke:"#ccc",strokeDasharray:"5 5"}),l.a.createElement(E.e,{dataKey:"date",interval:3}),l.a.createElement(E.f,null),l.a.createElement(E.d,null))};var h=({coinData:e})=>l.a.createElement("div",{className:"charts"},e.map(e=>l.a.createElement("div",{className:"chart__container",key:e.name},l.a.createElement("h2",{className:"coin__title"},e.name),l.a.createElement("h4",{className:"coin__symbol"},e.symbol),l.a.createElement("div",{className:"coin__logo"},l.a.createElement("img",{src:e.image,height:"40",alt:e.name})),l.a.createElement(g,{sparklineData:e.sparkline_in_7d.price}))));var k=(e,a)=>{const t=Object(c.useState)(()=>{const t=window.localStorage.getItem(e);return t?JSON.parse(t):a}),l=Object(n.a)(t,2),r=l[0],o=l[1];return[r,a=>{o(a),window.localStorage.setItem(e,JSON.stringify(a))}]};var b=()=>{const e=k("darkSetting",!1),a=Object(n.a)(e,2),t=a[0],l=a[1];return Object(c.useEffect)(()=>{const e=document.querySelector("body");!0===t?e.classList.add("dark-mode"):e.classList.remove("dark-mode")},[t]),[t,l]};var v=e=>{const a=b(!1),t=Object(n.a)(a,2),c=t[0],r=t[1];return l.a.createElement("nav",{className:"navbar"},l.a.createElement("h1",null,"Crypto Tracker"),l.a.createElement(m.b,{exact:!0,to:"/"},"All Coins"),l.a.createElement(m.b,{to:"/coins"},"More Coin Info"),l.a.createElement("div",{className:"toggle-cta"},l.a.createElement("div",{className:"toggle-label"}," change color theme"),l.a.createElement("div",{className:"dark-mode__toggle"},l.a.createElement("div",{onClick:a=>{a.preventDefault(),r(!c),c?e.setStrokeColor("#8884d8"):e.setStrokeColor("#F7931A")},className:c?"toggle toggled":"toggle"}))))};var _=({strokeColor:e})=>{const a=k("coinList",[]),t=Object(n.a)(a,2),r=t[0],o=t[1],s=k("coinChoice","bitcoin"),m=Object(n.a)(s,2),i=m[0],u=m[1],p=k("coinInfo",{}),E=Object(n.a)(p,2),h=E[0],b=E[1];Object(c.useEffect)(()=>{d.a.get("https://api.coingecko.com/api/v3/coins/list").then(e=>{o(e.data)}).catch(e=>console.log(e))},[r,o]),Object(c.useEffect)(()=>{d.a.get("https://api.coingecko.com/api/v3/coins/".concat(i,"?localization=false&tickers=false&market_data=true&sparkline=true")).then(e=>{console.log(e.data),b(e.data)}).catch(e=>console.log(e))},[i]);const v=(e,a=2,t=".",n=",")=>{try{a=Math.abs(a),a=isNaN(a)?2:a;const l=e<0?"-":"";let r=parseInt(e=Math.abs(Number(e)||0).toFixed(a)).toString(),o=r.length>3?r.length%3:0;return l+(o?r.substr(0,o)+n:"")+r.substr(o).replace(/(\d{3})(?=\d)/g,"$1"+n)+(a?t+Math.abs(e-r).toFixed(a).slice(2):"")}catch(c){console.log(c)}};return l.a.createElement("div",null,l.a.createElement("div",{className:"coin-wrap"},l.a.createElement("form",{onSubmit:e=>{e.preventDefault(),u(e.target.coinType.value)}},l.a.createElement("label",{htmlFor:"coinType"},"Choose a Coin:"),l.a.createElement("select",{id:"coinType",name:"coinType"},l.a.createElement("option",{value:"",disabled:!0},"Cyptocurrency Choice:"),r.map(e=>l.a.createElement("option",{key:e.id,value:e.id},e.name))),l.a.createElement("button",{type:"submit"},"Submit")),l.a.createElement("div",null,l.a.createElement("h2",null,"About ",h.name),h.image?l.a.createElement("div",{className:"imgContainer"},l.a.createElement("img",{className:"coin__logo",src:h.image.large,alt:"coin type"})):null,h.market_data?l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("span",{className:"bold"},"Today's Price:")," $",h.market_data.current_price.usd," usd"),l.a.createElement("p",null,l.a.createElement("span",{className:"bold"},"Price Change in Last 24 Hours:")," $",v(h.market_data.price_change_24h_in_currency.usd)," usd"),l.a.createElement("p",null,l.a.createElement("span",{className:"bold"},"24h Low / 24h High:")," $",v(h.market_data.high_24h.usd)," / $",v(h.market_data.low_24h.usd)," usd"),l.a.createElement("p",null,l.a.createElement("span",{className:"bold"},"All Time High (ATH):")," $",v(h.market_data.ath.usd)," usd"),l.a.createElement("h3",null,l.a.createElement("span",{className:"bold"},"Market Cap:")," $",v(h.market_data.market_cap.usd)," usd")):null,l.a.createElement("div",{className:"desc-wrap"},h.links?l.a.createElement("a",{href:h.links.homepage[0]},h.links.homepage[0]):null,h.description?l.a.createElement("div",{className:"coin-a"},l.a.createElement("p",null,h.description.en)):null))),l.a.createElement("div",{className:"chart-wrap"}," ",h.market_data?l.a.createElement(g,{sparklineData:h.market_data.sparkline_7d.price,strokeColor:e}):null))};t(387);const N=()=>{const e=Object(c.useState)([]),a=Object(n.a)(e,2),t=a[0],r=a[1],o=k("strokeColor","#8884d8"),m=Object(n.a)(o,2),i=m[0],u=m[1];return Object(c.useEffect)(()=>{d.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true").then(e=>r(e.data)).catch(e=>console.log(e))},[]),l.a.createElement("div",{className:"App"},l.a.createElement(v,{strokeColor:i,setStrokeColor:u}),l.a.createElement(s.a,{exact:!0,path:"/",render:e=>l.a.createElement(h,Object.assign({},e,{coinData:t,strokeColor:i}))}),l.a.createElement(s.a,{path:"/coins",render:e=>l.a.createElement(_,Object.assign({},e,{strokeColor:i}))}))},f=document.getElementById("root");o.a.render(l.a.createElement(m.a,null,l.a.createElement(N,null)),f)}},[[188,1,2]]]);
//# sourceMappingURL=main.215358f1.chunk.js.map