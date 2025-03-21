import{r as i,o as r,a as l,b as e,d as t,w as a,F as d,e as o}from"./app.096b05e2.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";const c={},p=e("h1",{id:"try-z-open-editor-in-the-red-hat-developer-sandbox",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#try-z-open-editor-in-the-red-hat-developer-sandbox","aria-hidden":"true"},"#"),o(" Try Z Open Editor in the Red Hat Developer Sandbox")],-1),u=e("p",null,"The Developer Sandbox for Red Hat OpenShift provides you with 30 days of no-cost access to a shared cluster on OpenShift, an enterprise-grade Kubernetes-based platform. The following tutorial walks you through the steps to sign up for a trial account, deploy your OpenShift cluster with OpenShift Dev Spaces which is installed and ready, and then load a sample workspace with IBM Z Open Editor.",-1),_=o("If you have access to another Red Hat OpenShift cluster with Dev Spaces deployed you can directly skip to section "),f=e("a",{href:"#create-a-workspace-with-the-z-open-editor-sample-repository"},"Create a workspace with the Z Open Editor sample repository",-1),m=o(". If you have an OpenShift cluster without Dev Spaces deployed, check out our "),g=o("installation guide"),b=o("."),y=e("h2",{id:"get-a-red-hat-developer-sandbox",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#get-a-red-hat-developer-sandbox","aria-hidden":"true"},"#"),o(" Get a Red Hat Developer Sandbox")],-1),w=o("If you do not have an Red Hat Dev Spaces 3.x deployment go here and sign up for a free account (check the documents and video on that site for details): "),v={href:"https://developers.redhat.com/developer-sandbox",target:"_blank",rel:"noopener noreferrer"},x=o("https://developers.redhat.com/developer-sandbox"),k=e("li",null,'Select the "Start your sandbox for free" button.',-1),S=e("li",null,"If you have a Red Hat account sign in or create a new account from the Log In page.",-1),O=e("li",null,'Click the "Get started" button in the Developer Sandbox welcome page.',-1),D=e("li",null,'Click the "Launch" button in the Red Hat Dev Spaces box and confirm several authentication prompts.',-1),I=e("p",null,"You are now in the Red Hat OpenShift Dev Spaces dashboard from which you can create a developer workspace. Select the tile of any of the example stack listed there to start a workspace using the specific technology listed or follow the instructions in the next section to create a workspace with Z Open Editor.",-1),R=e("h2",{id:"create-a-workspace-with-the-z-open-editor-sample-repository",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#create-a-workspace-with-the-z-open-editor-sample-repository","aria-hidden":"true"},"#"),o(" Create a workspace with the Z Open Editor sample repository")],-1),C=o("A development workspace in Red Hat OpenShift Dev Spaces requires a so-called "),E={href:"https://devfile.io",target:"_blank",rel:"noopener noreferrer"},z=o("devfile"),L=o(" that specifies what kind of environment should be created by listing the container image to be used, storage to be mounted, environment variables to be defined, and so on. Such a devfile is typically stored with the source code of the development project in a Git repository. So you can start a Dev Spaces workspace by simply pointing to a Git repository and the configuration files in that repository decide what technology stack should be loaded."),H=e("li",null,"Navigate to the Red Hat OpenShift Dev Spaces dashboard using a Red Hat Developer Sandbox or your own OpenShift Dev Spaces deployment.",-1),Z=o('In the "Import from Git" text field paste the following URL: '),B={href:"https://github.com/ibm/zopeneditor-sample/tree/devfile",target:"_blank",rel:"noopener noreferrer"},G=o("https://github.com/ibm/zopeneditor-sample/tree/devfile"),T=e("li",null,"Confirm that you trust the author of this Git repository.",-1),A=e("li",null,'Wait for the "Starting workspace" page to load images and complete configuration steps.',-1),M=e("li",null,"The browser-based VS Code editor appears and after another trust confirmation dialog, you see our sample files in File Explorer.",-1),F=e("li",null,[o("If you switch to the Extensions view, a set of recommended VS Code extensions are being loaded, which includes Z Open Editor. This list of extensions to be loaded automatically is specified in a configuration of the Git repository as well. You find in the file "),e("code",null,".vscode/extensions.json"),o(".")],-1),N=o(`After the extensions have been installed, you see the following prompt "Zowe Explorer's default credentials manager is not supported in your environment." with a "Reload" button. Click the button and wait for the workspace to reappear. If you want to learn about the reason and details about this dialog see Section `),V=o("Managing Secrets"),U=o("."),Y=e("li",null,"Once the editor is reloaded, the Z Open Editor Welcome page appears.",-1),X=e("li",null,[o("Now you can explore the editor by opening, for example, the file "),e("code",null,"COBOL/SAM1.cbl"),o(" from the Files Explorer.")],-1),j=o("Note, that instead of using the dashboard, the developer can also quickly open a workspace using a simple URL book such as "),q={href:"https://workspaces.openshift.com/#https://github.com/ibm/zopeneditor-sample/tree/devfile",target:"_blank",rel:"noopener noreferrer"},P=o("https://workspaces.openshift.com/#https://github.com/ibm/zopeneditor-sample/tree/devfile"),W=e("h2",{id:"explore-the-editor",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#explore-the-editor","aria-hidden":"true"},"#"),o(" Explore the editor")],-1),J=e("li",null,"You can open the sample programs in COBOL, PL/I, HLASM, REXX, and JCL to try the editor.",-1),K=o('To try editor features, open section in "Editing program files" such as '),Q=o("Making COBOL and PL/I code changes"),$=o("."),ee=o("To try Zowe Explorer, you need access to a public z/OS system. If you are a student of the "),oe={href:"https://www.ibm.com/z/resources/zxplore",target:"_blank",rel:"noopener noreferrer"},te=o("IBM Z Xplore program"),ne=o(" you can use the account provided there. Follow the steps described in "),se=o("Connecting to z/OS with Zowe Explorer walk through"),ae=o(" to create a team or personal Zowe configuration file."),ie=e("li",null,"Open a terminal and try Zowe CLI commands as the image comes with many tools preinstalled and configured.",-1),re=o("In the samples repository, you also find Ansible playbooks that you can explore. The image also comes with full Ansible editing capabilities using the Red Hat Ansible VS Code extension and a full Ansible client runtime for executing playbooks. This also includes a preinstalled copy of the "),le={href:"https://ibm.github.io/z_ansible_collections_doc/index.html",target:"_blank",rel:"noopener noreferrer"},de=o("Red Hat Ansible Certified Content for IBM Z"),he=o(" collection."),ce=e("h2",{id:"use-your-own-programs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#use-your-own-programs","aria-hidden":"true"},"#"),o(" Use your own programs")],-1),pe=e("p",null,"You can use the sample workspace created with the steps above for editing your own programs by uploading them into the editor, placing them in new folders or replacing the sample programs altogether. You can also create workspaces using your Git repository as long as your Git server is visible to the OpenShift environment you are using.",-1),ue=o("For creating a workspace with your own set of programs, copy and modify the .devfile of the "),_e={href:"https://github.com/IBM/zopeneditor-sample/blob/devfile/.devfile.yaml",target:"_blank",rel:"noopener noreferrer"},fe=o("https://github.com/IBM/zopeneditor-sample/blob/devfile/.devfile.yaml"),me=o(" repository."),ge=e("li",null,"Use the Dev Spaces dashboard to open a workspace with your repository.",-1),be=o("Review the "),ye={href:"https://access.redhat.com/documentation/en-us/red_hat_openshift_dev_spaces/3.19/html/user_guide/index",target:"_blank",rel:"noopener noreferrer"},we=o("Dev Spaces User Guide"),ve=o(" to learn more about managing your own environment.");function xe(ke,Se){const s=i("RouterLink"),n=i("ExternalLinkIcon");return r(),l(d,null,[p,u,e("p",null,[_,f,m,t(s,{to:"/Docs/cloud_devspaces_install.html"},{default:a(()=>[g]),_:1}),b]),y,e("ol",null,[e("li",null,[w,e("a",v,[x,t(n)])]),k,S,O,D]),I,R,e("p",null,[C,e("a",E,[z,t(n)]),L]),e("ol",null,[H,e("li",null,[Z,e("a",B,[G,t(n)])]),T,A,M,F,e("li",null,[N,t(s,{to:"/Docs/cloud_managing_secrets.html"},{default:a(()=>[V]),_:1}),U]),Y,X]),e("p",null,[j,e("a",q,[P,t(n)])]),W,e("ol",null,[J,e("li",null,[K,t(s,{to:"/Docs/editor_codechanges.html"},{default:a(()=>[Q]),_:1}),$]),e("li",null,[ee,e("a",oe,[te,t(n)]),ne,t(s,{to:"/Docs/connect_to_zos_with_zowe_explorer_e2e.html"},{default:a(()=>[se]),_:1}),ae]),ie,e("li",null,[re,e("a",le,[de,t(n)]),he])]),ce,pe,e("ol",null,[e("li",null,[ue,e("a",_e,[fe,t(n)]),me]),ge,e("li",null,[be,e("a",ye,[we,t(n)]),ve])])],64)}var Ie=h(c,[["render",xe]]);export{Ie as default};
