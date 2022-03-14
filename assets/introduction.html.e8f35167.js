import{r as s,o as a,a as l,b as e,d as t,w as r,F as c,e as o,c as d}from"./app.8133f2f7.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";const p={},u=e("h1",{id:"introduction",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#introduction","aria-hidden":"true"},"#"),o(" Introduction")],-1),_=o("IBM Z\xAE Open Editor is an extension for Visual Studio Code that provides language support for the IBM\xAE Enterprise "),g={href:"https://www.ibm.com/marketplace/ibm-cobol",target:"_blank",rel:"noopener noreferrer"},m=o("COBOL 6.3"),f=o(", "),b={href:"https://www.ibm.com/marketplace/pli-compiler-zos",target:"_blank",rel:"noopener noreferrer"},w=o("PL/I 5.3"),v=o(", "),y={href:"https://www.ibm.com/marketplace/high-level-assembler-and-toolkit-feature",target:"_blank",rel:"noopener noreferrer"},k=o("High Level Assembler for z/OS 2.4"),S=o(", and "),L={href:"https://www.ibm.com/support/knowledgecenter/en/SSLTBW_2.4.0/com.ibm.zos.v2r4.ikjc300/abstract.htm",target:"_blank",rel:"noopener noreferrer"},B=o("z/OS 2.4.0 TSO/E REXX"),I=o(" programming languages for z/OS\xAE. This also includes capabilities for embedded statements for CICS 5.6, IMS 15.1.0 and SQL DB2 for z/OS 12.1. Earlier versions of any of these components will also work."),C=o("The extension realizes its language support by implementing fully functional "),O={href:"https://langserver.org/",target:"_blank",rel:"noopener noreferrer"},x=o("language servers"),E=o(" together with additional editor enhancements that enable mainframe developers to utilize features such as:"),M=d("<ul><li>Real-time syntax checking and highlighting while you type</li><li>Problems view with all syntax errors and (in COBOL) unreachable code</li><li>Outline view and outline search</li><li>For both variables and paragraphs: <ul><li>Declaration hovers</li><li>Peek definition</li><li>Go to definition</li><li>Find all references</li></ul></li><li>Code and variable completion</li><li>Finding and navigating references</li><li>Previewing of copybooks and include files</li><li>Navigate to copybooks and include files</li><li>Refactoring such as &quot;rename symbol&quot;</li><li>Custom code snippet support and more than 200 example code snippets out of the box</li><li>Search and replace refactoring across multiple program files</li></ul><p>Notes:</p>",2),z=e("li",null,"For HLASM, a significant subset of the capabilities that are available for COBOL and PL/I are supported.",-1),P=e("li",null,"For REXX, a smaller subset of the capabilities are supported",-1),V=o("For "),F={href:"https://www.ibm.com/support/knowledgecenter/zosbasics/com.ibm.zos.zconcepts/zconc_whatisjcl.htm",target:"_blank",rel:"noopener noreferrer"},R=o("Job Control Language (JCL)"),Z=o(", IBM Z Open Editor provides syntax highlighting."),A=o("For a list of the enabled LSP features and in-progress features, see "),D=o("Known issues and limitations"),X=o("."),N=e("strong",null,"New with IBM Z Open Editor 0.4.7 or later",-1),H=o(": "),T=o("IBM Remote System Explorer API"),U=o(" support."),Y=e("h2",{id:"key-capabilities",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#key-capabilities","aria-hidden":"true"},"#"),o(" Key Capabilities")],-1),q=e("p",null,"These are the key features and benefits of IBM Z Open Editor:",-1),G=e("li",null,[e("p",null,"Modern editing experience for COBOL, PL/I, HLASM, and REXX development"),e("p",null,"IBM Z Open Editor is available as an extension for Visual Studio Code (VS Code), which is becoming the most popular development environment according to recent surveys. With so many current and next generation developers having experience with VS Code, IBM Enterprise language support in VS Code makes enterprise programming more attractive and productive by allowing developers to use this popular editor, with the option to integrate numerous other extensions from the VS Code Marketplace.")],-1),W=e("p",null,"Full language support via the Language Server Protocol (LSP)",-1),j=o("The extension supports many COBOL, PL/I, HLASM, and REXX capabilities that were not available in traditional editing environments such as "),J={href:"https://www.ibm.com/support/knowledgecenter/zosbasics/com.ibm.zos.zconcepts/zconcepts_138.htm",target:"_blank",rel:"noopener noreferrer"},K=o("ISPF"),Q=o(", by providing "),$={href:"https://langserver.org/",target:"_blank",rel:"noopener noreferrer"},ee=o("Language Server Protocol"),oe=o(" implementations. See above for the list of key features. Although supported by many other editors now, the Language Server Protocol was specifically created for VS Code and therefore is a good way for providing language support in the editor."),te=e("li",null,[e("p",null,"Extended language server capabilities for more productivity"),e("p",null,[o("In addition to the capabilities specified in the Language Server Protocol, the implementation is extended with more capabilities that are useful to enterprise developers. For example, you can use hovers for COBOL "),e("code",null,"COPY"),o(", PL/I "),e("code",null,"%INCLUDE"),o(", and HLASM "),e("code",null,"COPY"),o(" statements to preview the contents of the copybooks without opening in separate editor tabs and navigating away from your current editing position.")])],-1),ne=e("p",null,"Integration with modern Software Configuration Management (SCM)",-1),ie=o("Even if your organization does not standardize on an SCM, using the Git that is integrated in VS Code or using popular extensions such as "),re={href:"https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens",target:"_blank",rel:"noopener noreferrer"},se=o("GitLens"),ae=o(` locally in a workspace will boost your productivity. You can work on COBOL, PL/I, HLASM, and REXX programs on your local workspace and snapshot work at any point, go back or branch into alternative explorations, merge your or your colleagues' branches back in, or revert to any earlier state of your code in a flash. Use side-by-side views and "blame" annotations to explore the changes between snapshots, how they looked before, and the time of changes. See exactly for each line when it was last changed and by whom. Explore the entire history of all changes for a specific file or all files in your workspace in a chronological history viewer.`),le=e("p",null,"z/OS interactions using the open source Zowe clients",-1),ce=o("If you have z/OSMF or "),de=o("IBM Remote System Explorer API (RSE API)"),he=o(" configured, you can use "),pe={href:"https://docs.zowe.org/stable/user-guide/cli-usingcli.html",target:"_blank",rel:"noopener noreferrer"},ue=o("Zowe CLI"),_e=o(", the "),ge={href:"https://docs.zowe.org/stable/user-guide/ze-install.html",target:"_blank",rel:"noopener noreferrer"},me=o("Zowe Explorer VS Code Extension (Zowe Explorer)"),fe=o(", or both, to load and edit your files directly from z/OS or download them into your local workspace and then upload the changed files into the same or new data sets to compile and run your application. You can do all of these operations from IBM Z Open Editor directly with right-clicks and dialog interactions, and perform command-line operations using the VS Code Terminal view that integrates right below your editor, giving you one central view to everything."),be=e("p",null,"After configuration, IBM Z Open Editor can also take advantage of the Zowe CLI protocol for resolving dependencies over the network. For example, you can edit your COBOL programs locally, but resolve copybook dependencies directly out of MVS\u2122 using the same Zowe connections.",-1),we=e("p",null,"IBM User Build",-1),ve=o("IBM User Build allows z/OS developers who have the IBM Dependency Based Build (DBB) host component to run user builds right from their local integrated development environment (IDE). With the User Build setting enabled in your IDE, you can access IBM User Build options simply by right-clicking inside a COBOL, PL/I, or HLASM file. Refer to the "),ye={href:"https://www.ibm.com/support/knowledgecenter/SSCH39_1.0.0/com.ibm.wazi.development.client.doc/setting_user_build.html",target:"_blank",rel:"noopener noreferrer"},ke=o("full IBM User Build documentation"),Se=o(" to learn more about how to leverage User Build.");function Le(Be,Ie){const n=s("ExternalLinkIcon"),i=s("RouterLink");return a(),l(c,null,[u,e("p",null,[_,e("a",g,[m,t(n)]),f,e("a",b,[w,t(n)]),v,e("a",y,[k,t(n)]),S,e("a",L,[B,t(n)]),I]),e("p",null,[C,e("a",O,[x,t(n)]),E]),M,e("ul",null,[z,P,e("li",null,[V,e("a",F,[R,t(n)]),Z])]),e("p",null,[A,t(i,{to:"/Docs/knownissues.html"},{default:r(()=>[D]),_:1}),X]),e("p",null,[N,H,t(i,{to:"/Docs/rse_tutorial.html"},{default:r(()=>[T]),_:1}),U]),Y,q,e("ul",null,[G,e("li",null,[W,e("p",null,[j,e("a",J,[K,t(n)]),Q,e("a",$,[ee,t(n)]),oe])]),te,e("li",null,[ne,e("p",null,[ie,e("a",re,[se,t(n)]),ae])]),e("li",null,[le,e("p",null,[ce,t(i,{to:"/Docs/setup_integration.html#installing-the-requisite-ibm-rse-api-z-os-host-component"},{default:r(()=>[de]),_:1}),he,e("a",pe,[ue,t(n)]),_e,e("a",ge,[me,t(n)]),fe]),be]),e("li",null,[we,e("p",null,[ve,e("a",ye,[ke,t(n)]),Se])])])],64)}var xe=h(p,[["render",Le]]);export{xe as default};
