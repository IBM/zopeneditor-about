# IBM Z® Open Editor in the cloud with Eclipse Che examples

Go to this article to learn in detail about how to use these files for running IBM Z Open Editor in Eclipse Che: <https://ibm.github.io/zopeneditor-about/Blog/in-the-cloud-with-che.html>

## Quick Start using Red Hat Dev Spaces 3.x

1. If you do not have an Red Hat Dev Spaces 3.x deployment go here and sign up for a free account (check the docs and video on that site for details): <https://developers.redhat.com/developer-sandbox>
2. In OpenShift use the Applications icon in the toolbar at the top right to open Red Hat CodeReady Workspaces, the Red Hat branded version of Eclipse Che.
3. Select the Sandbox authentication method and self-register yourself an account.
4. Once you are in you can subsequently bookmark and simply navigate to <http://workspaces.openshift.com> to get back to your Developer Sandbox for Red Hat OpenShift.
5. To create a workspace with Z Open Editor paste the following into a new browser tab: <https://workspaces.openshift.com/#https://github.com/IBM/zopeneditor-sample/tree/devfile?che-editor=che-incubator/che-code/insiders>. If you have your own deployment of Red Hat Dev Spaces 3.x then substitute the first part of the URL with your dashboard's URL.
6. This will start a workspace using VS Code as the editor. The editor will refresh itself when cloning the repo. Wait until the status bar does not show any more updates.
7. The editor will then prompt you asking if you want to install the recommended extensions. Click Ok.
8. Alternatively use the Extensions view to find the Recommended tab and install the listed extensions in this order: YAML, Zowe Explorer, Z Open Editor.
9. Switch back to the File Explorer view.

## Quick Start using Red Hat CodeReady Workspaces 2.14 or 2.15

1. If you have a Red Hat CodeReady Workspaces 2.14 or 2.15 deployment available then go to your dashboard and click on "Get Started" in the menu on the left.
2. Select the "Custom Workspace" tab.
3. In the form you see then just paste this URL into the field labelled "URL of devfile": <https://raw.githubusercontent.com/IBM/zopeneditor-about/master/che/ibm-z-devfile.yaml> and click the "Load devfile" button.
4. Review the contents of the yaml file and make changes if needed.
5. Scroll down and click the "Create & Open" button.

## Explore the editor

1. Che will start with the Z Open Editor workspace and sample files.
2. You can open the sample programs in your preferred language and try the editor.
3. Find the full editor documentation [here](https://ibm.github.io/zopeneditor-about/Docs/introduction.html).
