<script>
import "../app.css";
import NavBar from "$lib/NavBar.svelte";
import img from '$lib/svg/backk.png';
import { json } from "@sveltejs/kit"

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

<div class="w-screen h-screen bg-no-repeat bg-center bg-cover" style="background-image: url({img});">
    <NavBar></NavBar>
<slot />
</div>

<!-- <ul>
  {#each list1 as item}
    <li>{item.title}</li>
  {/each}
</ul> -->