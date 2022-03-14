import{r,o as l,a as d,b as e,d as o,w as s,F as h,e as t,c as n}from"./app.8133f2f7.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const p={},u=e("h1",{id:"using-the-zowe-explorer-views",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#using-the-zowe-explorer-views","aria-hidden":"true"},"#"),t(" Using the Zowe Explorer views")],-1),f=e("p",null,"When you have the Zowe Explorer VS Code extension installed, you can open the following three views by clicking the Zowe icon on the VS Code Activity bar to interact with z/OS resources:",-1),g=e("ul",null,[e("li",null,"DATA SETS view that shows your data sets and members and allows you to directly open, edit, and save your programs against MVS\u2122."),e("li",null,"UNIX SYSTEM SERVICES (USS) view that shows you USS folders and files that you can also directly open, edit, and save."),e("li",null,"JOBS view that gives you access to your jobs and spool files.")],-1),w=t("See the "),m={href:"https://marketplace.visualstudio.com/items?itemName=Zowe.vscode-extension-for-zowe",target:"_blank",rel:"noopener noreferrer"},S=t("documentation in the VS Code Marketplace"),b=t(" for details on using and configuring each view. More examples are available in the section "),E=e("a",{href:"#example-how-to-manipulate-data-sets-with-zowe-explorer"},"How to manipulate data sets with Zowe Explorer",-1),x=t(" and "),v=t("Submitting JCL to compile, link, and run jobs"),y=t(" sections."),_=e("p",null,"When you install IBM Z Open Editor from the VS Code marketplace into your VS Code, the latest version of Zowe Explorer is automatically co-installed.",-1),z=e("h2",{id:"setting-up-and-using-profiles-in-zowe-explorer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#setting-up-and-using-profiles-in-zowe-explorer","aria-hidden":"true"},"#"),t(" Setting up and using profiles in Zowe Explorer")],-1),k=e("p",null,"To use Zowe Explorer, you must have at least one z/OSMF profile or RSE profile.",-1),A=t("To use Zowe CLI z/OSMF profiles with Zowe Explorer, see "),R={href:"https://docs.zowe.org/stable/user-guide/ze-profiles.html#working-with-zowe-explorer-profiles",target:"_blank",rel:"noopener noreferrer"},Z=t("Working with user profiles"),I=t("."),O=e("li",null,[e("p",null,[t("Starting from Zowe Explorer 1.6, you can also use the RSE API protocol with Zowe Explorer to graphically navigate and access file and job resources. To use IBM Z Open Editor and Zowe Explorer with RSE profiles, see "),e("a",{href:"#using-rse-api-in-zowe-explorer"},"Using RSE API in Zowe Explorer"),t(".")])],-1),C=n('<p>You can also mix and match z/OSMF and RSE CLI API profiles and use CLI commands and Zowe Explorer views with the different profiles at the same time. For example, you can access one LPAR with z/OSMF and another with RSE API from within the same VS Code workspace using Zowe Explorer and IBM Z Open Editor. IBM Z Open Editor capabilities such as COBOL copybook or PL/I include file resolving can be used with either of the two protocols as well.</p><h3 id="using-rse-api-in-zowe-explorer-and-z-open-editor" tabindex="-1"><a class="header-anchor" href="#using-rse-api-in-zowe-explorer-and-z-open-editor" aria-hidden="true">#</a> Using RSE API in Zowe Explorer and Z Open Editor</h3><p>Follow this procedure to use RSE CLI plug-in with Zowe Explorer so that you can graphically navigate and access file and job resources.</p><h4 id="setting-up-and-using-rse-profiles" tabindex="-1"><a class="header-anchor" href="#setting-up-and-using-rse-profiles" aria-hidden="true">#</a> Setting up and using RSE profiles</h4><p>To use RSE profiles in Zowe Explorer and IBM Z Open Editor, complete the following procedures:</p><h5 id="setting-up-and-using-rse-profiles-in-zowe-explorer" tabindex="-1"><a class="header-anchor" href="#setting-up-and-using-rse-profiles-in-zowe-explorer" aria-hidden="true">#</a> Setting up and using RSE profiles in Zowe Explorer</h5><p>Follow these steps to create or add an RSE profile in Zowe Explorer:</p><ol><li>Switch to the Zowe Explorer Activity Group in VS Code.</li><li>Expand the Zowe Explorer view where you wish to create the profile (DATA SETS, USS, or JOBS), and then click the <strong>+</strong> icon in the view&#39;s header bar.</li><li>Select an existing RSE profile from the dropdown to add it to the view, or create a new RSE profile by clicking <strong>Create a New Connection to z/OS</strong>.</li><li>If creating a new profile, Zowe Explorer&#39;s GUI provides prompts to guide you through the following steps: <ol><li>Provide a connection name for the profile.</li><li>Select <code>rse</code> as the profile type</li><li>Fill in the connection details provided by a system administrator to complete the profile.</li></ol></li></ol>',8),M=t("Using Zowe Explorer's GUI, you can create an RSE profile in the same way as creating a z/OSMF profile. For help on creating a profile using Zowe Explorer's GUI, see "),L={href:"https://docs.zowe.org/stable/user-guide/ze-profiles.html#working-with-zowe-explorer-profiles",target:"_blank",rel:"noopener noreferrer"},T=t("Working with user profiles"),D=t("."),F=e("p",null,"Then, you can use the RSE profile for connection as you did with a z/OSMF profile. All the same operations are available with RSE API.",-1),P=e("h5",{id:"setting-up-and-using-rse-profiles-in-ibm-z-open-editor",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#setting-up-and-using-rse-profiles-in-ibm-z-open-editor","aria-hidden":"true"},"#"),t(" Setting up and using RSE profiles in IBM Z Open Editor")],-1),U=t("You can use RSE profiles for IBM Z Open Editor operations. For example, if you edit a COBOL program and have defined "),B=t("property groups"),V=t(" to dynamically retrieve contents of copybooks from MVS, then you can use your RSE profile for that access operation instead of the default z/OSMF CLI profile. The default precedence rules to identify which CLI profile to use are as follows:"),q=n(`<ol><li>Use the profile that is specified by the <code>zopeneditor.zowe</code> workspace settings.</li><li>Use the profile that is specified by the <code>zopeneditor.zowe</code> user settings.</li><li>If no profile was specified in the locations above or the specified name of these profiles could not be found, then use the default RSE profile if available.</li><li>If the default RSE profile is not available, then use the default z/OSMF profile if available. If the default z/OSMF profile is not defined, errors are shown.</li></ol><p>The format of the <code>zopeneditor.zowe</code> user setting is as follows:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;zopeneditor.zowe&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;defaultCliProfile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rseCLI&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>The value of <code>defaultCliProfile</code> is the name of the CLI profile that you specified in the create statement above. If you cannot remember the names, then you can run this command to get the list of all your profiles and your default profile.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>zowe profiles list rse
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>As we only use the profile name to find a profile, we require that you use unique names for profiles of different types. In other words, if you use the same name for your RSE API and z/OSMF profile, then the RSE API profile will always be picked if that name is used in the settings. If you want to switch between z/OSMF and RSE API profiles, you must use unique names.</p><h2 id="using-zowe-explorer-views-to-interact-with-z-os" tabindex="-1"><a class="header-anchor" href="#using-zowe-explorer-views-to-interact-with-z-os" aria-hidden="true">#</a> Using Zowe Explorer views to interact with z/OS</h2><p>When you connect to the host with either a z/OSMF profile or an RSE profile, you can view a tree list of data sets, members in the DATA SETS view, UNIX files and directories in the UNIX SYSTEM SERVICES (USS) view, and jobs with spool files in the JOBS view.</p><p>In the three views provided by Zowe Explorer, you can perform the following tasks:</p><ul><li>Create, edit, save, rename, delete data sets, members, UNIX files, and directories on the host. For examples of managing data sets, see <a href="#example-how-to-manipulate-data-sets-with-zowe-explorer">How to manipulate data sets with Zowe Explorer</a>.</li><li>Upload local files as a partitioned data set member or as a sequential data set.</li><li>Submit JCL data sets or members as a job. Delete jobs. Download job spool files from the host to a local directory, and view them in the text editor.</li></ul><h2 id="single-sign-on-support-for-rse-profiles-in-zowe-explorer" tabindex="-1"><a class="header-anchor" href="#single-sign-on-support-for-rse-profiles-in-zowe-explorer" aria-hidden="true">#</a> Single sign-on support for RSE profiles in Zowe Explorer</h2><p>Once an RSE profile has been created and is accessible in Zowe Explorer, users can use Single sign-on (SSO) support for connecting to the RSE API host component in Zowe Explorer 1.22.0 and higher. JWTs are stored securely in the profile&#39;s YAML file in the <code>~/.zowe/profiles/rse</code> home directory.</p><h3 id="login-to-authentication-service" tabindex="-1"><a class="header-anchor" href="#login-to-authentication-service" aria-hidden="true">#</a> Login to Authentication Service</h3><ol><li>Right-click on the profile name in the Zowe Explorer tree view and select <code>Login to Authentication Service</code>.</li><li>Enter credentials for z/OS connection when prompted.</li><li>Recieve a successful login message <code>Login to authentication service was successful.</code> from Zowe Explorer.</li></ol><h3 id="logout-from-authentication-service" tabindex="-1"><a class="header-anchor" href="#logout-from-authentication-service" aria-hidden="true">#</a> Logout from Authentication Service</h3><ol><li>Right-click on the profile name in the Zowe Explorer tree view and select <code>Logout from Authentication Service</code>.</li><li>Recieve a successful logout message <code>Logout from authentication service was successful.</code> from Zowe Explorer.</li></ol><h2 id="example-how-to-manipulate-data-sets-with-zowe-explorer" tabindex="-1"><a class="header-anchor" href="#example-how-to-manipulate-data-sets-with-zowe-explorer" aria-hidden="true">#</a> Example: How to manipulate data sets with Zowe Explorer</h2><p>When you are connected to Zowe with a z/OSMF profile or an RSE profile, you can work with your COBOL, PL/I, and HLASM data sets in Zowe Explorer.</p><p>Switch to Zowe Explorer to see the DATA SETS view by clicking the Zowe icon on the Activity bar. If the DATA SETS view is not opened by default, right-click one of the headers, and select the checkbox <strong>Data Sets</strong>.</p><p><strong>Prerequisite</strong>: Before working on your data sets, you must connect to the Zowe server by expanding the node in the explorer that has the name of the connection profile you created. A list of existing profiles is shown.</p><h3 id="creating-data-sets" tabindex="-1"><a class="header-anchor" href="#creating-data-sets" aria-hidden="true">#</a> Creating data sets</h3><p>The data set is created with the parameters defined in the User Preferences. To create a data set, complete the following steps:</p><ol><li><p>Right-click on the preferred profile name and select <strong>Create New Data Set</strong> from the context menu.</p></li><li><p>Provide a name such as <code>USER1.SAMPLE.COBOL</code>, replacing USER1 with the High Level Qualifier that should be used for the new data set. Then, press Enter to continue.</p></li><li><p>Select one option from the menu such as <strong>Data Set Binary</strong>, <strong>Data Set C</strong>, <strong>Data Set Classic</strong>, <strong>Data Set Partitioned</strong>, <strong>Data Set Sequential</strong>.</p></li><li><p>To allocate the data set with default attributes, press Enter or select <strong>Allocate Data Set</strong>. Alternatively, you can customize the new data set&#39;s attributes by clicking <strong>Edit Attributes</strong>.</p><ul><li>If you edit attributes, press Enter or select <strong>Allocate Data Set</strong> once you are ready for the data set to be created.</li></ul></li><li><p>A new data set appears in the DATA SETS view. You might need to refresh the browser to see the new data set.</p></li></ol><h3 id="creating-new-data-set-members" tabindex="-1"><a class="header-anchor" href="#creating-new-data-set-members" aria-hidden="true">#</a> Creating new data set members</h3><ol><li>Right-click the PDS and select <strong>Create New Member</strong>.</li><li>Provide a name for the new member and press Enter.</li><li>Expand the PDS to see the new member.</li></ol><h3 id="migrating-and-recalling-data-sets" tabindex="-1"><a class="header-anchor" href="#migrating-and-recalling-data-sets" aria-hidden="true">#</a> Migrating and recalling data sets</h3><p>To migrate a data set, right-click a data set and select <strong>Migrate Data Set</strong>. An informational message then appears stating <code>Migration of dataset: USER1.SAMPLE.COBOL requested.</code>.</p><p>To recall a data set, right-click a data set that has been migrated and select <strong>Recall Data Set</strong>. An informational message then appears stating <code>Recall of dataset: USER1.SAMPLE.COBOL requested.</code>.</p><p>You can verify the status with either of the following ways:</p><ul><li><p>Refresh the DATA SETS view.</p><ul><li>A migrated data set will have a greyed out file icon.</li><li>A recalled data set&#39;s icon will return to normal.</li></ul></li><li><p>Right-click the data set and select <strong>Show Data Set Attributes</strong>.</p><ul><li>For a migrated data set, the attributes will show the value <code>migr: YES</code>.</li><li>For a recalled data set, the attributes will show the value <code>migr: NO</code>.</li></ul></li></ul><p><strong>Note:</strong> If the data set migration or recall does not work, contact your system administrator to ensure HSM is active on the host system.</p><h3 id="deleting-data-sets-or-data-set-members" tabindex="-1"><a class="header-anchor" href="#deleting-data-sets-or-data-set-members" aria-hidden="true">#</a> Deleting data sets or data set members</h3><ol><li>Right-click the data set or member to delete.</li><li>Select <strong>Delete</strong> from the context menu. A confirmation dialog appears and lists the item(s) you selected for deletion.</li><li>Click <strong>Delete</strong> to confirm that you want to delete the listed item(s), or click <strong>Cancel</strong> to cancel the deletion.</li></ol><h3 id="adding-or-removing-favorites" tabindex="-1"><a class="header-anchor" href="#adding-or-removing-favorites" aria-hidden="true">#</a> Adding or removing favorites</h3><ol><li>Right-click a resource, for example, a data set, folder, job, or profile.</li><li>Select <strong>Add to Favorites</strong> or <strong>Remove Favorite</strong> to add to or remove from the Favorites tree.</li></ol>`,35);function N(j,Y){const i=r("ExternalLinkIcon"),a=r("RouterLink");return l(),d(h,null,[u,f,g,e("p",null,[w,e("a",m,[S,o(i)]),b,E,x,o(a,{to:"/Docs/zowe_submitjcl.html"},{default:s(()=>[v]),_:1}),y]),_,z,k,e("ul",null,[e("li",null,[e("p",null,[A,e("a",R,[Z,o(i)]),I])]),O]),C,e("p",null,[M,e("a",L,[T,o(i)]),D]),F,P,e("p",null,[U,o(a,{to:"/Docs/setting_propertygroup.html"},{default:s(()=>[B]),_:1}),V]),q],64)}var J=c(p,[["render",N]]);export{J as default};
