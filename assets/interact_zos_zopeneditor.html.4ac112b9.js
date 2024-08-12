import{r as n,o as i,a,b as e,d as l,w as r,F as p,c as t,e as o}from"./app.8b19c2f0.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";var h="/zopeneditor-about/assets/zowe-settings.136506c4.png",c="/zopeneditor-about/assets/zowe-no-prof-status.449ce1d3.png",u="/zopeneditor-about/assets/zowe-rse-status.8c65c6dd.png",f="/zopeneditor-about/assets/profile-management-opts.2e84d181.png";const g={},m=t('<h1 id="using-zowe-profiles-in-z-open-editor" tabindex="-1"><a class="header-anchor" href="#using-zowe-profiles-in-z-open-editor" aria-hidden="true">#</a> Using Zowe profiles in Z Open Editor</h1><p>Z Open Editor extends Zowe Explorer functionality by making use of the Zowe profiles for z/OS connections to complete certain tasks. The profiles that are used by Z Open Editor are stored in the <code>zopeneditor.zowe</code> settings along with other lower-level settings that deal with connecting to z/OS.</p><p>IBM Z Open Editor will by default follow these precedence rules to identify which Zowe profile to use:</p><ol><li>Use the profile specified by the <code>zopeneditor.zowe</code> user setting.</li><li>If no profile is defined in the user setting, then use the default RSE profile if available.</li><li>If the default RSE profile is not available, then use the default z/OSMF profile if available. If the default z/OSMF profile is not defined, errors are shown.</li></ol><h2 id="zopeneditor-zowe-settings-explained" tabindex="-1"><a class="header-anchor" href="#zopeneditor-zowe-settings-explained" aria-hidden="true">#</a> <code>zopeneditor.zowe</code> settings explained</h2>',5),w=e("li",null,[e("p",null,[e("code",null,"defaultCliProfile"),o(": The value is the name of the Zowe RSE or z/OSMF profile that you want to use. If you cannot remember the names, you can find the profile name using Zowe Explorer GUI or run the following Zowe CLI commands to get the list of all your profiles and your default profile:")]),e("ul",null,[e("li",null,[o("List RSE profiles: "),e("code",null,"zowe profiles list rse")]),e("li",null,[o("List z/OSMF profiles: "),e("code",null,"zowe profiles list zosmf")])])],-1),b=e("li",null,[e("p",null,[e("code",null,"defaultSshCliProfile"),o(": The value is the name of the Zowe SSH profile that you want to use. Some functionalities offered by Z Open Editor may require a Zowe SSH profile to be specified.")])],-1),z=e("code",null,"defaultRseConversionMappingsFile",-1),y=o(": discussed in detail in the "),S=o("MVS EBCDIC code pages and mappings files"),v=o(" help section."),_=t("<li><p><code>listBeforeDownload</code>: The value is boolean and modifies Z Open Editor&#39;s behavior when requesting a file from MVS:</p><ul><li>When the setting is set to <code>true</code>, the editor will first try to confirm whether the requested file exists by performing a list operation for that file. If the requested file exists, the editor will send another request to download it. If the requested file does not exist, the editor will move on to test the next location listed in the property group.</li><li>When the setting is set to <code>false</code>, the editor will directly try to download the file from MVS without checking whether it exists. If the response from z/OS is a Not Found error, the editor will move on to the next location listed in the property group. In some cases when using z/OSMF as the protocol, this <code>Not Found</code> error will cause entries in z/OS log files, which you can avoid by specifying the value of the setting to <code>true</code>.</li></ul><p>This extra round trip to the server when set to <code>true</code> to check the existence will have a performance impact. Because the logging is not always an issue for all z/OSMF users and not an issue when using the RSE API protocol, and because of the performance advantage, the default value for this setting is <code>false</code>.</p></li><li><p><code>maximumParallelFileDownloads</code>: The value can be used to specify how many parallel downloads Z Open Editor should perform when requesting include files from MVS. Downloading several files in parallel can significantly improve performance, especially when you edit programs with many include files. The downside is that some protocols such as z/OSMF will allocate more address spaces for the parallel requests, which causes more resources to be used and more logging on the z/OS side. The RSE API protocol does not have that problem because it achieves scalability in other ways that are outlined in the RSE documentation. The default value for this setting is 5, and the maximum value is 10. Set it to 1 to disable parallel downloads and request one include file at a time.</p></li>",2),k=t(`<h2 id="changing-the-zowe-profile-using-vs-code-settings" tabindex="-1"><a class="header-anchor" href="#changing-the-zowe-profile-using-vs-code-settings" aria-hidden="true">#</a> Changing the Zowe Profile using VS Code settings</h2><p>The format of the <code>zopeneditor.zowe</code> user setting is as follows:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;zopeneditor.zowe&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;defaultCliProfile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mySandbox.rseapi&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;defaultSshCliProfile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mySandbox.ssh&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;listBeforeDownload&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;maximumParallelFileDownloads&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token property">&quot;defaultRseConversionMappingsFile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~/wazi-sample/zapp.yaml&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>These settings can also be edited by using this table in the graphical Settings editor:</p><p><img src="`+h+'" alt="VS Code Settings editor for zopeneditor.zowe"></p><h2 id="changing-the-zowe-profile-using-status-bar-button" tabindex="-1"><a class="header-anchor" href="#changing-the-zowe-profile-using-status-bar-button" aria-hidden="true">#</a> Changing the Zowe Profile using status bar button</h2><p>If no profile is specified in the settings, the default Zowe CLI profile is used by Z Open Editor in the VS Code status bar. You can find the name and type of the currently active Zowe CLI profile in the lower right of the editor window.</p><p><img src="'+c+'" alt="&#39;zowe-no-prof-status&#39;"><img src="'+u+'" alt="&#39;zowe-rse-status&#39;"></p><p>Hover over the status bar item for the Zowe profile to see information about the setting, and click the item to view a menu of options. These options are determined by the profile type that is selected when clicking the button. All profile types will show the options to change the Zowe CLI profile used by Z Open Editor.</p><p>When choosing a z/OSMF profile for the <code>defaultZoweCli</code>, the user will also see the option to choose the accompanying SSH profile that is needed for some Z Open Editor actions along-side the z/OSMF profile.</p><p>RSE profiles also have the option to change their password on the host for the profile. This option not only makes the change on the host side. If the host request is successful, it will update the credentials on the client side as well.</p><p><img src="'+f+'" alt="&#39;profile-management-options&#39;"></p><p>When changing the RSE profile password on the host, the user will be prompted for their original user ID and password for authentication purposes.</p>',13);function x(q,Z){const s=n("RouterLink");return i(),a(p,null,[m,e("ul",null,[w,b,e("li",null,[e("p",null,[z,y,l(s,{to:"/Docs/ebcdic_encoding.html"},{default:r(()=>[S]),_:1}),v])]),_]),k],64)}var C=d(g,[["render",x]]);export{C as default};