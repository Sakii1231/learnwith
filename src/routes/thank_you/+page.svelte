<script lang="ts">
	import chat from '$lib/svg/Chat-Bot.svg';
	import wireless from '$lib/svg/Wireless-Technology.svg';
	import MyBtn from '$lib/components/MyBtn.svelte';
	import { goto } from '$app/navigation';

	function handgotohomeClick() {
		goto('/');
	}
</script>

<div class="md:grid-auto-flow-row grid grid-cols-1 md:grid-flow-row lg:grid-cols-3">
	<div class="m-20 flex hidden justify-center lg:block">
		<img class="hidden size-max" src={wireless} alt="tech1" />
	</div>
	<div class="mt-20 lg:mt-40">
		<h1
			class="text-center text-2xl font-extrabold md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl"
		>
			You're registered 🎉
		</h1>
		<h1
			class="text-center text-2xl font-extrabold md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl"
		></h1>
		<h1
			class="lg:text-md p-6 text-center text-xs font-light md:text-sm md:font-normal lg:font-medium"
		>
			Thank you for signing up with us. We will be sending you additional details about the course
			in the email that you have provided.
		</h1>
		<div class="flex justify-center">
			<MyBtn type="" label="Back to home" onClick={handgotohomeClick} myColor="bg-my_yellow"
			></MyBtn>
		</div>
	</div>
	<div class="ml-10 flex justify-center md:block lg:mt-80">
		<img class="" src={chat} alt="tech2" />
	</div>
</div>

<!-- <style>
.rainbow-text {
    background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.background {
    background-image: url({img});
}
</style> -->
