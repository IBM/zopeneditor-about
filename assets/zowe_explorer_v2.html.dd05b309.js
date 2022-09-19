import{r,o as l,a as d,b as e,d as t,w as s,F as c,e as o,c as a}from"./app.900c543b.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";const u={},p=e("h1",{id:"getting-started-with-zowe-2-0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#getting-started-with-zowe-2-0","aria-hidden":"true"},"#"),o(" Getting started with Zowe 2.0")],-1),f=e("h2",{id:"overview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),o(" Overview")],-1),g=e("p",null,"Zowe Explorer 2.0.0 and Zowe CLI 7.0.1 add profile management support via a configuration file at a global and project level. IBM Z Open Editor and IBM RSE API Plugin for Zowe CLI version 2.0.2 add full support for the profiles as well.",-1),w=e("p",null,"These new configuration files replace the old Zowe CLI v6 profiles that were storing each connection in individual files, with central files that allow defining common properties such as host names, ports, protocols only once. They also distinguish user-specific properties from properties that define generic profiles for a project managed with application source in an SCM, such as Git, that all team members share for using the same development systems. In that case, personal properties such as username and passwords would be stored for the individual users on their development clients, and all other properties in a project configuration file.",-1),m=e("p",null,"For more information regarding configuration files in Zowe CLI and Zowe Explorer v2.0.0 review",-1),_=o("the Zowe CLI overview to "),b={href:"https://docs.zowe.org/stable/user-guide/cli-using-global-profile-configuration/",target:"_blank",rel:"noopener noreferrer"},v=o("Using Global Profile Configuration"),x=o(" and"),Z=o("Zowe Explorer's documentation on "),y={href:"https://github.com/zowe/vscode-extension-for-zowe/blob/main/docs/Early%20Access%20-%20Using%20Global%20Profile%20Configuration.md#profile-configuration",target:"_blank",rel:"noopener noreferrer"},z=o("using configuration files"),E=e("h2",{id:"using-v1-profiles-with-z-open-editor-and-zowe-explorer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#using-v1-profiles-with-z-open-editor-and-zowe-explorer","aria-hidden":"true"},"#"),o(" Using v1 profiles with Z Open Editor and Zowe Explorer")],-1),C=e("p",null,"Zowe Explorer 2.0.0, Z Open Editor, RSE API Plugin for Zowe CLI 2.0.2 still support the use of Zowe v1 profiles. Migrating to the new config file profile management is recommended, but not required.",-1),I=e("blockquote",null,[e("p",null,"Note if a new configuration file is in place v1 profile creation and use will not be available.")],-1),k=e("p",null,"In order to use v1 Zowe profiles in Z Open Editor and Zowe Explorer, the following steps must be performed:",-1),L=e("li",null,[e("p",null,[o("Issue the following command in your terminal "),e("code",null,"zowe scs revert --force"),o(".")])],-1),S=e("li",null,[e("p",null,[o("If the secure credential store plugin is installed, remove the plugin by running the following command: "),e("code",null,"zowe plugins uninstall @zowe/secure-credential-store-for-zowe-cli"),o(".")])],-1),P=o("Update any existing zowe plugins to their latest version. See "),B=o("here"),T=o(" for the instructions."),M=e("li",null,[e("p",null,"After performing steps 1 and 2, your v1 profiles should be ready to use in Zowe Explorer and Z Open Editor after upgrading.")],-1),O=e("h2",{id:"migration-overview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#migration-overview","aria-hidden":"true"},"#"),o(" Migration overview")],-1),A=e("h3",{id:"semi-automatic-migration-of-zowe-cli-profiles",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#semi-automatic-migration-of-zowe-cli-profiles","aria-hidden":"true"},"#"),o(" Semi-automatic migration of Zowe CLI profiles")],-1),R=o("If you wish to migrate from Zowe v1 profiles to a Zowe v2 config file, please refer to the following documentation on "),U=o("migrating profiles"),N=o("."),F=e("h3",{id:"automated-migration-of-zowe-explorer-settings-in-vs-code",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#automated-migration-of-zowe-explorer-settings-in-vs-code","aria-hidden":"true"},"#"),o(" Automated migration of Zowe Explorer settings in VS Code")],-1),V=o("Zowe explorer settings have been changed to a consistent format for easier settings management as of Zowe Explorer v2.0.0. The migration of these settings from your old to new ones are all handled automatically upon upgrading from v1 to v2, for more information regarding this change view Zowe Explorer's documentation on "),q={href:"https://github.com/zowe/vscode-extension-for-zowe/blob/main/docs/Early%20Access%20-%20Changes%20Affecting%20Extenders.md#migration-of-old-settings-to-new-standardized-settings-in-zowe-explorer",target:"_blank",rel:"noopener noreferrer"},j=o("migrating your old Zowe settings"),G=o("."),J=o("For more information on Zowe Explorer and feature changes view the "),Y={href:"https://docs.zowe.org/stable/getting-started/overview",target:"_blank",rel:"noopener noreferrer"},D=o("Zowe Explorer docs"),H=o("."),K=e("h2",{id:"creating-zowe-v2-team-configuration-files",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#creating-zowe-v2-team-configuration-files","aria-hidden":"true"},"#"),o(" Creating Zowe v2 Team configuration files")],-1),Q=e("p",null,"To get started using Zowe v2 configuration profiles in IBM User Build, the following steps must be performed:",-1),W=e("ol",null,[e("li",null,[e("p",null,[o("Create a configuration file by clicking the "),e("code",null,"+"),o(" button in Zowe Explorer's tree view, and select "),e("code",null,"Create a New Team Configuration File"),o(" when prompted in the input box shown.")])]),e("li",null,[e("p",null,"Update host, port and other information in the config file and save. Refresh Zowe Explorer by either clicking the button in the notification message shown after creation, alt+z, or the Zowe Explorer: Refresh Zowe Explorer command palette option.")])],-1),X=o("For more details, see the Zowe CLI docs on "),$={href:"https://docs.zowe.org/stable/user-guide/cli-using-global-profile-configuration/#initializing-global-configuration",target:"_blank",rel:"noopener noreferrer"},ee=o("Creating a configuration file"),oe=o("."),te=a('<h2 id="configure-your-zowe-v2-profiles-for-ibm-user-build" tabindex="-1"><a class="header-anchor" href="#configure-your-zowe-v2-profiles-for-ibm-user-build" aria-hidden="true">#</a> Configure your Zowe v2 profiles for IBM User Build</h2><ol><li><p>Set the profile you wish to use for IBM User Build in your VS Code user settings or ZAPP settings in the following setting <code>zopeneditor.zowe.defaultCliProfile</code>. If the profile type <code>z/OSMF</code> is used, an SSH profile must be specified in the <code>zopeneditor.zowe.defaultSshCliProfile</code> setting.</p></li><li><p>The team configuration file should now be ready to use in IBM User Build. Test it by performing a User Build against a supported language file and verifying the Zowe v2 profile is used in the output shown.</p></li></ol><h2 id="known-issues" tabindex="-1"><a class="header-anchor" href="#known-issues" aria-hidden="true">#</a> Known issues</h2><h3 id="zowe-explorer-and-cli-plugin-schema-integration" tabindex="-1"><a class="header-anchor" href="#zowe-explorer-and-cli-plugin-schema-integration" aria-hidden="true">#</a> Zowe Explorer and CLI Plugin Schema Integration</h3><p>If you experience one of the following symptoms:</p><ul><li>RSE API CLI plugin profiles are not shown or cannot be added to a tree view in Zowe Explorer although you had added them to your configuration file and the profile even appears in the drop-down of profiles that can be added</li><li>You do not get code completion suggestions for RSE API Plugin profile properties, but just for profile properties of other type.</li></ul><p>Then you might have installed plugins and ran configuration commands in the wrong order, which is currently impacted by a known issue in Zowe Explorer that causes Zowe CLI&#39;s global config schema to not being updated correctly when a new extender registers with Zowe Explorer.</p><p>To workaround this issue, perform the following:</p><ol><li><p>(Re)Install Zowe plugins through Zowe CLI in order for your schema to be updated with <code>zowe plugins install &lt;your plugin name&gt;</code>.</p></li><li><p>Run the following command to update the schema with newly registered plugins from extenders <code>zowe config update-schemas</code>.</p></li></ol>',9),ie=o("To learn more about how to install a Zowe plugin through CLI, view Zowe CLI's documentation on "),ne={href:"https://docs.zowe.org/stable/user-guide/cli-installplugins/",target:"_blank",rel:"noopener noreferrer"},re=o("installing Zowe CLI plugins"),se=a(`<h3 id="eclipse-che" tabindex="-1"><a class="header-anchor" href="#eclipse-che" aria-hidden="true">#</a> Eclipse Che</h3><p>Zowe CLI&#39;s secure credential store mechanism is not currently not supported with Eclipse Che.</p><p>You can store them either in the global configuration file in clear text, which is protected by Eclipse Che as it is stored in a user-specific Kubernetes Persistent Volume that other users cannot access. For many Cloud providers these volumes are also fully encrypted. However, depending on your Cloud setup and for extra security we currently recommend to not store them in your workspace and rather have Zowe Explorer prompt you for the password when you access profiles.</p><p>To be able to currently run Z Open Editor 2.0.2 and Zowe Explorer 2.0.0 at all in Eclipse Che you must tell Zowe CLI to disable the secure credentials mechanism completely. You do that by providing a settings files for your users in <code>~/.zowe/settings/imperative.json</code> with the following content:</p><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
  &quot;overrides&quot;: {
    &quot;CredentialManager&quot;: false
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Then make sure that the configuration files do not define any secure fields at all.</p>`,6);function ae(le,de){const i=r("ExternalLinkIcon"),n=r("RouterLink");return l(),d(c,null,[p,f,g,w,m,e("ul",null,[e("li",null,[_,e("a",b,[v,t(i)]),x]),e("li",null,[Z,e("a",y,[z,t(i)])])]),E,C,I,k,e("ol",null,[L,S,e("li",null,[e("p",null,[P,t(n,{to:"/Docs/setup_integration.html#installing-ibm-rse-api-plug-in-for-zowe-cli"},{default:s(()=>[B]),_:1}),T])]),M]),O,A,e("p",null,[R,t(n,{to:"/Docs/migrating_profiles.html"},{default:s(()=>[U]),_:1}),N]),F,e("p",null,[V,e("a",q,[j,t(i)]),G]),e("p",null,[J,e("a",Y,[D,t(i)]),H]),K,Q,W,e("p",null,[X,e("a",$,[ee,t(i)]),oe]),te,e("p",null,[ie,e("a",ne,[re,t(i)])]),se],64)}var ue=h(u,[["render",ae]]);export{ue as default};
