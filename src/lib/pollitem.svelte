<script lang="ts">
  import type { Poll } from "./data/polls";
  import FaIcon from "../lib/faIcon.svelte";
  import { flip } from "svelte/animate";
  import { cubicOut } from "svelte/easing";
  export let transition_axis = "y";

  function slide(
    node,
    { delay = 0, duration = 500, easing = cubicOut, axis = transition_axis }
  ) {
    console.log("hey transition");
    const style = getComputedStyle(node);
    const opacity = +style.opacity;
    const primary_dimension = axis === "y" ? "height" : "width";
    const primary_dimension_value = parseFloat(style[primary_dimension]);
    const secondary_dimensions =
      axis === "y" ? ["Top", "Bottom"] : ["Left", "Right"];
    const padding_start_value = parseFloat(
      style.padding + secondary_dimensions[0]
    );
    const padding_end_value = parseFloat(
      style.padding + secondary_dimensions[1]
    );
    const margin_start_value = parseFloat(
      style.margin + secondary_dimensions[0]
    );
    const margin_end_value = parseFloat(style.margin + secondary_dimensions[1]);
    const border_width_start_value = parseFloat(
      style[`border${secondary_dimensions[0]}Width`]
    );
    const border_width_end_value = parseFloat(
      style[`border${secondary_dimensions[1]}Width`]
    );
    return {
      delay,
      duration,
      easing,
      css: (t) =>
        "overflow: hidden;" +
        `opacity: ${Math.min(t * 20, 1) * opacity};` +
        `${primary_dimension}: ${t * primary_dimension_value}px;` +
        `padding-${secondary_dimensions[0].toLowerCase()}: ${
          t * padding_start_value
        }px;` +
        `padding-${secondary_dimensions[1].toLowerCase()}: ${
          t * padding_end_value
        }px;` +
        `margin-${secondary_dimensions[0].toLowerCase()}: ${
          t * margin_start_value
        }px;` +
        `margin-${secondary_dimensions[1].toLowerCase()}: ${
          t * margin_end_value
        }px;` +
        `border-${secondary_dimensions[0].toLowerCase()}-width: ${
          t * border_width_start_value
        }px;` +
        `border-${secondary_dimensions[1].toLowerCase()}-width: ${
          t * border_width_end_value
        }px;`,
    };
  }

  export let poll: Poll;
  //sort the poll options by vote count
  const sortOptions = (options: any[]) => {
    return options.sort((a, b) => {
      return b.vote_count - a.vote_count;
    });
  };

  let ref;

  $: {
    if (poll.totalvote > 0) {
      poll.options = sortOptions(poll.options);
      poll.options.forEach((option) => {
        option.width = Math.round((option.vote_count / poll.totalvote) * 100);
      });
    }
  }

  function castVote(optionid: string) {
    //update the vote count for the option
    poll.options.forEach((option) => {
      if (option.optionid === optionid) {
        option.vote_count++;
      }
    });
    //update the total vote count
    poll.totalvote++;
    //update the hasVoted flag
    poll.votedOption = optionid;
  }

  function removeVote(optionid: string) {
    //update the vote count for the option
    poll.options.forEach((option) => {
      if (option.optionid === optionid) {
        option.vote_count--;
      }
    });
    //update the total vote count
    poll.totalvote--;
    //update the hasVoted flag
    poll.votedOption = "-1";
  }
</script>

<div class="p-5" in:slide>
  <p
    class="text-4xl text-gray-500 dark:text-gray-400 font-Oxygen my-3 font-extrabold"
  >
    {poll.title}
  </p>
  <p class="text-lg font-medium text-gray-500 dark:text-gray-400">
    {poll.totalvote} total votes
  </p>
  <div class="grid auto-rows-fr" bind:this={ref}>
    {#each poll.options as option (Number(option.optionid))}
      <div
        animate:flip={{
          duration: () => 750 * Math.sqrt(Number(option.optionid)),
        }}
      >
        <div class="flex items-center my-2 h-full w-full">
          <span class="text-lg font-medium text-blue-600 dark:text-blue-500"
            >{option.option_title}</span
          >
          <div class="mx-4 w-2/4 h-6 bg-gray-200 rounded dark:bg-gray-700">
            {#if option.width > 0}
              <div
                class="h-6 bg-yellow-400 rounded"
                style="width: {option.width}%"
                transition:slide={{ axis: "x" }}
              />
            {/if}
          </div>
          <span class="text-lg font-medium text-blue-600 dark:text-blue-500"
            >{option.width}%</span
          >
          {#if poll.votedOption == "-1"}
            <button
              class="h-10 w-10 shadow-xl text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full lg:ml-5 text-sm mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800 disabled:cursor-not-allowed disabled:bg-green-700"
              type="button"
              on:click={() => castVote(option.optionid)}
            >
              <FaIcon type="regular" icon="plus" className="text-sm" />
            </button>
          {:else if poll.votedOption == option.optionid}
            <button
              class="h-10 w-10 shadow-xl text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full lg:ml-5 text-sm mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800 disabled:cursor-not-allowed disabled:bg-red-700"
              type="button"
              disabled={poll.votedOption != option.optionid}
              on:click={() => removeVote(option.optionid)}
            >
              <FaIcon type="regular" icon="minus" className="text-sm" />
            </button>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</div>
