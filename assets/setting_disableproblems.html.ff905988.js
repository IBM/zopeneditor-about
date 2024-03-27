import{r as a,o as s,a as i,b as n,d as r,w as t,F as l,c as d,e}from"./app.8943f21e.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const p={},b=d(`<h1 id="enabling-and-disabling-problems-in-ibm-z-open-editor" tabindex="-1"><a class="header-anchor" href="#enabling-and-disabling-problems-in-ibm-z-open-editor" aria-hidden="true">#</a> Enabling and disabling problems in IBM Z Open Editor</h1><p>IBM Z Open Editor performs real-time syntax checking and provides annotations that describe problems or errors in COBOL, HLASM, PL/I, and REXX code:</p><ul><li>To see the annotations that describe a specific error, hover over the red underlined code in the editor.</li><li>To see annotations for all errors and warnings for all opened editors, open the Problems view by pressing Ctrl+Shift+M (on Windows) or Cmd+Shift+M (on Mac).</li></ul><p>You can enable or disable the showing of problems in your programs when you are maintaining other language features by using the settings provided by IBM Z Open Editor. The showing of problems is enabled by default. To disable the showing of problems in a specific language, specify the following preference setting:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;zopeneditor.&lt;language&gt;.disableProblems&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,5),g=n("strong",null,"Note",-1),h=e(": Disabling COBOL's problems will also disable unreachable code warnings. For more information, see "),m=e("Enabling and disabling unreachable COBOL code warnings"),u=e(".");function f(_,w){const o=a("RouterLink");return s(),i(l,null,[b,n("p",null,[g,h,r(o,{to:"/Docs/setting_unreachablecodewarnings.html"},{default:t(()=>[m]),_:1}),u])],64)}var B=c(p,[["render",f]]);export{B as default};