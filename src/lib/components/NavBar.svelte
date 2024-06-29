<script>
	import { draw } from 'svelte/transition';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import ToggleTh from '$lib/components/ToggleTh.svelte';
	let showMenu = false;
	let isTransitioning = false;

	function toggleMenu() {
		isTransitioning = true;
		showMenu = !showMenu;
	}
</script>

<nav class="flex items-center justify-between px-6 py-4 shadow-md">
	<ul class="space-x-6 md:flex">
		<li><a href="/" class="text-xl font-bold md:text-2xl lg:text-3xl">companyco.</a></li>
	</ul>

	<div class="flex items-center md:hidden">
		<button class="text-gray-700 hover:text-gray-900 focus:outline-none" on:click={toggleMenu}>
			{#if showMenu}
				<!-- Close Icon -->
				<svg
					class="h-6 w-6 dark:stroke-white"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
						in:draw={{ duration: 1500, delay: 0.1, easing: quintOut }}
					/>
				</svg>
			{:else}
				<!-- Hamburger Icon -->
				<svg
					class="h-6 w-6 dark:text-white"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M4 6H20M4 12H20M4 18H20"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						in:draw={{ duration: 1000, delay: 0.1, easing: quintOut }}
					/>
				</svg>
			{/if}
		</button>
		<div class="ml-6">
			<ToggleTh></ToggleTh>
		</div>
	</div>
	<ul class="hidden space-x-8 md:flex">
		<li><a href="course_details" class="md:text-lg lg:text-2xl">Course details</a></li>
		<li><a href="contact" class="md:text-lg lg:text-2xl">Contact</a></li>
		<ToggleTh></ToggleTh>
	</ul>
</nav>

{#if showMenu}
	<div
		class="md:hidden"
		transition:slide={{ delay: 0, duration: 300, easing: quintOut, axis: 'y' }}
	>
		<ul class="space-y-4 px-6 py-4 shadow-md">
			<li><a href="course_details" class="block text-lg font-[300]">Course details</a></li>
			<li><a href="contact" class="block text-lg font-[300]">Contact</a></li>
		</ul>
	</div>
{/if}

<!--
  @component
  ## this is a navbar
  
  -->
