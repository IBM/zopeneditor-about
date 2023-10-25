import{r,o as s,a as l,b as o,d as i,w as n,F as c,c as a,e}from"./app.a202a588.js";import{_ as h}from"./createbranch.c5e1488b.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const p={},u=a('<h1 id="hlasm-editing-tutorial" tabindex="-1"><a class="header-anchor" href="#hlasm-editing-tutorial" aria-hidden="true">#</a> HLASM editing tutorial</h1><h2 id="about-this-tutorial" tabindex="-1"><a class="header-anchor" href="#about-this-tutorial" aria-hidden="true">#</a> About this tutorial</h2><p>For the tutorial, you will assume the role of an HLASM developer who has received a requirement to enhance the output from <code>ASAM1</code> to also write the hexedecimal value of a character string. The current version simply reads in a string from an input file, and writes the record number, column number headings, and the input string to an output file.</p><h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2>',4),g=e("Install IBM Z Open Editor and its prerequisites such as Java as described in "),m=e("Getting Started"),f=e("."),y=o("h2",{id:"procedure",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#procedure","aria-hidden":"true"},"#"),e(" Procedure")],-1),w=a(`<li><p>To enhance the report, you need to import the source code first.</p><ol><li>In VS Code, click <strong>Terminal</strong> &gt; <strong>New Terminal</strong> to open a terminal.</li><li>In the Terminal window, navigate to the desired directory for the source code by entering, for example, the following command:<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /c/Users/Public
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li>To clone the source code from the Git repository, enter the git repository of the sample files:<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git clone https://github.com/IBM/zopeneditor-sample.git
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li>After the clone is completed, click <strong>File</strong> &gt; <strong>Open Folder</strong>. Then, in the <strong>Open Folder</strong> window, select the <code>C:/Users/Public/zopeneditor-sample</code> directory that you cloned, and click <strong>Select Folder</strong>.</li></ol></li><li><p>Review the source code.</p><p>The current sample application consists of one HLASM program (<code>ASAM1</code>), one copybook (<code>REGISTRS</code>), two JCL members to set up and run the application (<code>ASMALLOC</code>, <code>RUNASAM1</code>), and the input data file (<code>FILEIN)</code>.</p><p><code>ASAM1</code> reads in the <code>FILEIN</code> data file record as a character string, and then simply writes out the string to the output file <code>FILEOUT</code>.</p></li><li><p>(Optional) As you view the source in VS Code, you can use the Outline view to efficiently explore and navigate the code of the program. Note that the Outline view can be used only after you have opened a file or program in VS Code.</p><p>If the Outline view is not already expanded, you can open it by clicking <strong>View</strong> &gt; <strong>Open view</strong> &gt; <strong>Outline</strong>. By looking through the items in this view, you can get an idea of what the program does at a high level.</p><p>Note: <code>ASAM1.asm</code> is a simple program to use in the editing tutorial. To see a more robust Outline view, you can open the <code>IRR@XACS.asm</code> file, an example from <code>SYS1.SAMPLIB</code>. The <code>IRR@XACS.asm</code> file serves as a better example to demonstrate the the Outline view and its capabilities, and you can further explore it as follows:</p><ul><li>Expand and collapse sections such as Dummy Sections (DSECT) and Control Sections (CSECT), and Macros in the Outline View.</li><li>Go to a desired location in the code by clicking that section header in the view.</li><li>Sort by Position, Name, or Type.</li><li>See <a href="customizing_the_outline_view#hlasm">Customizing the Outline view</a> to configure what types of symbols to appear in the Outline view.</li></ul></li><li><p>(Optional) In the <code>ASAM1.asm</code> file, you will see code syntax highlighting in the opened file, which helps you quickly distinguish between HLASM reserved words, comments, constants, and variables.</p><p>To see all the syntax errors in the open files, click <strong>View</strong> &gt; <strong>Problems</strong> or click the error and warning icon at the bottom in the status bar. Click the list item to directly go to the problem.</p></li><li><p>(Optional) Another visual feature of the editor is the grey lines that help with formatting as you code. You will notice the column 72 for the continuation character and the line at column 16 to show where a continued line can begin.</p></li><li><p>Modify the code in the <code>ASAM1.asm</code> file to also write the hexedecimal value of a character string to the output. When you enter code, the code completion capability provides you with matching lists from which you can select commands, defined variables, and code snippets.</p><p>For example, place your cursor at the end of line 40, and hit the Enter key to begin a new line on line 41. Try typing the command <code>BALR</code>, and as you type, you can select from the lists of code completion suggestions that appear. You will also see a pop-up that displays the name of the command and the format of the command. Delete the new line you just typed on line 41 and continue with the tutorial.</p></li>`,6),b=e("(Optional) The hover feature works on variables and copybooks. You can hover over a variable to see its definition. You can hover over a copybook after configuring your ZAPP file and the editor will resolve it and display it in a pop-up window. After the copybook is opened, you can press Ctrl+Click on Windows or Cmd+Click on Mac to open the copybook in an editor window. Copybook resolution is based on "),v=e("ZAPP file property groups"),S=e("."),C=a('<li><p>(Optional) The editor can show you all references of a variable or section in your code. When you double-click a variable or section name to highlight the entire name and then right-click it, you can see the following available actions:</p><ul><li><p>Click <strong>Change All Occurrences</strong>: Ctrl+F2 (Windows) or Cmd+F2 (Mac)</p><p>When you type the new name, all occurrences are changed simultaneously.</p><p><strong>Note</strong>: In the scroll bar on the right side of the editor, each occurrence is noted with a location bar.</p></li><li><p>Click <strong>Find All References</strong>: Alt+Shift+F12 (Windows) or Option+Shift+F12(Mac)</p><p>A Results References view for the variable or paragraph is displayed on the left side of the screen. Click any result to go to that location in the file.</p></li><li><p>Click <strong>Peek References</strong>: Shift+F12 (Windows and Mac)</p><p>A Results References view is displayed in the CodeLens box underneath the variable or paragraph. Click any result to go to that location in the file.</p></li><li><p>Click <strong>Go to Definition</strong>: F12 (Windows and Mac)</p><p>Go to the location where the variable or paragraph is defined. It opens the copybook or include if applicable.</p></li><li><p>Click <strong>Go to Symbol</strong>: Ctrl+Shift+O (Windows) or Cmd+Shift+O (Mac)</p><p>When you enter an object name in the search bar or you scroll through the items to select the object, the cursor is moved to that location.</p></li><li><p>Click <strong>Peek Definition</strong>: Alt+F12 (Windows) or Option+F12 (Mac)</p><p>This opens a CodeLens box that shows where the variable or paragraph was defined in the code.</p></li></ul></li><li><p>Examine your code to analyze the impact of the requirement you received to determine the modifications needed. As you are to modify <code>ASAM1</code>, you need to search for all components that refer to the program.</p><p>To search for components referencing <code>ASAM1</code>, you can use the advanced search capabilities provided by the VS Code editor. Its Search view allows searching for strings and regular expressions across all files or a specific subset of files based on location or name patterns.</p><p>In the Explorer view, right-click in the background of the zopeneditor-sample, not showing any particular file or folder to initiate a search on all files:</p><ol><li><p>Select <strong>Find in Folder...</strong></p></li><li><p>Input the search term <code>ASAM1</code> and press Enter.</p><p>You can review some of the other search options such as using regular expressions and specifying patterns for files and folders to be excluded or included in the search.</p><p>For example, to perform a regular expression search, select the <strong>.*</strong> icon and change the search term to <code>ASAM1.*</code> and review the results. Results will appear in the Search panel.</p></li><li><p>Click on the result to navigate to that location file in the Editor panel.</p></li></ol></li><li><p>Open the integrated Git in VS Code, and create an isolated branch called <code>write-hex-value</code>, where no one but yourself can access the source code before you push the changes to the origin repository.</p><p>To create the branch:</p><ol><li>In VS Code on the lower left hand corner, click <img src="'+h+'" alt="create branch">.</li><li>Then, from the drop-down menu that is displayed at the top of VS Code, click <strong>Create new branch</strong>.</li><li>Specify a branch name of <code>write-hex-value</code>, and then press enter to confirm. The workspace is switched to the isolated <code>write-hex-value</code> branch now.</li></ol></li><li><p>Commit your changes into your <code>write-hex-value</code> branch.</p><p>Now that you have performed various code changes and refinements you can commit this file version of the application to the SCM to preserve and share it.</p><p>To commit your changes, click the Source Control icon on the left of VS Code. In the Source Control panel that opens, the changed program is listed in the CHANGES section. In the CHANGES section, hover on the <code>ASAM1.asm</code> program name and click the <strong>Stage changes (+)</strong> icon to move your changes to the staging area. In the Message text box, enter a comment for the changes such as <code>Implemented Hex Value</code>, and then click the <strong>Commit</strong> icon to commit your changes.</p></li>',4),_=e("Congratulations on completing the tutorial. For a more comprehensive list of the available features for code editing, see "),A=e("Making code changes"),k=e(".");function x(M,I){const t=r("RouterLink");return s(),l(c,null,[u,o("p",null,[g,i(t,{to:"/Docs/getting_started.html"},{default:n(()=>[m]),_:1}),f]),y,o("ol",null,[w,o("li",null,[o("p",null,[b,i(t,{to:"/Docs/setting_propertygroup.html"},{default:n(()=>[v]),_:1}),S])]),C]),o("p",null,[_,i(t,{to:"/Docs/editor_codechanges.html"},{default:n(()=>[A]),_:1}),k])],64)}var R=d(p,[["render",x]]);export{R as default};
