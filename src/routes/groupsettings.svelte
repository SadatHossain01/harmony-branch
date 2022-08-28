<script lang="ts">
  import type { Group } from "../lib/data/groups";
  export let group: Group = {
    id: "1",
    name: "BUET CSE 19",
    intro:
      "Email is an excellent way to introduce yourself and your business without the feeling of intrusion that can come with cold calling. To save time, download our free business introduction email templates and optimize them following our tips for best practices. The templates can be easily adapted to a variety of scenarios to achieve your objectives in email introductions to leads, customers, potential partners, and other new contacts.",
    image_link: `https://source.unsplash.com/random/1`,
    group_link: "",
    subjects: [{ name: "CSE215", id: "1" }],
  };
  let input_name: string = group.name;
  let name_input_clicked: boolean = false;
  let input_intro: string = group.intro;
  let intro_input_clicked: boolean = false;
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
          {group.intro}
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
            bind:value={group.intro}
            maxlength="140"
            autofocus
          />
        </div>
      {/if}
    </div>
    <hr
      class="my-1 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700"
    />
  </div>
</div>
