import{_ as e,r as p,o,c,a as s,b as n,d as t,e as i}from"./app-2fd97b94.js";const l={},u=s("h1",{id:"regexp-based-lexers",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#regexp-based-lexers","aria-hidden":"true"},"#"),n(" RegExp Based Lexers")],-1),r=s("p",null,[n("Chevrotain Lexers are defined using "),s("strong",null,"standard"),n(" ECMAScript regular expressions. This means there is no need to learn a new syntax and/or semantics.")],-1),d={href:"https://github.com/slevithan/XRegExp",target:"_blank",rel:"noopener noreferrer"},k=i(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>$<span class="token punctuation">.</span><span class="token constant">RULE</span><span class="token punctuation">(</span><span class="token string">&quot;statement&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> fragments <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// A utility to create re-usable fragments using xRegExp</span>
  <span class="token keyword">function</span> <span class="token constant">FRAGMENT</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> def</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fragments<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> XRegExp<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span>def<span class="token punctuation">,</span> fragments<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// a utility to create a pattern using previously defined fragments</span>
  <span class="token keyword">function</span> <span class="token constant">MAKE_PATTERN</span><span class="token punctuation">(</span><span class="token parameter">def<span class="token punctuation">,</span> flags</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> XRegExp<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span>def<span class="token punctuation">,</span> fragments<span class="token punctuation">,</span> flags<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// define fragments</span>
  <span class="token constant">FRAGMENT</span><span class="token punctuation">(</span><span class="token string">&quot;IntegerPart&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-?(0|[1-9][0-9]*)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token constant">FRAGMENT</span><span class="token punctuation">(</span><span class="token string">&quot;FractionalPart&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\\\\.[0-9]+&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token constant">FRAGMENT</span><span class="token punctuation">(</span><span class="token string">&quot;ExponentPart&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;[eE][+-]?[0-9]+&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> IntValue <span class="token operator">=</span> <span class="token function">createToken</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;IntValue&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// Simple use case, not really needed in this case except for avoiding duplication.</span>
    <span class="token literal-property property">pattern</span><span class="token operator">:</span> <span class="token constant">MAKE_PATTERN</span><span class="token punctuation">(</span><span class="token string">&quot;{{IntegerPart}}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> FloatValue <span class="token operator">=</span> <span class="token function">createToken</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;FloatValue&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pattern</span><span class="token operator">:</span> <span class="token constant">MAKE_PATTERN</span><span class="token punctuation">(</span>
      <span class="token comment">// This regExp would be very hard to read without &quot;named fragments&quot;</span>
      <span class="token string">&quot;{{IntegerPart}}{{FractionalPart}}({{ExponentPart}})?|{{IntegerPart}}{{ExponentPart}}&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),m={href:"https://github.com/chevrotain/chevrotain/blob/master/examples/grammars/graphql/graphql.js",target:"_blank",rel:"noopener noreferrer"};function v(g,b){const a=p("ExternalLinkIcon");return o(),c("div",null,[u,r,s("p",null,[n("In addition existing JavaScript regExp libraries can be easily used, for example by using the awesome "),s("a",d,[n("xRegExp library"),t(a)]),n(" one can simplify the creation of complex patterns and avoid code duplication.")]),k,s("p",null,[n("See "),s("a",m,[n("full executable example"),t(a)]),n(" as part of the graphQL example grammar.")])])}const x=e(l,[["render",v],["__file","regexp.html.vue"]]);export{x as default};