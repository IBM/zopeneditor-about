import{r as a,o,a as r,b as e,d as t,F as u,c as i,e as n}from"./app.53665350.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const p={},c=i(`<h1 id="creating-a-configuration-profile-in-zowe-explorer-v2-0-0" tabindex="-1"><a class="header-anchor" href="#creating-a-configuration-profile-in-zowe-explorer-v2-0-0" aria-hidden="true">#</a> Creating a configuration profile in Zowe Explorer v2.0.0</h1><h2 id="initializing-the-configuration-file" tabindex="-1"><a class="header-anchor" href="#initializing-the-configuration-file" aria-hidden="true">#</a> Initializing the configuration file</h2><p>A team configuration profile can be created using Zowe CLI or Zowe Explorer VS Code Extension in the following ways:</p><h3 id="zowe-cli" tabindex="-1"><a class="header-anchor" href="#zowe-cli" aria-hidden="true">#</a> Zowe CLI</h3><p>Run <code>zowe config init --global-config</code> which will prompt for a username and password once the command is issued.</p><h3 id="zowe-explorer-vs-code-extension" tabindex="-1"><a class="header-anchor" href="#zowe-explorer-vs-code-extension" aria-hidden="true">#</a> Zowe Explorer VS Code Extension</h3><ol><li><p>Click the Zowe icon on the left side bar of your VS Code window.</p></li><li><p>Click the <code>+</code> symbol in tree view of Zowe Explorer.</p></li><li><p>Select <code>Create a New Team Configuration File</code> when prompted in the input box shown.</p></li><li><p>If no workspace is opened a global configuration will be created in your <code>~/.zowe</code> directory and opened in the VS Code text editor. If a workspace is opened a following prompt will be presented for the user to select global or project level config, a project level config will be created in the top level of the workspace. After selecting the appropriate file, the file will be opened in the text editor.</p></li><li><p>Add host and port properties to the loaded file after creating the configuration file.</p></li></ol><h2 id="examples-of-configuration-files" tabindex="-1"><a class="header-anchor" href="#examples-of-configuration-files" aria-hidden="true">#</a> Examples of configuration files</h2><p>A default team configuration file will look like this upon creation:</p><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;$schema&quot;: &quot;./zowe.schema.json&quot;,
    &quot;profiles&quot;: {
        &quot;zosmf&quot;: {
            &quot;type&quot;: &quot;zosmf&quot;,
            &quot;properties&quot;: {
                &quot;port&quot;: 443
            },
            &quot;secure&quot;: []
        },
        &quot;tso&quot;: {
            &quot;type&quot;: &quot;tso&quot;,
            &quot;properties&quot;: {
                &quot;account&quot;: &quot;&quot;,
                &quot;codePage&quot;: &quot;1047&quot;,
                &quot;logonProcedure&quot;: &quot;IZUFPROC&quot;
            },
            &quot;secure&quot;: []
        },
        &quot;ssh&quot;: {
            &quot;type&quot;: &quot;ssh&quot;,
            &quot;properties&quot;: {
                &quot;port&quot;: 22
            },
            &quot;secure&quot;: []
        },
        &quot;base&quot;: {
            &quot;type&quot;: &quot;base&quot;,
            &quot;properties&quot;: {
                &quot;host&quot;: &quot;examplehost.com&quot;,
                &quot;rejectUnauthorized&quot;: true
            },
            &quot;secure&quot;: [
                &quot;user&quot;,
                &quot;password&quot;
            ]
        }
    },
    &quot;defaults&quot;: {
        &quot;zosmf&quot;: &quot;zosmf&quot;,
        &quot;tso&quot;: &quot;tso&quot;,
        &quot;ssh&quot;: &quot;ssh&quot;,
        &quot;base&quot;: &quot;base&quot;
    },
    &quot;autoStore&quot;: true
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><h3 id="rse-configuration-file" tabindex="-1"><a class="header-anchor" href="#rse-configuration-file" aria-hidden="true">#</a> RSE configuration file</h3><p>A team configuration file using RSE as the default profile will look like this:</p><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
  &quot;$schema&quot;: &quot;./zowe.schema.json&quot;,
  &quot;profiles&quot;: {
    &quot;rse&quot;: {
      &quot;type&quot;: &quot;rse&quot;,
      &quot;properties&quot;: {
        &quot;port&quot;: 6803,
        &quot;basePath&quot;: &quot;rseapi&quot;,
        &quot;protocol&quot;: &quot;https&quot;
      },
      &quot;secure&quot;: []
    },
    &quot;base&quot;: {
      &quot;type&quot;: &quot;base&quot;,
      &quot;properties&quot;: {
        &quot;host&quot;: &quot;examplehost.com&quot;,
        &quot;rejectUnauthorized&quot;: true
      },
      &quot;secure&quot;: [&quot;user&quot;, &quot;password&quot;]
    }
  },
  &quot;defaults&quot;: {
    &quot;rse&quot;: &quot;rse&quot;,
    &quot;base&quot;: &quot;base&quot;
  },
  &quot;autoStore&quot;: true
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>`,13),b=n("For more information on other types of team configuration profiles, view Zowe CLI's documentation on "),q={href:"https://docs.zowe.org/stable/user-guide/cli-using-using-team-profiles",target:"_blank",rel:"noopener noreferrer"},m=n("Using team profiles"),d=n(" with example configurations.");function h(f,g){const s=a("ExternalLinkIcon");return o(),r(u,null,[c,e("p",null,[b,e("a",q,[m,t(s)]),d])],64)}var _=l(p,[["render",h]]);export{_ as default};
