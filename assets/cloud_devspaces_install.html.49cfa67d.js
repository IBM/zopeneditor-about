import{r,o as c,a as l,b as e,d as s,w as i,F as d,e as t,c as a}from"./app.d4490272.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";const h={},u=e("h1",{id:"configure-red-hat\xAE-openshift-dev-spaces",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#configure-red-hat\xAE-openshift-dev-spaces","aria-hidden":"true"},"#"),t(" Configure Red Hat\xAE OpenShift Dev Spaces")],-1),_=t("The "),m={href:"https://docs.redhat.com/en/documentation/red_hat_openshift_dev_spaces/3.19/html/administration_guide/index",target:"_blank",rel:"noopener noreferrer"},g=t("Red Hat OpenShift Dev Spaces Administration Guide"),f=t(" covers all the required steps for checking prerequisites, preparing the installation, installing, and configuring the running environment. This page covers some special considerations for Z Open Editor and Zowe Explorer use cases."),b=e("h2",{id:"configuration-suggestions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#configuration-suggestions","aria-hidden":"true"},"#"),t(" Configuration suggestions")],-1),k=e("h3",{id:"public-open-vsx-server",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#public-open-vsx-server","aria-hidden":"true"},"#"),t(" Public Open VSX server")],-1),v=t("The default installation of OpenShift Dev Spaces uses a built-in instance of the Open VSX VS Code extensions marketplace. Z\xAE Open Editor and Zowe\u2122 Explorer are included in this registry, but the versions available might be three months behind the currently available release as Dev Spaces is refreshed only once a quarter. An easy workaround is to switch Dev Spaces to use the public "),y={href:"https://open-vsx.org",target:"_blank",rel:"noopener noreferrer"},w=t("https://open-vsx.org"),x=t(" site instead, as documented in the "),S={href:"https://docs.redhat.com/en/documentation/red_hat_openshift_dev_spaces/3.19/html-single/administration_guide/index#extensions-for-microsoft-visual-studio-code-open-source",target:"_blank",rel:"noopener noreferrer"},I=t("Administration Guide"),O=t("."),D=t('If you run your OpenShift cluster in an air-gapped installation or without a public gateway, it is possible to add these and other extensions to the so-called "plugin registry" of Dev Spaces, as described '),C={href:"https://docs.redhat.com/en/documentation/red_hat_openshift_dev_spaces/3.19/html-single/administration_guide/index#extensions-for-microsoft-visual-studio-code-open-source-adding-or-removing-extensions-in-the-embedded-open-vsx-registry-instance",target:"_blank",rel:"noopener noreferrer"},T=t("here"),q=t("."),G=e("h3",{id:"image-puller",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#image-puller","aria-hidden":"true"},"#"),t(" Image Puller")],-1),P=t("The Kubernetes Image Puller is used for caching images on a cluster. It creates a separate Pod, which downloads and runs the relevant container on each node. This allows for faster start up times for Dev Spaces workspaces. Collect a list of image names that you want to cache. In particular, you want to list the latest IBM image that you find listed here: "),z={href:"https://github.com/IBM/wazi-devspaces-images",target:"_blank",rel:"noopener noreferrer"},R=t("https://github.com/IBM/wazi-devspaces-images"),B=t("Install the Image Puller on x86 based OpenShift Container Platform Cluster: The Community Operators Catalog contains the Kubernetes Image Puller available on x86 based Clusters. Use the web console to install the Kubernetes Image Puller and configure the Dev Spaces custom resource based on the requirements that are specified on this "),E={href:"https://docs.redhat.com/en/documentation/red_hat_openshift_dev_spaces/3.19/html-single/administration_guide/index#installing-image-puller-on-openshift-by-using-the-web-console",target:"_blank",rel:"noopener noreferrer"},H=t("page"),j=t("."),A=t("Install the Image Puller on s390x based OpenShift Container Platform Cluster: The Kubernetes Image Puller cannot be installed using the Operator Hub on s390x based OpenShift Container Platform clusters. Therefore, it is required to install and configure the Kubernetes Image Puller using the CLI. Follow the instructions listed "),M={href:"https://docs.redhat.com/en/documentation/red_hat_openshift_dev_spaces/3.19/html-single/administration_guide/index#installing-image-puller-on-openshift-using-cli",target:"_blank",rel:"noopener noreferrer"},V=t("here"),L=t("."),Z=t("Configure the image puller as described in the "),F={href:"https://docs.redhat.com/en/documentation/red_hat_openshift_dev_spaces/3.19/html-single/administration_guide/index#configuring-image-puller-to-pre-pull-default-devspaces-images",target:"_blank",rel:"noopener noreferrer"},N=t("Red Hat documentation"),K=t(". If you have a custom image to use for Dev Spaces that is located in a private image registry that requires a pull secret, then you need to create such as secret first in the "),U=e("code",null,"openshift-operators",-1),W=t(" namespace. Such a secret could look like this:"),X=a(`<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">kind</span><span class="token punctuation">:</span> Secret
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> devworkspace<span class="token punctuation">-</span>container<span class="token punctuation">-</span>registry<span class="token punctuation">-</span>dockercfg
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> openshift<span class="token punctuation">-</span>operators
<span class="token key atrule">data</span><span class="token punctuation">:</span>
  <span class="token key atrule">.dockerconfigjson</span><span class="token punctuation">:</span> &lt;some base64 string<span class="token punctuation">&gt;</span>
<span class="token key atrule">type</span><span class="token punctuation">:</span> kubernetes.io/dockerconfigjson
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>The .dockerconfigjson is the base64 encoding of the secret. For a container registry in the IBM Cloud, it would in a format such as this</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;auths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;jp.icr.io&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;iamapikey&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;some-apikey&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;auth&quot;</span><span class="token operator">:</span> <span class="token string">&quot;some-auth-value&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,3),Y=t("See the "),J={href:"https://docs.openshift.com/container-platform/4.17/openshift_images/managing_images/using-image-pull-secrets.html",target:"_blank",rel:"noopener noreferrer"},Q=t("OpenShift manual"),$=t(" for more details on pull secrets."),ee=a(`<p>Once you have the secret in place, you can list it in the che instance. Open the Che instance resource file and edit the image puller specification sections. For example,</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">imagePuller</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">spec</span><span class="token punctuation">:</span>
    <span class="token key atrule">imagePullSecrets</span><span class="token punctuation">:</span> devworkspace<span class="token punctuation">-</span>container<span class="token punctuation">-</span>registry<span class="token punctuation">-</span>dockercfg
    <span class="token key atrule">images</span><span class="token punctuation">:</span> <span class="token string">&quot;idzee=jp.icr.io/phaumer/ibm-wazi-for-devspaces-sidecar@sha256:5c073fabe1c016d67e19fa6155caf910fdf89c2ec0467178b34877dfa576c987&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>The <code>images</code> section is a list with a random lowercase name following the image name. You can list many images separated by a <code>;</code>. If your images do not require pull secrets then you can leave those out.</p><h3 id="configure-git-integrations" tabindex="-1"><a class="header-anchor" href="#configure-git-integrations" aria-hidden="true">#</a> Configure Git integrations</h3>`,4),te=t("OpenShift Dev Spaces provides many different ways to integrate with various Git-server technologies such as GitHub, GitLab, and Bitbucket. The "),se={href:"https://docs.redhat.com/en/documentation/red_hat_openshift_dev_spaces/3.19/html-single/administration_guide/index#managing-identities-and-authorizations",target:"_blank",rel:"noopener noreferrer"},ne=t("Administration Guide"),ae=t(" provides instructions on how administrators configure identities and authorizations to these servers."),oe=t("In addition, the Dev Spaces User Guide covers many scenarios for using Git repositories, such as how to "),re={href:"https://docs.redhat.com/en/documentation/red_hat_openshift_dev_spaces/3.19/html/user_guide/getting-started-with-devspaces#authenticating-to-a-git-server-from-a-workspace",target:"_blank",rel:"noopener noreferrer"},ie=t("use these centrally managed authentications"),ce=t(", "),le={href:"https://docs.redhat.com/en/documentation/red_hat_openshift_dev_spaces/3.19/html-single/user_guide/index#using-a-git-provider-access-token",target:"_blank",rel:"noopener noreferrer"},de=t("work with access tokens"),pe=t(", "),he={href:"https://docs.redhat.com/en/documentation/red_hat_openshift_dev_spaces/3.19/html-single/user_guide/index#mounting-git-configuration",target:"_blank",rel:"noopener noreferrer"},ue=t("defining your personal Git configurations"),_e=t(", and many more. This documentation also has a section on "),me=t("managing secrets"),ge=t(" that has content related to Git."),fe=e("h3",{id:"configure-the-dashboard",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#configure-the-dashboard","aria-hidden":"true"},"#"),t(" Configure the Dashboard")],-1),be=t("The OpenShift Dev Spaces documentation describes how you can "),ke={href:"https://docs.redhat.com/en/documentation/red_hat_openshift_dev_spaces/3.19/html/administration_guide/configuring-devspaces#configuring-dashboard",target:"_blank",rel:"noopener noreferrer"},ve=t("customize the Dashboard with additional example tiles"),ye=t("."),we=e("p",null,'To add to your dashboard an example tile for Z Open Editor and its devfile sample, we have provided a simple script based on those instructions that you can use as is. It contains the data for our icon and links to the "zopeneditor-sample" Git repository we used in sections above.',-1),xe=t("The sample is provided in our images Git repository at "),Se={href:"https://github.com/IBM/wazi-devspaces-images",target:"_blank",rel:"noopener noreferrer"},Ie=t("https://github.com/IBM/wazi-devspaces-images"),Oe=t(" that is discussed in "),De=t("Create and use custom images"),Ce=t("."),Te=e("ul",null,[e("li",null,'Clone the repo or copy the scripts in the "config" folder.'),e("li",null,'Determine if you installed Dev Spaces in the "openshift-operators" namespace (default) or followed the Red Hat documentation and installed it in "openshift-devspaces".'),e("li",null,'Adjust the "add-sample.sh" script to use the correct namespace.'),e("li",null,'Logon to your cluster with "oc".'),e("li",null,'Run the "add-sample.sh" script.'),e("li",null,"Refresh the dashboard."),e("li",null,'If the new sample does not appear then check the logs of your "devspaces-dashboard" pod for any errors.')],-1),qe=e("h3",{id:"other-useful-settings-to-configure",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#other-useful-settings-to-configure","aria-hidden":"true"},"#"),t(" Other useful settings to configure")],-1),Ge=t("There are many parameters in the Dev Spaces custom resource to configure Dev Spaces behavior. The "),Pe={href:"https://docs.redhat.com/en/documentation/red_hat_openshift_dev_spaces/3.19/html/administration_guide/configuring-devspaces#checluster-custom-resource-fields-reference",target:"_blank",rel:"noopener noreferrer"},ze=t("Administration Guide"),Re=t(" provides complete reference of all the parameters."),Be=a('<p>The following table lists some commonly used parameters that we find useful for Z Open Editor and Zowe Explorer, which you can explore first. Note, that some of these can have a big impact on resource usage and cost of operation:</p><table><thead><tr><th style="text-align:left;"><strong>Parameter</strong></th><th style="text-align:left;"><strong>Description</strong></th></tr></thead><tbody><tr><td style="text-align:left;"><code>maxNumberOfRunningWorkspacesPerUser</code></td><td style="text-align:left;">The maximum number of running workspaces per user. The value, -1, allows users to run an unlimited number of workspaces.</td></tr><tr><td style="text-align:left;"><code>secondsOfInactivityBeforeIdling</code></td><td style="text-align:left;">Idle timeout for workspaces in seconds. This timeout is the duration after which a workspace idles, if there is no activity. To disable workspace idling due to inactivity, set this value to <code>-1</code>.</td></tr><tr><td style="text-align:left;"><code>startTimeoutSeconds</code></td><td style="text-align:left;">The amount of time a workspace startup times out. The default value of 300 seconds sometimes needs to be increased when pulling very large images with a slow network connection to the registry.</td></tr><tr><td style="text-align:left;"><code>storage</code></td><td style="text-align:left;">Workspaces persistent storage strategy. See below for more details.</td></tr></tbody></table>',2),Ee=t("To get a complete list of parameters used to configure and customize your workspace, see "),He={href:"https://access.redhat.com/documentation/en-us/red_hat_openshift_dev_spaces/3.19/html/administration_guide/configuring-devspaces#checluster-custom-resource-fields-reference",target:"_blank",rel:"noopener noreferrer"},je=t("here"),Ae=t("."),Me=e("h2",{id:"common-issues",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#common-issues","aria-hidden":"true"},"#"),t(" Common issues")],-1),Ve=e("h3",{id:"storage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#storage","aria-hidden":"true"},"#"),t(" Storage")],-1),Le=t("We see that administrators deploy Dev Spaces on OpenShift fail to provide storage for their OpenShift clusters that meet the storage class requirements specified. In addition to provide the correct storage classes, it is also necessary to set the matching storage strategy settings for the Dev Spaces operation. See the "),Ze={href:"https://docs.redhat.com/en/documentation/red_hat_openshift_dev_spaces/3.19/html/administration_guide/configuring-devspaces#configuring-storage",target:"_blank",rel:"noopener noreferrer"},Fe=t("Configuring storage section"),Ne=t(" in the administrator guide for details. Also read the OpenShift "),Ke={href:"https://docs.openshift.com/container-platform/4.17/storage/understanding-persistent-storage.html",target:"_blank",rel:"noopener noreferrer"},Ue=t("Understanding persistent storage"),We=t(' documentation page for more background. For the optimal user experience, we recommend "ReadWriteMany" storage with a "per-workspace" or "per-user" strategy.'),Xe=e("h2",{id:"other-resources",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#other-resources","aria-hidden":"true"},"#"),t(" Other resources")],-1),Ye=e("p",null,"A collection of important references to maintain and use Red Hat OpenShift Dev Spaces, is shared with the end users as well.",-1),Je={href:"https://github.com/IBM/wazi-devspaces-images",target:"_blank",rel:"noopener noreferrer"},Qe=t("IBM Developer for z/OS on Dev Spaces GitHub repository"),$e={href:"https://docs.redhat.com/en/documentation/red_hat_openshift_dev_spaces/3.19/html/administration_guide/index",target:"_blank",rel:"noopener noreferrer"},et=t("Red Hat\xAE OpenShift Dev Spaces Administration Guide"),tt={href:"https://docs.redhat.com/en/documentation/red_hat_openshift_dev_spaces/3.19/html/user_guide/index",target:"_blank",rel:"noopener noreferrer"},st=t("Red Hat\xAE OpenShift Dev Spaces User Guide"),nt={href:"https://developers.redhat.com/products/openshift-dev-spaces/overview",target:"_blank",rel:"noopener noreferrer"},at=t("Red Hat OpenShift Dev Spaces home page and blog"),ot={href:"https://developers.redhat.com/articles/2024/02/19/red-hat-openshift-dev-spaces-security-best-practices",target:"_blank",rel:"noopener noreferrer"},rt=t("Red Hat OpenShift Dev Spaces security best practices"),it={href:"https://che.eclipseprojects.io",target:"_blank",rel:"noopener noreferrer"},ct=t("Eclipse Che Blog"),lt={href:"https://che.eclipseprojects.io/2024/02/05/@mario.loriedo-cde-customization.html",target:"_blank",rel:"noopener noreferrer"},dt=t("Customizing Eclipse Che Cloud Development Environments");function pt(ht,ut){const n=r("ExternalLinkIcon"),o=r("RouterLink");return c(),l(d,null,[u,e("p",null,[_,e("a",m,[g,s(n)]),f]),b,k,e("p",null,[v,e("a",y,[w,s(n)]),x,e("a",S,[I,s(n)]),O]),e("p",null,[D,e("a",C,[T,s(n)]),q]),G,e("p",null,[P,e("a",z,[R,s(n)])]),e("ul",null,[e("li",null,[B,e("a",E,[H,s(n)]),j]),e("li",null,[A,e("a",M,[V,s(n)]),L])]),e("p",null,[Z,e("a",F,[N,s(n)]),K,U,W]),X,e("p",null,[Y,e("a",J,[Q,s(n)]),$]),ee,e("p",null,[te,e("a",se,[ne,s(n)]),ae]),e("p",null,[oe,e("a",re,[ie,s(n)]),ce,e("a",le,[de,s(n)]),pe,e("a",he,[ue,s(n)]),_e,s(o,{to:"/Docs/cloud_managing_secrets.html"},{default:i(()=>[me]),_:1}),ge]),fe,e("p",null,[be,e("a",ke,[ve,s(n)]),ye]),we,e("p",null,[xe,e("a",Se,[Ie,s(n)]),Oe,s(o,{to:"/Docs/cloud_custom_images.html"},{default:i(()=>[De]),_:1}),Ce]),Te,qe,e("p",null,[Ge,e("a",Pe,[ze,s(n)]),Re]),Be,e("p",null,[Ee,e("a",He,[je,s(n)]),Ae]),Me,Ve,e("p",null,[Le,e("a",Ze,[Fe,s(n)]),Ne,e("a",Ke,[Ue,s(n)]),We]),Xe,Ye,e("ul",null,[e("li",null,[e("a",Je,[Qe,s(n)])]),e("li",null,[e("a",$e,[et,s(n)])]),e("li",null,[e("a",tt,[st,s(n)])]),e("li",null,[e("a",nt,[at,s(n)])]),e("li",null,[e("a",ot,[rt,s(n)])]),e("li",null,[e("a",it,[ct,s(n)])]),e("li",null,[e("a",lt,[dt,s(n)])])])],64)}var gt=p(h,[["render",pt]]);export{gt as default};
