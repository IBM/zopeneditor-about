# IBM Z® Open Editor in the cloud with Eclipse Che examples

Go to this article to learn in detail about how to use these files for running IBM Z Open Editor in Eclipse Che: <https://ibm.github.io/zopeneditor-about/Blog/in-the-cloud-with-che.html>

## Quick Start

1. If you do not have an Eclipse Che installation go here and sign up for a free account (check the docs and video on that site for details): <https://developers.redhat.com/developer-sandbox>
2. In OpenShift use the Applications icon in the toolbar at the top right to open Red Hat CodeReady Workspaces, the Red Hat branded version of Eclipse Che.
3. In CodeReady Workspaces click on "Get Started" in the menu on the left.
4. Select the "Custom Workspace" tab.
5. In the form you see then just paste this URL into the field labelled "URL of devfile": <https://raw.githubusercontent.com/IBM/zopeneditor-about/master/che/ibm-z-devfile.yaml> and click the "Load devfile" button.
6. Scroll down and click the "Create & Open" button.
7. Che will start with the Z Open Editor workspace and sample files.
8. In the File explorer create a top-level directory called `.theia` and drag the file `ibm-zopeneditor-sample/.vscode/settings.json` into that new directory.
9. Now you can open the sample programs and try the editor.
10. Find the full editor documentation [here](https://ibm.github.io/zopeneditor-about/Docs/introduction.html).
