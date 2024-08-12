import{r,o as a,a as l,b as e,d as o,w as i,F as d,e as t,c}from"./app.8b19c2f0.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";var h="/zopeneditor-about/assets/wazi-development-client-arch.c0e1097d.png",m="/zopeneditor-about/assets/wazi-development-client-dashboard.c803a64e.png",u="/zopeneditor-about/assets/wazi-development-client-ibm-z-open-editor-cobol.d7d448eb.png",_="/zopeneditor-about/assets/wazi-development-client-ibm-z-open-editor-pl1.e5d0f743.png",f="/zopeneditor-about/assets/wazi-development-client-ibm-z-open-editor-assembler.096864fe.png",g="/zopeneditor-about/assets/wazi-development-client-ibm-user-build.8353f08e.png",v="/zopeneditor-about/assets/wazi-development-client-zowe-explorer.89a406ac.png",w="/zopeneditor-about/assets/wazi-development-client-zowe-cli.e82a9082.png",b="/zopeneditor-about/assets/wazi-development-client-ibm-rse-api.eae5c176.png";const I={},z=e("h1",{id:"kubernetes-native-integrated-z-developer-environment-with-ibm-wazi-for-red-hat-codeready-workspaces-development-client",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#kubernetes-native-integrated-z-developer-environment-with-ibm-wazi-for-red-hat-codeready-workspaces-development-client","aria-hidden":"true"},"#"),t(" Kubernetes-Native Integrated Z Developer Environment with IBM Wazi for Red Hat CodeReady Workspaces Development Client")],-1),B=e("blockquote",null,[e("p",null,"By Prasang A Prajapati")],-1),k=e("p",null,'Have you ever experienced problems in setting up a development environment? Also, have you ever heard this excuse when reporting a bug to a colleague? "It works on my machine!"',-1),C=e("p",null,"You are joining a new development team or project and you have spent the first couple of days or longer just with installing the right tools, getting access to the right system and configuring your development profiles. Similarly, when starting a new project, a large portion of time and energy is spent on setting up the development environment. Think about how inefficient it could be if this type of set up routine is repeated for every new team member or new project every time.",-1),y=t("To address this problem, there is an amazing tool called "),M={href:"https://www.ibm.com/products/wazi-for-red-hat-codeready-workspaces",target:"_blank",rel:"noopener noreferrer"},S=t("IBM\xAE Wazi for Red Hat\xAE CodeReady Workspaces Development Client"),D=t(" (IBM Wazi Development Client). IBM Wazi Development Client is built on the Red Hat CodeReady Workspaces project. IBM Wazi Development Client uses Kubernetes and containers to provide any member of the development or IT team with a consistent, secure, and zero-configuration development environment for the IBM Z\xAE Platform. The user experience is as fast and familiar as an integrated development environment (IDE) on their laptop."),x=t("IBM Wazi Development Client provides a modern experience for mainframe software developers working with z/OS\xAE applications in the cloud by leveraging the available Visual Studio Code (VS Code) extensions "),E={href:"https://marketplace.visualstudio.com/items?itemName=IBM.zopeneditor",target:"_blank",rel:"noopener noreferrer"},W=t("IBM Z Open Editor"),R=t(", "),Z={href:"https://www.ibm.com/docs/en/developer-for-zos/16.0?topic=build-running-user",target:"_blank",rel:"noopener noreferrer"},L=t("IBM User Build"),O=t(" and "),P={href:"https://marketplace.visualstudio.com/items?itemName=Zowe.vscode-extension-for-zowe",target:"_blank",rel:"noopener noreferrer"},F=t("Zowe\u2122 Explorer"),A=t(", as well as the command-line tools "),N={href:"https://docs.zowe.org/stable/user-guide/cli-usingcli.html",target:"_blank",rel:"noopener noreferrer"},V=t("Zowe CLI"),j=t(" and "),U=t("IBM RSE API Plug-in for Zowe CLI"),T=t(". Developers can use these Visual Studio Code extensions and command line tools on their local machine with the "),H={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},q=t("Visual Studio Code"),J=t(" desktop IDE. Now, IBM Wazi Development Client makes this experience also available in the cloud. Powered by the open-source projects Zowe and Red Hat CodeReady Workspaces, IBM Wazi Development Client offers an easy, streamlined on-boarding process to get new mainframe developers using the tools they need. Using container technology and stacks, IBM Wazi Development Client brings the necessary technology to the task at hand."),K=t("Mainframe developers can now have rich language support for COBOL, PL/I, Assembler and JCL using "),G={href:"https://marketplace.visualstudio.com/items?itemName=IBM.zopeneditor",target:"_blank",rel:"noopener noreferrer"},Y=t("IBM Z Open Editor"),Q=t(" as well as connectivity to Z host using "),X={href:"https://marketplace.visualstudio.com/items?itemName=Zowe.vscode-extension-for-zowe",target:"_blank",rel:"noopener noreferrer"},$=t("Zowe Explorer"),ee=t(", run user builds using "),te={href:"https://www.ibm.com/docs/en/developer-for-zos/16.0?topic=build-running-user",target:"_blank",rel:"noopener noreferrer"},oe=t("IBM User Build"),ne=t(", and interact with the "),se=t("IBM Remote System Explorer API"),ie=t(", all in one Mainframe Development package using the "),re={href:"https://github.com/IBM/wazi-codeready-workspaces",target:"_blank",rel:"noopener noreferrer"},ae=t("IBM Wazi Development Client stack"),le=t(" with custom plugin and devfile registry support."),de=c('<p><img src="'+h+'" alt="wazi-development-client"></p><p><em>Fig 1: IBM Wazi for Red Hat CodeReady Workspaces Development Client controller architecture</em></p><p><em>The above figure explains workspaces controller architecture for the IBM Wazi Development Client. OpenShift\xAE leverages the Kubernetes concept of a pod, which is one or more containers deployed together on one host, and the smallest compute unit that can be defined, deployed, and managed. In the IBM Wazi Development Client, when the user creates a workspace using Wazi Development Client Stack, it creates a workspace with deployed user runtime as well as a plugin sidecar container.</em></p><h2 id="ibm-wazi-development-client-dashboard" tabindex="-1"><a class="header-anchor" href="#ibm-wazi-development-client-dashboard" aria-hidden="true">#</a> IBM Wazi Development Client Dashboard</h2><p><img src="'+m+'" alt="wazi-development-client-dashboard"></p><p><em>Fig 2: Screen capture of IBM Wazi Development Client Dashboard</em></p><h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h2><p>Here are the main features that IBM Wazi Development Client offers.</p>',8),ce={href:"https://marketplace.visualstudio.com/items?itemName=IBM.zopeneditor",target:"_blank",rel:"noopener noreferrer"},pe=t("IBM Z Open Editor"),he=t("IBM Z Open Editor is a free Visual Studio Code extension that provides a modern editing experience for IBM Z Enterprise languages. IBM Z Open Editor gives developers the freedom to code in COBOL, PL/I and Assembler using the same editor they use for other languages such as Java\u2122 and JavaScript. "),me={href:"https://ibm.github.io/zopeneditor-about/",target:"_blank",rel:"noopener noreferrer"},ue=t("Learn more"),_e=e("p",null,[e("img",{src:u,alt:"ibm-z-open-editor-cobol"}),e("em",null,"Fig 3: Editing experience of COBOL files using IBM Z Open Editor in IBM Wazi Development Client")],-1),fe=e("p",null,[e("img",{src:_,alt:"ibm-z-open-editor-pl1"}),e("em",null,"Fig 4: Editing experience of PL/I files using IBM Z Open Editor in IBM Wazi Development Client")],-1),ge=e("p",null,[e("img",{src:f,alt:"ibm-z-open-editor-assembler"}),e("em",null,"Fig 5: Editing experience of Assembler files using IBM Z Open Editor in IBM Wazi Development Client")],-1),ve={href:"https://www.ibm.com/docs/en/developer-for-zos/16.0?topic=build-running-user",target:"_blank",rel:"noopener noreferrer"},we=t("IBM User Build"),be=t("The IBM User Build VS Code extension helps COBOL developers leverage the IBM Dependency Based Build (DBB) toolkit right from their local VS Code or IBM Wazi Development Client enviroment. "),Ie={href:"https://www.ibm.com/docs/en/developer-for-zos/16.0?topic=build-running-user",target:"_blank",rel:"noopener noreferrer"},ze=t("Learn more"),Be=e("p",null,[e("img",{src:g,alt:"ibm-user-build"}),e("em",null,"Fig 6: User Build using IBM User Build in IBM Wazi Development Client")],-1),ke={href:"https://marketplace.visualstudio.com/items?itemName=Zowe.vscode-extension-for-zowe",target:"_blank",rel:"noopener noreferrer"},Ce=t("Zowe Explorer"),ye=t("Zowe Explorer is a free Visual Studio Code extension that lets you interact with data sets, USS files and jobs that are stored on IBM z/OS mainframes. You can explore data sets, USS files and jobs to view their contents, make changes, and upload the changes to the mainframe. Interacting with data sets, USS files and jobs from VS Code can be more convenient than using command-line interfaces or 3270 emulators. "),Me={href:"https://docs.zowe.org/stable/user-guide/ze-install.html#software-requirements",target:"_blank",rel:"noopener noreferrer"},Se=t("Learn more"),De=e("p",null,[e("img",{src:v,alt:"zowe-explorer"}),e("em",null,"Fig 7: Interacting with data sets, USS files and jobs that are stored on IBM z/OS mainframes using Zowe Explorer in IBM Wazi Development Client")],-1),xe={href:"https://docs.zowe.org/stable/user-guide/cli-usingcli.html",target:"_blank",rel:"noopener noreferrer"},Ee=t("Zowe CLI"),We=t("Zowe CLI is a command-line interface that lets you interact with the mainframe in a familiar, off-platform format. Zowe CLI helps to increase overall productivity, reduce the learning curve for developing mainframe applications, and exploit the ease-of-use of off-platform tools. Zowe CLI lets you use common tools such as Integrated Development Environments (IDEs), shell commands, bash scripts, and build tools for mainframe development. Through its ecosystem of plug-ins, you can automate actions on systems such as IBM Db2\xAE, IBM CICS\xAE, and more. It provides a set of utilities and services for users who want to become efficient in supporting and building z/OS applications quickly. "),Re={href:"https://docs.zowe.org/stable/user-guide/cli-usingcli.html",target:"_blank",rel:"noopener noreferrer"},Ze=t("Learn more"),Le=e("p",null,[e("img",{src:w,alt:"zowe-cli"}),e("em",null,"Fig 8: Running Zowe commands to create, delete, or update profiles using Zowe CLI in IBM Wazi Development Client")],-1),Oe=t("IBM RSE API Plug-in for Zowe CLI"),Pe=t("IBM RSE API Plug-in for Zowe CLI (RSE CLI plug-in) extends Zowe CLI to let you interact with z/OS resources. The RSE CLI plug-in interacts with z/OS by using IBM Remote System Explorer API (RSE API) instead of using z/OSMF. The RSE API is a collection of REST APIs that allow a client to work with various components on the z/OS host system, including MVS\u2122 data sets, z/OS UNIX files and commands, JES jobs, and more. The overall solution results in a complete set of operations that allows you to do everything with RSE API that you could do with z/OSMF. It is therefore a great alternative if you have already used the Remote System Explorer with other IBM offerings such as IBM Developer for z/OS or IBM Explorer for z/OS. "),Fe=t("Learn more"),Ae=e("p",null,[e("img",{src:b,alt:"ibm-rse-api"}),e("em",null,"Fig 9: Create, delete or update RSE profiles using the RSE CLI plug-in in IBM Wazi Development Client")],-1),Ne=e("h2",{id:"documentation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#documentation","aria-hidden":"true"},"#"),t(" Documentation")],-1),Ve=t("For more information or to learn more about IBM Wazi for Red Hat CodeReady Workspaces Development Client, see "),je={href:"https://www.ibm.com/docs/en/wdfrhcw/1.4.0",target:"_blank",rel:"noopener noreferrer"},Ue=t("IBM Wazi for Red Hat CodeReady Workspaces Development Client Documentation"),Te=t("."),He=e("strong",null,"Note:",-1),qe=t(" IBM Wazi Development Client is built on top of "),Je={href:"https://access.redhat.com/documentation/en-us/red_hat_codeready_workspaces",target:"_blank",rel:"noopener noreferrer"},Ke=t("Red Hat CodeReady Workspaces"),Ge=t(". For more information on what else can be done with workspaces, see the "),Ye={href:"https://access.redhat.com/documentation/en-us/red_hat_codeready_workspaces/2.1/html/end-user_guide/index",target:"_blank",rel:"noopener noreferrer"},Qe=t("End-User Guide"),Xe=t("."),$e=e("h2",{id:"questions-or-feedback",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#questions-or-feedback","aria-hidden":"true"},"#"),t(" Questions or feedback")],-1),et=t("We would love to hear what you think of this solution. For any questions, issues, or enhancement ideas, you can open an issue in the "),tt={href:"https://github.com/IBM/wazi-codeready-workspaces",target:"_blank",rel:"noopener noreferrer"},ot=t("Wazi Codeready WorkSpaces Github repository"),nt=t("."),st=e("p",null,"We are always looking for ways to improve.",-1);function it(rt,at){const n=r("ExternalLinkIcon"),s=r("RouterLink");return a(),l(d,null,[z,B,k,C,e("p",null,[y,e("a",M,[S,o(n)]),D]),e("p",null,[x,e("a",E,[W,o(n)]),R,e("a",Z,[L,o(n)]),O,e("a",P,[F,o(n)]),A,e("a",N,[V,o(n)]),j,o(s,{to:"/Docs/setup_integration.html"},{default:i(()=>[U]),_:1}),T,e("a",H,[q,o(n)]),J]),e("p",null,[K,e("a",G,[Y,o(n)]),Q,e("a",X,[$,o(n)]),ee,e("a",te,[oe,o(n)]),ne,o(s,{to:"/Docs/setup_integration.html"},{default:i(()=>[se]),_:1}),ie,e("a",re,[ae,o(n)]),le]),de,e("ol",null,[e("li",null,[e("p",null,[e("a",ce,[pe,o(n)])]),e("p",null,[he,e("a",me,[ue,o(n)])]),_e,fe,ge]),e("li",null,[e("p",null,[e("a",ve,[we,o(n)])]),e("p",null,[be,e("a",Ie,[ze,o(n)])]),Be]),e("li",null,[e("p",null,[e("a",ke,[Ce,o(n)])]),e("p",null,[ye,e("a",Me,[Se,o(n)])]),De]),e("li",null,[e("p",null,[e("a",xe,[Ee,o(n)])]),e("p",null,[We,e("a",Re,[Ze,o(n)])]),Le]),e("li",null,[e("p",null,[o(s,{to:"/Docs/setup_integration.html"},{default:i(()=>[Oe]),_:1})]),e("p",null,[Pe,o(s,{to:"/Docs/setup_integration.html"},{default:i(()=>[Fe]),_:1})]),Ae])]),Ne,e("p",null,[Ve,e("a",je,[Ue,o(n)]),Te]),e("p",null,[He,qe,e("a",Je,[Ke,o(n)]),Ge,e("a",Ye,[Qe,o(n)]),Xe]),$e,e("p",null,[et,e("a",tt,[ot,o(n)]),nt]),st],64)}var ct=p(I,[["render",it]]);export{ct as default};
