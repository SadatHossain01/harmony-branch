<script lang="ts">
  import { Router, Link, Route } from "svelte-navigator";
  let tabs = [
    { id: 1, name: "Feed", icon: "", link: "/home/feed" },
    { id: 2, name: "Polls", icon: "", link: "/home/polls" },
    { id: 3, name: "Events", icon: "", link: "/home/events" },
    { id: 4, name: "Archive", icon: "", link: "/home/archive" },
    { id: 5, name: "Chats", icon: "", link: "/home/chats" },
  ];
</script>

<div class="mb-4 border-b border-gray-200 dark:border-gray-700 w-full">
  <ul
    class="flex flex-wrap -mb-px text-sm font-medium text-center"
    id="myTab"
    data-tabs-toggle="#myTabContent"
    role="tablist"
  >
    {#each tabs as tab}
      <li class="mr-2" role="presentation">
        <Link to={tab.link}>
          <button
            class="inline-block p-4 rounded-t-lg border-b-2 dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
            id="profile-tab"
            data-tabs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
            on:click={() => {
              console.log(tab.name);
            }}>{tab.name}</button
          >
        </Link>
      </li>
    {/each}
  </ul>
</div>

<!-- class="inline-block p-4 rounded-t-lg border-b-2 border-transparent text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500" -->
