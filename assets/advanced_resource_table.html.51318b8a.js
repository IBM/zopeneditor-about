import{r as i,o as r,a as n,b as t,d as o,w as a,F as l,e,c as h}from"./app.f10ca940.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";var d="/zopeneditor-about/assets/zos-resources-table-actions.060ab674.png",p="/zopeneditor-about/assets/zos-resource-table-batch-actions.8f480e3b.png";const u={},f=t("h1",{id:"z-os-resources-table",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#z-os-resources-table","aria-hidden":"true"},"#"),e(" z/OS Resources Table")],-1),w=e("The z/OS Resources Table provides a tabular view to interact with z/OS resources using "),v=e("your existing RSE API or z/OSMF Zowe profiles"),g=e(". It is an advanced capability available for users with an "),b=e("active license"),m=e(". It is designed to be both beginner-friendly for new mainframe application developers and to provide more experienced developers with the necessary tools and information to manage host resources."),y=t("h2",{id:"setting-up-profiles-for-the-z-os-resources-table",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#setting-up-profiles-for-the-z-os-resources-table","aria-hidden":"true"},"#"),e(" Setting up profiles for the z/OS Resources Table")],-1),S=e("To use the z/OS Resources Table, you must create an RSE API or z/OSMF profile using Zowe Explorer. For a walk-through of steps on how to create profiles by using Zowe Explorer, see our "),_=e("Connecting to z/OS with Zowe Explorer walkthrough"),T=h('<h2 id="opening-the-z-os-resources-table" tabindex="-1"><a class="header-anchor" href="#opening-the-z-os-resources-table" aria-hidden="true">#</a> Opening the z/OS Resources Table</h2><p>You can open the z/OS Resources Table one of the following ways:</p><ol><li><code>Cmd \u2318</code>/<code>Ctrl</code> + <code>Shift</code> + <code>P</code> to open the command prompt and run the command <code>&gt;IBM Z Open Editor: Open z/OS Resource Table</code></li><li>After setting an active filter for a profile in the Zowe Explorer JOBS, DATA SETS, or USS view, right-click the active profile and select <code>Show in z/OS Resource Table</code> from the context menu. This will display items matching the filter in the table.</li><li>After setting an active filter for a profile in the Zowe Explorer JOBS, DATA SETS, or USS view, right-click a resource (e.g. a data set, a job) and select <code>Show in z/OS Resource Table</code> from the context menu. This will display the selected resource in the table.</li></ol><p>The first two methods will open the table and display the default <a href="#profiles-view"><strong>Profiles</strong></a> view. The third method will display the data sets or jobs matching that filter.</p><h2 id="views" tabindex="-1"><a class="header-anchor" href="#views" aria-hidden="true">#</a> Views</h2><h3 id="profiles-view" tabindex="-1"><a class="header-anchor" href="#profiles-view" aria-hidden="true">#</a> Profiles View</h3><p>The profiles view displays the RSE API and z/OSMF profiles defined in your Zowe Explorer team configuration file. To start accessing z/OS resources for a specific profile, click on the row of that profile.</p><p>After clicking on a profile, a view is displayed that allows the user to select a z/OS resource to access: MVS, USS, and JES. Clicking on one of these rows will load the MVS view, USS view, or JES view, respectively.</p><h3 id="mvs-view" tabindex="-1"><a class="header-anchor" href="#mvs-view" aria-hidden="true">#</a> MVS View</h3><p>The MVS view consists of the following rows that perform the following actions when clicked:</p><ul><li><strong>Default User Data Sets</strong>: Displays all data sets that have the selected profile&#39;s user ID as their high-level qualifier (only available for profiles using password or passphrase authentication)</li><li><strong>Filters</strong>: Opens the <strong>Filters</strong> view where users can create and use custom patterns for viewing data sets.</li><li><strong>Favorites</strong>: Opens a view that displays data sets favorited by the user.</li><li><strong>History</strong>: Opens a view that displays the five most recently used patterns to filter data sets.</li></ul><p>Clicking on the Default User Data Sets, a custom pattern in the Filters view, or a pattern in the History view will display data sets that match the selected pattern.</p><h3 id="jes-view" tabindex="-1"><a class="header-anchor" href="#jes-view" aria-hidden="true">#</a> JES View</h3><p>The JES view consists of the following rows that perform the following actions when clicked:</p><ul><li><strong>Default User Jobs</strong>: Displays all jobs that have the selected profile&#39;s user as their owner (only available for profiles using password or passphrase authentication)</li><li><strong>Filters</strong>: Opens the <strong>Filters</strong> view where users can create and use custom patterns for viewing jobs.</li><li><strong>Favorites</strong>: Opens a view that displays jobs favorited by the user.</li><li><strong>History</strong>: Opens a view that displays the five most recently used queries to filter jobs.</li></ul><p>Clicking on the Default User Jobs, a custom query in the Filters view, or a query in the History view will display jobs that match the selected query.</p><h3 id="uss-view" tabindex="-1"><a class="header-anchor" href="#uss-view" aria-hidden="true">#</a> USS View</h3><p>The USS view consists of the following rows that perform the following actions when clicked:</p><ul><li><strong>User Files</strong>: Displays all items in the <code>/u/user</code> directory, where <code>user</code> is the selected profile&#39;s user (only available for profiles using password or passphrase authentication)</li><li><strong>Filters</strong>: Opens the <strong>Filters</strong> view where users can use and save paths for viewing UNIX items.</li><li><strong>Favorites</strong>: Opens a view that displays UNIX items favorited by the user.</li><li><strong>History</strong>: Opens a view that displays the five most recently viewed UNIX items.</li></ul><h2 id="actions" tabindex="-1"><a class="header-anchor" href="#actions" aria-hidden="true">#</a> Actions</h2><p>When viewing resources, there are different kinds of actions available in the table. These include toolbar actions, batch actions, and overflow menu actions.</p><p><img src="'+d+'" alt="&#39;zos-resource-table-actions&#39;"></p><ul><li>Navigation actions are the same across all views. They can be used to navigate through the table&#39;s history or to return to the <a href="#profiles-view"><strong>Profiles view</strong></a>.</li><li>Toolbar actions are unique to specific views. For example, the <strong>Create Data Set</strong> button is only available when viewing data sets. Hovering a toolbar action button will display popover text describing what the button does.</li><li>Overflow menu actions are available only in select views. Selecting an overflow menu action will perform the action for the selected resource. An overflow menu can be opened by clicking the three dots <strong>\u22EE</strong> on the right side of a row. These dots appear on row hover, and will not appear on rows that do not use overflow actions.</li><li>The input area is a special field available while viewing jobs, UNIX files, or data sets that enables users to quickly change the active filter pattern and display an updated list of resources matching that pattern.</li></ul><p>The last available kind of actions are batch actions.</p><p><img src="'+p+'" alt="&#39;zos-resource-table-batch-actions&#39;"></p><p>Batch actions are only available for views with selectable rows. They are displayed after the user selects one or many rows using the checkboxes on the left side of the view. Batch actions are executed on every resource selected. For example, if you select the checkbox for multiple jobs and use the <strong>Delete</strong> batch action, all the selected jobs will be deleted.</p>',26);function x(z,O){const s=i("RouterLink");return r(),n(l,null,[f,t("p",null,[w,o(s,{to:"/Docs/interact_zos_overview.html"},{default:a(()=>[v]),_:1}),g,o(s,{to:"/Docs/advanced_activation.html"},{default:a(()=>[b]),_:1}),m]),y,t("p",null,[S,o(s,{to:"/Docs/connect_to_zos_with_zowe_explorer_e2e.html"},{default:a(()=>[_]),_:1})]),T],64)}var D=c(u,[["render",x]]);export{D as default};
