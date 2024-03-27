import{r,o as p,a as l,b as e,d as o,w as i,F as c,c as n,e as t}from"./app.8943f21e.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";const u={},d=n('<h1 id="local-preprocessor-support" tabindex="-1"><a class="header-anchor" href="#local-preprocessor-support" aria-hidden="true">#</a> Local preprocessor support</h1><p>Z Open Editor provides the advanced capability to integrate parsing of COBOL programs with a custom preprocessor to allow editing programs that contain such preprocessor statements without causing the editor to show syntax errors. The preprocessor would be executed on a developer machine by Z Open Editor in the background, taking COBOL with custom code and transforming it to valid COBOL. Users can then edit such programs by using the preprocessor output to still provide full language support such as code completion, syntax error highlighting, and outline view. The editor would not learn the preprocessor language, but rather ensure the the resulting preprocessed output is still valid COBOL.</p><h2 id="example-workflow" tabindex="-1"><a class="header-anchor" href="#example-workflow" aria-hidden="true">#</a> Example workflow</h2><p>The following workflow is written from the perspective of COBOL developer, Deb.</p><ol><li>Deb installs a command-line centric preprocessor program on her local development machine.</li><li>Deb creates a <code>zapp.yaml</code> file with a preprocessor profile type. The profile specifies the command-line for running the preprocessor on the currently edited program file as well as the output path for the preprocessed program files.</li><li>Deb edits a program file with preprocessor statements in Z Open Editor.</li><li>Deb either manually starts preprocessing the program via a right-click menu command or she created a user setting to automatically run the preprocessor on Save.</li><li>Z Open Editor starts the preprocessor command in the background and sends the resulting output file to its COBOL parser.</li><li>Z Open Editor&#39;s COBOL parser will compare the program in the editor with the output of the preprocessor command.</li><li>Deb hovers over processor statements in Z Open Editor, which displays the resulting COBOL.</li><li>Deb continues editing the program in Z Open Editor. Z Open Editor continues to provide full language support for all the parts of the program that are not preprocessor statements.</li></ol>',5),m=t("To learn and explore this sample workflow, we have provided a example preprocessor and code samples in our Github repository at "),f={href:"https://github.com/ibm/zopeneditor-sample/tree/wazi-main/preprocessor",target:"_blank",rel:"noopener noreferrer"},g=t("https://github.com/ibm/zopeneditor-sample/tree/wazi-main/preprocessor"),b=t(". Review the "),_={href:"https://github.com/ibm/zopeneditor-sample/tree/wazi-main/preprocessor/README.md",target:"_blank",rel:"noopener noreferrer"},w=t("Readme"),k=t(" file in this folder with detailed instructions for building and running the sample."),y=e("h2",{id:"requirements-for-the-preprocessor",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#requirements-for-the-preprocessor","aria-hidden":"true"},"#"),t(" Requirements for the preprocessor")],-1),v=e("p",null,"To be able to integrate your preprocessor with Z Open Editor, it must fulfill these requirements:",-1),x=e("ul",null,[e("li",null,"It needs to run locally on your development machine where Z Open Editor is running."),e("li",null,"You need to be able to run the processor via command-line."),e("li",null,"The command-line operation needs to create an output file that contains valid cobol."),e("li",null,"The output path can be computed by specifying a new file extension to be used with the program file name.")],-1),O=e("h2",{id:"zapp-profile",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#zapp-profile","aria-hidden":"true"},"#"),t(" ZAPP profile")],-1),E=t("The integration of the preprocessor with the editor is handled via a "),A=t("ZAPP file profile"),C=t(". Such a profile could look like this:"),L=n(`<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> extended<span class="token punctuation">-</span>cobol
  <span class="token key atrule">type</span><span class="token punctuation">:</span> preprocessor
  <span class="token key atrule">location</span><span class="token punctuation">:</span> local
  <span class="token key atrule">settings</span><span class="token punctuation">:</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>JAVA_HOME<span class="token punctuation">}</span>/bin/java <span class="token punctuation">-</span>jar $<span class="token punctuation">{</span>WORKSPACE<span class="token punctuation">}</span>/preprocessor/my<span class="token punctuation">-</span>preprocessor/target/my<span class="token punctuation">-</span>preprocessor<span class="token punctuation">-</span>1.0<span class="token punctuation">-</span>SNAPSHOT.jar $<span class="token punctuation">{</span>input_file<span class="token punctuation">}</span> $<span class="token punctuation">{</span>output_file<span class="token punctuation">}</span>
    <span class="token key atrule">outputPath</span><span class="token punctuation">:</span> ./preprocessor/output
    <span class="token key atrule">fileExtension</span><span class="token punctuation">:</span> cee
    <span class="token key atrule">environmentVariables</span><span class="token punctuation">:</span>
      <span class="token key atrule">VARIABLE1</span><span class="token punctuation">:</span> value1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>In the settings object the following properties can be used:</p>`,2),P=e("thead",null,[e("tr",null,[e("th",null,"Property"),e("th",null,"Description")])],-1),Z=e("td",null,"command",-1),T=t("The command line to be executed. You can mix the command line with "),B=t("ZAPP Variables"),z=t(" as well as use the predefined variables "),R=e("code",null,"${input_file}",-1),V=t(" and "),S=e("code",null,"${output_file}",-1),D=t(". You need to define "),$=e("code",null,"${JAVA_HOME}",-1),I=t(" and "),N=e("code",null,"${WORKSPACE}",-1),j=t(" in the example above as ZAPP variables. Environment variables can only be used by specifying them with the below "),q=e("code",null,"environmentVariables",-1),W=t(" property."),Y=e("tr",null,[e("td",null,"outputPath"),e("td",null,"The base path in which the output file should be created. This path must be inside the current VS Code workspace so that the editor can see and process the files.")],-1),H=e("tr",null,[e("td",null,"fileExtension"),e("td",null,"The file extension to be used for the output files.")],-1),M=e("tr",null,[e("td",null,"environmentVariables"),e("td",null,"An optional sub-object to specify the environment variables that should be created before executing the command.")],-1),F=n('<h2 id="running-the-preprocessor" tabindex="-1"><a class="header-anchor" href="#running-the-preprocessor" aria-hidden="true">#</a> Running the preprocessor</h2><p>After you specify the ZAPP profile, you can run the preprocessor in the following ways:</p><ol><li>Right-click and choose <strong>Execute local preprocessor command</strong> to manually run the preprocessor in the program file editor.</li><li>Automatically run the preprocessor via the VS Code user setting <code>zopeneditor.cobol.autoPreprocessor</code>. The setting can have one of the values: <ul><li>off: disables the automatic preprocessor execution.</li><li>open: when a program file is opened in the editor.</li><li>save: when a program file is saved in the editor.</li><li>both: when opening and saving a program file in the editor.</li></ul></li></ol><p>When the preprocessor command runs, a progress bar is displayed. When the preprocessor finishes, it refreshes the editor and any syntax errors that were caused by preprocessor statements should go away or, if they contained problems, will show those instead.</p><p>If the processor command execution failed and produced errors, a dialog will be shown with a button to open the Z Open Editor log file viewer which lists the detailed error message produced by the preprocessor command.</p><h2 id="using-the-preprocessor-output-in-the-editor" tabindex="-1"><a class="header-anchor" href="#using-the-preprocessor-output-in-the-editor" aria-hidden="true">#</a> Using the preprocessor output in the editor</h2><p>After the preprocessor is executed, you can hover the mouse of preprocessor statements in their program file to see the COBOL code that was generated for the statement. You can edit these statements and all other COBOL code in the program.</p><p>Syntax errors for preprocessor statements will not be available until the preprocessor runs again. Syntax errors for other regular COBOL will be shown while typing as usual in Z Open Editor.</p><p>To get a side-by-side view of the program before and after preprocessing, you can use the right-click menu option <strong>Compare preprocessor input and output files</strong>.</p><h2 id="limitations" tabindex="-1"><a class="header-anchor" href="#limitations" aria-hidden="true">#</a> Limitations</h2><p>Restriction: Several limitations are associated with using a preprocessor within Z Open Editor:</p><ul><li>Code formatting will be disabled for files that contain preprocessor statements.</li><li>Not all preprocessor statements within an EXEC block might be identified.</li><li>All preprocessor statements might not be identified if the code is reorganized.</li><li>Preprocessor statements that modify text in another location of a program might not be identified.</li><li>Real-time syntax checking of programs that contain preprocessor statements that contain only the beginning or ending of a language comment might not be identified.</li></ul>',12);function J(K,U){const s=r("ExternalLinkIcon"),a=r("RouterLink");return p(),l(c,null,[d,e("p",null,[m,e("a",f,[g,o(s)]),b,e("a",_,[w,o(s)]),k]),y,v,x,O,e("p",null,[E,o(a,{to:"/Docs/zapp.html"},{default:i(()=>[A]),_:1}),C]),L,e("table",null,[P,e("tbody",null,[e("tr",null,[Z,e("td",null,[T,o(a,{to:"/Docs/zapp.html#configure-zapp-files-with-user-setting-variables"},{default:i(()=>[B]),_:1}),z,R,V,S,D,$,I,N,j,q,W])]),Y,H,M])]),F],64)}var Q=h(u,[["render",J]]);export{Q as default};