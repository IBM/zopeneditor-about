(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{473:function(t,s,e){"use strict";e.r(s);var a=e(42),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"setting-property-groups"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-property-groups"}},[t._v("#")]),t._v(" Setting property groups")]),t._v(" "),e("p",[t._v("Property groups are required to define how the COBOL, PL/I, and HLASM editors look for copybooks and/or includes when you edit a program. They can also be used to specify language-specific compiler options. To define a property group, you can use the following JSON snippet as a starting point, and copy-paste it into the existing "),e("RouterLink",{attrs:{to:"/Docs/setting_preferences.html#accessing-settings-for-ibm-z®-open-editor"}},[t._v("JSON settings file for your VS Code Workspace or User Settings")]),t._v(". For includes resolving, replace the paths for the "),e("code",[t._v("syslib")]),t._v(" and/or "),e("code",[t._v("libraries")]),t._v(" properties with the actual relative or absolute location of your VS Code workspace directory that holds your includes.")],1),t._v(" "),e("p",[t._v("The sections below provide additional guidance on defining property groups using VS Code settings. Alternatively, if you prefer a YAML-based approach, you can define property groups in a ZAPP file instead, as documented in "),e("RouterLink",{attrs:{to:"/Docs/zapp.html"}},[t._v("Configure your applications with ZAPP files")]),t._v(".")],1),t._v(" "),e("p",[e("strong",[t._v("Example JSON snippet for defining IBM Z Open Editor property groups in VS Code's settings file:")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[t._v("   "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"zopeneditor.propertygroups"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"local-cobol-files"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"local"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"language"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cobol"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"syslib"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"COPYBOOK"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"INCLUDES"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"libraries"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MYFILE"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"locations"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n           "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"COPYLIB"')]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"local-pl1-files"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"local"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"language"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pl1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compilerOptions"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"not(!),margins(2,100)"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"syslib"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"INCLUDES"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mvs-members"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mvs"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"syslib"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TSOUSER.SAMPLE.COBCOPY"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TSOUSER.SAMPLE.PLINC"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TSOUSER.SAMPLE.ASMCOPY"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"libraries"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MYLIB"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"locations"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TSOUSER.SAMPLE.COPYLIB"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TSOUSER.SAMPLE.INCLLIB"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TSOUSER.SAMPLE.ASMCPYLB"')]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("p",[t._v("As you can see in the example above, you need to specify a unique name for each property group, which is the only mandatory property, and will help with troubleshooting. If you are using VS Code settings to define property groups, some additional general tips include:")]),t._v(" "),e("ul",[e("li",[t._v("We generally recommend defining property groups in your VS Code workspace settings, as workspace settings override user settings, and can be shared with your team members in an SCM system such as Git.")]),t._v(" "),e("li",[t._v("Ensure that you specify property groups correctly as an array of objects with the matching brackets and curly braces as shown above. When you type in these objects correctly, VS Code will give you code completion support, as well as show help information on hover.")])]),t._v(" "),e("p",[t._v("The sections below explain in-depth how to fully leverage certain properties within a property group object. For a full breakdown of all the different properties you can specify within a property group, see the "),e("RouterLink",{attrs:{to:"/Docs/reference_propertygroup.html"}},[t._v("Property groups reference page")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"language-scoping"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#language-scoping"}},[t._v("#")]),t._v(" Language scoping")]),t._v(" "),e("p",[t._v("You can optionally define a property group scoped to a specific enterprise language in case you have applications that utilize multiple languages. Use Ctrl+Space (Windows and Mac) in the VS Code editor to see the list of valid language values, which currently includes "),e("code",[t._v("cobol")]),t._v(", "),e("code",[t._v("pl1")]),t._v(", "),e("code",[t._v("hlasm")]),t._v(", and "),e("code",[t._v("jcl")]),t._v(".")]),t._v(" "),e("p",[t._v("When you specify a language, you can also define compiler options that impact the editor. For example, you can specify PL/I codepage options of mapping special characters to operators, such as a "),e("code",[t._v("!")]),t._v(" character to the NOT operator. Another use case would be to specify the margins to be used for your PL/I programs. As shown in the property group example "),e("code",[t._v("local-pl1-files")]),t._v(" above, multiple options should be listed in one string separated by commas. If you have more than one property group for a language, the strings will be concatenated. Note that the options apply globally to all files that open in that language within the scope of your workspace. Therefore, it is valid to add a property group specifically for defining global compiler options, which could consist simply of the "),e("code",[t._v("name")]),t._v(", "),e("code",[t._v("language")]),t._v(", and "),e("code",[t._v("compilerOptions")]),t._v(" properties.")]),t._v(" "),e("h2",{attrs:{id:"syslib-and-libraries"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syslib-and-libraries"}},[t._v("#")]),t._v(" Syslib and Libraries")]),t._v(" "),e("h3",{attrs:{id:"syslib"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syslib"}},[t._v("#")]),t._v(" Syslib")]),t._v(" "),e("p",[t._v("Use the "),e("code",[t._v("syslib")]),t._v(" property to resolve the following types of statements:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("COPY <COPYBOOK_NAME>")]),t._v(" (COBOL and HLASM)")]),t._v(" "),e("li",[e("code",[t._v("%INCLUDE <INCLUDE_NAME>")]),t._v(" (PL/I)")])]),t._v(" "),e("p",[t._v("For the value of "),e("code",[t._v("syslib")]),t._v(", provide an array of directory path names (for local property groups) or data set names (for mvs property groups) for IBM Z Open Editor to find includes. You can provide multiple paths to resolve includes in different folders. For local property groups, you can specify a path relative to your IDE workspace (only one workspace folder is supported for now) or an absolute path on your development machine.")]),t._v(" "),e("h3",{attrs:{id:"libraries"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#libraries"}},[t._v("#")]),t._v(" Libraries")]),t._v(" "),e("p",[t._v("Use the "),e("code",[t._v("libraries")]),t._v(" setting to resolve the following types of statements:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("COPY <COPYBOOK_NAME> IN <LIBRARY_NAME>")]),t._v(" (COBOL)")]),t._v(" "),e("li",[e("code",[t._v("%INCLUDE <LIBRARY_NAME> (<INCLUDE_NAME>)")]),t._v(" (PL/I)")])]),t._v(" "),e("p",[t._v("You can provide multiple libraries within the "),e("code",[t._v("libraries")]),t._v(" array of a property group. Each library object in the "),e("code",[t._v("libraries")]),t._v(" array consists of two properties:")]),t._v(" "),e("ul",[e("li",[t._v("The "),e("strong",[e("code",[t._v("name")])]),t._v(" property within the "),e("code",[t._v("libraries")]),t._v(" setting must match the library name used in the progam. For example, to resolve the library reference in the COBOL statement "),e("code",[t._v("COPY COPYFILE IN MYLIB")]),t._v(", the value of "),e("code",[t._v("name")]),t._v(" must be "),e("code",[t._v('"MYLIB"')]),t._v(".")]),t._v(" "),e("li",[t._v("The "),e("strong",[e("code",[t._v("locations")])]),t._v(" property is an array of folder paths you provide for the associated library name. The setting looks into the folder paths to resolve the copybook or include.")])]),t._v(" "),e("h2",{attrs:{id:"mvs-property-groups-using-zowe-cli-profiles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mvs-property-groups-using-zowe-cli-profiles"}},[t._v("#")]),t._v(" MVS property groups using Zowe CLI Profiles")]),t._v(" "),e("p",[t._v("If you have Zowe CLI configured on your development machine, property groups of type MVS will try to resolve copybooks referenced in COBOL programs using your Zowe CLI default z/OSMF profile. In this documentation, we cover the details about "),e("RouterLink",{attrs:{to:"/Docs/setup_integration.html#installing-zowe-cli"}},[t._v("Installing Zowe CLI")]),t._v(" and "),e("RouterLink",{attrs:{to:"/Docs/interact_zos_cli.html#creating-a-zowe-cli-z-osmf-profile"}},[t._v("Creating a Zowe CLI z/OSMF profile")]),t._v(".")],1),t._v(" "),e("p",[t._v("Once you have created such a profile that uses a username and password that has direct access to the MVS data sets listed in the property groups, the COBOL editor will try to look for copybooks in the "),e("code",[t._v("syslib")]),t._v(" and "),e("code",[t._v("libraries")]),t._v(" locations provided.")]),t._v(" "),e("p",[t._v("If you have defined multiple Zowe CLI profiles of the types "),e("code",[t._v("zosmf")]),t._v(" or "),e("code",[t._v("rse")]),t._v(", then the editor will use so-called default profiles to determine which of your profiles to use. If you want the editor to pick a different profile instead, you can specify the profile in the User Setting.")]),t._v(" "),e("p",[t._v("IBM Z Open Editor will by default follow these precedence rules to identify which CLI profile to use:")]),t._v(" "),e("ol",[e("li",[t._v("Use the profile specified by the "),e("code",[t._v("zopeneditor.zowe")]),t._v(" user setting.")]),t._v(" "),e("li",[t._v("If the profile above is not defined, then use the default RSE profile if available.")]),t._v(" "),e("li",[t._v("If the default RSE profile is not available, then use the default z/OSMF profile if available. If the default z/OSMF profile is not defined, errors are shown.")])]),t._v(" "),e("p",[t._v("The format of the "),e("code",[t._v("zopeneditor.zowe")]),t._v(" user setting is as follows:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"zopeneditor.zowe"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"defaultCliProfile"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rseCLI"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),e("p",[t._v("The value of "),e("code",[t._v("defaultCliProfile")]),t._v(" is the name of the CLI profile that you specified in the create statement above. If you cannot remember the names, then you can run this command to get the list of all your profiles and your default profile.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("zowe profiles list rse\n")])])]),e("h2",{attrs:{id:"quick-tips-for-setting-ibm-z-open-editor-property-groups-local-files-only"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quick-tips-for-setting-ibm-z-open-editor-property-groups-local-files-only"}},[t._v("#")]),t._v(" Quick tips for setting IBM Z Open Editor property groups (Local files only)")]),t._v(" "),e("h3",{attrs:{id:"setting-ibm-z-open-editor-property-groups-in-multi-root-workspaces"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-ibm-z-open-editor-property-groups-in-multi-root-workspaces"}},[t._v("#")]),t._v(" Setting IBM Z Open Editor property groups in multi-root workspaces")]),t._v(" "),e("p",[t._v("IBM Z Open Editor supports setting property groups for multi-root workspaces. Multi-root workspaces allow you to work with multiple project folders in Visual Studio Code. This can be very helpful when you are working on several related projects at one time. For more information, see "),e("a",{attrs:{href:"https://code.visualstudio.com/docs/editor/multi-root-workspaces",target:"_blank",rel:"noopener noreferrer"}},[t._v("multi-root workspaces documentation"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("When there are multiple projects opened in one workspace using multi-root workspaces in Visual Studio Code, each project may have its own "),e("code",[t._v(".vscode")]),t._v(" directory individually defining settings that should only apply for that project. To avoid collisions, only resource (that is, file or folder) settings are applied while you are working with multi-root workspaces. Settings that affect the entire editor are ignored. For example, two projects cannot set different zoom levels at the same time.")]),t._v(" "),e("p",[t._v("User settings are supported the same way as with single-folder workspaces, but you can also set global workspace settings that will apply to all folders in your multi-root workspace. Global workspace settings will be stored in your "),e("code",[t._v(".code-workspace")]),t._v(" file.")]),t._v(" "),e("p",[t._v("For more information about multi-root workspaces settings, see "),e("a",{attrs:{href:"https://code.visualstudio.com/docs/editor/multi-root-workspaces#_settings",target:"_blank",rel:"noopener noreferrer"}},[t._v("multi-root workspaces settings documentation"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"setting-ibm-z-open-editor-property-groups-using-glob-patterns-relative-path-and-absolute-path-local-files-only"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-ibm-z-open-editor-property-groups-using-glob-patterns-relative-path-and-absolute-path-local-files-only"}},[t._v("#")]),t._v(" Setting IBM Z Open Editor property groups using glob patterns, relative path, and absolute path (Local files only)")]),t._v(" "),e("p",[t._v("IBM Z Open Editor supports glob patterns, relative path patterns, and absolute path patterns for local files in order to provide "),e("code",[t._v("syslib")]),t._v(" locations as well as "),e("code",[t._v("locations")]),t._v(" of libraries. Below are some examples about adding property groups using glob patterns, relative path, and absolute path for local files.")]),t._v(" "),e("h3",{attrs:{id:"_1-glob-patterns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-glob-patterns"}},[t._v("#")]),t._v(" 1. Glob Patterns")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Glob patterns can have the following syntax:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("?")]),t._v(" to match on one character in a path segment")]),t._v(" "),e("li",[e("code",[t._v("*")]),t._v(" to match one or more characters in a path segment")]),t._v(" "),e("li",[e("code",[t._v("**")]),t._v(" to match any number of path segments.")])])]),t._v(" "),e("li",[e("p",[t._v("Refer to "),e("a",{attrs:{href:"https://www.npmjs.com/package/glob",target:"_blank",rel:"noopener noreferrer"}},[t._v("glob patterns documentation"),e("OutboundLink")],1),t._v(" for more information.")])]),t._v(" "),e("li",[e("p",[t._v("An example using basic glob patterns for Windows and Mac:")]),t._v(" "),e("p",[e("strong",[t._v("Windows and Mac")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"zopeneditor.propertygroups"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"local-files"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"local"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"syslib"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zopeneditor-sample/**"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zopeneditor-sample/**/COPYFILES"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"libraries"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MYFILE"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"locations"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zopeneditor-sample/**/COPY*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zopeneditor-sample/**/INCLUD?LIB"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Notes:")])]),t._v(" "),e("p",[e("strong",[t._v("Windows:")]),t._v("\nOnly use forward slashes ("),e("code",[t._v("/")]),t._v(") in glob expressions. Though windows uses either "),e("code",[t._v("/")]),t._v(" or "),e("code",[t._v("\\")]),t._v(" as its path separator, only "),e("code",[t._v("/")]),t._v(" characters are used by this glob implementation. You must use only forward slashes in glob expressions. Backslashes will always be interpreted as escape characters, not path separators.")]),t._v(" "),e("p",[e("strong",[t._v("Performance warning")]),t._v(": For performance reasons, if your specified property groups contain a glob pattern that returns more than 20 directories to search, revise the search pattern to match less in order to increase performance for finding copybooks and include files.")])])]),t._v(" "),e("h3",{attrs:{id:"_2-relative-path-patterns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-relative-path-patterns"}},[t._v("#")]),t._v(" 2. Relative path patterns")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("IBM Z Open Editor supports relative path patterns in order to provide "),e("code",[t._v("syslib")]),t._v(" locations as well as "),e("code",[t._v("locations")]),t._v(" of libraries. Consider the example below for a user who has opened a "),e("code",[t._v("zopeneditor-sample")]),t._v(" workspace:")]),t._v(" "),e("p",[e("strong",[t._v("Windows and Mac")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"zopeneditor.propertygroups"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"local-files"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"local"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"syslib"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../zopeneditor-sample/COPYBOOK"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../zopeneditor-sample/INCLUDES"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"libraries"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MYFILE"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"locations"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../zopeneditor-sample/COPYLIB"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../zopeneditor-sample/INCLUDELIB"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])]),t._v(" "),e("h3",{attrs:{id:"_3-absolute-path-patterns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-absolute-path-patterns"}},[t._v("#")]),t._v(" 3. Absolute path patterns")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("IBM Z Open Editor supports absolute path patterns in order to provide "),e("code",[t._v("syslib")]),t._v(" locations as well as "),e("code",[t._v("locations")]),t._v(" of libraries.")]),t._v(" "),e("p",[e("strong",[t._v("Windows")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"zopeneditor.propertygroups"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"local-files"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"local"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"syslib"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C:\\\\Users\\\\<username>\\\\Desktop\\\\zopeneditor-sample\\\\COPYBOOK"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C:/Users/<username>/Desktop/zopeneditor-sample/INCLUDES"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"libraries"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MYFILE"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"locations"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C:/Users/<username>/Desktop/zopeneditor-sample/COPYLIB"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C:\\\\Users\\\\<username>\\\\Deskto\\\\zopeneditor-sample\\\\INCLUDELIB"')]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("p",[e("strong",[t._v("Mac")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"zopeneditor.propertygroups"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"local-files"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"local"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"syslib"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/Users/<username>/Desktop/zopeneditor-sample/COPYBOOK"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/Users/<username>/Desktop/zopeneditor-sample/INCLUDES"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"libraries"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MYFILE"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"locations"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/Users/<username>/Desktop/zopeneditor-sample/COPYLIB"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/Users/<username>/Desktop/zopeneditor-sample/INCLUDELIB"')]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])]),t._v(" "),e("h2",{attrs:{id:"sqlca-and-sqlda-includes-copybooks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sqlca-and-sqlda-includes-copybooks"}},[t._v("#")]),t._v(" SQLCA and SQLDA Includes/Copybooks")]),t._v(" "),e("p",[t._v("A COBOL or PL/I program can be written to use the "),e("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSEPGG_11.5.0/com.ibm.db2.luw.sql.ref.doc/doc/r0002212.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SQL communication area (SQLCA)"),e("OutboundLink")],1),t._v(" and "),e("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSEPGG_11.5.0/com.ibm.db2.luw.sql.ref.doc/doc/r0001030.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SQL descriptor area (SQLDA)"),e("OutboundLink")],1),t._v(" to check return status for embedded SQL statements, or the program can use the SQL diagnostics area to check return status.")]),t._v(" "),e("p",[t._v("SQLCA and SQLDA includes are usually in-built and not added in the zopeneditor property groups. In IBM Z Open Editor, SQLCA and SQLDA copybooks are excluded from the searches because they do not exist, or because they are not of interest for development. It will not find these copybooks from the mentioned syslib or libraries in the property groups.")])])}),[],!1,null,null,null);s.default=r.exports}}]);