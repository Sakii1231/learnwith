<script>
	export let label;
	export let onClick;
	export let myColor;
	export let type;
	export let tailwind_utils;
</script>

<div class="grid grid-cols-1 grid-rows-1">
	<button
		{type}
		id="animated-text"
		on:click={onClick}
		class="rounded-lg p-3 {myColor} z-10 col-start-1 row-start-1 m-6 text-xs font-semibold text-my_gray md:text-lg {tailwind_utils}"
		>{label}</button
	>
	<button
		class=" col-start-1 row-start-1 m-6 translate-x-1 translate-y-1 transform rounded-lg bg-foreground p-3 text-xs font-semibold dark:bg-slate-800 lg:text-lg {tailwind_utils}"
		>{label}</button
	>
</div>

<!-- 
@component
## Custom button component
#### Props to pass 

 - label = 'text'
 - onClick = {on_click_function}
 - myColor='bg-tailwindcolor'>

-->

<style>
	#animated-text {
		letter-spacing: normal;
		transition: letter-spacing 0.3s ease;
	}

	#animated-text:hover {
		letter-spacing: 0.06em;
	}
</style>
