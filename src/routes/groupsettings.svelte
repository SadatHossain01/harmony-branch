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
</script>

<div class="bg-slate-900 pt-20">
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <div class="w-3/4 mx-auto">
    <img
      class="mb-3 w-80 h-80 rounded-full shadow-lg mx-auto"
      src={group.image_link}
      alt="Group Photo"
    />
    <h1
      class="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center"
    >
      {group.name}
    </h1>
    <p
      class="mb-6 text-base font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center"
    >
      {group.intro}
    </p>
    <hr
      class="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700"
    />
  </div>
</div>
