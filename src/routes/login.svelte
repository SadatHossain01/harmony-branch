<script lang="ts">
  let username = "";
  let password = "";
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<div class="w-10/12 m-10 md:w-2/3 lg:w-3/5 xl:w-2/5 mx-auto">
  <form>
    <div class="w-10/12 m-10 md:w-2/3 lg:w-3/5 xl:w-2/5 mx-auto">
      <label for="username" class="text-lg tracking-normal"> Username </label>
      <input
        type="text"
        bind:value={username}
        placeholder="username"
        class="w-full p-8 block text-base my-4 tracking-normal box-border bg-zinc-700 rounded-lg ease-linear focus:bg-zinc-500 placeholder:font-mono"
      />
    </div>

    <div class="w-10/12 m-10 md:w-2/3 lg:w-3/5 xl:w-2/5 mx-auto">
      <label for="password" class="text-lg tracking-normal">Password</label>
      <input
        type="password"
        bind:value={password}
        placeholder="password"
        class="w-full p-8 block text-base my-4 tracking-normal box-border bg-zinc-700 rounded-lg ease-linear focus:bg-zinc-500 placeholder:font-mono"
      />
    </div>

    <button
      type="button"
      class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
    >
      <svg
        class="mr-2 -ml-1 w-4 h-4"
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="google-g"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        ><path
          fill="currentColor"
          d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
        /></svg
      >
      Sign in with Harmony
    </button>

    <a href="/register">Join Harmony!</a>
  </form>
</div>
