import{r,o as n,a as s,b as e,d as i,F as a,e as o,c as l}from"./app.0c4f22e3.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const h={},c=e("h1",{id:"getting-started-with-zowe-3-0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#getting-started-with-zowe-3-0","aria-hidden":"true"},"#"),o(" Getting started with Zowe 3.0")],-1),p=e("h2",{id:"overview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),o(" Overview")],-1),u=e("p",null,"Zowe Explorer v3.0.0 and Zowe CLI v8.0.0 drop support for Zowe v1 profiles in favor of the Team Configuration file for profile management. IBM Z Open Editor and IBM RSE API Plugin for Zowe CLI v5.0.0 add full support for the profile changes as well.",-1),f=e("p",null,"These configuration files replaced the old Zowe CLI v6 profiles that were storing each connection in individual files, with central files that allow defining common properties such as host names, ports, protocols only once. They also distinguish user-specific properties from properties that define generic profiles for a project managed with application source in an SCM, such as Git, that all team members share for using the same development systems. In that case, personal properties such as username and passwords would be stored for the individual users on their development clients, and all other properties in a project configuration file.",-1),g=e("p",null,"For more information regarding configuration files in Zowe CLI and Zowe Explorer v3.0.0 review",-1),w=o("The Zowe CLI overview to "),m={href:"https://docs.zowe.org/stable/user-guide/cli-using-using-team-profiles",target:"_blank",rel:"noopener noreferrer"},_=o("Using Global Profile Configuration"),v=o("Zowe Explorer's documentation on "),b={href:"https://docs.zowe.org/stable/user-guide/ze-profiles",target:"_blank",rel:"noopener noreferrer"},x=o("using configuration files"),Z=e("h2",{id:"migration-overview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#migration-overview","aria-hidden":"true"},"#"),o(" Migration overview")],-1),C=e("h3",{id:"semi-automatic-migration-of-zowe-cli-profiles",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#semi-automatic-migration-of-zowe-cli-profiles","aria-hidden":"true"},"#"),o(" Semi-automatic migration of Zowe CLI profiles")],-1),I=e("p",null,"If you have Zowe v1 profiles in place there are 2 ways to migrate those profiles into a Team Configuration file.",-1),z=o("To migrate profiles using Zowe CLI, use the "),y=e("code",null,"config convert",-1),E=o(),k={href:"https://docs.zowe.org/stable/web_help/index.html?p=zowe_config_convert-profiles",target:"_blank",rel:"noopener noreferrer"},L=o("command"),S=o("."),T=e("li",null,"To migrate profiles using Zowe Explorer, select the convert option in the VS Code modal message on startup stating that v1 profiles were found.",-1),B=e("h3",{id:"automated-migration-of-zowe-explorer-settings-in-vs-code",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#automated-migration-of-zowe-explorer-settings-in-vs-code","aria-hidden":"true"},"#"),o(" Automated migration of Zowe Explorer settings in VS Code")],-1),P=o("Zowe explorer persistent settings have been moved to VS Code local storage as of Zowe Explorer v3.0.0. For more information on Zowe Explorer and feature changes view the "),M={href:"https://github.com/zowe/zowe-explorer-vscode/wiki/v3-Changes-for-Users-and-Extenders",target:"_blank",rel:"noopener noreferrer"},V=o("Zowe Explorer Wiki"),F=o("."),R=e("h2",{id:"creating-zowe-team-configuration-files",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#creating-zowe-team-configuration-files","aria-hidden":"true"},"#"),o(" Creating Zowe Team configuration files")],-1),U=e("p",null,"To get started using Zowe v2 configuration profiles, the following steps must be performed:",-1),A=e("ol",null,[e("li",null,[e("p",null,[o("Create a configuration file by clicking the "),e("code",null,"+"),o(" button in Zowe Explorer's tree view, and select "),e("code",null,"Create a New Team Configuration File"),o(" when prompted in the input box shown.")])]),e("li",null,[e("p",null,"Update host, port and other information in the config file and save. Refresh Zowe Explorer by either clicking the button in the notification message shown after creation, alt+z, or the Zowe Explorer: Refresh Zowe Explorer command palette option.")])],-1),N=o("For more details, see the Zowe CLI docs on "),j={href:"https://docs.zowe.org/stable/user-guide/cli-using-creating-global-team-profiles/",target:"_blank",rel:"noopener noreferrer"},G=o("Creating a configuration file"),O=o("."),H=l('<h2 id="configure-your-zowe-profiles-for-ibm-user-build" tabindex="-1"><a class="header-anchor" href="#configure-your-zowe-profiles-for-ibm-user-build" aria-hidden="true">#</a> Configure your Zowe profiles for IBM User Build</h2><ol><li><p>Set the profile you wish to use for IBM User Build in your VS Code user settings or ZAPP settings in the following setting <code>zopeneditor.zowe.defaultCliProfile</code>. If the profile type <code>z/OSMF</code> is used, an SSH profile must be specified in the <code>zopeneditor.zowe.defaultSshCliProfile</code> setting.</p></li><li><p>The team configuration file should now be ready to use in IBM User Build. Test it by performing a User Build against a supported language file and verifying the Zowe v2 profile is used in the output shown.</p></li></ol><h2 id="known-issues" tabindex="-1"><a class="header-anchor" href="#known-issues" aria-hidden="true">#</a> Known issues</h2><h3 id="zowe-explorer-and-cli-plugin-schema-integration" tabindex="-1"><a class="header-anchor" href="#zowe-explorer-and-cli-plugin-schema-integration" aria-hidden="true">#</a> Zowe Explorer and CLI Plugin Schema Integration</h3><p>If you experience one of the following symptoms:</p><ul><li>RSE API CLI plugin profiles are not shown or cannot be added to a tree view in Zowe Explorer although you had added them to your configuration file and the profile even appears in the drop-down of profiles that can be added</li><li>You do not get code completion suggestions for RSE API Plugin profile properties, but just for profile properties of other type.</li></ul><p>Then you might have installed plugins and ran configuration commands in the wrong order, which is currently impacted by a known issue in Zowe Explorer that causes Zowe CLI&#39;s global config schema to not being updated correctly when a new extender registers with Zowe Explorer.</p><p>To workaround this issue, perform the following:</p><ol><li><p>(Re)Install Zowe plugins through Zowe CLI in order for your schema to be updated with <code>zowe plugins install &lt;your plugin name&gt;</code>.</p></li><li><p>Run the following command to update the schema with newly registered plugins from extenders <code>zowe config update-schemas</code>.</p></li></ol>',9),K=o("To learn more about how to install a Zowe plugin through CLI, view Zowe CLI's documentation on "),W={href:"https://docs.zowe.org/stable/user-guide/cli-installplugins/",target:"_blank",rel:"noopener noreferrer"},Y=o("installing Zowe CLI plugins");function q(D,J){const t=r("ExternalLinkIcon");return n(),s(a,null,[c,p,u,f,g,e("ul",null,[e("li",null,[w,e("a",m,[_,i(t)])]),e("li",null,[v,e("a",b,[x,i(t)])])]),Z,C,I,e("ol",null,[e("li",null,[z,y,E,e("a",k,[L,i(t)]),S]),T]),B,e("p",null,[P,e("a",M,[V,i(t)]),F]),R,U,A,e("p",null,[N,e("a",j,[G,i(t)]),O]),H,e("p",null,[K,e("a",W,[Y,i(t)])])],64)}var $=d(h,[["render",q]]);export{$ as default};
