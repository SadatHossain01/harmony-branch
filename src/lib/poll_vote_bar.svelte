<script lang="ts">
  import { tweened } from "svelte/motion";
  import { backInOut, cubicOut } from "svelte/easing";
  import { fade } from "svelte/transition";

  let transition_axis = "y";

  function slide(
    node,
    { delay = 0, duration = 2000, easing = cubicOut, axis = transition_axis }
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

  export let delTime;
  export let percent;

  const progress = tweened(30, {
    delay: 0,
    duration: 2000,
    easing: cubicOut,
  });

  $: progress.set(percent);
</script>

<div class="mx-4 w-2/4 h-6 bg-gray-200 rounded dark:bg-gray-700">
  {#if percent > 0}
    <div
      class="h-6 bg-yellow-400 rounded"
      style="width: {$progress}%"
      out:slide={{ axis: "-x" }}
    />
  {/if}
</div>
