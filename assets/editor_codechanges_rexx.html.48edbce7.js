import{c as e}from"./app.8d6890da.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";var t="/zopeneditor-about/assets/rexx-outline.874bbe03.gif",i="/zopeneditor-about/assets/rexx-completion.d6ede0cc.gif",n="/zopeneditor-about/assets/rexx-hover.177d05b4.gif",s="/zopeneditor-about/assets/rexx-references.c3178797.gif";const r={},a=e('<h1 id="making-rexx-code-changes" tabindex="-1"><a class="header-anchor" href="#making-rexx-code-changes" aria-hidden="true">#</a> Making REXX code changes</h1><p>In addition to COBOL, PL/I, and High Level Assembler (HLASM), IBM Z\xAE Open Editor supports TSO/E REXX editing. You can use the following features to edit REXX programs effectively.</p><p>With the syntax highlighting capability, you can quickly distinguish the comments, strings, constants, variables, keywords, labels, functions, comparison, and arithmetic in a REXX program.</p><p>The editor provides the following features and capabilities:</p><h2 id="browsing-code-by-using-the-outline-view" tabindex="-1"><a class="header-anchor" href="#browsing-code-by-using-the-outline-view" aria-hidden="true">#</a> Browsing code by using the Outline view</h2><p>As you view the source, you can use the Outline view to efficiently explore and navigate the code of the program. By looking through the items in this view, you can see the internal routines, and directly navigate to one by selecting it.</p><p><img src="'+t+'" alt="REXX Outline"></p><p><strong>How to use it</strong></p><p>You can use the Outline view only after you have opened a file or program. If the Outline view is not already expanded, you can open it by clicking <strong>View &gt; Open view &gt; Outline</strong>.</p><p>You can use this view to:</p><ul><li>Recognize internal routines quickly via the icons in the outline view.</li><li>Go to a wanted location in the code by clicking that section header in the view.</li><li>Sort by Position or Name.</li><li>Search for identifiers within the outline by pressing Ctrl+Shift+O (Windows), or Cmd+Shift+O (Mac) within the Editor window.</li></ul><p>When you move your cursor over the program, outline nodes are automatically selected. To toggle this and other features related to the Outline View, hover over the upper right corner of the Outline View. You can see the option <strong>...</strong>, where you can click to find multiple options to organize your outline view such as Follow on Cursor, Filter by Type and Sort by Name, Position, and Type.</p><h2 id="code-completion" tabindex="-1"><a class="header-anchor" href="#code-completion" aria-hidden="true">#</a> Code completion</h2><p>The code completion feature suggests simple symbols, constant symbols, compound symbols, stems, function calls, keyword instructions, and built-in functions. The editor applies a suggestion to the file based on the context of the cursor position. For a cursor position inside a stem, the suggestion replaces the entire symbol. For a cursor position inside the tail of a compound symbol, the suggestion replaces a segment of the symbol. The casing of the suggestion replaces the casing of the symbol in the file. The code completion suggestions are not filtered by case.</p><p><img src="'+i+'" alt="Code Completion"></p><p><strong>How to use it</strong></p><p>The code completion suggestion is displayed automatically while you are typing outside of any comments or strings.</p><h2 id="hovering-for-declaration" tabindex="-1"><a class="header-anchor" href="#hovering-for-declaration" aria-hidden="true">#</a> Hovering for declaration</h2><p>The hover feature provides rich information about keyword instructions and built-in functions. By moving your cursor over these elements, a small pop-up window is displayed containing a title, description, and example usage.</p><p><img src="'+n+'" alt="REXX Hover"></p><p><strong>How to use it</strong></p><p>You can see hovers for keyword instructions and built-in functions by moving your cursor over the element. The hover disappears when your cursor moves elsewhere.</p><h2 id="operations-on-symbols" tabindex="-1"><a class="header-anchor" href="#operations-on-symbols" aria-hidden="true">#</a> Operations on symbols</h2><p>By right clicking on a symbol, you can see a list of available operations.</p><p><strong>How to use it</strong></p><ul><li>Click <strong>Find All References</strong>: Alt+Shift+F12 (Windows) or Option+Shift+F12(Mac)</li><li>Click <strong>Peek References</strong>: Shift+F12 (Windows and Mac)</li></ul><p>A reference is defined as any matching symbol not in a comment or string. Keywords and built-in functions do not appear as references. The matches are determined by the context of the symbol. Internal routines match to their calls. Stems match to other stems. Simple symbols match to other simple symbols. Constant symbols match to other constant symbols. For compound symbols, the tail is broken into separate pieces, delimited by its periods, and matched to other constant or simple symbols. Additionally, the derivation and scope of a symbol is not considered.</p><p><img src="'+s+'" alt="REXX PEEK REFERENCES"></p><h2 id="syntax-checking" tabindex="-1"><a class="header-anchor" href="#syntax-checking" aria-hidden="true">#</a> Syntax checking</h2><p>The syntax checking feature underlines unrecognized statements and expressions in red, which helps you to make quick corrections and reduce compile errors.</p><p><strong>How to use it</strong></p><p>To see all the syntax errors in the open files, open the Problems view through the View menu or by clicking the error and warning icon at the bottom in the status bar. Double-click the list item to directly go to the problem.</p><h2 id="undoing-and-redoing" tabindex="-1"><a class="header-anchor" href="#undoing-and-redoing" aria-hidden="true">#</a> Undoing and redoing</h2><p>Undo your changes by pressing Ctrl+Z (Windows) or Cmd+Z (Mac). Redo your changes by pressing Ctrl+Shift+Z (Windows) or Cmd+Shift+Z (Mac).</p>',34);function c(h,l){return a}var u=o(r,[["render",c]]);export{u as default};