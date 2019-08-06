(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{193:function(e,t,a){"use strict";a.r(t);var o=a(0),n=Object(o.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),a("p",[e._v("This guide will walk you through various installation options. It will not only show you how to install the Z Open Editor, but also prerequisites such as a Java runtime as well as recommended extensions such as the Zowe CLI and VS Code extension.")]),e._v(" "),a("h2",{attrs:{id:"installing-the-z-open-editor-for-cobol-and-pl-i-vs-code-extension"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-z-open-editor-for-cobol-and-pl-i-vs-code-extension","aria-hidden":"true"}},[e._v("#")]),e._v(" Installing the Z Open Editor for COBOL and PL/I VS Code Extension")]),e._v(" "),a("p",[e._v("The Z Open Editor for COBOL and PL/I is an extension for Visual Studio Code that you can install directly from the VS Code Marketplace, but before you can do that you need to ensure that you have installed and configured the required Prerequisites, most importantly a Java runtime as main parts of the extension have been implemented in the Java programming language.")]),e._v(" "),a("h3",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("p",[e._v("Here are the prerequisites for the installation:")]),e._v(" "),a("ul",[a("li",[a("p",[a("em",[e._v("Visual Studio Code")]),e._v(": As the Z Open Editor for COBOL and PL/I VS is not a standalone editor, but an extension to Microsoft VS Code you must install and configure "),a("a",{attrs:{href:"https://code.visualstudio.com/download",target:"_blank",rel:"noopener noreferrer"}},[e._v("VS Code"),a("OutboundLink")],1),e._v(" first. See the "),a("a",{attrs:{href:"https://code.visualstudio.com/docs/setup/setup-overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("VS Code documentation"),a("OutboundLink")],1),e._v(" for installation and configuration instructions.")])]),e._v(" "),a("li",[a("p",[a("em",[e._v("IBM JAVA version 8 or newer - 64 bit")]),e._v(": The COBOL and PL/I language servers included in this extension has been implemented in Java. Therefore you need to install and configure a 64 bit Java runtime in order to start it successfully.")]),e._v(" "),a("ul",[a("li",[e._v("The preferred Java SDK to use is "),a("a",{attrs:{href:"https://developer.ibm.com/javasdk/downloads/sdk8",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBM Java 8"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Alternatively, you can use "),a("a",{attrs:{href:"https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Oracle Java SDK 8"),a("OutboundLink")],1),e._v(" as well as any newer version of Oracle Java or "),a("a",{attrs:{href:"https://openjdk.java.net",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenJDK"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[e._v("We provide various settings for configuring how the extension should use Java as well. These are described in detail in the "),a("a",{attrs:{href:"#configuring-java"}},[e._v("Configuring Java")]),e._v(" section below. Please, contact us if you run into any issues with a specific Java version.")])]),e._v(" "),a("li",[a("p",[a("em",[e._v("Git")]),e._v(" (optional): To be able to perform some of the documentation steps and scenarios that involve Git we assume that you have it installed and available in your system path so that VS Code can see it. On Macs Git comes out of the box, for Linux you can install it with your distribution's package manager, and for Windows we recommend getting it directly from "),a("a",{attrs:{href:"https://git-scm.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://git-scm.com"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("li",[a("p",[a("em",[e._v("Zowe CLI 2.22 and the Zowe VS Code extension 0.23.2 or newer")]),e._v(" (optional): To make use of "),a("a",{attrs:{href:"https://zowe.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zowe"),a("OutboundLink")],1),e._v(" to open and edit files directly from z/OS MVS or USS you need some Zowe client software as well as z/OSMF configured. See the sections "),a("a",{attrs:{href:"#installing-zowe-cli"}},[e._v("Installing Zowe CLI")]),e._v(" and "),a("a",{attrs:{href:"#installing-the-the-zowe-vs-code-extension"}},[e._v("Installing the the Zowe VS Code Extension")]),e._v(" below for more details.")])])]),e._v(" "),a("h3",{attrs:{id:"installing-z-open-editor-from-the-vs-code-marketplace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-z-open-editor-from-the-vs-code-marketplace","aria-hidden":"true"}},[e._v("#")]),e._v(" Installing Z Open Editor from the VS Code Marketplace")]),e._v(" "),a("p",[e._v("Once a Java runtime is in place you can install the extension by either")]),e._v(" "),a("ul",[a("li",[e._v("searching for "),a("code",[e._v("Z Open Editor")]),e._v(" in the VS Code Extensions activity group (can also be opened via the menu "),a("code",[e._v("Preferences > Extensions")]),e._v(").")]),e._v(" "),a("li",[e._v("going to the "),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=ibm.zopeneditor",target:"_blank",rel:"noopener noreferrer"}},[e._v("VS Code Marketplace Web site that hosts the Z Open Editor"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[e._v("Click the "),a("code",[e._v("Install")]),e._v(" button and wait for the installation to complete.")]),e._v(" "),a("h4",{attrs:{id:"testing-the-z-open-editor-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testing-the-z-open-editor-installation","aria-hidden":"true"}},[e._v("#")]),e._v(" Testing the Z Open Editor installation")]),e._v(" "),a("p",[e._v("To quickly test that the Z Open Editor installation works correctly, either copy-paste and save a quick COBOL or PL/I program, or clone our Sample repository as described in the "),a("router-link",{attrs:{to:"/Docs/samplefiles.html"}},[e._v("Exploring the sample files")]),e._v(" section and open of its COBOL or PL/I files. If you see syntax highlighting on COBOL and PL/I code, then the extension is working correctly. Congratulations!")],1),e._v(" "),a("h2",{attrs:{id:"additional-information-about-prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-information-about-prerequisites","aria-hidden":"true"}},[e._v("#")]),e._v(" Additional information about prerequisites")]),e._v(" "),a("h3",{attrs:{id:"configuring-java"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-java","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuring Java")]),e._v(" "),a("p",[e._v("As mentioned above, the COBOL and PL/I language servers utilized by the Z Open Editor have been implemented using the Java programming language. They therefore need a Java Runtime available in the program path to start in VS Code. The Z Open Editor extension utilizes VS Code Settings properties, which can be added to VS Code workspace or user settings, to configure which and how Java should be used. These settings allow you to select the specific installation of Java to pick, in case you have several installed, as well set parameters such as how much memory you want the extension to use. You do this be editing the "),a("code",[e._v("settings.json")]),e._v(" file for your workspace or in the user preferences settings directly.")]),e._v(" "),a("h4",{attrs:{id:"selecting-the-java-installation-to-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#selecting-the-java-installation-to-use","aria-hidden":"true"}},[e._v("#")]),e._v(" Selecting the Java installation to use")]),e._v(" "),a("p",[e._v("The language server clients running in the Z Open Editor VS Code extension will try looking in different places to find a matching Java. By default if no settings have been provided for the user to the current workspace it will look for Java using the "),a("code",[e._v("JAVA_HOME")]),e._v(" environment variable. If that has not been defined it will try to find Java in the user's "),a("code",[e._v("PATH")]),e._v(". If both do not contain a valid Java installation you will see an error message the language server for either COBOL or PL/I could not be started.")]),e._v(" "),a("p",[e._v("You can then either fix the problem by providing the missing value or by defining a Settings entry in your VS Code user or workspace settings. This setting will always have precedence over the other two options describes above, i.e. it will always try to use that Java installation first. This allows you to specify a different Java for the Z Open Editor than the default of your machine.")]),e._v(" "),a("p",[e._v("The configuration for the alternative "),a("code",[e._v("JAVA_HOME")]),e._v(" will accept a path to the Java SDK, for example:")]),e._v(" "),a("p",[a("code",[e._v("On Mac")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"zopeneditor.JAVA_HOME"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home"')]),e._v("\n")])])]),a("p",[a("code",[e._v("On PC")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"zopeneditor.JAVA_HOME"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"C:\\\\Program Files\\\\Java\\\\jdk1.8.0_171"')]),e._v("\n")])])]),a("h4",{attrs:{id:"configuring-the-java-memory-allocation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-java-memory-allocation","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuring the Java memory allocation")]),e._v(" "),a("p",[e._v("By default the language server clients that start the language servers for COBOL or PL/I will try to allocate a maximum of 512MB of memory each. In other words, they will start using much less memory in the beginning, but when working on very large program files you might run out of memory; or you machine might not support such large amount of memory in the first place. To have more flexibility of how much memory the language server are allowed to allocation we provide this VS Code Setting to specify the maximum value. Remember, that when you use COBOL and PL/I that you need double the amount specified.")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"zopeneditor.server.memoryAllocation"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1024")]),e._v("\n")])])]),a("h3",{attrs:{id:"installing-zowe-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-zowe-cli","aria-hidden":"true"}},[e._v("#")]),e._v(" Installing Zowe CLI")]),e._v(" "),a("p",[e._v("You can use the Z Open Editor for COBOL and PL/I standalone on your development machine without any connection z/OS and/or copy files manually using FTP or any other means. However, for a seamless integration of z/OS we recommend looking at the "),a("a",{attrs:{href:"https://zowe.org/home/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zowe"),a("OutboundLink")],1),e._v(" Open Source project, which provides great tools that work perfectly with our extension and augment the capabilities of the Z Open Editor.")]),e._v(" "),a("p",[e._v("There are two recommended client-side packages that you should install.")]),e._v(" "),a("ul",[a("li",[e._v("The Zowe CLI, which provides you with command line tools to interact with z/OS remotely.")]),e._v(" "),a("li",[e._v("The Zowe VS Code extension, which provides you with graphical viewer to explore MVS, USS, JESS remotely. It require the Zowe CLI to be installed and configured for the current user.")])]),e._v(" "),a("p",[e._v("The prerequisites for installing the Zowe CLI and VS Code extension are")]),e._v(" "),a("ul",[a("li",[e._v("Node 10 runtime or newer")]),e._v(" "),a("li",[e._v("z/OSMF configured on your z/OS host")])]),e._v(" "),a("p",[e._v("See the Zowe documentation for details on prerequisites. Then, to install Zowe CLI follow the instructions on the "),a("a",{attrs:{href:"https://zowe.github.io/docs-site/latest/user-guide/cli-installcli.html#methods-to-install-zowe-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("Installing ZOWE CLI user guide"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Once installed, you must "),a("router-link",{attrs:{to:"/Docs/zowe_interactwithzos.html#creating-a-zowe-cli-profile"}},[e._v("create a Zowe CLI user profile")]),e._v(" that stores your personal connection information.")],1),e._v(" "),a("h3",{attrs:{id:"installing-the-the-zowe-vs-code-extension"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-the-zowe-vs-code-extension","aria-hidden":"true"}},[e._v("#")]),e._v(" Installing the the Zowe VS Code Extension")]),e._v(" "),a("p",[e._v("To install the Zowe VS Code extension you can again search in the VS Code Marketplace. Detailed installation instructions can also be found in the "),a("a",{attrs:{href:"https://zowe.github.io/docs-site/latest/user-guide/cli-vscodeplugin.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zowe documentation"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Find "),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=Zowe.vscode-extension-for-zowe#user-content-prerequisites",target:"_blank",rel:"noopener noreferrer"}},[e._v("additional documentation here in the VS Code Marketplace"),a("OutboundLink")],1),e._v(".")])])},[],!1,null,null,null);t.default=n.exports}}]);