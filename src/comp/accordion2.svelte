<script lang="ts">
  import { slide } from "svelte/transition";
  import { onMount } from "svelte";

  export let id: string = "";

  export let slotClass: string =
    "p-5 border border-t-0 border-gray-200 dark:border-gray-700";
  export let isOpen: boolean = false;
  export let color: boolean = false;
  export let isLast: boolean = false;

  export let iconClass: string =
    "text-gray-500 sm:w-6 sm:h-6 dark:text-gray-300";
  const down_arrow: string =
    "https://www.svgrepo.com/show/25790/down-arrow.svg";
  const up_arrow: string = "https://www.svgrepo.com/show/4166/up-arrow.svg";

  export let btnClass: string =
    "flex items-center focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 justify-between p-5 w-full font-medium border border-gray-200 dark:border-gray-700 text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800";

  export let colorClass: string =
    "focus:ring-blue-200 dark:focus:ring-blue-800  hover:bg-blue-100 text-blue-500 bg-blue-200 text-blue-700";

  $: btnClass;
  onMount(() => {
    if (isOpen) {
      isOpen = true;
    }
  });

  const handleToggle = (id: string) => {
    isOpen = !isOpen;
  };

  let buttonClass: string;

  $: if (color && isOpen) {
    buttonClass = btnClass + colorClass;
  } else {
    buttonClass = btnClass;
  }
</script>

<h2 aria-expanded={isOpen}>
  <button
    on:click={() => handleToggle(id)}
    type="button"
    class:rounded-t-xl={id === "1"}
    class:border-t-0={id !== "1"}
    class={buttonClass}
  >
    <slot name="header" />
    {#if isOpen}
      <img src={up_arrow} alt="up" class={iconClass} />
    {:else}
      <img src={down_arrow} alt="down" class={iconClass} />
    {/if}
  </button>
</h2>
{#if isOpen}
  <div transition:slide={{ duration: 500 }}>
    <div class:rounded-b-xl={isLast} class={slotClass}>
      <slot name="body" />
    </div>
  </div>
{/if}

<h2 id="accordion-open-heading-1" aria-expanded={isOpen}>
  <button
    type="button"
    class:rounded-t-xl={id === "1"}
    class:border-t-0={id !== "1"}
    class={buttonClass}
  >
    <span class="flex items-center"
      ><svg
        class="w-5 h-5 mr-2 shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
          clip-rule="evenodd"
        /></svg
      > What is Flowbite?</span
    >
    <svg
      data-accordion-icon=""
      class="w-6 h-6 rotate-180 shrink-0"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        fill-rule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clip-rule="evenodd"
      /></svg
    >
  </button>
</h2>
<div
  id="accordion-open-body-1"
  class=""
  aria-labelledby="accordion-open-heading-1"
>
  <div
    class="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
  >
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      Flowbite is an open-source library of interactive components built on top
      of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
    </p>
    <p class="text-gray-500 dark:text-gray-400">
      Check out this guide to learn how to <a
        href="/docs/getting-started/introduction/"
        class="text-blue-600 dark:text-blue-500 hover:underline">get started</a
      > and start developing websites even faster with components on top of Tailwind
      CSS.
    </p>
  </div>
</div>
