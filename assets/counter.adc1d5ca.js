import{u as e,_ as o,a0 as u,c as a,a1 as r,a2 as s,n as i,a3 as d}from"./vendor.57d76883.js";const h=s("div",{class:"markdown-body"},[s("h1",null,"Counter"),s("h2",null,"Examples"),s("p",null,"Counter")],-1),j={class:"flex flex-col w-full"},m=s("div",{class:"markdown-body"},[s("p",null,"Large text")],-1),g={class:"flex flex-col w-full text-6xl"},f=s("div",{class:"markdown-body"},[s("p",null,"Increase")],-1),x={class:"flex flex-col w-full text-2xl"},_={class:"markdown-body"},q=s("h2",null,"Counter",-1),v=s("h3",null,"Attributes",-1),$=[],C={setup(w,{expose:p}){return p({frontmatter:{meta:[]}}),e({meta:[]}),(k,y)=>{const t=o("dv-counter"),n=o("Playground"),c=o("MarkdownTable");return d(),u(i,null,[h,a(n,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-col w-full&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-counter</span> <span class="hljs-attr">:from</span>=<span class="hljs-string">&quot;59&quot;</span> <span class="hljs-attr">:to</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">:duration</span>=<span class="hljs-string">&quot;60000&quot;</span> <span class="hljs-attr">:transitionDuration</span>=<span class="hljs-string">&quot;1000&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:r(()=>[s("div",j,[a(t,{from:59,to:0,duration:6e4,transitionDuration:1e3})])]),_:1}),m,a(n,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-col w-full text-6xl&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-counter</span>
    <span class="hljs-attr">:from</span>=<span class="hljs-string">&quot;3600 * 3.5&quot;</span>
    <span class="hljs-attr">:to</span>=<span class="hljs-string">&quot;0&quot;</span>
    <span class="hljs-attr">:duration</span>=<span class="hljs-string">&quot;3600 * 3.5 * 1000&quot;</span>
    <span class="hljs-attr">:format</span>=<span class="hljs-string">&quot;(v) =&gt; \`\${String(Math.trunc(v / 3600)).padStart(2, &#x27;0&#x27;)}h\${String(Math.trunc(v % 3600 / 60)).padStart(2, &#x27;0&#x27;)}m\${String(v % 60).padStart(2, &#x27;0&#x27;)}s\`&quot;</span>
    <span class="hljs-attr">:transitionDuration</span>=<span class="hljs-string">&quot;1000&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:r(()=>[s("div",g,[a(t,{from:3600*3.5,to:0,duration:3600*3.5*1e3,format:l=>`${String(Math.trunc(l/3600)).padStart(2,"0")}h${String(Math.trunc(l%3600/60)).padStart(2,"0")}m${String(l%60).padStart(2,"0")}s`,transitionDuration:1e3},null,8,["from","duration","format"])])]),_:1}),f,a(n,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-col w-full text-2xl&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-counter</span> <span class="hljs-attr">:from</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">:to</span>=<span class="hljs-string">&quot;3000&quot;</span> <span class="hljs-attr">:duration</span>=<span class="hljs-string">&quot;2000&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:r(()=>[s("div",x,[a(t,{from:0,to:3e3,duration:2e3})])]),_:1}),s("div",_,[q,v,a(c,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"from","1":"start value","2":"number","3":"-"},{"0":"to","1":"end value","2":"number","3":"-"},{"0":"duration","1":"duration","2":"number","3":"-"},{"0":"format","1":"control how to display","2":"(value) => string","3":"-"},{"0":"transitionDuration","1":"css transition duration","2":"number","3":"0"}]},null,8,["dataSource"])])],64)}}};export{C as default,$ as meta};
