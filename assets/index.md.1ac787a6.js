import{_ as s,c as n,o as a,d as l}from"./app.dc38a072.js";const i=JSON.parse('{"title":"Hello VitePress","description":"","frontmatter":{},"headers":[],"relativePath":"index.md"}'),p={name:"index.md"},o=l(`<h1 id="hello-vitepress" tabindex="-1">Hello VitePress <a class="header-anchor" href="#hello-vitepress" aria-hidden="true">#</a></h1><div class="language-py"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">f</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> x</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span></span>
<span class="line"></span></code></pre></div><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> storeToRefs </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> from &#39;pinia&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> useStore </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> from &#39;../store/use&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">const use = useStore();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u54CD\u5E94\u5F0F\u89E3\u6784\uFF0C\u7C7B\u4F3C\u7EC4\u4EF6\u4E2D\u7684ToRefs</span></span>
<span class="line"><span style="color:#A6ACCD;">let </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> count</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">changeCount</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> = storeToRefs(use);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">const btn = () =&gt; </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u6279\u91CF\u66F4\u65B0api\uFF0C\u8BE5\u5F62\u5F0F\u4FEE\u6539\u662F\u5168\u90E8\u4FEE\u6539count\u548Cname\u540E\u624D\u5237\u65B0dom\uFF0C\u800C\u975E\u4FEE\u6539\u4E00\u6B21\u5237\u65B0\u4E00\u6B21\uFF0C\u66F4\u63A8\u8350</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u6CE8\u610Fpatch\u5185\u662F\u5BF9state\u7684\u4FEE\u6539</span></span>
<span class="line"><span style="color:#A6ACCD;">  use</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">$patch</span><span style="color:#A6ACCD;">(state </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">++,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">MT</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">const btn1 = () =&gt; </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  use</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">UpCount</span><span style="color:#A6ACCD;">( </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">) ;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-sql"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> sometable </span><span style="color:#F78C6C;">group by</span><span style="color:#A6ACCD;"> a </span><span style="color:#F78C6C;">order by</span><span style="color:#A6ACCD;"> b ;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">10px</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">main</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/</span><span style="color:#FFCB6B;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,6),e=[o];function t(c,r,D,y,F,C){return a(),n("div",null,e)}var d=s(p,[["render",t]]);export{i as __pageData,d as default};
