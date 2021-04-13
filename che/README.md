# IBM Z® Open Editor in the cloud with Eclipse Che examples

Go to this article to learn in detail about how to use these files for running IBM Z Open Editor in Eclipse Che: <https://ibm.github.io/zopeneditor-about/Blog/in-the-cloud-with-che.html>

## Quick Start

1. If you do not have an Eclipse Che installation go here and sign up for a free account (check the docs and video on that site for details): <https://developers.redhat.com/developer-sandbox>
2. In OpenShift use the Applications icon in the toolbar at the top right to open Red Hat CodeReady Workspaces, the Red Hat branded version of Eclipse Che.
3. Select the Sandbox authentication method and self-register yourself an account.
4. Once you are in you can subsequently bookmark and simply navigate to <http://workspaces.openshift.com> to get back to your Developer Sandbox for Red Hat OpenShift.

### Alternative 1: Simplest way for creating a workspace with Z Open Editor

5. If you want to then just get going with a workspace that uses Z Open Editor and Zowe Explorer, just paste this URL into a new browser tab: <https://workspaces.openshift.com/f?url=https://raw.githubusercontent.com/IBM/zopeneditor-about/master/che/ibm-z-devfile.yaml>

The `f` parameter in this URL provides a url to a devfile that contains all the details needed for configuring your workspace. If you have your own Eclipse Che or Red Hat CodeReady Workspaces cluster replace the base URL. Alternatively, you can use the steps below to import and modify the devfile to your needs, such as loading a different sample repo, follow the steps below.

### Alternative 2: Creating a workspace step by step

5. In CodeReady Workspaces click on "Get Started" in the menu on the left.
6. Select the "Custom Workspace" tab.
7. In the form you see then just paste this URL into the field labelled "URL of devfile": <https://raw.githubusercontent.com/IBM/zopeneditor-about/master/che/ibm-z-devfile.yaml> and click the "Load devfile" button.
8. Review the contents of the yaml file and make changes if needed.
9. Scroll down and click the "Create & Open" button.

## Explore the editor

10. Che will start with the Z Open Editor workspace and sample files.
11. In the File Explorer create a top-level directory called `.theia` and drag the file `ibm-zopeneditor-sample/.vscode/settings.json` into that new directory.
12. Now you can open the sample programs and try the editor.
13. Find the full editor documentation [here](https://ibm.github.io/zopeneditor-about/Docs/introduction.html).
