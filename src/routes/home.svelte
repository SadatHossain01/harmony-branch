<script lang="ts">
  import { Router, Link, Route } from "svelte-navigator";
  import GroupTree from "../lib/grouptree.svelte";
  import Feed from "./feed.svelte";
  import Myevents from "./myevents.svelte";
  import Chats from "./chats.svelte";
  import Mypolls from "./mypolls.svelte";
  import Archive from "./archive.svelte";
  import type { Guild } from "../lib/data/chats";
  import { loadGroups, loadGroupsDev } from "../lib/data/groups";
  import { groups } from "../lib/stores/groups";
  import Tabs from "../lib/tabs.svelte";

  //   loadGroups();
</script>

<!-- Tree -->
<Router>
  <!-- now the tabs here -->
  <Route path="/">
    <div class="pt-20 w-full h-screen flex overflow-hidden">
      <GroupTree groups={$groups} />
      <Tabs />
    </div>
  </Route>
  <Route path="/feed">
    <div class="pt-20 w-full h-screen flex overflow-hidden">
      <GroupTree groups={$groups} />
      <div class="w-10/12 flex-shrink-0">
        <Tabs />
        <Feed />
      </div>
    </div>
  </Route>
  <Route path="/events">
    <div class="pt-20 w-full h-screen flex overflow-hidden">
      <GroupTree groups={$groups} />
      <div class="w-10/12 flex-shrink-0">
        <Tabs />
        <Myevents />
      </div>
    </div>
  </Route>
  <Route path="/chats">
    <div class="pt-20 w-full h-screen flex overflow-hidden">
      <GroupTree groups={$groups} />
      <div class="w-10/12 flex-shrink-0">
        <Tabs />
        <Chats />
      </div>
    </div>
  </Route>
  <Route path="/polls">
    <div class="pt-20 w-full h-screen flex overflow-hidden">
      <GroupTree groups={$groups} />
      <div class="w-10/12 flex-shrink-0">
        <Tabs />
        <Mypolls />
      </div>
    </div>
  </Route>
  <Route path="/archive/*">
    <div class="pt-20 w-full h-screen flex overflow-hidden">
      <GroupTree groups={$groups} />
      <div class="w-10/12 flex-shrink-0">
        <Tabs />
        <Archive />
      </div>
    </div>
  </Route>
</Router>
