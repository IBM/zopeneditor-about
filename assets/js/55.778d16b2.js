(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{504:function(e,t,o){"use strict";o.r(t);var i=o(45),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"setting-up-integrations-to-interact-with-z-os"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-integrations-to-interact-with-z-os"}},[e._v("#")]),e._v(" Setting up integrations to interact with z/OS")]),e._v(" "),o("p",[e._v("You can use IBM Z Open Editor on your computer without connecting to a z/OS system and download files manually by using an FTP command or similar method. However, you can augment the capabilities of IBM Z Open Editor and enjoy a seamless integration of z/OS with IBM Remote System Explorer API (RSE API) or the "),o("a",{attrs:{href:"https://zowe.org/home/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zowe"),o("OutboundLink")],1),e._v(" open source project. The Zowe project provides great tools that work perfectly with the IBM Z Open Editor.")]),e._v(" "),o("p",[e._v("When using IBM Z Open Editor, you can choose how to interact with z/OS with regard to the following aspects:")]),e._v(" "),o("ul",[o("li",[e._v("Use RSE API or the Zowe default z/OSMF as the host component")]),e._v(" "),o("li",[e._v("Use the command line or graphical interface to interact with z/OS")])]),e._v(" "),o("p",[e._v("Next, you can use the following client-side tools based on your decision:")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Available host component")]),e._v(" "),o("th",[e._v("To use command line, install...")]),e._v(" "),o("th",[e._v("To use graphical interface, install...")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("RSE API")]),e._v(" "),o("td",[o("ul",[o("li",[e._v("Zowe CLI, and")]),o("li",[e._v("IBM RSE API Plug-in for Zowe CLI")])])]),e._v(" "),o("td",[e._v("Zowe Explorer")])]),e._v(" "),o("tr",[o("td",[e._v("z/OSMF")]),e._v(" "),o("td",[e._v("Zowe CLI")]),e._v(" "),o("td",[e._v("Zowe Explorer")])])])]),e._v(" "),o("p",[e._v("Detailed information about these tools is as follows:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("IBM RSE API Plug-in for Zowe CLI (RSE CLI plug-in) enables you to interact with z/OS remotely via command line by using RSE API instead of using the Zowe default z/OSMF. See "),o("a",{attrs:{href:"#installing-ibm-rse-api-plug-in-for-zowe-cli"}},[e._v("Installing IBM RSE API Plug-in for Zowe CLI")]),e._v(" to get started. To use RSE API on your client, see "),o("RouterLink",{attrs:{to:"/Docs/interact_zos_zowe_explorer.html#using-rse-api-in-zowe-explorer"}},[e._v("Using RSE API in Zowe Explorer")]),e._v(" and "),o("RouterLink",{attrs:{to:"/Docs/interact_zos_cli.html#using-rse-cli-plug-in-commands"}},[e._v("Using RSE CLI plug-in commands")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[e._v("Zowe CLI enables you to interact with z/OS remotely via command line. After installation, as described in "),o("a",{attrs:{href:"#installing-zowe-cli"}},[e._v("Installing Zowe CLI")]),e._v(", you must "),o("RouterLink",{attrs:{to:"/Docs/interact_zos_cli.html#creating-a-zowe-cli-z-osmf-profile"}},[e._v("create a Zowe CLI z/OSMF user profile")]),e._v(" that stores your personal connection information. To use Zowe CLI with IBM Z Open Editor, see "),o("RouterLink",{attrs:{to:"/Docs/interact_zos_cli.html#using-zowe-cli-z-osmf-commands"}},[e._v("Using Zowe CLI z/OSMF commands")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[e._v("The Zowe Explorer VS Code extension (Zowe Explorer) provides you with graphical views to explore MVS, USS, and JES remotely. When you install IBM Z Open Editor from the VS Code Marketplace into your VS Code, the latest version of the Zowe Explorer VS Code extension is automatically co-installed. For more information about its capabilities and usage, see "),o("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=Zowe.vscode-extension-for-zowe",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zowe Explorer in the VS Code Marketplace"),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"https://docs.zowe.org/stable/user-guide/ze-install.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zowe Docs"),o("OutboundLink")],1),e._v(". To use Zowe Explorer with IBM Z Open Editor, see "),o("RouterLink",{attrs:{to:"/Docs/interact_zos_zowe_explorer.html"}},[e._v("Using the Zowe Explorer views")]),e._v(".")],1)])]),e._v(" "),o("h2",{attrs:{id:"installing-zowe-cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-zowe-cli"}},[e._v("#")]),e._v(" Installing Zowe CLI")]),e._v(" "),o("p",[e._v("The prerequisites for installing Zowe CLI are as follows:")]),e._v(" "),o("ul",[o("li",[e._v("Client: Install "),o("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),o("OutboundLink")],1),e._v(" version 10, or a later version")]),e._v(" "),o("li",[e._v("Host (select one or both):\n"),o("ul",[o("li",[e._v("Configure z/OSMF if you plan to use Zowe CLI without RSE CLI plug-in")]),e._v(" "),o("li",[e._v("Install and configure "),o("a",{attrs:{href:"#installing-the-requisite-ibm-rse-api-z-os-host-component"}},[e._v("IBM Remote System Explorer API")]),e._v(" if you plan to use Zowe CLI along with RSE CLI plug-in to extend Zowe CLI")])])])]),e._v(" "),o("p",[e._v("You can install Zowe CLI using one of the methods below:")]),e._v(" "),o("ul",[o("li",[e._v("Follow the Zowe documentation on "),o("a",{attrs:{href:"https://docs.zowe.org/stable/user-guide/cli-installcli.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Installing Zowe CLI"),o("OutboundLink")],1),e._v(" to install Zowe CLI from the "),o("a",{attrs:{href:"https://www.zowe.org/download.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zowe.org"),o("OutboundLink")],1),e._v(" website or the "),o("a",{attrs:{href:"https://www.npmjs.com/package/@zowe/cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("npmjs.com"),o("OutboundLink")],1),e._v(" npm package registry.")]),e._v(" "),o("li",[e._v("Alternatively, you can get a certified IBM Zowe distribution from "),o("a",{attrs:{href:"https://ibm.github.io/mainframe-downloads/downloads.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBM Mainframe DEV"),o("OutboundLink")],1),e._v(". You can also purchase technical support for Zowe from IBM for this distribution.")])]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[e._v("IBM recommends installing Secure Credential Store Plug-in for Zowe CLI to encrypt the credentials stored in your Zowe CLI profiles. For more information, see "),o("a",{attrs:{href:"https://www.npmjs.com/package/@zowe/secure-credential-store-for-zowe-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("h2",{attrs:{id:"installing-ibm-rse-api-plug-in-for-zowe-cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-ibm-rse-api-plug-in-for-zowe-cli"}},[e._v("#")]),e._v(" Installing IBM RSE API Plug-in for Zowe CLI")]),e._v(" "),o("h3",{attrs:{id:"prerequisites"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),o("p",[e._v("Before installing IBM RSE API Plug-in for Zowe CLI on your development machine, you must install Zowe CLI 6.13 or later. For more information about installing Zowe CLI, see "),o("a",{attrs:{href:"#installing-zowe-cli"}},[e._v("Installing Zowe CLI")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"installing-the-requisite-ibm-rse-api-z-os-host-component"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-requisite-ibm-rse-api-z-os-host-component"}},[e._v("#")]),e._v(" Installing the requisite IBM RSE API z/OS host component")]),e._v(" "),o("p",[e._v("Confirm with your system administrator that the following host components are installed and configured on the z/OS host system:")]),e._v(" "),o("ul",[o("li",[e._v("The host component of z/OS Explorer 3.1.1 or 3.2, which is the prerequisite of the RSE API host component.")]),e._v(" "),o("li",[e._v("The RSE API host component, which provides a collection of REST APIs that allow a client to work with various components on the z/OS host system, including MVS data sets, z/OS UNIX files and commands, JES jobs, and more.")])]),e._v(" "),o("p",[e._v("For information about installing and configuring the RSE API host component, see "),o("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSBDYH_3.2/com.ibm.rseapi.doc/rseapi_overview.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("RSE API documentation"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[o("strong",[e._v("Note:")]),e._v(" Even if your system administrator has previously installed RSE on your z/OS, an update is needed to get the capabilities described here.")]),e._v(" "),o("h3",{attrs:{id:"installing-the-ibm-rse-api-plug-in-for-zowe-cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-ibm-rse-api-plug-in-for-zowe-cli"}},[e._v("#")]),e._v(" Installing the IBM RSE API Plug-in for Zowe CLI")]),e._v(" "),o("p",[e._v("After installing and configuring the prerequisites and the host component, follow these steps to install the RSE CLI plug-in. You can choose to download the plug-in from IBM as a code-signed archive file to install locally, or do an online installation from the public repository at npmjs.com, which is the repository from which you installed Zowe CLI itself.")]),e._v(" "),o("h4",{attrs:{id:"option-1-download-install-package-from-ibm"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#option-1-download-install-package-from-ibm"}},[e._v("#")]),e._v(" Option 1: Download install package from IBM")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Navigate to the Mainframe DEV website at "),o("a",{attrs:{href:"https://ibm.github.io/mainframe-downloads/downloads.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://ibm.github.io/mainframe-downloads/downloads.html"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("strong",[e._v("More info")]),e._v(" on the "),o("strong",[e._v("IBM Wazi Developer for Red Hat CodeReady Workspaces")]),e._v(" tab.")])]),e._v(" "),o("li",[o("p",[e._v("In the "),o("strong",[e._v("Code")]),e._v(" row, click "),o("strong",[e._v("VSCode")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("You are then redirected to the Software License Agreement page. Review the License Agreement and click "),o("strong",[e._v("I Agree")]),e._v(". You will be prompted to save or open a compressed "),o("code",[e._v(".zip")]),e._v(" file in your browser.")])]),e._v(" "),o("li",[o("p",[e._v("Save the compressed "),o("code",[e._v(".zip")]),e._v(" file to your workstation.")])]),e._v(" "),o("li",[o("p",[e._v("Extract the compressed "),o("code",[e._v(".zip")]),e._v(" file on your workstation. You will find various files in the archive including the Z Open Editor archive as well as a file named "),o("code",[e._v("ibm-rse-api-for-zowe-cli-v.r.m.tgz")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Optionally, follow the instructions in the included "),o("code",[e._v("README.txt")]),e._v(" file to verify the code signature to ensure the file was signed against a trusted IBM certificate.")])]),e._v(" "),o("li",[o("p",[e._v("Install the RSE CLI plug-in by entering the following command in the terminal:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("zowe plugins "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" path/to/download/ibm-rse-api-for-zowe-cli-v.r.m.tgz\n")])])]),o("p",[e._v("where "),o("code",[e._v("path/to/download/ibm-rse-api-for-zowe-cli-v.r.m.tgz")]),e._v(" should be defined with your own file path.")])])]),e._v(" "),o("h4",{attrs:{id:"option-2-install-from-npmjs-com"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#option-2-install-from-npmjs-com"}},[e._v("#")]),e._v(" Option 2: Install from npmjs.com")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Install the RSE CLI plug-in by entering the following command in the terminal:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("zowe plugins "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" @ibm/rse-api-for-zowe-cli\n")])])])])]),e._v(" "),o("h4",{attrs:{id:"validating-installation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#validating-installation"}},[e._v("#")]),e._v(" Validating installation")]),e._v(" "),o("p",[e._v("If the installation was successful, you can see the following message printed in the terminal:")]),e._v(" "),o("div",{staticClass:"language-terminal extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("Installed plugin name = '@ibm/ibm-rse-api-for-zowe-cli'\n\n_____ Validation results for plugin '@ibm/ibm-rse-api-for-zowe-cli' _____\nThis plugin was successfully validated. Enjoy the plugin.\n")])])]),o("h4",{attrs:{id:"getting-help"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getting-help"}},[e._v("#")]),e._v(" Getting help")]),e._v(" "),o("p",[e._v("After installing the RSE CLI plug-in, you can see all the command options of the plug-in by entering the command "),o("code",[e._v("zowe rse --help")]),e._v(" into the terminal.")]),e._v(" "),o("h2",{attrs:{id:"updating-the-ibm-rse-api-plug-in-for-zowe-cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#updating-the-ibm-rse-api-plug-in-for-zowe-cli"}},[e._v("#")]),e._v(" Updating the IBM RSE API Plug-in for Zowe CLI")]),e._v(" "),o("p",[e._v("When a new version of the RSE API Plug-in for Zowe CLI is released, you might not only need to install the latest version of the binaries, but might also need to migrate the configuration and profiles of each user account because some settings might have changed and the Zowe CLI framework currently does not support an automated migration process.")]),e._v(" "),o("p",[e._v("For example, in RSE CLI plug-in 1.1.0, basepath and protocol were stored securely in your profile files via the Zowe Secure Credential Store (SCS). With the release of RSE CLI plug-in 1.1.1, we have changed those to be stored in plain text as a convenience update for Mac users to reduce the number of prompts when accessing the Mac Keychain, which requires changes to the profile files. However, enabling this requires applying updates to the individual folders that store Zowe CLI profiles, which are described in detail further below.")]),e._v(" "),o("p",[e._v("Finally, RSE CLI plug-in 1.1.1 also offers the choice of not storing username and password in the Zowe CLI profile files at all, instead using the interactive "),o("code",[e._v("zowe auth")]),e._v(" command. Again, for proper support of this new capability, migrate to the newest versions available and update their profile files.")]),e._v(" "),o("p",[o("strong",[e._v("Note")]),e._v(": If you do not plan to use any of these new capabilities (no storage of username/password, less prompting on Macs), no migration is required. You can choose to continue using RSE API Plug-in for Zowe CLI 1.1.0, or migrate to the new binaries to version 1.1.1 without migrating your profile files. If you do want to use any of these new features, follow all the instructions below.")]),e._v(" "),o("h3",{attrs:{id:"getting-started-with-the-update"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-the-update"}},[e._v("#")]),e._v(" Getting started with the update")]),e._v(" "),o("p",[e._v("If you are using Zowe Secure Credential Store (SCS), follow the following steps to revert your secure Zowe profiles to plain-text profiles before updating RSE CLI plug-in. This will help ensure that you can continue using your existing Zowe profiles after updating. The instructions for updating RSE CLI plug-in include a step for re-securing your Zowe profiles after the update process is complete.")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Check your version of Zowe SCS with the command "),o("code",[e._v("zowe plugins list")])])]),e._v(" "),o("li",[o("p",[e._v("If the version number is below 4.1.0, run the following command to update Zowe SCS:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("zowe plugins update @zowe/secure-credential-store-for-zowe-cli@zowe-v1-lts\n")])])])]),e._v(" "),o("li",[o("p",[e._v("Revert Zowe profile files back to plain text with the command "),o("code",[e._v("zowe scs revert -f")])])])]),e._v(" "),o("h3",{attrs:{id:"update-previous-npmjs-com-install"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#update-previous-npmjs-com-install"}},[e._v("#")]),e._v(" Update previous npmjs.com install")]),e._v(" "),o("p",[e._v("If the previous installation of the RSE CLI plug-in was from npmjs.com, run the following command to update to the latest version available on npmjs.com:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("zowe plugins update @ibm/rse-api-for-zowe-cli\n")])])]),o("h3",{attrs:{id:"update-previous-tgz-install"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#update-previous-tgz-install"}},[e._v("#")]),e._v(" Update previous .tgz install")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Uninstall the older version of RSE CLI plug-in:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("If the original "),o("code",[e._v(".tgz")]),e._v(" file of the older version is still in the original location from the installation, run the following command.")]),e._v(" "),o("div",{staticClass:"language-terminal extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("zowe plugins uninstall @ibm/rse-api-for-zowe-cli\n")])])])]),e._v(" "),o("li",[o("p",[e._v("If the original "),o("code",[e._v(".tgz")]),e._v(" file is no longer in the original location from the installation, complete the following procedure:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Use the file explorer to open the "),o("code",[e._v(".zowe")]),e._v(" folder in the home directory.")])]),e._v(" "),o("li",[o("p",[e._v("Within the "),o("code",[e._v(".zowe")]),e._v(" directory, go to the "),o("code",[e._v("plugins/installed/node_modules/@ibm")]),e._v(" directory and delete the "),o("code",[e._v("rse-api-for-zowe-cli")]),e._v(" folder.")])]),e._v(" "),o("li",[o("p",[e._v("Navigate to the "),o("code",[e._v(".zowe/plugins")]),e._v(" directory, open the "),o("code",[e._v("plugins.json")]),e._v(" file in edit mode and remove the "),o("code",[e._v("@ibm/rse-api-for-zowe-cli")]),e._v(" section as shown below and save the file.")]),e._v(" "),o("div",{staticClass:"language-json extra-class"},[o("pre",{pre:!0,attrs:{class:"language-json"}},[o("code",[o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"@ibm/rse-api-for-zowe-cli"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"package"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"@ibm/rse-api-for-zowe-cli"')]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"registry"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"installation/location"')]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"version"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1.0.0"')]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])])])])])]),e._v(" "),o("li",[o("p",[e._v("Verify the uninstallation.")]),e._v(" "),o("p",[e._v("Run the command "),o("code",[e._v("zowe plugins list")]),e._v(". The list of plug-ins should no longer contain "),o("code",[e._v("@ibm/rse-api-for-zowe-cli")]),e._v(" upon a successful uninstallation.")])]),e._v(" "),o("li",[o("p",[e._v("Delete "),o("code",[e._v("rse_meta.yaml")]),e._v(" file from the "),o("code",[e._v(".zowe/profiles/rse")]),e._v(" directory.")])]),e._v(" "),o("li",[o("p",[e._v("Install the new version of RSE CLI plug-in.")]),e._v(" "),o("p",[e._v("Refer back to "),o("a",{attrs:{href:"#installing-ibm-rse-api-plug-in-for-zowe-cli"}},[e._v("Installing the IBM RSE API Plug-in for Zowe CLI")]),e._v(" to install the new "),o("code",[e._v(".tgz")]),e._v(" download of IBM RSE API Plug-in for Zowe CLI.")])]),e._v(" "),o("li",[o("p",[e._v("If using Zowe Secure Credential Store, run the command "),o("code",[e._v("zowe scs update")]),e._v(" to store username and password securely.")])]),e._v(" "),o("li",[o("p",[e._v("If you have existing RSE profiles for Zowe, run the command "),o("code",[e._v("zowe profiles set-default rse <profileName>")]),e._v(", where "),o("code",[e._v("<profileName>")]),e._v(" is the name of the profile you want to set as the default RSE profile.")])])]),e._v(" "),o("h3",{attrs:{id:"moving-from-tgz-install-to-npmjs-com-install"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#moving-from-tgz-install-to-npmjs-com-install"}},[e._v("#")]),e._v(" Moving from .tgz install to npmjs.com install")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Follow step 1 - 3 of "),o("a",{attrs:{href:"#update-previous-tgz-install"}},[e._v("Update previous .tgz install")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Run command "),o("code",[e._v("zowe plugins install @ibm/rse-api-for-zowe-cli")]),e._v(", which will pull from npmjs.com.")])])]),e._v(" "),o("h2",{attrs:{id:"setting-log-levels-for-ibm-rse-cli-plug-in"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setting-log-levels-for-ibm-rse-cli-plug-in"}},[e._v("#")]),e._v(" Setting log levels for IBM RSE CLI plug-in")]),e._v(" "),o("p",[e._v("Setting up log levels for the RSE CLI plug-in follows the same method used to set "),o("a",{attrs:{href:"https://docs.zowe.org/v1-19-x/user-guide/cli-configuringcli.html#setting-cli-log-levels",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zowe CLI log levels"),o("OutboundLink")],1),e._v(", and logs are written to the log file location "),o("code",[e._v("/.zowe/zowe/logs/zowe.log")]),e._v(". You can set the log level to adjust the level of detail that is written to the log file.")]),e._v(" "),o("p",[o("strong",[e._v("Important!")]),e._v(' Setting the log level to TRACE or ALL may result in "sensitive" data being logged.')]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Environment Variable")]),e._v(" "),o("th",[e._v("Description")]),e._v(" "),o("th",[e._v("Values")]),e._v(" "),o("th",[e._v("Default")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[o("code",[e._v("ZOWE_APP_LOG_LEVEL")])]),e._v(" "),o("td",[e._v("Zowe CLI and RSE CLI plug-in logging level")]),e._v(" "),o("td",[e._v("Log4JS log levels (OFF, TRACE, DEBUG, INFO, WARN, ERROR, FATAL)")]),e._v(" "),o("td",[e._v("DEBUG")])])])]),e._v(" "),o("h2",{attrs:{id:"single-sign-on-support-for-ibm-rse-cli-plug-in"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#single-sign-on-support-for-ibm-rse-cli-plug-in"}},[e._v("#")]),e._v(" Single sign-on support for IBM RSE CLI plug-in")]),e._v(" "),o("p",[e._v("RSE CLI plug-in has single sign-on (SSO) support using JSON Web Tokens (JWT) that are issued by the RSE API host component to the RSE profile. If the RSE API host component is configured and registered with the "),o("a",{attrs:{href:"https://docs.zowe.org/stable/user-guide/api-mediation/discovery-service-configuration.html#api-ml-configuration",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zowe API Mediation Layer (API ML)"),o("OutboundLink")],1),e._v(", the RSE CLI plug-in also supports SSO using a JWT that is issued to a "),o("a",{attrs:{href:"https://docs.zowe.org/stable/user-guide/cli-usingcli.html#base-profiles",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zowe CLI base profile"),o("OutboundLink")],1),e._v(" by the API ML. The JWTs can be used for authentication with the RSE API host component via command line operations as well as operations done within IBM Z Open Editor and Zowe Explorer's z/OS integrations.")]),e._v(" "),o("h2",{attrs:{id:"known-issues"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#known-issues"}},[e._v("#")]),e._v(" Known Issues")]),e._v(" "),o("p",[e._v("If any issues or concerns arise during installation or while working with the RSE CLI plug-in, refer to the known issues documentation for the RSE CLI plug-in "),o("RouterLink",{attrs:{to:"/Docs/knownissues.html#ibm-rse-api-plug-in-for-zowe-cli"}},[e._v("here")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);