# IBM Z® Open Editor

**IBM Z Open Editor (v0.3.3) is an extension for Visual Studio Code that provides language support for the IBM® Enterprise COBOL, PL/I, and JCL languages.**

This extension provides language support for the IBM Enterprise [COBOL 6.2](https://www.ibm.com/us-en/marketplace/ibm-cobol) and [PL/I 5.2](https://www.ibm.com/us-en/marketplace/pli-compiler-zos) programming languages for z/OS®. This also includes capabilities for embedded statements for CICS 5.5, IMS 15.1.0 and SQL DB2 for z/OS 12.1. Earlier versions of any of these components will also work.

It is realizing its languages support by implementing fully functional [language servers](https://langserver.org/) together with additional editor enhancements that enable mainframe developers to utilize features such as:

- Real-time syntax checking and highlighting while you type
- Problems view with all syntax errors and (in COBOL) unreachable code
- Outline view and outline search
- For both variables and paragraphs:
  - Declaration hovers
  - Peek definition
  - Go to definition
  - Find all references
- Code and variable completion
- Code template snippets
- Finding and navigating references
- Previewing of included copybooks and include files
- Navigate to copybooks and include files
- Refactoring such as "rename symbol"
- Search and replace refactoring across multiple program files

For the [Job Control Language (JCL)](https://www.ibm.com/support/knowledgecenter/zosbasics/com.ibm.zos.zconcepts/zconc_whatisjcl.htm) the extension provides simple syntax highlighting.

To learn more about the IBM Z Open Editor extension's capabilities, we suggest that you walk through our [**full documentation**](https://github.com/IBM/zopeneditor-about/Docs/introduction.html) and try it with the [example repository](https://github.com/IBM/zopeneditor-tutorial) provided on GitHub.

To interact with z/OS, we recommend installing the [Zowe VS Code Extension](https://marketplace.visualstudio.com/items?itemName=Zowe.vscode-extension-for-zowe). This extension can be used to edit COBOL and PL/I files opened on z/OS MVS™ and USS using the Zowe extension's Data Sets and USS views. It can even run JCL and let you browse job spool files.

## Table of contents

- [Privacy notice](#privacy-notice)
- [Prerequisites](#prerequisites)
- [Configuring Java](#configuring-java)
- [COBOL and PL/I Language Server Protocol capability examples](#cobol-and-pli-language-server-protocol-capability-examples)

## Privacy notice for feedback

The IBM Z Open Editor is provided free of charge, but we ask you to provide us feedback via the various means available such as submitting an [issue in our GitHub repository](https://github.com/IBM/zopeneditor-about/issues), providing review in the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=ibm.zopeneditor#review-details) as well as keeping the built-in telemetry and crash reports enabled.

This editor uses [Microsoft VS Code's Telemetry](https://code.visualstudio.com/docs/getstarted/telemetry) solution that collects telemetry data, which is used to help understand how to improve the product. While we appreciate the insights this data provides, we also know that not everyone wants to send usage data and you can disable telemetry as described in [Disable Telemetry Reporting](https://code.visualstudio.com/docs/getstarted/telemetry#_disable-telemetry-reporting). You can also read [IBM's General Privacy Statement](https://www.ibm.com/privacy/us/en/) to learn more about our policies.

This current release of IBM Z Open Editor will collect anonymous data for the following events:

- Activation of this VS Code extension
- Opening files of a specific language such as COBOL, PL/I, JCL
- Deactivation of this VS Code extension

Each such event is logged with the following information:

- Event time
- Operating system and version
- Country or region
- Anonymous user and session ID
- Version numbers of Microsoft VS Code and IBM Z Open Editor
- Z programming language used

## Prerequisites

Review the [IBM Z Open Editor License Agreement](https://github.com/IBM/zopeneditor-about/raw/master/product-licenses/LICENSE.txt), [Third Party Notices](https://github.com/IBM/zopeneditor-about/raw/master/product-licenses/NOTICES.txt), and [terms and conditions for separately licensed code](https://github.com/IBM/zopeneditor-about/raw/master/product-licenses/NON_IBM_LICENSE.txt) before downloading.

Here are the prerequisites for installing this extension in Visual Studio Code:

- IBM Java™ version 8 or later - 64 bit: The COBOL and PL/I language servers included in this extension are implemented in Java. Therefore, you need to install and configure a 64-bit Java runtime in order to start it successfully.
  - The preferred Java SDK to use is [IBM Java 8](https://developer.ibm.com/javasdk/downloads/sdk8).
  - Alternatively, you can use [Oracle Java SDK 8](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) and any later version of Oracle Java or [OpenJDK](https://openjdk.java.net).

  Various settings are provided to configure how the extension uses Java. See the [Configuring Java](#configuring-java) section below for more details.

- (Optional) Git: To use the features that involve Git, you must install Git and have it available in your system path so that VS Code can display it. On Macs, Git comes out of the box. On Linux, you can install Git with your distribution's package manager. On Windows, you can get Git from <https://git-scm.com>.

- (Optional) Zowe CLI 2.22 and the Zowe VS Code extension 0.24.1 or later: To make use of [Zowe](https://zowe.org) to open and edit files directly from z/OS MVS or USS, you need Zowe client software and z/OSMF configured. For more information, see [Installing Zowe CLI](https://docs.zowe.org/stable/user-guide/cli-installcli.html) and [VS Code Extension for Zowe](https://marketplace.visualstudio.com/items?itemName=Zowe.vscode-extension-for-zowe#user-content-prerequisites). Once installed, you must [create a Zowe CLI user profile](https://ibm.github.io/zopeneditor-about/Docs/zowe_interactwithzos.html#creating-a-zowe-cli-profile) so that data sets can be found and accessed.

If you are looking for some COBOL, PL/I, or JCL code that you can use to explore the editor features then you can use samples that we maintain on Github. Assuming that you have Git installed, create a work directory somewhere on your machine and clone the sample repository:

```bash
git clone https://github.com/IBM/zopeneditor-sample.git
```

Then once you finished installing the IBM Z® Open Editor extension open the directory `zopeneditor-sample` using the `File > Open...` menu.

## Configuring Java

The COBOL and PL/I language servers utilized by IBM Z Open Editor were implemented using the Java programming language. Therefore, a Java Runtime is required to be available in the program path to start in VS Code. The IBM Z Open Editor extension utilizes VS Code Settings properties, which can be added to VS Code workspace or user settings, to configure which and how Java should be used. These settings allow you to select the specific installation of Java to pick, in case you have several installations, as well as set parameters such as how much memory you want the extension to use. You can make the settings by editing the `settings.json` file for your workspace or in the user preferences settings directly.

### Selecting the Java installation to use

The language server clients running in the IBM Z Open Editor VS Code extension try looking in different places to find a matching Java. By default, it looks for Java using the `JAVA_HOME` environment variable if no settings were provided for the user to the current workspace. If that was not defined, it finds Java in the user's `PATH`. If both the `JAVA_HOME` environment variable and user's `PATH` do not contain a valid Java installation, you will see an error message that shows the language server for either COBOL or PL/I might not be started.

To fix the problem, either provide the missing value or define a Settings entry in your VS Code user or workspace settings. The setting always has precedence over the other two options described above. In other words, it tries to use that Java installation first. This allows you to specify a different Java for IBM Z Open Editor other than the default of your computer.

The configuration for the alternative `JAVA_HOME` will accept a path to the Java SDK, for example:

On Mac:

```json
"zopeneditor.JAVA_HOME": "/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home"
```

On Windows:

```json
"zopeneditor.JAVA_HOME": "C:\\Program Files\\Java\\jdk1.8.0_171"
```

### Configuring the Java memory allocation

By default, the language server clients that start the language servers for COBOL or PL/I allocate a maximum of 512 MB of memory for each. In other words, they start using much less memory in the beginning, but you might run out of memory when working on large program files; or your computer might not support such a large amount of memory in the first place. To have more flexibility in how much memory the language servers are allowed to allocate, the following VS Code Setting is provided to specify the maximum value. When you use both COBOL and PL/I, you need to double the amount specified.

```json
"zopeneditor.server.memoryAllocation": 1024
```

## COBOL and PL/I Language Server Protocol capability examples

### Outline view

#### Outline view explorer

You can use this view to:

- Expand and collapse sections such as Division Headings, Section Headings, and Variable Group Names in the Outline View.
- Recognize includes, procedures, loops quickly via the icons located by the various items.
- Go to a wanted location in the code by clicking that section header in the view.
- Sort by Position, Name, or Type.

![ ](readme/outline-explorer.gif)

#### Outline view search

Searching for identifiers within the outline by pressing `Ctrl+Shift+O` (PC) or `Cmd+Shift+O` (Mac) within the Editor window.

![ ](readme/outline-search.gif)

### Declaration hovers

To see the working storage definition or DCL definition and the parent group of a variable or paragraph name, move your mouse cursor over to the variable or paragraph name.

![ ](readme/declaration-hover.gif)

### Peek definition

Click on a variable or paragraph name, right-click for menu, and choose `Peek Definition`.  This opens a CodeLens box that shows where the variable or paragraph was defined in the code. If you use the keyboard shortcut `Alt+F12` (Windows) or `Option+F12` (Mac), the variable or paragraph name is only clicked once before the keyboard shortcuts are pressed. Double-Click any result to go to that location in the file.

![ ](readme/peek-definition.gif)

### Preview copybooks and include files

To preview the contents of a copybook or included file, move your mouse cursor over the copybook name in a `COPY` statement in COBOL or `%INCLUDE` in PL/I. To open the file in a separate editor, press `Ctrl+Click` (Windows) or `Cmd+Click` (Mac). If you have Zowe CLI installed, you can define a search path to resolve copybooks over the network against your remote MVS data sets or even USS directories (COBOL only at the moment).

![ ](readme/preview-cpy.gif)

### Peek references

Select a variable or a paragraph name, right-click for menu, and choose `Peek References` or use shortcut `Shift+F12` (Windows and Mac).  Double-click any result in the CodeLens box to go to that location in the file.

![ ](readme/peek-references.gif)

### Code and variable completion

When you start typing a command, a selection list of commands and code snippets are displayed automatically or by typing `Ctrl+Space` depending on your preferences settings.
This feature also works for variable names defined in the program.

![ ](readme/code-complete.gif)

## Summary of keyboard shortcuts

|Description                                       | Windows                     | Mac
|--------------------------------------------------|------------------------|----------------------------------|
| Search for identifiers within the outline        |`Ctrl+Shift+O`          |`Cmd+Shift+O`                     |
| Show the list of available code completion          |`Ctrl+space`            |`Ctrl+Space`                      |
| Open copybook/include files in a separate editor    |`Ctrl+click`            |`Cmd+Click`                       |
| Change all occurrences                            |`Ctrl+F2`               |`Cmd+F2`                          |
| Find all references                              |`Alt+shift+F12`         |`Option+Shift+F12`                |
| Peek references                                  |`Shift+F12`             |`Shift+F12`                       |
| Go to definition                                 |`F12`                   |`F12`                             |
| Peek definition                                  |`Alt+F12`               |`Option+F12`                      |
| Rename symbols                                    |`F2`                    |`F2`                              |
