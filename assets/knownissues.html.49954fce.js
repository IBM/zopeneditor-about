import{r as a,o as l,a as d,b as e,d as i,w as r,F as c,e as o,c as n}from"./app.0c4f22e3.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";const u={},p=e("h1",{id:"known-issues-and-limitations",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#known-issues-and-limitations","aria-hidden":"true"},"#"),o(" Known issues and limitations")],-1),f=o("The IBM Z\xAE Open Editor extension has some known issues and limitations. This page provides the status of the current release. Also review the list of open issues and enhancement requests in our "),m={href:"https://github.com/IBM/zopeneditor-about/issues",target:"_blank",rel:"noopener noreferrer"},g=o("Github repository"),_=o(". It might list issues that are not yet documented here."),b=n('<h2 id="javatm-17-64-bit-jre-or-sdk-required" tabindex="-1"><a class="header-anchor" href="#javatm-17-64-bit-jre-or-sdk-required" aria-hidden="true">#</a> Java\u2122 17 64-Bit JRE or SDK required</h2><p>If the right version of Java cannot be found in the current user&#39;s path or if no <code>JAVA_HOME</code> environment variable was defined, you might see error messages in the Output view of VS Code. Such errors could also be caused by other reasons such as not enough free memory for Java on your system.</p><p>Go through all the steps described in the <a href="./getting_started">Getting Started</a> page for configuring Java to try out different options.</p><h3 id="java-not-found-on-linux" tabindex="-1"><a class="header-anchor" href="#java-not-found-on-linux" aria-hidden="true">#</a> Java not found on Linux</h3><p>Z Open Editor starts by searching for Java in the following locations:</p><ul><li>The path specified by the <code>zopeneditor.JAVA_HOME</code> value in your VS Code settings.</li><li>The path specified by the <code>java.jdt.ls.java.home</code> value in your VS Code settings.</li><li>The path specified by your <code>JAVA_HOME</code> environment variable.</li></ul><p>After searching these locations, Z Open Editor will run commands to try and find Java on your operating system.</p>',7),w=o("If your installation is not found and you see errors in the Welcome page, try specifying a path to your Java for your "),y=e("code",null,"zopeneditor.JAVA_HOME",-1),v=o(" or "),S=e("code",null,"java.jdt.ls.java.home",-1),k=o(" value in your VS Code settings or setting your system's "),C=e("code",null,"JAVA_HOME",-1),x=o(" environment variable. Ensure that you exclude the "),I=e("code",null,"bin/java",-1),L=o(" directory from your path. For more information, see "),O=o("Configuring Java"),E=o("."),B=n('<h2 id="resetting-language-servers-or-vs-code" tabindex="-1"><a class="header-anchor" href="#resetting-language-servers-or-vs-code" aria-hidden="true">#</a> Resetting Language Servers or VS Code</h2><p>It might happen that the language servers provided by IBM Z Open Editor become inconsistent and do not behave as expected. For example, a language server might stop reporting syntax errors, or it cannot resolve copybooks anymore. Instead of quitting and restarting VS Code completely, you can try pressing the F1 key and type the following commands to reset one or more language servers.</p><ul><li><code>IBM Z Open Editor: Pause the COBOL Language Server</code>: Stops the COBOL language server and restarts it when you open a COBOL file again.</li><li><code>IBM Z Open Editor: Pause the PL/I Language Server</code>: Stops the PL/I language server and restarts it when you open a PL/I file again.</li><li><code>IBM Z Open Editor: Pause the Assembler Language Server</code>: Stops the HLASM language server and restarts it when you open an HLASM file again.</li><li><code>IBM Z Open Editor: Pause the REXX Language Server</code>: Stops the REXX language server and restarts it when you open a REXX file again.</li><li><code>IBM Z Open Editor: Pause the JCL Language Server</code>: Stops the JCL language server and restarts it when you open a JCL file again.</li><li><code>IBM Z Open Editor: Reload Zowe Profiles</code>: If you have changed the password of your Zowe CLI profile that is used to load your remote include files such as copybooks, you need to run this command to refresh the Zowe profile.</li><li><code>Developer: Reload Window</code>: Restarts the current VS Code window and all of its extensions. If you have many editor windows open at the same time, you can use this command to reset just the current window in which you run the command.</li></ul><h2 id="limitations-for-visual-studio-code-multi-root-workspaces" tabindex="-1"><a class="header-anchor" href="#limitations-for-visual-studio-code-multi-root-workspaces" aria-hidden="true">#</a> Limitations for Visual Studio Code Multi-Root Workspaces</h2>',4),z=o("IBM Z\xAE Open Editor supports "),A={href:"https://code.visualstudio.com/docs/editor/multi-root-workspaces",target:"_blank",rel:"noopener noreferrer"},P=o("VS Code multi-root workspaces"),M=o(", but there are some limits or special rules on how ZAPP files and settings are used in a multi-root workspace:"),T=e("li",null,[o("Property Groups: the multi-root workspace can load multiple zapp files located in the top-dir of each workspace. We search for property groups in each of these zapp files in the order the workspaces are listed in the "),e("code",null,".code-workspace .code-workspace"),o(" file when resolving include files.")],-1),R=e("li",null,"For user build the DBB ZAPP profile located in the workspace of the program being built is being used. The application-conf files (additional files listed in zapp profile) also need to be in the root of the workspace with the program.",-1),N=o("For "),D={href:"https://www.ibm.com/docs/en/developer-for-zos/16.0?topic=code-building-cobol-pli-hlasm-programs-user-build",target:"_blank",rel:"noopener noreferrer"},Z=o("Z Open Editor's user build"),F=o(", local copybooks and include files that need to be uploaded to z/OS UNIX System Services for build can be located in any other workspace of the multi-root workspace. The location of the copybooks and include files must be specified in the ZAPP file of the workspace in which these include files are located in. A ZAPP file cannot provide property groups that point to locations outside of its workspace. The exception would be using absolute path names, but those might break the ability to share the ZAPP file with other team members as they might have their files in different locations."),H=e("h2",{id:"limitations-of-using-z-open-editor-with-eclipse-che-and-red-hat-openshift-dev-spaces",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#limitations-of-using-z-open-editor-with-eclipse-che-and-red-hat-openshift-dev-spaces","aria-hidden":"true"},"#"),o(" Limitations of using Z Open Editor with Eclipse Che and Red Hat OpenShift Dev Spaces")],-1),X=e("p",null,"Almost all capabilities described in this documentation are available when you use IBM Z Open Editor with Eclipse Che or Red Hat OpenShift Dev Spaces. However, note the following limitations.",-1),j=o("Zowe CLI secure credentials are currently not supported with Z Open Editor on Eclipse Che and Red Hat OpenShift Dev Spaces. The Zowe Explorer setting "),J=e("code",null,'"zowe.security.secureCredentialsEnabled": false',-1),V=o(" must be used in these environments. See the section "),U=o("Setting up integrations to interact with z/OS > Managing credentials unsecured"),q=o("."),W=e("li",null,[e("p",null,[o("Path names specified for property groups in ZAPP files are always case-sensitive, even if the setting "),e("code",null,'"zopeneditor.enforceCaseSensitiveIncludeFileNames"'),o(" is set to "),e("code",null,"false"),o(". However, this setting works for the file names that get matched in the folders that match the property groups.")])],-1),G=n('<h2 id="language-specific-features-and-limitations" tabindex="-1"><a class="header-anchor" href="#language-specific-features-and-limitations" aria-hidden="true">#</a> Language-specific features and limitations</h2><h3 id="cobol" tabindex="-1"><a class="header-anchor" href="#cobol" aria-hidden="true">#</a> COBOL</h3><p>The following lists show the implementation status of the COBOL language server. Use these lists to check that the feature that you are looking for was implemented or is regarded as a known issue. Let us know if you have any additional issues.</p><h4 id="enabled-features-of-cobol-program-files" tabindex="-1"><a class="header-anchor" href="#enabled-features-of-cobol-program-files" aria-hidden="true">#</a> Enabled features of COBOL program files</h4>',4),K=n("<li>Syntax highlighting</li><li>Syntax errors <ul><li>Errors are translated for different locales</li></ul></li><li>Document highlighting</li><li>Hover</li><li>Go to declaration</li><li>Find all references in file and across the multiple files</li><li>Peek references in file and across the multiple files</li><li>Rename symbol in file and across the multiple files</li><li>Outline view</li><li>Code completion</li><li>Snippets</li><li>Copybook resolving and copybook hover support</li><li>Document link support to open copybook by using Ctrl+Click (Windows) or Cmd+Click (Mac)</li><li>Embedded languages support such as SQL, CICS\xAE, and DLI</li><li>Renumber and Unnumber sequence numbers</li><li>Syntax highlighting support for Sequence Numbers (1-6 and 73-80 columns)</li>",16),Y=o("Latest COBOL 6.4 PTF language support, up to and including the "),Q={href:"https://community.ibm.com/community/user/ibmz-and-linuxone/blogs/dan-zhang1/2024/02/26/february-2024-documentation-refresh-for-enterprise",target:"_blank",rel:"noopener noreferrer"},$=o("February 2024 PTF"),ee=o("."),oe={href:"https://www.ibm.com/docs/en/cics-ts/beta?topic=whats-new",target:"_blank",rel:"noopener noreferrer"},ie=o("Embedded Language Support for CICS 6.2 in COBOL"),te=o("COBOL "),ne={href:"https://www.ibm.com/docs/en/cobol-zos/6.4?topic=applications-using-user-defined-functions",target:"_blank",rel:"noopener noreferrer"},se=o("User defined functions"),re=o(" support including "),ae={href:"https://www.ibm.com/docs/en/cobol-zos/6.4?topic=applications-using-function-prototypes",target:"_blank",rel:"noopener noreferrer"},le=o("function prototypes"),de=e("li",null,"Code folding",-1),ce=e("h4",{id:"limitations-of-cobol-program-files",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#limitations-of-cobol-program-files","aria-hidden":"true"},"#"),o(" Limitations of COBOL program files")],-1),he=o("False unreachable code warnings: In some cases, the editor incorrectly reports that code is unreachable when more than one entry point is present. One such case is reported in "),ue={href:"https://github.com/IBM/zopeneditor-about/issues/212",target:"_blank",rel:"noopener noreferrer"},pe=o("this issue"),fe=o(". You can use a user setting to disable warnings for unreachable code completely as described in "),me=o("Enabling and disabling unreachable COBOL code warnings"),ge=o("."),_e=o("Incomplete support for conditional compilation: Our community has reported various "),be={href:"https://github.com/IBM/zopeneditor-about/issues",target:"_blank",rel:"noopener noreferrer"},we=o("issues"),ye=o(" when programs contain conditional compilation statements. These types of programs are currently not fully supported."),ve=e("li",null,[o("For COBOL programs that load a large number of copybooks from MVS, downloading can take a long time. Consider as a workaround the user setting "),e("code",null,'"zowe.files.temporaryDownloadsFolder.cleanup": false'),o(" that will not re-download the files between editing sessions.")],-1),Se=n('<h4 id="enabled-features-of-cobol-copybook-files" tabindex="-1"><a class="header-anchor" href="#enabled-features-of-cobol-copybook-files" aria-hidden="true">#</a> Enabled features of COBOL copybook files</h4><ul><li>Syntax errors</li><li>Find all references in file</li><li>Peek references in file</li><li>Rename symbol in file</li><li>Outline view</li><li>Syntax highlighting</li><li>Code completion</li><li>Snippets</li><li>Embedded languages support such as SQL, CICS, and DLI</li></ul><h4 id="limitations-of-cobol-copybook-files" tabindex="-1"><a class="header-anchor" href="#limitations-of-cobol-copybook-files" aria-hidden="true">#</a> Limitations of COBOL copybook files</h4><ul><li>No support for Hover</li><li>No support for Go to declaration</li><li>No support for Find all references across the multiple files</li><li>No support for Peek references across the multiple files</li><li>No support for Rename symbol from a copybook to the files that include it</li></ul><h3 id="pl-i" tabindex="-1"><a class="header-anchor" href="#pl-i" aria-hidden="true">#</a> PL/I</h3><p>The following lists show the implementation status of the PL/I language server. Use these lists to check that the feature that you are looking for was implemented or is regarded as a known issue. Let us know if you have any additional issues.</p><h4 id="enabled-features-of-pl-i-program-files" tabindex="-1"><a class="header-anchor" href="#enabled-features-of-pl-i-program-files" aria-hidden="true">#</a> Enabled features of PL/I program files</h4>',7),ke=n("<li>Syntax highlighting</li><li>Syntax errors <ul><li>Errors are translated for different locales</li></ul></li><li>Document highlighting</li><li>Hover</li><li>Go to declaration</li><li>Find all references in file and across the multiple files</li><li>Peek references in file and across the multiple files</li><li>Rename symbol in file and across the multiple files</li><li>Outline view</li><li>Code completion</li><li>Include file resolving and include file hover support</li><li>Document link support to open include file by using Ctrl+Click (Windows) or Cmd+Click (Mac)</li><li>Embedded languages support such as SQL, CICS, and DLI</li>",13),Ce=e("code",null,"*process",-1),xe=o(" (or "),Ie=e("code",null,"%process",-1),Le=o(") compile options statements, such as: "),Oe=e("li",null,[e("code",null,"*process source MARGINS(2,120);")],-1),Ee=e("li",null,[e("code",null,"*process SYSTEM(CIS, DB2);")],-1),Be=e("li",null,[e("code",null,"*process LIST TEST;")],-1),ze=o("Syntax and other supported compiler options can be found in: "),Ae={href:"https://www.ibm.com/docs/en/epfz/5.3?topic=directives-process-directive",target:"_blank",rel:"noopener noreferrer"},Pe=o("%PROCESS directive"),Me={href:"https://www.ibm.com/docs/en/epfz/5.3?topic=facilities-compile-time-option-descriptions",target:"_blank",rel:"noopener noreferrer"},Te=o("Compile-time option descriptions"),Re=o("Commenting and uncommenting PL/I code"),Ne=o("Latest Pl/I 6.1 PTF language support, up to and including the "),De={href:"https://community.ibm.com/community/user/ibmz-and-linuxone/blogs/di-hu1/2024/01/31/january-2024-documentation-refresh-for-enterprise",target:"_blank",rel:"noopener noreferrer"},Ze=o("January 2024 PTF"),Fe=o("."),He={href:"https://www.ibm.com/docs/en/cics-ts/beta?topic=whats-new",target:"_blank",rel:"noopener noreferrer"},Xe=o("Embedded Language Support for CICS 6.2 Beta version in PL/I"),je=n('<h4 id="limitations-of-pl-i-program-files" tabindex="-1"><a class="header-anchor" href="#limitations-of-pl-i-program-files" aria-hidden="true">#</a> Limitations of PL/I program files</h4><ul><li>No support for macros</li><li>The left margin is currently not fully configurable. The minimum value required is 2.</li><li>PL/I 6.1 <ul><li>No support is included for the MAXRUNONIF compiler option.</li><li>No support is included for the PROCINC directive. An alternative way to accomplish the purpose of the PROCINC directive is to use the PROCESS directive with the compiler option from the data set that you want to add for the PROCINC directive.</li></ul></li><li>For PL/I programs that load a large number of include files from MVS, downloading can take a long time. Consider as a workaround the user setting <code>&quot;zowe.files.temporaryDownloadsFolder.cleanup&quot;: false</code> that will not re-download the files between editing sessions.</li></ul><p>The following legal PL/I syntactic constructions are marked as errors:</p><ul><li>Invalid PL/I syntax in macro preprocessor input when the macro preprocessor output is legal PL/I</li><li>Labels on preprocessor directives</li><li>Entry constants</li><li>Type functions</li><li>Factoring of attributes when you declare structures</li><li>An <code>isub</code> option with defined attribute</li><li>A <code>tstack</code> attribute of the attach statement</li><li>Implicit variable declarations</li></ul><p>The following invalid PL/I syntactic constructions are not marked as errors:</p><ul><li>Condition prefixes for do statements</li><li>Label prefixes for declare, default, when, otherwise, and on statements</li><li>Scaling factors for float or fixed</li><li>Duplicate attributes for declaration statements</li><li>Syntax errors in macro preprocessor output</li></ul><h4 id="enabled-features-of-pl-i-include-files" tabindex="-1"><a class="header-anchor" href="#enabled-features-of-pl-i-include-files" aria-hidden="true">#</a> Enabled features of PL/I include files</h4><ul><li>Syntax errors (lexing and parsing)</li><li>Find all references in file</li><li>Peek references in file</li><li>Rename symbol in file</li><li>Outline view</li><li>Syntax highlighting</li><li>Code completion</li><li>Embedded languages support such as SQL, CICS, and DLI</li></ul><h4 id="limitations-of-pl-i-include-files" tabindex="-1"><a class="header-anchor" href="#limitations-of-pl-i-include-files" aria-hidden="true">#</a> Limitations of PL/I include files</h4><ul><li>No support for showing syntax errors for resolving variables</li><li>No support for Hover</li><li>No support for Go to declaration</li><li>No support for Find all references across the multiple files</li><li>No support for Peek references across the multiple files</li><li>No support for Rename symbol across the multiple files</li></ul><h3 id="hlasm" tabindex="-1"><a class="header-anchor" href="#hlasm" aria-hidden="true">#</a> HLASM</h3><p>The following lists show the implementation status of the HLASM language server. Use these lists to check that the feature that you are looking for was implemented or is regarded as a known issue. Let us know if you have any additional issues.</p><h4 id="enabled-features-of-hlasm-program-files" tabindex="-1"><a class="header-anchor" href="#enabled-features-of-hlasm-program-files" aria-hidden="true">#</a> Enabled features of HLASM program files</h4>',13),Je=n("<li>Syntax highlighting</li><li>Syntax errors, which currently only include the following: <ul><li>Copy statements not resolved</li><li>Spaces in continuation line</li><li>Invalid number of operands</li></ul></li><li>Document highlighting</li><li>Hover on operations and operands</li><li>Go to declaration for all operands, including those from copy members</li><li>Find all references in file</li><li>Peek references in file</li><li>Outline view for macros, CSECTs, and DSECTs</li><li>Code completion, including snippet-style completion for operations and macros</li><li>Copy member file resolving and copy member file hover support</li><li>SYS1.MACLIB Macro remote file resolving and content hover support <ul><li>The z/OS version for SYS1.MACLIB is configurable between 2.4, 2.5, and 3.1 with the user setting <code>&quot;zopeneditor.hlasm.zosMacrosVersion&quot;</code>.</li></ul></li><li>Custom Macro file resolving, code completion, and content hover support for local macros.</li><li>Document link support to open copybook file by using Ctrl+Click (Windows) or Cmd+Click (Mac)</li><li>Quick fix hints for lines that are too long and spaces in the continuation line</li>",14),Ve=o("Commenting and uncommenting HLASM code"),Ue=e("li",null,"Progress tracking for long-running operations",-1),qe=n('<h4 id="limitations-of-hlasm-program-files" tabindex="-1"><a class="header-anchor" href="#limitations-of-hlasm-program-files" aria-hidden="true">#</a> Limitations of HLASM program files</h4><ul><li>Limited syntax checks such as no errors for undeclared variables</li><li>Syntax highlighting limitations on multi-line strings</li><li>Syntax highlighting limitations on non-continuation lines that begin at column 16</li><li>Syntax highlighting does not recognize continuation lines that begin at column 17 and later as comments</li><li>Keyword based HLASM code folding: Currently VS Code default code folding is based on indentation levels, not keywords.</li><li>Custom Macro file resolving is not currently available for remote macros.</li></ul><h3 id="rexx" tabindex="-1"><a class="header-anchor" href="#rexx" aria-hidden="true">#</a> REXX</h3><p>The following lists show the implementation status of the REXX language server. Use these lists to check that the feature that you are looking for was implemented or is regarded as a known issue. Let us know if you have any additional issues.</p><h4 id="enabled-features-of-rexx-program-files" tabindex="-1"><a class="header-anchor" href="#enabled-features-of-rexx-program-files" aria-hidden="true">#</a> Enabled features of REXX program files</h4>',5),We=e("li",null,"Syntax highlighting",-1),Ge=e("li",null,"Syntax errors",-1),Ke=e("li",null,[o("Hover "),e("ul",null,[e("li",null,"Keyword hovers are translated for different locales")])],-1),Ye=e("li",null,"Find all references",-1),Qe=e("li",null,"Outline view",-1),$e=e("li",null,"Code completion",-1),eo=e("li",null,"Include control directive resolution and hover support",-1),oo=e("li",null,"Syntax Highlighting for Include control directives",-1),io=o("Commenting and uncommenting REXX code"),to=n('<h4 id="limitations-of-rexx-program-files" tabindex="-1"><a class="header-anchor" href="#limitations-of-rexx-program-files" aria-hidden="true">#</a> Limitations of REXX program files</h4><ul><li>No support for the &#39;END&#39; keyword as a variable</li><li>No support for embedded languages</li><li>Code Completion and Hover do not support keywords that are not keyword instructions</li><li>Some color themes may not highlight all symbols correctly</li><li>Files that contain the replacement character (\uFFFD) are not parsed correctly</li><li>The simple symbol, constant symbol, compound symbol, stem, and internal routine suggestions are restricted to the current file in the editor</li><li>Code Completion inserts an extra pair of parenthesis when an existing function call in the editor is replaced with a built-in function</li><li>Changing the contents of a resolved include control directive will not necessarily clear errors</li><li>The language features do not consider the contents of a resolved include control directive</li><li>Keyword based REXX code folding: Currently VS Code default code folding is based on indentation levels, not keywords.</li></ul><h3 id="jcl" tabindex="-1"><a class="header-anchor" href="#jcl" aria-hidden="true">#</a> JCL</h3><p>The following lists show the implementation status of the JCL language server. Use these lists to check that the feature that you are looking for was implemented or is regarded as a known issue. Let us know if you have any additional issues.</p><h4 id="enabled-features-of-jcl-program-files" tabindex="-1"><a class="header-anchor" href="#enabled-features-of-jcl-program-files" aria-hidden="true">#</a> Enabled features of JCL program files</h4><ul><li>Syntax highlighting</li><li>Syntax errors</li><li>Outline view</li><li>Code completion</li><li>Snippets</li><li>Code folding</li><li>Include file support for file level statements</li><li>On-hover Data Set Name resolution using SET values</li><li>Support for JCL command statements</li></ul><h2 id="ibm-rse-api-plug-in-for-zowe-cli" tabindex="-1"><a class="header-anchor" href="#ibm-rse-api-plug-in-for-zowe-cli" aria-hidden="true">#</a> IBM RSE API Plug-in for Zowe CLI</h2><p>Known issues and limitations for IBM RSE API Plug-in for Zowe CLI (RSE CLI plug-in)</p><h3 id="http-protocol-support-for-rse-profiles" tabindex="-1"><a class="header-anchor" href="#http-protocol-support-for-rse-profiles" aria-hidden="true">#</a> HTTP protocol support for RSE profiles</h3>',9),no=o("As of Zowe CLI 6.31.0, HTTP support is not available for RSE profile connections. There is a "),so={href:"https://github.com/zowe/zowe-cli/issues/1329",target:"_blank",rel:"noopener noreferrer"},ro=o("Zowe CLI issue"),ao=o(" that can be tracked for solution to bring this support back."),lo=n('<h3 id="npm-warn-for-peer-dependencies" tabindex="-1"><a class="header-anchor" href="#npm-warn-for-peer-dependencies" aria-hidden="true">#</a> npm WARN for peer dependencies</h3><p>When installing RSE CLI plug-in, you may encounter an <code>npm WARN</code> for an unmet peer dependency of Zowe CLI even though you have an accommodating version installed. There is due to a known bug in npm versions prior to 7. Having the warnings will not interfere with the successful installation of the plug-in; however, these warnings can be eliminated by running the command <code>npm install npm@latest -g</code> to obtain the latest version of npm.</p><h3 id="rse-cli-plug-in-with-zapp" tabindex="-1"><a class="header-anchor" href="#rse-cli-plug-in-with-zapp" aria-hidden="true">#</a> RSE CLI plug-in with ZAPP</h3><ul><li>When using the <code>--mappings-file</code> tag to state the location of a mappings file to use for upload and download of MVS files, if you have a <code>zapp.json</code> and a <code>zapp.yaml</code> in the same directory, the <code>zapp.yaml</code> will take precedence over the JSON file. It is recommended that you have only one <code>zapp.yaml</code> or <code>zapp.json</code> file when using ZAPP files at a project level.</li></ul><h3 id="rse-cli-plug-in-with-json-web-tokens" tabindex="-1"><a class="header-anchor" href="#rse-cli-plug-in-with-json-web-tokens" aria-hidden="true">#</a> RSE CLI plug-in with JSON Web Tokens</h3><ul><li>JSON Web Tokens are not supported by Zowe Explorer 1.9.0 or previous versions.</li><li>The JWT logout command <code>zowe rse auth logout</code> is not supported by the host component RSE API 1.0.0.</li><li>When using token authentication in Wazi Dev Spaces, the login action will fail if the team configuration profile is opened. To prevent this, make sure that the team configuration file is closed and the &quot;autoSave&quot; setting of editor is set to true.</li></ul><h3 id="rse-cli-plug-in-tso-and-unix-commands" tabindex="-1"><a class="header-anchor" href="#rse-cli-plug-in-tso-and-unix-commands" aria-hidden="true">#</a> RSE CLI plug-in TSO and UNIX commands</h3><ul><li>The command <code>zowe rse issue command {COMMAND}</code>, which can be used to issue a TSO command, is not supported by the host component RSE API 1.0.0.</li><li>Issuing a UNIX command with an RSE profile via Zowe Explorer is not supported yet.</li></ul><h3 id="rse-cli-plug-in-copy-datasets-cross-lpar-command" tabindex="-1"><a class="header-anchor" href="#rse-cli-plug-in-copy-datasets-cross-lpar-command" aria-hidden="true">#</a> RSE CLI plug-in COPY DATASETS CROSS LPAR command</h3><ul><li>The command <code>zowe rse copy data-set-cross-lpar {COMMAND}</code>, which can be used to copy datasets across lpars, does prompt for entering the username and password of the service twice which actually generates from the zowe cli side, but doesnot specify which LPAR it corresponds to.</li></ul><h4 id="known-issues-with-z-os-unix-system-services" tabindex="-1"><a class="header-anchor" href="#known-issues-with-z-os-unix-system-services" aria-hidden="true">#</a> Known issues with z/OS UNIX System Services</h4><ul><li><p>z/OS UNIX System Services does not accept the upload of a directory or file names with spaces in them.</p></li><li><p>An error occurs when you specify z/OS UNIX System Services paths in a Window&#39;s Bash terminal (for example: <code>/u/userid</code>). To solve the issue, create an environment variable <code>MSYS_NO_PATHCONV</code> with a value of <code>1</code> in User Variables and restart the terminal.</p></li></ul><h2 id="using-z-osmf-with-z-open-editor-and-zowe-explorer" tabindex="-1"><a class="header-anchor" href="#using-z-osmf-with-z-open-editor-and-zowe-explorer" aria-hidden="true">#</a> Using z/OSMF with Z Open Editor and Zowe Explorer</h2><p>IBM Z Open Editor can download remote files that are included in your programs through the RSE API or z/OSMF. If you are using z/OSMF to download remote files, it is recommended that you configure the host system with the following values at a minimum for z/OSMF:</p><table><thead><tr><th>Parameter</th><th>Value</th></tr></thead><tbody><tr><td>MAXSESSIONS</td><td>250</td></tr><tr><td>MAXUSERS</td><td>25</td></tr></tbody></table><p>These recommendations ensure that optimal performance will be maintained even if many users are requesting remote downloads concurrently.</p><p>If your development demands typically see more than 25 users requesting remote files concurrently, it is recommended that you increase <code>MAXUSERS</code> to meet your needs and increase <code>MAXSESSIONS</code> to a value equal to <code>MAXUSERS*10</code>.</p>',17),co=o("For more information on where to set these values or solutions if your host system is running into resource problems, see "),ho={href:"https://community.ibm.com/community/user/ibmz-and-linuxone/blogs/hong-liang-zhao1/2020/10/13/tune-zosmf-rest-service",target:"_blank",rel:"noopener noreferrer"},uo=o("this blog"),po=o("."),fo=e("h2",{id:"known-issues-for-user-build",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#known-issues-for-user-build","aria-hidden":"true"},"#"),o(" Known issues for user build")],-1),mo=e("h3",{id:"using-an-older-version-of-ibm-dependency-based-build",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#using-an-older-version-of-ibm-dependency-based-build","aria-hidden":"true"},"#"),o(" Using an older version of IBM Dependency-Based Build")],-1),go=o("IBM Z Open Editor v3+ is optimized for working with IBM Dependency-Based Build (DBB) v2. However, it can also still work with DBB v1. To be able run builds with v2 you need to use the "),_o=e("code",null,"main",-1),bo=o(" branch of the "),wo={href:"https://github.com/IBM/dbb-zappbuild",target:"_blank",rel:"noopener noreferrer"},yo=o("https://github.com/IBM/dbb-zappbuild"),vo=o(" zAppBuild git repository. To build with DBB v1 you must checkout the branch called "),So=e("code",null,"zAppBuild_2_x",-1),ko=o(". Here the "),Co=e("code",null,"2",-1),xo=o(" stands for zAppBuild version 2 as the latest version in the "),Io=e("code",null,"main",-1),Lo=o(" branch of zAppBuild is v3, which is the one that works with DBB v2."),Oo=n(`<h3 id="using-an-older-version-of-dbb-zappbuild" tabindex="-1"><a class="header-anchor" href="#using-an-older-version-of-dbb-zappbuild" aria-hidden="true">#</a> Using an older version of DBB zAppBuild</h3><p>If you are not using the latest branches of zAppBuild or have your own fork that was based on an older version than DBB zAppBuild 2.3.0 then consider the following. The encoding of the dependency file generated during an IBM User Build was recently changed from <code>IBM-1047</code> to a standard <code>UTF-8</code> encoding. This change means that if the latest version of IBM Z Open Editor is not paired with DBB zAppBuild 2.3.0 or greater you will have to add the previously required <code>IBM-1047</code> encoding to the dependency file being generated, by adding the following to your <code>.gitattributes</code> file in your project in order to run an IBM User Build successfully:</p><p><code>*.userbuilddependencies zos-working-tree-encoding=ibm-1047 git-encoding=utf-8</code></p><p>Additionally, when using DBB v1 and zAppBuild v2, when you build a program file that contains spaces in the file path or name, you get the following error:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>java.util.MissingFormatArgumentException: Format specifier \u2018%s\u2019
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,5),Eo=o("At the moment, zAppBuild v2 does not support spaces or URI encoded space character "),Bo=e("code",null,"%20",-1),zo=o(" in the build file path or name. See the issue "),Ao={href:"https://github.com/IBM/dbb-zappbuild/issues/234",target:"_blank",rel:"noopener noreferrer"},Po=o("Support spaces in build file directory paths"),Mo=o(" for updates."),To=e("h3",{id:"other-known-issues",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#other-known-issues","aria-hidden":"true"},"#"),o(" Other known issues")],-1),Ro=e("ul",null,[e("li",null,[o("Some programs fail building on z/OS with the error "),e("code",null,"Missing required dependency file field 'isCICS'."),o(" when using the "),e("code",null,'--dependencyFile ${dependencyFile}"'),o(" build script arguments in the ZAPP profile. As a workaround remove this parameter for now until we can provide a fix. This parameters is an optional performance improvement. Builds can work without it as well.")])],-1),No=e("h2",{id:"reporting-issues",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#reporting-issues","aria-hidden":"true"},"#"),o(" Reporting issues")],-1),Do=o("If you want to provide feedback or report an issue, open an issue in the "),Zo={href:"https://github.com/IBM/zopeneditor-about/issues",target:"_blank",rel:"noopener noreferrer"},Fo=o("GitHub repository"),Ho=o(". Any report and feedback is appreciated.");function Xo(jo,Jo){const t=a("ExternalLinkIcon"),s=a("RouterLink");return l(),d(c,null,[p,e("p",null,[f,e("a",m,[g,i(t)]),_]),b,e("p",null,[w,y,v,S,k,C,x,I,L,i(s,{to:"/Docs/getting_started.html#configuring-java"},{default:r(()=>[O]),_:1}),E]),B,e("p",null,[z,e("a",A,[P,i(t)]),M]),e("ul",null,[T,R,e("li",null,[N,e("a",D,[Z,i(t)]),F])]),H,X,e("ul",null,[e("li",null,[e("p",null,[j,J,V,i(s,{to:"/Docs/setup_integration.html#authentication-using-zowe"},{default:r(()=>[U]),_:1}),q])]),W]),G,e("ul",null,[K,e("li",null,[Y,e("a",Q,[$,i(t)]),ee]),e("li",null,[e("a",oe,[ie,i(t)])]),e("li",null,[te,e("a",ne,[se,i(t)]),re,e("a",ae,[le,i(t)])]),de]),ce,e("ul",null,[e("li",null,[he,e("a",ue,[pe,i(t)]),fe,i(s,{to:"/Docs/setting_unreachablecodewarnings.html"},{default:r(()=>[me]),_:1}),ge]),e("li",null,[_e,e("a",be,[we,i(t)]),ye]),ve]),Se,e("ul",null,[ke,e("li",null,[Ce,xe,Ie,Le,e("ul",null,[Oe,Ee,Be,e("li",null,[ze,e("ul",null,[e("li",null,[e("a",Ae,[Pe,i(t)])]),e("li",null,[e("a",Me,[Te,i(t)])])])])])]),e("li",null,[i(s,{to:"/Docs/editor_codechanges.html#commenting-and-uncommenting-pli-code"},{default:r(()=>[Re]),_:1})]),e("li",null,[Ne,e("a",De,[Ze,i(t)]),Fe]),e("li",null,[e("a",He,[Xe,i(t)])])]),je,e("ul",null,[Je,e("li",null,[i(s,{to:"/Docs/editor_codechanges_hlasm.html#commenting-and-uncommenting-hlasm-code"},{default:r(()=>[Ve]),_:1})]),Ue]),qe,e("ul",null,[We,Ge,Ke,Ye,Qe,$e,eo,oo,e("li",null,[i(s,{to:"/Docs/editor_codechanges_rexx.html#commenting-and-uncommenting-rexx-code"},{default:r(()=>[io]),_:1})])]),to,e("p",null,[no,e("a",so,[ro,i(t)]),ao]),lo,e("p",null,[co,e("a",ho,[uo,i(t)]),po]),fo,mo,e("p",null,[go,_o,bo,e("a",wo,[yo,i(t)]),vo,So,ko,Co,xo,Io,Lo]),Oo,e("p",null,[Eo,Bo,zo,e("a",Ao,[Po,i(t)]),Mo]),To,Ro,No,e("p",null,[Do,e("a",Zo,[Fo,i(t)]),Ho])],64)}var qo=h(u,[["render",Xo]]);export{qo as default};
