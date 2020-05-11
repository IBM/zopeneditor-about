(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{210:function(e,t,o){e.exports=o.p+"assets/img/rse-vsc-modified.b8694531.png"},224:function(e,t,o){"use strict";o.r(t);var r=o(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"using-rse-api-in-the-zowe-explorer-vs-code-extension"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#using-rse-api-in-the-zowe-explorer-vs-code-extension","aria-hidden":"true"}},[e._v("#")]),e._v(" Using RSE API in the Zowe Explorer VS Code extension")]),e._v(" "),r("p",[e._v("You can also use IBM RSE API Plug-in for Zowe CLI in the Zowe Explorer VS Code extension that enables you to graphically navigate and access file and job resources.")]),e._v(" "),r("h2",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),r("p",[e._v("In addition to "),r("router-link",{attrs:{to:"/Docs/rse_interactwithzos.html#prerequisites"}},[e._v("prerequisites for the plug-in")]),e._v(", the following prerequisites are required in order to use the plug-in in Zowe Explorer VS Code extension:")],1),e._v(" "),r("ol",[r("li",[r("p",[e._v("Install "),r("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VS Code"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("Install "),r("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=IBM.zopeneditor",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBM Z Open Editor VS Code Extension"),r("OutboundLink")],1),e._v(" to activate the use of the plug-in with Zowe Explorer.")])]),e._v(" "),r("li",[r("p",[e._v("Install "),r("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=Zowe.vscode-extension-for-zowe",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zowe Explorer VS Code Extension"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("Create an "),r("router-link",{attrs:{to:"/Docs/rse_interactwithzos.html#creating-an-rse-profile"}},[e._v("RSE profile")]),e._v(".")],1),e._v(" "),r("div",{staticClass:"warning custom-block"},[r("p",[e._v("Currently, you can only use the terminal command to create RSE profiles. Using the GUI in Zowe Explorer to create RSE profiles is not supported yet.")])])])]),e._v(" "),r("p",[e._v("After installation, select the Zowe icon from the icon menu on the left side of VS Code to open the Zowe extension, and you will see the views for Data Sets, Jobs, and USS.")]),e._v(" "),r("h2",{attrs:{id:"validating-rse-api-support-for-zowe-explorer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#validating-rse-api-support-for-zowe-explorer","aria-hidden":"true"}},[e._v("#")]),e._v(" Validating RSE API support for Zowe Explorer")]),e._v(" "),r("p",[e._v("If RSE API support is available, the following message pops up in the lower right corner of the VS Code screen:")]),e._v(" "),r("p",[r("img",{attrs:{src:o(210),alt:"Modified for IBM Remote System Explorer API(RSEAPI) support"}})]),e._v(" "),r("h2",{attrs:{id:"setting-up-and-using-rse-profiles"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-and-using-rse-profiles","aria-hidden":"true"}},[e._v("#")]),e._v(" Setting up and using RSE profiles")]),e._v(" "),r("p",[e._v("When you install IBM Z Open Editor from the VS Code marketplace into your VS Code, the latest version of the Zowe Explorer VS Code extension is automatically co-installed. To use IBM Z Open Editor and Zowe Explorer with RSE profiles, you need to manually create an RSE profile.")]),e._v(" "),r("h3",{attrs:{id:"setting-up-and-using-rse-profiles-in-zowe-explorer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-and-using-rse-profiles-in-zowe-explorer","aria-hidden":"true"}},[e._v("#")]),e._v(" Setting up and using RSE profiles in Zowe Explorer")]),e._v(" "),r("p",[e._v("After you create a profile, follow these steps to add the profile in Zowe Explorer:")]),e._v(" "),r("ol",[r("li",[e._v("Switch to the Zowe Explorer Activity Group in VS Code.")]),e._v(" "),r("li",[e._v("Click the "),r("strong",[e._v("Refresh")]),e._v(" icon in any of the three explorer views: Data Sets, USS, or Jobs.")]),e._v(" "),r("li",[e._v("Click the "),r("strong",[e._v("+")]),e._v(" icon and select the RSE profile by its name.")])]),e._v(" "),r("p",[e._v("Then, you can use the RSE profile as a connection as you did with a z/OSMF profile. All the same operations are available with RSE API.")]),e._v(" "),r("h3",{attrs:{id:"setting-up-and-using-rse-profiles-in-ibm-z-open-editor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-and-using-rse-profiles-in-ibm-z-open-editor","aria-hidden":"true"}},[e._v("#")]),e._v(" Setting up and using RSE profiles in IBM Z Open Editor")]),e._v(" "),r("p",[e._v("You can use RSE profiles for IBM Z Open Editor operations. For example, if you edit a COBOL program and have defined "),r("router-link",{attrs:{to:"/Docs/setting_propertygroup.html"}},[e._v("Property Groups")]),e._v(" to dynamically retrieve contents of copybooks from MVS, then you can use your RSE profile for that access operation instead of the default z/OSMF CLI profile. IBM Z Open Editor will by default follow these precedence rules to identify which CLI profile to use for this:")],1),e._v(" "),r("ol",[r("li",[e._v("Use the profile specified by the "),r("code",[e._v("zopeneditor.zowe")]),e._v(" user setting.")]),e._v(" "),r("li",[e._v("If the profile above is not defined, then use the default RSE profile if available.")]),e._v(" "),r("li",[e._v("If the default RSE profile is not available, then use the default z/OSMF profile if available. If the default z/OSMF profile is not defined, errors are shown.")])]),e._v(" "),r("p",[e._v("The format of the "),r("code",[e._v("zopeneditor.zowe")]),e._v(" user setting is as follows:")]),e._v(" "),r("div",{staticClass:"language-json extra-class"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"zopeneditor.zowe"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"defaultCliProfile"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"rseCLI"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n")])])]),r("p",[e._v("The value of "),r("code",[e._v("defaultCliProfile")]),e._v(" is the name of the CLI profile that you specified in the create statement above. If you cannot remember the names, then you can run this command to get the list of all your profiles and your default profile.")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("zowe profiles list rse\n")])])]),r("h2",{attrs:{id:"interacting-with-z-os"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#interacting-with-z-os","aria-hidden":"true"}},[e._v("#")]),e._v(" Interacting with z/OS")]),e._v(" "),r("p",[e._v("When you connect to the host with an RSE profile, you can view a tree list of data sets, members in the DATA SETS view, UNIX files and directories in the UNIX SYSTEM SERVICES (USS) view, and jobs with spool files in the JOBS view.")]),e._v(" "),r("p",[e._v("In the Zowe Explorer Views, you can perform the following tasks:")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Create, edit, save, rename, delete data sets, members, UNIX files, and directories on the host. For instance:")]),e._v(" "),r("p",[r("img",{attrs:{src:o(73),alt:"Creating a New Data Set"}})]),e._v(" "),r("p",[e._v("For more information about managing data sets, see "),r("router-link",{attrs:{to:"/Docs/zowe_datasets.html"}},[e._v("Manipulating data sets")]),e._v(".")],1)]),e._v(" "),r("li",[r("p",[e._v("Upload local files as a partitioned data set member or as a sequential data set.")])]),e._v(" "),r("li",[r("p",[e._v("Submit JCL data sets or members as a job. Delete jobs. Download job spool files from the host to a local directory, and view them in the text editor.")])])])])}),[],!1,null,null,null);t.default=s.exports},73:function(e,t,o){e.exports=o.p+"assets/img/rse-create-ds.c76fb114.gif"}}]);