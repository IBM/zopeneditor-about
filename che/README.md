# IBM Z® Open Editor in the cloud with Eclipse Che examples

Go to this article to learn in detail about how to use these files for running IBM Z Open Editor in Eclipse Che: <https://ibm.github.io/zopeneditor-about/Blog/in-the-cloud-with-che.html>

## Quick Start using Red Hat Dev Spaces 3.x

### Get a Red Hat Dev Spaces trial

1. If you do not have an Red Hat Dev Spaces 3.x deployment go here and sign up for a free account (check the docs and video on that site for details): <https://developers.redhat.com/developer-sandbox>
1. Select the "Getting Started" button to create your cluster.
1. The in the "Developer Sandbox" section select "Launch" button in the "Red Hat Dev Spaces" panel.
1. Select the Sandbox authentication method and self-register yourself an account.
1. Once you are in Dev Spaces you can subsequently bookmark the current location or simply navigate to <http://workspaces.openshift.com> to get back to your Dev Spaces Developer Sandbox for Red Hat OpenShift.

### Create a workspace with the Wazi for Dev Spaces image

Note, that you can use the devfile and image utilized in this section only for an evaluation trial and personal education purposes. If you are planning to use it for real development projects then please contact your IBM sales representative for acquiring a IBM Wazi for Dev Spaces license.

1. To create a workspace in the Red Hat Sandbox environment created above, paste the following into a new browser tab: <https://workspaces.openshift.com/#https://github.com/IBM/zopeneditor-sample/tree/devfile>. (If you have your own OpenShift cluster with a deployment of Red Hat Dev Spaces 3.x then substitute the first part of the URL with your dashboard's URL.)
1. This will start a workspace in your browser using VS Code as the editor. (Note, that the first startup might take a little bit longer as the environment needs to pull large images. For your own environments check how you can significancy speed up startup times using a so-called [Image Puller configuration](https://www.ibm.com/docs/en/cloud-paks/z-modernization-stack/2023.4?topic=admin-configuring-workspaces).)
1. The editor will refresh itself when cloning the repo. Wait until the status bar does not show any more updates.
1. If the editor prompts you asking if you want to install the recommended extensions. Click Ok.
1. Alternatively use the Extensions view to find the Recommended tab and install the listed extensions in this order: YAML, Zowe Explorer, Z Open Editor.
1. On your first startup you will an error from Zowe Explorer ("Failed to load Keytar module:.."), which requires currently a manual workaround:
  a. Open the VS Code Settings (menu "File > Preferences > Settings") and switch to the "Remote" tab.
  b. Search for the word "security" and you will the a checkbox option called "Zowe > Security: Secure Credentials Enabled".
  c. Uncheck it and reload your browser.

## Explore the editor

1. Using the Git repository listed in the previous section will start Dev Spaces with the Wazi for Dev Spaces and Z Open Editor samples workspace.
1. You can open the sample programs in COBOL, PL/I, HLASM, REXX, and JCL to try the editor.
1. Find the full editor documentation [here](https://ibm.github.io/zopeneditor-about/Docs/introduction.html).
1. If you have connectivity to your z/OS system use Zowe Explorer to create a Team Configuration file with a Zowe profile to your system using the same documentation link from the step above.
1. Try Zowe Explorer.
1. Open a terminal and try Zowe CLI commands as the image comes with many tools preinstalled and configured.
1. In the samples repo you also find Ansible playbooks that you can explore. The image also comes with full Ansible editing capabilities using the Red Hat Ansible VS Code extension and a full Ansible client runtime for executing playbooks. This also includes a preinstalled copy of the [Red Hat Ansible Certified Content for IBM Z](https://ibm.github.io/z_ansible_collections_doc/index.html) collection.

## Use your own programs

You can use the sample workspace created with the steps above for editing your own programs by uploading them into the editor placing them in new folders or replacing the sample programs altogether. You can also create workspaces using your Git repository as long as your Git server is visible to the OpenShift environment you are using. See the [Red Hat documentation for various ways of configuring Git and authorizations](https://access.redhat.com/documentation/en-us/red_hat_openshift_dev_spaces/3.8/html/user_guide/using-credentials-and-configurations-in-workspaces).

1. For creating a workspace with your own set of programs you can copy and modify the .devfile of the <https://github.com/IBM/zopeneditor-sample/tree/devfile> repository.
1. Then use the same mechanism as described above with your repository.
1. Alternatively, you can paste the URL to your Git repository into the URL text field of the Dev Spaces Create Workspace page.
1. Review the [Dev Spaces User Guide](https://access.redhat.com/documentation/en-us/red_hat_openshift_dev_spaces/3.8/html/user_guide/index) to learn more about managing your own environment.
