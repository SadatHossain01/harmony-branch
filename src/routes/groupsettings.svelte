<script lang="ts">
  import type { Group } from "../lib/data/groups";
  import FaIcon from "../lib/faIcon.svelte";
  import type { User } from "../lib/data/user";
  export let group: Group = {
    id: "1",
    name: "BUET CSE 19",
    intro:
      "Email is an excellent way to introduce yourself and your business without the feeling of intrusion that can come with cold calling. To save time, download our free business introduction email templates and optimize them following our tips for best practices. The templates can be easily adapted to a variety of scenarios to achieve your objectives in email introductions to leads, customers, potential partners, and other new contacts.",
    image_link: `https://source.unsplash.com/random/1`,
    group_link: "",
    subjects: [{ name: "CSE215", id: "1" }],
  };

  let users = [
    {
      id: "1",
      user_name: "Shahriar",
      dp_link: "https://source.unsplash.com/random/" + Math.random(),
    },
    {
      id: "2",
      user_name: "Asif",
      dp_link: "https://source.unsplash.com/random/" + Math.random(),
    },
  ];
  let showable_users = users;
  let search_term: string = "";
  let input_name: string = group.name;
  let name_input_clicked: boolean = false;
  let input_intro: string = group.intro;
  let intro_input_clicked: boolean = false;

  $: {
    if (search_term) {
      // console.log(search_term);
      //filter groups based on search term, considering name, intro, institution, department, batch
      showable_users = users.filter((user) => {
        return user.user_name.toLowerCase().includes(search_term.toLowerCase());
      });
    } else {
      showable_users = users;
    }
  }
</script>

<svelte:window
  on:click={() => {
    name_input_clicked = false;
    intro_input_clicked = false;
    // do the db stuffs right here
    // submit/update button seems redundant here to me, hence not using
    console.log("clicked outside");
  }}
/>

<div class="bg-slate-900 pt-20">
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <div class="w-3/4 mx-auto grid">
    <img
      class="mb-3 w-80 h-80 rounded-full shadow-lg mx-auto mt-5"
      src={group.image_link}
      alt="Group Photo"
    />
    <div
      class="grid justify-self-center mb-5"
      on:click|stopPropagation={() => {
        name_input_clicked = true;
        console.log("clicked inside");
      }}
    >
      {#if !name_input_clicked}
        <button
          class="text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center h-full"
        >
          {group.name}
        </button>
      {:else}
        <!-- svelte-ignore a11y-autofocus -->
        <input
          class="text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center bg-slate-900 h-full"
          bind:value={input_name}
          autofocus
        />
      {/if}
    </div>
    <div
      class="grid justify-self-center mb-1 w-full bg-gray-50 rounded-lg dark:bg-slate-900 dark:border-gray-600"
      on:click|stopPropagation={() => {
        intro_input_clicked = true;
        console.log("clicked inside");
      }}
    >
      {#if !intro_input_clicked}
        <button
          class="text-base font-normal text-gray-500 lg:text-xl dark:text-gray-400 text-center mx-auto w-3/4"
        >
          {input_intro}
        </button>
      {:else}
        <!-- svelte-ignore a11y-autofocus -->
        <div class="py-2 px-4 bg-white rounded-t-lg dark:bg-slate-900 w-full">
          <label for="comment" class="sr-only">Your comment</label>
          <textarea
            id="comment"
            rows="4"
            class="w-3/4 text-base lg:text-xl font-normal text-gray-500 bg-white border-0 dark:bg-slate-900 focus:ring-0 dark:text-gray-400 dark:placeholder-gray-400 grid mx-auto h-auto text-center"
            placeholder="Group Intro"
            required
            bind:value={input_intro}
            maxlength="140"
            autofocus
          />
        </div>
      {/if}
    </div>
    <hr
      class="my-1 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700"
    />
    <div>
      <h2 class="text-2xl font-bold dark:text-white">Current Members</h2>
      <div class="grid place-content-left my-3">
        <div class="relative mt-1">
          <div
            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
          >
            <FaIcon
              icon="search"
              className="flex justify-center items-center w-5 h-5 text-gray-500 dark:text-gray-400"
            />
          </div>
          <input
            type="text"
            id="table-search"
            class="block p-2 pl-10 w-80 text-sm font-OpenSans text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search members"
            bind:value={search_term}
          />
        </div>
      </div>
      <ul
        class="overflow-y-auto py-1 h-48 text-gray-700 dark:text-gray-200 w-1/3 ml-0"
        aria-labelledby="dropdownUsersButton"
      >
        <div class="flex flex-col">
          {#each showable_users as user}
            <li>
              <div
                class="flex justify-between items-center py-2 pr-4 pl-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded-lg"
              >
                <div class="flex">
                  <img
                    class="mr-2 w-14 h-14 rounded-full place-self-center"
                    src={user.dp_link}
                    alt="image"
                  />
                  <div class="text-lg pl-5 place-self-center">
                    {user.user_name}
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                    ><FaIcon icon="user-minus" />&nbsp;&nbsp;Remove</button
                  >
                </div>
              </div>
            </li>
          {/each}
        </div>
      </ul>
    </div>
  </div>
</div>
