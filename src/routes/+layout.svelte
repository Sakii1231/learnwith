<script>
import "../app.css";
import NavBar from "$lib/components/NavBar.svelte";
import img from '$lib/svg/backk.png';
import { ModeWatcher } from "mode-watcher";
// export let data;
// const list1 = (data.items)
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<style global>
  body {
    font-family: 'Oswald', sans-serif;
  }
</style>

<ModeWatcher />
<div class="w-screen h-screen bg-no-repeat bg-center bg-cover" style="background-image: url({img});">
    <NavBar></NavBar>
<slot />
</div>

<!-- <ul>
  {#each list1 as item}
    <li>{item.title}</li>
  {/each}
</ul> -->