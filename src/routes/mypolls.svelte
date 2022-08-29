<script lang="ts">
  import ShowPollitem from "../lib/showpollitem.svelte";
  import Drawer from "../lib/drawer.svelte";
  import FaIcon from "../lib/faIcon.svelte";
  import type { Poll } from "../lib/data/polls";
  import { beforeUpdate, afterUpdate } from "svelte";

  let div;
  let autoscroll;

  beforeUpdate(() => {
    autoscroll =
      div && div.offsetHeight + div.scrollTop > div.scrollHeight - 20;
  });

  afterUpdate(() => {
    console.log(div.scrollHeight);
    if (autoscroll) div.scrollTo(0, div.scrollHeight);
  });

  //declare an array of 5 Poll Objects
  let polls: Poll[] = [
    {
      id: "1",
      title: "Poll 1",
      options: [
        {
          pollid: "1",
          optionid: "1",
          option_title: "Option 1",
          description: "This is some option that you may check out",
          vote_count: 5,
          width: 0,
        },
        {
          pollid: "1",
          optionid: "2",
          option_title: "Option 2",
          description: "This is some option that you may check out",
          vote_count: 5,
          width: 0,
        },
        {
          pollid: "1",
          optionid: "3",
          option_title: "Option 3",
          description: "This is some option that you may check out",
          vote_count: 10,
          width: 0,
        },
      ],
      totalvote: 0,
      votedOption: "-1",
    },
    {
      id: "2",
      title: "Poll 2",
      options: [
        {
          pollid: "2",
          optionid: "1",
          option_title: "Option 1",
          description: "This is some option that you may check out",
          vote_count: 4,
          width: 0,
        },
        {
          pollid: "2",
          optionid: "2",
          option_title: "Option 2",
          description: "This is some option that you may check out",
          vote_count: 0,
          width: 0,
        },
        {
          pollid: "2",
          optionid: "3",
          option_title: "Option 3",
          description: "This is some option that you may check out",
          vote_count: 1,
          width: 0,
        },
      ],
      totalvote: 0,
      votedOption: "-1",
    },
    {
      id: "3",
      title: "Poll 3",
      options: [
        {
          pollid: "3",
          optionid: "1",
          option_title: "Option 1",
          description: "This is some option that you may check out",
          vote_count: 8,
          width: 0,
        },
        {
          pollid: "3",
          optionid: "2",
          option_title: "Option 2",
          description: "This is some option that you may check out",
          vote_count: 9,
          width: 0,
        },
        {
          pollid: "3",
          optionid: "3",
          option_title: "Option 3",
          description: "This is some option that you may check out",
          vote_count: 1,
          width: 0,
        },
      ],
      totalvote: 0,
      votedOption: "-1",
    },
    {
      id: "4",
      title: "Poll 4",
      options: [
        {
          pollid: "4",
          optionid: "1",
          option_title: "Option 1",
          description: "This is some option that you may check out",
          vote_count: 1,
          width: 0,
        },
        {
          pollid: "4",
          optionid: "2",
          option_title: "Option 2",
          description: "This is some option that you may check out",
          vote_count: 11,
          width: 0,
        },
        {
          pollid: "4",
          optionid: "3",
          option_title: "Option 3",
          description: "This is some option that you may check out",
          vote_count: 5,
          width: 0,
        },
      ],
      totalvote: 0,
      votedOption: "-1",
    },
    {
      id: "5",
      title: "Poll 5",
      options: [
        {
          pollid: "5",
          optionid: "1",
          option_title: "Option 111111111111111111",
          description: "This is some option that you may check out",
          vote_count: 1,
          width: 0,
        },
        {
          pollid: "5",
          optionid: "2",
          option_title: "Option 2",
          description: "This is some option that you may check out",
          vote_count: 0,
          width: 0,
        },
        {
          pollid: "5",
          optionid: "3",
          option_title: "Option 3",
          description: "This is some option that you may check out",
          vote_count: 0,
          width: 0,
        },
        {
          pollid: "5",
          optionid: "4",
          option_title: "Option 4",
          description: "This is some option that you may check out",
          vote_count: 0,
          width: 0,
        },
        {
          pollid: "5",
          optionid: "5",
          option_title: "Option 5",
          description: "This is some option that you may check out",
          vote_count: 0,
          width: 0,
        },
        {
          pollid: "5",
          optionid: "6",
          option_title: "Option 6",
          description: "This is some option that you may check out",
          vote_count: 0,
          width: 0,
        },
        {
          pollid: "5",
          optionid: "7",
          option_title: "Option 7",
          description: "This is some option that you may check out",
          vote_count: 0,
          width: 0,
        },
        {
          pollid: "5",
          optionid: "8",
          option_title: "Option 8",
          description:
            "This is some option that you may check out. This is some option that you may check out. This is some option that you may check out. This is some option that you may check out. This is some option that you may check out.",
          vote_count: 0,
          width: 0,
        },
      ],
      totalvote: 0,
      votedOption: "-1",
    },
  ];

  polls.forEach((p) => {
    p.totalvote = 0;
    for (let i = 0; i < p.options.length; i++) {
      p.totalvote += p.options[i].vote_count;
    }
  });

  function deletePoll(id: string) {
    console.log("got delete request for poll with id: " + id);
    const index = polls.findIndex((p) => p.id === id);
    console.log(index);
    if (index === -1) return;
    polls.splice(index, 1);
    polls = polls;
  }

  let newPoll: Poll = {
    id: "",
    title: "",
    options: [],
    totalvote: 0,
    votedOption: "-1",
  };

  let draweropen: boolean = false;
</script>

<svelte:window on:click|stopPropagation={() => (draweropen = false)} />

<div class="bg-slate-900 min-h-screen">
  <div class="w-3/4 py-5 flex-1 mx-auto" bind:this={div}>
    {#each polls as poll}
      <ShowPollitem {poll} {deletePoll} />
    {/each}
  </div>
  <button
    class="h-14 w-14 fixed bottom-12 right-12 z-10 shadow-xl text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full lg:ml-40 ml-10 text-sm mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    type="button"
    data-drawer-target="drawer-form"
    data-drawer-show="drawer-form"
    aria-controls="drawer-form"
    on:click|stopPropagation={() => (draweropen = !draweropen)}
  >
    <FaIcon type="regular" icon="plus" className="text-xl" />
  </button>

  <Drawer transition_axis="-x" bind:open={draweropen}>
    <!-- drawer component -->
    <div slot="body">
      <h5
        id="drawer-label"
        class="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
      >
        <svg
          class="w-5 h-5 mr-2"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          /></svg
        >New Poll
      </h5>
      <div class="mb-12">
        <label
          for="title"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Title</label
        >
        <input
          type="text"
          id="title"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Poll Title"
          required
          bind:value={newPoll.title}
        />
      </div>
      <button
        type="submit"
        class="text-white justify-center flex items-center bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        on:click|stopPropagation={() => {
          // do stuffs
          draweropen = false;
        }}
        ><svg
          class="w-5 h-5 mr-2"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            fill-rule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clip-rule="evenodd"
          /></svg
        > Create Poll</button
      >
    </div>
  </Drawer>
</div>
