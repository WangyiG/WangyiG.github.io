import{_ as s,c as n,o as a,d as p}from"./app.dc38a072.js";const C=JSON.parse('{"title":"orjson \u5FEB\u901F\u4F7F\u7528","description":"","frontmatter":{},"headers":[],"relativePath":"Python/orjson.md"}'),l={name:"Python/orjson.md"},o=p(`<h1 id="orjson-\u5FEB\u901F\u4F7F\u7528" tabindex="-1">orjson \u5FEB\u901F\u4F7F\u7528 <a class="header-anchor" href="#orjson-\u5FEB\u901F\u4F7F\u7528" aria-hidden="true">#</a></h1><hr><h4 id="\u5BFC\u5165\u76F8\u5173\u5E93" tabindex="-1">\u5BFC\u5165\u76F8\u5173\u5E93 <a class="header-anchor" href="#\u5BFC\u5165\u76F8\u5173\u5E93" aria-hidden="true">#</a></h4><div class="language-py"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> uuid</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> orjson</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> numpy </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> np</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> datetime </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> datetime</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> dataclasses </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> dataclass</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h4 id="\u51C6\u5907\u4E00\u4E2A\u81EA\u5B9A\u4E49\u6570\u636E\u7C7B\u4EE5\u53CAjson\u6570\u636E-\u65B9\u4FBF\u540E\u7EED\u4F7F\u7528" tabindex="-1">\u51C6\u5907\u4E00\u4E2A\u81EA\u5B9A\u4E49\u6570\u636E\u7C7B\u4EE5\u53CAjson\u6570\u636E,\u65B9\u4FBF\u540E\u7EED\u4F7F\u7528 <a class="header-anchor" href="#\u51C6\u5907\u4E00\u4E2A\u81EA\u5B9A\u4E49\u6570\u636E\u7C7B\u4EE5\u53CAjson\u6570\u636E-\u65B9\u4FBF\u540E\u7EED\u4F7F\u7528" aria-hidden="true">#</a></h4><div class="language-py"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">dataclass</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">User</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">id</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">str</span></span>
<span class="line"><span style="color:#A6ACCD;">    phone_number</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span></span>
<span class="line"><span style="color:#A6ACCD;">demo_json </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">c</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:{</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">d</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:True},</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">e</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h4 id="_2\u8FDB\u5236\u5E8F\u5217\u5316-\u53EF\u4F7F\u7528decode\u89E3\u7801" tabindex="-1">2\u8FDB\u5236\u5E8F\u5217\u5316,\u53EF\u4F7F\u7528decode\u89E3\u7801 <a class="header-anchor" href="#_2\u8FDB\u5236\u5E8F\u5217\u5316-\u53EF\u4F7F\u7528decode\u89E3\u7801" aria-hidden="true">#</a></h4><div class="language-py"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">json1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> orjson</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dumps</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">demo_json</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">type</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">json1</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;">json1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">decode</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h4 id="\u53CD\u5E8F\u5217\u5316" tabindex="-1">\u53CD\u5E8F\u5217\u5316 <a class="header-anchor" href="#\u53CD\u5E8F\u5217\u5316" aria-hidden="true">#</a></h4><div class="language-py"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">orjson</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">loads</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">json1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h4 id="\u4E30\u5BCC\u7684option\u9009\u9879" tabindex="-1">\u4E30\u5BCC\u7684option\u9009\u9879 <a class="header-anchor" href="#\u4E30\u5BCC\u7684option\u9009\u9879" aria-hidden="true">#</a></h4><p>orjson.OPT_INDENT_2\u4E3A\u5E8F\u5217\u5316\u540E\u7684JSON\u7ED3\u679C\u6DFB\u52A02\u4E2A\u7A7A\u683C\u7684\u7F29\u8FDB\u53CA\u6362\u884C</p><div class="language-py"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">orjson</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dumps</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">demo_json</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">option</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">orjson</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">OPT_INDENT_2</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">decode</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h4 id="orjson\u652F\u6301\u5C06\u6807\u51C6\u5E93\u4E2D\u7684\u65F6\u95F4\u65E5\u671F\u5BF9\u8C61\u8F6C\u6362\u6210\u76F8\u5E94\u7684\u5B57\u7B26\u4E32-orjson-opt-omit-microseconds\u652F\u6301\u5C06\u8F6C\u6362\u7ED3\u679C\u540E\u7F00\u7684\u6BEB\u79D2\u90E8\u5206\u7701\u7565\u6389" tabindex="-1">orjson\u652F\u6301\u5C06\u6807\u51C6\u5E93\u4E2D\u7684\u65F6\u95F4\u65E5\u671F\u5BF9\u8C61\u8F6C\u6362\u6210\u76F8\u5E94\u7684\u5B57\u7B26\u4E32,orjson.OPT_OMIT_MICROSECONDS\u652F\u6301\u5C06\u8F6C\u6362\u7ED3\u679C\u540E\u7F00\u7684\u6BEB\u79D2\u90E8\u5206\u7701\u7565\u6389 <a class="header-anchor" href="#orjson\u652F\u6301\u5C06\u6807\u51C6\u5E93\u4E2D\u7684\u65F6\u95F4\u65E5\u671F\u5BF9\u8C61\u8F6C\u6362\u6210\u76F8\u5E94\u7684\u5B57\u7B26\u4E32-orjson-opt-omit-microseconds\u652F\u6301\u5C06\u8F6C\u6362\u7ED3\u679C\u540E\u7F00\u7684\u6BEB\u79D2\u90E8\u5206\u7701\u7565\u6389" aria-hidden="true">#</a></h4><div class="language-py"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">orjson</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dumps</span><span style="color:#89DDFF;">({</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">now</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;">datetime</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">now</span><span style="color:#89DDFF;">()}).</span><span style="color:#82AAFF;">decode</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">orjson</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dumps</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">now</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;">datetime</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">now</span><span style="color:#89DDFF;">()},</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#A6ACCD;">option</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">orjson</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">OPT_OMIT_MICROSECONDS</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">decode</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h4 id="orjson-opt-non-str-keys\u5C06\u6570\u503C\u7C7B\u578B\u7684\u952E\u8F6C\u6362\u4E3A\u5B57\u7B26\u7C7B\u578B\u3002\u5BF9\u4E8E\u591A\u79CDoption\u9009\u9879\u7EC4\u5408-\u4F7F\u7528-\u6216\u6807\u8BC6\u7B26\u8FDE\u63A5" tabindex="-1">orjson.OPT_NON_STR_KEYS\u5C06\u6570\u503C\u7C7B\u578B\u7684\u952E\u8F6C\u6362\u4E3A\u5B57\u7B26\u7C7B\u578B\u3002\u5BF9\u4E8E\u591A\u79CDoption\u9009\u9879\u7EC4\u5408,\u4F7F\u7528|\u6216\u6807\u8BC6\u7B26\u8FDE\u63A5 <a class="header-anchor" href="#orjson-opt-non-str-keys\u5C06\u6570\u503C\u7C7B\u578B\u7684\u952E\u8F6C\u6362\u4E3A\u5B57\u7B26\u7C7B\u578B\u3002\u5BF9\u4E8E\u591A\u79CDoption\u9009\u9879\u7EC4\u5408-\u4F7F\u7528-\u6216\u6807\u8BC6\u7B26\u8FDE\u63A5" aria-hidden="true">#</a></h4><div class="language-py"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">orjson</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dumps</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">dict</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">zip</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">],[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">option</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">orjson</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">OPT_NON_STR_KEYS</span><span style="color:#89DDFF;">|</span><span style="color:#82AAFF;">orjson</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">OPT_INDENT_2</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">decode</span><span style="color:#89DDFF;">())</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h4 id="orjson-opt-serialize-numpy\u652F\u6301\u5C06\u5305\u542Bnumpy\u4E2D\u6570\u636E\u7ED3\u6784\u5BF9\u8C61\u7684\u590D\u6742\u5BF9\u8C61\uFF0C\u517C\u5BB9\u6027\u5730\u8F6C\u6362\u4E3Ajson\u4E2D\u7684\u6570\u7EC4" tabindex="-1">orjson.OPT_SERIALIZE_NUMPY\u652F\u6301\u5C06\u5305\u542Bnumpy\u4E2D\u6570\u636E\u7ED3\u6784\u5BF9\u8C61\u7684\u590D\u6742\u5BF9\u8C61\uFF0C\u517C\u5BB9\u6027\u5730\u8F6C\u6362\u4E3AJSON\u4E2D\u7684\u6570\u7EC4 <a class="header-anchor" href="#orjson-opt-serialize-numpy\u652F\u6301\u5C06\u5305\u542Bnumpy\u4E2D\u6570\u636E\u7ED3\u6784\u5BF9\u8C61\u7684\u590D\u6742\u5BF9\u8C61\uFF0C\u517C\u5BB9\u6027\u5730\u8F6C\u6362\u4E3Ajson\u4E2D\u7684\u6570\u7EC4" aria-hidden="true">#</a></h4><div class="language-py"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">orjson</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dumps</span><span style="color:#89DDFF;">({</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">numpy_array</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;">np</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">arange</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">reshape</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">option</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">orjson</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">OPT_SERIALIZE_NUMPY</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h4 id="\u90E8\u5206option\u9009\u9879\u53EF\u4E0Edefault\u53C2\u6570\u8054\u52A8\u4F7F\u7528-\u5BF9option\u9009\u9879\u6307\u5B9A\u7684\u5BF9\u8C61-\u6267\u884Cdefault\u53C2\u6570\u6307\u5B9A\u7684\u51FD\u6570" tabindex="-1">\u90E8\u5206option\u9009\u9879\u53EF\u4E0Edefault\u53C2\u6570\u8054\u52A8\u4F7F\u7528,\u5BF9option\u9009\u9879\u6307\u5B9A\u7684\u5BF9\u8C61,\u6267\u884Cdefault\u53C2\u6570\u6307\u5B9A\u7684\u51FD\u6570 <a class="header-anchor" href="#\u90E8\u5206option\u9009\u9879\u53EF\u4E0Edefault\u53C2\u6570\u8054\u52A8\u4F7F\u7528-\u5BF9option\u9009\u9879\u6307\u5B9A\u7684\u5BF9\u8C61-\u6267\u884Cdefault\u53C2\u6570\u6307\u5B9A\u7684\u51FD\u6570" aria-hidden="true">#</a></h4><p>orjson.OPT_PASSTHROUGH_DATACLASS\u6307\u5B9A\u81EA\u5B9A\u4E49\u7684dataclass\u7684\u5B9E\u4F8B\uFF0C\u6267\u884Cdefault\u53C2\u6570\u6307\u5B9A\u7684\u51FD\u6570</p><div class="language-py"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">f </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lambda</span><span style="color:#A6ACCD;"> obj</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">phone_number</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&#39;</span><span style="color:#A6ACCD;">{</span><span style="color:#FFCB6B;">str</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">phone_number</span><span style="color:#89DDFF;">)[:</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">}</span><span style="color:#C3E88D;">xxx</span><span style="color:#A6ACCD;">{</span><span style="color:#FFCB6B;">str</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">phone_number</span><span style="color:#89DDFF;">)[-</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">:]</span><span style="color:#A6ACCD;">}</span><span style="color:#C3E88D;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">demo_json1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">user1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:{</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">phone_number</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">13666666666</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">user2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;">User</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">=</span><span style="color:#FFCB6B;">str</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">uuid</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">uuid4</span><span style="color:#89DDFF;">()),</span><span style="color:#A6ACCD;">phone_number</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">13888888888</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">orjson</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dumps</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#82AAFF;">    demo_json1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#A6ACCD;">option</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">orjson</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">OPT_PASSTHROUGH_DATACLASS</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#A6ACCD;">default</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">f</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>orjson.OPT_PASSTHROUGH_DATETIME\u6307\u5B9Adatetime\u5B9E\u4F8B,\u6267\u884Cdefault\u53C2\u6570\u6307\u5B9A\u7684\u51FD\u6570</p><div class="language-py"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">g </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lambda</span><span style="color:#A6ACCD;"> obj</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">strftime</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%Y\u5E74%m\u6708%d\u65E5</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">orjson</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dumps</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">now</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;">datetime</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">now</span><span style="color:#89DDFF;">()},</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#A6ACCD;">option</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">orjson</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">OPT_PASSTHROUGH_DATETIME</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">default</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">g</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">decode</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>\u5F53\u5B58\u5728\u4E0D\u540C\u7C7B\u578B\u7684\u5BF9\u8C61\u65F6,default\u53C2\u6570\u8C03\u7528\u7684\u51FD\u6570\u5E94\u5F53\u80FD\u5206\u800C\u6CBB\u4E4B</p><div class="language-py"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">demo_json2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">now</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">datetime</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">now</span><span style="color:#89DDFF;">(),</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">user</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;">User</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">=</span><span style="color:#FFCB6B;">str</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">uuid</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">uuid4</span><span style="color:#89DDFF;">()),</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#A6ACCD;">phone_number</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">13888888888</span><span style="color:#89DDFF;">)}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">func</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isinstance</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">obj</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">datetime</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">g</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">obj</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isinstance</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">obj</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">User</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">f</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">obj</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">orjson</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dumps</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#82AAFF;">    demo_json2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#A6ACCD;">option</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">orjson</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">OPT_PASSTHROUGH_DATETIME</span><span style="color:#89DDFF;">|</span><span style="color:#82AAFF;">orjson</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">OPT_PASSTHROUGH_DATACLASS</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#A6ACCD;">default</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">func</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">decode</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,26),e=[o];function c(F,r,t,D,y,A){return a(),n("div",null,e)}var d=s(l,[["render",c]]);export{C as __pageData,d as default};
