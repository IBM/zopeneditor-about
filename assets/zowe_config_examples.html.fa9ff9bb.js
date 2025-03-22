import{c as s}from"./app.d4490272.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=s(`<h1 id="example-zowe-configuation-setups" tabindex="-1"><a class="header-anchor" href="#example-zowe-configuation-setups" aria-hidden="true">#</a> Example Zowe configuation setups</h1><ul><li><a href="#flat-zowe-team-configuration">Flat Zowe team configuration</a></li><li><a href="#nested-zowe-team-configuration">Nested Zowe team configuration</a></li><li><a href="#rse-profiles-connection-type-setup">RSE profiles connection type setup</a></li></ul><h2 id="flat-zowe-team-configuration" tabindex="-1"><a class="header-anchor" href="#flat-zowe-team-configuration" aria-hidden="true">#</a> Flat Zowe team configuration</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;$schema&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./zowe.schema.json&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;profiles&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;zosmf&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zosmf&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">443</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;secure&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tso&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tso&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;account&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;codePage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1047&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;logonProcedure&quot;</span><span class="token operator">:</span> <span class="token string">&quot;IZUFPROC&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;secure&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ssh&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ssh&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">22</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;secure&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rse&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rse&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">6800</span><span class="token punctuation">,</span>
        <span class="token property">&quot;basePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rseapi&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;secure&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    # common properties can be defined in the base profile insread of defining them in every profile
    <span class="token property">&quot;base&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;base&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;myzos.ibm.com&quot;</span><span class="token punctuation">,</span>
        # reject connection if self-signed certificate is used
        <span class="token property">&quot;rejectUnauthorized&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      # these secure fields will determine the values written to and stored in the OS credential manager.
      <span class="token property">&quot;secure&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;defaults&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;zosmf&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zosmf&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tso&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tso&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ssh&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ssh&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rse&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rse&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;base&quot;</span><span class="token operator">:</span> <span class="token string">&quot;base&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  # setting determines if information is written to the file or credential manager
  <span class="token property">&quot;autoStore&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div><h2 id="nested-zowe-team-configuration" tabindex="-1"><a class="header-anchor" href="#nested-zowe-team-configuration" aria-hidden="true">#</a> Nested Zowe team configuration</h2><p>Nested team configurations are great option for users that have multiple LPAR connections.</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;$schema&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./zowe.schema.json&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;profiles&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;lpar1&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lpar1.com&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rejectUnauthorized&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;secure&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>       # Example of shared credentials across LPAR profiles
      <span class="token property">&quot;profiles&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;zosmf&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zosmf&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">443</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rse&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rse&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">6800</span><span class="token punctuation">,</span>
            <span class="token property">&quot;basePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rseapi&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ssh&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ssh&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">22</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lpar2&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lpar2.com&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rejectUnauthorized&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;profiles&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;zosmf&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zosmf&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">443</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;secure&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">]</span>    # Example of credentials that are profile specific
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ssh&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ssh&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">22</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;secure&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lpar3&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lpar3.com&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rejectUnauthorized&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;secure&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;profiles&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;zosmf&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zosmf&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">3128</span><span class="token punctuation">,</span>
            <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;defaults&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;zosmf&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lpar1.zosmf&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ssh&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lpar1.ssh&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rse&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lpar1.rse&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;autoStore&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br></div></div><h2 id="rse-profiles-connection-type-setup" tabindex="-1"><a class="header-anchor" href="#rse-profiles-connection-type-setup" aria-hidden="true">#</a> RSE profiles connection type setup</h2><h3 id="rse-profile-with-base-profile-using-direct-connection-basic-authentication" tabindex="-1"><a class="header-anchor" href="#rse-profile-with-base-profile-using-direct-connection-basic-authentication" aria-hidden="true">#</a> RSE profile with Base profile using direct connection basic authentication</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;$schema&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./zowe.schema.json&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;profiles&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;rse&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rse&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">6803</span><span class="token punctuation">,</span>
        <span class="token property">&quot;basePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rseapi&quot;</span><span class="token punctuation">,</span>               #RSE Rest API Port
        <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https&quot;</span>                 #RSE Rest API base path
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;secure&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;base&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;base&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;examplehost.com&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rejectUnauthorized&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;secure&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;defaults&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;rse&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rse&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;base&quot;</span><span class="token operator">:</span> <span class="token string">&quot;base&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;autoStore&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h3 id="rse-profile-using-direct-connection-token-authentication" tabindex="-1"><a class="header-anchor" href="#rse-profile-using-direct-connection-token-authentication" aria-hidden="true">#</a> RSE profile using direct connection token authentication</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;$schema&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./zowe.schema.json&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;profiles&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;rse&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rse&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;examplehost.com&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">6800</span><span class="token punctuation">,</span>                   #RSE Rest API Port
            <span class="token property">&quot;basePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rseapi&quot;</span><span class="token punctuation">,</span>           #RSE Rest API base path
            <span class="token property">&quot;rejectUnauthorized&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;secure&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;tokenValue&quot;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;defaults&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;rse&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rse&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;autoStore&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="rse-profiles-using-api-mediation-layer-for-authentication" tabindex="-1"><a class="header-anchor" href="#rse-profiles-using-api-mediation-layer-for-authentication" aria-hidden="true">#</a> RSE profiles using API Mediation Layer for authentication</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;$schema&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./zowe.schema.json&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;profiles&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;rse&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rse&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">7554</span><span class="token punctuation">,</span>                 #API ML Port
                <span class="token property">&quot;basePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ibmrse&quot;</span>          #API ML base path to registered RSE API
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;base&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;base&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;host.com&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;rejectUnauthorized&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;secure&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token string">&quot;tokenValue&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;defaults&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;rse&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rse&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;base&quot;</span><span class="token operator">:</span> <span class="token string">&quot;base&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;autoStore&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div>`,14);function t(o,e){return p}var c=n(a,[["render",t]]);export{c as default};
