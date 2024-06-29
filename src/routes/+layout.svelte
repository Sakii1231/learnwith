<script>
	import '../app.css';
	import NavBar from '$lib/components/NavBar.svelte';
	import img from '$lib/svg/backk.png';
	import { ModeWatcher } from 'mode-watcher';
	// export let data;
	// const list1 = (data.items)
</script>

<ModeWatcher />
<div
	class="h-screen w-screen bg-cover bg-center bg-no-repeat"
	style="background-image: url({img});"
>
	<NavBar></NavBar>
	<slot />
</div>

<style>
</style>
