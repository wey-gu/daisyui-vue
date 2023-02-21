import{u as i,a7 as l,a9 as c,c as a,aa as e,ab as s,F as p,ac as o,ad as g}from"./vendor.b4c19bdc.js";const u=s("div",{class:"markdown-body"},[s("h1",null,"Toggle"),s("h2",null,"Examples"),s("p",null,"Toggle")],-1),j={class:"text-center"},m=s("div",{class:"markdown-body"},[s("p",null,"Toggle color")],-1),_={class:"text-center space-y-2 flex items-center flex-col"},v=s("div",{class:"markdown-body"},[s("p",null,"Toggle size")],-1),x={class:"text-center"},q=s("div",{class:"h-2"},null,-1),f=s("div",{class:"h-2"},null,-1),y=s("div",{class:"h-2"},null,-1),z={class:"markdown-body"},k=s("h2",null,"Toggle",-1),b=s("h3",null,"Attributes",-1),C=[],E={setup(w,{expose:d}){return d({frontmatter:{meta:[]}}),i({meta:[]}),(I,B)=>{const n=l("dv-toggle"),t=l("Playground"),r=l("MarkdownTable");return o(),c(p,null,[u,a(t,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-toggle</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:e(()=>[s("div",j,[a(n)])]),_:1}),m,a(t,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center space-y-2 flex items-center flex-col&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-toggle</span>
    <span class="hljs-attr">defaultValue</span>
    <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;variant in [&#x27;neutral&#x27;, &#x27;primary&#x27;, &#x27;secondary&#x27;, &#x27;accent&#x27;, &#x27;info&#x27;]&quot;</span>
    <span class="hljs-attr">:variant</span>=<span class="hljs-string">&quot;variant&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:e(()=>[s("div",_,[(o(),c(p,null,g(["neutral","primary","secondary","accent","info"],h=>a(n,{defaultValue:"",variant:h},null,8,["variant"])),64))])]),_:1}),v,a(t,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-toggle</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;h-2&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-toggle</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;h-2&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-toggle</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;h-2&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-toggle</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:e(()=>[s("div",x,[a(n,{size:"xs"}),q,a(n,{size:"sm"}),f,a(n,{size:"md"}),y,a(n,{size:"lg"})])]),_:1}),s("div",z,[k,b,a(r,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"v-model","1":"v-model checked status","2":"boolean","3":"-"},{"0":"defaultValue","1":"initial checked status","2":"Function","3":"-"},{"0":"variant","1":"toogle color type","2":"neutral, primary, secondary, accent","3":"neutral"},{"0":"size","1":"toogle size","2":"xs, sm, md, lg","3":"-"}]})])],64)}}};export{E as default,C as meta};
