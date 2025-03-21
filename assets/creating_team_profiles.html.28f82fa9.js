import{r as o,o as a,a as l,b as i,d as t,w as c,F as s,c as d,e}from"./app.096b05e2.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";const h={},f=d('<h1 id="creating-a-configuration-profile-in-zowe-explorer-v3-0-0" tabindex="-1"><a class="header-anchor" href="#creating-a-configuration-profile-in-zowe-explorer-v3-0-0" aria-hidden="true">#</a> Creating a configuration profile in Zowe Explorer v3.0.0</h1><h2 id="initializing-the-configuration-file" tabindex="-1"><a class="header-anchor" href="#initializing-the-configuration-file" aria-hidden="true">#</a> Initializing the configuration file</h2><p>A team configuration profile can be created using Zowe CLI or Zowe Explorer VS Code Extension in the following ways:</p><h3 id="zowe-cli" tabindex="-1"><a class="header-anchor" href="#zowe-cli" aria-hidden="true">#</a> Zowe CLI</h3><p>Run <code>zowe config init --global-config</code> which will prompt for a username and password once the command is issued.</p><h3 id="zowe-explorer-vs-code-extension" tabindex="-1"><a class="header-anchor" href="#zowe-explorer-vs-code-extension" aria-hidden="true">#</a> Zowe Explorer VS Code Extension</h3><ol><li><p>Click the Zowe icon on the left side bar of your VS Code window.</p></li><li><p>Click the <code>+</code> symbol in tree view of Zowe Explorer.</p></li><li><p>Select <code>Create a New Team Configuration File</code> when prompted in the input box shown.</p></li><li><p>If no workspace is opened a global configuration will be created in your <code>~/.zowe</code> directory and opened in the VS Code text editor. If a workspace is opened a following prompt will be presented for the user to select global or project level config, a project level config will be created in the top level of the workspace. After selecting the appropriate file, the file will be opened in the text editor.</p></li><li><p>Add host and port properties to the loaded file after creating the configuration file.</p></li></ol>',7),w=e("For more information on Zowe team configuration setups, view "),g=e("Example Zowe configurations"),u=e(" or Zowe CLI's documentation on "),_={href:"https://docs.zowe.org/stable/user-guide/cli-using-using-team-profiles",target:"_blank",rel:"noopener noreferrer"},m=e("Using team profiles"),x=e(".");function b(C,z){const n=o("RouterLink"),r=o("ExternalLinkIcon");return a(),l(s,null,[f,i("p",null,[w,t(n,{to:"/Docs/zowe_config_examples.html"},{default:c(()=>[g]),_:1}),u,i("a",_,[m,t(r)]),x])],64)}var E=p(h,[["render",b]]);export{E as default};
