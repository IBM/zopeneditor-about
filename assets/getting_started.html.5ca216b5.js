import{r,o as l,a as d,b as t,d as o,w as s,F as h,e,c as a}from"./app.f9f3908b.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const u={},p=t("h1",{id:"getting-started-with-ibm-z-open-editor",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#getting-started-with-ibm-z-open-editor","aria-hidden":"true"},"#"),e(" Getting started with IBM Z Open Editor")],-1),_=t("p",null,"The procedure to get started with IBM Z\xAE Open Editor is summarized as follows:",-1),m=t("li",null,"Get the latest version of Microsoft Visual Studio Code (VS Code)",-1),f=t("li",null,[t("a",{href:"#prerequisites"},"Install the prerequisites"),e(" (a Java\u2122 11 runtime environment as a minimum)")],-1),g=t("li",null,[t("a",{href:"#installing-ibm-z-open-editor"},"Install the IBM Z Open Editor VS Code extension from the VS Code Marketplace")],-1),v=e("(Optional) "),b=e("Set up integrations"),w=e(" for extended capabilities, such as installing IBM RSE API Plug-in for Zowe CLI to interact with z/OS"),y=t("h2",{id:"privacy-notice",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#privacy-notice","aria-hidden":"true"},"#"),e(" Privacy notice")],-1),S=t("p",null,"IBM Z Open Editor is provided free of charge, but we ask you to provide us feedback via the various means available including:",-1),O=e("Submit an "),k={href:"https://github.com/IBM/zopeneditor-about/issues",target:"_blank",rel:"noopener noreferrer"},I=e("issue in our GitHub repository"),x=e("Provide a review in the "),E={href:"https://marketplace.visualstudio.com/items?itemName=ibm.zopeneditor#review-details",target:"_blank",rel:"noopener noreferrer"},C=e("VS Code Marketplace"),M=t("li",null,"Keep the built-in telemetry and crash reports enabled",-1),V=e("This editor uses "),z={href:"https://code.visualstudio.com/docs/getstarted/telemetry",target:"_blank",rel:"noopener noreferrer"},B=e("Microsoft VS Code's Telemetry"),Z=e(" solution that collects anonymized telemetry data, which is used to help understand how to improve the product. While we appreciate the insights this data provides, we also know that not everyone wants to send usage data and you can disable telemetry as described in "),J={href:"https://code.visualstudio.com/docs/getstarted/telemetry#_disable-telemetry-reporting",target:"_blank",rel:"noopener noreferrer"},T=e("Disable Telemetry Reporting"),L=e(". You can also read "),A={href:"https://www.ibm.com/us-en/privacy",target:"_blank",rel:"noopener noreferrer"},j=e("IBM\xAE's General Privacy Statement"),R=e(" to learn more about our policies."),D=a('<p>This current release of IBM Z Open Editor will collect anonymous data for the following events:</p><ul><li>Activation of this VS Code extension</li><li>Opening and closing files of a specific language such as COBOL, PL/I, HLASM, REXX, JCL</li><li>Resolving of include files and assembler macros: success or failure</li><li>Using common language server operations such as code completion, references, definition, rename</li><li>Starting a user build</li><li>Deactivation of this VS Code extension</li></ul><p>Each such event is logged with the following information:</p><ul><li>Event time</li><li>Operating system and version</li><li>Country or region</li><li>Anonymous user and session ID</li><li>The type of editor used (VS Code, Eclipse Theia, or Red Hat OpenShift Dev Spaces)</li><li>Version numbers of Microsoft VS Code and IBM Z Open Editor</li><li>The name of the Z programming language used</li><li>The name of the operation performed</li><li>The type of z/OS protocol used (z/OSMF vs RSE API)</li></ul><h2 id="installing-the-ibm-z-open-editor-vs-code-extension" tabindex="-1"><a class="header-anchor" href="#installing-the-ibm-z-open-editor-vs-code-extension" aria-hidden="true">#</a> Installing the IBM Z Open Editor VS Code extension</h2><p>IBM Z Open Editor is an extension for VS Code. Before installation, ensure that you have installed and configured the prerequisites, most importantly a Java runtime as main parts of the extension are implemented in the Java programming language.</p><h3 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h3>',7),P=e("Review the "),W={href:"https://github.com/IBM/zopeneditor-about/raw/main/product-licenses/LICENSE.txt",target:"_blank",rel:"noopener noreferrer"},q=e("IBM Z Open Editor License Agreement"),H=e(" and "),X={href:"https://github.com/IBM/zopeneditor-about/raw/main/product-licenses/NOTICES.txt",target:"_blank",rel:"noopener noreferrer"},G=e("Third Party Notices"),N=e(" before downloading."),F=t("p",null,"Prerequisites for the installation:",-1),U=e("Visual Studio Code version 1.53.2 or later: IBM Z Open Editor is delivered as an extension to VS Code instead of a stand-alone editor, so you must install and configure VS Code first. We recommend always using the latest version of VS Code available, however, the minimum version required is now 1.53; it was 1.44.0 in Z Open Editor v1. If you do not have VS Code installed we recommend using the "),K={href:"https://code.visualstudio.com/docs/languages/java#_install-visual-studio-code-for-java",target:"_blank",rel:"noopener noreferrer"},Y=e("Visual Studio Code for Java Installer"),Q=e(" provided by Microsoft, because it automatically downloads and installs a Java SDK together with VS Code. (You can skip the next bullet about Java dependency if you use this option.) For information about installation and configuration of VS Code, see its "),$={href:"https://code.visualstudio.com/docs/setup/setup-overview",target:"_blank",rel:"noopener noreferrer"},ee=e("documentation"),te=e("."),oe=t("p",null,"Java SDK or JRE version 11 or later - 64 bit: The language servers included in this extension are implemented in Java. Therefore, you need to install and configure a 64-bit Java SDK or Runtime in order to start the extension successfully. We recommend installing VS Code for Java as described above, but if you already have VS Code or want to install Java yourself, then you can choose from the following options:",-1),ne=e("We highly recommend using versions 11 or 17 of "),ie={href:"https://developer.ibm.com/languages/java/semeru-runtimes/",target:"_blank",rel:"noopener noreferrer"},se=e("IBM's Semeru Runtime"),ae=e(" that can be "),re={href:"https://developer.ibm.com/languages/java/semeru-runtimes/downloads",target:"_blank",rel:"noopener noreferrer"},le=e("downloaded here"),de=e(". IBM Semeru Runtimes enable developers to build and deploy Java applications that will start quickly and deliver great performance - all while using less memory. We use it ourselves for development."),he=e("Alternatively, you can use the LTS versions 11 or 17 of "),ce={href:"https://www.oracle.com/java/technologies/downloads",target:"_blank",rel:"noopener noreferrer"},ue=e("Oracle Java"),pe=e(" or the "),_e={href:"https://adoptium.net/releases.html",target:"_blank",rel:"noopener noreferrer"},me=e("OpenJDK"),fe=e("."),ge=t("li",null,"If you are using version 1.1 or newer of Z Open Editor, you can also use just a Java Runtime Environment (JRE) as well. Older versions required a full SDK.",-1),ve=t("li",null,"Newer versions of Java should also work, but are not tested with Z Open Editor.",-1),be=t("p",null,[e("Various settings are provided to configure how the extension uses Java. See the "),t("a",{href:"#configuring-java"},"Configuring Java"),e(" section below for more details.")],-1),we=e("Zowe Explorer VS Code extension 2.4.0 or later and Zowe CLI 7.3.1 or later (optional): To make use of "),ye={href:"https://zowe.org",target:"_blank",rel:"noopener noreferrer"},Se=e("Zowe"),Oe=e(" to open and edit files directly from z/OS\xAE MVS\u2122 or USS, you need Zowe client software and host components configured. More information on setting up Zowe can be found at "),ke=e("Setting up integrations to interact with z/OS"),Ie=e(". Once installed, you can access z/OS resources as documented in "),xe=e("Interacting with z/OS"),Ee=e("."),Ce=t("blockquote",null,[t("p",null,"Note: When you install IBM Z Open Editor from the VS Code Marketplace into your VS Code, the latest version of the Zowe Explorer VS Code extension is automatically co-installed as it is a mandatory prerequisite for running Z Open Editor.")],-1),Me=e("(Optional) Git: To use the features that involve Git, you must install Git and have it available in your system path so that VS Code can display it. On Macs, Git comes out of the box. On Linux, you can install Git with your distribution's package manager. On Windows, you can get Git from "),Ve={href:"https://git-scm.com",target:"_blank",rel:"noopener noreferrer"},ze=e("https://git-scm.com"),Be=e("."),Ze=t("h3",{id:"installing-ibm-z-open-editor",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#installing-ibm-z-open-editor","aria-hidden":"true"},"#"),e(" Installing IBM Z Open Editor")],-1),Je=e("There are three ways to download and install IBM Z Open Editor. If you are planning to use or evaluate the non-warranty and unsupported version of IBM Z Open Editor then you can install it directly from the "),Te={href:"https://marketplace.visualstudio.com/items?itemName=IBM.zopeneditor",target:"_blank",rel:"noopener noreferrer"},Le=e("VS Code Marketplace"),Ae=e(" or the "),je={href:"https://open-vsx.org/extension/IBM/zopeneditor",target:"_blank",rel:"noopener noreferrer"},Re=e("Open VSX Registry"),De=e(". If you are an IBM Developer for Z Enterprise Edition or IBM Wazi customer, or are entitled to support for Z Open Editor in any other way, we recommend you download from our "),Pe={href:"https://ibm.github.io/mainframe-downloads/downloads.html",target:"_blank",rel:"noopener noreferrer"},We=e("Mainframe DEV Download site"),qe=e(". This convenient zip file download includes code signing signature files and all related software components such as the IBM Open Debug VS Code extension, the IBM RSE API Plugin for Zowe CLI and the IBM distribution of Zowe CLI (a support entitlement that is also available for purchase)."),He=t("h4",{id:"installing-ibm-z-open-editor-from-the-vs-code-marketplace",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#installing-ibm-z-open-editor-from-the-vs-code-marketplace","aria-hidden":"true"},"#"),e(" Installing IBM Z Open Editor from the VS Code marketplace")],-1),Xe=t("p",null,"When a Java runtime is installed, you can use either of the following ways to get versions of IBM Z Open Editor that are available in the VS Code Marketplace:",-1),Ge=t("li",null,[e("Start VS Code, open the Extensions view by clicking the "),t("strong",null,"Extensions"),e(" icon on the activity bar, or by clicking the menu "),t("strong",null,"File > Preferences > Extensions"),e(", and search for "),t("code",null,"IBM Z Open Editor"),e(".")],-1),Ne=e("Go to the "),Fe={href:"https://marketplace.visualstudio.com/items?itemName=ibm.zopeneditor",target:"_blank",rel:"noopener noreferrer"},Ue=e("VS Code Marketplace website that hosts IBM Z Open Editor"),Ke=e("."),Ye=t("p",null,[e("Then, click the "),t("strong",null,"Install"),e(" button and wait for the installation to complete.")],-1),Qe=t("h4",{id:"installing-ibm-z-open-editor-from-the-open-vsx-registry",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#installing-ibm-z-open-editor-from-the-open-vsx-registry","aria-hidden":"true"},"#"),e(" Installing IBM Z Open Editor from the Open VSX Registry")],-1),$e=e("If you already have or want to configure VS Code to use the alternative public or a private on-site Open VSX Registry, or if you are using a VS Code compatible editor such as VSCodium or Eclipse Theia that use it by default, then you can find and install "),et={href:"https://open-vsx.org/extension/IBM/zopeneditor",target:"_blank",rel:"noopener noreferrer"},tt=e("IBM Z Open Editor"),ot=e(" and install it from there as well. See the "),nt={href:"https://github.com/eclipse/openvsx/wiki/Using-Open-VSX-in-VS-Code",target:"_blank",rel:"noopener noreferrer"},it=e("Open VSX documentation"),st=e(" for how to configure and use this registry instead."),at=t("h4",{id:"installing-ibm-z-open-editor-from-a-vsix-file",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#installing-ibm-z-open-editor-from-a-vsix-file","aria-hidden":"true"},"#"),e(" Installing IBM Z Open Editor from a VSIX file")],-1),rt=e("If you have downloaded the "),lt={href:"https://ibm.github.io/mainframe-downloads/downloads.html#wazi",target:"_blank",rel:"noopener noreferrer"},dt=e("Mainframe DEV Center's Download for VS Code"),ht=e(", you can install it with the following steps in VS Code."),ct=a('<ol><li>Unzip the downloaded zip file.</li><li>Open the README.txt file in a text editor and follow the (optional) steps described there to verify the individual files with the provided code signing signatures.</li><li>To install the zopeneditor-&lt;version&gt;.vsix file in VS Code, click the <strong>Extensions</strong> icon in VS Code&#39;s activity bar to open the Extensions view.</li><li>Click the <strong>...</strong> icon in the Extensions view&#39;s upper-right corner to reveal a drop-down menu of more actions.</li><li>In the drop-down menu that appears, click <strong>Install from VSIX...</strong>.</li><li>Use the file picker that pops up to navigate to and select the VSIX file you downloaded, and then click <strong>Install</strong>.</li><li>The extension should be installed from the VSIX file.</li></ol><h3 id="verifying-the-installation-of-ibm-z-open-editor" tabindex="-1"><a class="header-anchor" href="#verifying-the-installation-of-ibm-z-open-editor" aria-hidden="true">#</a> Verifying the installation of IBM Z Open Editor</h3>',2),ut=e("To quickly test whether IBM Z Open Editor is installed correctly, you can open a COBOL, PL/I, HLASM, or REXX program file on your machine. If you do not have such files on your machine, you can clone the sample repository as described in the "),pt=e("Exploring the sample files"),_t=e(" section and open its COBOL, PL/I, HLASM, or REXX program files. If you see syntax highlighting on COBOL, PL/I, HLASM, or REXX code, the extension is working correctly."),mt=a('<h3 id="configuring-java" tabindex="-1"><a class="header-anchor" href="#configuring-java" aria-hidden="true">#</a> Configuring Java</h3><p>The IBM Z Open Editor Welcome page will show you if Java was found successfully. To open the Welcome page, press Ctrl+Shift+P (Windows) or Cmd+Shift+P (MacOS), and type <strong>IBM Z Open Editor: Welcome</strong>. Check the prerequisites table on the page, and click the Java section to expand.</p><p>The COBOL, PL/I, HLASM, and REXX language servers used by IBM Z Open Editor were implemented using the Java programming language. Therefore, a Java Runtime is required to be available via settings or the program path to start in VS Code. The IBM Z Open Editor extension uses VS Code Settings properties, which can be added to VS Code user settings, to configure which and how Java should be used. These settings allow you to select the specific installation of Java to pick, in case you have several installations, as well as set parameters such as how much memory you want the extension to use.</p><h4 id="selecting-the-java-installation-to-use" tabindex="-1"><a class="header-anchor" href="#selecting-the-java-installation-to-use" aria-hidden="true">#</a> Selecting the Java installation to use</h4><p>Before starting a language server, the language server clients in the IBM Z Open Editor VS Code extension try looking in different places to find a matching Java installation. They will look in the following places in this specific order and pick the first Java installation that is at least version 11 and 64-bit. If it finds a Java that fails the test against these criteria, it will continue searching.</p><ol><li>The <code>zopeneditor.JAVA_HOME</code> VS Code user setting.</li><li>The <code>java.home</code> VS Code user setting.</li><li>The <code>JAVA_HOME</code> environment variable.</li><li>The PATH defined for the environment in which Z Open Editor runs, that is, you default Windows or MacOS path.</li><li>A typical platform-specific location. For example, on MacOS, execute the <code>/usr/libexec/java_home -V</code>; on Windows, run the <code>where java.exe</code> commands to locate a valid Java installation.</li></ol>',6),ft=e("As you can see, user settings always take precedence over the other options listed, which enables you to specify a different Java version for IBM Z Open Editor than the default on your computer in case you have installed multiple versions. If you used the recommended "),gt={href:"https://code.visualstudio.com/docs/languages/java#_install-visual-studio-code-for-java",target:"_blank",rel:"noopener noreferrer"},vt=e("Visual Studio Code for Java Installer"),bt=e(", the "),wt=t("code",null,"java.home",-1),yt=e(" user setting was set by this installer."),St=a(`<p>If Java cannot be located, check the VS Code Output view&#39;s Z Open Editor tab for any error and try to fix the problem by either setting the <code>JAVA_HOME</code> environment variable or creating an entry in your VS Code user settings.</p><p>To define a user setting, use the <strong>Preferences</strong> &gt; <strong>Settings</strong> menu and either locate the setting in the graphical editor under IBM Z Open Editor or edit the setting JSON file directly by adding an entry as follows using an absolute path name to the Java installation directory.</p><p>On MacOS:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;zopeneditor.JAVA_HOME&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/Library/Java/JavaVirtualMachines/jdk11.0.15+10.jdk/Contents/Home&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>On Windows:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;zopeneditor.JAVA_HOME&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C:\\\\Program Files\\\\Java\\\\jdk11.0.15+10&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="configuring-the-java-memory-allocation" tabindex="-1"><a class="header-anchor" href="#configuring-the-java-memory-allocation" aria-hidden="true">#</a> Configuring the Java memory allocation</h4><p>By default, the language server client that starts the individual language servers for COBOL, PL/I, HLASM, or REXX allocates a maximum of 512 MB of memory for each. The language servers will consume much less memory at startup, and then allocate and free memory when parsing programs. However, they might run out of memory when parsing very large program files and reach the predefined limit. To allow allocating more memory, use the following VS Code setting to specify a new maximum value:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;zopeneditor.server.memoryAllocation&quot;</span><span class="token operator">:</span> <span class="token number">640</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Keep in mind that this value is for each language you use, so when using both COBOL and PL/I, you might end up with a consumption of double the amount specified. If you are working with smaller programs or your computer might not support such a large amount of memory, you can also try values smaller than 512 with this setting.</p><h2 id="using-ibm-z-open-editor-in-cloud-based-editors" tabindex="-1"><a class="header-anchor" href="#using-ibm-z-open-editor-in-cloud-based-editors" aria-hidden="true">#</a> Using IBM Z Open Editor in cloud-based editors</h2><p>Z Open Editor can be installed and used with various cloud or browser-based editing environments that utilize VS Code as the editor. We list a couple of examples that we test with, but there might be more configurations that the editor would also work in.</p><h3 id="red-hat-dev-spaces-for-openshift" tabindex="-1"><a class="header-anchor" href="#red-hat-dev-spaces-for-openshift" aria-hidden="true">#</a> Red Hat Dev Spaces for OpenShift</h3>`,13),Ot=e("Our recommended cloud-based development environment is Red Hat OpenShift Dev Spaces that provides a cloud-based development environment that is fully integrated into Red Hat OpenShift. In fact, we have created a customized version of Dev Spaces for z/OS development called IBM Wazi for Dev Spaces that adds Z Open Editor, Z Open Debug as well as many additional zDevOps tools into one convenient solution package that can be easily deployed with an OpenShift operator and used with your z/OS LPARs as well as "),kt={href:"https://www.ibm.com/cloud/wazi-as-a-service",target:"_blank",rel:"noopener noreferrer"},It=e("Wazi as a Service"),xt=e(" cloud-based z/OS server instances, or emulated Wazi Sandbox z/OS instances. Wazi for Dev Spaces is part of the "),Et={href:"https://www.ibm.com/products/z-and-cloud-modernization-stack",target:"_blank",rel:"noopener noreferrer"},Ct=e("IBM Z and Cloud Modernization Stack"),Mt=e(" product offering."),Vt=e("To try Z Open Editor for free in Red Hat OpenShift Dev Spaces, you can sign up for a 30-day trial of the "),zt={href:"https://developers.redhat.com/developer-sandbox",target:"_blank",rel:"noopener noreferrer"},Bt=e("OpenShift Sandbox and Red Hat Developer Sandbox"),Zt=e(". We have a "),Jt={href:"https://github.com/IBM/zopeneditor-about/tree/main/che",target:"_blank",rel:"noopener noreferrer"},Tt=e("full tutorial for signing up and using Z Open Editor here"),Lt=e("."),At=e("You can also try Wazi for Dev Spaces as part of a "),jt={href:"https://www.ibm.com/docs/en/wazi-aas/1.0.0?topic=getting-started-wazi-as-service",target:"_blank",rel:"noopener noreferrer"},Rt=e("Wazi as a Service trial as documented here"),Dt=e('. For this we also provide a detailed tutorial in our new IBM Redbook "'),Pt={href:"https://www.redbooks.ibm.com/abstracts/sg248532.html",target:"_blank",rel:"noopener noreferrer"},Wt=e("Hybrid Cloud with IBM Z"),qt=e('", Chapter 5.'),Ht=t("h3",{id:"gitpod",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#gitpod","aria-hidden":"true"},"#"),e(" GitPod")],-1),Xt={href:"https://www.gitpod.io/",target:"_blank",rel:"noopener noreferrer"},Gt=e("GitPod"),Nt=e(" is a cloud-based IDE offering by the GitPod company that can also utilize VS Code as the browser-based editor and integrate with all the major Git service providers such as GitLab, GitHub, and Bitbucket. After you sign in with an account from either of these Git services, you can easily start a workspace with Z Open Editor."),Ft=e("To try it out with our code samples repository, use this link "),Ut={href:"https://gitpod.io/#https://github.com/phaumer/zopeneditor-sample",target:"_blank",rel:"noopener noreferrer"},Kt=e("https://gitpod.io/#https://github.com/phaumer/zopeneditor-sample"),Yt=e(". The workspace will start up and load a custom image prepared by our team that even contains Zowe CLI and Ansible CLI. After the editor is up, you might have to click F1 and select the command "),Qt=t("code",null,"View: Focus Activity Bar",-1),$t=e(" to bring in the sidebar that allows you to find our sample programs. Z Open Editor was automatically installed for this workspace, so you can just open a program and start editing. Note that this is a paid-for service, but the first hours are free."),eo=t("h3",{id:"github-codespaces",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#github-codespaces","aria-hidden":"true"},"#"),e(" GitHub Codespaces")],-1),to=e("Z Open Editor can also be used with all of its capabilities in Microsoft's "),oo={href:"https://github.com/codespaces",target:"_blank",rel:"noopener noreferrer"},no=e("GitHub Codespaces"),io=e(". After your start your development environment in Codespaces, you can find and install Z Open Editor from the integrated marketplace. You can also use extension recommendations."),so=e("Try it by using this link "),ao={href:"https://github.com/codespaces/new?machine=basicLinux32gb&repo=160883618&ref=wazi-main&location=WestUs2",target:"_blank",rel:"noopener noreferrer"},ro=e("https://github.com/codespaces/new?machine=basicLinux32gb&repo=160883618&ref=wazi-main&location=WestUs2"),lo=e(" that loads our Z Open Editor sample repository. After the editor is up, click "),ho=t("strong",null,"Install",-1),co=e(' in the dialog that asks "Do you want to install the recommended extensions for this repository?". Note that this is a paid-for service, but the first hours are free.'),uo=t("h3",{id:"pure-web-based-editing-in-vscode-dev-and-github-dev",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#pure-web-based-editing-in-vscode-dev-and-github-dev","aria-hidden":"true"},"#"),e(" Pure web-based editing in vscode.dev and github.dev")],-1),po=e("Z Open Editor can be used as a pure web extension with limited capabilities when using Visual Studio Code in a browser, such as on "),_o={href:"https://vscode.dev/",target:"_blank",rel:"noopener noreferrer"},mo=e("vscode.dev"),fo=e(" or "),go={href:"https://github.dev/github/dev",target:"_blank",rel:"noopener noreferrer"},vo=e("github.dev"),bo=e("."),wo=e("Try it by going to "),yo={href:"https://vscode.dev/github/IBM/zopeneditor-sample",target:"_blank",rel:"noopener noreferrer"},So=e("https://vscode.dev/github/IBM/zopeneditor-sample"),Oo=e(" and confirming in the dialog to install the recommended extensions by clicking "),ko=t("strong",null,"Install",-1),Io=e(". No language server capabilities will be available, but syntax highlighting for all our supported languages.");function xo(Eo,Co){const i=r("RouterLink"),n=r("ExternalLinkIcon");return l(),d(h,null,[p,_,t("ol",null,[m,f,g,t("li",null,[v,o(i,{to:"/Docs/setup_integration.html"},{default:s(()=>[b]),_:1}),w])]),y,S,t("ul",null,[t("li",null,[O,t("a",k,[I,o(n)])]),t("li",null,[x,t("a",E,[C,o(n)])]),M]),t("p",null,[V,t("a",z,[B,o(n)]),Z,t("a",J,[T,o(n)]),L,t("a",A,[j,o(n)]),R]),D,t("p",null,[P,t("a",W,[q,o(n)]),H,t("a",X,[G,o(n)]),N]),F,t("ul",null,[t("li",null,[t("p",null,[U,t("a",K,[Y,o(n)]),Q,t("a",$,[ee,o(n)]),te])]),t("li",null,[oe,t("ul",null,[t("li",null,[ne,t("a",ie,[se,o(n)]),ae,t("a",re,[le,o(n)]),de]),t("li",null,[he,t("a",ce,[ue,o(n)]),pe,t("a",_e,[me,o(n)]),fe]),ge,ve]),be]),t("li",null,[t("p",null,[we,t("a",ye,[Se,o(n)]),Oe,o(i,{to:"/Docs/setup_integration.html"},{default:s(()=>[ke]),_:1}),Ie,o(i,{to:"/Docs/interact_zos_overview.html"},{default:s(()=>[xe]),_:1}),Ee]),Ce]),t("li",null,[t("p",null,[Me,t("a",Ve,[ze,o(n)]),Be])])]),Ze,t("p",null,[Je,t("a",Te,[Le,o(n)]),Ae,t("a",je,[Re,o(n)]),De,t("a",Pe,[We,o(n)]),qe]),He,Xe,t("ul",null,[Ge,t("li",null,[Ne,t("a",Fe,[Ue,o(n)]),Ke])]),Ye,Qe,t("p",null,[$e,t("a",et,[tt,o(n)]),ot,t("a",nt,[it,o(n)]),st]),at,t("p",null,[rt,t("a",lt,[dt,o(n)]),ht]),ct,t("p",null,[ut,o(i,{to:"/Docs/samplefiles.html"},{default:s(()=>[pt]),_:1}),_t]),mt,t("p",null,[ft,t("a",gt,[vt,o(n)]),bt,wt,yt]),St,t("p",null,[Ot,t("a",kt,[It,o(n)]),xt,t("a",Et,[Ct,o(n)]),Mt]),t("p",null,[Vt,t("a",zt,[Bt,o(n)]),Zt,t("a",Jt,[Tt,o(n)]),Lt]),t("p",null,[At,t("a",jt,[Rt,o(n)]),Dt,t("a",Pt,[Wt,o(n)]),qt]),Ht,t("p",null,[t("a",Xt,[Gt,o(n)]),Nt]),t("p",null,[Ft,t("a",Ut,[Kt,o(n)]),Yt,Qt,$t]),eo,t("p",null,[to,t("a",oo,[no,o(n)]),io]),t("p",null,[so,t("a",ao,[ro,o(n)]),lo,ho,co]),uo,t("p",null,[po,t("a",_o,[mo,o(n)]),fo,t("a",go,[vo,o(n)]),bo]),t("p",null,[wo,t("a",yo,[So,o(n)]),Oo,ko,Io])],64)}var zo=c(u,[["render",xo]]);export{zo as default};
