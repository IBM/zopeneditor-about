import{r as p,o as l,a as c,b as n,d as e,w as r,F as i,c as o,e as s}from"./app.ddd31345.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const d={},h=o('<h1 id="connecting-to-z-os-with-zowe-explorer-walk-through" tabindex="-1"><a class="header-anchor" href="#connecting-to-z-os-with-zowe-explorer-walk-through" aria-hidden="true">#</a> Connecting to z/OS with Zowe Explorer walk through</h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p>Zowe Explorer VS Code extension adds support for connecting to z/OS, and the connection details are specified in the team configuration file. The team configuration file is a JSON file that contains definitions for profiles to connect to z/OS by using different methods such as RSE API, z/OSMF API, SSH, and FTP. Zowe framework is open source and supports extenders, so there might be more ways to connect in the future. One team configuration file can contain many individual profiles, and it can be located in your home directory .zowe folder or added to a Git repository.</p><p>You can create and edit a team configuration file in multiple ways such as Zowe CLI. This tutorial will walk you through the steps on how to manage connection profiles by using Zowe Explorer UI.</p><h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2>',5),k=n("li",null,"On the client side: Ensure that Z Open Editor and Zowe Explorer VS Code extension are installed in your VS Code.",-1),m=s("On the server side: Check with your system administrator to ensure RSE API or z/OSMF api is installed and which ports it can be accessed on. Often, RSE API is installed on port 7395, sometimes 8195 or 6800, and z/OSMF is often available on port 443 or 10443. Those default ports can be changed. For more information, see "),b={href:"https://www.ibm.com/docs/en/explorer-for-zos/3.3?topic=documentation-rse-api",target:"_blank",rel:"noopener noreferrer"},f=s("installing RSE API"),g=s(" and "),q={href:"https://www.ibm.com/docs/en/zos/2.3.0?topic=guide-configuration",target:"_blank",rel:"noopener noreferrer"},y=s("installing z/OSMF API"),_=s("."),w=n("h2",{id:"creating-a-team-configuration-file",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#creating-a-team-configuration-file","aria-hidden":"true"},"#"),s(" Creating a team configuration file")],-1),z=n("p",null,"You can create a team configuration file by using Zowe Explorer UI. After the team configuration file is created, it can be used by both Zowe Explorer and Zowe CLI.",-1),E=o("<li><p>Open the Zowe Explorer view in VS Code.</p></li><li><p>Click the <strong>Add profile...</strong> plus button in the Data sets, UNIX System Services, or Jobs view.</p></li><li><p>Click <strong>Create a new Team Configuration file</strong>.</p></li><li><p>Choose if you want a file to be accesed globally or just in the current project.</p><ul><li>If you want to access the file in any project, select <strong>Global</strong>.</li><li>If you want to access the file in the current Git project only, select <strong>Project</strong>.</li></ul><p>Now Zowe Explorer will create <code>zowe.config.json</code> in <code>~/.zowe</code> directory or <code>zowe.config.user.json</code> inside your repo. This file contains default values and supported extender profile definitions. Because Z Open editor is installed, the team configuration file is created with the RSE profile template.</p></li><li><p>Specify the profiles with your connection details. You can enter common values such as <code>host</code> in the <code>base</code> profile, which will then be applied to the entire team configuration file.</p></li><li><p>You can hover over each JSON key in the file for explanation of each option.</p></li>",6),S=n("p",null,"Specify the values as needed according to your connection type.",-1),x=n("li",null,[s("Connect to zOS with RSE API "),n("ul",null,[n("li",null,[s("Ensure that you can access RSE API using correct port. Swagger API doc should be available on the port, for example, "),n("code",null,"https://myzos.ibm.com:6800/rseapi/api-docs/"),s(".")]),n("li",null,[s("If you have "),n("code",null,"zowe cli"),s(" with "),n("code",null,"rse-api-for-zowe-cli"),s(" plug-in installed, use the "),n("code",null,"zowe rse check status"),s(" command to confirm that RSE API is running on port specified in the profile.")])])],-1),v=s("Connect to z/OS z/OSMF API "),I=s("Check out "),O={href:"https://docs.zowe.org/stable/troubleshoot/cli/z/OSMF-cli/",target:"_blank",rel:"noopener noreferrer"},P=s("z/OSMF connection troubleshooting guide"),A=s("."),C=n("li",null,[n("p",null,"Save your changes. Profiles should be ready to be added to each tree view.")],-1),Z=n("li",null,[n("p",null,"In Zowe Explorer, go to the tree of your choice and add the profile by clicking the plus button.")],-1),R=n("li",null,[n("p",null,[s("To re-open and update team configuration file, click "),n("strong",null,"Add profile... > Edit Team Configuration file"),s(".")])],-1),F=s("After you start using the Zowe Explorer tree views, you will be prompted to enter username and password. On the desktop, Zowe Explorer stores encrypted credentials on the user's local system in the local operation system specific way, such as the Keychain on Mac OS. If you are using a different authentication method, see "),j=s("Supported methods of authentication for z/OS using Zowe"),T=s("."),N=o(`<h3 id="zowe-team-configuration-file-example" tabindex="-1"><a class="header-anchor" href="#zowe-team-configuration-file-example" aria-hidden="true">#</a> Zowe team configuration file example</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;$schema&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./zowe.schema.json&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;profiles&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;zosmf&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zosmf&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">443</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;secure&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tso&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tso&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;account&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;codePage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1047&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;logonProcedure&quot;</span><span class="token operator">:</span> <span class="token string">&quot;IZUFPROC&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;secure&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ssh&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ssh&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">22</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;secure&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rse&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rse&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">6800</span><span class="token punctuation">,</span>
        <span class="token property">&quot;basePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rseapi&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;secure&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// common properties can be defined in the base profile insread of defining them in every profile</span>
    <span class="token property">&quot;base&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;base&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;myzos.ibm.com&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// reject connection if self-signed certificate is used</span>
        <span class="token property">&quot;rejectUnauthorized&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// this section will be populated once you are prompted for username and password via Zowe Explorer.</span>
      <span class="token property">&quot;secure&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;defaults&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;zosmf&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zosmf&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tso&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tso&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ssh&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ssh&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rse&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rse&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;base&quot;</span><span class="token operator">:</span> <span class="token string">&quot;base&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// set to false to not store credentials locally</span>
  <span class="token property">&quot;autoStore&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div><h2 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a> Troubleshooting</h2>`,3),M=n("thead",null,[n("tr",null,[n("th",null,"Error"),n("th",null,"Resolution")])],-1),U=n("tr",null,[n("td",null,'When I click "Add profile", no profiles show up'),n("td",null,"This might happen when a team configuration file is invalid, for example, when there is a syntax error. Ensure that you team configuration file is saved and is valid.")],-1),V=n("tr",null,[n("td",null,[n("code",null,"Error: Zowe REST Operations API Error:"),s(" or "),n("code",null,"http(s) request error event called"),s(" or "),n("code",null,"Error: connect ECONNREFUSED myzos.ibm.com:6800")]),n("td",null,[s("In most cases, the error occurs because your RSE API port is wrong. "),n("br"),s(),n("ul",null,[n("li",null,"Ensure you access RSE API using correct port. Swagger API doc should be available on the port, for example: https://myzos.ibm.com:6800/rseapi/api-docs/."),n("li",null,[s("If you have "),n("code",null,"zowe cli"),s(" with "),n("code",null,"rse-api-for-zowe-cli"),s(" plugin installed, use the following command to confirm RSE API is running on port specified in the profile: "),n("code",null,"zowe rse check status"),s(".")])])])],-1),L=n("tr",null,[n("td",null,[n("code",null,"Error: z/OSMF REST API Error:"),s(" or "),n("code",null,"http(s) request error event called"),s(" or "),n("code",null,"Error: getaddrinfo ENOTFOUND myzos.ibm.com")]),n("td",null,"If you are using an internal z/OS system behind a firewall, make sure you have connected through the firewall.")],-1),D=n("tr",null,[n("td",null,[n("code",null,"Error: Zowe REST Operations API Error:"),s(" or "),n("code",null,"http(s) request error event called"),s(" or "),n("code",null,"Error: self signed certificate"),s(" or "),n("code",null,"Error: z/OSMF REST API Error:"),s(" or "),n("code",null,"http(s) request error event called"),s(" or "),n("code",null,"Error: certificate has expired")]),n("td",null,[s("If your z/OS is using self-signed certificates, make sure to set "),n("code",null,'"rejectUnauthorized": false'),s(".")])],-1),B=n("td",null,[n("code",null,"Failed to load schema for profile type rse"),s(" or "),n("code",null,"Failed to load schema for config file /Users/user/.zowe/zowe.config.json: invalid schema file")],-1),Y=s("If you get any schema related error, your "),G=n("code",null,"zowe.schema.json",-1),J=s(" might be missing, not updated properly, or corrupted. For more information, see "),H=s("sharing team configuration files"),K=s(".");function W(X,$){const a=p("ExternalLinkIcon"),t=p("RouterLink");return l(),c(i,null,[h,n("ul",null,[k,n("li",null,[m,n("a",b,[f,e(a)]),g,n("a",q,[y,e(a)]),_])]),w,z,n("ol",null,[E,n("li",null,[S,n("ul",null,[x,n("li",null,[v,n("ul",null,[n("li",null,[I,n("a",O,[P,e(a)]),A])])])])]),C,Z,R,n("li",null,[n("p",null,[F,e(t,{to:"/Docs/zowe_advanced_connection_scenarious.html"},{default:r(()=>[j]),_:1}),T])])]),N,n("table",null,[M,n("tbody",null,[U,V,L,D,n("tr",null,[B,n("td",null,[Y,G,J,e(t,{to:"/Docs/sharing_team_configuration_files.html"},{default:r(()=>[H]),_:1}),K])])])])],64)}var sn=u(d,[["render",W]]);export{sn as default};