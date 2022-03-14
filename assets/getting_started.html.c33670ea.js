import{r,o as l,a as d,b as e,d as o,w as a,F as h,e as t,c as s}from"./app.8133f2f7.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const u={},p=e("h1",{id:"getting-started-with-ibm-z-open-editor",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#getting-started-with-ibm-z-open-editor","aria-hidden":"true"},"#"),t(" Getting started with IBM Z Open Editor")],-1),m=e("p",null,"The procedure to get started with IBM Z\xAE Open Editor is summarized as follows:",-1),_=e("li",null,"Get the latest version of Microsoft Visual Studio Code (VS Code)",-1),f=e("li",null,[e("a",{href:"#prerequisites"},"Install the prerequisites"),t(" (a Java\u2122 8 runtime environment as a minimum)")],-1),g=e("li",null,[e("a",{href:"#installing-ibm-z-open-editor"},"Install the IBM Z Open Editor VS Code extension from the VS Code Marketplace")],-1),v=t("(Optional) "),y=t("Set up integrations"),b=t(" for extended capabilities, such as installing IBM RSE API Plug-in for Zowe CLI to interact with z/OS"),w=e("h2",{id:"privacy-notice",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#privacy-notice","aria-hidden":"true"},"#"),t(" Privacy notice")],-1),S=e("p",null,"IBM Z Open Editor is provided free of charge, but we ask you to provide us feedback via the various means available including:",-1),I=t("Submit an "),O={href:"https://github.com/IBM/zopeneditor-about/issues",target:"_blank",rel:"noopener noreferrer"},k=t("issue in our GitHub repository"),C=t("Provide a review in the "),x={href:"https://marketplace.visualstudio.com/items?itemName=ibm.zopeneditor#review-details",target:"_blank",rel:"noopener noreferrer"},E=t("VS Code Marketplace"),M=e("li",null,"Keep the built-in telemetry and crash reports enabled",-1),V=t("This editor uses "),B={href:"https://code.visualstudio.com/docs/getstarted/telemetry",target:"_blank",rel:"noopener noreferrer"},J=t("Microsoft VS Code's Telemetry"),Z=t(" solution that collects telemetry data, which is used to help understand how to improve the product. While we appreciate the insights this data provides, we also know that not everyone wants to send usage data and you can disable telemetry as described in "),z={href:"https://code.visualstudio.com/docs/getstarted/telemetry#_disable-telemetry-reporting",target:"_blank",rel:"noopener noreferrer"},T=t("Disable Telemetry Reporting"),L=t(". You can also read "),j={href:"https://www.ibm.com/privacy/us/en/",target:"_blank",rel:"noopener noreferrer"},A=t("IBM\xAE's General Privacy Statement"),q=t(" to learn more about our policies."),P=s('<p>This current release of IBM Z Open Editor will collect anonymous data for the following events:</p><ul><li>Activation of this VS Code extension</li><li>Opening and closing files of a specific language such as COBOL, PL/I, HLASM, REXX, JCL</li><li>Resolving of include files and assembler macros: success or failure</li><li>Using common language server operations such as code completion, references, definition, rename</li><li>Starting a user build</li><li>Deactivation of this VS Code extension</li></ul><p>Each such event is logged with the following information:</p><ul><li>Event time</li><li>Operating system and version</li><li>Country or region</li><li>Anonymous user and session ID</li><li>The type of editor VS Code or Eclipse Theia</li><li>Version numbers of Microsoft VS Code and IBM Z Open Editor</li><li>The name of the Z programming language used</li><li>The name of the operation performed</li></ul><h2 id="installing-the-ibm-z-open-editor-vs-code-extension" tabindex="-1"><a class="header-anchor" href="#installing-the-ibm-z-open-editor-vs-code-extension" aria-hidden="true">#</a> Installing the IBM Z Open Editor VS Code Extension</h2><p>IBM Z Open Editor is an extension for VS Code. Before installation, ensure that you have installed and configured the prerequisites, most importantly a Java runtime as main parts of the extension are implemented in the Java programming language.</p><h3 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h3>',7),R=t("Review the "),X={href:"https://github.com/IBM/zopeneditor-about/raw/master/product-licenses/LICENSE.txt",target:"_blank",rel:"noopener noreferrer"},D=t("IBM Z Open Editor License Agreement"),H=t(" and "),W={href:"https://github.com/IBM/zopeneditor-about/raw/master/product-licenses/NOTICES.txt",target:"_blank",rel:"noopener noreferrer"},N=t("Third Party Notices"),G=t(" before downloading."),K=e("p",null,"Prerequisites for the installation:",-1),F=t("Visual Studio Code version 1.53.2 or later: IBM Z Open Editor is delivered as an extension to VS Code instead of a stand-alone editor, so you must install and configure VS Code first. We recommend always using the latest version of VS Code available, however, the minimum version required is now 1.53; it was 1.44.0 in Z Open Editor v1. If you do not have VS Code installed we recommend using the "),U={href:"https://code.visualstudio.com/docs/languages/java#_install-visual-studio-code-for-java",target:"_blank",rel:"noopener noreferrer"},Y=t("Visual Studio Code for Java Installer"),Q=t(" provided by Microsoft, because it automatically downloads and installs a Java SDK together with VS Code. (You can skip the next bullet about Java dependency if you use this option.) For information about installation and configuration of VS Code, see its "),$={href:"https://code.visualstudio.com/docs/setup/setup-overview",target:"_blank",rel:"noopener noreferrer"},ee=t("documentation"),te=t("."),oe=e("p",null,"Java SDK or JRE version 8 or later - 64 bit: The COBOL and PL/I language servers included in this extension are implemented in Java. Therefore, you need to install and configure a 64-bit Java SDK or Runtime in order to start the extension successfully. We recommend installing VS Code for Java as described above, but if you already have VS Code or want to install Java yourself, then you can choose from the following options:",-1),ne=t("We highly recommend using versions 8, 11, or 17 of "),ie={href:"https://developer.ibm.com/languages/java/semeru-runtimes/",target:"_blank",rel:"noopener noreferrer"},ae=t("IBM's Semeru Runtime"),se=t(" that provide many performance advantages and can be "),re={href:"https://developer.ibm.com/languages/java/semeru-runtimes/downloads",target:"_blank",rel:"noopener noreferrer"},le=t("downloaded here"),de=t("."),he=t("Alternatively, you can use the LTS versions 8, 11, or 17 of "),ce={href:"https://www.oracle.com/java/technologies/downloads",target:"_blank",rel:"noopener noreferrer"},ue=t("Oracle Java"),pe=t(" or the "),me={href:"https://adoptium.net/releases.html",target:"_blank",rel:"noopener noreferrer"},_e=t("OpenJDK"),fe=t("."),ge=e("li",null,"If you are using version 1.1 or newer of Z Open Editor, you can also use just a Java Runtime Environment (JRE) as well. Older versions required a full SDK.",-1),ve=e("li",null,"Newer versions of Java should also work, but are not tested with Z Open Editor.",-1),ye=e("p",null,[t("Various settings are provided to configure how the extension uses Java. See the "),e("a",{href:"#configuring-java"},"Configuring Java"),t(" section below for more details.")],-1),be=t("Zowe Explorer VS Code extension 1.19.0 or later (required; 1.22.0 recommended) and Zowe CLI 6.33.3 or later (optional): To make use of "),we={href:"https://zowe.org",target:"_blank",rel:"noopener noreferrer"},Se=t("Zowe"),Ie=t(" to open and edit files directly from z/OS\xAE MVS\u2122 or USS, you need Zowe client software and host components configured. More information on setting up Zowe can be found at "),Oe=t("Setting up integrations to interact with z/OS"),ke=t(". Once installed, you can access z/OS resources as documented in "),Ce=t("Interacting with z/OS"),xe=t("."),Ee=e("blockquote",null,[e("p",null,"Note: When you install IBM Z Open Editor from the VS Code Marketplace into your VS Code, the latest version of the Zowe Explorer VS Code extension is automatically co-installed.")],-1),Me=t("(Optional) Git: To use the features that involve Git, you must install Git and have it available in your system path so that VS Code can display it. On Macs, Git comes out of the box. On Linux, you can install Git with your distribution's package manager. On Windows, you can get Git from "),Ve={href:"https://git-scm.com",target:"_blank",rel:"noopener noreferrer"},Be=t("https://git-scm.com"),Je=t("."),Ze=e("h3",{id:"installing-ibm-z-open-editor",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-ibm-z-open-editor","aria-hidden":"true"},"#"),t(" Installing IBM Z Open Editor")],-1),ze=t("There are three ways to download and install IBM Z Open Editor. If you are planning to use or evaluate the non-warranty and unsupported version of IBM Z Open Editor then you can install it directly from the "),Te={href:"https://marketplace.visualstudio.com/items?itemName=IBM.zopeneditor",target:"_blank",rel:"noopener noreferrer"},Le=t("VS Code Marketplace"),je=t(" or the "),Ae={href:"https://open-vsx.org/extension/IBM/zopeneditor",target:"_blank",rel:"noopener noreferrer"},qe=t("Open VSX Registry"),Pe=t(". If you are an IBM Developer for Z Enterprise Edition or IBM Wazi Developer customer, or are entitled to support for Z Open Editor in any other way, we recommend you download from our "),Re={href:"https://ibm.github.io/mainframe-downloads/downloads.html",target:"_blank",rel:"noopener noreferrer"},Xe=t("Mainframe DEV Download site"),De=t(". This convenient zip file download includes code signing signature files and all related software components such as the IBM Open Debug VS Code extension, the IBM RSE API Plugin for Zowe CLI and the IBM distribution of Zowe CLI (a support entitlement that is also available for purchase)."),He=e("h4",{id:"installing-ibm-z-open-editor-from-the-vs-code-marketplace",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-ibm-z-open-editor-from-the-vs-code-marketplace","aria-hidden":"true"},"#"),t(" Installing IBM Z Open Editor from the VS Code Marketplace")],-1),We=e("p",null,"When a Java runtime is installed, you can use either of the following ways to get versions of IBM Z Open Editor that are available in the VS Code Marketplace:",-1),Ne=e("li",null,[t("Start VS Code, open the Extensions view by clicking the "),e("strong",null,"Extensions"),t(" icon on the activity bar, or by clicking the menu "),e("strong",null,"File > Preferences > Extensions"),t(", and search for "),e("code",null,"IBM Z Open Editor"),t(".")],-1),Ge=t("Go to the "),Ke={href:"https://marketplace.visualstudio.com/items?itemName=ibm.zopeneditor",target:"_blank",rel:"noopener noreferrer"},Fe=t("VS Code Marketplace website that hosts IBM Z Open Editor"),Ue=t("."),Ye=e("p",null,[t("Then, click the "),e("strong",null,"Install"),t(" button and wait for the installation to complete.")],-1),Qe=e("h4",{id:"installing-ibm-z-open-editor-from-the-open-vsx-registry",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-ibm-z-open-editor-from-the-open-vsx-registry","aria-hidden":"true"},"#"),t(" Installing IBM Z Open Editor from the Open VSX Registry")],-1),$e=t("If you already have or want to configure VS Code to use the alternative public or a private on-site Open VSX Registry, or if you are using a VS Code compatible editor such as VSCodium or Eclipse Theia that use it by default, then you can find and install "),et={href:"https://open-vsx.org/extension/IBM/zopeneditor",target:"_blank",rel:"noopener noreferrer"},tt=t("IBM Z Open Editor"),ot=t(" and install it from there as well. See the "),nt={href:"https://github.com/eclipse/openvsx/wiki/Using-Open-VSX-in-VS-Code",target:"_blank",rel:"noopener noreferrer"},it=t("Open VSX documentation"),at=t(" for how to configure and use this registry instead."),st=e("h4",{id:"installing-ibm-z-open-editor-from-a-vsix-file",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-ibm-z-open-editor-from-a-vsix-file","aria-hidden":"true"},"#"),t(" Installing IBM Z Open Editor from a VSIX file")],-1),rt=t("If you have downloaded the "),lt={href:"https://ibm.github.io/mainframe-downloads/downloads.html#wazi",target:"_blank",rel:"noopener noreferrer"},dt=t("Mainframe DEV Center's Download for VS Code"),ht=t(", you can install it with the following steps in VS Code."),ct=s('<ol><li>Unzip the downloaded zip file.</li><li>Open the README.txt file in a text editor and follow the (optional) steps described there to verify the individual files with the provided code signing signatures.</li><li>To install the zopeneditor-&lt;version&gt;.vsix file in VS Code, click the <strong>Extensions</strong> icon in VS Code&#39;s activity bar to open the Extensions view.</li><li>Click the <strong>...</strong> icon in the Extensions view&#39;s upper-right corner to reveal a drop-down menu of more actions.</li><li>In the drop-down menu that appears, click <strong>Install from VSIX...</strong>.</li><li>Use the file picker that pops up to navigate to and select the VSIX file you downloaded, and then click <strong>Install</strong>.</li><li>The extension should be installed from the VSIX file.</li></ol><h3 id="verifying-the-installation-of-ibm-z-open-editor" tabindex="-1"><a class="header-anchor" href="#verifying-the-installation-of-ibm-z-open-editor" aria-hidden="true">#</a> Verifying the installation of IBM Z Open Editor</h3>',2),ut=t("To quickly test whether IBM Z Open Editor is installed correctly, you can open a COBOL, PL/I, HLASM, or REXX program file on your machine. If you do not have such files on your machine, you can clone the sample repository as described in the "),pt=t("Exploring the sample files"),mt=t(" section and open its COBOL, PL/I, HLASM, or REXX program files. If you see syntax highlighting on COBOL, PL/I, HLASM, or REXX code, the extension is working correctly."),_t=s('<h3 id="configuring-java" tabindex="-1"><a class="header-anchor" href="#configuring-java" aria-hidden="true">#</a> Configuring Java</h3><p>The IBM Z Open Editor Welcome page will show you if Java was found successfully. To open the Welcome page, press Ctrl+Shift+P (Windows) or Cmd+Shift+P (MacOS), and type <strong>IBM Z Open Editor: Welcome</strong>. Check the prerequisites table on the page, and click the Java section to expand.</p><p>The COBOL, PL/I, HLASM, and REXX language servers used by IBM Z Open Editor were implemented using the Java programming language. Therefore, a Java Runtime is required to be available via settings or the program path to start in VS Code. The IBM Z Open Editor extension uses VS Code Settings properties, which can be added to VS Code user settings, to configure which and how Java should be used. These settings allow you to select the specific installation of Java to pick, in case you have several installations, as well as set parameters such as how much memory you want the extension to use.</p><h4 id="selecting-the-java-installation-to-use" tabindex="-1"><a class="header-anchor" href="#selecting-the-java-installation-to-use" aria-hidden="true">#</a> Selecting the Java installation to use</h4><p>Before starting a language server, the language server clients in the IBM Z Open Editor VS Code extension try looking in different places to find a matching Java installation. They will look in the following places in this specific order and pick the first Java installation that is at least version 8 and 64 Bit. If it finds a Java that fails the test against these criteria, it will continue searching.</p><ol><li>The <code>zopeneditor.JAVA_HOME</code> VS Code user setting</li><li>The <code>java.home</code> VS Code user setting</li><li>The <code>JAVA_HOME</code> environment variable</li><li>The PATH defined for the environment in which Z Open Editor runs, that is, you default Windows or MacOS path</li><li>A typical platform-specific location. For example, on MacOS, execute the <code>/usr/libexec/java_home -V</code>; on Windows, run the <code>where java.exe</code> commands to locate a valid Java installation.</li></ol>',6),ft=t("As you can see, user settings always take precedence over the other options listed, which enables you to specify a different Java version for IBM Z Open Editor than the default on your computer in case you have installed multiple versions. If you used the recommended "),gt={href:"https://code.visualstudio.com/docs/languages/java#_install-visual-studio-code-for-java",target:"_blank",rel:"noopener noreferrer"},vt=t("Visual Studio Code for Java Installer"),yt=t(", the "),bt=e("code",null,"java.home",-1),wt=t(" user setting was set by this installer."),St=s(`<p>If Java cannot be located, check the VS Code Output view&#39;s Z Open Editor tab for any error and try to fix the problem by either setting the <code>JAVA_HOME</code> environment variable or creating an entry in your VS Code user settings.</p><p>To define a user setting, use the <strong>Preferences</strong> &gt; <strong>Settings</strong> menu and either locate the setting in the graphical editor under IBM Z Open Editor or edit the setting JSON file directly by adding an entry as follows using an absolute path name to the Java installation directory.</p><p>On MacOS:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;zopeneditor.JAVA_HOME&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>On Windows:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;zopeneditor.JAVA_HOME&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C:\\\\Program Files\\\\Java\\\\jdk1.8.0_181&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="configuring-the-java-memory-allocation" tabindex="-1"><a class="header-anchor" href="#configuring-the-java-memory-allocation" aria-hidden="true">#</a> Configuring the Java memory allocation</h4><p>By default, the language server client that starts the individual language servers for COBOL, PL/I, HLASM, or REXX allocates a maximum of 512 MB of memory for each. The language servers will consume much less memory at startup, and then allocate and free memory when parsing programs. However, they might run out of memory when parsing very large program files and reach the predefined limit. To allow allocating more memory, use the following VS Code setting to specify a new maximum value:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;zopeneditor.server.memoryAllocation&quot;</span><span class="token operator">:</span> <span class="token number">640</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Keep in mind that this value is for each language you use, so when using both COBOL and PL/I, you might end up with a consumption of double the amount specified. If you are working with smaller programs or your computer might not support such a large amount of memory, you can also try values smaller than 512 with this setting.</p>`,10);function It(Ot,kt){const i=r("RouterLink"),n=r("ExternalLinkIcon");return l(),d(h,null,[p,m,e("ol",null,[_,f,g,e("li",null,[v,o(i,{to:"/Docs/setup_integration.html"},{default:a(()=>[y]),_:1}),b])]),w,S,e("ul",null,[e("li",null,[I,e("a",O,[k,o(n)])]),e("li",null,[C,e("a",x,[E,o(n)])]),M]),e("p",null,[V,e("a",B,[J,o(n)]),Z,e("a",z,[T,o(n)]),L,e("a",j,[A,o(n)]),q]),P,e("p",null,[R,e("a",X,[D,o(n)]),H,e("a",W,[N,o(n)]),G]),K,e("ul",null,[e("li",null,[e("p",null,[F,e("a",U,[Y,o(n)]),Q,e("a",$,[ee,o(n)]),te])]),e("li",null,[oe,e("ul",null,[e("li",null,[ne,e("a",ie,[ae,o(n)]),se,e("a",re,[le,o(n)]),de]),e("li",null,[he,e("a",ce,[ue,o(n)]),pe,e("a",me,[_e,o(n)]),fe]),ge,ve]),ye]),e("li",null,[e("p",null,[be,e("a",we,[Se,o(n)]),Ie,o(i,{to:"/Docs/setup_integration.html"},{default:a(()=>[Oe]),_:1}),ke,o(i,{to:"/Docs/interact_zos_overview.html"},{default:a(()=>[Ce]),_:1}),xe]),Ee]),e("li",null,[e("p",null,[Me,e("a",Ve,[Be,o(n)]),Je])])]),Ze,e("p",null,[ze,e("a",Te,[Le,o(n)]),je,e("a",Ae,[qe,o(n)]),Pe,e("a",Re,[Xe,o(n)]),De]),He,We,e("ul",null,[Ne,e("li",null,[Ge,e("a",Ke,[Fe,o(n)]),Ue])]),Ye,Qe,e("p",null,[$e,e("a",et,[tt,o(n)]),ot,e("a",nt,[it,o(n)]),at]),st,e("p",null,[rt,e("a",lt,[dt,o(n)]),ht]),ct,e("p",null,[ut,o(i,{to:"/Docs/samplefiles.html"},{default:a(()=>[pt]),_:1}),mt]),_t,e("p",null,[ft,e("a",gt,[vt,o(n)]),yt,bt,wt]),St],64)}var Et=c(u,[["render",It]]);export{Et as default};
